"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";
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
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <div className="flex flex-col bg-white min-h-screen pt-24 overflow-x-hidden">
                {/* Mission Hero */}
                <section className="container mx-auto px-4 md:px-6 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Institutional Heritage
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold text-primary tracking-tight mb-8"
                    >
                        Building <span className="text-accent">Global Futures</span> <br />
                        Since 2017.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
                    >
                        IIAHM was founded with a singular vision: to bridge the gap between local potential and international industry standards. We don&apos;t just train; we elevate careers.
                    </motion.p>
                </section>

                {/* Core Values */}
                <section className="bg-slate-50 py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-10 rounded-2xl shadow-subtle hover:shadow-float transition-all duration-500 border border-slate-100 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">{value.title.replace(/_/g, " ")}</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline / Milestones */}
                <section className="container mx-auto px-4 md:px-6 py-32">
                    <div className="max-w-4xl mx-auto space-y-16 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />

                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 items-center",
                                    idx % 2 === 0 ? "md:flex-row-reverse text-left md:text-left" : "md:flex-row text-left md:text-right"
                                )}
                            >
                                <div className="flex-1 w-full md:w-auto pl-16 md:pl-0 md:pr-12 md:text-right">
                                    {idx % 2 === 0 ? (
                                        <div className="md:text-left md:pl-12">
                                            <span className="text-accent font-bold text-sm tracking-wider">{milestone.year}</span>
                                            <h4 className="text-2xl font-display font-semibold text-primary mt-2 mb-2">{milestone.title.replace(/_/g, " ")}</h4>
                                            <p className="text-slate-500">{milestone.description}</p>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="text-accent font-bold text-sm tracking-wider">{milestone.year}</span>
                                            <h4 className="text-2xl font-display font-semibold text-primary mt-2 mb-2">{milestone.title.replace(/_/g, " ")}</h4>
                                            <p className="text-slate-500">{milestone.description}</p>
                                        </>
                                    )}
                                </div>

                                {/* Dot */}
                                <div className="absolute left-[calc(2rem-0.5rem)] md:left-[calc(50%-0.5rem)] w-4 h-4 rounded-full bg-white border-4 border-accent shadow-sm z-10" />

                                <div className="flex-1 w-full md:w-auto pl-16 md:pl-12 md:pr-0">
                                    {idx % 2 !== 0 && (
                                        <div className="md:hidden"> {/* Mobile duplicate strictly for layout - simplified */}
                                            {/* Content already rendered above for mobile flow, this block is just spacer for desktop if needed */}
                                        </div>
                                    )}
                                    {idx % 2 === 0 ? (
                                        <div className="hidden md:block" />
                                    ) : (
                                        <div className="md:text-left">
                                            {/* Right side content for odd items */}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary py-24 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8">
                            Join a Legacy of Excellence.
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                            <Button
                                variant="accent"
                                size="lg"
                                className="rounded-full h-14 px-8 text-lg w-full sm:w-auto"
                                onClick={() => setShowPopup(true)}
                            >
                                Apply for 2025
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full h-14 px-8 text-lg bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white w-full sm:w-auto"
                                onClick={() => alert("Brochure download will be available soon!")}
                            >
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
