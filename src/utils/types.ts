export type GameStatus = "draft" | "published" | "updated";
export interface Post {
  frontmatter: {
    title: string;
    description: string;
    date: string;
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
    status: GameStatus;
  };
  url: string;
}
