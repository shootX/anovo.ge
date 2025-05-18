import BlogHeader from "@/components/blog-header"
import BlogList from "@/components/blog-list"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Blog | Agency",
  description: "Latest insights and trends from our experts in design, development, and digital marketing.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Toaster />
      <BlogHeader />
      <BlogList />
      <Footer />
    </main>
  )
}
