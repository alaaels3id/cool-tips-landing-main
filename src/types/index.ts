export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  youtubeUrl: string;
  youtubeVideoId: string;
  category: string;
  tags: string[];
  publishedAt: string;
  duration: string;
  views?: string;
  featured?: boolean;
  resources?: {
    title: string;
    url: string;
    type: 'github' | 'docs' | 'cheatsheet' | 'external';
  }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color?: string;
  iconName?: string;
}

export interface Playlist {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  videoCount: number;
  youtubeUrl: string;
  tags: string[];
  featured?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'github' | 'cheatsheet' | 'tool' | 'docs';
  technology: string;
  featured?: boolean;
}
