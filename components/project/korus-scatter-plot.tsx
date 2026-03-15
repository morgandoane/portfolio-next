"use client"

import { useMemo, useState, useEffect } from "react"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Scope = "colleges" | "departments" | "courses"

interface DataPoint {
  name: string
  instructorRating: number
  courseRating: number
  studentReviews: number
}

// Color gradient: yellow/orange (low) -> light green -> dark green (high)
function getColorForScore(score: number): string {
  if (score >= 0.85) return "oklch(0.5 0.15 145)" // dark green
  if (score >= 0.75) return "oklch(0.55 0.14 150)" // medium green
  if (score >= 0.65) return "oklch(0.65 0.12 155)" // light green
  if (score >= 0.55) return "oklch(0.75 0.12 100)" // yellow-green
  return "oklch(0.82 0.14 85)" // yellow-orange
}

// Seeded random for reproducible data
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generateClusteredData(
  scope: Scope,
  seed: number
): DataPoint[] {
  const collegeNames = [
    "College of Engineering",
    "College of Science",
    "College of Humanities",
    "College of Business",
    "College of Health",
    "College of Fine Arts",
    "College of Social Work",
    "College of Law",
    "College of Architecture",
    "College of Education",
    "College of Nursing",
    "College of Pharmacy",
  ]
  const departmentNames = [
    "Computer Science",
    "Biology",
    "Chemistry",
    "Physics",
    "Mathematics",
    "Psychology",
    "Sociology",
    "Economics",
    "English",
    "History",
    "Political Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Nursing",
    "Education",
    "Art & Art History",
    "Music",
    "Philosophy",
    "Anthropology",
    "Communications",
    "Environmental Studies",
    "Kinesiology",
    "Linguistics",
    "Neuroscience",
    "Public Health",
    "Urban Planning",
    "Women's Studies",
  ]
  const courseNames = [
    "Fund. of Biology I",
    "Intro to Programming",
    "Calculus I",
    "Organic Chemistry",
    "Principles of Economics",
    "World History",
    "Linear Algebra",
    "Data Structures",
    "General Physics I",
    "Developmental Psychology",
    "Microeconomics",
    "American Literature",
    "Statistics for Research",
    "Cell Biology",
    "Digital Logic Design",
    "Thermodynamics",
    "Sociological Theory",
    "Ethics in Technology",
    "Music Theory I",
    "Introduction to Art",
    "Political Philosophy",
    "Biochemistry",
    "Machine Learning",
    "Database Systems",
    "Software Engineering",
    "Quantum Mechanics",
    "Differential Equations",
    "Cognitive Psychology",
    "Macroeconomics",
    "Shakespeare",
    "Ancient Civilizations",
    "Environmental Science",
    "Circuit Analysis",
    "Fluid Mechanics",
    "Social Psychology",
    "Philosophy of Mind",
    "Jazz Improvisation",
    "Modern Art History",
    "International Relations",
    "Molecular Biology",
    "Computer Architecture",
    "Operating Systems",
    "Numerical Methods",
    "Behavioral Economics",
    "Victorian Literature",
    "Medieval History",
    "Ecology",
    "Structural Analysis",
    "Heat Transfer",
    "Clinical Psychology",
    "Public Policy",
    "Logic",
    "Intro to Sociology",
    "Human Anatomy",
    "Financial Accounting",
    "Creative Writing",
    "World Religions",
    "Intro to Philosophy",
    "Physical Chemistry",
    "Discrete Mathematics",
    "Web Development",
    "Artificial Intelligence",
    "Comparative Literature",
    "Geology",
    "Marketing Principles",
    "Constitutional Law",
    "Film Studies",
    "Nutrition Science",
    "Organizational Behavior",
  ]

  const names =
    scope === "colleges"
      ? collegeNames
      : scope === "departments"
        ? departmentNames
        : courseNames

  const count =
    scope === "colleges" ? 12 : scope === "departments" ? 30 : 80

  const result: DataPoint[] = []
  const usedNames = new Set<string>()

  // Scope-specific seed so data differs when switching scopes
  const scopeSeed =
    seed +
    (scope === "colleges" ? 0 : scope === "departments" ? 10000 : 20000)

  // Review count ranges by scope (colleges aggregate more, courses fewer per entity)
  const reviewMin = scope === "colleges" ? 800 : scope === "departments" ? 200 : 50
  const reviewMax = scope === "colleges" ? 3500 : scope === "departments" ? 1200 : 450

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(scopeSeed + i * 4)
    const r2 = seededRandom(scopeSeed + i * 4 + 1)
    const r3 = seededRandom(scopeSeed + i * 4 + 2)
    const r4 = seededRandom(scopeSeed + i * 4 + 3)
    // Cluster along diagonal; strongly favor positive area (fewer dots as scores → 0)
    const base = 0.25 + (1 - Math.pow(1 - r1, 2)) * 0.7 // quadratic: sparse near 0.25, dense toward 0.95
    const noise = 0.2 // noise around diagonal
    const instructorRating = Math.min(
      0.98,
      Math.max(0.05, base + (r2 - 0.5) * noise)
    )
    const courseRating = Math.min(
      0.98,
      Math.max(0.05, base + (r3 - 0.5) * noise)
    )
    // Student reviews: varied distribution
    const studentReviews = Math.round(
      reviewMin + r4 * (reviewMax - reviewMin)
    )

    let name: string
    let attempts = 0
    do {
      const idx = Math.floor(seededRandom(scopeSeed + i + attempts * 100) * names.length)
      name = names[idx]
      attempts++
    } while (usedNames.has(name) && attempts < 20)
    usedNames.add(name)

    result.push({
      name,
      instructorRating: Math.round(instructorRating * 100) / 100,
      courseRating: Math.round(courseRating * 100) / 100,
      studentReviews,
    })
  }

  return result
}

function CustomTooltipContent({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload: DataPoint }>
}) {
  if (!active || !payload?.length) return null

  const data = payload[0].payload

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2.5 shadow-lg">
      <p className="mb-2 font-medium text-popover-foreground">{data.name}</p>
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>Course Recommendation: {data.courseRating.toFixed(2)}</p>
        <p>Instructor Recommendation: {data.instructorRating.toFixed(2)}</p>
        <p>Student Reviews: {data.studentReviews.toLocaleString()}</p>
      </div>
    </div>
  )
}

const SCOPES: { value: Scope; label: string }[] = [
  { value: "colleges", label: "Colleges" },
  { value: "departments", label: "Departments" },
  { value: "courses", label: "Courses" },
]

export function KorusScatterPlot() {
  const [scope, setScope] = useState<Scope>("courses")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = useMemo(
    () => generateClusteredData(scope, 42),
    [scope]
  )

  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <Tabs value={scope} onValueChange={(v) => setScope(v as Scope)}>
        <TabsList className="h-8 w-full sm:w-auto">
          {SCOPES.map((s) => (
            <TabsTrigger key={s.value} value={s.value} className="flex-1 sm:flex-initial text-xs">
              {s.label}
            </TabsTrigger>
          ))}
        </TabsList>

      <div className="relative aspect-square w-full min-h-[200px]">
        {mounted ? (
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={200}>
          <ScatterChart
            margin={{ top: 12, right: 12, bottom: 24, left: 24 }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <XAxis
              type="number"
              dataKey="instructorRating"
              name="Instructor Rating"
              domain={[0, 1]}
              tick={{ fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Instructor Rating",
                position: "bottom",
                offset: 0,
                fontSize: 11,
              }}
            />
            <YAxis
              type="number"
              dataKey="courseRating"
              name="Course Rating"
              domain={[0, 1]}
              tick={{ fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Course Rating",
                angle: -90,
                position: "insideLeft",
                fontSize: 11,
              }}
            />
            <ZAxis
              type="number"
              dataKey="studentReviews"
              range={[32, 80]}
            />
            <Tooltip
              content={<CustomTooltipContent />}
              cursor={{ stroke: "var(--border)", strokeWidth: 1 }}
            />
            <Scatter
              data={data}
              zAxisId={0}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              shape={(props) => {
                const { cx, cy, payload, index, width, height } = props
                const isActive = activeIndex === index
                const score =
                  (payload.instructorRating + payload.courseRating) / 2
                const color = getColorForScore(score)
                // Base size from ZAxis (width/height from ScatterPointItem), scale up when active
                const baseR = Math.min(width ?? 6, height ?? 6) / 2
                const r = isActive ? baseR * 1.4 : baseR

                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={color}
                    stroke="var(--background)"
                    strokeWidth={1}
                    style={{ transition: "r 0.15s ease-out" }}
                  />
                )
              }}
            />
          </ScatterChart>
        </ResponsiveContainer>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted/30" aria-hidden>
            <div className="h-4 w-4 animate-pulse rounded-full bg-muted-foreground/20" />
          </div>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Data shown is for representation in portfolio only, not real data.
      </p>
      </Tabs>
    </div>
  )
}
