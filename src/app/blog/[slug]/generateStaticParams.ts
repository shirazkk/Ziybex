import { getAllBlogs } from "@/data/blogs"

export async function generateStaticParams() {
  const posts = getAllBlogs()
  return posts.map((p) => ({ slug: p.slug }))
}
