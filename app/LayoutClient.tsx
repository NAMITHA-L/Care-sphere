"use client";

import { usePathname } from "next/navigation";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import FamilySidebar from "./components/FamilySidebar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const sidebarPaths = [
    "/dashboard",
    "/patients",
    "/alerts",
    "/reports",
    "/communication",
    "/schedule",
    "/observations",
    "/settings",
    "/help",
  ];

  const familySidebarPaths = [
    "/family-dashboard",
    "/family/patient-overview",
    "/family/reports",
    "/family/alerts",
    "/family/schedule",
    "/family/messages",
    "/family/doctors",
    "/family/family-chat",
    "/family/settings",
    "/family/help",
  ];

  const showSidebar = sidebarPaths.some((path) => pathname.startsWith(path));
  const showFamilySidebar = familySidebarPaths.some((path) => pathname.startsWith(path));
  const showTopHeader = pathname !== "/"; // Hide on login page

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200">
      {showTopHeader && <TopHeader />}
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && <Sidebar />}
        {showFamilySidebar && <FamilySidebar />}
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
