export interface BlogCategory {
  id: number;
  name: string;
}

export type BlogBodyType =
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "b"
  | "i"
  | "u"
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
  headTitle: string;
  subTitle: string;
  coverPhoto: string;
  createdDate: string;
  readTime: string;
  category: BlogCategory;
  body: BlogBody[];
}
