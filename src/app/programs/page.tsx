"use client";

import * as React from "react";
import { Plane, Building2, Utensils, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const courses = [
    {
        id: "aviation",
        title: "Aviation & Air Hostess",
        icon: Plane,
        duration: "1 Year Professional Diploma",
        description: "Master the art of cabin crew services, grooming standards, and safety protocols with our world-class trainers.",
        features: ["Cabin Crew Training", "Passenger Counseling", "First Aid & Safety", "Grooming & Etiquette"],
        color: "bg-neon-green"
    },
    {
        id: "hotel",
        title: "Hotel Management",
        icon: Building2,
        duration: "1 Year Professional Diploma",
        description: "Comprehensive training in front office, housekeeping, and F&B management with exclusive tie-ups with 5-star global hospitality brands.",
        features: ["Front Office Operations", "Housekeeping Management", "Food & Beverage Service", "Banquet Handling"],
        color: "bg-accent"
    },
    {
        id: "hospitality",
        title: "Hospitality Management",
        icon: Utensils,
        duration: "6 Months Professional Certificate",
        description: "Focused training on guest relations and service excellence for the booming dining and tourism sectors in Northeast India.",
        features: ["Customer Service", "Billing & POS", "Guest Relations", "Local Tourism"],
        color: "bg-hot-pink"
    },
    {
        id: "customer-service",
        title: "Global Customer Service",
        icon: Headphones,
        duration: "3 Months Intensive Course",
        description: "Intensive training program designed to prepare youth for global call centers and corporate desk jobs.",
        features: ["Voice & Accent", "Conflict Resolution", "Email Etiquette", "Technical Support"],
        color: "bg-primary"
    }
];

export default function ProgramsPage() {
    return (
        <div className="flex flex-col bg-white min-h-screen pt-24 overflow-x-hidden">
            {/* Zine Header */}
            <section className="container mx-auto px-6 py-20 border-b-8 border-black">
                <div className="flex flex-col lg:flex-row gap-12 items-end justify-between">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-block bg-hot-pink text-white px-6 py-2 font-heading font-black uppercase text-xl rotate-[-2deg] border-4 border-black shadow-hard">
                            MISSION BRIEFING
                        </div>
                        <h1 className="text-7xl md:text-9xl font-heading font-black text-black leading-[0.8] tracking-tighter uppercase drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                            CHOOSE YOUR <br />
                            <span className="text-primary italic">SKILLSET</span>.
                        </h1>
                    </div>
                    <div className="bg-black text-white p-8 border-4 border-white shadow-hard max-w-sm rotate-[1deg]">
                        <p className="font-mono text-xs uppercase tracking-widest leading-relaxed">
                            // CURATED TRAINING MODULES DESIGNED BY INDUSTRY VETERANS.
                        // TRANSITION FROM LOCAL TALENT TO GLOBAL PROFESSIONAL.
                        // MISSION_START_2025
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row border-b-8 border-black">
                {/* Vertical Marquee Sidebar */}
                <div className="lg:w-24 bg-neon-green border-r-8 border-black flex items-center justify-center p-4 lg:p-0">
                    <div className="flex lg:rotate-[-90deg] whitespace-nowrap">
                        <span className="text-4xl lg:text-5xl font-heading font-black uppercase text-black mx-10">
                            GLOBAL CAREERS • UNLIMITED POTENTIAL • FLY HIGHER • SERVE BETTER •
                        </span>
                        <span className="text-4xl lg:text-5xl font-heading font-black uppercase text-black mx-10 lg:hidden">
                            GLOBAL CAREERS • UNLIMITED POTENTIAL •
                        </span>
                    </div>
                </div>

                {/* Playing Card Grid */}
                <section className="flex-1 p-8 lg:p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {courses.map((course, idx) => (
                            <Card
                                key={course.id}
                                className={cn(
                                    "p-0 border-4 border-black overflow-hidden flex flex-col group transition-all duration-300 hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-hard-xl",
                                    course.color,
                                    course.color === "bg-primary" ? "text-white" : "text-black",
                                    idx % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]"
                                )}
                            >
                                <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-black">
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest">COURSE_ID: {course.id.toUpperCase()}</span>
                                    <span className="bg-white text-black px-2 py-1 text-[10px] font-black uppercase">{course.duration}</span>
                                </div>

                                <div className="p-10 flex-1 space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-white p-4 border-4 border-black shadow-hard group-hover:rotate-12 transition-transform">
                                            <course.icon className="w-12 h-12 text-black" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-heading font-black uppercase tracking-tighter leading-none">
                                            {course.title}
                                        </h3>
                                        <p className="font-bold text-xl leading-snug border-l-4 border-black/20 pl-4 group-hover:border-black transition-colors">
                                            {course.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t-2 border-black/20">
                                        <h4 className="text-sm font-black uppercase tracking-widest">Training Modules:</h4>
                                        <div className="grid grid-cols-1 gap-y-3">
                                            {course.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center text-lg font-bold">
                                                    <span className="w-4 h-4 bg-black mr-4 rotate-45" /> {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 border-t-4 border-black bg-white flex flex-col sm:flex-row gap-4">
                                    <Button variant="default" className="w-full text-xl group-hover:bg-hot-pink transition-colors">GET SYLLABUS</Button>
                                    <Button variant="outline" className="w-full text-xl">PROCEED TO APPLY</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            {/* Placement Section - Redesigned as a Newspaper Clipping */}
            <section className="bg-accent border-b-8 border-black p-12 lg:p-32 flex flex-col items-center">
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-8 space-y-12">
                        <div className="inline-block bg-black text-white px-8 py-2 font-heading font-black text-4xl rotate-[-2deg] shadow-hard">
                            EXTRA! EXTRA!
                        </div>
                        <h2 className="text-7xl lg:text-9xl font-heading font-black uppercase leading-none tracking-tighter">
                            GRADUATES <span className="text-primary italic">DEPLOYED</span> GLOBALLY
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <div key={i} className="aspect-square bg-white border-4 border-black p-4 flex items-center justify-center shadow-hard grayscale transition-all hover:grayscale-0 hover:rotate-12">
                                    <div className="w-full h-full bg-slate-200 border-2 border-dashed border-black/20 flex items-center justify-center font-mono text-[8px] text-center uppercase">
                                        LOGO_STUB_{i}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-white border-4 border-black p-10 shadow-hard-xl space-y-8 rotate-[1deg]">
                        <h3 className="text-3xl font-heading font-black uppercase border-b-4 border-black pb-4">PLACEMENT_LOG</h3>
                        <ul className="space-y-6">
                            {[
                                { title: "LIFETIME SUPPORT", desc: "Access to our network even years after graduation." },
                                { title: "MOCK SESSIONS", desc: "Special drills for international airline interviews." },
                                { title: "SOFT SKILLS", desc: "Dedicated hours for voice and accent training." }
                            ].map((item, i) => (
                                <li key={i} className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-primary border-2 border-black" />
                                        <span className="font-heading font-black uppercase text-xl">{item.title}</span>
                                    </div>
                                    <p className="font-bold text-black/60 pl-6 leading-tight">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                        <Button variant="neon" size="lg" className="w-full text-2xl h-20 shadow-hard-lg">JOIN MISSION</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
