"use client"

import { useEffect } from "react"
import BlogHeader from "@/components/blog-header"
import BlogPost from "@/components/blog-post"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function BlogPostPageClient({ params }: { params: { slug: string } }) {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      <Toaster />
      <BlogHeader />
      <BlogPost slug={params.slug} />
      <Footer />
    </main>
  )
}
