"use client";

import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import certificates from "@/data/certificates.json";
import { PageTransition } from "@/components/page-transition";
import { AnimatedCard } from "@/components/animated-card";

// Available colors that can be used in the JSON badgeColor field
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

export default function CertificatesPage() {
  return (
    <PageTransition>
      <div className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Certificates</h1>
          <p className="text-lg text-muted-foreground">
            Continuous learning is key to staying relevant in tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <AnimatedCard
              key={index}
              delay={index * 100}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
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
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>

              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
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
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
