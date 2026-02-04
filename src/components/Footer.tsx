import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/favicon.png";
import { Youtube, Twitter, Facebook, ExternalLink } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-20 border-t border-border bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cool Tips" className="w-10 h-10 rounded-none" />
              <span className="font-bold text-lg font-mono uppercase">
                <span className="text-primary">Cool</span> Tips
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-mono uppercase leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              {t("footer.since")}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 inline-block">
              {t("footer.jump")}
            </h4>
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors inline-flex items-center gap-2">Home</Link>
              <Link to="/videos" className="hover:text-primary transition-colors inline-flex items-center gap-2">Videos</Link>
              <Link to="/blog" className="hover:text-primary transition-colors inline-flex items-center gap-2">Blog</Link>
              <Link to="/about" className="hover:text-primary transition-colors inline-flex items-center gap-2">About</Link>
              <Link to="/contact" className="hover:text-primary transition-colors inline-flex items-center gap-2">{t("contact.title")}</Link>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 inline-block">
              {t("footer.boring")}
            </h4>
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
            </nav>
          </div>

          {/* Social Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 inline-block">
              {t("footer.friendship")}
            </h4>
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              <a
                href="https://www.youtube.com/@coooltips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors group"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://twitter.com/coool_tips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors group"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.facebook.com/coooltips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors group"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Cool Tips. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2 text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t("footer.status")}
            </span>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <span className="text-muted-foreground">
              {t("footer.crafted")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
