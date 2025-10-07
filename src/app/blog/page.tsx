"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllBlogs } from "@/data/blogs";

export default function BlogIndexPage() {
  const posts = getAllBlogs();

  return (
    <div className="container mx-auto px-4 md:px-0 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">All Blogs</h1>
        <p className="text-pretty text-muted-foreground">Explore all articles and updates from our creative team.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        {posts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group rounded-xl border border-border/70 overflow-hidden bg-background hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.01 }}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {post.shortDescription}
                </p>
                <div className="text-xs text-muted-foreground mt-2">
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="mt-4 inline-flex items-center text-accent hover:underline">
                  Read More
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}


