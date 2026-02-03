import { Metadata } from "next";
import AboutPageClient from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about IIAHM's heritage of excellence in Aviation and Hotel Management training. Our mission is to bridge the gap between local potential and global industry standards.",
    alternates: {
        canonical: "https://www.ianinstitute.in/about",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
