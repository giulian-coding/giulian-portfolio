"use client";

import techData from "@/data/tech-stack.json";
import { PageTransition, FadeIn } from "@/components/page-transition";
import Image from "next/image";

// Map tech names to their SVG filenames
const iconMap: Record<string, string> = {
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

export default function TechStackPage() {
  return (
    <PageTransition>
      <div className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tech Stack</h1>
          <p className="text-lg text-muted-foreground">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {techData.technologies.map((tech, index) => (
            <FadeIn key={index} delay={index * 50}>
              <TechItem name={tech.name} level={tech.level} />
            </FadeIn>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

function TechItem({ name, level }: { name: string; level: number }) {
  const iconFile = iconMap[name];

  return (
    <div className="group relative p-6 rounded-2xl bg-background border border-border transition-all duration-300 ease-out cursor-default hover:border-primary/50">
      {/* Icon with blur on hover */}
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

      {/* Overlay content on hover */}
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
