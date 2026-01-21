export type Album = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Locale = "en" | "bn";

export type PageParams = Promise<{ lang: string }>;
