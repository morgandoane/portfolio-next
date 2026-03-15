type ProjectKeyTakeawaysProps = {
  items: string[]
}

export function ProjectKeyTakeaways({ items }: ProjectKeyTakeawaysProps) {
  return (
    <section className="px-6 py-16 sm:px-8">
      <h3 className="mb-8 text-xl font-medium sm:text-2xl">
        Key takeaways from this project
      </h3>
      <ol className="list-inside list-decimal space-y-3 text-base leading-loose text-muted-foreground">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  )
}
