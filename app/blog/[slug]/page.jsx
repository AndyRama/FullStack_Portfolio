import React from "react";
import { allPosts } from "contentlayer/generated";
import BlogContent from "./BlogContent"
import CardCategory from "@/app/components/CardCategory"

export async function generateStaticParams() {
  const posts = await allPosts;

  return posts.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === 'blog/' + params.slug)
  return { title: post?.title, excerpt: post?.excerpt }
}

const page = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === 'blog/' + params.slug)
  return (
    <>
      <BlogContent post={post}/>
      <CardCategory className="hidden md:contents w-3/12 mr-2" />
    </>
  )
}

export default page;
