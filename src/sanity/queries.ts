import { groq } from 'next-sanity'

export const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...4]{
  _id,
  title,
  "slug": slug.current,
  mainImage,
  shortDescription,
  publishedAt,
  author
}`

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  mainImage,
  shortDescription,
  publishedAt,
  author
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  mainImage,
  shortDescription,
  content,
  publishedAt,
  author
}`


