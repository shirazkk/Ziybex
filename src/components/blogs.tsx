"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { latestPostsQuery } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import type { BlogListPost } from "@/data/type";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function BlogsSection() {
  const [latest, setLatest] = useState<BlogListPost[]>([]);

  // Fetching blogs
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await client.fetch<BlogListPost[]>(latestPostsQuery);
        setLatest(res || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section
      id="blogs"
      className="container mx-auto px-4 md:px-0 py-16 md:py-24"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Latest Blogs
        </h2>
        <p className="text-muted-foreground mt-3">
          Insights, stories, and creative thoughts from the Ziybex team.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
        {latest.map((post, idx) => (
          <motion.article
            key={post._id}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group rounded-xl border border-border/70 overflow-hidden bg-background hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.01 }}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    alt={post.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {post.shortDescription}
                </p>
                <Button variant="link" className="mt-4 hover:text-accent">
                  Read More
                </Button>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          size="lg"
          asChild
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Link href="/blog">All Blogs</Link>
        </Button>
      </div>
    </section>
  );
}
