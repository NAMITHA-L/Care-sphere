import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "./LayoutClient"; // Import Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareSphere",
  description: "Empowering Care, Simplifying Lives",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient> {/* Delegates UI to Client Component */}
      </body>
    </html>
  );
}
