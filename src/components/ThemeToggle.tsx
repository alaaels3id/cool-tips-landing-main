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
        className="w-16 h-16 rounded-xl border-2 border-primary bg-black/50 backdrop-blur-md text-primary shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] hover:scale-110 transition-all duration-300 relative group active:scale-95 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />

        {/* Scanning line effect inside button */}
        <div className="absolute inset-0 h-[2px] w-full bg-primary/50 animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100" />

        <div className="relative w-8 h-8 flex items-center justify-center">
          <Sun className={`absolute h-8 w-8 transition-all duration-500 text-primary drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]
            ${currentTheme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          />
          <Moon className={`absolute h-8 w-8 transition-all duration-500 text-secondary drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]
            ${currentTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
          />
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Label */}
      <div className="absolute bottom-full left-0 mb-4 overflow-hidden whitespace-nowrap pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-8 bg-primary/50"></div>
          <span className="font-['Orbitron'] font-bold text-xs text-primary tracking-widest uppercase drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]">
            {currentTheme === 'dark' ? 'SYSTEM: NIGHT' : 'SYSTEM: DAY'}
          </span>
        </div>
      </div>
    </div>
  )
}
