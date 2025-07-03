"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Layout, Server, Settings, Terminal, } from "lucide-react"
import {FaNode, FaReact} from "react-icons/fa"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      id: "full stack",
      name: "Full Stack",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Rest Api", level: 80},
        { name: "Tailwind CSS", level: 90 }
      ],
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 65 },
      ],
    },
    {
      id: "languages",
      name: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 40 },
        { name: "Java", level: 70 },
        { name: "C", level: 60 }
      ],
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Skills</span>
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
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="full stack" className="w-full">
            <TabsList className="flex gap-2.5 mb-8 m-auto">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-purple-600"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-800 [&_.progress-bar]:bg-gradient-to-r [&_.progress-bar]:from-purple-600 [&_.progress-bar]:to-blue-500"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
