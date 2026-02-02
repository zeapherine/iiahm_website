import { Suspense, type ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import DynamicBackground from "@/components/layout/DynamicBackground";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "IIAHM | International Institute of Aviation and Hotel Management",
  description: "The premier gateway to international careers in Aviation and Hotel Management for the talented youth of Northeast India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased text-foreground bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <DynamicBackground />
            <Suspense fallback={null}>
              <LoadingBar />
            </Suspense>
            <Header />
            <main className="min-h-screen">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
