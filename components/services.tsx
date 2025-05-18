"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Code, LineChart, Smartphone, Search, Megaphone } from "lucide-react"

const services = [
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Web Design",
    description: "Beautiful, responsive websites that engage your audience and reflect your brand identity.",
    color: "bg-gold/20 text-gold",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom web applications and websites built with the latest technologies for optimal performance.",
    color: "bg-darkblue/10 text-darkblue",
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility, drive traffic, and generate leads for your business.",
    color: "bg-gold/20 text-gold",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    color: "bg-darkblue/10 text-darkblue",
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    color: "bg-gold/20 text-gold",
  },
  {
    icon: <Megaphone className="h-10 w-10" />,
    title: "Brand Strategy",
    description: "Develop a compelling brand identity that resonates with your target audience and sets you apart.",
    color: "bg-darkblue/10 text-darkblue",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="services" className="relative bg-white py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0A112810_1px,transparent_1px),linear-gradient(to_bottom,#0A112810_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-gold">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl">
            Comprehensive digital solutions for your business
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-darkblue/70">
            We offer a wide range of services to help you achieve your business goals and stand out in the digital
            landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-cream p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-darkblue">{service.title}</h3>
              <p className="text-darkblue/70">{service.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-darkblue transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-darkblue">Ready to transform your digital presence?</h3>
          <p className="mt-4 text-lg text-darkblue/70">
            Let's discuss how our services can help you achieve your business goals and create exceptional digital
            experiences.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-darkblue px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-gold/90 hover:to-darkblue/90"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
