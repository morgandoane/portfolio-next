import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

const FONT_URL =
  "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"

async function loadFont(): Promise<ArrayBuffer> {
  const res = await fetch(FONT_URL)
  return res.arrayBuffer()
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get("title") ?? "Morgan Doane"
  const description = searchParams.get("description") ?? ""

  const fontData = await loadFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          backgroundColor: "#0a0a0a",
          fontFamily: "Inter",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top bar with name */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#a3a3a3",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              color: "#a3a3a3",
              letterSpacing: "0.05em",
            }}
          >
            Morgan Doane
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: title.length > 30 ? "56px" : "72px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </span>
          {description && (
            <span
              style={{
                fontSize: "24px",
                color: "#a3a3a3",
                lineHeight: 1.4,
                maxWidth: "800px",
              }}
            >
              {description.length > 140
                ? description.slice(0, 137) + "..."
                : description}
            </span>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
