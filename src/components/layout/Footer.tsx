import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import { Youtube, Github, ExternalLink, Heart } from "lucide-react";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";
import { XIcon } from "@/components/common/XIcon";
import { FacebookIcon } from "@/components/common/FacebookIcon";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-card/50 backdrop-blur-sm transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Cool Tips" className="w-10 h-10 rounded-full border border-border" />
              <span className="font-bold text-xl tracking-tight">
                <span className="text-primary font-mono font-extrabold">{t("brand.cool")}</span>{" "}
                {t("brand.tips")}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("footer.tutorials_badge")}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-mono">
              {t("footer.explore_heading")}
            </h4>
            <nav className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
              <Link to="/videos" className="hover:text-primary transition-colors">{t("nav.videos")}</Link>
              <Link to="/playlists" className="hover:text-primary transition-colors">{t("nav.playlists")}</Link>
              <Link to="/resources" className="hover:text-primary transition-colors">{t("nav.resources")}</Link>
              <Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-mono">
              {t("footer.legal_heading")}
            </h4>
            <nav className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
            </nav>
          </div>

          {/* Social Channels */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-mono">
              {t("footer.community_heading")}
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
              <a
                href="https://www.youtube.com/@coooltips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FF0000] transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" variant="red" />
                <span>YouTube (@coooltips)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.facebook.com/coooltips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook (/coooltips)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://github.com/coooltips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://x.com/coool_tips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>X (@coool_tips)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>© {currentYear} Cool Tips. {t("footer.rights")}</p>
          <p className="flex items-center gap-1.5">
            {t("footer.built_with")} <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
