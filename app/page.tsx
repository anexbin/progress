"use client"

import { useState } from "react"
import { BottomNav, type Tab } from "@/components/bottom-nav"
import { HomeScreen } from "@/components/home-screen"
import { CardsScreen } from "@/components/cards-screen"
import { AccountScreen } from "@/components/account-screen"

export default function Page() {
  const [tab, setTab] = useState<Tab>("home")

  return (
    <div className="h-[100dvh] bg-[#f8f9fa]">
      <div className="mx-auto flex h-[100dvh] max-w-md flex-col bg-[#f8f9fa]">
        <main className="flex-1 overflow-y-auto pb-8">
          {tab === "home" && <HomeScreen />}
          {tab === "cards" && <CardsScreen />}
          {tab === "account" && <AccountScreen />}
        </main>
        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  )
}
