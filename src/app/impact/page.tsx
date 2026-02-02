"use client";

import Image from "next/image";
import { ShieldCheck, Heart, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

const impactAreas = [
    {
        icon: <ShieldCheck className="w-12 h-12 text-black" />,
        title: "EMPLOYMENT_LIFT",
        description: "Direct pathways to stable, elite careers for local rural youth of BTR.",
        color: "bg-neon-green"
    },
    {
        icon: <Users className="w-12 h-12 text-black" />,
        title: "ARTISAN_X",
        description: "Modernizing local craft while preserving heritage via design inputs.",
        color: "bg-accent"
    },
    {
        icon: <Heart className="w-12 h-12 text-black" />,
        title: "SHE_MISSION",
        description: "Dedicated scholarships and safety-first training for young women.",
        color: "bg-hot-pink"
    }
];

export default function ImpactPage() {
    return (
        <div className="flex flex-col bg-white min-h-screen pt-24 overflow-x-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 border-b-8 border-black">
                <div className="max-w-5xl space-y-12">
                    <div className="inline-block bg-black text-white px-6 py-2 font-heading font-black uppercase text-xl rotate-[-2deg] border-4 border-black shadow-hard">
                        IMPACT_REPORT_v2025
                    </div>
                    <h1 className="text-7xl md:text-9xl font-heading font-black text-black leading-[0.8] tracking-tighter uppercase drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                        MEASURES <br />
                        <span className="text-primary italic">OF SUCCESS</span>.
                    </h1>
                    <p className="text-3xl font-bold text-black border-l-8 border-black pl-8 max-w-3xl transform rotate-[1deg]">
                        Since our inception, IAN Institute has functioned as a community-first NGO. We measure our success by the families brought out of poverty through elite skillsets.
                    </p>
                </div>
            </section>

            {/* Data Grid Section */}
            <section className="bg-black py-32 border-b-8 border-black overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { val: 5000, label: "LIVES_IMPACTED", suffix: "+", color: "bg-neon-green" },
                            { val: 1200, label: "FEMALE_CADETS", suffix: "+", color: "bg-hot-pink" },
                            { val: 85, label: "SUCCESS_RATE", suffix: "%", color: "bg-primary text-white" },
                            { val: 7, label: "REGIONS_ACTIVE", suffix: "", color: "bg-accent" }
                        ].map((stat, i) => (
                            <div key={i} className={cn("p-10 border-4 border-black shadow-hard rotate-[-1deg] transition-all hover:rotate-0", stat.color)}>
                                <div className="font-heading text-8xl font-black tracking-tighter mb-4 leading-none">
                                    <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                                </div>
                                <p className="font-heading font-black text-xl uppercase tracking-widest opacity-80">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Pillars */}
            <section className="container mx-auto px-6 py-32 border-b-8 border-black">
                <div className="flex flex-col lg:flex-row gap-8 mb-24 justify-between items-end">
                    <h2 className="text-6xl lg:text-8xl font-heading font-black uppercase tracking-tighter leading-none">
                        KEY<span className="text-primary italic">_PILLARS</span>
                    </h2>
                    <div className="bg-black text-white px-6 py-2 border-4 border-black font-heading font-black uppercase rotate-[2deg]">
                        NGO_CORE_RECORDS
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {impactAreas.map((area, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "p-12 border-4 border-black shadow-hard-lg relative overflow-hidden group hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-hard-xl transition-all",
                                area.color,
                                idx % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]"
                            )}
                        >
                            <div className="bg-white border-2 border-black w-20 h-20 flex items-center justify-center mb-8 shadow-hard group-hover:rotate-12 transition-transform">
                                {area.icon}
                            </div>
                            <h3 className="text-4xl font-heading font-black text-black mb-6 leading-tight uppercase">{area.title}</h3>
                            <p className="text-xl font-bold text-black leading-snug mb-8 opacity-90">{area.description}</p>

                            <div className="font-mono text-[10px] font-black uppercase opacity-40">
                                PILLAR_REF_0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BTR Future Section */}
            <section className="container mx-auto px-6 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative h-[600px] border-8 border-black shadow-hard-xl rotate-[-2deg] overflow-hidden group">
                        <Image
                            src="https://www.stirworld.com/images/see/3399_Green_1.jpg"
                            alt="BTR Region Development"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <div className="bg-white border-4 border-black p-8 shadow-hard max-w-sm rotate-[3deg]">
                                <Target className="w-16 h-16 mb-6 text-primary" />
                                <h4 className="text-4xl font-heading font-black mb-2 uppercase tracking-tighter">OUR_VISION</h4>
                                <p className="text-xl font-bold uppercase leading-none opacity-80">To make Kokrajhar a global hub for hospitality talent.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-6xl md:text-8xl font-heading font-black text-black leading-[0.8] tracking-tighter uppercase">
                            SUSTAINABLE <br />
                            <span className="text-primary italic">FUTURES</span>.
                        </h2>
                        <p className="text-2xl font-bold text-black border-l-8 border-black pl-8 max-w-xl">
                            We focus on long-term career sustainability. Our students don&apos;t just get jobs; they build careers that reinvest in local communities.
                        </p>

                        <div className="space-y-6">
                            {[
                                "AFFILIATED WITH STATE SKILL MISSIONS",
                                "INDUSTRY-VETTED ELITE CURRICULUM",
                                "DIRECT MENTORSHIP FROM GLOBAL LEADERS"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 border-4 border-black bg-white shadow-hard hover:bg-neon-green transition-colors">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">
                                        {i + 1}
                                    </div>
                                    <span className="font-heading font-black text-xl uppercase tracking-tighter">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="neon" size="lg" className="w-full md:w-auto h-20 text-3xl px-12 shadow-hard uppercase font-heading font-black tracking-tighter">
                            JOIN THE MISSION
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
