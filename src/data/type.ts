// Shared blog-related interfaces
import type { TypedObject } from "@portabletext/types";

export interface SanityImageAssetRef {
  _ref: string;
  _type?: string;
}

export interface SanityImage {
  _type?: string;
  asset?: SanityImageAssetRef;
}

export interface BlogListPost {
  _id: string;
  title: string;
  slug: string;
  mainImage?: SanityImage;
  shortDescription?: string;
  publishedAt: string;
  author?: string | { name?: string };
}

export interface BlogDetailPost extends BlogListPost {
  content?: TypedObject[];
}


