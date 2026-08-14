import { useState, useEffect, useRef, useCallback } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExternalLink, Download, ArrowDown, X, Music2 } from "lucide-react";
import tracks from "../content/music/tracks.json";

const DRAG_THRESHOLD = 55;
const CLICK_THRESHOLD = 8;

const Sleeve = ({ track, style, handlers }) => (
  <div
    className="absolute select-none touch-none"
    style={{ width: 220, height: 220, ...style }}
    {...handlers}
  >
    <div
      className="w-full h-full rounded-lg shadow-2xl relative overflow-hidden"
      style={{ backgroundColor: "#111", border: "2px solid #2a2a2a" }}
    >
      {/* Color band */}
      <div
        className="absolute inset-x-0 top-0"
        style={{ height: "45%", background: `linear-gradient(135deg, ${track.color}, ${track.color}88)` }}
      />
      {/* Vinyl disc */}
      <div
        className="absolute rounded-full"
        style={{
          width: 110, height: 110,
          top: "50%", left: "50%",
          transform: "translate(-50%, -38%)",
          background: "repeating-radial-gradient(circle at center, #161616 0px, #222 1.2px, #161616 2.4px, #161616 9px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
          zIndex: 2,
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: "38%", height: "38%", backgroundColor: track.color, boxShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/70" />
        </div>
      </div>
      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p className="text-white text-xs font-semibold truncate leading-tight">{track.title}</p>
        <p className="text-white/40 text-[10px] truncate mt-0.5">{track.type}</p>
      </div>
    </div>
  </div>
);

const TrackModal = ({ track, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(0,0,0,0.55)", animation: "quick-fade 0.15s ease-out forwards" }}
      onClick={onClose}
    >
      <div
        className="gradient-border rounded-xl p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto space-y-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div>
          <h2 className="text-2xl font-bold pr-8" style={{ color: track.color }}>
            {track.title}
          </h2>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            <span className="text-xs border border-border rounded-full px-2 py-0.5 text-muted-foreground">
              {track.type}
            </span>
            <span className="text-xs text-muted-foreground">{track.date}</span>
          </div>
        </div>

        {track.imageSrc && (
          <img src={track.imageSrc} alt={track.title} className="w-28 h-28 object-cover rounded-md" />
        )}

        <p className="text-muted-foreground text-sm leading-relaxed">{track.description}</p>

        {track.audioSrc && (
          <div>
            <p className="text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wide">Listen</p>
            <audio controls className="w-full">
              <source src={track.audioSrc} type="audio/wav" />
            </audio>
          </div>
        )}

        {track.links && track.links.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {track.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.download ? "_self" : "_blank"}
                rel="noopener noreferrer"
                download={link.download || undefined}
                className="cosmic-button text-sm flex items-center gap-1.5"
              >
                {link.download ? <Download size={13} /> : <ExternalLink size={13} />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const VinylPlayer = ({ track }) => (
  <div className="gradient-border rounded-2xl p-6 flex flex-col items-center gap-4">
    <div className="relative" style={{ width: 180, height: 180 }}>
      <div
        className="rounded-full w-full h-full"
        style={{
          background: "repeating-radial-gradient(circle at center, #1c1c1c 0px, #252525 1.5px, #1c1c1c 3px, #1c1c1c 11px)",
          animation: "spin-record 7s linear infinite",
          boxShadow: "0 0 30px rgba(0,0,0,0.65), 0 12px 32px rgba(0,0,0,0.45)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: "36%", height: "36%", backgroundColor: track.color, boxShadow: "0 2px 10px rgba(0,0,0,0.5)", transition: "background-color 0.4s ease" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black/70" />
        </div>
      </div>
      {/* Tonearm */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "46%", height: "2px",
          background: "linear-gradient(to left, #777, #bbb)",
          top: "12%", right: "-5%",
          transformOrigin: "right center",
          transform: "rotate(-28deg)",
          borderRadius: "1px",
        }}
      >
        <div
          className="absolute left-[-2px] -translate-y-1/2"
          style={{ width: 6, height: 12, background: "#aaa", clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)" }}
        />
        <div className="absolute right-[-5px] -translate-y-1/2 w-3 h-3 rounded-full bg-gray-500 border border-gray-400" />
      </div>
    </div>
    <div className="text-center">
      <p className="font-semibold text-sm" style={{ color: track.color, transition: "color 0.4s ease" }}>{track.title}</p>
      <p className="text-xs text-muted-foreground">{track.date}</p>
    </div>
  </div>
);

export const Music = () => {
  const [idx, setIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [exitDir, setExitDir] = useState(null);

  const pointerStart = useRef(null);
  const hasDragged = useRef(false);

  const n = tracks.length;
  const track = tracks[idx];

  const advance = useCallback((dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExitDir(dir);
    setTimeout(() => {
      setIdx((i) => dir === "left" ? (i + 1) % n : (i - 1 + n) % n);
      setExitDir(null);
      setDragX(0);
      setIsAnimating(false);
    }, 280);
  }, [isAnimating, n]);

  useEffect(() => {
    const onKey = (e) => {
      if (modalOpen) return;
      if (e.key === " " || e.key === "ArrowRight") { e.preventDefault(); advance("left"); }
      if (e.key === "ArrowLeft") { e.preventDefault(); advance("right"); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, modalOpen]);

  const onPointerDown = useCallback((e) => {
    if (isAnimating) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pointerStart.current = { x: e.clientX };
    hasDragged.current = false;
  }, [isAnimating]);

  const onPointerMove = useCallback((e) => {
    if (!pointerStart.current) return;
    const dx = e.clientX - pointerStart.current.x;
    if (Math.abs(dx) > CLICK_THRESHOLD) hasDragged.current = true;
    setDragX(dx);
  }, []);

  const onPointerUp = useCallback((e) => {
    if (!pointerStart.current) return;
    const dx = e.clientX - pointerStart.current.x;
    pointerStart.current = null;

    if (!hasDragged.current) {
      setDragX(0);
      setModalOpen(true);
    } else if (dx < -DRAG_THRESHOLD) {
      advance("left");
    } else if (dx > DRAG_THRESHOLD) {
      advance("right");
    } else {
      setDragX(0);
    }
    hasDragged.current = false;
  }, [advance]);

  // How far along the flip gesture we are (0–1)
  const flipProgress = Math.min(1, Math.max(0, -dragX) / DRAG_THRESHOLD);
  const prevProgress = Math.min(1, Math.max(0, dragX) / DRAG_THRESHOLD);

  // Resting rotateX values for each position in the crate
  const RX_FRONT = 6;
  const RX_MID   = 20;
  const RX_BACK  = 34;

  // Front card: tilts back (rotateX ↑) when dragging left, tilts toward viewer when dragging right
  const frontRX = exitDir === "left"
    ? 84
    : exitDir === "right"
    ? -22
    : RX_FRONT + flipProgress * (84 - RX_FRONT) - prevProgress * 14;

  // Mid card eases toward front as front card tilts back
  const midRX = exitDir
    ? RX_FRONT
    : RX_MID - flipProgress * (RX_MID - RX_FRONT);

  const backRX = exitDir
    ? RX_MID
    : RX_BACK - flipProgress * (RX_BACK - RX_MID);

  const ORIGIN = "50% 100%"; // all cards pivot at their bottom edge

  const frontStyle = {
    zIndex: 30,
    transformOrigin: ORIGIN,
    transform: `rotateX(${frontRX}deg)`,
    opacity: exitDir ? 0 : 1,
    transition: exitDir
      ? "transform 0.26s ease-in, opacity 0.16s ease-in 0.08s"
      : dragX !== 0 ? "none" : "transform 0.18s ease-out",
    cursor: exitDir ? "default" : "grab",
  };

  const midStyle = {
    zIndex: 20,
    transformOrigin: ORIGIN,
    transform: `rotateX(${midRX}deg) translateY(12px)`,
    transition: "transform 0.28s ease-out",
  };

  const backStyle = {
    zIndex: 10,
    transformOrigin: ORIGIN,
    transform: `rotateX(${backRX}deg) translateY(24px)`,
    transition: "transform 0.28s ease-out",
  };

  const frontHandlers = { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ParticleBackground />

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center pt-20 pb-8 px-4">
        <div className="text-center z-10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Music2 className="h-8 w-8 text-primary opacity-0 animate-fade-in" />
            <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in">
              My <span className="text-primary">Music</span>
            </h1>
          </div>
          <p className="text-muted-foreground opacity-0 animate-fade-in-delay-1">
            Drag to rifle through the crate — click to open.
          </p>
        </div>
        <a href="#crate" className="flex flex-col items-center gap-1 animate-bounce mt-6">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </section>

      {/* Crate */}
      <section id="crate" className="py-12 px-4 relative">
        <div className="mx-auto max-w-5xl bg-background/65 rounded-lg p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">

            {/* Left: record crate */}
            <div className="flex flex-col items-center gap-6">
              {/* Title above stack */}
              <div className="h-16 flex flex-col items-center justify-center gap-0.5 text-center">
                <p
                  className="text-2xl font-bold"
                  style={{ color: track.color, transition: "color 0.3s ease" }}
                >
                  {track.title}
                </p>
                <p className="text-sm text-muted-foreground">{track.type} · {track.date}</p>
              </div>

              {/* Card stack — perspective set here for crate view */}
              <div
                className="relative"
                style={{
                  width: 240,
                  height: 260,
                  perspective: "580px",
                  perspectiveOrigin: "50% -30px",
                }}
              >
                <Sleeve track={tracks[(idx + 2) % n]} style={backStyle} handlers={{}} />
                <Sleeve track={tracks[(idx + 1) % n]} style={midStyle} handlers={{}} />
                <Sleeve track={track} style={frontStyle} handlers={frontHandlers} />
              </div>

              {/* Hints */}
              <div className="text-center space-y-1.5">
                <p className="text-xs text-muted-foreground">
                  Drag or{" "}
                  <kbd className="px-1 py-0.5 rounded border border-border text-[10px]">Space</kbd>{" "}
                  /{" "}
                  <kbd className="px-1 py-0.5 rounded border border-border text-[10px]">→</kbd>{" "}
                  to flip · tap to open
                </p>
                <p className="text-xs text-muted-foreground tabular-nums">
                  {idx + 1} / {n}
                </p>
              </div>
            </div>

            {/* Right: record player (desktop only) */}
            <div className="hidden lg:block pt-16">
              <VinylPlayer track={track} />
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <TrackModal track={track} onClose={() => setModalOpen(false)} />}
    </div>
  );
};
