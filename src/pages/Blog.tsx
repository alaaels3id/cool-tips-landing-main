import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import PostCard from "@/components/PostCard";
import NoContentCard from "@/components/common/NoContentCard";
import { apiClient } from "@/lib/apiClient";
import { BlogPost } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export const Blog = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Laravel", "PHP", "Design", "DevOps"];

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    apiClient
      .getPosts({
        category: selectedCategory !== "All" ? selectedCategory : undefined,
      })
      .then((res) => {
        if (isMounted) {
          setPosts(res.data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPosts([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, i18n.language]);

  return (
    <AppLayout>
      <SEO
        title={t("blog.title")}
        description={t("blog.description")}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-bold uppercase tracking-widest px-6 py-2">
              {t("blog.badge")}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
              <span className="text-primary">{t("blog.title")}</span>{" "}
              {t("blog.subtitle")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-wide font-mono">
              {t("blog.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-200 border ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(`blog.categories.${category.toLowerCase()}`, category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid or Empty State */}
      <section className="py-16">
        <div className="container px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 rounded-2xl bg-card border border-border animate-pulse" />
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <NoContentCard
              icon={FileText}
              title={t("common.no_posts_title")}
              description={t("common.no_posts_desc")}
              actionLabel={t("common.reset_filters")}
              onAction={() => setSelectedCategory("All")}
            />
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default Blog;
