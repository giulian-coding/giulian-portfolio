"use client";

import { MapPin, Calendar, Coffee, Code2, Heart, Gamepad2 } from "lucide-react";
import about from "@/data/about.json";
import { PageTransition, FadeIn } from "@/components/page-transition";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Heart,
  Gamepad2,
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Get to know the person behind the code
          </p>
        </div>

        <FadeIn>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border">
                <div className="text-7xl font-bold text-primary/30">{about.name.charAt(0)}</div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl font-bold">Hello!</h2>
              {about.bio.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{about.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{about.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Coffee className="h-4 w-4" />
                  <span>Fueled by Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">What Drives Me</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {about.values.map((value, index) => {
                const Icon = iconMap[value.icon] || Code2;
                return (
                  <div key={index} className="p-5 rounded-xl bg-accent/30 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div>
            <h2 className="text-xl font-semibold mb-6">Beyond Coding</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {about.interests.map((interest) => (
                <div
                  key={interest}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
