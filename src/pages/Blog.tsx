import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Laravel", "PHP", "Design", "DevOps"];

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 border-b border-border">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-bold uppercase tracking-widest px-6 py-2">
                            {t("blog.badge")}
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold uppercase">
                            <span className="text-primary">{t("blog.title")}</span>{" "}
                            {t("blog.subtitle")}
                        </h1>

                        <p className="text-xl text-muted-foreground uppercase tracking-wide font-mono">
                            {t("blog.description")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
                <div className="container px-4">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 ${selectedCategory === category
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-card border-border hover:border-primary/50"
                                    }`}
                            >
                                {t(`blog.categories.${category.toLowerCase()}`)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-2xl font-bold uppercase text-muted-foreground">
                                No posts found in this category
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Blog;
