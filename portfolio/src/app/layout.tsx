import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundLayers from "@/components/BackgroundLayers";
import FloatingDock from "@/components/FloatingDock";

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
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#030303] text-foreground font-sans antialiased">
        <BackgroundLayers />
        <div className="relative z-10 min-h-screen pb-32">
          {children}
        </div>
        <FloatingDock />
      </body>
    </html>
  );
}
