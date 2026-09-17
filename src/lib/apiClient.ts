import { Category, Playlist, Resource, Video } from "@/types";
import { BlogPost } from "@/data/posts";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://cool-tips.test/api";

function getCurrentLanguage(): string {
  try {
    const stored = localStorage.getItem("i18nextLng");
    if (stored && (stored.startsWith("ar") || stored === "ar")) return "ar";
    return document.documentElement.lang?.startsWith("ar") ? "ar" : "en";
  } catch {
    return "en";
  }
}

export interface ApiResponse<T> {
  status: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedData<T> {
  data: T[];
  pagination: {
    total: number;
    currentPage: number;
    perPage: number;
    last_page: number;
  };
}

export interface HomePayload {
  brand?: {
    name?: string;
    tagline?: string;
    youtube_url?: string;
  };
  stats?: {
    subscribers?: string;
    videos?: string;
    views?: string;
    resources?: string;
    [key: string]: any;
  };
  hero_video?: Video | null;
  latest_videos?: Video[];
  featured_playlists?: Playlist[];
  categories?: Category[];
  code_box?: {
    file_name?: string;
    code?: string;
  };
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;
  const lang = getCurrentLanguage();

  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");
  headers.set("lang", lang);
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = `API error (${response.status})`;
    try {
      const errJson = await response.json();
      errorMsg = errJson.message || errJson.error || errorMsg;
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  const json: ApiResponse<T> = await response.json();
  return json.data;
}

export const apiClient = {
  // Home Page
  async getHome(): Promise<HomePayload> {
    try {
      const data = await request<HomePayload>("/home");
      return {
        brand: data?.brand || {},
        stats: data?.stats || {},
        hero_video: data?.hero_video || null,
        latest_videos: Array.isArray(data?.latest_videos) ? data.latest_videos : [],
        featured_playlists: Array.isArray(data?.featured_playlists) ? data.featured_playlists : [],
        categories: Array.isArray(data?.categories) ? data.categories : [],
      };
    } catch (err) {
      console.warn("Failed to fetch /home from API:", err);
      return {
        brand: {},
        stats: {},
        hero_video: null,
        latest_videos: [],
        featured_playlists: [],
        categories: [],
      };
    }
  },

  // Videos
  async getVideos(params?: {
    query?: string;
    category?: string;
    playlist?: string;
    tag?: string;
    sort?: string;
    page?: number;
    per_page?: number;
  }): Promise<PaginatedData<Video>> {
    try {
      const q = new URLSearchParams();
      if (params?.query) q.set("query", params.query);
      if (params?.category && params.category !== "all") q.set("category", params.category);
      if (params?.playlist && params.playlist !== "all") q.set("playlist", params.playlist);
      if (params?.tag) q.set("tag", params.tag);
      if (params?.sort) q.set("sort_by", params.sort);
      if (params?.page) q.set("page", String(params.page));
      if (params?.per_page) q.set("per_page", String(params.per_page));

      const queryStr = q.toString() ? `?${q.toString()}` : "";
      const res = await request<PaginatedData<Video>>(`/videos${queryStr}`);
      return {
        data: Array.isArray(res?.data) ? res.data : [],
        pagination: res?.pagination || {
          total: res?.data?.length || 0,
          currentPage: 1,
          perPage: params?.per_page || 10,
          last_page: 1,
        },
      };
    } catch (err) {
      console.warn("Failed to fetch /videos from API:", err);
      return {
        data: [],
        pagination: {
          total: 0,
          currentPage: 1,
          perPage: params?.per_page || 10,
          last_page: 1,
        },
      };
    }
  },

  async getVideo(slug: string): Promise<{ video: Video; related_videos: Video[] } | null> {
    try {
      return await request<{ video: Video; related_videos: Video[] }>(`/videos/${encodeURIComponent(slug)}`);
    } catch (err) {
      console.warn(`Failed to fetch video ${slug} from API:`, err);
      return null;
    }
  },

  // Playlists
  async getPlaylists(featured?: boolean): Promise<Playlist[]> {
    try {
      const endpoint = featured ? "/playlists?featured=1" : "/playlists";
      const res = await request<Playlist[]>(endpoint);
      return Array.isArray(res) ? res : [];
    } catch (err) {
      console.warn("Failed to fetch /playlists from API:", err);
      return [];
    }
  },

  async getPlaylist(slug: string): Promise<Playlist | null> {
    try {
      return await request<Playlist>(`/playlists/${encodeURIComponent(slug)}`);
    } catch (err) {
      console.warn(`Failed to fetch playlist ${slug} from API:`, err);
      return null;
    }
  },

  // Developer Resources
  async getResources(params?: { technology?: string; type?: string; query?: string }): Promise<Resource[]> {
    try {
      const q = new URLSearchParams();
      if (params?.technology && params.technology !== "all" && params.technology !== "All") {
        q.set("technology", params.technology);
      }
      if (params?.type && params.type !== "all" && params.type !== "All") {
        q.set("type", params.type);
      }
      if (params?.query) q.set("query", params.query);

      const queryStr = q.toString() ? `?${q.toString()}` : "";
      const res = await request<Resource[]>(`/resources${queryStr}`);
      return Array.isArray(res) ? res : [];
    } catch (err) {
      console.warn("Failed to fetch /resources from API:", err);
      return [];
    }
  },

  // Categories
  async getCategories(): Promise<Category[]> {
    try {
      const res = await request<Category[]>("/categories");
      return Array.isArray(res) ? res : [];
    } catch (err) {
      console.warn("Failed to fetch /categories from API:", err);
      return [];
    }
  },

  // Blog Posts
  async getPosts(params?: { category?: string; page?: number }): Promise<PaginatedData<BlogPost>> {
    try {
      const q = new URLSearchParams();
      if (params?.category && params.category !== "all" && params.category !== "All") {
        q.set("category", params.category);
      }
      if (params?.page) q.set("page", String(params.page));

      const queryStr = q.toString() ? `?${q.toString()}` : "";
      const res = await request<PaginatedData<BlogPost>>(`/posts${queryStr}`);
      return {
        data: Array.isArray(res?.data) ? res.data : [],
        pagination: res?.pagination || {
          total: res?.data?.length || 0,
          currentPage: 1,
          perPage: 10,
          last_page: 1,
        },
      };
    } catch (err) {
      console.warn("Failed to fetch /posts from API:", err);
      return {
        data: [],
        pagination: {
          total: 0,
          currentPage: 1,
          perPage: 10,
          last_page: 1,
        },
      };
    }
  },

  async getPost(slug: string): Promise<{ post: BlogPost; related_posts: BlogPost[] } | null> {
    try {
      return await request<{ post: BlogPost; related_posts: BlogPost[] }>(`/posts/${encodeURIComponent(slug)}`);
    } catch (err) {
      console.warn(`Failed to fetch post ${slug} from API:`, err);
      return null;
    }
  },

  // Pages (About, Privacy, Terms)
  async getPage<T = any>(slug: "about" | "privacy" | "terms"): Promise<T> {
    return await request<T>(`/pages/${slug}`);
  },

  // Global Settings
  async getSettings(): Promise<any> {
    try {
      return await request<any>("/settings");
    } catch (err) {
      console.warn("Failed to fetch /settings from API:", err);
      return {};
    }
  },

  // Contact Form Submission
  async sendContact(data: { name: string; email: string; subject: string; message: string }) {
    return await request<any>("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
