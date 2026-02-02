"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    const title = "PIONEERING";
    const subtitle = "FUTURES";

    const containerVars = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const charVars = {
        initial: { y: 100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                mass: 1
            } as any
        }
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Top Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-noir text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-12 border-2 border-noir"
                    >
                        TRANSFORMING_LIVES_SINCE_2017
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        variants={containerVars}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col items-center select-none"
                    >
                        <div className="flex overflow-hidden">
                            {title.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={charVars}
                                    className="font-heading text-7xl font-black uppercase leading-tight tracking-[-0.05em] text-noir md:text-[10rem] lg:text-[14rem]"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="flex overflow-hidden -mt-4 md:-mt-12">
                            {subtitle.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={charVars}
                                    className="font-heading text-7xl font-black uppercase leading-tight tracking-[-0.05em] text-primary italic md:text-[10rem] lg:text-[14rem]"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sub-text & Actions */}
                    <div className="mt-16 flex flex-col items-center gap-12 w-full max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-center text-xl md:text-2xl font-bold text-noir/60 uppercase tracking-tighter max-w-2xl leading-tight"
                        >
                            IIAHM: Bridging local talent from the borderlands to the global stage.
                            International excellence in Aviation & Hotel Management.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-col md:flex-row gap-6 w-full md:w-auto"
                        >
                            <Button
                                variant="accent"
                                size="lg"
                                magnetic
                                className="w-full md:w-auto group"
                            >
                                START APPLICATION
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                magnetic
                                className="w-full md:w-auto"
                            >
                                EXPLORE PROGRAMS
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Premium Marquee */}
            <div className="absolute bottom-12 w-full bg-noir py-6 overflow-hidden whitespace-nowrap z-20 border-y-2 border-noir">
                <div className="flex animate-marquee">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center">
                            <span className="text-xl font-heading font-black uppercase text-white mx-12 flex items-center gap-4">
                                <Globe className="w-6 h-6 text-primary" /> BTR_TO_WORLD_OPERATIONS
                            </span>
                            <span className="text-xl font-heading font-black uppercase text-white/40 mx-12 flex items-center gap-4">
                                <Shield className="w-6 h-6 text-primary" /> GOVERNMENT_AFFILIATED_CENTER
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Asymmetric Decorations */}
            <div className="absolute top-1/4 right-0 w-32 h-[500px] bg-primary/5 -mr-16 rotate-12 hidden lg:block border-l-2 border-noir/5" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 border-4 border-noir/10 rounded-full -ml-24 hidden lg:block" />
        </section>
    );
}
