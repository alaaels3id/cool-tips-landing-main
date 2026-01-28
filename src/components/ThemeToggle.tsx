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
    <div className="fixed bottom-10 left-10 z-[100]">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-14 h-14 rounded-full border border-primary/20 bg-background/80 backdrop-blur-xl text-foreground shadow-glow hover:scale-110 transition-all duration-500 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-primary relative z-10" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-primary relative z-10" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
