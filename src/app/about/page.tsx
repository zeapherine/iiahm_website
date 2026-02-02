"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
    const timelineRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end center"]
    });

    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(heroScroll, [0, 1], [0, 250]);
    const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <div className="flex flex-col bg-transparent min-h-screen pt-24 overflow-x-hidden">
                {/* Mission Hero */}
                <section ref={heroRef} className="container mx-auto px-4 md:px-6 py-40 relative flex flex-col items-center justify-center min-h-[70vh]">
                    {/* Decorative Parallax Background Elements */}
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    </motion.div>

                    <motion.div
                        style={{ y: useTransform(heroScroll, [0, 1], [0, -40]) }}
                        className="relative z-10 text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Institutional Heritage
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-5xl md:text-8xl font-display font-semibold text-primary tracking-tight mb-8 leading-[1.05]"
                        >
                            Building <span className="text-accent underline decoration-slate-200 underline-offset-8">Global Futures</span> <br />
                            Since 2017.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
                        >
                            IIAHM was founded with a singular vision: to bridge the gap between local potential and international industry standards. We don&apos;t just train; we elevate careers.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Core Values */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-white p-10 rounded-2xl shadow-subtle hover:shadow-float transition-all duration-700 ease-out border border-slate-100 group hover:-translate-y-1"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-accent flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-all duration-300">
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
                    <div ref={timelineRef} className="max-w-4xl mx-auto space-y-48 relative">
                        {/* Vertical Line Container */}
                        <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-800" >
                            {/* Filling Progress Line */}
                            <motion.div
                                style={{ scaleY, originY: 0 }}
                                className="absolute inset-0 w-full bg-accent shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                            />
                        </div>

                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-12 items-center",
                                    idx % 2 === 0 ? "md:flex-row-reverse text-left md:text-left" : "md:flex-row text-left md:text-right"
                                )}
                            >
                                <div className="flex-1 w-full md:w-auto pl-16 md:pl-0 md:pr-12 md:text-right">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className={cn(idx % 2 === 0 ? "md:text-left md:pl-12" : "md:text-right")}
                                    >
                                        <span className="text-accent font-bold text-sm tracking-widest bg-accent/5 px-3 py-1 rounded-full">{milestone.year}</span>
                                        <h4 className="text-2xl md:text-3xl font-display font-semibold text-primary mt-4 mb-3 tracking-tight">
                                            {milestone.title.replace(/_/g, " ")}
                                        </h4>
                                        <p className="text-slate-500 leading-relaxed text-lg">
                                            {milestone.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Interactive Dot */}
                                <div className="absolute left-[calc(2rem-0.75rem)] md:left-[calc(50%-0.75rem)] w-6 h-6 z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping opacity-20" />
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20
                                        }}
                                        className="w-4 h-4 rounded-full bg-white border-4 border-accent shadow-[0_0_10px_rgba(14,165,233,0.3)] z-20"
                                    />
                                </div>

                                <div className="flex-1 hidden md:block" />
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
