import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundLayers from "@/components/BackgroundLayers";
import FloatingDock from "@/components/FloatingDock";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ayush Agarwal — Developer Portfolio",
  description: "Full Stack Developer crafting beautiful digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <BackgroundLayers />
          <div className="relative z-10 min-h-screen pb-32">
            {children}
          </div>
          <FloatingDock />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
