import { useState, useEffect, useCallback } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BookOpen, ArrowDown, X } from "lucide-react";

const poemModules = import.meta.glob("../content/poetry/**/*.json", { eager: true });

function djb2(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return Math.abs(h);
}

const allPoems = Object.entries(poemModules).map(([path, data]) => {
  const parts = path.split("/");
  const filename = parts[parts.length - 1].replace(".json", "");
  const parent = parts[parts.length - 2];
  const genre = parent === "poetry" ? "general" : parent;
  const h = djb2(filename);
  return {
    slug: filename,
    genre,
    color: data.color,
    height: 90 + (h % 8) * 10,
    width: 22 + ((h >> 4) % 5) * 6,
    ...data,
  };
});

const byGenre = allPoems.reduce((acc, poem) => {
  (acc[poem.genre] ||= []).push(poem);
  return acc;
}, {});

const formatGenre = (s) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/* Journal modal — single page of paper */
const JournalModal = ({ poem, onClose }) => {
  const dark = document.documentElement.classList.contains("dark");

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const stanzas = poem.body.split("\n\n");

  const page = dark
    ? { bg: "#1c1812", text: "#ddd5c0", muted: "rgba(210,195,165,0.38)", line: "rgba(255,255,255,0.032)" }
    : { bg: "#f2ede0", text: "#2a1e14", muted: "rgba(80,60,40,0.45)", line: "rgba(100,85,60,0.09)" };

  const RULED = `repeating-linear-gradient(transparent 0px, transparent 27px, ${page.line} 27px, ${page.line} 28px)`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-10"
      style={{ backdropFilter: "blur(5px)", background: "rgba(0,0,0,0.58)" }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: 560,
          width: "100%",
          maxHeight: "88vh",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.35)",
          animation: "journal-open 0.25s cubic-bezier(0.2,0,0.2,1) forwards",
          background: page.bg,
          backgroundImage: RULED,
          backgroundPosition: "0 108px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 14,
            color: page.muted,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 4,
            lineHeight: 0,
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = page.text)}
          onMouseLeave={(e) => (e.currentTarget.style.color = page.muted)}
        >
          <X size={15} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto" style={{ padding: "clamp(20px, 5vw, 44px)" , paddingTop: 36, paddingBottom: 48 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: poem.color, lineHeight: 1.25, marginBottom: 6, textAlign: "left" }}>
            {poem.title}
          </h1>
          <p style={{ fontSize: 10, letterSpacing: "0.07em", color: page.muted, marginBottom: 24, textTransform: "uppercase", textAlign: "left" }}>
            {poem.date}
          </p>
          <div style={{ height: 1, background: `linear-gradient(to right, ${poem.color}55, transparent)`, marginBottom: 28 }} />

          <div style={{ color: page.text }}>
            {stanzas.map((stanza, i) => (
              <div key={i} style={{ marginBottom: 28 }}>
                {stanza.split("\n").map((line, j) => (
                  <p key={j} style={{ fontSize: 14, lineHeight: "27px", margin: 0, textAlign: "left" }}>
                    {line || " "}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* Book spine */
const BookSpine = ({ poem, onEnter, onLeave, onSelect }) => {
  const [lifted, setLifted] = useState(false);

  return (
    <div
      className="flex-shrink-0 block"
      style={{ cursor: "pointer" }}
      onMouseEnter={(e) => { setLifted(true); onEnter(poem, e.currentTarget.getBoundingClientRect()); }}
      onMouseLeave={() => { setLifted(false); onLeave(); }}
      onClick={() => onSelect(poem)}
    >
      <div
        style={{
          height: poem.height,
          width: poem.width,
          backgroundColor: poem.color,
          position: "relative",
          transform: lifted
            ? "translateY(-20px) rotateX(-6deg)"
            : "translateY(0) rotateX(0deg)",
          boxShadow: lifted
            ? "3px 10px 28px rgba(0,0,0,0.65), -1px 0 8px rgba(0,0,0,0.3)"
            : "inset -1px 0 0 rgba(0,0,0,0.2)",
          transition: "transform 0.22s cubic-bezier(0.2,0,0.2,1), box-shadow 0.22s ease",
          willChange: "transform",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.1))" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.12)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(0,0,0,0.3)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 2px", overflow: "hidden" }}>
          <span style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            fontSize: poem.width < 30 ? 8 : poem.width < 40 ? 9 : 10,
            lineHeight: 1.2,
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 1px 4px rgba(0,0,0,0.7)",
            fontWeight: 500,
            overflow: "hidden",
            maxHeight: poem.height - 16,
            display: "block",
          }}>
            {poem.title}
          </span>
        </div>
      </div>
    </div>
  );
};

/* Single shelf row */
const ShelfRow = ({ genre, poems, onSelect }) => {
  const [hoverInfo, setHoverInfo] = useState(null);

  const handleEnter = useCallback((poem, rect) => setHoverInfo({ poem, rect }), []);
  const handleLeave = useCallback(() => setHoverInfo(null), []);

  return (
    <div>
      <div style={{ background: "var(--wood-back)", position: "relative" }}>
        {/* Centered shelf sign */}
        <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.28)", borderBottom: "1px solid rgba(0,0,0,0.22)" }}>
          <div style={{
            background: "hsla(350,58%,44%,0.18)",
            border: "1px solid hsla(350,58%,58%,0.45)",
            borderRadius: 4,
            padding: "4px 18px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "hsl(350,80%,80%)" }}>
              {formatGenre(genre)}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 1, padding: "28px 10px 0", overflowX: "auto", overflowY: "visible", scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.06) transparent", perspective: "480px", perspectiveOrigin: "center 85%", minHeight: 110 }}>
          {poems.map((poem) => (
            <BookSpine
              key={poem.slug}
              poem={poem}
              onEnter={handleEnter}
              onLeave={handleLeave}
              onSelect={onSelect}
            />
          ))}
          <div style={{ flexShrink: 0, width: 14 }} />
        </div>
      </div>

      {/* Fixed tooltip above hovered book */}
      {hoverInfo && (
        <div
          style={{
            position: "fixed",
            left: hoverInfo.rect.left + hoverInfo.rect.width / 2,
            top: hoverInfo.rect.top - 10,
            transform: "translate(-50%, -100%)",
            zIndex: 200,
            pointerEvents: "none",
          }}
        >
          <div style={{
            background: "rgba(18,13,8,0.93)",
            color: "rgba(255,228,185,0.96)",
            padding: "5px 11px",
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 500,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,210,155,0.18)",
          }}>
            {hoverInfo.poem.title}
          </div>
          <div style={{
            position: "absolute",
            bottom: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid rgba(18,13,8,0.93)",
          }} />
        </div>
      )}
    </div>
  );
};

/* Plank */
const Plank = ({ thick = false }) => (
  <div style={{ height: thick ? 28 : 20, background: "linear-gradient(to bottom, var(--wood-plank-light) 0%, var(--wood-plank-mid) 55%, var(--wood-plank-dark) 100%)", boxShadow: "0 4px 12px rgba(0,0,0,0.5)", position: "relative", zIndex: 2, flexShrink: 0 }}>
    <div style={{ height: 2, background: "rgba(255,255,255,0.2)" }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: "rgba(0,0,0,0.38)" }} />
  </div>
);

/* Bookcase */
const Bookcase = ({ entries, onSelect }) => (
  <div
    className="rounded-xl overflow-hidden"
    style={{
      background: `linear-gradient(to right, var(--wood-plank-dark) 0%, var(--wood-border) 6%, var(--wood-border) 94%, var(--wood-plank-dark) 100%)`,
      padding: "0 16px",
      boxShadow: "0 20px 56px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
    }}
  >
    <Plank thick />
    {entries.map(([genre, poems]) => (
      <div key={genre}>
        <ShelfRow genre={genre} poems={poems} onSelect={onSelect} />
        <Plank />
      </div>
    ))}
    <div style={{ height: 36, margin: "0 -16px", background: "linear-gradient(to bottom, var(--wood-plank-mid), var(--wood-plank-dark))", boxShadow: "inset 0 3px 6px rgba(0,0,0,0.35)", position: "relative" }}>
      <div style={{ height: 2, background: "rgba(255,255,255,0.07)" }} />
    </div>
  </div>
);

/* Page */
export const Poetry = () => {
  const genreEntries = Object.entries(byGenre);
  const [selectedPoem, setSelectedPoem] = useState(null);

  const handleSelect = useCallback((poem) => setSelectedPoem(poem), []);
  const handleClose = useCallback(() => setSelectedPoem(null), []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ParticleBackground />

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center pt-20 pb-8 px-4">
        <div className="text-center z-10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="h-8 w-8 text-primary opacity-0 animate-fade-in" />
            <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in">
              Poetry <span className="text-primary">Library</span>
            </h1>
          </div>
          <p className="text-muted-foreground opacity-0 animate-fade-in-delay-1">
            Hover to peek · click to read.
          </p>
        </div>
        <a href="#shelves" className="flex flex-col items-center gap-1 animate-bounce mt-6">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </section>

      {/* Shelves */}
      <section id="shelves" className="py-12 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          {genreEntries.length === 0 ? (
            <p className="text-center text-muted-foreground">No poems yet.</p>
          ) : (
            <Bookcase entries={genreEntries} onSelect={handleSelect} />
          )}
        </div>
      </section>

      {/* Journal modal */}
      {selectedPoem && (
        <JournalModal poem={selectedPoem} onClose={handleClose} />
      )}
    </div>
  );
};
