import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-24 border-t-8 border-foreground bg-background overflow-hidden relative">
      {/* Retro Grid Dots Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute bottom-4 left-[10%] w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_#ff00ff] animate-pulse" style={{ left: `${10 + i * 20}%`, animationDelay: `${i * 0.5}s` }} />
        ))}
      </div>

      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <Link to="/" className="flex items-center gap-6 group hover:text-primary transition-colors">
              <div className="w-20 h-20 rounded-2xl bg-black/50 backdrop-blur-sm p-3 border-2 border-primary shadow-[0_0_15px_rgba(255,0,255,0.4)] group-hover:shadow-[0_0_25px_rgba(255,0,255,0.7)] group-hover:-translate-y-1 transition-all overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-4xl tracking-tighter uppercase mb-1">
                  {t('hero.title_cool')} <span className="text-primary italic">{t('hero.title_tips')}!</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/50 px-2 py-0.5 rounded-md inline-block shadow-[0_0_10px_rgba(255,0,255,0.3)] backdrop-blur-sm">
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
            <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_#00ffff] animate-pulse" />
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
