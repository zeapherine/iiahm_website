"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

const impactAreas = [
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "EMPLOYMENT_LIFT",
        description: "Direct pathways to elite, sustainable careers for local talent in modern hospitality.",
        theme: "noir"
    },
    {
        icon: <Target className="w-10 h-10" />,
        title: "TACTICAL_X",
        description: "Bridging the gap between rural potential and global demand through precise training.",
        theme: "indigo"
    },
    {
        icon: <Heart className="w-10 h-10" />,
        title: "SHE_MISSION",
        description: "Dedicated scholarships and premium safety training for upcoming female leaders.",
        theme: "noir"
    }
];

export default function ImpactPage() {
    return (
        <div className="flex flex-col bg-smoke min-h-screen pt-24 overflow-x-hidden">
            {/* Mission Hero */}
            <section className="container mx-auto px-6 py-32">
                <div className="max-w-5xl space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        <div className="w-2 h-2 bg-primary animate-pulse" />
                        IMPACT_VALIDATION_REPORT
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[10rem] font-heading font-black text-noir leading-[0.8] tracking-tighter uppercase"
                    >
                        MEASURES <br />
                        <span className="text-primary italic">OF SUCCESS</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-bold text-noir/80 border-l-8 border-primary pl-10 max-w-3xl uppercase tracking-tighter"
                    >
                        We function as a community-first engine. Our success metrics are defined by families elevated through elite industry placement.
                    </motion.p>
                </div>
            </section>

            {/* Data Grid Section */}
            <section className="bg-noir py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { val: 5000, label: "LIVES_IMPACTED", suffix: "+", theme: "noir" },
                            { val: 1200, label: "FEMALE_CADETS", suffix: "+", theme: "noir" },
                            { val: 85, label: "SUCCESS_RATE", suffix: "%", theme: "indigo" },
                            { val: 7, label: "REGIONS_ACTIVE", suffix: "", theme: "noir" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "p-12 border-2 border-white/10 bg-white/5 transition-all duration-500 hover:border-primary hover:bg-white/10 group",
                                    stat.theme === "indigo" && "border-primary/30"
                                )}
                            >
                                <div className="font-heading text-8xl font-black tracking-tighter mb-4 leading-none text-white group-hover:text-primary transition-colors">
                                    <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                                </div>
                                <p className="font-black text-white/40 uppercase tracking-[0.2em] text-[10px]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Pillars */}
            <section className="container mx-auto px-6 py-40">
                <div className="flex flex-col lg:flex-row gap-8 mb-32 justify-between items-end">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            CORE_STRATEGY
                        </div>
                        <h2 className="text-7xl lg:text-[9rem] font-heading font-black uppercase tracking-tighter leading-none text-noir">
                            KEY<span className="text-primary italic">_PILLARS</span>
                        </h2>
                    </div>
                    <div className="bg-noir text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em]">
                        DATA_SOURCE // 2025_REF
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {impactAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "p-12 border-2 border-noir bg-white group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 flex flex-col h-full rounded-[var(--radius-card)]",
                                area.theme === "indigo" && "bg-smoke/50"
                            )}
                        >
                            <div className="bg-smoke p-5 border border-noir/10 w-20 h-20 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                {area.icon}
                            </div>
                            <h3 className="text-4xl font-heading font-black text-noir mb-6 leading-tight uppercase tracking-tighter">{area.title}</h3>
                            <p className="text-xl font-bold text-noir/60 leading-snug mb-10 uppercase tracking-tight border-l-4 border-primary pl-6">{area.description}</p>

                            <div className="mt-auto pt-6 border-t border-noir/5 font-mono text-[9px] font-black uppercase tracking-[0.3em] text-noir/30">
                                PROTOCOL_REF_0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* BTR Future Section */}
            <section className="bg-white py-40 border-y border-noir/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[800px] border-2 border-noir shadow-glow overflow-hidden group rounded-[var(--radius-card)]"
                        >
                            <Image
                                src="https://www.stirworld.com/images/see/3399_Green_1.jpg"
                                alt="BTR Region Development"
                                fill
                                className="object-cover transition-all duration-1000 group-hover:scale-105 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal"
                            />
                            <div className="absolute inset-0 bg-noir/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-noir text-white p-12 border-2 border-white/20 relative z-10"
                                >
                                    <Target className="w-12 h-12 mb-8 text-primary" />
                                    <h4 className="text-5xl font-heading font-black mb-4 uppercase tracking-tighter">GLOBAL_HUB_VISION</h4>
                                    <p className="text-xl font-bold uppercase leading-tight text-white/60">To transform the borderlands of Northeast India into a primary source of elite global talent.</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="space-y-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-7xl md:text-[10rem] font-heading font-black text-noir leading-[0.85] tracking-tighter uppercase">
                                    SUSTAINABLE <br />
                                    <span className="text-primary italic">FUTURES.</span>
                                </h2>
                                <p className="text-2xl font-bold text-noir/70 border-l-8 border-primary pl-10 max-w-xl uppercase tracking-tight leading-snug">
                                    Our mission engine is engineered for longevity. We secure careers that empower individuals to reinvest locally.
                                </p>
                            </motion.div>

                            <div className="space-y-6">
                                {[
                                    "AUTHORIZED_STATE_PARTNER",
                                    "INDUSTRY_VETTED_PROTOCOLS",
                                    "ELITE_GLOBAL_FACULTY"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-8 p-10 border border-noir/10 bg-smoke/30 hover:bg-noir hover:text-white transition-all duration-500 group"
                                    >
                                        <div className="w-10 h-10 border border-noir group-hover:border-white/20 flex items-center justify-center font-black text-xs">
                                            0{i + 1}
                                        </div>
                                        <span className="font-heading font-black text-2xl uppercase tracking-tighter">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Button variant="accent" size="lg" magnetic className="w-full md:w-auto h-24 text-2xl px-16 shadow-glow">
                                START_PLACEMENT_MISSION
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
