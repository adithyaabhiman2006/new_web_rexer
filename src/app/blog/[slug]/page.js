import { getAllPosts, getPostBySlug } from '@/lib/blog'
import BlogPostClient from './BlogPostClient'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  return <BlogPostClient post={post} />
}
