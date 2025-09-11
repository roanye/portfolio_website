import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import Magnifier from "react-magnifier";
import { CornerDownRight } from "lucide-react";
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
                <div className="container mx-auto max-w-8xl flex flex-col gap-6">
                  <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
                            <span className="text-primary">Arith</span>
                  </h2>

                  <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* Info */}
                    <div className="gradient-border space-y-6 p-6">
                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Project Overview</h3>
                        
                        <div className="space-y-4 text-left">
                          <div>
                            <p className="text-muted-foreground">
                              <span className="text-primary font-semibold">Team Size:</span> 2 people (shoutout Winston Hsiao)
                            </p>
                            <p className="text-muted-foreground">
                              <span className="text-primary font-semibold">Date Completed:</span> March 7, 2024
                            </p>
                            <p className="text-muted-foreground">
                              <span className="text-primary font-semibold">Skills:</span> C, Bit-packing
                            </p>
                          </div>

                          <p className="text-muted-foreground">
                            A collaborative project from my Machine Structure and Programming class at Tufts University. 
                            I helped build a system that compresses and decompresses PPM images using JPEG-inspired techniques. 
                            The compression process includes:
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4 marker:text-primary marker:font-bold">
                            <li>Converting RGB images to YPbPr color space</li>
                            <li>Applying discrete cosine transform on 2x2 pixel blocks</li>
                            <li>Quantizing the data</li>
                            <li>Bit-packing to achieve lossy compression</li>
                          </ol>
                          
                          <p className="text-muted-foreground">
                            The system is modular, with separate components for compression, 
                            decompression, and helper utilities. The final implementation 
                            produces compressed images that can be reconstructed with controlled quality loss.
                          </p>

                          <p className="text-primary text-glow">
                            Note: The source code for this project is not published to maintain academic integrity, as it is still used in the course.
                          </p>

                          {/* Separator Line */}
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-6"/>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Project Architecture</h3>
                        
                        <div className="space-y-4 text-left">
                          <p className="text-muted-foreground">
                            The main program <code>image40</code> utilizes the <code>compress40</code> interface, 
                            which contains 2 primary pipelines:
                          </p>

                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="bg-primary/10 p-2 rounded border-l-2 border-primary">
                              <p className="text-lg mb-2 font-bold">
                                <span className="text-primary">1.</span> Compression
                              </p>

                              <ul className="space-y-2 ml-4 md:ml-6 text-muted-foreground">
                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  {/* Bullet + label */}
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">compress.h:</span>
                                  </div>

                                  {/* Description */}
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Interface for the compression of a PPM image.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">compress.c:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Implementation of compress.h.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">compressBlock.h:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Interface for the compression of a PPM image by 2x2 blocks. Helper functions
                                    for a larger apply function are declared here.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">compressBlock.c:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Implementation of compressBlock.h.
                                  </p>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-primary/10 p-2 rounded border-l-2 border-primary">
                              <p className="text-lg mb-2 font-bold">
                                <span className="text-primary">2.</span> Decompression
                              </p>

                              <ul className="space-y-2 ml-4 md:ml-6 text-muted-foreground">
                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  {/* Bullet + label */}
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">decompress.h:</span>
                                  </div>

                                  {/* Description */}
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Interface for the decompression of a PPM image.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">decompress.c:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Implementation of decompress.h.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">decompressBlock.h:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Interface for the decompression of a PPM image by 2x2 blocks. Helper functions 
                                    for a larger apply function are declared here.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">decompressBlock.c:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Implementation of decompressBlock.h.
                                  </p>
                                </li>
                              </ul>
                            </div>


                            <div className="bg-foreground/10 p-2 rounded border-l-2 border-foreground">
                              <p className="mb-2 text-md font-bold">
                                <span className="text-primary text-lg">Other: </span> These files were used in both processes
                              </p>

                              <ul className="space-y-2 ml-4 md:ml-6 text-muted-foreground">
                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  {/* Bullet + label */}
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">yPbPr.h:</span>
                                  </div>

                                  {/* Description */}
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Defines struct representing the format for 
                                    component video. Used when converting RGB to
                                    component video and back. 
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">bitpack.c:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Defines functions to store and retrieve integer
                                    bit fields from a larger bit word. Used to pack 
                                    32-bit words in compression and translate 32-bit
                                    words into pixel data in decompression.
                                  </p>
                                </li>

                                <li className="flex flex-col md:flex-row md:space-x-2">
                                  <div className="flex-none flex items-start space-x-1 md:min-w-[10rem]">
                                    <span className="text-primary font-bold mr-2">▶</span>
                                    <span className="font-bold">conversionClosure.h:</span>
                                  </div>
                                  <p className="flex-1 text-muted-foreground leading-relaxed mt-1 md:mt-0">
                                    Defines struct that stores another 
                                    A2Methods_UArray2, the denominator for a ppm
                                    file, and the methods to be used on a UArray2.
                                    This struct is used when converting RGB to 
                                    component video and vice versa in an apply 
                                    function the contents from one A2Methods_UArray2
                                    can be converted and copied to another UArray2.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                      
                          {/* Separator Line */}
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-6"/>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Testing</h3>
                        
                        <div className="space-y-4 text-left">
                          <p className="text-muted-foreground">
                            Each step of the process was tested independently in a test 
                            file called <code>test40.c</code>. We began by testing the bit-packing 
                            interface on its own. Next, we performed stepwise testing, with each 
                            “layer” representing a single stage of the compression or decompression 
                            process. Finally, we conducted end-to-end testing, compressing down to a specific 
                            stage and then decompressing back to a reconstructed image to verify 
                            correctness across the full pipeline.
                          </p>
                          {/* Separator Line */}
                        </div>
                      </div>
                      
                
                    </div>

                      {/* Design doc */}
                    <div className="gradient-border rounded-lg overflow-hidden p-6">
                      <h3 className="text-center font-semibold text-2xl mb-2 mt-2">Design Doc</h3>

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

                  <div className="gradient-border space-y-6 p-6">
                    <h3 className="text-2xl font-semibold mb-6">Results</h3>
                    <p className="text-muted-foreground text-left"> 
                      In the final testing, 10 complex images were processed 
                      through our compression algorithm, achieving an average 
                      error of <strong>1.95%</strong> compared to <strong>2.31%</strong> for the reference 
                      solution; a <strong>~15.6%</strong> improvement over the baseline. This 
                      error reflects the difference between the original and 
                      reconstructed PPM images and is expected due to the 
                      lossy steps in our algorithm, such as trimming and 
                      averaging the Pb and Pr values within 2x2 pixel blocks. Below are some of our tests. Enjoy the madness!
                    </p>
                    {/* Example: Two images side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img
                        src="/pictures/family-pic2.webp"
                        alt="family-pic2"
                        className="w-full aspect-[3/2] object-cover rounded-lg"
                      />
                      <img
                        src="/pictures/family-pic.webp"
                        alt="family-pic"
                        className="w-full aspect-[3/2] object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-semibold text-xl mb-2">My family</h4>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        My brother Patrick, my Yeye William, my dad Michael, my stepmom Shannon, me 
                        (the guy in the purple-ish shirt), and the cutest one of all, my dog, the 
                        one and only Loaf, Auggie. Taken in June 2024.
                      </p>
                    </div>
                  </div>
                
                </div>
        </div>
      </section>

      
      
    
    </div>
  );
};