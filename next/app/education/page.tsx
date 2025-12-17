import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";
import education from "@/data/education.json";

export const metadata = {
  title: "Education | Giulian",
  description: "My educational background and academic journey.",
};

export default function EducationPage() {
  return (
    <div className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Education</h1>
        <p className="text-lg text-muted-foreground">
          My formal education and continuous learning journey.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {education.formal.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400">
                {edu.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{edu.location}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{edu.description}</p>

            {edu.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  Achievements
                </h4>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {edu.courses.map((course, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded text-xs bg-accent text-muted-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Online Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {education.online.map((course, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-medium mb-1">{course.title}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{course.platform}</span>
                <span>{course.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
