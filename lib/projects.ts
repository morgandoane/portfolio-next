import type { Metadata } from "next"

export interface Project {
  slug: string
  title: string
  description?: string
  category?: string
  image: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    slug: "korus",
    title: "Korus",
    description:
      "Korus transforms mountains of student feedback into clear, evidence-backed insights your faculty can act on.",
    category: "Product",
    image: "/korus/mobile-insight-detail.png",
    tags: ["Product", "Full Stack", "Software", "Design", "Data"],
  },
  {
    slug: "energymap",
    title: "US Energy Map",
    description:
      "Interactive map of the US energy grid: power plants, transmission, and regional energy mix.",
    category: "Data",
    image: "/energy/energy-hero.png",
    tags: ["Data", "Energy", "Full Stack", "Software"],
  },
  {
    slug: "cryogenicprinter",
    title: "Cryogenic Printer",
    description: "A bespoke 3D ice printer for temporary ice structures.",
    category: "Hardware",
    image: "/printer/printer-full-01.png",
    tags: ["Hardware", "Research"],
  },
  {
    slug: "conveyors",
    title: "Conveyor Systems",
    description:
      "Industrial conveyor systems: modular design, design automation, and in-house manufacturing at Little Dutch Boy Bakeries.",
    category: "Manufacturing",
    image: "/conveyors/cookies.webp",
    tags: ["Hardware", "Software", "Design"],
  },
  {
    slug: "coldform",
    title: "ColdForm",
    description:
      "A cooling vest that keeps roofers safe using compressed air and phase-change cooling, recharged with tools already on the job site.",
    category: "Hardware",
    image: "/coldform/xray.png",
    tags: ["Hardware", "Product", "Design", "Research"],
  },
  {
    slug: "gchair",
    title: "G Chair",
    description:
      "Personal project: a wooden armchair designed and built from scratch.",
    category: "Personal",
    image: "/gchair/hero.jpg",
    tags: ["Design"],
  },
]

export function getProjectMetadata(slug: string): Metadata {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  const params = new URLSearchParams({
    title: project.title,
    description: project.description ?? "",
  })
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [`/api/og?${params.toString()}`],
    },
  }
}

/** All unique tags across projects, sorted alphabetically */
export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  for (const p of projects) {
    for (const t of p.tags ?? []) tagSet.add(t)
  }
  return [...tagSet].sort()
}
