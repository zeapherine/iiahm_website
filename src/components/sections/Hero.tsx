"use client"

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";
import { ArrowRight, Globe, Shield } from "lucide-react";
import { FlightPathGlobe } from "@/components/three/FlightPathGlobe";

export function Hero() {
    const [showPopup, setShowPopup] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <>
            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <section ref={heroRef} className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-transparent pt-32 md:pt-40">
                {/* Abstract Aviation Curves Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
                        <path d="M0 100 C 30 20 70 20 100 100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
                    </svg>
                    {/* Animated Flight Path */}
                    <svg className="absolute w-full h-full pointer-events-none z-0" style={{ opacity: 0.1 }}>
                        <motion.path
                            d="M-100,600 C400,500 800,100 1600,200"
                            fill="none"
                            stroke="#0ea5e9"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </svg>
                </div>


                <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20">

                    {/* Text Content */}
                    <motion.div style={{ y: textY, opacity }} className="text-left space-y-6 md:space-y-8 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 bg-muted border border-border text-muted-foreground px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider"
                        >

                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            <span className="hidden sm:inline text-[10px] md:text-xs">No. 1 Global Placement Management Program in Northeast India — Est. 2020.</span>
                            <span className="sm:hidden">No. 1 Placement Program — Est. 2020</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[1.05] md:leading-[1.1]"
                        >
                            Elevate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
                                Global Career.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg"
                        >
                            Our mission matches local potential with global industry standards — transforming lives, building careers, and creating success stories for the youth of Northeast India every year.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6"
                        >
                            <Button
                                variant="default"
                                size="lg"
                                className="h-14 px-8 rounded-full text-base font-medium shadow-xl shadow-accent/10 hover:shadow-accent/20 transition-all w-full sm:w-auto"
                                onClick={() => setShowPopup(true)}
                            >
                                Start Application
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Link href="/programs" className="w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-8 rounded-full text-base font-medium border-border hover:bg-muted text-muted-foreground w-full"
                                >
                                    Explore Programs
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="pt-8 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-foreground/60 font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-accent" />
                                <span className="text-foreground/80 text-xs md:text-sm">ISO 9001:2015 Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-accent" />
                                <span className="text-foreground/80 text-xs md:text-sm">Global Placements</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual / Abstract Representation - Now Glass & Subtle */}
                    <div className="relative h-[400px] md:h-[600px] w-full z-0 perspective-1000 mt-12 lg:mt-0">
                        {/* Floating Glass Cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, rotateY: 5 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm rounded-[2rem] border border-slate-200/50 dark:border-white/5 shadow-2xl overflow-hidden"
                        >
                            {/* Three.js Globe Animation */}
                            <div className="absolute inset-0 z-0">
                                <FlightPathGlobe />
                            </div>

                            {/* Abstract Gradient Overlay - Subtle Shimmer */}
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>

                            {/* 1. Floating Badge: ISO Certified */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-6 md:bottom-10 left-6 md:left-8 z-10 bg-background/80 dark:bg-card/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-border flex items-center gap-3 md:gap-4 max-w-[160px] md:max-w-[200px]"
                            >
                                <div className="bg-accent/10 p-2 md:p-2.5 rounded-full text-accent shadow-inner">
                                    <Shield className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none mb-1">Accredited</p>
                                    <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">ISO 9001:2015<br />Certified</p>
                                </div>
                            </motion.div>

                            {/* 2. Floating Badge: Placement Success */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="absolute top-6 md:top-10 right-6 md:right-8 z-10 bg-primary/90 dark:bg-accent/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-white/10 flex items-center gap-3 md:gap-4"
                            >
                                <div className="text-right">
                                    <p className="text-[8px] md:text-[10px] uppercase font-bold text-white/70 tracking-wider leading-none mb-1">Placements</p>
                                    <p className="text-lg md:text-xl font-bold text-white">500+</p>
                                </div>
                                <div className="bg-white/20 p-2 md:p-2.5 rounded-full text-white">
                                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
