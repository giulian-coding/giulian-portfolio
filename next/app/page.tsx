"use client";

import { useEffect, useState } from "react";
import { MapPin, Calendar, Coffee, Code2, Heart, Gamepad2, FolderGit2, ExternalLink, Github, Star, GraduationCap, Trophy, Award, Building2, ArrowUpRight, Sun, Moon, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import about from "@/data/about.json";
import projects from "@/data/projects.json";
import education from "@/data/education.json";
import certificates from "@/data/certificates.json";
import techData from "@/data/tech-stack.json";
import { FadeIn } from "@/components/page-transition";
import { AnimatedCard } from "@/components/animated-card";
import { useTheme } from "@/components/theme-provider";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Heart,
  Gamepad2,
};

const techIconMap: Record<string, string> = {
  "Python": "python.svg",
  "Docker": "docker.svg",
  "Kubernetes": "kubernetes.svg",
  "VMWare": "vmware.svg",
  "Azure": "azure.svg",
  "M365": "microsoft.svg",
  "Next.js": "next-js.svg",
  "Terraform": "terraform.svg",
  "Ansible": "ansible.svg",
  "Nginx": "nginx.svg",
  "SSL Certificates": "certificate-ssl.svg",
  "PowerShell": "powershell.svg",
  "DevOps": "devops.svg",
  "Postgresql": "postgresql.svg",
  "MongoDB": "mongodb.svg",
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  green: "bg-green-500/10 text-green-600 dark:text-green-400",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  red: "bg-red-500/10 text-red-600 dark:text-red-400",
  yellow: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  gray: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

function getBadgeColor(color?: string): string {
  if (!color) return colorMap.gray;
  return colorMap[color] || colorMap.gray;
}

function TechItem({ name, level }: { name: string; level: number }) {
  const iconFile = techIconMap[name];

  return (
    <div className="group relative p-6 rounded-2xl bg-background border border-border transition-all duration-300 ease-out cursor-default hover:border-primary/50 hover-lift">
      <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-30">
        {iconFile ? (
          <Image
            src={`/${iconFile}`}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
            {name.charAt(0)}
          </div>
        )}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-sm font-medium whitespace-nowrap mb-2">{name}</span>
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 rounded-full bg-accent overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${level}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{level}%</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Theme Toggle - Fixed */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
        aria-label="Toggle theme"
      >
        {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
      </button>

      {/* Section Spy - Fixed Right */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3"
          >
            <span
              className={`font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeSection === section.id
                  ? "opacity-100 text-foreground"
                  : "opacity-0 group-hover:opacity-100 text-muted-foreground"
              }`}
            >
              {section.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "w-3 h-3 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 group-hover:bg-muted-foreground"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Hero Section - Experimental */}
      <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="px-6 sm:px-12 lg:px-24 relative">
          {/* Overline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="font-space text-xs tracking-[0.3em] uppercase text-muted-foreground">
              IT System Engineer & Developer
            </span>
          </div>

          {/* Main Title - Modern Typography */}
          <div className="relative mb-12">
            <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] font-black leading-none tracking-tight">
              <span className="inline-block">Giulian</span>
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full ml-1 mb-2 sm:mb-4 animate-pulse" />
            </h1>
          </div>

          {/* Subtitle with asymmetric layout */}
          <div className="max-w-xl ml-auto mr-0 lg:mr-24">
            <p className="font-space text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Building digital experiences with code.
              <span className="text-foreground font-medium"> Focused on craft</span>,
              driven by curiosity.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-6 sm:left-12 lg:left-24">
            <div className="flex items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground rotate-90 origin-left translate-x-2">
                SCROLL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 border-y border-border overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {techData.technologies.map((tech, index) => (
                <span key={index} className="font-display text-2xl sm:text-3xl font-bold text-muted-foreground/30 uppercase tracking-wide">
                  {tech.name}
                </span>
              ))}
              <span className="text-primary">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-32 px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">01</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">About</h2>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9 space-y-16">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border overflow-hidden">
                    <span className="font-display text-8xl font-black text-primary/20">{about.name.charAt(0)}</span>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                  {about.bio.map((paragraph, index) => (
                    <p key={index} className="font-space text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  <div className="flex flex-wrap gap-6 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{about.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{about.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Coffee className="h-4 w-4 text-primary" />
                      <span>Coffee Enthusiast</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Values */}
            <FadeIn delay={100}>
              <div className="grid sm:grid-cols-3 gap-4">
                {about.values.map((value, index) => {
                  const Icon = iconMap[value.icon] || Code2;
                  return (
                    <div key={index} className="group p-6 rounded-2xl bg-accent/30 border border-border hover:border-primary/50 transition-all hover-lift">
                      <Icon className="h-6 w-6 text-primary mb-4" />
                      <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            {/* Interests */}
            <FadeIn delay={200}>
              <div>
                <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-6">INTERESTS</h3>
                <div className="flex flex-wrap gap-3">
                  {about.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 rounded-full border border-border text-sm hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-32 px-6 sm:px-12 lg:px-24 bg-accent/20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">02</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">Stack</h2>
              <p className="text-muted-foreground mt-4 font-space">
                Tools I use daily
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-4 justify-start">
              {techData.technologies.map((tech, index) => (
                <FadeIn key={index} delay={index * 30}>
                  <TechItem name={tech.name} level={tech.level} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">03</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">
                Selected<br />
                <span className="text-stroke">Works</span>
              </h2>
              <p className="text-muted-foreground font-space mt-4">
                A curated selection of projects
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="space-y-8">
                {featuredProjects.map((project, index) => (
                  <FadeIn key={index} delay={index * 100}>
                    <AnimatedCard className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50">
                      <div className="flex items-center gap-3 mb-6">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs tracking-widest text-muted-foreground">FEATURED</span>
                      </div>

                      <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border overflow-hidden mb-6">
                        <FolderGit2 className="h-16 w-16 text-primary/20" />
                      </div>

                      <h3 className="font-display text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground font-space mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full text-xs bg-accent text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 font-medium hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                          <span>Code</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 font-medium hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Live Demo</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      </div>
                    </AnimatedCard>
                  </FadeIn>
                ))}
              </div>
            )}

            {/* Other Projects Grid */}
            {otherProjects.length > 0 && (
              <div className="mt-16">
                <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-8">MORE PROJECTS</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {otherProjects.map((project, index) => (
                    <FadeIn key={index} delay={index * 50}>
                      <AnimatedCard className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <FolderGit2 className="h-6 w-6 text-primary" />
                          <div className="flex items-center gap-2">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </Link>
                            <Link
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>

                        <h4 className="font-display font-bold text-lg mb-2">{project.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 rounded text-xs bg-accent text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </AnimatedCard>
                    </FadeIn>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 sm:px-12 lg:px-24 bg-accent/20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">04</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">Education</h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            {education.formal.map((edu, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-primary font-space font-medium">{edu.institution}</p>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400">
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-space mb-6">{edu.description}</p>

                  {edu.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs tracking-widest text-muted-foreground">ACHIEVEMENTS</span>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-accent text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Online Courses */}
            <FadeIn delay={300}>
              <div className="mt-16">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">ONLINE COURSES</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.online.map((course, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors hover-lift"
                    >
                      <h4 className="font-display font-bold mb-2">{course.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{course.platform}</span>
                        <span className="font-mono text-xs">{course.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-32 px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">05</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">
                Certifi<span className="text-stroke">cates</span>
              </h2>
              <p className="text-muted-foreground font-space mt-4">
                Continuous learning journey
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <AnimatedCard className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(cert.badgeColor)}`}>
                          {cert.badge}
                        </span>
                      </div>
                      {cert.credentialUrl !== "#" && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold mb-3">{cert.title}</h4>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </AnimatedCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-6 sm:px-12 lg:px-24 bg-accent/20 relative overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 relative items-start">
          <div className="lg:col-span-3">
            <div>
              <span className="font-mono text-xs tracking-widest text-muted-foreground">06</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">
                Con<span className="text-stroke">tact</span>
              </h2>
              <p className="text-muted-foreground font-space mt-4">
                Let&apos;s work together
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <FadeIn>
              <div className="space-y-8">
                <div className="max-w-lg">
                  <h3 className="font-display text-2xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground font-space leading-relaxed">
                    I&apos;m always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>

                {/* Contact Links */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <a
                    href={`mailto:${about.social?.email || 'hello@example.com'}`}
                    className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover-lift text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">EMAIL</span>
                      <p className="font-display font-bold text-sm mt-1">{about.social?.email || 'hello@example.com'}</p>
                    </div>
                  </a>

                  <a
                    href={about.social?.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover-lift text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">LINKEDIN</span>
                      <p className="font-display font-bold text-sm mt-1">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href={about.social?.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover-lift text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">GITHUB</span>
                      <p className="font-display font-bold text-sm mt-1">Check my code</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 lg:px-24 border-t border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-mono text-xs">© {new Date().getFullYear()} Giulian. All rights reserved.</span>
          <span className="font-mono text-xs">Built with Next.js + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
