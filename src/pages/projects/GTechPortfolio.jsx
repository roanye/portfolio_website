import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import Magnifier from "react-magnifier";
import { MoveRight, Download, FileMusic } from "lucide-react";
import { useEffect } from "react";

export const GTechPortfolio = () => {
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

      <section id="hero" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-8xl flex flex-col gap-6">

        <div className="container bg-background/65 rounded-lg p-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
              <span className="text-primary">Georgia Tech Portfolio</span>
            </h2>
            <div className="gradient-border space-y-6 p-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Overview</h3>

                <div className="space-y-6 text-left">
                  <p className="text-muted-foreground">
                    This is a portfolio of projects I have completed. Below is a list of each project with a brief description.
                    You can find all resources below this overview section.
                  </p>
                  <p className="text-sm italic text-primary text-glow">
                    Please disregard the menu at the top of the page as that goes to my main website. Feel free to explore the other pages if you wish, but they are still under construction!
                  </p>

                  <div>
                    <p className="text-muted-foreground font-semibold mb-3">Code & Writing Samples:</p>
                    <ul className="space-y-3 ml-4 md:ml-6 text-muted-foreground">
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">Arith:</span>
                        </div>
                        <div className="flex-1">
                          <p className="leading-relaxed mt-1 md:mt-0">A JPEG inspired image compression and decompression system</p>
                          <p className="text-sm mt-2">Note: I have provided a Google Drive link to the code through the application portal as the project is still used in a course at my university and I want to make sure the resource is not accessible through web search. Documentation is provided on here for your reference.</p>
                        </div>
                      </li>
                      <li className="flex flex-col md:flex-row md:space-x-2">
                        <div className="flex-none flex items-start space-x-1 md:min-w-[8rem]">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">This Website:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">The source code for this portfolio website is located at: <a href="https://github.com/roanye/portfolio_website" className="text-primary hover:underline">https://github.com/roanye/portfolio_website</a></p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold mb-3">Video Recordings:</p>
                    <ul className="space-y-3 ml-4 md:ml-6 text-muted-foreground">
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">Handdown:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">I've included a video walkthrough of the MVP from April 2025.</p>
                      </li>
                      <li className="flex flex-col md:flex-row md:space-x-2">
                        <div className="flex-none flex items-start space-x-1 md:min-w-[8rem]">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">Save the Last Dance for Me:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">A recording of my senior solo performance with the Tufts Beelzebubs. I arranged the song. We perform senior solos in funny costumes so I hope you enjoy!</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold mb-3">Audio Recordings:</p>
                    <ul className="space-y-3 ml-4 md:ml-6 text-muted-foreground">
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">Petrichor:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">This is a recording of my final project for the class, Computer Tools for Musicians. It was produced in Digital Performer 11.</p>
                      </li>
                      <li className="flex flex-col md:flex-row md:space-x-2">
                        <div className="flex-none flex items-start space-x-1 md:min-w-[8rem]">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">Thinking of Her:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">This is a two track Lofi single I released on Spotify.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold mb-3">Sheet Music:</p>
                    <p className="text-muted-foreground mb-3">The below arrangements were made in Musescore by me for my a cappella group, the Tufts Beelzebubs:</p>
                    <ul className="space-y-2 ml-4 md:ml-6 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-bold mr-2">▶</span>
                        <span>Save the Last Dance for Me</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-bold mr-2">▶</span>
                        <span>What's new Scooby-Doo?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold mb-3">Awards:</p>
                    <ul className="space-y-3 ml-4 md:ml-6 text-muted-foreground">
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">CARA Best Funk / Disco Song | 2023:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">"Darwin Derby" from Prevaill, Tufts University Beelzebubs</p>
                      </li>
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">CARA Best Lower Voices Collegiate Album or EP | 2023:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">Prevaill, Tufts University Beelzebubs</p>
                      </li>
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">CARA Best Lower Voices Collegiate Album or EP | 2025:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">Delirium, Tufts University Beelzebubs</p>
                      </li>
                      <li className="flex flex-col md:flex-row md:gap-1">
                        <div className="flex-none flex items-start space-x-1">
                          <span className="text-primary font-bold mr-2">▶</span>
                          <span className="font-bold">CARA Runner-up Best Lower Voices Collegiate Lead Vocal | 2025:</span>
                        </div>
                        <p className="flex-1 leading-relaxed mt-1 md:mt-0">"Comin' Home Baby" from Delirium, Tufts University Beelzebubs</p>
                      </li>
                    </ul>
                  </div>

                  
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-6"/>
                  </div>
                </div>
        </div>
                {/* Arith section */}
                <div id="arith" className="container mx-auto max-w-8xl flex flex-col gap-6 mt-12">
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
                            "layer" representing a single stage of the compression or decompression 
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
                      averaging the Pb/Pr values within 2x2 pixel blocks. Below are some of our tests. Enjoy the madness!
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-[1fr] items-stretch">

                      {/* Left side - Arrow test */}
                      <div className= "flex flex-col gap-4 h-full gradient-border-alt">
                        <div className="space-y-4  p-4 h-full flex flex-col">
                          <h3 className="text-xl font-semibold mb-4">Split Block Test</h3>
                          <div className="space-y-2">
                            {/* Images and arrow row */}
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                              <img
                                src="/projects/arith/split-block-orig-and-out.webp"
                                alt="arith-split-block-out"
                                className="w-32 h-32 object-cover rounded-sm"
                              />
                              
                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/split-block-orig-and-out.webp"
                                alt="arith-split-block-out"
                                className="w-32 h-32 object-cover rounded-sm"
                              />
                            </div>
                            
                            {/* Labels row */}
                            <div className="flex justify-center gap-6 flex-wrap">
                              <div className="w-32 text-center">
                                <h4 className="font-medium text-sm">Original</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}
                              
                              <div className="w-32 text-center">
                                <h4 className="font-medium text-sm">After compression</h4>
                              </div>
                            </div>
                            </div>
          
                            <div>
                          
                            <p className="text-muted-foreground text-sm text-left">                   
                              The first test used a simple black-and-white 2 x 2 PPM file. Since both black and white have neutral 
                              Pb/Pr values, averaging across the block does not introduce chroma 
                              distortion, and the DCT preserves the Y differences, so the results 
                              are expected to match the original.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 gradient-border-alt p-4 h-full flex flex-col">
                          <h3 className="text-xl font-semibold mb-4">Arrow Test</h3>
                          <div className="space-y-2">
                            {/* Images and arrow row */}
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                              <img
                                src="/projects/arith/arrow-orig.webp"
                                alt="arrow-orig"
                                className="w-20 h-34 object-cover rounded-sm"
                              />

                              <MoveRight className="w-6 h-6 text-muted-foreground" />

                              <img
                                src="/projects/arith/arrow-1.webp"
                                alt="arrow-1"
                                className="w-20 h-34 object-cover rounded-sm"
                              />
                              
                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/arrow-2.webp"
                                alt="arrow-2"
                                className="w-20 h-34 object-cover rounded-sm"
                              />
                            </div>
                            
                            {/* Labels row */}
                            <div className="flex justify-center gap-6 flex-wrap">
                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">Original</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}

                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">P1</h4>
                              </div>

                                <div className="w-6"></div> {/* Spacer to match arrow width */}
                                
                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">P2</h4>
                              </div>
                            </div>
                            </div>
          
                            <div>
                          
                            <p className="text-muted-foreground text-sm text-left">                   
                              This test used a 10 x 17 red arrow, chosen to evaluate 
                              PPM file trimming on an object symmetrical along the 
                              Y-axis but asymmetrical along the X-axis. The corrupted 
                              outputs P1 and P2 revealed bugs in the block compression steps.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Block Color test */}
                      <div className= "flex flex-col gap-4 h-full gradient-border-alt">
                        <div className="space-y-4  p-4 h-full flex flex-col">
                          <h3 className="text-xl font-semibold mb-4">Block Color Test</h3>
                          <div className="space-y-2">
                            {/* Images and arrow row */}
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                              <img
                                src="/projects/arith/arith-block-orig.webp"
                                alt="arith-block-orig"
                                className="w-32 h-32 object-cover rounded-sm"
                              />
                              
                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/arith-block-1.webp"
                                alt="arith-block-1"
                                className="w-32 h-32 object-cover rounded-sm"
                              />
                            </div>
                            
                            {/* Labels row */}
                            <div className="flex justify-center gap-6 flex-wrap">
                              <div className="w-32 text-center">
                                <h4 className="font-medium text-sm">Original</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}
                              
                              <div className="w-32 text-center">
                                <h4 className="font-medium text-sm">After compression</h4>
                              </div>
                            </div>
                            </div>
          
                            <div>
                          
                            <p className="text-muted-foreground text-sm text-left">                   
                              The second test used a simple 2 x 2 PPM file with basic colors. The 
                              grayscale-like result is expected, as averaging the Pb/Pr 
                              values across the block reduces the chroma information.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 gradient-border-alt p-4 h-full flex flex-col">
                          <h3 className="text-xl font-semibold mb-4">Split Arrow Test</h3>
                          <div className="space-y-2">
                            {/* Images and arrow row */}
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                              <img
                                src="/projects/arith/split-arrow-orig.webp"
                                alt="split-arrow-orig"
                                className="w-20 h-34 object-cover rounded-sm"
                              />

                              <MoveRight className="w-6 h-6 text-muted-foreground" />

                              <img
                                src="/projects/arith/split-arrow-1.webp"
                                alt="split-arrow-1"
                                className="w-20 h-34 object-cover rounded-sm"
                              />

                              <MoveRight className="w-6 h-6 text-muted-foreground" />

                              <img
                                src="/projects/arith/split-arrow-2.webp"
                                alt="split-arrow-2"
                                className="w-20 h-34 object-cover rounded-sm"
                              />
                              
                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/split-arrow-correct.webp"
                                alt="split-arrow-correct"
                                className="w-20 h-34 object-cover rounded-sm"
                              />
                            </div>
                            
                            {/* Labels row */}
                            <div className="flex justify-center gap-6 flex-wrap">
                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">Original</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}

                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">P1</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}

                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">P2</h4>
                              </div>

                                <div className="w-6"></div> {/* Spacer to match arrow width */}
                                
                              <div className="w-20 text-center">
                                <h4 className="font-medium text-sm">P3</h4>
                              </div>
                            </div>
                          </div>
          
                            <div>
                          
                            <p className="text-muted-foreground text-sm text-left">                   
                              This test used a 10 x 17 multi-colored arrow (RGB), similar 
                              to the <strong>Arrow Test</strong> but with different colors, to test Pb/Pr averaging in 2 x 2 blocks. 
                              The corrupted outputs P1 and P2 revealed bugs in the block compression steps and P3 is a final correct output.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      
                      
                      
                    </div>

                    <div className= "flex flex-col gap-4 h-full gradient-border-alt">
                        <div className="space-y-4  p-4 h-full flex flex-col">
                          <h3 className="text-xl font-semibold mb-4">Flower Test</h3>
                          <div className="space-y-2">
                            {/* Images and arrow row */}
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                              <img
                                src="/projects/arith/arith-flower-orig.webp"
                                alt="arith-flower-orig"
                                className="w-50 h-27 object-cover rounded-sm"
                              />
                              
                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/arith-flower-wrong.webp"
                                alt="arith-flower-wrong"
                                className="w-50 h-27 object-cover rounded-sm"
                              />

                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/arith-flower-wrong2.webp"
                                alt="arith-flower-wrong2"
                                className="w-50 h-27 object-cover rounded-sm"
                              />

                              <MoveRight className="w-6 h-6 text-muted-foreground" />
                              
                              <img
                                src="/projects/arith/arith-flower-correct.webp"
                                alt="arith-flower-correct"
                                className="w-50 h-27 object-cover rounded-sm"
                              />
                            </div>
                            
                            {/* Labels row */}
                            <div className="flex justify-center gap-6 flex-wrap">
                              <div className="w-50 text-center">
                                <h4 className="font-medium text-sm">Original</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}

                              <div className="w-50 text-center">
                                <h4 className="font-medium text-sm">P1</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}

                              <div className="w-50 text-center">
                                <h4 className="font-medium text-sm">P2</h4>
                              </div>
                              
                              <div className="w-6"></div> {/* Spacer to match arrow width */}
                              
                              <div className="w-50 text-center">
                                <h4 className="font-medium text-sm">Final</h4>
                              </div>
                            </div>
                            </div>
          
                            <div>
                          
                            <p className="text-muted-foreground text-sm text-left">                   
                              The image above is one of the final testing PPM files. 
                              The series consists of four images (including the original), 
                              each representing a successive round of improvement.
                              One image was excluded as it looked nearly identical to P2. 
                              This file was used in the project's evaluation, 
                              and the resulting final output had a 2.54% error.
                            </p>
                          </div>
                        </div>
                      </div>                
                  </div>
                </div>
        </div>

        {/* Videos Section */}
        <div id="videos" className="container mx-auto max-w-8xl flex flex-col gap-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            <span className="text-primary">Videos</span>
          </h2>

          <div className="gradient-border space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Handdown Demo</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/M3GioxLCkPI"
                    title="Handdown Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-muted-foreground text-sm"> Above is a video walkthrough of the Handdown MVP from April 2025.</p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Save the Last Dance for Me</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/nfBgXMBIV0E"
                    title="Save the Last Dance for Me"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-muted-foreground text-sm"> Above is a recording of my senior solo performance with the Tufts Beelzebubs. 
                  It was performed at Goddard Chapel at Tufts University in funny costumes (it's a tradition).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Recordings Section */}
        <div id="audio" className="container mx-auto max-w-8xl flex flex-col gap-8 mt-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            <span className="text-primary">Audio Recordings</span>
          </h2>

          <div className="gradient-border space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="gradient-border-alt flex flex-col gap-4 p-2">
                <h3 className="text-xl font-semibold">Petrichor</h3>
                <img
                  src="/music_production/PetrichorImage.jpg"
                  alt="Petrichor Album Cover"
                  className="w-2/3 h-auto rounded-sm object-cover mx-auto"
                />
                <audio controls className="w-2/3 mx-auto">
                  <source src="/music_production/Petrichor.wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-muted-foreground text-sm">Petrichor is the final project for my Computer Tools for Musicians class. 
                  It was produced in Digital Performer 11 and features my vocals accompanied by synthesizers from Reason and MOTU.
                </p>
              </div>

              <div className="gradient-border-alt flex flex-col gap-4 p-2">
                <h3 className="text-xl font-semibold">Close Your Eyes</h3>
                <img
                  src="/music_production/ThinkingOfHerAlbumCover.png"
                  alt="Thinking of Her Album Cover"
                  className="w-2/3 h-auto rounded-sm object-cover mx-auto"
                />
                <audio controls className="w-2/3 mx-auto">
                  <source src="/music_production/CloseYourEyes.wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-muted-foreground text-sm">This is a track from my two song Lofi single: Thinking of Her. 
                  It is produced in Logic Pro X and was one of my first original compositions. The inspiration from this song
                  came from a dream of mine three years ago. The story begins with two dancers separated by darkness, each moving in solitude.
                  As the man dances, he slowly spirals his way into a memory of a peaceful park nestled in the heart of a busy city, 
                  where he is joined by his partner in a waltz for a fleeting moment. The song ends as he twists his way back into darkness by himself.  
                  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrangements Section */}
        <div id="arrangements" className="container mx-auto max-w-8xl flex flex-col gap-8 mt-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            <span className="text-primary">Arrangements</span>
          </h2>

          <div className="gradient-border space-y-6 p-6">
            <p className="text-muted-foreground mb-8">
              Below are sheet music arrangements I've created for the Tufts Beelzebubs a cappella group. Each arrangement is available as both a PDF preview and a MuseScore file (.mscz) for editing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Save the Last Dance for Me */}
              <div className="flex flex-col gap-4 gradient-border-alt p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Save the Last Dance for Me</h3>
                <div className="bg-foreground/5 rounded-sm p-4 min-h-64 flex items-center justify-center">
                  <embed
                    src="/arrangements/save-the-last-dance-for-me.pdf"
                    type="application/pdf"
                    className="w-full min-h-screen"
                  />
                </div>
                <div className="flex gap-3">
                  <a
                    href="/arrangements/save-the-last-dance-for-me-final.mscz"
                    download
                    className="flex-1 flex items-center justify-center gap-2 cosmic-button text-sm"
                  >
                    <Download size={16} />
                    <span>.mscz</span>
                  </a>
                  <a
                    href="/arrangements/save-the-last-dance-for-me.pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 cosmic-button text-sm"
                  >
                    <Download size={16} />
                    <span>PDF</span>
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">This is the arragement for my senior solo. The performance is included in the video 
                  recording section. It was arranged for a 15 person TTBB a cappella group by me in the spring of 2025.
                </p>
              </div>

              {/* What's new Scooby-Doo? */}
              <div className="flex flex-col gap-4 gradient-border-alt p-6 rounded-lg">
                <h3 className="text-xl font-semibold">What's New Scooby-Doo?</h3>
                <div className="bg-foreground/5 rounded-sm p-4 min-h-64 flex items-center justify-center">
                  <embed
                    src="/arrangements/whats-new-scoob.pdf"
                    type="application/pdf"
                    className="w-full min-h-screen"
                  />
                </div>
                <div className="flex gap-3">
                  <a
                    href="/arrangements/whats-new-scoob.mscz"
                    download
                    className="flex-1 flex items-center justify-center gap-2 cosmic-button text-sm"
                  >
                    <Download size={16} />
                    <span>.mscz</span>
                  </a>
                  <a
                    href="/arrangements/whats-new-scoob.pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 cosmic-button text-sm"
                  >
                    <Download size={16} />
                    <span>PDF</span>
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">This arrangement was also arranged for a 12 person TTBB a cappella group by me in the fall of 2024.
                  The arrangement appears on the Tufts Beelzebubs most recent EP "School's Out" released this past December.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
    
    </div>
  );
};