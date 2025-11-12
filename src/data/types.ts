export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
  gallery?: string[];
};

export type Project = {
  slug: string;
  title: string;
  cover: string;
  tags: string[];
  excerpt: string;
};

