import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

const poemModules = import.meta.glob("../content/poetry/**/*.json", { eager: true });

export const PoetryDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const entry = Object.entries(poemModules).find(([path]) =>
    path.endsWith(`/${slug}.json`)
  );
  const poem = entry ? entry[1] : null;

  if (!poem) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <ParticleBackground />
        <div className="text-center z-10">
          <h2 className="text-2xl font-bold mb-4">Poem not found</h2>
          <Link to="/poetry" className="cosmic-button">
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  const stanzas = poem.body.split("\n\n");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ParticleBackground />

      <section className="py-24 px-4 relative">
        <div className="container bg-background/65 rounded-lg p-6 mx-auto max-w-2xl">
          <Link
            to="/poetry"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Library
          </Link>

          <article className="text-left">
            <h1
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{ color: poem.color }}
            >
              {poem.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-10">{poem.date}</p>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-10" />

            <div className="space-y-8 leading-relaxed">
              {stanzas.map((stanza, i) => (
                <div key={i}>
                  {stanza.split("\n").map((line, j) => (
                    <p key={j} className="text-foreground text-base md:text-lg">
                      {line || " "}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
