import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Navigation from "./components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush.dev"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "Ayush Agarwal | Product Engineer",
    template: "%s | Ayush Agarwal",
  },
  description:
    "Product engineer specializing in iOS development, full-stack web, and AI/LLM systems. Shipping production-grade apps with 1k+ users and architecting scalable systems.",
  keywords: [
    "Product Engineer",
    "iOS Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Swift",
    "AI/LLM",
    "Startup",
  ],
  authors: [{ name: "Ayush Agarwal" }],
  creator: "Ayush Agarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayush.dev",
    siteName: "Ayush Agarwal",
    title: "Ayush Agarwal | Product Engineer",
    description:
      "Product engineer building production-grade apps and scalable systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Agarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Agarwal | Product Engineer",
    description:
      "Product engineer specializing in iOS, Full-Stack Web, and AI systems.",
    creator: "@ayushagarwal_",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://ayush.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
