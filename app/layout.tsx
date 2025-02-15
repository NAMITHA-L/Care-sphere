import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "./LayoutClient"; // Import the new Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareSphere",
  description: "Empowering Care, Simplifying Lives",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient> {/* Use Client Component here */}
      </body>
    </html>
  );
}
