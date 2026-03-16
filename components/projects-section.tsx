"use client"

import { useMemo, useState } from "react"
import { projects, getAllTags } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const allTags = useMemo(() => getAllTags(), [])

  const filteredProjects = useMemo(() => {
    if (!activeTag) return projects
    return projects.filter(
      (p) => p.tags?.includes(activeTag)
    )
  }, [activeTag])

  return (
    <section id="projects" className="px-6 py-16 sm:px-12 sm:py-24">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Projects
      </h2>

      {/* Filter chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        <FilterChip
          label="All"
          active={activeTag === null}
          onClick={() => setActiveTag(null)}
        />
        {allTags.map((tag) => (
          <FilterChip
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            animationDelay={index * 75}
          />
        ))}
      </div>
    </section>
  )
}

interface FilterChipProps {
  label: string
  active: boolean
  onClick: () => void
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
      )}
    >
      {label}
    </button>
  )
}
