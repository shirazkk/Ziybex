import { notFound } from "next/navigation";
import { postBySlugQuery } from "@/sanity/queries";
import ClientBlogDetail from "./ClientBlogDetail";
import { client } from "@/sanity/lib/client";

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
