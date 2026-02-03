"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Plane, Building2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
    {
        id: "air-hostess",
        title: "Air Hostess & Crew",
        description: "Professional training in cabin services, safety, and international grooming standards for global airlines.",
        icon: Plane,
        color: "from-blue-600 to-indigo-600",
        tags: ["Global Placement", "ICAO Standards"]
    },
    {
        id: "hotel-management",
        title: "Hotel Management",
        description: "Comprehensive front-office, F&B, and operations management for the luxury hospitality industry.",
        icon: Building2,
        color: "from-emerald-600 to-teal-600",
        tags: ["5-Star Internships", "Direct-to-Job"]
    },
    {
        id: "ground-staff",
        title: "Airport Ground Staff",
        description: "Master the technical operations of international airports, from ticketing to ramp management.",
        icon: Users,
        color: "from-amber-600 to-orange-600",
        tags: ["Aviation Ops", "Security Training"]
    },
];

export function Programs() {
    return (
        <section className="bg-slate-50/50 dark:bg-slate-950 py-32 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-muted-foreground text-xs font-semibold uppercase tracking-wider"
                        >

                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            Core Curriculum
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-foreground"
                        >
                            Elite <span className="text-accent">Career Tracks</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-md text-muted-foreground text-lg leading-relaxed"
                    >
                        Our programs are engineered to meet global standards, ensuring every graduate is industry-ready and elite.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group h-full"
                        >
                            <Card className="h-full border-0 ring-1 ring-border bg-card shadow-subtle dark:shadow-none hover:shadow-float dark:hover:ring-accent/50 transition-all duration-700 ease-out flex flex-col rounded-[1.5rem] overflow-hidden hover:-translate-y-1">
                                {/* Abstract Visual Container (Replaces Image) */}
                                <div className={cn("relative h-56 md:h-64 overflow-hidden bg-gradient-to-br transition-all duration-700", program.color)}>
                                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="bg-white/20 backdrop-blur-md text-white w-10 h-10 flex items-center justify-center font-bold text-sm rounded-full border border-white/20">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
                                        {program.tags.map((tag, i) => (
                                            <span key={i} className="bg-white/20 backdrop-blur-md text-white border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                        <program.icon className="w-32 h-32 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8 flex-1 flex flex-col bg-white dark:bg-slate-900/40 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-2.5 bg-accent/10 dark:bg-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                            <program.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-display text-2xl font-semibold text-foreground dark:text-white group-hover:text-accent transition-colors">
                                            {program.title}
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {program.description}
                                    </p>

                                    <div className="mt-auto border-t border-border pt-6 flex items-center justify-between">
                                        <span className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wider">12 Months</span>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm"
                                            className="text-foreground hover:text-accent hover:bg-transparent p-0 font-medium"
                                        >
                                            <Link href={`/programs/${program.id}`}>
                                                View Syllabus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/programs">
                        <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-border text-muted-foreground hover:text-foreground hover:border-foreground">
                            View All Programs
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
