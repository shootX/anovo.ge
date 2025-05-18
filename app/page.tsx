import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import BlogSection from "@/components/blog-section"
import ClientCarousel from "@/components/client-carousel"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Toaster />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <BlogSection />
      <ClientCarousel />
      <Contact />
      <Footer />
    </main>
  )
}
