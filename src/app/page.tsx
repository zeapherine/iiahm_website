import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Impact } from "@/components/sections/Impact";

export const metadata: Metadata = {
  title: "IIAHM | International Institute of Aviation and Hotel Management",
  description: "The premier gateway to international careers in Aviation and Hotel Management for the talented youth of Northeast India. ISO 9001:2015 certified with 500+ global placements.",
  alternates: {
    canonical: "https://www.ianinstitute.in",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <Programs />
      <Impact />
    </main>
  );
}
