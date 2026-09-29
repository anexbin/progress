import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    name: "بوابة الطالب",
    short_name: "بوابة الطالب",
    description: "بوابة الطالب - جامعة باتنة 1",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f8f9fa",
    theme_color: "#f8f9fa",
    dir: "rtl",
    lang: "ar",
    icons: [
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  })
}
