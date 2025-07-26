import { allPosts } from "content-collections";

export interface BlogPost {
  _id: string;
  title: string;
  published: string;
  slug: string;
  description: string;
  categories: string[];
  author: string;
  authorImage: string;
  type: string;
  url: string;
  html: string;
}

export function getAllBlogPosts(): BlogPost[] {
  return allPosts.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(count: number): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
} 