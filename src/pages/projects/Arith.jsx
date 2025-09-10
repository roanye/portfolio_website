import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Arith = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col items-center justify-center text-center">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <StarBackground />
      <h1 className="text-primary text-[8rem] md:text-[12rem] font-bold tracking-tight">
        Arith 
      </h1>

      
      
    
    </div>
  );
};