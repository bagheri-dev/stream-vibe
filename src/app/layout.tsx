import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/modules/layout/header/Header";

export const metadata: Metadata = {
  title: "StreomVibe",
  description: "Streom Vibe move app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-manrope-regular bg-black08`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
