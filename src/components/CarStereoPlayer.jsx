import { useEffect, useRef, useState, useCallback } from "react";
import {
  Play,
  Pause,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Youtube,
  FileText,
  FileAudio2,
} from "lucide-react";
import { SiSpotify } from "react-icons/si";

// Picks a fitting icon per link based on its label, falling back to a generic
// download/external-link icon for anything that doesn't match a known pattern.
const linkIcon = (link) => {
  const label = link.label.toLowerCase();
  if (label.includes("spotify")) return SiSpotify;
  if (label.includes("watch") || label.includes("performance") || label.includes("video")) return Youtube;
  if (label.includes("pdf") || label.includes("score")) return FileText;
  if (label.includes("mscz") || label.includes("musescore")) return FileAudio2;
  return link.download ? Download : ExternalLink;
};

const BAR_COUNT = 28;
const SEGMENT_COUNT = 14;

// The chassis itself is a fixed, literal retro hardware palette - like the vinyl sleeves
// and the poetry page's wood bookshelf, the metal/plastic material doesn't go "light mode".
// The segment-display text, however, reuses the site's actual --primary token rather than
// an invented hex, so the console's "backlight" color always matches the rest of the site.
const COLORS = {
  rack: "linear-gradient(180deg, #333 0%, #1c1c1c 8%, #141414 92%, #0a0a0a 100%)",
  unitBg: "linear-gradient(180deg, #202020 0%, #161616 100%)",
  bezel: "#060606",
  screenBg: "#0c0909",
  text: "hsl(var(--primary))",
  textDim: "hsl(var(--primary) / 0.55)",
};

// The spectrum's LED ladder uses the site's actual --primary token (not a literal hex) so
// it tracks the real accent color/theme automatically, dimmer at the bottom and brighter
// toward the top of each column like a real VU meter's hot segments.
const LIT_SEGMENT_COLORS = Array.from({ length: SEGMENT_COUNT }, (_, s) => {
  const alpha = (0.35 + (s / (SEGMENT_COUNT - 1)) * 0.65).toFixed(2);
  return `hsl(var(--primary) / ${alpha})`;
});
const UNLIT_SEGMENT_COLOR = "hsl(var(--primary) / 0.07)";

const Screw = ({ style }) => (
  <div
    className="absolute rounded-full"
    style={{
      width: 6,
      height: 6,
      background: "radial-gradient(circle at 35% 35%, #555, #0a0a0a 70%)",
      boxShadow: "0 1px 1px rgba(0,0,0,0.8)",
      ...style,
    }}
  />
);

const CarStereoPlayer = ({ track, trackIndex, trackCount, onSeekNext, onSeekPrev }) => {
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const segmentRefs = useRef([]);
  const levelsRef = useRef(new Array(BAR_COUNT).fill(0));
  const rafRef = useRef(null);
  const dataArrayRef = useRef(null);
  const binRangesRef = useRef(null);
  const progressRef = useRef(null);
  const isDraggingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playable = Boolean(track.audioSrc);

  // Swapping tracks resets playback rather than carrying it over - seeking to a new
  // track should present a stopped deck, not keep the old track audible underneath.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    if (playable) {
      audio.src = track.audioSrc;
      audio.load();
    } else {
      audio.removeAttribute("src");
    }
  }, [track.audioSrc, playable]);

  const ensureAudioGraph = useCallback(() => {
    if (audioCtxRef.current) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContextClass();
    const analyser = ctx.createAnalyser();
    // A bigger FFT gives more low-frequency bins to subdivide finely - needed since the
    // log-scaled grouping below deliberately spends most of its resolution down there.
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.75;
    const source = ctx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
    sourceRef.current = source;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

    // getByteFrequencyData bins are linearly spaced in Hz, but music energy (and human
    // hearing) is logarithmic - grouping bins into equal-width linear chunks dumps nearly
    // everything into the first couple of bars. Precompute log-scaled [start, end) bin
    // ranges per bar instead, like a real spectrum analyzer / graphic EQ.
    const totalBins = analyser.frequencyBinCount;
    const ranges = [];
    for (let i = 0; i < BAR_COUNT; i++) {
      const start = Math.max(1, Math.floor(Math.pow(totalBins, i / BAR_COUNT)));
      const end = Math.max(start + 1, Math.floor(Math.pow(totalBins, (i + 1) / BAR_COUNT)));
      ranges.push([start, Math.min(end, totalBins)]);
    }
    binRangesRef.current = ranges;
  }, []);

  // Lights the bottom `litCount` segments of each column from a shared levels array, so
  // both the live audio-driven tick loop and the pause decay loop can share one renderer.
  const renderBars = useCallback((levels) => {
    for (let i = 0; i < BAR_COUNT; i++) {
      const litCount = Math.round((levels[i] / 100) * SEGMENT_COUNT);
      const segments = segmentRefs.current[i];
      if (!segments) continue;
      for (let s = 0; s < SEGMENT_COUNT; s++) {
        const seg = segments[s];
        if (!seg) continue;
        seg.style.background = s < litCount ? LIT_SEGMENT_COLORS[s] : UNLIT_SEGMENT_COLOR;
      }
    }
  }, []);

  const tick = useCallback(() => {
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;
    const ranges = binRangesRef.current;
    if (!analyser || !dataArray || !ranges) return;
    analyser.getByteFrequencyData(dataArray);
    const levels = levelsRef.current;
    for (let i = 0; i < BAR_COUNT; i++) {
      const [start, end] = ranges[i];
      let sum = 0;
      for (let j = start; j < end; j++) {
        sum += dataArray[j];
      }
      const avg = sum / (end - start);
      levels[i] = Math.max(2, Math.min(100, (avg / 255) * 100));
    }
    renderBars(levels);
    rafRef.current = requestAnimationFrame(tick);
  }, [renderBars]);

  // On pause, ease every column's level down to zero instead of snapping instantly, like a
  // real VU meter's needle settling back to rest.
  const decay = useCallback(() => {
    const levels = levelsRef.current;
    let anyAbove = false;
    for (let i = 0; i < BAR_COUNT; i++) {
      levels[i] *= 0.88;
      if (levels[i] < 0.5) {
        levels[i] = 0;
      } else {
        anyAbove = true;
      }
    }
    renderBars(levels);
    if (anyAbove) {
      rafRef.current = requestAnimationFrame(decay);
    }
  }, [renderBars]);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(isPlaying ? tick : decay);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, tick, decay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  // AudioContext must be created/resumed from inside a user gesture - lazily wiring it
  // up on first play (rather than on mount) keeps autoplay policies happy.
  const handlePlay = () => {
    if (!playable) return;
    ensureAudioGraph();
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!playable) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const seekToClientX = (clientX) => {
    const bar = progressRef.current;
    if (!playable || !duration || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    audioRef.current.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  // Pointer Events unify mouse and touch, so dragging the progress bar to scrub works
  // the same on desktop and mobile. setPointerCapture keeps receiving move events even
  // if the finger/cursor drifts outside the thin bar while dragging.
  const handleSeekPointerDown = (e) => {
    if (!playable || !duration) return;
    isDraggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    seekToClientX(e.clientX);
  };

  const handleSeekPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    seekToClientX(e.clientX);
  };

  const handleSeekPointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Always resolve the final drop position here too, not just on move - some input
    // pipelines coalesce or skip intermediate move events for a fast drag/tap-and-release.
    seekToClientX(e.clientX);
  };

  const formatTime = (s) => {
    if (!Number.isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${sec}`;
  };

  const progressPct = duration ? (currentTime / duration) * 100 : 0;

  const unitStyle = {
    background: COLORS.unitBg,
    border: `1px solid ${COLORS.bezel}`,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.4)",
  };

  const btnStyle = (active) => ({
    background: active ? "#141008" : "#1b1b1b",
    border: `1px solid ${COLORS.bezel}`,
    boxShadow: active
      ? "inset 0 2px 4px rgba(0,0,0,0.6)"
      : "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.4)",
    color: playable ? COLORS.text : "#4a4a4a",
  });

  return (
    <div
      className="relative rounded-xl p-3 md:p-4 w-full max-w-3xl space-y-2 md:space-y-2.5"
      style={{
        background: COLORS.rack,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.55)",
        border: "1px solid #050505",
      }}
    >
      <Screw style={{ top: 8, left: 8 }} />
      <Screw style={{ top: 8, right: 8 }} />
      <Screw style={{ bottom: 8, left: 8 }} />
      <Screw style={{ bottom: 8, right: 8 }} />

      <audio ref={audioRef} preload="metadata" />

      {/* Unit 1: LED frequency spectrum — a segmented ladder in the site's primary color */}
      <div
        className="flex items-stretch gap-[3px] md:gap-1 rounded-sm p-2 md:p-3"
        style={{ ...unitStyle, background: "#000", height: "clamp(72px, 14vw, 140px)" }}
      >
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <div key={i} className="flex-1 h-full flex flex-col-reverse gap-[2px]">
            {Array.from({ length: SEGMENT_COUNT }).map((_, s) => (
              <div
                key={s}
                ref={(el) => {
                  if (!segmentRefs.current[i]) segmentRefs.current[i] = [];
                  segmentRefs.current[i][s] = el;
                }}
                className="w-full flex-1 rounded-[1px]"
                style={{ background: UNLIT_SEGMENT_COLOR }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Unit 2: LCD — cover, title, progress */}
      <div className="rounded-sm p-3 md:p-4 flex gap-3 md:gap-4" style={{ ...unitStyle, background: COLORS.screenBg }}>
        <div
          className="shrink-0 rounded-sm overflow-hidden w-16 h-16 md:w-28 md:h-28"
          style={{ background: "#000", border: "1px solid #000" }}
        >
          {track.imageSrc ? (
            <img src={track.imageSrc} alt={track.title} className="w-full h-full object-cover opacity-90" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-[9px] md:text-xs" style={{ color: COLORS.textDim }}>
                NO ART
              </span>
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 flex flex-col justify-center gap-1.5 md:gap-2">
          <p className="font-mono text-sm md:text-xl truncate" style={{ color: COLORS.text }}>
            {track.title.toUpperCase()}
          </p>
          <p className="font-mono text-[10px] md:text-sm truncate" style={{ color: COLORS.textDim }}>
            {track.type}
          </p>

          <div
            ref={progressRef}
            className="relative h-1.5 md:h-2 rounded-sm cursor-pointer mt-1 touch-none py-2 -my-2"
            style={{ background: "transparent" }}
            onPointerDown={handleSeekPointerDown}
            onPointerMove={handleSeekPointerMove}
            onPointerUp={handleSeekPointerUp}
            onPointerCancel={() => (isDraggingRef.current = false)}
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 md:h-2 rounded-sm" style={{ background: "#1a1308" }}>
              <div
                className="h-full rounded-sm"
                style={{
                  width: `${playable ? progressPct : 0}%`,
                  background: COLORS.text,
                  transition: isDraggingRef.current ? "none" : "width 0.1s linear",
                }}
              />
            </div>
            {playable && (
              <div
                className="absolute top-1/2 rounded-full"
                style={{
                  left: `${progressPct}%`,
                  width: 12,
                  height: 12,
                  transform: "translate(-50%, -50%)",
                  background: COLORS.text,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.6)",
                }}
              />
            )}
          </div>
          <div className="flex justify-between font-mono text-[9px] md:text-xs" style={{ color: COLORS.textDim }}>
            <span>{playable ? formatTime(currentTime) : "--:--"}</span>
            <span>{playable ? formatTime(duration) : "--:--"}</span>
          </div>
        </div>
      </div>

      {/* Unit 3: transport controls */}
      <div className="rounded-sm p-2 md:p-2.5 flex gap-2 md:gap-2.5" style={unitStyle}>
        <button
          onClick={onSeekPrev}
          className="flex items-center justify-center gap-1 rounded-sm px-2.5 sm:px-3 md:px-4 font-mono text-[10px] md:text-xs tracking-wide"
          style={btnStyle(false)}
        >
          <ChevronLeft size={14} />
          <span className="hidden sm:inline">SEEK</span>
        </button>
        <button
          onClick={handlePlay}
          disabled={!playable}
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 rounded-sm py-2.5 md:py-3.5 font-mono text-[10px] md:text-sm tracking-wide disabled:cursor-not-allowed"
          style={btnStyle(isPlaying && playable)}
        >
          <Play size={14} fill={isPlaying && playable ? COLORS.text : "none"} />
          PLAY
        </button>
        <button
          onClick={handlePause}
          disabled={!playable}
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 rounded-sm py-2.5 md:py-3.5 font-mono text-[10px] md:text-sm tracking-wide disabled:cursor-not-allowed"
          style={btnStyle(!isPlaying && playable && currentTime > 0)}
        >
          <Pause size={14} fill={!isPlaying && playable && currentTime > 0 ? COLORS.text : "none"} />
          PAUSE
        </button>
        <button
          onClick={onSeekNext}
          className="flex items-center justify-center gap-1 rounded-sm px-2.5 sm:px-3 md:px-4 font-mono text-[10px] md:text-xs tracking-wide"
          style={btnStyle(false)}
        >
          <span className="hidden sm:inline">SEEK</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {trackCount > 0 && (
        <p className="text-center font-mono text-[10px] md:text-xs" style={{ color: COLORS.textDim }}>
          TRACK {String(trackIndex + 1).padStart(2, "0")} / {String(trackCount).padStart(2, "0")}
        </p>
      )}

      {/* Extra links (Spotify, video, score files, etc.) as preset-style buttons */}
      {track.links?.length > 0 && (
        <div className="rounded-sm p-2 md:p-2.5 flex gap-1.5 md:gap-2" style={unitStyle}>
          {track.links.map((link) => {
            const Icon = linkIcon(link);
            return (
              // Each button is its own container-query context, so its font-size (and the
              // icon/gap, both sized in em off of it) scales with the BUTTON's own width -
              // not a viewport breakpoint. Fewer links -> wider buttons -> bigger text, and
              // it adapts automatically if the number of links ever changes.
              <a
                key={link.label}
                href={link.url}
                target={link.download ? "_self" : "_blank"}
                rel="noopener noreferrer"
                download={link.download || undefined}
                className="flex-1 min-w-0 rounded-sm py-2.5 md:py-3.5 px-1 font-mono tracking-wide transition-colors"
                style={{
                  background: "#1b1b1b",
                  border: `1px solid ${COLORS.bezel}`,
                  color: COLORS.text,
                  containerType: "inline-size",
                }}
              >
                {/* cqw units can't resolve on the element that establishes the container
                    (circular - it can't size itself off its own query units), so the
                    container-type lives on the <a> above and the clamp()-driven size lives
                    on this child instead, with the icon/text/gap all scaling off of it. */}
                <span
                  className="flex items-center justify-center gap-[0.4em] min-w-0"
                  style={{ fontSize: "clamp(6px, 11cqw, 15px)" }}
                >
                  <Icon size="1.3em" className="shrink-0" />
                  <span className="truncate">{link.label}</span>
                </span>
              </a>
            );
          })}
        </div>
      )}

      {/* Unit 4: description readout */}
      <div className="rounded-sm p-3 md:p-4 max-h-28 md:max-h-36 overflow-y-auto" style={{ ...unitStyle, background: COLORS.screenBg }}>
        <p className="font-mono text-[9px] md:text-xs leading-relaxed" style={{ color: COLORS.textDim }}>
          {track.description}
        </p>
      </div>
    </div>
  );
};

export { CarStereoPlayer };
