"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const milestones = [
    { year: "2017", title: "MISSION_INITIATED", description: "IIAHM officially registered. Goal: Local empowerment through skillsets.", theme: "noir" },
    { year: "2019", title: "CAMPUS_ALPHA", description: "Premier training center launched in Kokrajhar. 200+ cadets enrolled.", theme: "indigo" },
    { year: "2021", title: "BTR_EXPANSION", description: "Network growth across Bodoland Territorial Region via mobile units.", theme: "noir" },
    { year: "2023", title: "EXCELLENCE_LOCKED", description: "Recognized as the leader in vocational excellence in Northeast India.", theme: "noir" },
];

const values = [
    {
        icon: <Users className="w-10 h-10" />,
        title: "LOCAL_PRIDE",
        description: "Uplifting the BTR community through elite skill-based education.",
        theme: "noir"
    },
    {
        icon: <Award className="w-10 h-10" />,
        title: "GLOBAL_SPEC",
        description: "International standards in hospitality and aviation training.",
        theme: "indigo"
    },
    {
        icon: <Globe className="w-10 h-10" />,
        title: "UNLIMITED_SKY",
        description: "Bridges between rural talent and global career missions.",
        theme: "noir"
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-smoke min-h-screen pt-24 overflow-x-hidden">
            {/* Mission Hero */}
            <section className="container mx-auto px-6 py-32">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            ORGANIZATION_PROFILE
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-[10rem] font-heading font-black text-noir leading-[0.85] tracking-tighter uppercase"
                        >
                            WE BUILD <br />
                            <span className="text-primary italic">PIONEERS</span>.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl font-bold text-noir/80 leading-tight border-l-8 border-primary pl-10 max-w-2xl uppercase tracking-tighter"
                        >
                            Founded in 2017, IIAHM is a mission-driven engine dedicated to bridging the gap between rural potential and global industry demand.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="bg-noir py-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={cn(
                                    "p-12 border-2 border-white/10 transition-all duration-500 hover:bg-white/5 hover:border-primary group",
                                    value.theme === "indigo" && "border-primary/30"
                                )}
                            >
                                <div className="p-5 bg-white/5 border border-white/10 w-24 h-24 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {value.icon}
                                </div>
                                <h3 className="text-4xl font-heading font-black text-white tracking-tighter mb-6">{value.title}</h3>
                                <p className="text-xl font-bold text-white/60 leading-snug uppercase tracking-tight">{value.description}</p>

                                <div className="mt-12 pt-6 border-t border-white/5 flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                                        VALUE_PROTOCOL_REF_{idx + 1}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Log (Timeline) */}
            <section className="container mx-auto px-6 py-40 border-b border-noir/5">
                <div className="flex flex-col lg:flex-row gap-8 mb-32 justify-between items-end">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            CHRONICLE_LOGS
                        </div>
                        <h2 className="text-7xl lg:text-[9rem] font-heading font-black uppercase tracking-tighter leading-none text-noir">
                            MISSION<span className="text-primary italic">_LOG</span>
                        </h2>
                    </div>
                    <div className="bg-noir text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em]">
                        ESTD_2017_BTR_HQ
                    </div>
                </div>

                <div className="space-y-12">
                    {milestones.map((milestone, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "flex flex-col md:flex-row border-2 border-noir transition-all duration-500 hover:shadow-glow bg-white overflow-hidden rounded-[var(--radius-card)]",
                                milestone.theme === "indigo" && "bg-smoke/50"
                            )}
                        >
                            <div className="bg-noir text-white p-12 flex flex-col items-center justify-center min-w-[240px]">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">YEAR</span>
                                <span className="text-7xl font-heading font-black">{milestone.year}</span>
                            </div>
                            <div className="p-12 flex-1 space-y-6">
                                <h4 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none text-noir">{milestone.title}</h4>
                                <p className="text-2xl font-bold leading-tight max-w-2xl text-noir/60 uppercase tracking-tight">{milestone.description}</p>
                            </div>
                            <div className="p-12 hidden lg:flex items-center justify-center opacity-5 text-9xl font-black">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Recruitment CTA */}
            <section className="bg-smoke py-32 mb-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="border-2 border-noir p-16 lg:p-32 bg-noir shadow-glow flex flex-col items-center text-center space-y-16 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-6xl lg:text-[10rem] font-heading font-black uppercase tracking-tighter leading-none text-white">
                                READY TO <span className="text-primary italic">UPGRADE</span>?
                            </h2>
                            <p className="text-2xl font-bold max-w-3xl leading-snug text-white/70 uppercase tracking-tight mx-auto">
                                We engineer the confidence and elite technical skillsets required for international placement. Our graduates don&apos;t just find jobs; they start global missions.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-3xl">
                            <Button variant="accent" size="lg" magnetic className="w-full text-2xl h-24">START_ENROLLMENT</Button>
                            <Button variant="ghost_white" size="lg" magnetic className="w-full text-2xl h-24">VIEW_RECORDS</Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
