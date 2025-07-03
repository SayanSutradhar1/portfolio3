"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAME, SOCIAL_LINKS } from "@/lib/constants"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">{NAME}</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Passionate software developer creating innovative solutions and exceptional digital experiences. Always
              eager to take on new challenges and collaborate on exciting projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>



          {/* Contact Info */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>by {NAME.split(" ")[0]} © {currentYear}</span>
          </div>

          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white "
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
