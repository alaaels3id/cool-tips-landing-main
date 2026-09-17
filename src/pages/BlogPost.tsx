import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import PostCard from "@/components/PostCard";
import NoContentCard from "@/components/common/NoContentCard";
import { apiClient } from "@/lib/apiClient";
import { BlogPost as BlogPostType } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User, ArrowLeft, ArrowRight, FileText } from "lucide-react";

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    setLoading(true);

    apiClient
      .getPost(slug)
      .then((data) => {
        if (isMounted) {
          if (data?.post) {
            setPost(data.post);
            setRelatedPosts(data.related_posts || []);
          } else {
            setPost(null);
            setRelatedPosts([]);
          }
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPost(null);
          setRelatedPosts([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug, i18n.language]);

  if (loading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">Loading article...</p>
        </div>
      </AppLayout>
    );
  }

  if (!post) {
    return (
      <AppLayout>
        <SEO title={t("common.no_posts_title")} />
        <div className="container mx-auto px-4 py-20">
          <NoContentCard
            icon={FileText}
            title={t("common.no_posts_title")}
            description={t("common.no_posts_desc")}
            actionLabel={t("blog.back_to_blog", "Back to Articles")}
            actionLink="/blog"
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <SEO
        title={post.title}
        description={post.short_description || post.title}
      />

      {/* Hero Image */}
      <section className="pt-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl border-2 border-border shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6">
                <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-4 py-2 shadow-lg">
                  {t(`blog.categories.${post.category?.toLowerCase()}`, post.category)}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <article className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              {t("blog.back_to_blog")}
            </Link>

            {/* Post Header */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono uppercase tracking-widest">
                {post.published_at && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.published_at}</span>
                  </div>
                )}
                {post.owner_name && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.owner_name}</span>
                  </div>
                )}
                {post.views !== undefined && (
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{post.views} {t("blog.views")}</span>
                  </div>
                )}
              </div>

              {post.short_description && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.short_description}
                </p>
              )}
            </div>

            <div className="border-t border-border pt-8" />

            {/* Post Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {(post.content || "").split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold uppercase">
                  {t("blog.related_posts")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </AppLayout>
  );
};

export default BlogPost;
