import { notFound } from "next/navigation";
import { postBySlugQuery } from "@/sanity/queries";
import ClientBlogDetail from "./ClientBlogDetail";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Ziybex Blog | Insights & Creative Strategies",
  description:
    "Explore the latest insights, tips, and strategies from Ziybex on web design, branding, SEO, and digital marketing trends.",
  alternates: {
    canonical: "https://ziybex.com/blog",
  },
  openGraph: {
    title: "Ziybex Blog | Creative Insights & Marketing Ideas",
    description:
      "Stay updated with Ziybex’s expert blogs on modern web design, branding, SEO, and creative marketing innovations.",
    url: "https://ziybex.com/blog",
    images: [
      {
        url: "/ZS.jpg",
        width: 1200,
        height: 630,
        alt: "Ziybex Blog - Creative Insights",
      },
    ],
    siteName: "Ziybex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziybex Blog | Creative Marketing Insights",
    description:
      "Dive into Ziybex’s latest blogs on web design, branding, and digital marketing trends.",
    images: ["/ZS.jpg"],
  },
  keywords: [
    "Ziybex blog",
    "creative marketing insights",
    "branding tips",
    "SEO strategies",
    "web design blog",
    "digital marketing articles",
    "Next.js blog",
    "UI UX trends",
  ],
};
