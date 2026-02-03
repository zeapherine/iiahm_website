"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Download, CheckCircle2, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";

const programData = {
    "air-hostess": {
        title: "Air Hostess & Cabin Crew",
        category: "Diploma Program",
        duration: "6 Months / 1 Year",
        location: "Main Campus, Kokrajhar",
        description: "A premier program designed to transform candidates into elite travel professionals for the world's leading airlines.",
        modules: [
            "Aviation Fundamentals & Flight Schedules",
            "International Grooming & Make-up Techniques",
            "Customer Handling & Crowd Management",
            "In-flight Safety & Emergency Procedures",
            "Interpersonal & Communication Skills",
            "Personality Development & Social Etiquettes",
            "Professional Mock Cabin Training"
        ],
        outcomes: [
            "Domestic & International Placement Assistance",
            "Communication & Leadership Mastery",
            "ISO Certified Diploma"
        ]
    },
    "ground-staff": {
        title: "Airport Ground Staff",
        category: "Certificate Program",
        duration: "6 Months / 1 Year",
        location: "Main Campus, Kokrajhar",
        description: "Master the ground operations of international airports, from check-in counters to ramp management.",
        modules: [
            "Airport Security & Safety Protocols",
            "Passenger Handling & Ticketing",
            "Baggage & Cargo Management",
            "Ramp Operations & Ground Support",
            "Dangerous Goods Regulations",
            "Soft Skills & Customer Service"
        ],
        outcomes: [
            "Global Airport Career Opportunities",
            "Operational Efficiency Training",
            "Industry Recognized Certification"
        ]
    },
    "hotel-management": {
        title: "Hotel Management",
        category: "Diploma Program",
        duration: "3 Months",
        location: "Kokrajhar Campus",
        description: "Direct-To-Job professional diploma covering all core departments of 5-star hotel and resort operations.",
        modules: [
            "Front Office Management & Reservations",
            "Food & Beverage Service Excellence",
            "General Administration & HR",
            "Event & Banquet management",
            "Food Production & Culinary Arts",
            "Housekeeping & Facilities Management",
            "International Guest Relations"
        ],
        outcomes: [
            "100% Job Assistance in 5-Star Hotels",
            "National & International Placement",
            "Professional Hospitality Certification"
        ]
    }
};

export default function SyllabusPage() {
    const params = useParams();
    const id = params.id as string;
    const program = programData[id as keyof typeof programData] || programData["air-hostess"];
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <div className="min-h-screen bg-background pt-24">
                <header className="bg-slate-50/80 dark:bg-slate-950/20 border-b border-border dark:border-white/5 py-12 md:py-20 backdrop-blur-md transition-colors duration-500">
                    <div className="container mx-auto px-4 md:px-6">
                        <Link href="/programs" className="inline-flex items-center text-accent text-sm font-semibold mb-8 hover:gap-2 transition-all">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
                        </Link>
                        <div className="max-w-4xl">
                            <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-accent/20">
                                {program.category}
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-semibold text-foreground tracking-tight mb-6">
                                {program.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                {program.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 mt-12 border-t border-border pt-8">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Clock className="w-5 h-5 text-accent" />
                                <span className="font-semibold">{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-accent" />
                                <span className="font-semibold">{program.location}</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <section className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-foreground mb-8 flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-accent" />
                                    Course Curriculum
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {program.modules.map((module, i) => (
                                        <div key={i} className="bg-white dark:bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm flex items-center gap-4 group hover:border-accent/40 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-xs shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="font-medium text-foreground/80 dark:text-slate-200">{module}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {id === "hotel-management" && (
                                <div className="pt-8">
                                    <h2 className="text-2xl font-display font-semibold text-foreground mb-8">Professional Departments</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                        {[
                                            "Front Office Management",
                                            "Food & Beverage Service",
                                            "Housekeeping",
                                            "General Administration",
                                            "Reservation Officer",
                                            "Event Management",
                                            "Food Production"
                                        ].map((dept, idx) => (
                                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
                                                <div className="text-sm font-semibold tracking-tight text-primary">{dept}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 md:p-16 rounded-[2.5rem] relative overflow-hidden border border-white/5 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                                    <div>
                                        <h3 className="text-3xl font-display font-semibold mb-4">Ready to start your mission?</h3>
                                        <p className="text-slate-400 max-w-md">Our next session begins in April 2025. Limited seats available for elite candidates.</p>
                                    </div>
                                    <Button variant="accent" size="lg" className="rounded-full px-10 shadow-lg shadow-accent/20" onClick={() => setShowPopup(true)}>Apply Online Now</Button>
                                </div>
                            </div>
                        </section>

                        <aside className="space-y-8">
                            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-sm">
                                <h3 className="text-xl font-display font-semibold text-foreground mb-6">Program Outcomes</h3>
                                <ul className="space-y-4">
                                    {program.outcomes.map((outcome, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-tight">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full mt-8 rounded-xl border-border text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => alert("Downloading brochure...")}>
                                    <Download className="mr-2 w-4 h-4" /> Download Full Brochure
                                </Button>
                            </div>

                            <div className="bg-accent/5 p-6 sm:p-8 rounded-3xl border border-accent/10">
                                <h3 className="text-lg font-display font-semibold text-foreground mb-4">Admissions Help</h3>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Have questions about eligibility or the application process? Our counselors are here to guide you.</p>
                                <a href="tel:+919394237112" className="text-accent font-bold text-lg hover:underline transition-all tracking-tight">+91 93942-37112</a>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}
