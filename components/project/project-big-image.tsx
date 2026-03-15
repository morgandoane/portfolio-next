import { ProjectImage } from "./project-image"

type ProjectBigImageProps = {
  src: string
  alt: string
  className?: string
}

export function ProjectBigImage({
  src,
  alt,
  className = "object-contain",
}: ProjectBigImageProps) {
  return (
    <div className="mx-auto max-w-6xl border-x border-t border-border bg-accent dark:bg-card">
      <div className="relative h-144 w-full overflow-hidden px-4 py-8 sm:h-176 sm:px-8">
        <ProjectImage
          src={src}
          alt={alt}
          className={className}
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </div>
  )
}
