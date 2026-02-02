"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Plane, Building2, Users, CheckCircle2 } from "lucide-react";

const programs = [
    {
        title: "Aviation & Air Hostess",
        description: "Professional training in cabin services, safety, and international grooming standards.",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop",
        size: "large",
        tags: ["Global Placement", "Soft Skills"]
    },
    {
        title: "Hotel Management",
        description: "Comprehensive front-office and F&B management for luxury hospitality.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop",
        size: "normal",
        tags: ["5-Star Internships"]
    },
    {
        title: "Hospitality & Tourism",
        description: "Master global tourism dynamics and customer relations in a tech-first world.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop",
        size: "normal",
        tags: ["Travel Strategy"]
    },
];

export function Programs() {
    return (
        <section className="bg-smoke py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            CORE_CURRICULUM
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-7xl font-black uppercase leading-[0.85] tracking-tighter text-noir md:text-[8rem] lg:text-[10rem]"
                        >
                            ELITE <span className="text-primary italic">TRACKS</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="max-w-md text-noir/60 font-bold uppercase tracking-tight text-xl leading-snug"
                    >
                        Our programs are engineered to meet global standards, ensuring every graduate is industry-ready and elite.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "group relative h-full flex flex-col",
                                program.size === "large" ? "lg:col-span-8" : "lg:col-span-4"
                            )}
                        >
                            <Card className="flex-1 border-2 border-noir bg-white overflow-hidden rounded-[var(--radius-card)] transition-all duration-500 group-hover:shadow-glow group-hover:-translate-y-2 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden bg-noir border-b-2 border-noir">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="bg-noir text-white w-12 h-12 flex items-center justify-center font-black text-xl border-2 border-white/20">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                                        {program.tags.map((tag, i) => (
                                            <span key={i} className="bg-white/90 backdrop-blur-md text-noir border border-noir px-2 py-1 text-[9px] font-black uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-smoke border border-noir/10">
                                            <program.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-heading text-4xl font-black uppercase tracking-tighter text-noir leading-none">
                                            {program.title}
                                        </CardTitle>
                                    </div>

                                    <p className="text-xl font-bold text-noir/70 uppercase tracking-tight leading-snug mb-10 border-l-4 border-primary pl-6">
                                        {program.description}
                                    </p>

                                    <div className="mt-auto pt-10 border-t border-noir/5 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-noir/40 uppercase tracking-[0.2em]">Duration</span>
                                            <span className="text-sm font-black text-noir uppercase">12 MONTHS_INTENSIVE</span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="group-hover:text-primary transition-colors"
                                        >
                                            SYLLABUS_V1.0 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 flex flex-col md:flex-row items-center justify-between gap-12 p-16 bg-noir text-white border-2 border-noir mt-12 relative overflow-hidden group/cta"
                    >
                        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.85]">
                                SECURE YOUR <br />
                                <span className="text-primary italic">GLOBAL_IDENTITY</span>
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {["Placement_Guarantee", "International_Liaison", "Surgical_Precision"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative z-10">
                            <Button
                                variant="accent"
                                size="lg"
                                magnetic
                                className="text-2xl h-24 px-16 shadow-glow"
                            >
                                START ENROLLMENT
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
