import { useState, useEffect } from "react";
import { Briefcase, Code, Music, ListMusic } from "lucide-react";

export const AboutSection = () => {
        const [isDarkMode, setIsDarkMode] = useState(true);

        useEffect(() => {
  const updateTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
  };

  // Run immediately on mount
  updateTheme();

  // Listen for changes (works when ThemeToggle updates localStorage)
  window.addEventListener("storage", updateTheme);

  return () => window.removeEventListener("storage", updateTheme);
}, []);

        return (
                <section id="about" className="py-24 px-4 relative">
                <div className="container bg-background/65 rounded-lg p-6">
                {" "}
                <div
                        className="container mx-auto max-w-5xl">
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

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                                <a href="#contact" className="cosmic-button"> 
                                                        {" "}
                                                        Get In Touch
                                                </a>

                                                <a href="/resume/Roan_Yeh_Resume_2025_fall.pdf"
                                                download 
                                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                                >
                                                        {" "}
                                                        Download Resume
                                                </a>
                                        </div>
                                        <h3 className="text-2xl font-semibold"> Avid Music Producer and Listener</h3>

                                        <p className="text-muted-foreground text-left">
                                                After being bribed by my mom with two crack-open geodes to audition for the 
                                                National Children's Chorus at age 8, I've been hooked on music. 
                                                From the first song I listen to get out of bed in the morning, 
                                                to the trips and performances I had with my a capella group 
                                                The Tufts Beelzebubs, to the overdone shower karaoke that drives my 
                                                housemates insane, to the late-night music production sessions I lose 
                                                precious hours of sleep to, music shapes who I am. 
                                                I minored in music engineering and am still obsessively fine-tuning my tracks, 
                                                so forgive me if there's not much on Spotify (yet).
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                                                <a href="https://open.spotify.com/artist/5nLkNqueZ7b2ahL6188q5A?si=nfvUkmaCRfmCa5tU_tSi_w" 
                                                target="_blank"
                                                className="cosmic-button flex items-center space-x-2"
                                                >
                                                        {" "}
                                                        <Music className="" />
                                                        <span>Check Out My Music!</span>
                                                </a>
                                        </div>
                                </div>

                                {/* PUT INFO FOR EACH ELEMENT code, users (how interact with users or something that makes sense CHANGE LATER), work experience, etc*/}
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
                                                                        Developing efficient and reliable backend systems and APIs to support modern applications.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="gradient-border p-6 card-hover">
                                                <div className="flex items-start gap-4">
                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                <Briefcase className="h-6 w-6 text-primary"/>
                                                        </div>
                                                        <div className="text-left">
                                                                <h4 className="font-semibold text-lg">
                                                                        Work Experience
                                                                </h4>
                                                                <p className="text-muted-foreground">
                                                                        Gained hands-on experience across software engineering and 
                                                                        research roles, from designing backend APIs 
                                                                        and deploying machine learning services at Bumble, 
                                                                        to conducting environmental research and data analysis at 
                                                                        the UCLA Institute for Carbon Management. Currently building a 
                                                                        marketplace app to reduce campus waste 
                                                                        through lending and borrowing.
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
                        </div>
                                
                </div>
                </div>
                </section>
        );
};