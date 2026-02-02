import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-24 border-t-8 border-foreground bg-background overflow-hidden relative">
      {/* Decorative Bottom Bubbles */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <Link to="/" className="flex items-center gap-6 group hover:text-primary transition-colors">
              <div className="w-20 h-20 rounded-[1.5rem] bg-white p-2 border-4 border-foreground shadow-tactile group-hover:shadow-tactile-hover group-hover:-translate-y-1 group-active:translate-y-0.5 transition-all">
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-4xl tracking-tighter uppercase mb-1">
                  {t('hero.title_cool')} <span className="text-primary italic">{t('hero.title_tips')}!</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest bg-foreground text-background dark:text-black px-2 py-0.5 rounded-full inline-block">
                  {t('footer.badge')}
                </span>
              </div>
            </Link>
            <p className="text-xl font-bold text-foreground/60 max-w-sm leading-tight uppercase">
              {t('footer.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t('footer.jump')}</span>
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors italic uppercase tracking-tighter">{t('social.youtube')}!</a>
              <a href="https://twitter.com/coool_tips" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors italic uppercase tracking-tighter">{t('social.twitter')}!</a>
              <a href="https://www.linkedin.com/in/alaa-elsa" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors italic uppercase tracking-tighter">{t('social.linkedin')}!</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t('footer.boring')}</span>
              <Link to="/privacy" className="text-xl font-bold hover:text-primary cursor-pointer transition-colors italic uppercase tracking-tighter">{t('footer.privacy')}</Link>
              <Link to="/terms" className="text-xl font-bold hover:text-primary cursor-pointer transition-colors italic uppercase tracking-tighter">{t('footer.terms')}</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t('footer.friendship')}</span>
              <span className="text-xl font-bold italic uppercase tracking-tighter">{t('footer.since')}</span>
              <span className="text-xl font-bold italic uppercase tracking-tighter opacity-40">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-4 border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t('footer.status')}
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-30">
            {t('footer.crafted')}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
