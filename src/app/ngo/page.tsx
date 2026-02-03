import { Metadata } from "next";
import NGOPageClient from "@/components/sections/NGOPageClient";

export const metadata: Metadata = {
    title: "NGO & Scholarships | Mijing Youth Foundation",
    description: "Discover IIAHM's commitment to social impact through Mijing Youth Foundation. We offer 80% scholarships to empower deserving youth from financially weak backgrounds.",
    alternates: {
        canonical: "https://www.ianinstitute.in/ngo",
    },
};

export default function NGOPage() {
    return <NGOPageClient />;
}
