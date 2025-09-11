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

//     // UPDATED: Using AbortController for scroll listener
//     useEffect(() => {
//         const controller = new AbortController();
        
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         }

//         window.addEventListener("scroll", handleScroll, {
//             signal: controller.signal
//         });

//         return () => {
//             controller.abort();
//         };
//     }, []);

//     // UPDATED: Using AbortController for hash navigation with timeout cleanup
//     useEffect(() => {
//         const controller = new AbortController();
//         const timeoutIds = new Set(); // Track all timeout IDs
        
//         const scrollToHashSection = () => {
//             // Only run on home page
//             if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
//                 return;
//             }
            
//             const hash = window.location.hash;
//             if (hash) {
//                 // Try multiple times with increasing delays to ensure content is loaded
//                 const attemptScroll = (attempt = 0) => {
//                     // Check if component is still mounted
//                     if (controller.signal.aborted) return;
                    
//                     const element = document.getElementById(hash.substring(1));
//                     if (element) {
//                         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                     } else if (attempt < 5 && !controller.signal.aborted) {
//                         // If element not found, try again after a delay
//                         const timeoutId = setTimeout(() => {
//                             timeoutIds.delete(timeoutId);
//                             attemptScroll(attempt + 1);
//                         }, 200 * (attempt + 1));
//                         timeoutIds.add(timeoutId);
//                     }
//                 };
                
//                 const initialTimeoutId = setTimeout(() => {
//                     timeoutIds.delete(initialTimeoutId);
//                     attemptScroll();
//                 }, 500); // Initial delay
//                 timeoutIds.add(initialTimeoutId);
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
//             // Clear all pending timeouts
//             timeoutIds.forEach(id => clearTimeout(id));
//             timeoutIds.clear();
//         };
//     }, []);

//     // Simple navigation handler
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
//                     onClick={(e) => handleNavClick(e, '#hero')}
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
//                             onClick={(e) => handleNavClick(e, item.href)}
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
//                                 onClick={(e) => handleNavClick(e, item.href)}
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
import { useState, useEffect, useCallback } from "react";

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

    // Throttled scroll handler to improve performance
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        
        // Throttle scroll events for better performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledHandleScroll, {
            signal: controller.signal,
            passive: true // Better performance for scroll events
        });

        return () => {
            controller.abort();
        };
    }, [handleScroll]);

    // Improved hash navigation with proper cleanup
    useEffect(() => {
        const controller = new AbortController();
        const timeoutIds = new Set();
        
        const scrollToHashSection = () => {
            // Only run on home page
            if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
                return;
            }
            
            const hash = window.location.hash;
            if (hash) {
                const attemptScroll = (attempt = 0) => {
                    // Check if component is still mounted
                    if (controller.signal.aborted) return;
                    
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        // Use scrollIntoView with better options
                        element.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start',
                            inline: 'nearest'
                        });
                        // Clear any remaining timeouts since we succeeded
                        timeoutIds.forEach(id => clearTimeout(id));
                        timeoutIds.clear();
                    } else if (attempt < 5 && !controller.signal.aborted) {
                        // If element not found, try again with exponential backoff
                        const delay = Math.min(200 * Math.pow(1.5, attempt), 2000);
                        const timeoutId = setTimeout(() => {
                            timeoutIds.delete(timeoutId);
                            attemptScroll(attempt + 1);
                        }, delay);
                        timeoutIds.add(timeoutId);
                    }
                };
                
                // Initial delay to ensure DOM is ready
                const initialTimeoutId = setTimeout(() => {
                    timeoutIds.delete(initialTimeoutId);
                    attemptScroll();
                }, 100); // Reduced from 500ms for faster response
                timeoutIds.add(initialTimeoutId);
            }
        };

        // Run after page loads
        if (document.readyState === 'complete') {
            scrollToHashSection();
        } else {
            window.addEventListener('load', scrollToHashSection, {
                signal: controller.signal,
                once: true
            });
        }
        
        // Listen for hash changes
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

    // Close mobile menu when clicking outside or on escape
    useEffect(() => {
        if (!isMenuOpen) return;

        const controller = new AbortController();
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            // Close menu if clicking on menu overlay (but not menu content)
            if (e.target.classList.contains('menu-overlay')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown, {
            signal: controller.signal
        });
        
        document.addEventListener('click', handleClickOutside, {
            signal: controller.signal
        });

        return () => {
            controller.abort();
        };
    }, [isMenuOpen]);

    // Improved navigation handler with error handling
    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        try {
            // Always navigate to home page with hash for section navigation
            if (href.startsWith('#')) {
                // If we're already on the home page, just scroll
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    window.location.hash = href;
                } else {
                    // Navigate to home page with hash
                    window.location.href = '/' + href;
                }
            } else {
                window.location.href = '/' + href;
            }
        } catch (error) {
            console.error('Navigation error:', error);
            // Fallback: navigate to home page with hash
            if (href.startsWith('#')) {
                window.location.href = '/' + href;
            }
        }
    }, []);

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
                        <span className="text-glow text-foreground"> Roan Yeh </span>
                        Portfolio
                    </span>
                </a>

                {/* Desktop version */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name} // Use name instead of index for better React keys
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
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile menu overlay */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
                    "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    "min-h-screen menu-overlay", // Added menu-overlay class for click detection
                    isMenuOpen ? "opacity-100 pointer-events-auto"
                               : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl text-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name} // Use name instead of index
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