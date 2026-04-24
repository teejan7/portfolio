import { Orbitron, Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: "#030813",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-[var(--space-bg)] text-slate-100 antialiased",
          spaceGrotesk.className,
          spaceGrotesk.variable,
          orbitron.variable,
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
