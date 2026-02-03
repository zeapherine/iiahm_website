import { Metadata } from "next";
import ProgramsPageClient from "@/components/sections/ProgramsPageClient";

export const metadata: Metadata = {
    title: "Aviation & Hotel Management Programs",
    description: "Explore our industry-recognized diploma programs in Air Hostess, Hotel Management, and Airport Ground Staff. Designed for career elevation in Northeast India.",
    alternates: {
        canonical: "https://www.ianinstitute.in/programs",
    },
};

export default function ProgramsPage() {
    return <ProgramsPageClient />;
}
