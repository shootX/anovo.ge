"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Facebook, Github, Linkedin, Share2 } from "lucide-react"
import { CircleShape, SquareShape } from "./parallax-shapes"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

// Sample blog posts data
const featuredPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape and how you can implement them in your projects.",
    category: "Design",
    date: "June 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "web-design-trends-2023",
  },
  {
    id: 2,
    title: "How to Create an Effective Digital Marketing Strategy",
    excerpt:
      "Learn the key components of a successful digital marketing strategy and how to measure its effectiveness for your business.",
    category: "Marketing",
    date: "May 28, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "effective-digital-marketing-strategy",
  },
  {
    id: 3,
    title: "The Importance of User Experience in Web Development",
    excerpt:
      "Explore why user experience is crucial for the success of your website and how to improve it to increase conversions.",
    category: "Development",
    date: "April 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "importance-of-user-experience",
  },
]

// Create a custom Reddit icon since Lucide doesn't have one
const RedditIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
    <path d="M8.25 14.25C11.5 16.5 12.5 16.5 15.75 14.25" />
    <path d="M16.75 7.75L19.25 7.25" />
    <path d="M16.75 7.5V4.75" />
  </svg>
)

// Create a custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 18L18 6M18 18L6 6" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
  </svg>
)

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { toast } = useToast()
  const [activeSharePost, setActiveSharePost] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Share on social media
  const shareOnSocial = (platform: string, post: any) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    const url = encodeURIComponent(`${baseUrl}/blog/${post.slug}`)
    const title = encodeURIComponent(post.title)
    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      case "reddit":
        shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`
        break
      case "github":
        shareUrl = `https://github.com/` // GitHub doesn't have a direct sharing mechanism
        break
      default:
        return
    }

    if (typeof window !== "undefined") {
      window.open(shareUrl, "_blank")
      setActiveSharePost(null)

      toast({
        title: "Shared!",
        description: `Article shared on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
      })
    }
  }

  return (
    <section id="blog" className="relative bg-white py-24 sm:py-32" ref={ref}>
      {/* Parallax Elements */}
      <CircleShape className="left-[5%] top-[10%] h-48 w-48 bg-gold/10" speed={0.3} direction="up" />
      <SquareShape className="right-[10%] top-[15%] h-32 w-32 bg-darkblue/10" speed={0.4} direction="down" />
      <CircleShape className="bottom-[10%] left-[15%] h-40 w-40 bg-cream/30" speed={0.5} direction="left" />
      <SquareShape className="bottom-[20%] right-[5%] h-56 w-56 bg-gold/5" speed={0.2} direction="right" />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0A112810_1px,transparent_1px),linear-gradient(to_bottom,#0A112810_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-gold">Our Blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl">Insights & Industry Trends</p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-darkblue/70">
            Stay updated with the latest trends, tips, and insights from our experts in design, development, and digital
            marketing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-cream shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Share Button */}
                <button
                  onClick={() => setActiveSharePost(activeSharePost === post.id ? null : post.id)}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-darkblue shadow-md transition-transform hover:scale-110"
                >
                  <Share2 className="h-4 w-4" />
                </button>

                {/* Share Menu */}
                {activeSharePost === post.id && (
                  <div className="absolute right-3 top-12 z-10 rounded-lg bg-white p-2 shadow-xl">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => shareOnSocial("facebook", post)}
                        className="flex items-center gap-2 rounded px-2 py-1 text-xs text-darkblue transition-colors hover:bg-cream"
                      >
                        <Facebook className="h-3 w-3" /> Facebook
                      </button>
                      <button
                        onClick={() => shareOnSocial("twitter", post)}
                        className="flex items-center gap-2 rounded px-2 py-1 text-xs text-darkblue transition-colors hover:bg-cream"
                      >
                        <XIcon className="h-3 w-3" /> X (Twitter)
                      </button>
                      <button
                        onClick={() => shareOnSocial("linkedin", post)}
                        className="flex items-center gap-2 rounded px-2 py-1 text-xs text-darkblue transition-colors hover:bg-cream"
                      >
                        <Linkedin className="h-3 w-3" /> LinkedIn
                      </button>
                      <button
                        onClick={() => shareOnSocial("reddit", post)}
                        className="flex items-center gap-2 rounded px-2 py-1 text-xs text-darkblue transition-colors hover:bg-cream"
                      >
                        <RedditIcon className="h-3 w-3" /> Reddit
                      </button>
                      <button
                        onClick={() => shareOnSocial("github", post)}
                        className="flex items-center gap-2 rounded px-2 py-1 text-xs text-darkblue transition-colors hover:bg-cream"
                      >
                        <Github className="h-3 w-3" /> GitHub
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-darkblue">
                    {post.category}
                  </span>
                  <span className="text-xs text-darkblue/60">{post.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-darkblue">{post.title}</h3>
                <p className="mb-4 flex-1 text-sm text-darkblue/70">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-gold transition-colors hover:text-darkblue"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full bg-darkblue px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-gold hover:text-darkblue"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
