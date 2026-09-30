import { useState, useEffect } from "react";
import { ClipboardList, Code, Linkedin, Music, ListMusic, Users } from "lucide-react";

export const AboutSection = () => {
        const [isDarkMode, setIsDarkMode] = useState(true);

        useEffect(() => {
  const updateTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme !== "light");
  };

  // Run immediately on mount
  updateTheme();

  // Listen for changes (works when ThemeToggle updates localStorage)
  window.addEventListener("storage", updateTheme);

  return () => window.removeEventListener("storage", updateTheme);
}, []);

        return (
                <section id="about" className="pt-6 pb-14 px-4 relative">
                <div className="mx-auto max-w-5xl bg-background/65 rounded-lg p-4 md:p-6">
                <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                                About <span className="text-primary">Me</span>
                        </h2>

                        <div 
                         className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                                <div className="space-y-6">
                                        <h3 className="text-2xl font-semibold"> Passionate Backend-Developer</h3>

                                        <p className="text-muted-foreground text-left">
                                                A recent Tufts University graduate with a Bachelor of Science in Computer Science, 
                                                I specialize in backend development and creating robust, efficient systems.
                                        </p>

                                        <p className="text-muted-foreground text-left">
                                                I'm passionate about finding unique solutions
                                                to engineering problems that enhance the quality
                                                of life of those who are touched by my code. 
                                                I'm constantly learning new technologies and 
                                                adapting my way of thinking to stay at the 
                                                leading edge of the ever-changing coding 
                                                landscape while growing as a teammate 
                                                and problem-solver.
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4 pt-4 justify-center">
                                                <a href="#contact" className="cosmic-button whitespace-nowrap">
                                                        {" "}
                                                        Get In Touch
                                                </a>

                                                <a href="/resume/Roan_Yeh_Resume_2026_updated.pdf"
                                                download
                                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 whitespace-nowrap"
                                                >
                                                        {" "}
                                                        Download Resume
                                                </a>

                                                <a href="https://www.linkedin.com/in/roan-yeh-4340aa260/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="View my work experience on LinkedIn"
                                                aria-label="View my work experience on LinkedIn"
                                                className="h-10 w-10 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center shrink-0"
                                                >
                                                        <Linkedin className="h-4 w-4" />
                                                </a>
                                        </div>
                                        <h3 className="text-2xl font-semibold"> Avid Music Producer and Listener</h3>

                                        <p className="text-muted-foreground text-left">
                                                After being bribed by my mom with two crack-open geodes to audition for the 
                                                National Children's Chorus at age 8, I've been hooked on music. 
                                                From the first song I listen to when I get out of bed in the morning, 
                                                to the trips and performances I've had with my a cappella group 
                                                The Tufts Beelzebubs, to the overdone shower karaoke that drives my 
                                                housemates insane, to the late-night music production sessions I lose 
                                                precious hours of sleep to, music shapes who I am. 
                                                I minored in music engineering and am still obsessively fine-tuning my tracks, 
                                                so forgive me if there's not much on Spotify (yet).
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                                                <a href="https://open.spotify.com/artist/5nLkNqueZ7b2ahL6188q5A?si=nfvUkmaCRfmCa5tU_tSi_w" 
                                                target="_blank"
                                                className="cosmic-button flex items-center justify-center space-x-2"
                                                >
                                                        {" "}
                                                        <Music className="" />
                                                        <span>Check Out My Music!</span>
                                                </a>
                                        </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                        <div className="gradient-border p-6 card-hover">
                                                <div className="flex items-start gap-4">
                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                <Code className="h-6 w-6 text-primary"/>
                                                        </div>
                                                        <div className="text-left">
                                                                <h4 className="font-semibold text-lg">
                                                                        Backend Development
                                                                </h4>
                                                                <p className="text-muted-foreground">
                                                                        Building efficient, reliable backend systems and APIs.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="gradient-border p-6 card-hover">
                                                <div className="flex items-start gap-4">
                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                <ClipboardList className="h-6 w-6 text-primary"/>
                                                        </div>
                                                        <div className="text-left">
                                                                <h4 className="font-semibold text-lg">
                                                                        Project Management
                                                                </h4>
                                                                <p className="text-muted-foreground">
                                                                        Scoping requirements and keeping projects on track from start to ship.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="gradient-border p-6 card-hover">
                                                <div className="flex items-start gap-4">
                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                <Users className="h-6 w-6 text-primary"/>
                                                        </div>
                                                        <div className="text-left">
                                                                <h4 className="font-semibold text-lg">
                                                                        Client-Facing Engineering
                                                                </h4>
                                                                <p className="text-muted-foreground">
                                                                        From hotel front desk service to gathering requirements as the sole
                                                                        developer at Fenton & Ross, I'm at home working directly with the
                                                                        people who use what I build.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="gradient-border p-6 card-hover">
                                                <div className="flex items-start gap-4">
                                                {/* Icon */}
                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                <ListMusic className="h-6 w-6 text-primary" />
                                                        </div>

                                                        <div className="text-left mb-4">
                                                                <h4 className="font-semibold text-lg">
                                                                        My Favorite Song From Each Year 
                                                                </h4>
                                                                <p className="text-muted-foreground">
                                                                        (2010 - present)
                                                                </p>
                                                        </div>
                                                </div>

                                                {/* Desktop */}
                                                <iframe
                                                 key={isDarkMode ? "dark" : "light"}
                                                 src={`https://open.spotify.com/embed/playlist/6EcNO1jx4QGztI6qdvhayU?&theme=${isDarkMode ? 0 : 1}`}
                                                 className="hidden md:block w-full h-[352px] rounded-lg"
                                                 frameBorder="0"
                                                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                 allowFullScreen
                                                 loading="lazy"
                                                ></iframe>

                                                {/* Mobile: responsive ratio */}
                                                <div className="relative w-full md:hidden" style={{ paddingBottom: '5%' }}>
                                                        <iframe
                                                        key={isDarkMode ? "dark-mobile" : "light-mobile"}
                                                        src={`https://open.spotify.com/embed/playlist/6EcNO1jx4QGztI6qdvhayU?&theme=${isDarkMode ? 0 : 1}`}
                                                        className="w-full h-[500px] rounded-lg rounded-lg"
                                                        frameBorder="0"
                                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                        loading="lazy"
                                                        ></iframe>
                                                </div>
                        
                                        </div>

                                </div>
                        </div>
                        <div className="flex flex-col items-center gradient-border-faded p-6 mt-6 gap-6">
                                <div className="gradient-border card-hover rounded-lg overflow-hidden">
                                        {/* Images at the top */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <img
                                                src="/pictures/family-pic2.webp"
                                                alt="family-pic2"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                                <img
                                                src="/pictures/family-pic.webp"
                                                alt="family-pic"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                        </div>

                                        {/* Text content below */}
                                        <div className="text-left p-4">
                                                <h4 className="text-center font-semibold text-2xl mb-2">My family</h4>
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                My brother Patrick, my Yeye William, my dad Michael, my stepmom Shannon, me 
                                                (the guy in the purple-ish shirt), and the cutest one of all, my dog, the 
                                                one and only Loaf, Auggie. Taken in June 2024.
                                                </p>
                                        </div>
                                </div>

                                <div className="gradient-border card-hover rounded-lg overflow-hidden">
                                        {/* Images at the top */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <img
                                                src="/pictures/grad-pic1.webp"
                                                alt="grad-pic1"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                                <img
                                                src="/pictures/friend-pic2.webp"
                                                alt="friend-pic2"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                        </div>

                                        {/* Text content below */}
                                        <div className="text-left p-4">
                                                <h4 className="text-center font-semibold text-2xl mb-2">My Friends</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                Some of my Tufts friends and I in front of Halligan Hall (where it all began)
                                                for our graduation photoshoot. 
                                                Thanks for taking the picture, Ajubee!


                                                </p>
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                Me and my high school friends at Mama Lion (it's alright) in Koreatown back home
                                                in Los Angeles.
                                                </p>
                                                </div>
                                        </div>
                                </div>

                                <div className="gradient-border card-hover rounded-lg overflow-hidden">
                                        {/* Images at the top */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <img
                                                src="/pictures/the-bubs2.webp"
                                                alt="the-bubs2"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                                <img
                                                src="/pictures/friend-pic1.webp"
                                                alt="friend-pic1"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                        </div>

                                        {/* Text content below */}
                                        <div className="text-left p-4">
                                                <h4 className="text-center font-semibold text-2xl mb-2">My Friends pt. 2</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                My a cappella group, The Tufts Beelzebubs, circa October 2024 at our fall photoshoot.
                                                A legendary chapter. Thanks for a great year of singing guys!


                                                </p>
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                Some more of my Tufts friends and I at the Keukenhof Gardens in the Netherlands
                                                during our 2025 spring break trip.
                                                </p>
                                                </div>
                                        </div>
                                </div>
                                <div className="gradient-border card-hover rounded-lg overflow-hidden">
                                        {/* Images at the top */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <img
                                                src="/pictures/friend-pic3.webp"
                                                alt="friend-pic3"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                                <img
                                                src="/pictures/friend-pic4.webp"
                                                alt="friend-pic4"
                                                className="w-full aspect-[3/2] object-cover"
                                                />
                                        </div>

                                        {/* Text content below */}
                                        <div className="text-left p-4">
                                                <h4 className="text-center font-semibold text-2xl mb-2">My Friends pt. 3</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                The Catan Squad pre Sammy Virji at the Historic Sears Building in LA.


                                                </p>
                                                <p className="text-muted-foreground mx-auto max-w-xl text-center">
                                                Theo, Ed, and me vs. Nicky Romero at Academy LA. The techiness knows no bounds.
                                                </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                                
                </div>
                </div>
                </section>
        );
};