"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plane, Building2, Utensils, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        <div className="flex flex-col bg-transparent min-h-screen pt-24 overflow-x-hidden">
            {/* Header */}
            <section className="container mx-auto px-4 md:px-6 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-6"
                >

                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    World-Class Curriculum
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-4xl md:text-6xl font-display font-semibold text-primary tracking-tight mb-6"
                >
                    Academic Programs. <br className="hidden md:block" />
                    <span className="text-slate-400">Designed for Elevation.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
                >
                    Our industry-recognized diplomas bridge the gap between academic theory and
                    high-altitude practical application.
                </motion.p>
            </section>

            <div className="container mx-auto px-4 md:px-6 pb-32">
                {/* Course Grid - Apple Style Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Card className="border-0 ring-1 ring-border bg-card shadow-subtle dark:shadow-none hover:shadow-float dark:hover:ring-accent/50 transition-all duration-700 ease-out flex flex-col h-full rounded-[1.5rem] overflow-hidden group hover:-translate-y-1">
                                <div className="p-6 md:p-10 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                            <course.icon className="w-7 h-7" />
                                        </div>
                                        <span className="bg-muted text-muted-foreground px-4 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md border border-border">
                                            {course.duration.replace(/_/g, " ")}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                                        {course.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                                        {course.description}
                                    </p>

                                    <div className="mt-auto space-y-3">
                                        {course.features.slice(0, 3).map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                                                {feature.replace(/_/g, " ")}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-0 md:px-10 md:pb-10">
                                    <Button asChild variant="outline" className="w-full rounded-full h-12 border-border text-muted-foreground hover:text-foreground hover:border-foreground hover:bg-muted font-medium transition-all group-hover:border-accent group-hover:text-accent">
                                        <Link href={`/programs/${course.id}`}>
                                            View Curriculum
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recruitment Section - "Global Partners" */}
            <section className="bg-slate-900 py-32 relative overflow-hidden text-white">
                {/* Abstract Background - World Map or Flight Lines */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 50 Q 50 20 100 50" stroke="white" fill="none" vectorEffect="non-scaling-stroke" />
                        <path d="M0 70 Q 50 40 100 70" stroke="white" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-20"
                    >
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Career Trajectory</span>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold mt-4 mb-6">Global Career Partners.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Graduates are placed in top-tier international airlines and 5-star hospitality chains.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-70">
                        {/* Placeholder Logos - Clean Typography for now */}
                        {["Emirates", "Taj Hotels", "Qatar Airways", "Marriott", "Singapore Air"].map((brand, i) => (
                            <div key={i} className="h-20 flex items-center justify-center border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all text-xl font-display font-semibold text-white/50 hover:text-white cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
