import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import Magnifier from "react-magnifier";

import { useEffect } from "react";

export const Arith = () => {
  // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <StarBackground />

      <section id="about" className="py-24 px-4 relative">
        <div className="container bg-background/65 rounded-lg p-6">
                {" "}
                <div
                        className="container mx-auto max-w-8xl">
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
                                 <span className="text-primary">Arith</span>
                        </h2>


                        <div 
                         className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                          {/* Info */}
                          <div className="gradient-border rounded-lg overflow-hidden p-4">
                            <p>hi</p>
                        
                          </div>
                            {/* Design doc */}
                          <div className="gradient-border rounded-lg overflow-hidden p-6">
                            <h4 className="text-center font-semibold text-2xl mb-2 mt-2">Design Doc</h4>
                            <p className="text-muted-foreground mb-2">
                              Below is the original design doc for the project made in Canva.
                            </p>
                            <p className="text-primary text-glow mb-2 text-sm">
                              Hover your mouse over the image for a magnifying glass!
                            </p>
                            <div className="gradient-border-alt">
                              <Magnifier
                                src="/projects/arith/arith-design-doc.png"
                                alt="arith-design-doc"
                                mgWidth={225}
                                mgHeight={225}
                                zoomFactor={1}   
                                mgShape="square"
                                className="w-full h-full object-cover"
                              />
                            </div>

                          </div>
                        </div>
                </div>
        </div>
      </section>

      
      
    
    </div>
  );
};