type ProjectTextImageSectionProps = {
  imagePosition: "left" | "right"
  image: React.ReactNode
  heading?: string
  children: React.ReactNode
}

export function ProjectTextImageSection({
  imagePosition,
  image,
  heading,
  children,
}: ProjectTextImageSectionProps) {
  const textContent = (
    <div className="flex min-w-0 flex-1 flex-col gap-4 text-base leading-loose text-muted-foreground lg:flex-1 lg:basis-0">
      {heading && (
        <h3 className="cursor-default text-2xl font-medium text-foreground sm:text-3xl">
          {heading}
        </h3>
      )}
      {children}
    </div>
  )

  const imageContent = (
    <div className="relative flex min-w-0 flex-1 items-center justify-center lg:flex-1 lg:basis-0">
      {image}
    </div>
  )

  return (
    <section className="flex flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-start lg:gap-12">
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </section>
  )
}
