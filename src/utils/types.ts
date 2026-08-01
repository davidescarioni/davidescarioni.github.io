export type GameStatus = "draft" | "published" | "updated";
export interface Post {
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags?: string[]
  };
  url: string;
}
export interface Game {
  frontmatter: {
    title: string;
    description: string;
    banner: string;
    link: string;
    relatedLinks: string[];
    downloadUrls: string[];
    status: GameStatus;
    releasedDate: number;
  };
  url: string;
}
