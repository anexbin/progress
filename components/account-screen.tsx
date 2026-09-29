"use client"

import Image from "next/image"
import { MapPin, Calendar, Languages, LogOut } from "lucide-react"

export function AccountScreen() {
  return (
    <div className="flex flex-col gap-4 px-4 pt-6">
      {/* Profile card */}
      <div className="flex flex-col items-center rounded-[28px] bg-white px-5 py-6 shadow-sm">
        <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
          <Image
            src="/avatar.png"
            alt="صورة الطالب"
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-[22px] font-bold text-[#2b2b2b]">بن كمشى ايهاب</h2>
        <p className="mt-1 text-[14px] text-gray-400">جامعة باتنة 1</p>
      </div>

      {/* Info card */}
      <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="text-right">
            <p className="text-[13px] text-gray-400">مكان الميلاد</p>
            <p className="text-[16px] font-bold text-[#2b2b2b]">الرغاية</p>
          </div>
          <MapPin className="h-6 w-6 text-[#16855c]" />
        </div>
        <div className="h-px bg-gray-100" />
        <div className="flex items-center justify-between px-5 py-4">
          <div className="text-right">
            <p className="text-[13px] text-gray-400">تاريخ الميلاد</p>
            <p className="text-[16px] font-bold text-[#2b2b2b]">2008-02-12</p>
          </div>
          <Calendar className="h-6 w-6 text-[#16855c]" />
        </div>
      </div>

      {/* Language card */}
      <div className="flex items-center justify-between rounded-[24px] bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[16px] font-semibold text-[#2b2b2b]">تغيير اللغة</p>
          </div>
          <Languages className="h-6 w-6 text-[#16855c]" />
        </div>
        <div className="flex h-12 w-14 items-center justify-center rounded-[14px] border-2 border-[#16855c] text-[18px] font-bold text-[#16855c]">
          ar
        </div>
      </div>

      {/* Logout button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-[18px] bg-[#e5392f] py-4 text-[17px] font-bold text-white shadow-sm transition-transform active:scale-[0.98]"
      >
        <span>تسجيل الخروج</span>
        <LogOut className="h-5 w-5 -scale-x-100" />
      </button>
    </div>
  )
}
