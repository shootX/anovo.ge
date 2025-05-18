"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { CircleShape, SquareShape } from "./parallax-shapes"

export default function BlogHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative bg-cream pt-24 sm:pt-32">
      {/* Parallax Elements */}
      <CircleShape className="left-[5%] top-[20%] h-64 w-64 bg-gold/10" speed={0.3} direction="up" />
      <SquareShape className="right-[10%] top-[30%] h-48 w-48 bg-darkblue/10" speed={0.4} direction="down" />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(#0A112810_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-darkblue transition-colors hover:text-gold"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-darkblue sm:text-5xl md:text-6xl">
            Our <span className="text-gold">Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-darkblue/70">
            Insights, trends, and expert advice from our team of professionals in design, development, and digital
            marketing.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["All", "Design", "Development", "Marketing", "Strategy", "Technology"].map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                category === "All" ? "bg-gold text-darkblue" : "bg-white text-darkblue hover:bg-gold/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
