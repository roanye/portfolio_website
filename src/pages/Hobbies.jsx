import { Link } from "react-router-dom";
import { BookOpen, Music2, ArrowDown } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

const hobbies = [
  {
    icon: BookOpen,
    title: "Poetry",
    description:
      "Writing has always been a way for me to make sense of things. Browse my poetry library — everything from quick observations to longer meditations.",
    link: "/poetry",
    label: "Browse Library",
  },
  {
    icon: Music2,
    title: "Music",
    description:
      "Singing, music production, and a cappella with The Tufts Beelzebubs. I minored in music engineering at Tufts and still obsessively fine-tune tracks.",
    link: "/music",
    label: "Spin the Record",
  },
];

export const Hobbies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ParticleBackground />

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center pt-20 pb-8 px-4"
      >
        <div className="text-center z-10 space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in">
            My <span className="text-primary">Hobbies</span>
          </h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in-delay-1">
            Beyond coding — the things that keep me sane and whole.
          </p>
        </div>
        <a
          href="#content"
          className="flex flex-col items-center gap-1 animate-bounce mt-6"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </section>

      {/* Cards */}
      <section id="content" className="py-12 px-4 relative">
        <div className="mx-auto max-w-4xl bg-background/65 rounded-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map(({ icon: Icon, title, description, link, label }) => (
              <div
                key={title}
                className="gradient-border card-hover rounded-lg p-8 flex flex-col gap-5"
              >
                <div className="p-3 rounded-full bg-primary/10 w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-left">{title}</h2>
                <p className="text-muted-foreground text-left flex-1">{description}</p>
                <Link to={link} className="cosmic-button w-fit">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
