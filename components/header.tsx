"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import Logo from "./logo"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Clients", href: "/#clients" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("/#")) {
      e.preventDefault()
      const targetId = href === "/#" ? "top" : href.substring(2)
      const element = targetId === "top" ? document.body : document.getElementById(targetId)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        })
        setIsMobileMenuOpen(false)
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-darkblue py-2 shadow-lg" : "bg-transparent py-4 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" onClick={handleNavClick} className="flex items-center">
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="group">
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative text-sm font-medium transition-colors ${
                    isScrolled ? "text-white hover:text-gold" : "text-darkblue hover:text-gold"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/#contact"
            onClick={handleNavClick}
            className="group ml-8 flex items-center overflow-hidden rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-darkblue transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <span className="mr-2">Contact Us</span>
            <span className="relative transition-all duration-300 group-hover:translate-x-1">
              <ChevronRight className="h-4 w-4" />
            </span>
            <motion.span
              className="absolute inset-0 -z-10 bg-gold opacity-20"
              initial={{ scale: 0, x: "100%" }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            />
          </Link>
        </nav>

        {/* Mobile CTA Button - Always visible */}
        <Link
          href="/#contact"
          onClick={handleNavClick}
          className="mr-2 flex items-center rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-darkblue transition-all duration-300 hover:bg-white hover:shadow-lg md:hidden"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-white" : "text-darkblue"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-white" : "text-darkblue"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <nav className="container mx-auto bg-darkblue px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block text-white transition-colors hover:text-gold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/#contact"
                    onClick={handleNavClick}
                    className="mt-2 flex w-full items-center justify-center rounded-full bg-gold py-3 text-center font-bold text-darkblue transition-all duration-300 hover:bg-white"
                  >
                    <span className="mr-2">Contact Us</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
