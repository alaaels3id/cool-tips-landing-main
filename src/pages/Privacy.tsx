import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import logo from "@/assets/logo.png";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Friendly Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b-8 border-foreground">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-none bg-white p-2 border-4 border-foreground shadow-tactile-hover group-hover:rotate-6 group-hover:scale-110 transition-all">
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl tracking-tighter">
                  {t('hero.title_cool')} <span className="text-primary italic">{t('hero.title_tips')}!</span>
                </span>
              </div>
            </Link>
            <Link
              to="/"
              className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors bg-white border-4 border-foreground px-6 py-2 rounded-none shadow-tactile hover:translate-x-1 rtl:hover:translate-x-[-4px]"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
              {t('common.back')}
            </Link>
          </div>
        </div>
      </header>

      <main className="container px-4 py-32 relative">
        {/* Playful Floating Blobs */}
        {/* Industrial background elements - Structural lines */}
        <div className="absolute top-0 right-0 w-80 h-80 border-r-4 border-t-4 border-primary/20" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 border-l-4 border-b-4 border-accent/20" style={{ animationDelay: '1s' }} />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 animate-reveal">
            <div className="inline-block px-4 py-1 rounded-none bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-10 rotate-[-2deg]">
              {t('privacy.badge')}
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.8] tracking-tighter">
              {t('privacy.title')} <span className="text-primary italic">{t('privacy.subtitle')}</span>
            </h1>
            <p className="text-2xl font-bold text-foreground/60 max-w-2xl leading-tight uppercase">
              {t('privacy.intro')}
            </p>
          </div>

          <div className="space-y-20 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <section className="bubble-card p-10 bg-white/50 dark:bg-black/20">
              <h2 className="text-3xl font-bold mb-6 italic text-primary">{t('privacy.section1_title')}</h2>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 uppercase">
                {t('privacy.section1_text')}
              </p>
            </section>

            <section className="bubble-card p-10 bg-white/50 dark:bg-black/20">
              <h2 className="text-3xl font-bold mb-6 italic text-secondary">{t('privacy.section2_title')}</h2>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 uppercase">
                {t('privacy.section2_text')}
              </p>
            </section>

            <section className="bubble-card p-10 bg-white/50 dark:bg-black/20">
              <h2 className="text-3xl font-bold mb-6 italic text-accent">{t('privacy.section3_title')}</h2>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 uppercase">
                {t('privacy.section3_text')}
              </p>
            </section>

            <div className="text-center pt-10">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground bg-foreground/5 px-4 py-2 rounded-none">
                {t('privacy.last_updated')}
              </span>
            </div>
          </div>
        </div>
      </main>

      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Privacy;
