import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
        className="w-20 h-20 rounded-[1.8rem] border-4 border-foreground bg-white text-foreground shadow-tactile hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-tactile-hover transition-all duration-300 relative group active:scale-90"
      >
        <Sun className="h-10 w-10 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-primary group-hover:animate-wiggle" />
        <Moon className="absolute h-10 w-10 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-secondary group-hover:animate-wiggle" />
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent border-4 border-foreground rounded-full animate-pulse" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div className="absolute bottom-full left-0 mb-6 overflow-hidden whitespace-nowrap pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
        <span className="font-bold text-xs bg-foreground text-background px-4 py-1.5 rounded-full uppercase tracking-widest shadow-tactile-hover">
          Mode: {theme === 'dark' ? 'Nighty' : 'Sunny'}!
        </span>
      </div>
    </div>
  )
}
