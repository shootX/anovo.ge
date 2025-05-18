"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CircleShape, LinePattern, DotsPattern } from "./parallax-shapes"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32" ref={ref}>
      {/* Parallax Elements */}
      <CircleShape
        className="left-[-5%] top-[10%] h-96 w-96 bg-gold/10 opacity-70 blur-3xl"
        speed={0.2}
        direction="up"
      />
      <CircleShape
        className="bottom-[-10%] right-[-5%] h-96 w-96 bg-darkblue/10 opacity-70 blur-3xl"
        speed={0.3}
        direction="down"
      />
      <DotsPattern className="right-[5%] top-[20%] h-64 w-64" speed={0.4} direction="left">
        <div className="grid h-full w-full grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square rounded-full bg-gold/20" />
          ))}
        </div>
      </DotsPattern>
      <LinePattern className="bottom-[15%] left-[5%] h-40 w-64" speed={0.5} direction="right">
        <div className="flex h-full w-full flex-col gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-0.5 w-full bg-darkblue/10" />
          ))}
        </div>
      </LinePattern>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-gold">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl">
              We create digital experiences that matter
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-darkblue/70">
              Our team of experts combines creativity and technology to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-darkblue">Our Mission</h3>
              <p className="mt-2 text-base text-darkblue/70">
                To empower businesses through innovative digital solutions that drive growth and create meaningful
                connections.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-darkblue/10">
                <svg className="h-8 w-8 text-darkblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-darkblue">Our Vision</h3>
              <p className="mt-2 text-base text-darkblue/70">
                To be the leading creative agency known for transforming businesses through exceptional digital
                experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-darkblue">Our Values</h3>
              <p className="mt-2 text-base text-darkblue/70">
                Innovation, integrity, collaboration, and excellence guide everything we do as we strive to exceed
                expectations.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20 overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-darkblue">Our Story</h3>
                <p className="mt-4 text-darkblue/70">
                  Founded in 2015, our agency has grown from a small team of passionate creatives to a full-service
                  digital agency with clients worldwide. We've helped hundreds of businesses transform their digital
                  presence and achieve remarkable results.
                </p>
                <p className="mt-4 text-darkblue/70">
                  Our approach combines strategic thinking, creative design, and technical expertise to create solutions
                  that not only look great but also deliver measurable business outcomes.
                </p>
              </div>
              <div className="h-64 overflow-hidden md:h-auto">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team working together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
