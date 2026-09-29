"use client"

import { useState } from "react"

// Swap this path when new card artwork is uploaded.
const cardFrontImage = "/student-card.jpg"

export function CardsScreen() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex flex-col px-4 pt-6">
      {/* White Container Wrapper */}
      <div className="overflow-hidden rounded-[24px] bg-white">
        <button
          type="button"
          onClick={() => setIsFlipped((prev) => !prev)}
          aria-label="اقلب بطاقة الطالب"
          className="block w-full cursor-pointer [perspective:1400px]"
        >
          {/* Vertical Card Container */}
          <div
            className="relative aspect-[1/1.58] w-full transition-transform duration-500 [transform-style:preserve-3d]"
            style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            {/* Front */}
            <div className="absolute inset-0 overflow-hidden rounded-[24px] [backface-visibility:hidden]">
              <img
                src={cardFrontImage || "/placeholder.svg"}
                alt="الوجه الأمامي لبطاقة الطالب"
                className="h-full w-full -translate-x-[2px] scale-[1.08] object-cover"
              />
            </div>
            {/* Back */}
            <div className="absolute inset-0 overflow-hidden rounded-[24px] bg-[#fbfbf7] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <svg
                aria-hidden="true"
                className="absolute inset-y-6 right-5 h-[calc(100%-3rem)] w-8"
                viewBox="0 0 24 400"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M9 0 C1 12 17 24 9 36 C1 48 17 60 9 72 C1 84 17 96 9 108 C1 120 17 132 9 144 C1 156 17 168 9 180 C1 192 17 204 9 216 C1 228 17 240 9 252 C1 264 17 276 9 288 C1 300 17 312 9 324 C1 336 17 348 9 360 C1 372 17 384 9 396"
                  stroke="#1f9d57"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 0 C10 12 26 24 18 36 C10 48 26 60 18 72 C10 84 26 96 18 108 C10 120 26 132 18 144 C10 156 26 168 18 180 C10 192 26 204 18 216 C10 228 26 240 18 252 C10 264 26 276 18 288 C10 300 26 312 18 324 C10 336 26 348 18 360 C10 372 26 384 18 396"
                  stroke="#1f9d57"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
