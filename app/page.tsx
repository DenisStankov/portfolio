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
  Phone,
  Menu,
  X,
  Sparkles,
  Rocket,
  Target,
  Trophy,
  Clock,
  Brain,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const words = ["Junior Software Developer", "Web Developer", "Problem Solver", "Team Collaborator"]
  const currentWord = words[currentWordIndex]

  useEffect(() => {
    setIsVisible(true)

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

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
      window.removeEventListener("mousemove", handleMouseMove)
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
    { name: "JavaScript", level: 85, icon: Code, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 80, icon: Code, color: "from-blue-400 to-cyan-500" },
    { name: "HTML5/CSS3", level: 90, icon: Globe, color: "from-orange-400 to-red-500" },
    { name: "PostgreSQL", level: 75, icon: Database, color: "from-blue-500 to-indigo-600" },
    { name: "Git/GitHub", level: 85, icon: Code, color: "from-gray-400 to-gray-600" },
    { name: "Problem Solving", level: 90, icon: Zap, color: "from-purple-400 to-pink-500" },
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
      gradient: "from-blue-500 via-purple-500 to-pink-500",
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
      gradient: "from-indigo-500 via-purple-500 to-teal-500",
    },
  ]

  const achievements = [
    {
      icon: Target,
      number: "2+",
      label: "Projects Delivered",
      color: "text-emerald-400",
      description: "Successfully completed projects",
    },
    {
      icon: Clock,
      number: "2+",
      label: "Years Learning",
      color: "text-blue-400",
      description: "Continuous skill development",
    },
    {
      icon: Trophy,
      number: "30%",
      label: "Efficiency Boost",
      color: "text-yellow-400",
      description: "Improved reporting turnaround",
    },
    {
      icon: Brain,
      number: "Fast",
      label: "Learner",
      color: "text-purple-400",
      description: "Quick technology adoption",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2s"></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-yellow-400/10 via-orange-500/20 to-red-500/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive cursor effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/5 via-pink-500/10 to-blue-500/5 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl md:text-2xl font-bold text-white group cursor-pointer">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                Denis
              </span>{" "}
              <span className="group-hover:text-purple-300 transition-colors duration-300">Stankov</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 relative text-sm lg:text-base group ${
                    activeSection === section
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                      : "text-white/80"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-purple-400 transition-colors relative group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {mobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-purple-500/20">
              <div className="px-4 py-6 space-y-4">
                {["hero", "about", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left capitalize transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 py-2 px-4 rounded-lg hover:bg-purple-500/10 ${
                      activeSection === section
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 bg-purple-500/10"
                        : "text-white/80"
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

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
        <div
          className={`text-center z-10 transition-all duration-1000 max-w-6xl mx-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 md:mb-8">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full p-1">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6">
              <span className="text-white drop-shadow-2xl">Denis</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x drop-shadow-2xl">
                Stankov
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl -z-10"></div>
          </div>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 mb-6 md:mb-8 h-12 md:h-16 flex items-center justify-center">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-2 text-purple-400 animate-pulse" />
            {typedText}
            <span className="animate-pulse ml-1 text-purple-400">|</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Final-year Informatics student at New Bulgarian University, passionate about web development and
            problem-solving. I learn quickly, thrive in teams, and excel at turning business requirements into working
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-purple-500/25 border-0 relative overflow-hidden group"
              onClick={() => scrollToSection("projects")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
              <span className="relative z-10">Explore My Work</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-black transform hover:scale-105 transition-all duration-300 bg-transparent text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden group backdrop-blur-sm"
              onClick={handleDownloadCV}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 md:space-x-8">
            {[
              { icon: Github, href: "https://github.com/DenisStankov", color: "hover:text-gray-400" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/denis-stankov-0bb790258/",
                color: "hover:text-blue-400",
              },
              { icon: Phone, href: "tel:+359878907858", color: "hover:text-green-400" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 md:p-4 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 border border-purple-500/30 hover:border-purple-400 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden ${social.color}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <social.icon className="w-6 h-6 md:w-7 md:h-7 text-purple-400 group-hover:text-white relative z-10" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <p>
                    {"I'm"} a final-year Informatics student at New Bulgarian University with a passion for web
                    development and problem-solving. I learn quickly, thrive in teams, and excel at turning business
                    requirements into working solutions.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <p>
                    Currently working as a Business Consultant IT at OBS2GO, where I collaborate with cross-functional
                    teams to translate business requirements into technical specifications. I have solid experience with
                    PostgreSQL/SQL, HTML5/CSS3 skills, and foundational experience with JavaScript and React.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 transition-all duration-300">
                  <p>
                    My experience includes streamlined data reporting by designing PostgreSQL queries at OBS2GO,
                    reducing turnaround time by 30%, and implementing visual changes with JavaScript based on client
                    needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-4 md:p-6 text-center relative z-10">
                      <div className="relative mb-3 md:mb-4">
                        <achievement.icon
                          className={`w-8 h-8 md:w-10 md:h-10 mx-auto ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {achievement.number}
                      </div>
                      <div className="text-sm md:text-base font-medium text-white/80 mb-1">{achievement.label}</div>
                      <div className="text-xs md:text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Technologies
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="relative">
                      <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-white/90 mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white/90">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 md:h-3 mb-3 md:mb-4 overflow-hidden border border-white/20">
                    <div
                      className={`h-2 md:h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="text-right text-white/90 font-semibold text-sm md:text-base">{skill.level}%</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Additional Tools & Software</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["VS Code", "Git/GitHub", "Microsoft 365", "PostgreSQL", "Team Collaboration"].map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/5 text-white/80 border border-white/20 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 justify-center max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-black/80 border-purple-500/40 hover:border-purple-400/60 transform hover:scale-105 transition-all duration-500 overflow-hidden group backdrop-blur-sm relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                  {project.featured && (
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 z-30">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-bold shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 z-30">
                    <Badge className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white text-xs md:text-sm backdrop-blur-sm border border-purple-400/30">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 border border-purple-400/40 text-xs md:text-sm hover:from-purple-600/50 hover:to-pink-600/50 hover:text-white transition-all duration-300"
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
                      className="flex items-center text-sm md:text-base text-white/70 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-12">
            {"Let's"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Connect
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
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
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                info: "linkedin.com/in/denis-stankov",
                href: "https://www.linkedin.com/in/denis-stankov-0bb790258/",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+359 878 907 858",
                href: "tel:+359878907858",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative">
                      <contact.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto text-white/90 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-2 md:mb-3 group-hover:text-white transition-all duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {contact.info}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 md:px-12 py-4 md:py-6 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden group"
            onClick={() => window.open("mailto:denis.stankov02@gmail.com", "_blank")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 relative z-10" />
            <span className="relative z-10">Start a Conversation</span>
          </Button>
        </div>
      </section>
    </div>
  )
}
