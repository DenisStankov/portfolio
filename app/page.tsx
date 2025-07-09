"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  ChevronDown,
  Download,
  Star,
  Zap,
  Heart,
  Award,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const words = ["Full-Stack Developer", "UI/UX Designer", "Creative Thinker", "Problem Solver"]
  const currentWord = words[currentWordIndex]

  useEffect(() => {
    setIsVisible(true)

    // Optimized typewriter effect
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < currentWord.length) {
        setTypedText(currentWord.slice(0, charIndex + 1))
        charIndex++
      } else {
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setTypedText(currentWord.slice(0, charIndex - 1))
              charIndex--
            } else {
              clearInterval(deleteInterval)
              setCurrentWordIndex((prev) => (prev + 1) % words.length)
            }
          }, 50)
        }, 2000)
        clearInterval(typeInterval)
      }
    }, 100)

    // Optimized scroll handling with throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ["hero", "about", "skills", "projects", "contact"]
          const scrollPosition = window.scrollY + 100

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearInterval(typeInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [currentWord, currentWordIndex])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = [
    { name: "React", level: 95, icon: Code },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "Next.js", level: 88, icon: Code },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Mobile Dev", level: 80, icon: Smartphone },
    { name: "Node.js", level: 82, icon: Code },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A revolutionary e-commerce solution with AI-powered recommendations and seamless checkout experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Stripe", "AI", "Tailwind"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management Suite",
      description:
        "Collaborative workspace with real-time updates, advanced analytics, and team productivity insights.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["TypeScript", "React", "Socket.io", "MongoDB", "D3.js"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Creative Portfolio Hub",
      description:
        "A stunning portfolio platform with smooth animations, interactive galleries, and dynamic content management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "Tailwind", "CMS"],
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  const achievements = [
    { icon: Award, number: "50+", label: "Projects Delivered" },
    { icon: Star, number: "5+", label: "Years Experience" },
    { icon: Heart, number: "30+", label: "Happy Clients" },
    { icon: Zap, number: "100%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Simplified Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2s"></div>
      </div>

      {/* Optimized Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-purple-400">Port</span>folio
            </div>
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 relative ${
                    activeSection === section ? "text-purple-400" : "text-white/80"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Optimized Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div
          className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-black rounded-full p-1">
                  <Image
                    src="/placeholder.svg?height=144&width=144"
                    alt="Profile"
                    width={144}
                    height={144}
                    className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Denis</span> <span className="text-purple-400">Stankov</span>
          </h1>

          <div className="text-2xl md:text-4xl text-purple-300 mb-8 h-16 flex items-center justify-center">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crafting extraordinary digital experiences with clean code and innovative design. Passionate about building
            solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-4 rounded-full bg-white/5 hover:bg-purple-600/20 border border-purple-500/30 hover:border-purple-400 transform hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-7 h-7 text-purple-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <p>
                  {
                    "I'm a passionate innovator with over 5 years of experience transforming ideas into extraordinary digital realities. My journey began with an insatiable curiosity for technology."
                  }
                </p>
                <p>
                  Specializing in cutting-edge technologies like React, Next.js, and modern web frameworks, I stay at
                  the forefront of innovation. My mission is to craft applications that deliver exceptional
                  functionality.
                </p>
                <p>
                  When {"I'm"} not immersed in code, you'll find me exploring emerging technologies, mentoring aspiring
                  developers, and contributing to open-source projects.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-10">
                  <div className="grid grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center group">
                        <achievement.icon className="w-12 h-12 mx-auto text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                        <div className="text-white/60">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
            Skills & <span className="text-purple-400">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <skill.icon className="w-10 h-10 text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-purple-300 font-semibold">{skill.level}%</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-600 text-white">Featured</Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 border border-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-6">
                    <a
                      href={project.github}
                      className="flex items-center text-white/70 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-white/70 hover:text-purple-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            {"Let's"} <span className="text-purple-400">Connect</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your vision to life? {"Let's"} collaborate and create something extraordinary.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Email", info: "john.doe@example.com" },
              { icon: Linkedin, title: "LinkedIn", info: "linkedin.com/in/johndoe" },
              { icon: Github, title: "GitHub", info: "github.com/johndoe" },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <contact.icon className="w-12 h-12 mx-auto text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{contact.title}</h3>
                  <p className="text-white/70">{contact.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300 text-lg px-12 py-6"
          >
            <Mail className="w-6 h-6 mr-3" />
            Start a Conversation
          </Button>
        </div>
      </section>

    </div>
  )
}
