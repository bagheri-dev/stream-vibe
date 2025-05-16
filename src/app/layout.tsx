import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/modules/layout/header/Header";
import Providers from "@/providers/Providers";
import {Footer} from "@/modules/layout/footer/Footer";
import ProgressBar from "@/components/shared/ProgressBar";

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
        <ProgressBar />
      <Header />
        <Providers>
            {children}
        </Providers>
      <Footer />
      </body>
    </html>
  );
}
