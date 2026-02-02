"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, Globe, Building, Award } from "lucide-react";

const stats = [
    { label: "Lives Impacted", value: 5000, suffix: "+", icon: Users, color: "bg-neon-green" },
    { label: "Local Placement", value: 85, suffix: "%", icon: Award, color: "bg-accent" },
    { label: "Training Centers", value: 3, suffix: "", icon: Building, color: "bg-primary" },
    { label: "NGO Years", value: 7, suffix: "", icon: Globe, color: "bg-hot-pink" },
];

export function Impact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative overflow-hidden bg-white py-32 border-y-8 border-black">
            <div className="container mx-auto px-4">
                <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mb-6 inline-block bg-black text-white px-4 py-1 font-bold uppercase tracking-widest rotate-[-1deg]">
                            OUR TRACK RECORD
                        </div>
                        <h2 className="font-heading text-6xl font-black leading-[0.8] tracking-tighter md:text-8xl lg:text-9xl text-black">
                            REAL<br />
                            <span className="text-primary italic">RESULTS</span>.
                        </h2>
                    </div>
                    <div className="bg-neon-green p-8 border-4 border-black shadow-hard-lg rotate-[1deg]">
                        <p className="font-heading text-2xl font-black uppercase text-black">
                            We are more than just an institute. We are a bridge for local talent in Northeast India
                            to reach international standards.
                        </p>
                    </div>
                </div>

                {/* Sticker Card Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group relative p-8 border-4 border-black transition-all duration-300 hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-hard-xl",
                                stat.color,
                                stat.color === "bg-primary" ? "text-white" : "text-black",
                                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                                idx % 2 === 0 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"
                            )}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="absolute -top-4 -right-4 bg-white border-2 border-black w-12 h-12 flex items-center justify-center rounded-full shadow-hard rotate-[10deg] group-hover:rotate-[20deg] transition-transform">
                                <stat.icon className="h-6 w-6 text-black" />
                            </div>

                            <div className="font-heading text-7xl font-black tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="mt-4 font-heading text-xl font-black uppercase leading-none">
                                {stat.label}
                            </p>

                            <div className="mt-8 pt-4 border-t-2 border-black/20 font-mono text-[10px] font-bold uppercase">
                                DATA_VERIFIED_2025 // IAN_RECORDS
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Flair */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-hot-pink border-4 border-black rounded-full shadow-hard animate-spin-slow opacity-20 hidden lg:block" />
        </section>
    );
}
