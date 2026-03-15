type ProjectTextSectionProps = {
  heading?: string
  children: React.ReactNode
}

export function ProjectTextSection({
  heading,
  children,
}: ProjectTextSectionProps) {
  return (
    <section className="flex flex-col gap-8 px-6 py-16 sm:px-8">
      <div className="flex min-w-0 flex-1 flex-col gap-4 text-base leading-loose text-muted-foreground lg:max-w-3xl">
        {heading && (
          <h3 className="cursor-default text-2xl font-medium text-foreground sm:text-3xl">
            {heading}
          </h3>
        )}
        {children}
      </div>
    </section>
  )
}
