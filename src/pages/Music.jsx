import { useEffect, useCallback, useState } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CarStereoPlayer } from "@/components/CarStereoPlayer";
import { Music2 } from "lucide-react";
import tracks from "../content/music/tracks.json";

export const Music = () => {
  const [idx, setIdx] = useState(0);
  const n = tracks.length;
  const track = tracks[idx];

  const seek = useCallback(
    (dir) => {
      setIdx((i) => (dir === "next" ? (i + 1) % n : (i - 1 + n) % n));
    },
    [n]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); seek("next"); }
      if (e.key === "ArrowLeft") { e.preventDefault(); seek("prev"); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [seek]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ParticleBackground />

      <section className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-20">
        <div className="text-center z-10 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <Music2 className="h-8 w-8 text-primary opacity-0 animate-fade-in" />
            <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in">
              My <span className="text-primary">Music</span>
            </h1>
          </div>
          <p className="text-muted-foreground opacity-0 animate-fade-in-delay-1">
            Seek through the deck to flip tracks.
          </p>
        </div>

        <CarStereoPlayer
          track={track}
          trackIndex={idx}
          trackCount={n}
          onSeekNext={() => seek("next")}
          onSeekPrev={() => seek("prev")}
        />
      </section>
    </div>
  );
};
