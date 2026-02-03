"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";
import { cn } from "@/lib/utils";

const milestones = [
    { year: "2020", title: "FOUNDATION_LAID", description: "IIAHM officially established in Kokrajhar with a mission to empower local youth.", theme: "noir" },
    { year: "2022", title: "BTR_LEADERSHIP", description: "Became the premier institute for Aviation and Hospitality in the Bodoland Territorial Region.", theme: "indigo" },
    { year: "2024", title: "GLOBAL_ALLIANCE", description: "Established strong placement ties with international airlines and 5-star hotel chains.", theme: "noir" },
    { year: "2025", title: "DIGITAL_HORIZON", description: "Expanding our reach through advanced digital training modules and expanded campus facilities.", theme: "noir" },
];

const values = [
    {
        icon: <Users className="w-10 h-10" />,
        title: "OUR_MISSION",
        description: "To give wings to lakhs of dreams of youths from all over Northeast India by making our platform affordable and easily accessible.",
        theme: "noir"
    },
    {
        icon: <Award className="w-10 h-10" />,
        title: "OUR_VISION",
        description: "To be the top upskilling platform of Northeast India and to boost youth employment through practical skills and global placement.",
        theme: "indigo"
    },
    {
        icon: <Globe className="w-10 h-10" />,
        title: "GLOBAL_PLACEMENT",
        description: "Connecting talented youth with top organisations and companies worldwide through ISO-certified training.",
        theme: "noir"
    }
];

export default function AboutPageClient() {
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
                <section ref={heroRef} className="container mx-auto px-4 md:px-6 py-24 md:py-40 relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh]">
                    {/* Decorative Parallax Background Elements */}
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-3xl" />
                    </motion.div>

                    <motion.div
                        style={{ y: useTransform(heroScroll, [0, 1], [0, -40]) }}
                        className="relative z-10 text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent ring-4 ring-primary/10 dark:ring-accent/10"></span>
                            Institutional Heritage
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl md:text-8xl font-display font-semibold text-primary dark:text-white tracking-tight mb-6 md:mb-8 leading-[1.05]"
                        >
                            Excellence in <br />
                            <span className="text-accent underline decoration-slate-200 dark:decoration-slate-800 underline-offset-8">Aviation & Hospitality</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4"
                        >
                            IIAHM was founded with a singular vision: to bridge the gap between local potential and international industry standards. We don&apos;t just train; we elevate careers.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Core Values */}
                <section className="py-20 md:py-32 relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-white dark:bg-slate-900/20 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-subtle hover:shadow-float transition-all duration-700 ease-out border border-slate-100 dark:border-white/5 group hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50 dark:bg-slate-950 text-accent flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        {React.cloneElement(value.icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-10 md:h-10" })}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-display font-semibold text-primary dark:text-white mb-3 md:mb-4">{value.title.replace(/_/g, " ")}</h3>
                                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline / Milestones */}
                <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
                    <div ref={timelineRef} className="max-w-4xl mx-auto space-y-24 md:space-y-48 relative">
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
                                        <span className="text-accent font-bold text-sm tracking-widest bg-accent/5 dark:bg-accent/10 px-3 py-1 rounded-full">{milestone.year}</span>
                                        <h4 className="text-2xl md:text-4xl font-display font-semibold text-primary dark:text-white mt-4 mb-3 tracking-tight">
                                            {milestone.title.replace(/_/g, " ")}
                                        </h4>
                                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
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

                {/* Trainers / Faculty Section */}
                <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
                    {/* Abstract Background Accents */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
                    <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
                            >
                                <Users className="w-3 h-3" />
                                World Class Faculty
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary dark:text-white mb-6">Expert Faculty.</h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400">Guided by industry veterans who have served in world-class airlines and luxury hotel chains.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                "Mr. Agwma Basumatary",
                                "Mr. Swmkwr Basumatary",
                                "Ms. Munmun Chowdhury",
                                "Ms. Vicky Amarnani",
                                "Ms. Mallika Basumatary",
                                "Ms. Nishu Mann"
                            ].map((name, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative"
                                >
                                    {/* Card Glow Effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-primary/0 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                                    <div className="relative bg-white dark:bg-slate-900/40 backdrop-blur-sm p-10 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-subtle group-hover:shadow-float transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col items-center text-center">
                                        <div className="relative mb-8">
                                            <div className="w-24 h-24 rounded-3xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                                                <Users className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-primary dark:bg-accent text-white flex items-center justify-center shadow-lg">
                                                <Award className="w-4 h-4" />
                                            </div>
                                        </div>

                                        <h4 className="font-display font-bold text-primary dark:text-white text-2xl mb-2 group-hover:text-accent transition-colors">
                                            {name}
                                        </h4>
                                        <div className="h-0.5 w-8 bg-slate-200 dark:bg-slate-700 mb-4 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                                        <p className="text-accent dark:text-accent-light text-xs font-black uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100">
                                            Industry Trainer
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary dark:bg-slate-950 border-t border-white/5 py-24 text-center relative overflow-hidden transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary dark:from-slate-950/50 dark:to-black pointer-events-none" />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-display font-semibold text-white mb-8 tracking-tight"
                        >
                            Join a Legacy of Excellence.
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                        >
                            <Button
                                variant="accent"
                                size="lg"
                                className="rounded-full h-16 px-10 text-lg w-full sm:w-auto shadow-glow group"
                                onClick={() => setShowPopup(true)}
                            >
                                Apply for 2025
                                <Award className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full h-16 px-10 text-lg bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white w-full sm:w-auto backdrop-blur-sm transition-all"
                                onClick={() => alert("Brochure download will be available soon!")}
                            >
                                Download Brochure
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
