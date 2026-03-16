import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { Client } from "@notionhq/client"
import { rateLimit } from "@/lib/rate-limit"

const resend = new Resend(process.env.RESEND_API_KEY)

const notion = new Client({ auth: process.env.NOTION_TOKEN })

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 2000

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    const { allowed, retryAfterMs } = rateLimit(ip)

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests, please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((retryAfterMs ?? 3600000) / 1000)),
          },
        }
      )
    }

    const body = await request.json()
    const { name, email, message } = body as {
      name: string
      email: string
      message: string
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.`,
        },
        { status: 400 }
      )
    }

    const { error: resendError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="margin-bottom: 4px;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.trim()}</p>
        </div>
      `,
    })

    if (resendError) {
      console.error("Resend error:", resendError)
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      )
    }

    // Notion logging is secondary - don't fail the request if it errors
    try {
      await notion.pages.create({
        parent: { database_id: process.env.NOTION_DATABASE_ID! },
        properties: {
          Name: { title: [{ text: { content: name.trim() } }] },
          Email: { email: email.trim() },
          Message: {
            rich_text: [{ text: { content: message.trim() } }],
          },
          Status: { status: { name: "New" } },
        },
      })
    } catch (notionError) {
      console.error("Notion error:", notionError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
