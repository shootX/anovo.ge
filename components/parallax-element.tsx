"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxElementProps {
  className?: string
  speed?: number
  children?: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  offset?: number
}

export default function ParallaxElement({
  className = "",
  speed = 0.5,
  children,
  direction = "up",
  offset = 0,
}: ParallaxElementProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform based on direction
  let transform
  switch (direction) {
    case "up":
      transform = useTransform(scrollYProgress, [0, 1], [`translateY(${offset}px)`, `translateY(-${100 * speed}px)`])
      break
    case "down":
      transform = useTransform(scrollYProgress, [0, 1], [`translateY(${offset}px)`, `translateY(${100 * speed}px)`])
      break
    case "left":
      transform = useTransform(scrollYProgress, [0, 1], [`translateX(${offset}px)`, `translateX(-${100 * speed}px)`])
      break
    case "right":
      transform = useTransform(scrollYProgress, [0, 1], [`translateX(${offset}px)`, `translateX(${100 * speed}px)`])
      break
    default:
      transform = useTransform(scrollYProgress, [0, 1], [`translateY(${offset}px)`, `translateY(-${100 * speed}px)`])
  }

  return (
    <motion.div ref={ref} style={{ transform }} className={className}>
      {children}
    </motion.div>
  )
}
