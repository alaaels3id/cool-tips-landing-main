import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User } from "lucide-react";

interface PostCardProps {
    post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    return (
        <div className="group flex flex-col bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
            <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wider">
                        {t(`blog.categories.${post.category.toLowerCase()}`)}
                    </Badge>
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.published_at}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views} {t("blog.views")}</span>
                    </div>
                </div>

                <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 uppercase">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {post.short_description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase">{post.owner_name}</span>
                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                    >
                        {t("blog.read_more")} {isRtl ? "←" : "→"}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
