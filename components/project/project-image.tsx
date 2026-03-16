import Image from "next/image"

type ProjectImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
}

export function ProjectImage({
  src,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ProjectImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      unoptimized={src.endsWith(".svg") || src.endsWith(".gif")}
    />
  )
}
