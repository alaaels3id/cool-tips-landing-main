import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { apiClient } from "@/lib/apiClient";
import { BlogPost } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const LatestPosts = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    let isMounted = true;
    apiClient.getPosts({ page: 1 }).then((res) => {
      if (isMounted) {
        setLatestPosts((res.data || []).slice(0, 3));
      }
    });
    return () => {
      isMounted = false;
    };
  }, [i18n.language]);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 border-t border-border">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-bold uppercase tracking-widest px-6 py-2">
              {t("blog.section_badge")}
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold uppercase">
              <span className="text-primary">{t("blog.section_title")}</span>{" "}
              {t("blog.section_subtitle")}
            </h2>

            <p className="text-lg text-muted-foreground uppercase tracking-wide font-mono max-w-3xl mx-auto">
              {t("blog.section_description")}
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-primary hover:underline group transition-all"
            >
              {t("blog.view_all")}
              {isRtl ? (
                <ArrowRight className="w-5 h-5 rotate-180 group-hover:translate-x-[-4px] transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
