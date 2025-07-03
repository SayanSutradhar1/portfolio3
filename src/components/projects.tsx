"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Maximize2, X } from "lucide-react"

import esp from "@/assets/thumbnails/esp.png"
import ton from "@/assets/thumbnails/ton.png"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Esperanza2k25 Web",
      description: "A web platform for the annual tech cum cultural fest of Coochbehar Government Engineering College",
      image: esp,
      tags: ["Next js", "Auth js", "Accertinity UI", "ShadCN", "MongoDB", "TypeScript"],
      github: "https://github.com/SayanSutradhar1/Esperanza_2k25",
      demo: "https://esperanza2k25.vercel.app/",
      details:
        "A web platform for the annual tech cum cultural fest of Coochbehar Government Engineering College",
    },
    {
      title: "TECH O NICKS Web",
      description: " A web platform for the official technical club (TECH O NICKS) of Coochbehar Government Engineering College. This application having a dynamic and stylish UI for the user, includes features like event details , RSVP etc. It has a authentication system where Students can create a id for this club",
      image: ton,
      tags: ["Next js", "TypeScript", "Accertinity UI", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      details:
        "This project leverages the power of AI to generate unique images from text descriptions. Built with Next.js and TypeScript, it provides a seamless user experience with real-time image generation. The application includes features like image history, sharing capabilities, and customization options for the generated images. It's optimized for both desktop and mobile devices.",
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-purple-600 mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Explore my recent projects showcasing my skills and expertise in various technologies and domains.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="card-hover">
              <Card className="bg-gray-900/50 border border-gray-800 h-full flex flex-col overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-gray-900/50 hover:bg-gray-900/80 text-white rounded-full"
                    onClick={() => setSelectedProject(index)}
                  >
                    <Maximize2 className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 bg-gray-900/50 hover:bg-gray-900/80 text-white rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{projects[selectedProject].title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[selectedProject].tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{projects[selectedProject].details}</p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    asChild
                  >
                    <Link href={projects[selectedProject].github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                    <Link href={projects[selectedProject].demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
