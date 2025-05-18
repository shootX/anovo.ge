"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const clients = [
  {
    name: "Company 1",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial:
      "Working with this agency transformed our digital presence. Their team delivered exceptional results that exceeded our expectations.",
    author: "John Smith",
    position: "CEO",
  },
  {
    name: "Company 2",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial:
      "The team's creativity and technical expertise helped us launch a website that perfectly represents our brand and drives real business results.",
    author: "Sarah Johnson",
    position: "Marketing Director",
  },
  {
    name: "Company 3",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial:
      "Their strategic approach to our digital marketing campaign resulted in a 200% increase in qualified leads within just three months.",
    author: "Michael Brown",
    position: "Sales Manager",
  },
  {
    name: "Company 4",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial:
      "The mobile app they developed for us has received outstanding feedback from our users and has significantly improved customer engagement.",
    author: "Emily Davis",
    position: "Product Owner",
  },
  {
    name: "Company 5",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial:
      "Their team's attention to detail and commitment to quality made them the perfect partner for our rebranding project.",
    author: "David Wilson",
    position: "Brand Manager",
  },
  {
    name: "Company 6",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial:
      "We've worked with several agencies in the past, but none have delivered the level of service and results that this team has.",
    author: "Jennifer Lee",
    position: "COO",
  },
]

export default function ClientCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const logoControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      logoControls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    }
  }, [isInView, controls, logoControls])

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
    <section id="clients" className="relative bg-white py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0A112810_1px,transparent_1px),linear-gradient(to_bottom,#0A112810_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-gold">Our Clients</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl">Trusted by leading brands</p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-darkblue/70">
            We've had the privilege of working with amazing clients across various industries. Here's what they have to
            say about our work.
          </p>
        </motion.div>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div animate={logoControls} className="flex gap-8 py-8" style={{ width: "3840px" }}>
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg bg-cream p-4 shadow-sm"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl bg-cream p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="text-gold">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="mb-6 text-darkblue/70">"{client.testimonial}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 1}`}
                    alt={client.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-darkblue">{client.author}</h4>
                  <p className="text-sm text-darkblue/50">
                    {client.position}, {client.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
