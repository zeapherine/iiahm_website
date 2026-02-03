"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, Globe, Building, Award } from "lucide-react";

const stats = [
    { label: "Global Placements", value: 500, suffix: "+", icon: Globe, theme: "noir" },
    { label: "Job Assistance", value: 100, suffix: "%", icon: Award, theme: "indigo" },
    { label: "Elite Courses", value: 6, suffix: "", icon: Users, theme: "noir" },
    { label: "Years of Excellence", value: 5, suffix: "+", icon: Building, theme: "noir" },
];

export function Impact() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="bg-primary/95 dark:bg-primary-dark py-32 overflow-hidden relative text-white">
            {/* Background Pattern - subtle dots */}
            <div className="absolute inset-0 z-0 opacity-[0.05]"
                style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6"
                    >

                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Our Track Record
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6"
                    >
                        Measurable <br />
                        <span className="text-accent">Excellence.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg text-slate-300/80 max-w-2xl leading-relaxed"
                    >
                        We bridge the gap between local talent and global opportunities through rigorous, world-class training standards.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative p-8 border border-white/5 bg-white/5 dark:bg-slate-900/40 rounded-2xl backdrop-blur-sm transition-all duration-700 ease-out hover:bg-white/10 dark:hover:bg-slate-800/60 hover:border-white/20 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-3 bg-white/5 dark:bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-1 rounded-md tracking-widest uppercase">
                                    2025
                                </div>
                            </div>

                            <div className="font-display text-5xl font-semibold tracking-tight text-white mb-2 group-hover:text-accent transition-colors">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
