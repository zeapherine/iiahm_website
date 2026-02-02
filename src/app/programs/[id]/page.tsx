"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Download, CheckCircle2, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const programData = {
    "aviation": {
        title: "Aviation & Air Hostess",
        category: "Diploma Program",
        duration: "1 Year",
        location: "Main Campus",
        description: "A comprehensive program designed to prepare candidates for the demanding roles of Cabin Crew and Aviation professionals in global airlines.",
        modules: [
            "Introduction to Aviation Industry",
            "Cabin Crew Safety & Emergency Procedures",
            "International Grooming & Persona Standards",
            "In-flight Service & Hospitality Management",
            "Aviation Communication & Soft Skills",
            "Mock Cabin Training"
        ],
        outcomes: [
            "Domestic & International Placement Assistance",
            "Communication & Leadership Mastery",
            "ISO Certified Diploma"
        ]
    },
    "hotel": {
        title: "Hotel Management",
        category: "Diploma Program",
        duration: "1 Year",
        location: "Main Campus",
        description: "Master the art of luxury hospitality. This program covers every major department of the 5-star hotel industry.",
        modules: [
            "Front Office Operations",
            "Food & Beverage Management",
            "Housekeeping & Facilities",
            "Hospitality Marketing",
            "Kitchen & Culinary Basics",
            "Luxe Guest Relations"
        ],
        outcomes: [
            "Internships in 5-Star Hotels",
            "Management Trainee Pathway",
            "Global Certification"
        ]
    }
};

export default function SyllabusPage() {
    const params = useParams();
    const id = params.id as string;
    const program = programData[id as keyof typeof programData] || programData["aviation"];

    return (
        <div className="min-h-screen bg-slate-50 pt-24">
            <header className="bg-white border-b border-slate-200 py-12 md:py-20">
                <div className="container mx-auto px-6">
                    <Link href="/programs" className="inline-flex items-center text-accent text-sm font-semibold mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
                    </Link>
                    <div className="max-w-4xl">
                        <span className="bg-blue-50 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                            {program.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary tracking-tight mb-6">
                            {program.title}
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
                            {program.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 mt-12 border-t border-slate-100 pt-8">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="font-semibold">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span className="font-semibold">{program.location}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <section className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-display font-semibold text-primary mb-8 flex items-center gap-3">
                                <BookOpen className="w-6 h-6 text-accent" />
                                Course Curriculum
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {program.modules.map((module, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 font-bold text-xs shrink-0">
                                            {i + 1}
                                        </div>
                                        <span className="font-medium text-slate-700">{module}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                                <div>
                                    <h3 className="text-3xl font-display font-semibold mb-4">Ready to start your mission?</h3>
                                    <p className="text-slate-400 max-w-md">Our next session begins in April 2025. Limited seats available for elite candidates.</p>
                                </div>
                                <Button variant="accent" size="lg" className="rounded-full px-10">Apply Online Now</Button>
                            </div>
                        </div>
                    </section>

                    <aside className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-display font-semibold text-primary mb-6">Program Outcomes</h3>
                            <ul className="space-y-4">
                                {program.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-600 leading-tight">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="w-full mt-8 rounded-xl border-slate-200" onClick={() => alert("Downloading brochure...")}>
                                <Download className="mr-2 w-4 h-4" /> Download Full Brochure
                            </Button>
                        </div>

                        <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100/50">
                            <h3 className="text-lg font-display font-semibold text-primary mb-4">Admissions Help</h3>
                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">Have questions about eligibility or the application process? Our counselors are here to guide you.</p>
                            <a href="tel:+91XXXXXXXXXX" className="text-accent font-bold text-lg hover:underline transition-all tracking-tight">+91 XXX XXX XXXX</a>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
