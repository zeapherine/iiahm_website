"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="flex flex-col bg-white min-h-screen pt-24 overflow-x-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 border-b-8 border-black">
                <div className="max-w-4xl space-y-8">
                    <div className="inline-block bg-black text-white px-6 py-2 font-heading font-black uppercase text-xl rotate-[-1deg] border-4 border-black shadow-hard">
                        COMMUNICATION_CHANNEL
                    </div>
                    <h1 className="text-7xl md:text-9xl font-heading font-black text-black leading-[0.8] tracking-tighter uppercase drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                        GET IN <br />
                        <span className="text-primary italic">TOUCH</span>.
                    </h1>
                    <p className="text-2xl font-bold text-black border-l-8 border-black pl-8 max-w-2xl transform rotate-[1deg]">
                        Have questions about missions, eligibility, or deployment? Our command center in Kokrajhar is ready.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Information Cards */}
                    <div className="lg:col-span-4 space-y-8">
                        {[
                            { icon: Mail, label: "EMAIL_US", val: "info@ianinstitute.com", color: "bg-neon-green" },
                            { icon: Phone, label: "CALL_US", val: "+91 XXX XXX XXXX", color: "bg-accent" },
                            { icon: MapPin, label: "VISIT_US", val: "Main Campus, Near J.D. Road, Kokrajhar", color: "bg-hot-pink" }
                        ].map((item, i) => (
                            <div key={i} className={cn("p-8 border-4 border-black shadow-hard transform transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]", item.color, i % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]")}>
                                <div className="bg-white border-2 border-black w-10 h-10 flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    <item.icon className="w-5 h-5 text-black" />
                                </div>
                                <h4 className="font-heading font-black uppercase text-xs tracking-widest mb-2 opacity-60">{item.label}</h4>
                                <p className="font-heading font-black text-xl uppercase leading-tight">{item.val}</p>
                            </div>
                        ))}

                        <div className="bg-black text-white p-8 border-4 border-black shadow-hard rotate-[-1deg]">
                            <h4 className="font-heading font-black text-2xl uppercase mb-4 text-neon-green">Office Hours</h4>
                            <ul className="font-mono text-sm space-y-2">
                                <li className="flex justify-between border-b border-white/20 pb-2"><span>MON-SAT</span><span>0900 - 1800</span></li>
                                <li className="flex justify-between text-hot-pink pt-2"><span>SUNDAY</span><span>CLOSED</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form - Window Style */}
                    <Card className="lg:col-span-8 p-0 border-4 border-black shadow-hard-xl overflow-hidden bg-white">
                        <div className="bg-primary text-white p-4 border-b-4 border-black flex justify-between items-center">
                            <span className="font-heading font-black uppercase tracking-tighter">INQUIRY_FORM_v2.05</span>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-white border-2 border-black rounded-full" />
                                <div className="w-3 h-3 bg-white border-2 border-black rounded-full" />
                            </div>
                        </div>

                        <div className="p-8 lg:p-16">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="font-heading text-sm font-black uppercase">Pilot Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full h-14 bg-white border-4 border-black px-4 font-mono focus:bg-neon-green outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-heading text-sm font-black uppercase">Email Uplink</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full h-14 bg-white border-4 border-black px-4 font-mono focus:bg-accent outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="font-heading text-sm font-black uppercase">Comms Number</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                className="w-full h-14 bg-white border-4 border-black px-4 font-mono focus:bg-hot-pink focus:text-white outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-heading text-sm font-black uppercase">Mission Sector</label>
                                            <select
                                                name="program"
                                                value={formState.program}
                                                onChange={handleChange}
                                                className="w-full h-14 bg-white border-4 border-black px-4 font-mono focus:bg-black focus:text-white outline-none transition-all appearance-none"
                                            >
                                                <option value="aviation">AVIATION & CABIN CREW</option>
                                                <option value="hotel">HOTEL MANAGEMENT</option>
                                                <option value="hospitality">HOSPITALITY SERVICES</option>
                                                <option value="customer-service">CUSTOMER OPS</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-heading text-sm font-black uppercase">Mission Objectives</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full bg-white border-4 border-black p-4 font-mono focus:bg-primary focus:text-white outline-none transition-all"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        variant="neon"
                                        className="w-full text-2xl h-20 shadow-hard"
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "LAUNCH INQUIRY"}
                                    </Button>
                                </form>
                            ) : (
                                <div className="py-20 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                                    <div className="w-24 h-24 bg-neon-green border-4 border-black flex items-center justify-center shadow-hard rotate-12">
                                        <CheckCircle2 className="w-12 h-12 text-black" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none">TRANSMISSION_RECEIVED</h3>
                                        <p className="text-2xl font-bold max-w-md mx-auto leading-tight">
                                            Command has logged your inquiry. A counselor will establish contact shortly.
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSuccess(false)}
                                        className="text-xl"
                                    >
                                        NEW TRANSMISSION <ArrowRight className="ml-2 w-6 h-6" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
