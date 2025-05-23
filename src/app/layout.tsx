import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/modules/layout/header/Header";
import Providers from "@/providers/Providers";
import {Footer} from "@/modules/layout/footer/Footer";
import ProgressBar from "@/components/shared/ProgressBar";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
    title: {
        default: "StreamVibe | Your Ultimate Movie Streaming Platform",
        template: "%s | StreamVibe"
    },
    description: "Discover and stream thousands of movies and TV shows on StreamVibe. High-quality streaming, personalized recommendations, and exclusive content.",
    keywords: ["streaming", "movies", "TV shows", "StreamVibe", "online movies", "watch online"],
    authors: [{ name: "StreamVibe Team" }],
    openGraph: {
        title: "StreamVibe | Your Ultimate Movie Streaming Platform",
        description: "Discover and stream thousands of movies and TV shows on StreamVibe.",
        url: "https://streom-vibe.vercel.app",
        siteName: "StreamVibe",
        images: [
            {
                url: "https://streom-vibe.vercel.app/images/logo.webp",
                width: 1200,
                height: 630,
                alt: "StreamVibe - Watch Movies & TV Shows Online",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    metadataBase: new URL("https://streom-vibe.vercel.app"),
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    themeColor: "#000000",
    category: "entertainment",
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
