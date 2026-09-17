import { Playlist } from "@/types";
import { apiClient } from "@/lib/apiClient";

export interface IPlaylistRepository {
  getAll(): Promise<Playlist[]>;
  getBySlug(slug: string): Promise<Playlist | null>;
}

export class ApiPlaylistRepository implements IPlaylistRepository {
  async getAll(): Promise<Playlist[]> {
    return await apiClient.getPlaylists();
  }

  async getBySlug(slug: string): Promise<Playlist | null> {
    return await apiClient.getPlaylist(slug);
  }
}

export const playlistRepository = new ApiPlaylistRepository();
