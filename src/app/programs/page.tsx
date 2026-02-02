"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plane, Building2, Utensils, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const courses = [
    {
        id: "aviation",
        title: "Aviation & Air Hostess",
        icon: Plane,
        duration: "1_YEAR_DIPLOMA",
        description: "Master global cabin standards, international grooming, and tactical safety protocols.",
        features: ["Cabin_Crew_Operations", "Passenger_Liaison", "Surgical_Grooming", "Safety_Tactics"]
    },
    {
        id: "hotel",
        title: "Hotel Management",
        icon: Building2,
        duration: "1_YEAR_DIPLOMA",
        description: "Precision training for elite front-office and F&B operations in 5-star global chains.",
        features: ["Front_Office_Elite", "F&B_Strategy", "Luxury_Operations", "Hospitality_Leadership"]
    },
    {
        id: "hospitality",
        title: "Global Hospitality",
        icon: Utensils,
        duration: "6_MONTHS_CERT",
        description: "Engineered guest relations and service excellence for the modern global tourism sector.",
        features: ["Service_Excellence", "Global_Tourism", "CRM_Tactics", "Luxe_Relations"]
    },
    {
        id: "customer-service",
        title: "Corporate Desk Operations",
        icon: Headphones,
        duration: "3_MONTHS_INTENSIVE",
        description: "Tactical communication and desk support for international corporate environments.",
        features: ["Global_Accents", "Conflict_Resolution", "Digital_Liaison", "Ops_Coordination"]
    }
];

export default function ProgramsPage() {
    return (
        <div className="flex flex-col bg-smoke min-h-screen pt-24 overflow-x-hidden">
            {/* Noir Header */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
                    <div className="max-w-4xl space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            MODULE_CATALOG_V1.0
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-[10rem] font-heading font-black text-noir leading-[0.8] tracking-tighter uppercase"
                        >
                            ENGINEERED <br />
                            <span className="text-primary italic">SKILLSETS</span>.
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-noir text-white p-12 border-2 border-noir relative overflow-hidden max-w-sm"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed relative z-10 text-white/60">
                            // ALL TRAINING MODULES ARE ALIGNED WITH INTERNATIONAL AVIATION AND HOSPITALITY STANDARDS.
                            AUTHORIZED TRAINING CENTER // REGIONAL_OPERATIONS // 2025_REF_LOG.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row border-y border-noir/5 bg-white">
                {/* Vertical Noir Sidebar */}
                <div className="lg:w-24 bg-noir border-r border-noir flex items-center justify-center p-6 lg:p-0 relative overflow-hidden">
                    <div className="flex lg:rotate-[-90deg] whitespace-nowrap animate-marquee">
                        <span className="text-3xl font-heading font-black uppercase text-white/20 mx-10">
                            GLOBAL_PIONEERING • ELITE_STANDARDS • REGION_TO_WORLD • GLOBAL_PIONEERING • ELITE_STANDARDS • REGION_TO_WORLD
                        </span>
                    </div>
                </div>

                {/* Course Grid */}
                <section className="flex-1 p-8 lg:p-24 bg-smoke/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {courses.map((course, idx) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card className="border-2 border-noir bg-white overflow-hidden group transition-all duration-500 hover:shadow-glow hover:-translate-y-2 flex flex-col h-full rounded-[var(--radius-card)]">
                                    <div className="bg-noir text-white p-5 flex justify-between items-center border-b-2 border-noir">
                                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40">REF_{course.id.toUpperCase()}</span>
                                        <span className="bg-primary text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">{course.duration}</span>
                                    </div>

                                    <div className="p-12 flex-1 space-y-10">
                                        <div className="flex justify-between items-start">
                                            <div className="bg-smoke p-5 border border-noir/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <course.icon className="w-10 h-10" />
                                            </div>
                                            <div className="text-noir/10 text-6xl font-black">0{idx + 1}</div>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none text-noir">
                                                {course.title}
                                            </h3>
                                            <p className="font-bold text-xl leading-snug text-noir/60 uppercase tracking-tight border-l-4 border-primary pl-6">
                                                {course.description}
                                            </p>
                                        </div>

                                        <div className="space-y-5 pt-10 border-t border-noir/5">
                                            <div className="grid grid-cols-1 gap-y-4">
                                                {course.features.map((feature, fIdx) => (
                                                    <div key={fIdx} className="flex items-center gap-3 text-[11px] font-black text-noir uppercase tracking-widest">
                                                        <CheckCircle2 className="w-4 h-4 text-primary" /> {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border-t-2 border-noir/5 bg-smoke/30 flex flex-col sm:flex-row gap-4">
                                        <Button variant="accent" className="w-full h-14" magnetic>DOWNLOAD_SPEC</Button>
                                        <Button variant="outline" className="w-full h-14" magnetic>ENROLL_NOW</Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Recruitment Section */}
            <section className="bg-noir py-32 border-b border-noir overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-12 mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 bg-white/10 text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                            >
                                <div className="w-2 h-2 bg-primary animate-pulse" />
                                PLACEMENT_OPERATIONS
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-7xl lg:text-[10rem] font-heading font-black uppercase leading-[0.85] tracking-tighter text-white"
                            >
                                GLOBAL <br />
                                <span className="text-primary italic">DEPLOYMENT.</span>
                            </motion.h2>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="aspect-square bg-white/5 border border-white/10 p-6 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:bg-white/10 transition-all duration-500"
                                >
                                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">AIRLINE_{i}</div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 bg-white p-12 border-2 border-noir shadow-glow flex flex-col"
                        >
                            <h3 className="text-4xl font-heading font-black uppercase border-b-2 border-noir pb-6 mb-8 text-noir">DEPT_LOGS</h3>
                            <div className="space-y-8 mb-12">
                                {[
                                    { title: "LIFETIME_RECRUIT", desc: "Long-term partnership with major international hubs." },
                                    { title: "SIMULATION_DRILLS", desc: "Advanced mock interview protocols for global airlines." },
                                    { title: "ELITE_COMMUNICATION", desc: "Surgical voice and accent engineering sessions." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-primary border border-noir" />
                                            <span className="font-black uppercase text-xs text-noir tracking-widest">{item.title}</span>
                                        </div>
                                        <p className="font-bold text-noir/40 uppercase text-[11px] leading-snug pl-6">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Button variant="accent" size="lg" magnetic className="h-24 text-2xl mt-auto">JOIN_MISSION</Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
