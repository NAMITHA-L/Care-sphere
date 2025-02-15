"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, BarChart, MessageSquare, Calendar, Clipboard, Settings, HelpCircle } from "lucide-react"

const professionalItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Patients", href: "/patients" },
  { icon: BarChart, label: "Reports", href: "/reports" },
  { icon: MessageSquare, label: "Communication", href: "/communication" },
  { icon: Clipboard, label: "Health Observations", href: "/health-observation" },
  { icon: Settings, label: "Settings", href: "/caregiver-settings" },
  { icon: HelpCircle, label: "Help", href: "/caregiver-help-support" },
]

export default function Sidebar() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const items = pathname.startsWith("/family") ? familyItems : professionalItems

  return (
    <aside className="bg-white w-64 min-h-screen p-4 shadow-md">
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 p-2 rounded-lg transition-all hover:bg-blue-100 ${
              pathname === item.href ? "bg-blue-100 text-blue-600" : "text-gray-700"
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

