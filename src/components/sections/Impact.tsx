"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, Globe, Building, Award, CheckCircle2 } from "lucide-react";

const stats = [
    { label: "Lives Impacted", value: 5000, suffix: "+", icon: Users, theme: "noir" },
    { label: "Local Placement", value: 85, suffix: "%", icon: Award, theme: "indigo" },
    { label: "Training Centers", value: 3, suffix: "", icon: Building, theme: "noir" },
    { label: "NGO Years", value: 7, suffix: "", icon: Globe, theme: "noir" },
];

export function Impact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="bg-white py-32 overflow-hidden border-t border-noir/5">
            <div className="container mx-auto px-6">
                <div className="mb-24 flex flex-col lg:flex-row lg:items-center justify-between gap-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                        >
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            IMPACT_VALIDATION
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-noir"
                        >
                            MEASURABLE <br />
                            <span className="text-primary italic">PROGRESS.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-noir p-12 border-2 border-noir text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -mr-16 -mt-16 rounded-full blur-3xl" />
                        <p className="font-heading text-3xl font-black uppercase leading-tight relative z-10">
                            We bridge the gap between rural potential and global demand through surgical precision in training.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "group relative p-10 border-2 border-noir bg-white transition-all duration-500 hover:shadow-glow hover:-translate-y-2",
                                stat.theme === "indigo" && "bg-smoke"
                            )}
                        >
                            <div className="absolute top-6 right-6 p-2 bg-smoke border border-noir/10 group-hover:bg-primary group-hover:text-white transition-colors">
                                <stat.icon className="h-6 w-6" />
                            </div>

                            <div className="font-heading text-8xl font-black tracking-tight text-noir mb-4">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="font-black text-noir/40 uppercase tracking-[0.2em] text-[10px] mb-6">
                                {stat.label}
                            </p>

                            <div className="flex items-center gap-2 pt-6 border-t border-noir/5">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-noir/60">VERIFIED_RECORDS</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
