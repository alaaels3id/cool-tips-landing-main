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
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Use resolvedTheme to handle 'system' setting correctly
  const currentTheme = resolvedTheme || theme

  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="w-20 h-20 rounded-[1.8rem] border-4 border-foreground bg-white text-foreground shadow-tactile hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-tactile-hover transition-all duration-300 relative group active:scale-90 flex items-center justify-center"
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Sun className={`absolute h-10 w-10 transition-all duration-500 group-hover:text-primary group-hover:animate-wiggle 
            ${currentTheme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          />
          <Moon className={`absolute h-10 w-10 transition-all duration-500 group-hover:text-secondary group-hover:animate-wiggle dark:text-black
            ${currentTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
          />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent border-4 border-foreground rounded-full animate-pulse" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div className="absolute bottom-full left-0 mb-6 overflow-hidden whitespace-nowrap pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
        <span className="font-bold text-xs bg-foreground text-background dark:text-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-tactile-hover">
          Mode: {currentTheme === 'dark' ? 'Nighty' : 'Sunny'}!
        </span>
      </div>
    </div>
  )
}
