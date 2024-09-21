export interface BlogCategory {
  id: number;
  name: string;
}

export type BlogBodyType =
  | "h2"
  | "h4"
  | "p"
  | "b"
  | "i"
  | "span"
  | "comparison"
  | "negative"
  | "positive";

export interface BlogBody {
  type: BlogBodyType;
  value: string | BlogBody[];
}

export interface Blog {
  id: number;
  mainTitle: string;
  subTitle: string;
  category: BlogCategory;
  body: BlogBody[];
}
