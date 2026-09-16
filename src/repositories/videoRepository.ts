import { Video } from "@/types";
import { allVideos } from "@/data/videos";

export interface VideoSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  sortBy?: "newest" | "oldest" | "views";
}

export interface IVideoRepository {
  getAll(): Promise<Video[]>;
  getBySlug(slug: string): Promise<Video | null>;
  getById(id: string): Promise<Video | null>;
  getFeatured(): Promise<Video[]>;
  getLatest(limit?: number): Promise<Video[]>;
  getRelated(video: Video, limit?: number): Promise<Video[]>;
  search(params: VideoSearchParams): Promise<Video[]>;
}

export class StaticVideoRepository implements IVideoRepository {
  async getAll(): Promise<Video[]> {
    return [...allVideos];
  }

  async getBySlug(slug: string): Promise<Video | null> {
    const found = allVideos.find((v) => v.slug === slug || v.id === slug || v.youtubeVideoId === slug);
    return found || null;
  }

  async getById(id: string): Promise<Video | null> {
    const found = allVideos.find((v) => v.id === id || v.youtubeVideoId === id || v.slug === id);
    return found || null;
  }

  async getFeatured(): Promise<Video[]> {
    return allVideos.filter((v) => v.featured);
  }

  async getLatest(limit = 6): Promise<Video[]> {
    return allVideos.slice(0, limit);
  }

  async getRelated(video: Video, limit = 4): Promise<Video[]> {
    return allVideos
      .filter((v) => v.id !== video.id)
      .filter(
        (v) =>
          v.category === video.category ||
          v.tags.some((t) => video.tags.includes(t))
      )
      .slice(0, limit);
  }

  async search(params: VideoSearchParams): Promise<Video[]> {
    let result = [...allVideos];

    if (params.category && params.category !== "all") {
      const catLower = params.category.toLowerCase();
      result = result.filter(
        (v) =>
          v.category.toLowerCase() === catLower ||
          v.tags.some((t) => t.toLowerCase() === catLower)
      );
    }

    if (params.tag) {
      const tagLower = params.tag.toLowerCase();
      result = result.filter((v) =>
        v.tags.some((t) => t.toLowerCase() === tagLower)
      );
    }

    if (params.query && params.query.trim()) {
      const q = params.query.toLowerCase().trim();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q) ||
          v.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (params.sortBy === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    } else if (params.sortBy === "views") {
      result.sort((a, b) => {
        const parseViews = (str?: string) => {
          if (!str) return 0;
          if (str.includes("K")) return parseFloat(str) * 1000;
          return parseFloat(str) || 0;
        };
        return parseViews(b.views) - parseViews(a.views);
      });
    } else {
      // Default: newest
      result.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    return result;
  }
}

export const videoRepository = new StaticVideoRepository();
