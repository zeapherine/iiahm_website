import { Suspense, type ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import DynamicBackground from "@/components/layout/DynamicBackground";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { AllJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ianinstitute.in'),
  title: {
    default: "IIAHM | International Institute of Aviation and Hotel Management",
    template: "%s | IIAHM"
  },
  description: "The premier gateway to international careers in Aviation and Hotel Management for the talented youth of Northeast India. ISO 9001:2015 certified with 500+ global placements.",
  keywords: [
    "aviation training",
    "hotel management",
    "air hostess training",
    "cabin crew training",
    "northeast india",
    "kokrajhar",
    "hospitality courses",
    "airport ground staff",
    "IIAHM",
    "aviation institute assam"
  ],
  authors: [{ name: "IIAHM", url: "https://www.ianinstitute.in" }],
  creator: "IIAHM",
  publisher: "International Institute of Aviation and Hotel Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ianinstitute.in",
    siteName: "IIAHM",
    title: "IIAHM | International Institute of Aviation and Hotel Management",
    description: "The premier gateway to international careers in Aviation and Hotel Management for the talented youth of Northeast India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIAHM - International Institute of Aviation and Hotel Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIAHM | Aviation & Hotel Management Institute",
    description: "The premier gateway to international careers in Aviation and Hotel Management for Northeast India.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.ianinstitute.in",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <AllJsonLd />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased text-foreground bg-background`}
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
