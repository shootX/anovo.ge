"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react"

// Sample blog posts data (expanded)
const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape and how you can implement them in your projects.",
    category: "Design",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "web-design-trends-2023",
    featured: true,
  },
  {
    id: 2,
    title: "How to Create an Effective Digital Marketing Strategy",
    excerpt:
      "Learn the key components of a successful digital marketing strategy and how to measure its effectiveness for your business.",
    category: "Marketing",
    date: "May 28, 2023",
    author: "Michael Brown",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "effective-digital-marketing-strategy",
    featured: true,
  },
  {
    id: 3,
    title: "The Importance of User Experience in Web Development",
    excerpt:
      "Explore why user experience is crucial for the success of your website and how to improve it to increase conversions.",
    category: "Development",
    date: "April 10, 2023",
    author: "Emily Davis",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "importance-of-user-experience",
    featured: true,
  },
  {
    id: 4,
    title: "5 Ways to Improve Your Website's SEO",
    excerpt:
      "Practical tips and strategies to improve your website's search engine optimization and increase organic traffic.",
    category: "Marketing",
    date: "March 22, 2023",
    author: "David Wilson",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "improve-website-seo",
  },
  {
    id: 5,
    title: "The Future of Mobile App Development",
    excerpt: "A look at emerging technologies and trends that will shape the future of mobile application development.",
    category: "Development",
    date: "February 15, 2023",
    author: "Jennifer Lee",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-mobile-app-development",
  },
  {
    id: 6,
    title: "Building a Strong Brand Identity",
    excerpt: "Steps to create a cohesive and memorable brand identity that resonates with your target audience.",
    category: "Strategy",
    date: "January 30, 2023",
    author: "Robert Taylor",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-strong-brand-identity",
  },
  {
    id: 7,
    title: "The Role of AI in Modern Web Design",
    excerpt: "How artificial intelligence is transforming web design and what it means for designers and businesses.",
    category: "Technology",
    date: "January 12, 2023",
    author: "Sarah Johnson",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ai-in-modern-web-design",
  },
  {
    id: 8,
    title: "Responsive Design Best Practices",
    excerpt:
      "Essential best practices for creating responsive websites that provide an optimal viewing experience across all devices.",
    category: "Design",
    date: "December 5, 2022",
    author: "Michael Brown",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "responsive-design-best-practices",
  },
  {
    id: 9,
    title: "Content Marketing Strategies for 2023",
    excerpt: "Effective content marketing strategies to help your business stand out and engage your target audience.",
    category: "Marketing",
    date: "November 18, 2022",
    author: "Emily Davis",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "content-marketing-strategies-2023",
  },
]

export default function BlogList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  return (
    <section className="bg-white py-16 sm:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-xl bg-cream shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {post.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-darkblue">
                    Featured
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-darkblue/60">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-darkblue">
                    <Tag className="mr-1 h-3 w-3" />
                    {post.category}
                  </span>
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

        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  page === 1 ? "bg-gold text-darkblue" : "bg-cream text-darkblue hover:bg-gold/20"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
