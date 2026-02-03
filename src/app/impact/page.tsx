import { Metadata } from "next";
import ImpactPageClient from "@/components/sections/ImpactPageClient";

export const metadata: Metadata = {
    title: "Our Impact | Mijing Youth Foundation",
    description: "See the real-world impact of IIAHM and Mijing Youth Foundation. Over 500+ global placements and 80% scholarship support for Northeast Indian youth.",
    alternates: {
        canonical: "https://www.ianinstitute.in/impact",
    },
};

export default function ImpactPage() {
    return <ImpactPageClient />;
}
