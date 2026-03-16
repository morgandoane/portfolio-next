import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-10 sm:px-12 sm:py-14">
      <h2 className="mb-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
        Education
      </h2>

      <div className="flex flex-col gap-2">
        <Link
          href="https://www.design.utah.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-3 transition-all hover:bg-muted/50"
        >
          <div className="flex w-14 shrink-0 items-center justify-center">
            <div className="relative size-10">
              <Image
                src="/utah.png"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">University of Utah</h3>
            <p className="text-base text-muted-foreground">
              College of Architecture + Planning
            </p>
            <p className="text-base text-muted-foreground">
              Multidisciplinary Design BS
            </p>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>

        <Link
          href="https://mde.harvard.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-3 transition-all hover:bg-muted/50"
        >
          <div className="relative size-14 shrink-0">
            <Image
              src="/harvard.png"
              alt=""
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Harvard University</h3>
            <p className="text-base text-muted-foreground">
              Graduate School of Design
            </p>
            <p className="text-base text-muted-foreground">
              Design Engineering MS
            </p>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </div>
    </section>
  )
}
