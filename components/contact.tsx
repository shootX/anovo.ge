"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { CircleShape, SquareShape, LinePattern } from "./parallax-shapes"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)
    e.target.reset()
  }

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
    <section id="contact" className="relative bg-cream py-24 sm:py-32" ref={ref}>
      {/* Parallax Elements */}
      <CircleShape className="left-[5%] top-[10%] h-64 w-64 bg-gold/10" speed={0.3} direction="up" />
      <SquareShape className="right-[10%] top-[20%] h-48 w-48 bg-darkblue/5" speed={0.4} direction="down" />
      <LinePattern className="bottom-[15%] left-[15%] h-32 w-64" vertical={true} speed={0.5} direction="left">
        <div className="flex h-full w-full flex-row gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-full w-0.5 bg-gold/20" />
          ))}
        </div>
      </LinePattern>
      <CircleShape className="bottom-[10%] right-[5%] h-40 w-40 bg-white/30" speed={0.2} direction="right" />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(#0A112810_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-gold">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-darkblue sm:text-4xl">Let's start a conversation</p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-darkblue/70">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-16 max-w-7xl rounded-2xl bg-white shadow-xl"
        >
          <div className="grid overflow-hidden rounded-2xl lg:grid-cols-2">
            <motion.div variants={itemVariants} className="bg-darkblue p-8 text-white md:p-12">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-4">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="mt-1 text-white/80">123 Creative Street, Design District, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="mt-1 text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="mt-1 text-white/80">info@youragency.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="mt-1 text-white/80">
                      Monday - Friday: 9am - 6pm
                      <br />
                      Saturday: 10am - 4pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium">Follow Us</h4>
                <div className="mt-4 flex gap-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold/20"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-darkblue/70">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-darkblue/70">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-darkblue/70">
                    Phone
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-darkblue/70">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-darkblue/70">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-darkblue transition-all duration-300 hover:bg-gold/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
