import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Youtube, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import logo from "@/assets/logo.png";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header = ({ onOpenSearch }: HeaderProps) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.videos"), path: "/videos" },
    { name: t("nav.playlists"), path: "/playlists" },
    { name: t("nav.resources"), path: "/resources" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-xl transition-colors">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border group-hover:border-primary transition-colors">
            <img src={logo} alt="Cool Tips Logo" className="w-full h-full object-cover" />
          </div>
          <div className="font-bold text-lg tracking-tight">
            <span className="text-primary font-mono font-extrabold">{t("brand.cool")}</span>{" "}
            <span className="text-foreground">{t("brand.tips")}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Global Search Trigger */}
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 h-9 px-3 text-xs text-muted-foreground hover:text-foreground border-border/80 bg-secondary/30 rounded-xl"
            aria-label="Open search dialog"
          >
            <Search className="w-3.5 h-3.5" />
            <span>{t("nav.search")}</span>
            <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              {t("nav.search_k")}
            </kbd>
          </Button>

          {/* Mobile Search Icon Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenSearch}
            className="sm:hidden h-9 w-9 text-muted-foreground hover:text-foreground"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Button>

          {/* Theme & Language Toggles */}
          <div className="flex items-center">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* YouTube Subscribe CTA */}
          <Button
            asChild
            size="sm"
            className="hidden md:flex items-center gap-2 bg-[#FF0000] hover:bg-[#CC0000] text-white shadow-sm font-semibold h-9 px-4 rounded-xl transition-all"
          >
            <a
              href="https://www.youtube.com/@coooltips?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="w-4 h-4" variant="white" />
              <span>{t("nav.subscribe")}</span>
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-9 w-9 text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border/80 bg-background/95 backdrop-blur-xl px-4 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
              <Button
                asChild
                className="w-full bg-[#FF0000] hover:bg-[#CC0000] text-white gap-2 font-semibold h-11 rounded-xl"
              >
                <a
                  href="https://www.youtube.com/@coooltips?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className="w-5 h-5" variant="white" />
                  <span>{t("nav.subscribe_youtube")}</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
