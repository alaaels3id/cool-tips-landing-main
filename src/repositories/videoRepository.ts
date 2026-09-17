import { Video } from "@/types";
import { apiClient } from "@/lib/apiClient";

export interface VideoSearchParams {
  query?: string;
  category?: string;
  playlist?: string;
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

export class ApiVideoRepository implements IVideoRepository {
  async getAll(): Promise<Video[]> {
    const res = await apiClient.getVideos({ per_page: 50 });
    return res.data;
  }

  async getBySlug(slug: string): Promise<Video | null> {
    const res = await apiClient.getVideo(slug);
    return res?.video || null;
  }

  async getById(id: string): Promise<Video | null> {
    const res = await apiClient.getVideo(id);
    return res?.video || null;
  }

  async getFeatured(): Promise<Video[]> {
    const res = await apiClient.getVideos({ per_page: 10 });
    return res.data.filter((v) => v.featured);
  }

  async getLatest(limit = 6): Promise<Video[]> {
    const res = await apiClient.getVideos({ per_page: limit, sort: "newest" });
    return res.data.slice(0, limit);
  }

  async getRelated(video: Video, limit = 4): Promise<Video[]> {
    const res = await apiClient.getVideo(video.slug || video.id);
    if (res?.related_videos && res.related_videos.length > 0) {
      return res.related_videos.slice(0, limit);
    }
    const all = await this.getAll();
    return all
      .filter((v) => v.id !== video.id)
      .filter((v) => (video.playlist && v.playlist === video.playlist) || v.category === video.category || v.tags.some((t) => video.tags.includes(t)))
      .slice(0, limit);
  }

  async search(params: VideoSearchParams): Promise<Video[]> {
    const res = await apiClient.getVideos({
      query: params.query,
      category: params.category,
      playlist: params.playlist,
      tag: params.tag,
      sort: params.sortBy,
      per_page: 100,
    });
    return res.data;
  }
}

export const videoRepository = new ApiVideoRepository();
