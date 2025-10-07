import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/data/blogs";
import ClientBlogDetail from "./ClientBlogDetail";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return notFound();
  return <ClientBlogDetail post={post} />;
}
