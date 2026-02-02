"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";
import { ArrowRight, Globe, Shield } from "lucide-react";

export function Hero() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-background pt-32 md:pt-40">
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


                <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 bg-muted border border-border text-muted-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                        >

                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            International Standards. Global Careers.
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]"
                        >
                            Elevate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
                                Professional Future.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
                        >
                            Join the premier institute for Aviation and Hotel Management.
                            Where academic rigor meets industry elegance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
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
                            className="pt-8 flex flex-wrap items-center gap-6 text-sm text-foreground/60 font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-accent" />
                                <span className="text-foreground/80">ISO 9001:2015 Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-accent" />
                                <span className="text-foreground/80">Global Placements</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual / Abstract Representation - Now Glass & Subtle */}
                    <div className="relative hidden lg:block h-[600px] w-full z-0 perspective-1000">
                        {/* Floating Glass Cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, rotateY: 5 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 bg-muted rounded-[2rem] border border-border shadow-2xl overflow-hidden"
                        >
                            {/* Main Hero Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?q=80&w=2560&auto=format&fit=crop"
                                    alt="Aviation Academy Students"
                                    fill
                                    className="object-cover transition-transform duration-1000 hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                            </div>

                            {/* Abstract Gradient Overlay - Subtle Shimmer */}
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-40"></div>

                            {/* 1. Floating Badge: ISO Certified */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-10 left-8 z-10 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-border flex items-center gap-4 max-w-[200px]"
                            >
                                <div className="bg-accent/10 p-2.5 rounded-full text-accent">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Accredited</p>
                                    <p className="text-sm font-semibold text-foreground">ISO 9001:2015<br />Certified</p>
                                </div>
                            </motion.div>

                            {/* 2. Floating Badge: Placement Success */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="absolute top-10 right-8 z-10 bg-primary/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-primary-foreground/10 flex items-center gap-4"
                            >
                                <div className="text-right">
                                    <p className="text-[10px] uppercase font-bold text-primary-foreground/70 tracking-wider">Placements</p>
                                    <p className="text-xl font-bold text-primary-foreground">500+</p>
                                </div>
                                <div className="bg-accent p-2.5 rounded-full text-accent-foreground">
                                    <Globe className="w-6 h-6" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
