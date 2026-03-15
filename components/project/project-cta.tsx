import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectCTAProps = {
  href: string
  children: React.ReactNode
  external?: boolean
}

export function ProjectCTA({ href, children, external = false }: ProjectCTAProps) {
  const buttonContent = (
    <>
      {children}
      {external && <ArrowRight className="size-4" />}
    </>
  )

  return (
    <section className="flex justify-center px-6 py-16 sm:px-8">
      <Button
        asChild
        size="lg"
        className="gap-2 rounded-full px-6 py-6 text-lg font-medium"
      >
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonContent}
          </a>
        ) : (
          <Link href={href}>{buttonContent}</Link>
        )}
      </Button>
    </section>
  )
}
