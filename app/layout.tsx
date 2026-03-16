import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://morgandoane.com"
  ),
  title: {
    default: "Morgan Doane",
    template: "%s | Morgan Doane",
  },
  description:
    "Design engineer building at the intersection of software, hardware, and data.",
  authors: [{ name: "Morgan Doane" }],
  openGraph: {
    siteName: "Morgan Doane",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, satoshi.variable, "font-sans")}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex min-h-svh flex-col">
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
