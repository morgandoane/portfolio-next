import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const education = [
  {
    school: "University of Utah",
    college: "College of Architecture + Planning",
    degree: "Multidisciplinary Design BS",
    image: "/utah.png",
    url: "https://www.design.utah.edu/",
  },
  {
    school: "Harvard University",
    college: "Graduate School of Design",
    degree: "Design Engineering MS",
    image: "/harvard.png",
    url: "https://mde.harvard.edu/",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-10 sm:px-12 sm:py-14">
      <h2 className="mb-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Education
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {education.map((item) => (
          <Link
            key={item.school}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl bg-card p-6 transition-colors hover:bg-accent/50"
          >
            <div className="relative flex size-24 shrink-0 items-center justify-center overflow-hidden">
              <div
                className={cn(
                  "relative overflow-hidden",
                  item.school === "University of Utah" ? "size-12" : "size-full"
                )}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground">{item.school}</h3>
              <p className="text-sm text-muted-foreground">{item.college}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{item.degree}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
