"use client";

import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/data/blogs";
import { getAllBlogs } from "@/data/blogs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaFacebook, FaLinkedin, FaCopy } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function ClientBlogDetail({ post }: { post: Blog }) {
  const allPosts = getAllBlogs();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <article className="container mx-auto px-4 md:px-10 py-16 md:py-24">
      <div>
        <div>
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          <h1 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight mt-3">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>By Ziybex Team</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <div className="relative aspect-[16/6] mt-6 rounded-xl overflow-hidden border">
            <Image
              src={
                post.image ||
                "/placeholder.svg?height=480&width=854&query=featured%20blog%20image"
              }
              alt={post.title}
              fill
              className="object-cover w-[200px] h-[200px]"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b pb-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Share:</span>
              <TooltipProvider>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        aria-label="Share on Facebook"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {/* Facebook */}
                        <FaFacebook />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Facebook</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        aria-label="Share on X"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {/* X/Twitter */}
                        <FaSquareXTwitter />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>X</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        aria-label="Share on LinkedIn"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {/* LinkedIn */}
                        <FaLinkedin />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        aria-label="Copy link"
                        onClick={() => {
                          if (
                            typeof navigator !== "undefined" &&
                            navigator.clipboard
                          ) {
                            navigator.clipboard.writeText(shareUrl);
                          }
                        }}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {/* Link */}
                        <FaCopy />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy link</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>

          <div className="mt-8">
            <div className="prose prose-invert max-w-none leading-relaxed text-pretty">
              {post.content}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="block hover:underline"
                >
                  ← Previous: {prevPost.title}
                </Link>
              ) : (
                <span className="text-muted-foreground">No previous post</span>
              )}
            </div>
            <div className="rounded-lg border p-4 text-right">
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="block hover:underline"
                >
                  Next: {nextPost.title} →
                </Link>
              ) : (
                <span className="text-muted-foreground">No next post</span>
              )}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold">Related Posts</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-xl border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium group-hover:text-accent line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {related.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
