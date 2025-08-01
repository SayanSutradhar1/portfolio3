"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

import photoMe from "@/assets/images/photoMe.jpg"
import { BIO, LOCATION, NAME, SOCIAL_LINKS } from "@/lib/constants"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="w-20 h-1 bg-purple-600 mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-purple-500/30 animate-glow">
              <Image
                src={photoMe}
                alt="Profile"
                width={400}
                height={400}
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 right-0 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-purple-500/30 bg-gray-900 flex items-center justify-center animate-float">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I&apos;m <span className="gradient-text">{NAME}</span>, a passionate developer
            </h3>
            <p className="text-gray-300 mb-6">
             {BIO}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div>
                <p className="text-gray-400">
                  <strong className="text-white">Email:</strong> {SOCIAL_LINKS.email}
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <strong className="text-white">Location:</strong> {LOCATION}
                </p>
              </div>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <Link href="https://drive.google.com/file/d/1fPf8JNe4o1MywOO_cwwkHoCrq_-mm8ut/view?usp=sharing" download target="_blank">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
