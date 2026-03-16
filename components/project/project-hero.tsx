import { ProjectImage } from "./project-image"
import { cn } from "@/lib/utils"

export type HeroMeta = {
  label: string
  value: string
}

type ProjectHeroProps = {
  headline: string
  meta: HeroMeta[]
  heroImage: { src: string; alt: string }
  /** Override the image container aspect ratio. Default is aspect-video (16:9). Use aspect-[4/5] or aspect-[3/4] for taller. */
  imageAspect?: string
}

export function ProjectHero({
  headline,
  meta,
  heroImage,
  imageAspect = "aspect-video",
}: ProjectHeroProps) {
  return (
    <section className="flex flex-col gap-6 px-6 pb-16 sm:px-8">
      <h2 className="mx-auto mt-16 max-w-3xl text-center text-4xl font-medium sm:text-5xl">
        {headline}
      </h2>
      <div className="mb-16 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-muted-foreground">
        {meta.map(({ label, value }) => (
          <span key={label}>
            <strong className="text-foreground">{label}:</strong> {value}
          </span>
        ))}
      </div>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg bg-accent dark:bg-card",
          imageAspect
        )}
      >
        <ProjectImage
          src={heroImage.src}
          alt={heroImage.alt}
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  )
}
