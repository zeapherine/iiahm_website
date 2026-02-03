"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, GraduationCap, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";

const initiatives = [
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "80% SCHOLARSHIP",
        description: "Heavily subsidized programs for students from financially weak backgrounds.",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "GUARANTEED PLACEMENT",
        description: "Full job assistance support integrated with every foundation-supported course.",
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        icon: <HeartHandshake className="w-8 h-8" />,
        title: "LOCAL EMPOWERMENT",
        description: "Focused on uplifting the youth of Northeast India through accessible skills.",
        color: "bg-slate-50 text-slate-600"
    }
];

export default function NGOPageClient() {
    const [showPopup, setShowPopup] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <>
            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <div className="flex flex-col bg-transparent min-h-screen pt-24 overflow-x-hidden text-primary">
                {/* NGO Hero Section */}
                <section ref={heroRef} className="container mx-auto px-4 md:px-6 py-24 md:py-40 relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-[85vh]">
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                        className="absolute inset-0 z-0 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background dark:via-transparent dark:to-background z-10" />
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent rounded-full blur-[80px] md:blur-[100px]" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary rounded-full blur-[80px] md:blur-[100px]" />
                        </div>
                    </motion.div>

                    <div className="relative z-20 text-center max-w-5xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-6 md:mb-10"
                        >
                            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                            Mijing Youth Foundation
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl md:text-8xl font-display font-semibold text-primary dark:text-white tracking-tight mb-6 md:mb-10 leading-[1.05]"
                        >
                            Mijing Youth Foundation <br />
                            <span className="text-accent underline decoration-slate-200 dark:decoration-slate-800 underline-offset-8">Empowering Young Minds</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-3xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed italic font-light"
                        >
                            &ldquo;Your Dreams Should Fly — Not Be Limited by Money.&rdquo;
                        </motion.p>
                    </div>
                </section>

                {/* Our Philosophy */}
                <section className="py-20 md:py-32 bg-white dark:bg-slate-950 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)] transition-colors duration-500">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/2 space-y-6 md:space-y-8"
                            >
                                <h2 className="text-2xl md:text-5xl font-display font-semibold text-primary dark:text-white">
                                    Why money shouldn&apos;t decide your destiny.
                                </h2>
                                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                    At IIAHM Kokrajhar, we believe that talent, ambition, and hard work should never be held back by financial struggles. Every young person, no matter where they come from or what their family background is, deserves the chance to dream big and build a successful future.
                                </p>
                                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Our NGO initiative was launched to ensure that no youth&apos;s potential goes to waste simply because of money. Through heavily subsidized hospitality, hotel management, and aviation programs — combined with guaranteed job placement support — we are opening doors for students who would otherwise be left behind.
                                </p>
                                <div className="pt-4 md:pt-6">
                                    <Button
                                        size="lg"
                                        className="rounded-full h-14 px-8 text-lg w-full sm:w-auto"
                                        onClick={() => setShowPopup(true)}
                                    >
                                        Apply for Scholarship
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="md:w-1/2 w-full aspect-square relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center p-8 md:p-12"
                            >
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                                <div className="relative text-center text-white space-y-3 md:space-y-4">
                                    <div className="text-6xl md:text-8xl font-display font-bold">80%</div>
                                    <div className="text-xl md:text-2xl opacity-90 uppercase tracking-[0.2em] font-bold">Scholarship</div>
                                    <p className="max-w-[240px] md:max-w-[280px] mx-auto text-xs md:text-sm opacity-80 leading-relaxed font-medium">For families who believe in their children&apos;s dreams but face financial hurdles.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Initiatives Grid */}
                <section className="py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {initiatives.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white dark:bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all duration-500 group"
                                >
                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.color} dark:bg-slate-800 dark:text-accent flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6 md:w-8 md:h-8" })}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-display font-semibold text-primary dark:text-white mb-3 md:mb-4 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="py-40 text-center container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl md:text-4xl font-display text-slate-400 mb-10 leading-relaxed font-light">
                            &ldquo;Opportunity should belong to everyone — and a brighter future should be within reach for every hardworking, deserving youth.&rdquo;
                        </h3>
                        <div className="w-20 h-1 bg-accent/20 mx-auto rounded-full" />
                    </motion.div>
                </section>
            </div>
        </>
    );
}
