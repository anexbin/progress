"use client"

import Image from "next/image"
import {
  FileText,
  Calendar,
  Users,
  CalendarDays,
  GraduationCap,
  Pencil,
  PieChart,
  Wallet,
  Calculator,
  CalendarOff,
  Inbox,
  AlertCircle,
} from "lucide-react"

const items: { label: string; icon: typeof FileText }[] = [
  { label: "التربية الإلكترونية", icon: FileText },
  { label: "الجدول الزمني", icon: Calendar },
  { label: "المجموعة و الفوج", icon: Users },
  { label: "الجدول الزمني للإمتحانات", icon: CalendarDays },
  { label: "علامات الامتحانات", icon: GraduationCap },
  { label: "التقييم المستمر", icon: Pencil },
  { label: "النسبة المئوية للمقاييس", icon: PieChart },
  { label: "كشف النقاط", icon: Wallet },
  { label: "الديون", icon: Calculator },
  { label: "عطلة أكاديمية", icon: CalendarOff },
  { label: "تسجيلاتي", icon: Inbox },
  { label: "الغيابات و الإقصاءات", icon: AlertCircle },
]

export function HomeScreen() {
  return (
    <div className="flex flex-col">
      <header className="px-5 pb-3 pt-4">
        <h1 className="text-left text-[22px] font-bold text-[#2b2b2b]">بوابة الطالب</h1>
      </header>

      {/* Promotional banner */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-[18px] bg-[#1a8a5c]">
          <Image
            src="/promo-banner.png"
            alt="اكتشفوا برنامج Student Campuce"
            width={640}
            height={180}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-1.5 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-4 rounded-full bg-gray-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Grid of services */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-4">
        {items.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="flex h-[92px] flex-col items-center justify-center gap-2 rounded-[16px] bg-[#16855c] px-2 text-white shadow-sm transition-transform active:scale-[0.97]"
          >
            <Icon className="h-7 w-7" strokeWidth={1.8} />
            <span className="text-center text-[13px] font-semibold leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
