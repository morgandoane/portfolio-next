import Image from "next/image"
import Link from "next/link"

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-10 sm:px-12 sm:py-14">
      <h2 className="mb-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
        Education
      </h2>

      <div className="flex flex-col gap-6">
        <Link
          href="https://www.design.utah.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 py-2 transition-colors hover:text-foreground"
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
          <div>
            <h3 className="font-medium text-foreground">University of Utah</h3>
            <p className="text-base text-muted-foreground">
              College of Architecture + Planning
            </p>
            <p className="text-base text-muted-foreground">
              Multidisciplinary Design BS
            </p>
          </div>
        </Link>

        <Link
          href="https://mde.harvard.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 py-2 transition-colors hover:text-foreground"
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
          <div>
            <h3 className="font-medium text-foreground">Harvard University</h3>
            <p className="text-base text-muted-foreground">
              Graduate School of Design
            </p>
            <p className="text-base text-muted-foreground">
              Design Engineering MS
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
