import logo from "@/assets/favicon.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cool Tips" className="w-10 h-10 rounded-none" />
              <span className="font-bold text-lg font-mono uppercase">
                <span className="text-primary">Cool</span> Tips
              </span>
            </div>

            <nav className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <a href="/videos" className="hover:text-primary transition-colors">Videos</a>
              <a href="/about" className="hover:text-primary transition-colors">About</a>
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            </nav>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Cool Tips. Made with ❤️ for developers.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.youtube.com/@coooltips"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://twitter.com/coool_tips"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/coooltips"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
