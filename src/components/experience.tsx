"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const experiences = [
    {
      position: "Software Developer Intern",
      company: "SwaLay Digital",
      location: "Remote",
      period: "May 2025 - Present",
      description:
        "Contributing to the Tech team as a Full Stack Developer. Providing technical support to the SwaLay web application for clients",
      responsibilities: [
        "Maintaining a good code quality in contribution to the project",
        "Developing new features and functionalities in Next JS",
        "Creating Frontend features , API integrations, Database manipulation",
        "Implementing a SmartLink System for clients"
      ],
    },
    {
      position: "Web Developer Intern",
      company: "Aerial View 6 Infotech Private Limited",
      location: "Coochbehar, West Bengal, India",
      period: "Aug 2024 - Oct 2024",
      description:
        "Contributed On a Hospital Management System Application",
      responsibilities: [
        "Worked on frontend development part of the project in Angular",
        "Manipulated APIs to fetch Data",
        "Implementing Object Oriented Features Like Class Based Components , Dependency Injection",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-purple-600 mx-auto"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 to-blue-600 transform md:-translate-x-1/2"></div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>

                {/* Content */}
                <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 ml" : "md:pl-12"}`}>
                  <div
                    className={`bg-gray-900/50 border border-gray-800 p-6 rounded-lg shadow-lg card-hover ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-purple-400 font-medium mb-2">{exp.company}</h4>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div>
                      <h5 className="font-medium text-white flex items-center mb-2">
                        <Briefcase className="h-4 w-4 text-purple-500 mr-2" />
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex text-sm text-gray-300">
                            <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
