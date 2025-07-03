"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Academics() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const education = [
    {
      degree: <>Bachelor of Technology in <span className="text-purple-700">Computer Science & Engineering</span></>,
      institution: "Coochbehar Government Engineering College",
      location: "Coochbehar, West Bengal, India",
      period: "2022 - 2026",
      description:
        "Learning advanced topics in computer science including algorithms, data structures, machine learning, and software development.",
      achievements: [
        "Incharge of the college Technical club (2023-24)",
        "Acting Class Representative",
        "Conducted Various coding workshops",
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="academics" className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Academic <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-purple-600 mx-auto"
          ></motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {education.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="card-hover">
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-5 w-5 text-purple-500 mr-2" />
                        <CardTitle className="text-xl font-bold text-white">{item.degree}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-400 flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {item.institution}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 flex items-center justify-end">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center justify-end mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white flex items-center">
                      <Award className="h-4 w-4 text-purple-500 mr-2" />
                      Achievements
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 pl-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
