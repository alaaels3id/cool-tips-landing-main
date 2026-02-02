import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cool Tips" className="w-10 h-10 rounded-full" />
            <span className="font-bold text-lg">
              <span className="text-gradient">Cool</span> Tips
            </span>
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
