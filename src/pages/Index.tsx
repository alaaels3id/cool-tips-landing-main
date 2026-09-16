import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import VideoCard from "@/components/video/VideoCard";
import VideoPlayer from "@/components/video/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";
import { allVideos, latestVideos, featuredVideos } from "@/data/videos";
import {
  Play,
  Youtube,
  ArrowRight,
  Sparkles,
  Layers,
  Code,
  Database,
  Server,
  Cpu,
  Terminal,
  Globe,
  Zap,
  CheckCircle2,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case "laravel":
      return <Layers className="w-5 h-5 text-red-500" />;
    case "php":
      return <Code className="w-5 h-5 text-blue-500" />;
    case "mysql":
      return <Database className="w-5 h-5 text-amber-500" />;
    case "backend":
      return <Server className="w-5 h-5 text-emerald-500" />;
    case "apis":
      return <Cpu className="w-5 h-5 text-purple-500" />;
    case "tools":
      return <Terminal className="w-5 h-5 text-cyan-500" />;
    case "web-development":
      return <Globe className="w-5 h-5 text-green-500" />;
    case "tips":
    default:
      return <Zap className="w-5 h-5 text-violet-500" />;
  }
};

const Index = () => {
  const { t } = useTranslation();
  const topFeatured = featuredVideos[0] || allVideos[0];

  return (
    <AppLayout>
      <SEO
        title={t("nav.home")}
        description={t("brand.tagline")}
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Glow & Backdrop Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 text-center max-w-5xl">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border/80 text-xs font-mono text-muted-foreground mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>{t("home.hero_badge")}</span>
            <Sparkles className="w-3.5 h-3.5 text-primary ml-1 rtl:ml-0 rtl:mr-1" />
          </div>

          {/* Logo */}
          <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/40 shadow-xl shadow-primary/10 p-1 bg-background">
            <img src={logo} alt="Cool Tips" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            {t("home.hero_title_prefix")}{" "}
            <span className="text-primary font-mono">{t("home.hero_title_highlight")}</span>{" "}
            {t("home.hero_title_suffix")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {t("home.hero_subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold rounded-xl gap-2 shadow-lg shadow-primary/20">
              <Link to="/videos">
                <Play className="w-4 h-4 fill-current" />
                {t("home.explore_all_videos")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-semibold rounded-xl gap-2 border-border/80"
            >
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon className="w-5 h-5" variant="red" />
                {t("home.visit_youtube")}
              </a>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-card/60 border border-border/70 backdrop-blur-md max-w-3xl mx-auto text-center font-mono">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-foreground">64+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("home.stats.tutorials")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-primary">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("home.stats.practical_code")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-foreground">8+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("home.stats.topic_tracks")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-foreground">Free</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("home.stats.always_free")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED VIDEO SPOTLIGHT */}
      {topFeatured && (
        <section className="py-16 border-y border-border/60 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("home.spotlight.badge")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {t("home.spotlight.title")}
                </h2>
              </div>
              <Link
                to="/videos"
                className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
              >
                {t("home.spotlight.browse_all")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Main Player Preview */}
              <div className="lg:col-span-8">
                <VideoPlayer videoId={topFeatured.youtubeVideoId} title={topFeatured.title} />
              </div>

              {/* Spotlight Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="font-semibold text-xs">
                    {topFeatured.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {topFeatured.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground leading-snug">
                  {topFeatured.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {topFeatured.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {topFeatured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to={`/videos/${topFeatured.slug}`}>
                      {t("home.spotlight.view_details")}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
                    <a
                      href={topFeatured.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon className="w-4 h-4" variant="red" />
                      {t("home.spotlight.watch_youtube")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: LATEST VIDEOS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                {t("home.recent.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {t("home.recent.title")}
              </h2>
            </div>
            <Button asChild variant="ghost" className="gap-2 self-start sm:self-auto text-primary">
              <Link to="/videos">
                {t("home.recent.view_all")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
              <Link to="/videos">
                {t("home.recent.browse_complete", { count: allVideos.length })}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: TOPICS & CATEGORIES */}
      <section className="py-20 border-t border-border/60 bg-secondary/15">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
              {t("home.topics.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {t("home.topics.title")}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t("home.topics.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/videos?category=${encodeURIComponent(category.name)}`}
                className="group p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.slug)}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{t("home.topics.explore")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ABOUT PREVIEW */}
      <section className="py-20 border-t border-border/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                {t("home.philosophy.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {t("home.philosophy.title")}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("home.philosophy.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-foreground block">{t("home.philosophy.point1_title")}</span>
                    <span className="text-muted-foreground">{t("home.philosophy.point1_desc")}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-foreground block">{t("home.philosophy.point2_title")}</span>
                    <span className="text-muted-foreground">{t("home.philosophy.point2_desc")}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-foreground block">{t("home.philosophy.point3_title")}</span>
                    <span className="text-muted-foreground">{t("home.philosophy.point3_desc")}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-foreground block">{t("home.philosophy.point4_title")}</span>
                    <span className="text-muted-foreground">{t("home.philosophy.point4_desc")}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-xl">
                  <Link to="/about">
                    {t("home.philosophy.learn_more")} <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual Code Box */}
            <div className="lg:col-span-5" dir="ltr">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl font-mono text-xs text-left">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs">ModelStrictness.php</span>
                </div>
                <pre className="text-muted-foreground leading-relaxed overflow-x-auto">
                  <code className="text-foreground">
                    <span className="text-purple-400">namespace</span> App\Providers;{"\n\n"}
                    <span className="text-purple-400">use</span> Illuminate\Database\Eloquent\Model;{"\n\n"}
                    <span className="text-blue-400">class</span> <span className="text-yellow-400">AppServiceProvider</span> {"\n"}
                    &#123;{"\n"}
                    {"  "}<span className="text-blue-400">public function</span> <span className="text-green-400">boot</span>(): <span className="text-blue-400">void</span>{"\n"}
                    {"  "}&#123;{"\n"}
                    {"    "}<span className="text-muted-foreground">// Catch N+1 queries & unfillables early!</span>{"\n"}
                    {"    "}Model::<span className="text-green-400">shouldBeStrict</span>(! $this-&gt;app-&gt;isProduction());{"\n"}
                    {"  "}&#125;{"\n"}
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: YOUTUBE SUBSCRIBE CTA */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-t border-border/80 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-16 h-16 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#FF0000]/15">
            <YouTubeIcon className="w-9 h-9" variant="red" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t("home.subscribe_cta.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            {t("home.subscribe_cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold h-12 px-8 rounded-xl gap-2.5 shadow-lg shadow-red-500/20"
            >
              <a
                href="https://www.youtube.com/@coooltips?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="w-5 h-5" variant="white" />
                {t("home.subscribe_cta.button")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-xl gap-2">
              <Link to="/playlists">{t("home.subscribe_cta.explore_playlists")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
