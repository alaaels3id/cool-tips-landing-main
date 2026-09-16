import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import PlaylistCard from "@/components/playlist/PlaylistCard";
import { playlists } from "@/data/playlists";
import { ListVideo, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";

export const Playlists = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <SEO
        title={t("playlists.title")}
        description={t("playlists.subtitle")}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            <ListVideo className="w-3.5 h-3.5" />
            <span>{t("playlists.badge")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t("playlists.title")}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("playlists.subtitle")}
          </p>
        </div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>

        {/* YouTube Playlists Direct Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-card via-secondary/40 to-card border border-border flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left rtl:md:text-right">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("playlists.youtube_banner_badge")}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t("playlists.youtube_banner_title")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("playlists.youtube_banner_desc")}
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold gap-2 px-8 rounded-xl shrink-0"
          >
            <a
              href="https://www.youtube.com/@coooltips/playlists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="w-5 h-5" variant="white" />
              <span>{t("playlists.youtube_banner_btn")}</span>
            </a>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Playlists;
