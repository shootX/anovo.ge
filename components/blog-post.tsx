"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Bookmark,
  Share2,
  ThumbsUp,
  Copy,
  Check,
  List,
  ArrowRight,
  Github,
} from "lucide-react"
import { CircleShape, SquareShape, LinePattern } from "./parallax-shapes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Sample blog post data
const blogPostData = {
  title: "10 Web Design Trends to Watch in 2023",
  excerpt:
    "Discover the latest web design trends that are shaping the digital landscape and how you can implement them in your projects.",
  category: "Design",
  date: "June 15, 2023",
  author: "Sarah Johnson",
  authorRole: "Senior Designer",
  authorBio:
    "Sarah has over 10 years of experience in web design and has worked with clients across various industries. She specializes in creating user-centered designs that drive engagement and conversions.",
  authorImage: "https://i.pravatar.cc/100?img=1",
  readTime: "5 min read",
  image: "/placeholder.svg?height=600&width=1200",
  tableOfContents: [
    { id: "introduction", title: "Introduction" },
    { id: "dark-mode", title: "Dark Mode" },
    { id: "micro-interactions", title: "Micro-Interactions" },
    { id: "3d-elements", title: "3D Elements" },
    { id: "minimalist-design", title: "Minimalist Design" },
    { id: "glassmorphism", title: "Glassmorphism" },
    { id: "bold-typography", title: "Bold Typography" },
    { id: "horizontal-scrolling", title: "Horizontal Scrolling" },
    { id: "voice-user-interface", title: "Voice User Interface (VUI)" },
    { id: "augmented-reality", title: "Augmented Reality (AR)" },
    { id: "accessibility-first-design", title: "Accessibility-First Design" },
    { id: "conclusion", title: "Conclusion" },
  ],
  content: `
    <div id="introduction">
      <p>The world of web design is constantly evolving, with new trends and technologies emerging each year. As we move through 2023, several exciting trends are shaping the way websites are designed and experienced.</p>
    </div>
    
    <div id="dark-mode">
      <h2>1. Dark Mode</h2>
      <p>Dark mode has become increasingly popular, offering users a more comfortable viewing experience in low-light conditions and reducing eye strain. Many websites now offer a toggle between light and dark modes, allowing users to choose their preference.</p>
      <figure class="my-8">
        <img src="/placeholder.svg?height=400&width=800" alt="Dark Mode Example" class="rounded-lg shadow-lg" />
        <figcaption class="mt-2 text-center text-sm text-darkblue/60">Example of a website with dark mode implementation</figcaption>
      </figure>
      <blockquote class="border-l-4 border-gold pl-4 italic text-darkblue/80">
        "Dark mode isn't just a trend; it's a user experience enhancement that's here to stay. It reduces eye strain and can significantly improve battery life on OLED screens." — UX Design Expert
      </blockquote>
    </div>
    
    <div id="micro-interactions">
      <h2>2. Micro-Interactions</h2>
      <p>Micro-interactions are small animations or visual feedback that occur when a user interacts with a website. These subtle details enhance the user experience by providing visual cues and making the interface feel more responsive and engaging.</p>
      <p>Examples of effective micro-interactions include:</p>
      <ul>
        <li>Button hover states that provide visual feedback</li>
        <li>Form field animations that guide users through completion</li>
        <li>Loading indicators that keep users informed</li>
        <li>Like or reaction animations that acknowledge user actions</li>
      </ul>
    </div>
    
    <div id="3d-elements">
      <h2>3. 3D Elements</h2>
      <p>With advancements in web technologies, 3D elements are becoming more common in web design. From subtle 3D illustrations to immersive experiences, these elements add depth and visual interest to websites.</p>
      <div class="grid grid-cols-2 gap-4 my-6">
        <img src="/placeholder.svg?height=300&width=400" alt="3D Element Example 1" class="rounded-lg shadow-md" />
        <img src="/placeholder.svg?height=300&width=400" alt="3D Element Example 2" class="rounded-lg shadow-md" />
      </div>
    </div>
    
    <div id="minimalist-design">
      <h2>4. Minimalist Design</h2>
      <p>Minimalist design continues to be a strong trend, focusing on simplicity, clean lines, and ample white space. This approach not only creates a modern aesthetic but also improves usability by reducing visual clutter.</p>
    </div>
    
    <div id="glassmorphism">
      <h2>5. Glassmorphism</h2>
      <p>Glassmorphism creates a frosted glass effect, adding depth and dimension to UI elements. This trend combines transparency, blur, and subtle borders to create a modern and elegant look.</p>
    </div>
    
    <div id="bold-typography">
      <h2>6. Bold Typography</h2>
      <p>Typography is taking center stage in web design, with bold, expressive fonts being used to create visual impact and convey brand personality. Large headlines and creative font pairings are becoming more common.</p>
    </div>
    
    <div id="horizontal-scrolling">
      <h2>7. Horizontal Scrolling</h2>
      <p>While vertical scrolling remains the standard, horizontal scrolling is gaining popularity for specific sections or content types, offering a fresh way to navigate through information.</p>
    </div>
    
    <div id="voice-user-interface">
      <h2>8. Voice User Interface (VUI)</h2>
      <p>As voice assistants become more integrated into our daily lives, websites are beginning to incorporate voice user interfaces, allowing users to navigate and interact using voice commands.</p>
    </div>
    
    <div id="augmented-reality">
      <h2>9. Augmented Reality (AR)</h2>
      <p>AR is making its way into web design, offering interactive experiences that blend digital content with the real world. This technology is particularly valuable for e-commerce, allowing customers to visualize products in their own space.</p>
    </div>
    
    <div id="accessibility-first-design">
      <h2>10. Accessibility-First Design</h2>
      <p>Accessibility is no longer an afterthought but a fundamental aspect of web design. Designers are prioritizing inclusive design practices to ensure websites are usable by people of all abilities.</p>
    </div>
    
    <div id="conclusion">
      <h2>Conclusion</h2>
      <p>As these trends continue to evolve, the key is to implement them thoughtfully, ensuring they enhance rather than detract from the user experience. By staying informed about these trends and understanding how they can be applied effectively, designers can create websites that are both visually appealing and functionally superior.</p>
    </div>
  `,
  tags: ["Web Design", "UI/UX", "Design Trends", "Technology"],
  relatedPosts: [
    {
      id: 2,
      title: "The Importance of User Experience in Web Development",
      category: "Development",
      date: "April 10, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "importance-of-user-experience",
    },
    {
      id: 3,
      title: "Responsive Design Best Practices",
      category: "Design",
      date: "December 5, 2022",
      image: "/placeholder.svg?height=400&width=600",
      slug: "responsive-design-best-practices",
    },
    {
      id: 4,
      title: "The Role of AI in Modern Web Design",
      category: "Technology",
      date: "January 12, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "ai-in-modern-web-design",
    },
  ],
  comments: [
    {
      id: 1,
      author: "John Smith",
      authorImage: "https://i.pravatar.cc/100?img=2",
      date: "June 16, 2023",
      content:
        "Great article! I've been implementing dark mode on all my recent projects and the feedback has been overwhelmingly positive.",
      likes: 12,
    },
    {
      id: 2,
      author: "Emily Davis",
      authorImage: "https://i.pravatar.cc/100?img=3",
      date: "June 17, 2023",
      content:
        "I'm particularly excited about the potential of AR in web design. Have you seen any good examples of this being implemented effectively?",
      likes: 8,
      replies: [
        {
          id: 3,
          author: "Sarah Johnson",
          authorImage: "https://i.pravatar.cc/100?img=1",
          date: "June 17, 2023",
          content:
            "Thanks for your comment, Emily! IKEA's AR feature that lets you place furniture in your home is a great example. Also, Gucci and other fashion brands have been implementing virtual try-on features.",
          likes: 5,
        },
      ],
    },
  ],
}

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

export default function BlogPost({ slug }: { slug: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeSection, setActiveSection] = useState("introduction")
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [comment, setComment] = useState("")
  const [copied, setCopied] = useState(false)
  const [shareMenuOpen, setShareMenuOpen] = useState(false)
  const { toast } = useToast()

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Adjust for header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(id)
      setShowTableOfContents(false)
    }
  }

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      toast({
        title: "Comment submitted",
        description: "Your comment has been submitted for review.",
      })
      setComment("")
    }
  }

  // Handle copy link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Link copied",
      description: "Article link has been copied to clipboard.",
    })
  }

  // Share on social media
  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(blogPostData.title)
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

    window.open(shareUrl, "_blank")
    setShareMenuOpen(false)

    toast({
      title: "Shared!",
      description: `Article shared on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
    })
  }

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = blogPostData.tableOfContents.map((item) => item.id)

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <article className="bg-white pb-24 pt-8" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm font-medium text-darkblue transition-colors hover:text-gold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-darkblue/60">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {blogPostData.date}
              </span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {blogPostData.author}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {blogPostData.readTime}
              </span>
              <span className="flex items-center">
                <Tag className="mr-1 h-4 w-4" />
                {blogPostData.category}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl md:text-5xl">
              {blogPostData.title}
            </h1>

            <p className="mb-8 text-xl text-darkblue/70">{blogPostData.excerpt}</p>

            {/* Social Share Floating Bar - Desktop */}
            <div className="fixed left-4 top-1/3 z-50 hidden flex-col gap-3 md:flex">
              <div className="rounded-full bg-cream p-2 shadow-lg">
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => shareOnSocial("facebook")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white transition-all hover:bg-gold hover:text-darkblue hover:scale-110"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareOnSocial("twitter")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white transition-all hover:bg-gold hover:text-darkblue hover:scale-110"
                    aria-label="Share on X (Twitter)"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareOnSocial("linkedin")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white transition-all hover:bg-gold hover:text-darkblue hover:scale-110"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareOnSocial("reddit")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white transition-all hover:bg-gold hover:text-darkblue hover:scale-110"
                    aria-label="Share on Reddit"
                  >
                    <RedditIcon className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareOnSocial("github")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white transition-all hover:bg-gold hover:text-darkblue hover:scale-110"
                    aria-label="Share on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </button>

                  <div className="my-2 h-px w-full bg-darkblue/20"></div>

                  <button
                    onClick={copyToClipboard}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white transition-all hover:bg-gold hover:text-darkblue hover:scale-110"
                    aria-label="Copy Link"
                  >
                    {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Action Buttons - Mobile */}
            <div className="fixed bottom-8 right-8 z-50 flex md:hidden">
              <div className="relative">
                <button
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-darkblue text-white shadow-lg transition-all hover:bg-gold hover:text-darkblue"
                  aria-label="Share Options"
                >
                  <Share2 className="h-5 w-5" />
                </button>

                {/* Mobile Share Menu Popup */}
                {shareMenuOpen && (
                  <div className="absolute bottom-16 right-0 rounded-lg bg-white p-3 shadow-xl">
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => shareOnSocial("facebook")}
                        className="flex flex-col items-center justify-center rounded-lg p-2 transition-colors hover:bg-cream"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="h-6 w-6 text-darkblue" />
                        <span className="mt-1 text-xs text-darkblue">Facebook</span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("twitter")}
                        className="flex flex-col items-center justify-center rounded-lg p-2 transition-colors hover:bg-cream"
                        aria-label="Share on X (Twitter)"
                      >
                        <XIcon className="h-6 w-6 text-darkblue" />
                        <span className="mt-1 text-xs text-darkblue">X</span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("linkedin")}
                        className="flex flex-col items-center justify-center rounded-lg p-2 transition-colors hover:bg-cream"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="h-6 w-6 text-darkblue" />
                        <span className="mt-1 text-xs text-darkblue">LinkedIn</span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("reddit")}
                        className="flex flex-col items-center justify-center rounded-lg p-2 transition-colors hover:bg-cream"
                        aria-label="Share on Reddit"
                      >
                        <RedditIcon className="h-6 w-6 text-darkblue" />
                        <span className="mt-1 text-xs text-darkblue">Reddit</span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("github")}
                        className="flex flex-col items-center justify-center rounded-lg p-2 transition-colors hover:bg-cream"
                        aria-label="Share on GitHub"
                      >
                        <Github className="h-6 w-6 text-darkblue" />
                        <span className="mt-1 text-xs text-darkblue">GitHub</span>
                      </button>

                      <button
                        onClick={copyToClipboard}
                        className="flex flex-col items-center justify-center rounded-lg p-2 transition-colors hover:bg-cream"
                        aria-label="Copy Link"
                      >
                        {copied ? (
                          <Check className="h-6 w-6 text-darkblue" />
                        ) : (
                          <Copy className="h-6 w-6 text-darkblue" />
                        )}
                        <span className="mt-1 text-xs text-darkblue">Copy</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Other Floating Action Buttons */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
              <button
                onClick={() => setShowTableOfContents(!showTableOfContents)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white shadow-lg transition-all hover:bg-gold hover:text-darkblue"
                aria-label="Table of Contents"
              >
                <List className="h-5 w-5" />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue text-white shadow-lg transition-all hover:bg-gold hover:text-darkblue"
                aria-label="Bookmark"
              >
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            {/* Table of Contents Popup */}
            {showTableOfContents && (
              <div className="fixed bottom-20 right-20 z-50 w-64 rounded-lg bg-white p-4 shadow-xl">
                <h3 className="mb-2 font-bold text-darkblue">Table of Contents</h3>
                <ul className="max-h-60 overflow-y-auto">
                  {blogPostData.tableOfContents.map((item) => (
                    <li key={item.id} className="my-1">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left text-sm transition-colors ${
                          activeSection === item.id ? "font-medium text-gold" : "text-darkblue/70 hover:text-darkblue"
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="relative mb-10 h-[300px] overflow-hidden rounded-xl sm:h-[400px] md:h-[500px]">
              <img
                src={blogPostData.image || "/placeholder.svg"}
                alt={blogPostData.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Desktop Table of Contents */}
            <div className="mb-8 hidden lg:block">
              <div className="rounded-lg bg-cream/30 p-4">
                <h3 className="mb-3 font-bold text-darkblue">Table of Contents</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPostData.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        activeSection === item.id ? "bg-gold text-darkblue" : "bg-white text-darkblue hover:bg-gold/20"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-darkblue prose-p:text-darkblue/70 prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold/80 prose-blockquote:border-gold prose-strong:text-darkblue prose-img:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: blogPostData.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {blogPostData.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-darkblue">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-xl bg-cream p-6 shadow-md">
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-gold">
                  <img
                    src={blogPostData.authorImage || "/placeholder.svg"}
                    alt={blogPostData.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-darkblue">{blogPostData.author}</h3>
                  <p className="text-sm text-darkblue/60">{blogPostData.authorRole}</p>
                  <p className="mt-2 text-darkblue/70">{blogPostData.authorBio}</p>
                  <div className="mt-4 flex justify-center gap-2 sm:justify-start">
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-darkblue text-white transition-colors hover:bg-gold hover:text-darkblue"
                      aria-label="Author's Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-darkblue text-white transition-colors hover:bg-gold hover:text-darkblue"
                      aria-label="Author's LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section - Horizontal */}
            <div className="mt-8 rounded-xl bg-cream p-6 shadow-md">
              <h3 className="mb-4 text-center text-xl font-bold text-darkblue">Share this article</h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => shareOnSocial("facebook")}
                  className="flex items-center gap-2 rounded-full bg-darkblue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-darkblue"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </button>

                <button
                  onClick={() => shareOnSocial("twitter")}
                  className="flex items-center gap-2 rounded-full bg-darkblue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-darkblue"
                >
                  <XIcon className="h-4 w-4" />
                  <span>X (Twitter)</span>
                </button>

                <button
                  onClick={() => shareOnSocial("linkedin")}
                  className="flex items-center gap-2 rounded-full bg-darkblue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-darkblue"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </button>

                <button
                  onClick={() => shareOnSocial("reddit")}
                  className="flex items-center gap-2 rounded-full bg-darkblue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-darkblue"
                >
                  <RedditIcon className="h-4 w-4" />
                  <span>Reddit</span>
                </button>

                <button
                  onClick={() => shareOnSocial("github")}
                  className="flex items-center gap-2 rounded-full bg-darkblue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-darkblue"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 rounded-full bg-darkblue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-darkblue"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>Copy Link</span>
                </button>
              </div>
            </div>

            {/* Rest of the content remains the same */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-b border-darkblue/10 py-6">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-darkblue/70 transition-colors hover:text-gold">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Like</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-darkblue/70 transition-colors hover:text-gold">
                  <Bookmark className="h-4 w-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Comments Section */}
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-darkblue">Comments ({blogPostData.comments.length})</h2>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <div className="mb-4">
                <Textarea
                  placeholder="Leave a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px] w-full rounded-lg border-darkblue/20 focus:border-gold focus:ring-gold"
                />
              </div>
              <Button type="submit" className="bg-gold text-darkblue hover:bg-gold/90" disabled={!comment.trim()}>
                Post Comment
              </Button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {blogPostData.comments.map((comment) => (
                <div key={comment.id} className="rounded-lg bg-cream/30 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={comment.authorImage || "/placeholder.svg"} alt={comment.author} />
                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-darkblue">{comment.author}</p>
                        <p className="text-xs text-darkblue/60">{comment.date}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-xs text-darkblue/60 hover:text-gold">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                  <p className="text-darkblue/70">{comment.content}</p>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 space-y-4 border-l-2 border-gold/20 pl-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id}>
                          <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.authorImage || "/placeholder.svg"} alt={reply.author} />
                                <AvatarFallback>{reply.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-darkblue">{reply.author}</p>
                                <p className="text-xs text-darkblue/60">{reply.date}</p>
                              </div>
                            </div>
                            <button className="flex items-center gap-1 text-xs text-darkblue/60 hover:text-gold">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                          <p className="text-darkblue/70">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex gap-2">
                    <button className="text-xs font-medium text-gold hover:text-darkblue">Reply</button>
                    <button className="text-xs font-medium text-darkblue/60 hover:text-gold">Share</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="relative mt-20">
            <CircleShape className="left-[-10%] top-[10%] h-32 w-32 bg-gold/10" speed={0.3} direction="up" />
            <SquareShape className="right-[-5%] top-[20%] h-24 w-24 bg-darkblue/5" speed={0.4} direction="down" />
            <LinePattern className="bottom-[10%] left-[10%] h-16 w-32" speed={0.5} direction="left">
              <div className="flex h-full w-full flex-row gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-full w-0.5 bg-gold/20" />
                ))}
              </div>
            </LinePattern>

            <h2 className="mb-8 text-2xl font-bold text-darkblue">Related Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {blogPostData.relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="group overflow-hidden rounded-xl bg-cream shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkblue/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full bg-gold/20 px-2 py-1 text-xs font-medium text-darkblue">
                        {post.category}
                      </span>
                      <span className="text-xs text-darkblue/60">{post.date}</span>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-darkblue">{post.title}</h3>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-medium text-gold transition-colors hover:text-darkblue"
                    >
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 rounded-xl bg-darkblue p-8 text-white shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Subscribe to our newsletter</h3>
                <p className="mt-2 text-white/70">
                  Stay updated with our latest articles, industry insights, and company news.
                </p>
              </div>
              <div>
                <form className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-full border-none bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                  <Button className="rounded-full bg-gold text-darkblue hover:bg-gold/90">Subscribe</Button>
                </form>
                <p className="mt-2 text-xs text-white/50">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
