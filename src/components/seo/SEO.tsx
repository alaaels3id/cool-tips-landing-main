import { useEffect } from "react";
import { Video } from "@/types";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: "website" | "video.other" | "article";
  ogImage?: string;
  video?: Video;
}

export const SEO = ({
  title,
  description = "Practical programming tips for developers. Learn Laravel, PHP, backend techniques, and web development through concise, practical tutorials.",
  canonicalUrl,
  ogType = "website",
  ogImage = "https://img.youtube.com/vi/v6JeRg8wDEM/maxresdefault.jpg",
  video,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Cool Tips` : "Cool Tips — Practical Programming Tips for Developers";

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (nameOrProperty: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(`meta[${nameOrProperty}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameOrProperty, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("name", "description", description);
    updateMeta("property", "og:title", fullTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:image", ogImage);
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", fullTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", ogImage);

    // Canonical link
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }

    // JSON-LD structured data
    const scriptId = "jsonld-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    if (video) {
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: [video.thumbnailUrl || `https://img.youtube.com/vi/${video.youtubeVideoId}/maxresdefault.jpg`],
        uploadDate: video.publishedAt,
        duration: `PT${video.duration.replace(":", "M")}S`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeVideoId}`,
        publisher: {
          "@type": "Organization",
          name: "Cool Tips",
          logo: {
            "@type": "ImageObject",
            url: "https://coooltips.com/assets/logo.png"
          }
        }
      });
    } else {
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Cool Tips",
        url: window.location.origin,
        description: description,
      });
    }

    return () => {
      // clean up optional script if unmounting
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, video]);

  return null;
};

export default SEO;
