import { Metadata } from "next";
import ContactPageClient from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us | Kokrajhar Campus",
    description: "Start your journey in Aviation & Hotel Management today. Reach out to IIAHM's Kokrajhar campus for admissions, counseling, and course inquiries.",
    alternates: {
        canonical: "https://www.ianinstitute.in/contact",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
