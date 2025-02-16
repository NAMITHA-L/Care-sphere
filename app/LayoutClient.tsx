"use client";

import { usePathname } from "next/navigation";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/"; // Sidebar should be hidden on "/"

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200">
      {showSidebar && <TopHeader />}
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && <Sidebar />}
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
