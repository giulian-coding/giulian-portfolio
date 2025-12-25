"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="px-8 sm:px-16 lg:px-24">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Giulian
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-md">
            Building things for the web.
          </p>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
