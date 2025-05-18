"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CircleShape, SquareShape } from "./parallax-shapes"

const slides = [
  {
    id: 1,
    title: "Creative Digital Solutions",
    subtitle: "Transforming ideas into digital experiences",
    cta: "Get Started",
    image: "/placeholder.svg?height=800&width=1600",
    color: "from-darkblue to-darkblue/80",
  },
  {
    id: 2,
    title: "Innovative Web Design",
    subtitle: "Crafting beautiful and functional websites",
    cta: "Our Work",
    image: "/placeholder.svg?height=800&width=1600",
    color: "from-gold to-darkblue",
  },
  {
    id: 3,
    title: "Strategic Brand Development",
    subtitle: "Building memorable brands that stand out",
    cta: "Learn More",
    image: "/placeholder.svg?height=800&width=1600",
    color: "from-darkblue to-gold/80",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden pt-16">
      {/* Parallax Elements */}
      <CircleShape className="left-[10%] top-[20%] h-32 w-32 bg-gold/20" speed={0.3} direction="up" />
      <CircleShape className="right-[15%] top-[15%] h-48 w-48 bg-darkblue/10" speed={0.5} direction="down" />
      <CircleShape className="bottom-[25%] left-[20%] h-64 w-64 bg-cream/30" speed={0.7} direction="left" />
      <SquareShape className="bottom-[20%] right-[10%] h-40 w-40 bg-gold/10" speed={0.4} direction="right" />

      <div className="absolute inset-0 z-10 flex items-center justify-between px-4 md:px-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={prev}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={next}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-gold" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            current === index && (
              <motion.div
                key={slide.id}
                className="relative h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-60`} />
                <div className="absolute inset-0 bg-black/30" />
                <img src={slide.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container px-4 md:px-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mx-auto max-w-3xl text-center text-white"
                    >
                      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{slide.title}</h1>
                      <p className="mb-8 text-lg md:text-xl">{slide.subtitle}</p>
                      <Button size="lg" className="rounded-full bg-gold text-darkblue hover:bg-gold/90">
                        {slide.cta}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </section>
  )
}
