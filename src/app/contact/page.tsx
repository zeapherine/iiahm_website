"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, MessageSquare, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        program: "aviation",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="flex flex-col bg-transparent min-h-screen pt-24 overflow-x-hidden">
            {/* Background Narrative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 dark:bg-blue-950/10 -skew-x-12 transform origin-top translate-x-20 pointer-events-none hidden lg:block" />

            {/* Header Section */}
            <section className="relative container mx-auto px-4 md:px-6 py-20 lg:py-32">
                <div className="max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8"
                    >

                        <MessageSquare className="w-3.5 h-3.5" />
                        Get in Touch
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl sm:text-7xl lg:text-9xl font-heading font-black text-foreground leading-[0.9] tracking-tighter uppercase mb-12"
                    >
                        START YOUR <br />
                        <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">JOURNEY</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-2xl font-medium text-muted-foreground max-w-2xl leading-relaxed"
                    >
                        Our admissions team is here to guide you through every step of your career elevation. Reach out to our Kokrajhar campus for a personalized counseling session.
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-6 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Contact Cards - Left Column */}
                    <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {[
                                {
                                    icon: Mail,
                                    label: "Email Support",
                                    val: "ian@ianinstitute.in",
                                    desc: "For general queries & documentation"
                                },
                                {
                                    icon: Phone,
                                    label: "Admissions Helpline",
                                    val: "+91 93942-37112",
                                    desc: "Secondary: +91 81340-36650"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-8 bg-card dark:bg-slate-900/40 backdrop-blur-sm rounded-[32px] border border-border dark:border-white/5 shadow-2xl dark:shadow-none hover:border-accent/30 transition-all duration-500 ease-out group hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-muted dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{item.label}</h4>
                                    <p className="text-xl font-bold text-foreground mb-1">{item.val}</p>
                                    <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="p-8 bg-slate-900 dark:bg-slate-950 text-white rounded-[32px] overflow-hidden relative border border-white/5"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Calendar className="w-24 h-24" />
                            </div>
                            <h4 className="text-accent font-bold text-xl uppercase tracking-tighter mb-4">Campus Visit</h4>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <MapPin className="w-5 h-5 shrink-0 text-accent/60" />
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        SBI Building, 4th Floor, <br />
                                        Tengapara, Kokrajhar, <br />
                                        BTR, Assam - 783370
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center group cursor-pointer">
                                    <span className="text-sm font-bold uppercase tracking-widest">View on Map</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Inquiry Form - Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8 order-1 lg:order-2"
                    >
                        <div className="bg-card rounded-[40px] p-8 md:p-12 lg:p-16 border border-border shadow-2xl dark:shadow-none relative overflow-hidden">
                            {/* Decorative gradient */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-blue-400 to-accent/20" />

                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-heading font-black text-foreground uppercase tracking-tighter">Inquiry Portal</h2>
                                        <p className="text-muted-foreground font-medium">Please provide your details below. A counselor will establish contact within 24 hours.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                className="w-full h-14 bg-muted dark:bg-slate-800/50 border border-border dark:border-white/5 rounded-2xl px-6 font-medium focus:bg-card focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                className="w-full h-14 bg-muted border border-border rounded-2xl px-6 font-medium focus:bg-card focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Contact Number</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                placeholder="+91"
                                                className="w-full h-14 bg-muted border border-border rounded-2xl px-6 font-medium focus:bg-card focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Program of Interest</label>
                                            <div className="relative">
                                                <select
                                                    name="program"
                                                    value={formState.program}
                                                    onChange={handleChange}
                                                    className="w-full h-14 bg-muted border border-border rounded-2xl px-6 font-medium focus:bg-card focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all appearance-none cursor-pointer text-foreground"
                                                >
                                                    <option value="aviation">AVIATION & CABIN CREW</option>
                                                    <option value="hotel">HOTEL MANAGEMENT</option>
                                                    <option value="hospitality">HOSPITALITY SERVICES</option>
                                                    <option value="customer-service">CUSTOMER OPERATIONS</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <ArrowRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Your Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Tell us about your career goals..."
                                            className="w-full bg-muted border border-border rounded-2xl p-6 font-medium focus:bg-card focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all placeholder:text-muted-foreground/50 text-foreground resize-none"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-16 rounded-2xl text-lg relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <span className="relative flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                "Sending Inquiry..."
                                            ) : (
                                                <>
                                                    Submit Application <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </span>
                                    </Button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.99 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="py-20 flex flex-col items-center text-center space-y-8"
                                >
                                    <div className="w-24 h-24 bg-green-500/10 rounded-3xl flex items-center justify-center border border-green-500/20 shadow-xl shadow-green-500/5">
                                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-heading font-black text-foreground uppercase tracking-tighter">Inquiry Logged</h3>
                                        <p className="text-xl font-medium text-muted-foreground max-w-sm mx-auto leading-tight">
                                            Thank you, {formState.name}. Your details have been transmitted to our admissions team.
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSuccess(false)}
                                        className="rounded-xl px-8"
                                    >
                                        Establish New Link <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
