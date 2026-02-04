import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blogPosts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useTranslation();

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Get related posts from the same category (exclude current post)
    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    // If not enough posts in same category, fill with other posts
    if (relatedPosts.length < 3) {
        const otherPosts = blogPosts
            .filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
            .slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...otherPosts);
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Image */}
            <section className="pt-20">
                <div className="container px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative aspect-video md:aspect-[21/9] overflow-hidden border-2 border-border">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-6">
                                <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-4 py-2">
                                    {t(`blog.categories.${post.category.toLowerCase()}`)}
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
                            <ArrowLeft className="w-4 h-4" />
                            {t("blog.back_to_blog")}
                        </Link>

                        {/* Post Header */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.published_at}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{post.owner_name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Eye className="w-4 h-4" />
                                    <span>{post.views} {t("blog.views")}</span>
                                </div>
                            </div>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {post.short_description}
                            </p>
                        </div>

                        <div className="border-t border-border pt-8" />

                        {/* Post Body */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {post.content.split('\n\n').map((paragraph, index) => (
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

            <Footer />
        </main>
    );
};

export default BlogPost;
