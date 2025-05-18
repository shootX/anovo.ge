export const metadata = {
  title: "Blog Post | Agency",
  description: "Read our latest insights and trends in design, development, and digital marketing.",
}

import BlogPostPageClient from "./BlogPostPageClient"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient params={params} />
}
