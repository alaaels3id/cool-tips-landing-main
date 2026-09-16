import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  variant?: "floating" | "inline";
  className?: string;
}

export function ThemeToggle({ variant = "inline", className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 left-6 z-40 group">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full border border-border bg-card/80 backdrop-blur-md text-foreground shadow-lg hover:border-primary transition-all duration-300"
          aria-label="Toggle theme"
        >
          {currentTheme === "dark" ? (
            <Sun className="h-5 w-5 text-amber-400" />
          ) : (
            <Moon className="h-5 w-5 text-foreground" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`h-9 w-9 rounded-xl text-muted-foreground hover:text-foreground ${className}`}
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-foreground transition-transform hover:-rotate-12" />
      )}
    </Button>
  );
}

export default ThemeToggle;
