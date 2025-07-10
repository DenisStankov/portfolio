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
  Database,
  Globe,
  ChevronDown,
  Download,
  Star,
  Zap,
  Heart,
  Award,
  Phone,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const words = ["Junior Software Developer", "Web Developer", "Problem Solver", "Team Collaborator"]
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
    setMobileMenuOpen(false)
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV-Denis-Stankov.pdf"
    link.download = "CV-Denis-Stankov.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = [
    { name: "JavaScript", level: 85, icon: Code },
    { name: "React", level: 80, icon: Code },
    { name: "HTML5/CSS3", level: 90, icon: Globe },
    { name: "PostgreSQL", level: 75, icon: Database },
    { name: "Git/GitHub", level: 85, icon: Code },
    { name: "Problem Solving", level: 90, icon: Zap },
  ]

  const projects = [
    {
      title: "Chat App",
      description:
        "A real-time chat application built with modern web technologies, featuring instant messaging and user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "React", "WebSocket", "CSS3"],
      live: "#",
      featured: true,
      year: "2020",
    },
    {
      title: "LoLytics",
      description:
        "A comprehensive League of Legends analytics platform that tracks summoner performance, analyzes meta champions, and provides real-time statistics with global coverage across all regions.",
      image:
        "https://sjc.microlink.io/06Xw6TGfLFh9YgbkGuekn3tMoNhn9QaolZjOSP8q6OwvjGp7HXwC5YQuD_EBzcHx407cxVqgKFodR0dHy45mJQ.jpeg",
      tags: ["React", "JavaScript", "API Integration", "Real-time Data", "Gaming Analytics"],
      live: "https://lol-app-green.vercel.app",
      featured: true,
      year: "2025",
    },
  ]

  const achievements = [
    { icon: Award, number: "2+", label: "Projects Completed" },
    { icon: Star, number: "2+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Dedication" },
    { icon: Zap, number: "Fast", label: "Learner" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Simplified Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2s"></div>
      </div>

      {/* Responsive Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl md:text-2xl font-bold text-white">
              <span className="text-purple-400">Denis</span> Stankov
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 relative text-sm lg:text-base ${
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-purple-500/20">
              <div className="px-4 py-6 space-y-4">
                {["hero", "about", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left capitalize transition-all duration-300 hover:text-purple-400 py-2 ${
                      activeSection === section ? "text-purple-400" : "text-white/80"
                    }`}
                  >
                    {section === "hero" ? "Home" : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Responsive Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
        <div
          className={`text-center z-10 transition-all duration-1000 max-w-6xl mx-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 md:mb-8">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-black rounded-full p-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1704722702473-xhHcp3hQwT8sv98wDywtmFzJDxapxN.jpeg"
                    alt="Denis Stankov Profile"
                    width={144}
                    height={144}
                    className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6">
            <span className="text-white">Denis</span> <span className="text-purple-400">Stankov</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-purple-300 mb-6 md:mb-8 h-12 md:h-16 flex items-center justify-center">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Final-year Informatics student at New Bulgarian University, passionate about web development and
            problem-solving. I learn quickly, thrive in teams, and excel at turning business requirements into working
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transform hover:scale-105 transition-all duration-300 bg-transparent text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 md:space-x-8">
            {[
              { icon: Github, href: "https://github.com/DenisStankov" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/denis-stankov-0bb790258/" },
              { icon: Phone, href: "tel:+359878907858" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-purple-600/20 border border-purple-500/30 hover:border-purple-400 transform hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
        </div>
      </section>

      {/* Responsive About Section */}
      <section id="about" className="py-16 md:py-24 lg:py-32 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                <p>
                  {"I'm"} a final-year Informatics student at New Bulgarian University with a passion for web
                  development and problem-solving. I learn quickly, thrive in teams, and excel at turning business
                  requirements into working solutions.
                </p>
                <p>
                  Currently working as a Business Consultant IT at OBS2GO, where I collaborate with cross-functional
                  teams to translate business requirements into technical specifications. I have solid experience with
                  PostgreSQL/SQL, HTML5/CSS3 skills, and foundational experience with JavaScript and React.
                </p>
                <p>
                  My experience includes streamlined data reporting by designing PostgreSQL queries at OBS2GO, reducing
                  turnaround time by 30%, and implementing visual changes with JavaScript based on client needs.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 md:p-8 lg:p-10">
                  <div className="grid grid-cols-2 gap-6 md:gap-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center group">
                        <achievement.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto text-purple-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                          {achievement.number}
                        </div>
                        <div className="text-sm md:text-base text-white/60">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Skills Section */}
      <section id="skills" className="py-16 md:py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            Skills & <span className="text-purple-400">Technologies</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 md:h-3 mb-3 md:mb-4">
                    <div
                      className="h-2 md:h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-purple-300 font-semibold text-sm md:text-base">{skill.level}%</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Additional Tools & Software</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["VS Code", "Git/GitHub", "Microsoft 365", "PostgreSQL", "Team Collaboration"].map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base lg:text-lg"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Projects Section */}
      <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 justify-center max-w-5xl mx-auto">
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
                    className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <Badge className="bg-purple-600 text-white text-xs md:text-sm">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <Badge className="bg-black/50 text-white text-xs md:text-sm">{project.year}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs md:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm md:text-base text-white/70 hover:text-purple-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-12">
            {"Let's"} <span className="text-purple-400">Connect</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? {"I'm"} always excited to work on new challenges and contribute
            to innovative solutions.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "denis.stankov02@gmail.com",
                href: "mailto:denis.stankov02@gmail.com",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                info: "linkedin.com/in/denis-stankov",
                href: "https://www.linkedin.com/in/denis-stankov-0bb790258/",
              },
              { icon: Phone, title: "Phone", info: "+359 878 907 858", href: "tel:+359878907858" },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                    <contact.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto text-purple-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{contact.title}</h3>
                    <p className="text-sm md:text-base text-white/70">{contact.info}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 md:px-12 py-4 md:py-6"
            onClick={() => window.open("mailto:denis.stankov02@gmail.com", "_blank")}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 border-t border-purple-500/20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-base lg:text-lg text-white/60">
            © {new Date().getFullYear()} Denis Stankov. Built with{" "}
            <Heart className="inline w-4 h-4 md:w-5 md:h-5 text-purple-400" /> using Next.js & React
          </p>
        </div>
      </footer>
    </div>
  )
}
