"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Globe } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const metrics = [
    { val: 500, label: "Global Placements", suffix: "+", description: "Graduates successfully placed in world-class airlines & hotels." },
    { val: 80, label: "Scholarship Support", suffix: "%", description: "Subsidized fees for students from financially weak backgrounds." },
    { val: 100, label: "Job Assistance", suffix: "%", description: "Guaranteed placement support integrated with NGO courses." },
    { val: 5, label: "Years of Excellence", suffix: "+", description: "Transforming the youth of BTR and Northeast India." }
];

export default function ImpactPageClient() {
    return (
        <div className="flex flex-col bg-transparent min-h-screen pt-24 overflow-x-hidden">
            {/* Elegant Hero */}
            <section className="bg-white dark:bg-slate-950 py-32 md:py-48 relative overflow-hidden text-primary dark:text-white transition-colors duration-500">
                <div className="absolute inset-0 opacity-20 dark:opacity-40 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 dark:bg-accent/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block"
                    >
                        Mijing Youth Foundation
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight mb-8 text-primary dark:text-white"
                    >
                        Turn Hopes Into <br />
                        <span className="text-slate-500 dark:text-slate-400">Global Careers.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Our mission is to ensure that talent and ambition are never held back by financial struggles. We believe that money shouldn&apos;t decide your destiny.
                    </motion.p>
                </div>
            </section>

            {/* Refined Stats Grid */}
            <section className="py-32 bg-slate-50 dark:bg-background/50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200/50 dark:border-white/5 shadow-subtle hover:shadow-float transition-all duration-500 group hover:-translate-y-1"
                            >
                                <div className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4 group-hover:text-accent transition-colors">
                                    <AnimatedCounter value={item.val} suffix={item.suffix} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200 mb-2">{item.label}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section: Mission Pillars */}
            <section className="py-32 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1 space-y-6">
                            <h2 className="text-4xl font-display font-semibold text-primary">Our Pillars of Empowerment.</h2>
                            <p className="text-slate-500 leading-relaxed">We focus on three core areas to ensure long-term sustainability and growth for our students and the community.</p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: ShieldCheck, title: "80% Subsidized", desc: "Our NGO initiative covers 80% of fees for eligible hardworking youth." },
                                { icon: Users, title: "Grassroots Reach", desc: "Specifically designed for the families in Kokrajhar and BTR." },
                                { icon: Award, title: "Right to Education", desc: "We believe education is not a privilege, but a basic right for all." },
                                { icon: Globe, title: "Destiny Unlocked", desc: "Opening doors to aviation and 5-star hospitality careers." }
                            ].map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center shrink-0 text-accent">
                                        <pillar.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary dark:text-white mb-2">{pillar.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Scholarship CTA */}
            <section className="py-40 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 z-0 opacity-5 dark:opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[140px] animate-pulse" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-6xl font-display font-semibold mb-8 tracking-tight italic text-primary dark:text-white">
                            &ldquo;Your Dreams Should Fly — Not Be Limited by Money.&rdquo;
                        </h2>
                        <p className="text-xl text-slate-500 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Through the Mijing Youth Foundation, we are committed to making world-class aviation and hospitality education accessible to everyone in Northeast India.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/ngo">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-full text-lg shadow-xl shadow-accent/20"
                                >
                                    Apply for NGO Scholarship
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
