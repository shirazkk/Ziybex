import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { Calendar, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { BlogDetailPost } from "@/data/type";

export default function BlogDetail({ post }: { post: BlogDetailPost }) {
  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const authorName: string =
    typeof post.author === "string"
      ? post.author
      : (post.author?.name ?? "Unknown");
  const content: TypedObject[] = Array.isArray(post.content)
    ? post.content
    : [];

  return (
    <article className="h-auto bg-background">
      {/* Hero Section with gradient background */}
      <div className="relative bg-gradient-to-b from-blog-accent-subtle to-background">
        <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Category badge - decorative element */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Featured Article
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-8">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {authorName}
                  </div>
                  <div className="text-xs">Author</div>
                </div>
              </div>

              <Separator orientation="vertical" className="h-10" />

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.mainImage && (
            <div className="relative mb-12 md:mb-16 group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-blog-image)]">
                <Image
                  src={urlFor(post.mainImage).url()}
                  fill
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
            </div>
          )}

          {/* Article Content */}
          <div className="relative">
            {/* Decorative line accent */}
            <div className="absolute left-0 top-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent rounded-full" />

            <div className="prose pl-8">
              <PortableText value={content} />
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <span>End of article</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
