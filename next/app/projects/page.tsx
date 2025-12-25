"use client";

import { FolderGit2, ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";
import projects from "@/data/projects.json";
import { PageTransition } from "@/components/page-transition";
import { AnimatedCard } from "@/components/animated-card";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <PageTransition>
      <div className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of projects I&apos;ve built.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Featured
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 150}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50"
                >
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border mb-4">
                    <FolderGit2 className="h-12 w-12 text-primary/30" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 rounded text-xs bg-accent text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Other Projects</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {otherProjects.map((project, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 100}
                  className="p-5 rounded-xl bg-background border border-border hover:border-primary/50 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <FolderGit2 className="h-5 w-5 text-primary" />
                    <div className="flex items-center gap-1">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded text-xs bg-accent text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
