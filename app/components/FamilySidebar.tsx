"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart, MessageSquare, Calendar, Stethoscope, Settings, HelpCircle } from "lucide-react"

const familyItems = [
  { icon: Home, label: "Home", href: "/family-dashboard" },
  { icon: BarChart, label: "Reports", href: "/family/reports" },
  { icon: Calendar, label: "Schedule", href: "/family/schedule" },
  { icon: MessageSquare, label: "Messages", href: "/family/messages" },
  { icon: Stethoscope, label: "Doctor Appointments", href: "/family/doctor-appointments" },
  { icon: Settings, label: "Settings", href: "/family/settings" },
  { icon: HelpCircle, label: "Help & Support", href: "/family/help-support" },
]

export default function FamilySidebar() {
  const pathname = usePathname()
  const isFamily = pathname.startsWith("/family")

  if (!isFamily) return null

  return (
    <aside className="bg-white w-64 min-h-screen p-4 shadow-md">
      <nav className="space-y-2">
        {familyItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 p-2 rounded-lg transition-all hover:bg-gray-100 ${
              pathname === item.href ? "bg-gray-100 text-blue-600" : "text-gray-700"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

