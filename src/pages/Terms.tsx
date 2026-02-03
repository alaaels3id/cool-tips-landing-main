import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import logo from "@/assets/logo.png";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main className="container px-4 py-32 relative">
        {/* Playful Floating Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-bounce-slow" style={{ animationDelay: '1s' }} />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 animate-reveal">
            <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest mb-10 rotate-[2deg]">
              {t('terms.badge')}
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.8] tracking-tighter">
              {t('terms.title')} <span className="text-primary italic">{t('terms.subtitle')}</span>
            </h1>
            <p className="text-2xl font-bold text-foreground/60 max-w-2xl leading-tight uppercase">
              {t('terms.intro')}
            </p>
          </div>

          <div className="space-y-20 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <section className="bubble-card p-10 bg-white/50 dark:bg-black/20">
              <h2 className="text-3xl font-bold mb-6 italic text-primary">{t('terms.section1_title')}</h2>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 uppercase">
                {t('terms.section1_text')}
              </p>
            </section>

            <section className="bubble-card p-10 bg-white/50 dark:bg-black/20">
              <h2 className="text-3xl font-bold mb-6 italic text-primary">{t('terms.section2_title')}</h2>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 uppercase">
                {t('terms.section2_text')}
              </p>
            </section>

            <section className="bubble-card p-10 bg-white/50 dark:bg-black/20">
              <h2 className="text-3xl font-bold mb-6 italic text-accent">{t('terms.section3_title')}</h2>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 uppercase">
                {t('terms.section3_text')}
              </p>
            </section>

            <div className="text-center pt-10">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground bg-foreground/5 px-4 py-2 rounded-full">
                {t('terms.last_updated')}
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

export default Terms;
