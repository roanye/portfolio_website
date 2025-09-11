import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import Magnifier from "react-magnifier";
import { MoveRight } from "lucide-react";
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
                              One images was excluded as it looked nearly identical to P2. 
                              This file was used in the project's evaluation, 
                              and the resulting final output had a 2.54% error.
                            </p>
                          </div>
                        </div>
                      </div>                
                  </div>
                </div>
        </div>
      </section>

      
      
    
    </div>
  );
};