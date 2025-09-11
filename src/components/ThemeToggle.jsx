import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            window.dispatchEvent(new Event("storage")); 
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            window.dispatchEvent(new Event("storage"));
            setIsDarkMode(true);
        }
    
    }
    return (
        // <button 
        //     onClick={toggleTheme} 
        //     className={cn(
        //         "fixed max-sm:hidden top-2 right-2 z-50 p-2 rounded-full",
        //         "transiition-colors duration-300 focus:outline-hidden"
        //     )}
        // >
        //     {isDarkMode ? (
        //         <Sun className="h-6 w-6 text-yellow-300"/> 
        //     ) : (
        //         <Moon className="h-6 w-6 text-blue-900"/>
        //     )}
        // </button>
        
        <button
         onClick={toggleTheme}
         className={cn("fixed max-sm:hidden top-2 right-2 z-50 rounded-full",
            "bg-primary/15 p-1.5 flex items-center justify-center transition-colors",
            "duration-300 focus:outline-none"
            
        )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
        );
}