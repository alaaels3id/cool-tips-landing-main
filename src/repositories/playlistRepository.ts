import { Playlist } from "@/types";
import { playlists } from "@/data/playlists";

export interface IPlaylistRepository {
  getAll(): Promise<Playlist[]>;
  getBySlug(slug: string): Promise<Playlist | null>;
}

export class StaticPlaylistRepository implements IPlaylistRepository {
  async getAll(): Promise<Playlist[]> {
    return [...playlists];
  }

  async getBySlug(slug: string): Promise<Playlist | null> {
    const found = playlists.find((p) => p.slug === slug || p.id === slug);
    return found || null;
  }
}

export const playlistRepository = new StaticPlaylistRepository();
