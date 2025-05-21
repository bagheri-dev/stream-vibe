import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/modules/layout/header/Header";
import Providers from "@/providers/Providers";
import {Footer} from "@/modules/layout/footer/Footer";
import ProgressBar from "@/components/shared/ProgressBar";
import {ToastContainer} from "react-toastify";

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
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <Providers>
            {children}
        </Providers>
      <Footer />
      </body>
    </html>
  );
}
