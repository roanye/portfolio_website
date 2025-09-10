// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";

// const navItems = [
//     {name: "Home", href: "#hero"},
//     {name: "About", href: "#about"},
//     {name: "Skills", href: "#skills"},
//     {name: "Projects", href: "#projects"},
//     {name: "Hobbies", href: "#hobbies"},
//     {name: "Contact", href: "#contact"}
// ]

// export const NavBar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuopen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.screenY > 10);
//         }

//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return ( 
//         <nav className={cn(
//             "fixed w-full z-40 transition-all duration-300", 
//             isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//             )}
//         >
//             <div className="container flex items-center justify-between">
                
//                 <a 
//                   className="text-xl font-bold text-primary flex item-center"
//                   href='#hero'
//                 >
//                     <span className="relative z-10">
//                         {" "}
//                         <span className="text-glow text-foreground "> Roan Yeh </span>{" "} 
//                         Portfolio
//                     </span>
//                 </a>

//                 {/* Desktop version */}
//                 <div className="hidden md:flex space-x-8">
//                     {navItems.map((item,key) => (
//                         <a 
//                          key={key} 
//                          href={item.href} 
//                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                         > 
//                          {item.name}
//                         </a>
//                     ))}
//                 </div>
//                 {/* Mobile version */}

//                 <button 
//                     onClick ={() => setIsMenuOpen((prev) => !prev)}
//                     className="md:hidden p-2 text-foreground z-50"
//                     aria-label={isMenuopen ? "Close menu" : "Open menu"}
//                 >

//                     {isMenuopen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//                 <div className={cn(
//                     "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex",
//                     "flex-col items-center justify-center transition-all duration-300 md:hidden",
//                     isMenuopen ? "opacity-100 pointer-events-auto" 
//                                : "opacity-0 pointer-events-none"
//                     )}
//                 >
//                     <div className="flex flex-col space-y-8 text-xl">
//                         {navItems.map((item,key) => (
//                             <a 
//                              key={key} 
//                              href={item.href} 
//                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                              onClick={() => setIsMenuOpen(false)}
//                             > 
//                             {item.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </nav>
//     )
// };

// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";

// const navItems = [
//     {name: "Home", href: "#hero"},
//     {name: "About", href: "#about"},
//     {name: "Skills", href: "#skills"},
//     {name: "Projects", href: "#projects"},
//     {name: "Hobbies", href: "#hobbies"},
//     {name: "Contact", href: "#contact"}
// ]

// export const NavBar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10); // Fixed: was screenY, should be scrollY
//         }

//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <nav className={cn(
//             "fixed w-full z-40 transition-all duration-300",
//             // Different backgrounds for different states
//             isMenuOpen 
//                 ? "py-3 bg-background"
//                 : isScrolled 
//                     ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" 
//                     : "py-5 bg-background/20 backdrop-blur-sm"
//         )}>
//             <div className="container flex items-center justify-between">
                
//                 <a
//                     className="text-xl font-bold text-primary flex items-center" // Fixed: was item-center
//                     href='#hero'
//                 >
//                     <span className="relative z-10">
//                         {" "}
//                         <span className="text-glow text-foreground"> Roan Yeh </span>{" "}
//                         Portfolio
//                     </span>
//                 </a>

//                 {/* Desktop version */}
//                 <div className="hidden md:flex space-x-8">
//                     {navItems.map((item, key) => (
//                         <a
//                             key={key}
//                             href={item.href}
//                             className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                         >
//                             {item.name}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Mobile version */}
//                 <button
//                     onClick={() => setIsMenuOpen((prev) => !prev)}
//                     className="md:hidden p-2 text-foreground z-50"
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Fixed: was isMenuopen
//                 >
//                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>

//                 <div className={cn(
//                     "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
//                     "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
//                     "min-h-screen", // Ensure full height
//                     isMenuOpen ? "opacity-100 pointer-events-auto"
//                                : "opacity-0 pointer-events-none"
//                 )}>
//                     <div className="flex flex-col space-y-8 text-xl text-center">
//                         {navItems.map((item, key) => (
//                             <a
//                                 key={key}
//                                 href={item.href}
//                                 className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {item.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
                
//             </div>
//         </nav>
//     );
// };

// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";

// const navItems = [
//     {name: "Home", href: "#hero"},
//     {name: "About", href: "#about"},
//     {name: "Skills", href: "#skills"},
//     {name: "Projects", href: "#projects"},
//     {name: "Hobbies", href: "#hobbies"},
//     {name: "Contact", href: "#contact"}
// ]

// export const NavBar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//     const handleScroll = () => {
//         setIsScrolled(window.scrollY > 10);
//     };

//     // Ensure we don't have duplicate listeners
//     window.removeEventListener("scroll", handleScroll);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//         window.removeEventListener("scroll", handleScroll);
//     };
// }, []);

//     useEffect(() => {
//         const controller = new AbortController();
        
//         const scrollToHashSection = () => {
//             // Only run on home page
//             if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
//                 return;
//             }
            
//             const hash = window.location.hash;
//             if (hash) {
//                 // Try multiple times with increasing delays to ensure content is loaded
//                 const attemptScroll = (attempt = 0) => {
//                     const element = document.getElementById(hash.substring(1));
//                     if (element) {
//                         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                     } else if (attempt < 5) {
//                         // If element not found, try again after a delay
//                         setTimeout(() => attemptScroll(attempt + 1), 200 * (attempt + 1));
//                     }
//                 };
                
//                 setTimeout(attemptScroll, 500); // Initial delay
//             }
//         };

//         // Run after page loads
//         scrollToHashSection();
        
//         // Also listen for hash changes
//         window.addEventListener('hashchange', scrollToHashSection, {
//             signal: controller.signal
//         });
        
//         return () => {
//             controller.abort();
//         };
//     }, []);

//     // NEW: Simple navigation handler
//     const handleNavClick = (e, href) => {
//         e.preventDefault();
//         setIsMenuOpen(false);
//         window.location.href = '/' + href;
//     };

//     return (
//         <nav className={cn(
//             "fixed w-full z-40 transition-all duration-300",
//             // Different backgrounds for different states
//             isMenuOpen 
//                 ? "py-3 bg-background"
//                 : isScrolled 
//                     ? "py-3 bg-background/80 backdrop-blur-md shadow-lg"
//                     : "py-5 bg-background/20 backdrop-blur-sm"
//         )}>
//             <div className="container flex items-center justify-between">
                
//                 <a
//                     className="text-xl font-bold text-primary flex items-center"
//                     href='#hero'
//                     onClick={(e) => handleNavClick(e, '#hero')} // CHANGED: Added onClick handler
//                 >
//                     <span className="relative z-10">
//                         {" "}
//                         <span className="text-glow text-foreground"> Roan Yeh </span>{" "}
//                         Portfolio
//                     </span>
//                 </a>

//                 {/* Desktop version */}
//                 <div className="hidden md:flex space-x-8">
//                     {navItems.map((item, key) => (
//                         <a
//                             key={key}
//                             href={item.href}
//                             onClick={(e) => handleNavClick(e, item.href)} // CHANGED: Added onClick handler
//                             className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                         >
//                             {item.name}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Mobile version */}
//                 <button
//                     onClick={() => setIsMenuOpen((prev) => !prev)}
//                     className="md:hidden p-2 text-foreground z-50"
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                 >
//                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>

//                 <div className={cn(
//                     "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
//                     "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
//                     "min-h-screen",
//                     isMenuOpen ? "opacity-100 pointer-events-auto"
//                                : "opacity-0 pointer-events-none"
//                 )}>
//                     <div className="flex flex-col space-y-8 text-xl text-center">
//                         {navItems.map((item, key) => (
//                             <a
//                                 key={key}
//                                 href={item.href}
//                                 className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
//                                 onClick={(e) => handleNavClick(e, item.href)} // CHANGED: Added onClick handler
//                             >
//                                 {item.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
                            
//             </div>
//         </nav>
//     );
// };

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Hobbies", href: "#hobbies"},
    {name: "Contact", href: "#contact"}
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // UPDATED: Using AbortController for scroll listener
    useEffect(() => {
        const controller = new AbortController();
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll, {
            signal: controller.signal
        });

        return () => {
            controller.abort();
        };
    }, []);

    // UPDATED: Using AbortController for hash navigation with timeout cleanup
    useEffect(() => {
        const controller = new AbortController();
        const timeoutIds = new Set(); // Track all timeout IDs
        
        const scrollToHashSection = () => {
            // Only run on home page
            if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
                return;
            }
            
            const hash = window.location.hash;
            if (hash) {
                // Try multiple times with increasing delays to ensure content is loaded
                const attemptScroll = (attempt = 0) => {
                    // Check if component is still mounted
                    if (controller.signal.aborted) return;
                    
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else if (attempt < 5 && !controller.signal.aborted) {
                        // If element not found, try again after a delay
                        const timeoutId = setTimeout(() => {
                            timeoutIds.delete(timeoutId);
                            attemptScroll(attempt + 1);
                        }, 200 * (attempt + 1));
                        timeoutIds.add(timeoutId);
                    }
                };
                
                const initialTimeoutId = setTimeout(() => {
                    timeoutIds.delete(initialTimeoutId);
                    attemptScroll();
                }, 500); // Initial delay
                timeoutIds.add(initialTimeoutId);
            }
        };

        // Run after page loads
        scrollToHashSection();
        
        // Also listen for hash changes
        window.addEventListener('hashchange', scrollToHashSection, {
            signal: controller.signal
        });
        
        return () => {
            controller.abort();
            // Clear all pending timeouts
            timeoutIds.forEach(id => clearTimeout(id));
            timeoutIds.clear();
        };
    }, []);

    // Simple navigation handler
    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        window.location.href = '/' + href;
    };

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            // Different backgrounds for different states
            isMenuOpen 
                ? "py-3 bg-background"
                : isScrolled 
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-lg"
                    : "py-5 bg-background/20 backdrop-blur-sm"
        )}>
            <div className="container flex items-center justify-between">
                
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href='#hero'
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
                    <span className="relative z-10">
                        {" "}
                        <span className="text-glow text-foreground"> Roan Yeh </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop version */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile version */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
                    "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    "min-h-screen",
                    isMenuOpen ? "opacity-100 pointer-events-auto"
                               : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl text-center">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                            
            </div>
        </nav>
    );
};