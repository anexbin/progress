"use client"

import { Home, CreditCard, User } from "lucide-react"

export type Tab = "home" | "cards" | "account"

const tabs: { id: Tab; label: string; icon: typeof Home }[] = [
  // visual order left -> right (matches app): الرئيسية | بطاقاتي | حسابي
  // in RTL the first item renders rightmost, so list account first
  { id: "account", label: "حسابي", icon: User },
  { id: "cards", label: "بطاقاتي", icon: CreditCard },
  { id: "home", label: "الرئيسية", icon: Home },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: Tab
  onChange: (tab: Tab) => void
}) {
  return (
    <nav
      className="mx-3 mb-4 flex overflow-hidden rounded-[24px] bg-[#2e2b5e] shadow-lg"
      style={{ marginBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`flex flex-1 flex-col items-center justify-center gap-1 py-3.5 transition-colors ${
              isActive ? "bg-[#17925f] text-white" : "text-white/85"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
            <span className="text-[13px] font-medium">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
