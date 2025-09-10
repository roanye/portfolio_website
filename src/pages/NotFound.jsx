import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col items-center justify-center text-center">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <StarBackground />
      <h1 className="text-primary text-[8rem] md:text-[12rem] font-bold tracking-tight">
        404 
      </h1>
      
      <h3 className="text-muted-foreground text-4xl md:text-6xl font-bold tracking-tight">
        Page Not Found
      </h3>
    </div>
  );
};