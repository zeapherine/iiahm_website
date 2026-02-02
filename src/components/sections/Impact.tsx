"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, Globe, Building, Award } from "lucide-react";

const stats = [
    { label: "Lives Impacted", value: 5000, suffix: "+", icon: Users, theme: "noir" },
    { label: "Local Placement", value: 85, suffix: "%", icon: Award, theme: "indigo" },
    { label: "Training Centers", value: 3, suffix: "", icon: Building, theme: "noir" },
    { label: "NGO Years", value: 7, suffix: "", icon: Globe, theme: "noir" },
];

export function Impact() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="bg-slate-900 py-32 overflow-hidden relative text-white">
            {/* Background Pattern - subtle dots */}
            <div className="absolute inset-0 z-0 opacity-[0.1]"
                style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Our Track Record
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6"
                    >
                        Measurable <br />
                        <span className="text-accent">Excellence.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl leading-relaxed"
                    >
                        We bridge the gap between local talent and global opportunities through rigorous, world-class training standards.
                    </motion.p>
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
                            className="group relative p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-3 bg-white/5 rounded-xl text-accent group-hover:scale-110 transition-transform">
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <div className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded-md">
                                    2025
                                </div>
                            </div>

                            <div className="font-display text-5xl font-semibold tracking-tight text-white mb-2 group-hover:text-accent transition-colors">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
