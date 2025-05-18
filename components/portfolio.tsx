"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { CircleShape, SquareShape } from "./parallax-shapes"

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A complete redesign of an e-commerce platform, focusing on user experience and conversion optimization.",
    client: "Fashion Retailer",
    year: "2023",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A secure and intuitive mobile banking application with advanced features and biometric authentication.",
    client: "Financial Services",
    year: "2022",
    link: "#",
  },
  {
    id: 3,
    title: "Corporate Branding",
    category: "Brand Strategy",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A comprehensive brand identity system for a growing tech company, including logo, guidelines, and marketing materials.",
    client: "Tech Startup",
    year: "2023",
    link: "#",
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A responsive website with online ordering system, reservation management, and integration with delivery services.",
    client: "Fine Dining Restaurant",
    year: "2022",
    link: "#",
  },
  {
    id: 5,
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A multi-channel digital marketing campaign that increased brand awareness by 45% and generated 200+ qualified leads.",
    client: "Home Services",
    year: "2023",
    link: "#",
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "An interactive learning platform with course management, progress tracking, and integrated assessment tools.",
    client: "Educational Institution",
    year: "2022",
    link: "#",
  },
]

const categories = ["All", "Web Design", "Web Development", "App Development", "Brand Strategy", "Digital Marketing"]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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
    <section id="portfolio" className="relative bg-cream py-24 sm:py-32" ref={ref}>
      {/* Parallax Elements */}
      <CircleShape className="left-[5%] top-[10%] h-48 w-48 bg-gold/10" speed={0.3} direction="up" />
      <SquareShape className="right-[10%] top-[15%] h-32 w-32 bg-darkblue/10" speed={0.4} direction="down" />
      <CircleShape className="bottom-[10%] left-[15%] h-40 w-40 bg-white/30" speed={0.5} direction="left" />
      <SquareShape className="bottom-[20%] right-[5%] h-56 w-56 bg-gold/5" speed={0.2} direction="right" />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(#0A112810_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-gold">Our Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl">Showcasing our best work</p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-darkblue/70">
            Explore our recent projects and see how we've helped businesses achieve their goals through innovative
            digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === category ? "bg-gold text-darkblue" : "bg-white text-darkblue hover:bg-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-darkblue"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gold">{project.category}</span>
                <h3 className="mt-2 text-xl font-bold text-darkblue">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-darkblue/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-darkblue">{selectedProject.title}</h3>
                <p className="mt-2 text-sm font-medium text-gold">{selectedProject.category}</p>
                <div className="mt-4 space-y-4">
                  <p className="text-darkblue/70">{selectedProject.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-darkblue/50">Client</h4>
                      <p className="text-darkblue">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-darkblue/50">Year</h4>
                      <p className="text-darkblue">{selectedProject.year}</p>
                    </div>
                  </div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold/80"
                  >
                    Visit Project <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
