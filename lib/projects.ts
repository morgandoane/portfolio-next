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
    slug: "deployablesolar",
    title: "Deployable Solar",
    description:
      "Portable solar solutions for rapid deployment in remote or off-grid environments.",
    category: "Energy",
    image: "/energy/energy-hero.png",
    tags: ["Energy", "Hardware"],
  },
  {
    slug: "energymap",
    title: "US Energy Map",
    description:
      "Interactive map of the US energy grid: power plants, transmission, and regional energy mix.",
    category: "Data",
    image: "/energy/energy-hero.png",
    tags: ["Data", "Energy", "Full-stack"],
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
    slug: "korus",
    title: "Korus",
    description:
      "Korus transforms mountains of student feedback into clear, evidence-backed insights your faculty can act on.",
    category: "Product",
    image: "/korus/mobile-insight-detail.png",
    tags: ["0→1", "Product", "Full-stack", "Design"],
  },
  {
    slug: "coldform",
    title: "Cold Form",
    description:
      "Manufacturing and hardware for cold forming processes and tooling.",
    category: "Manufacturing",
    image: "/energy/energy-hero.png",
    tags: ["Manufacturing", "Hardware"],
  },
  {
    slug: "conveyors",
    title: "Conveyor Systems",
    description:
      "Industrial conveyor systems: modular design, design automation, and in-house manufacturing at Little Dutch Boy Bakeries.",
    category: "Manufacturing",
    image: "/conveyors/cookies.webp",
    tags: ["Manufacturing", "Hardware", "Software", "Automation"],
  },
  {
    slug: "gchair",
    title: "G Chair",
    description:
      "Personal project: a wooden armchair designed and built from scratch.",
    category: "Personal",
    image: "/gchair/hero.jpg",
    tags: ["Solidworks", "Woodworking", "Sewing"],
  },
]

/** All unique tags across projects, sorted alphabetically */
export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  for (const p of projects) {
    for (const t of p.tags ?? []) tagSet.add(t)
  }
  return [...tagSet].sort()
}
