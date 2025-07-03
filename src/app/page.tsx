import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Academics from "@/components/academics"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
