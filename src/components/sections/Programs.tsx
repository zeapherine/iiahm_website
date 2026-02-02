"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Plane, Building2, Users } from "lucide-react";

const programs = [
    {
        id: "aviation",
        title: "Aviation & Air Hostess",
        description: "Professional training in cabin services, safety, and international grooming standards.",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop",
        size: "large",
        tags: ["Global Placement", "Soft Skills"]
    },
    {
        id: "hotel",
        title: "Hotel Management",
        description: "Comprehensive front-office and F&B management for luxury hospitality.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop",
        size: "normal",
        tags: ["5-Star Internships"]
    },
    {
        id: "hospitality",
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
        <section className="bg-muted/30 py-32 overflow-hidden">
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
                            <Card className="h-full border-0 ring-1 ring-border bg-card shadow-subtle hover:shadow-float transition-all duration-700 ease-out flex flex-col rounded-[1.5rem] overflow-hidden hover:-translate-y-1">
                                {/* Image Container */}
                                <div className="relative h-56 md:h-64 overflow-hidden">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="bg-background/90 backdrop-blur-md text-foreground w-10 h-10 flex items-center justify-center font-bold text-sm rounded-full shadow-sm">
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
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-2.5 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                            <program.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
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
