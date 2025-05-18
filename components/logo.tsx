"use client"

import { motion } from "framer-motion"

interface LogoProps {
  isScrolled: boolean
}

export default function Logo({ isScrolled }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-10 w-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-md bg-gold"
          initial={{ rotate: 0 }}
          animate={{ rotate: isScrolled ? 0 : 5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="text-xl font-bold text-darkblue"
            initial={{ scale: 1 }}
            animate={{ scale: isScrolled ? 1 : 1.1 }}
            transition={{ duration: 0.5 }}
          >
            A
          </motion.span>
        </motion.div>
      </div>
      <motion.span
        className={`text-xl font-bold ${isScrolled ? "text-white" : "text-darkblue"}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Agency
      </motion.span>
    </div>
  )
}
