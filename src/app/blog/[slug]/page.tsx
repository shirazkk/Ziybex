import { notFound } from "next/navigation";
import { postBySlugQuery } from "@/sanity/queries";
import { client } from "@/sanity/lib/client";
import ClientBlogDetail from "./ClientBlogDetail";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "Sorry, the blog post you're looking for does not exist.",
    };
  }

  const url = `https://ziybex.com/blog/${slug}`;

  return {
    title: post.title
      ? `${post.title}`
      : "Ziybex Blog | Insights & Creative Strategies",
    description:
      post.shortDescription ||
      "Explore the latest insights on social media marketing, web design, and branding.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      url,
      siteName: "Ziybex",
      images: [
        {
          url: post.mainImage?.asset?.url || "/ZS.jpg",
          width: 1200,
          height: 630,
          alt: post.title || "Ziybex Blog - Creative Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.shortDescription,
      images: [post.mainImage?.asset?.url || "/ZS.jpg"],
    },
    keywords: [
      "Ziybex blog",
      "social media marketing",
      "branding tips",
      "SEO strategies",
      "web design blog",
      "marketing insights",
      post.title,
    ],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  if (!post) return notFound();
  return <ClientBlogDetail post={post} />;
}
