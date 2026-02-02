"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Globe } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const metrics = [
    { val: 5000, label: "Lives Impacted", suffix: "+", description: "Empowering families through education." },
    { val: 85, label: "Success Rate", suffix: "%", description: "Consistent industry placement success." },
    { val: 1200, label: "Female Leaders", suffix: "+", description: "Dedicated gender diversity programs." },
    { val: 4, label: "States Reached", suffix: "", description: "Expanding our wings across India." }
];

export default function ImpactPage() {
    return (
        <div className="flex flex-col bg-transparent min-h-screen pt-24 overflow-x-hidden">
            {/* Elegant Hero */}
            <section className="bg-slate-900 py-32 md:py-48 relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block"
                    >
                        Institutional Impact
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight mb-8 text-white"
                    >
                        Proven Excellence. <br />
                        <span className="text-slate-300">Measured.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        At IIAHM, our success is measured by the careers we build and the lives we transform in the Northeast India region.
                    </motion.p>
                </div>
            </section>

            {/* Refined Stats Grid */}
            <section className="py-32 bg-transparent">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                    <AnimatedCounter value={item.val} suffix={item.suffix} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.label}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section: Mission Pillars */}
            <section className="py-32 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1 space-y-6">
                            <h2 className="text-4xl font-display font-semibold text-primary">Our Pillars of Empowerment.</h2>
                            <p className="text-slate-500 leading-relaxed">We focus on three core areas to ensure long-term sustainability and growth for our students and the community.</p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: ShieldCheck, title: "Industry Alignment", desc: "Our curriculum is vetted by top-tier aviation and hotel chains." },
                                { icon: Users, title: "Community Reach", desc: "Sourcing talent from the grassroots of the Northeast." },
                                { icon: Award, title: "Skill Certification", desc: "ISO 9001:2015 certified training standards." },
                                { icon: Globe, title: "Global Network", desc: "Connecting local students to international opportunities." }
                            ].map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-accent">
                                        <pillar.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">{pillar.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
