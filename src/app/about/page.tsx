"use client";

import { Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const milestones = [
    { year: "2017", title: "MISSION_INITIATED", description: "IAN Institute officially registered. Goal: Local empowerment through skillsets.", color: "bg-neon-green" },
    { year: "2019", title: "CAMPUS_ALPHA", description: "Premier training center launched in Kokrajhar. 200+ cadets enrolled.", color: "bg-accent" },
    { year: "2021", title: "BTR_EXPANSION", description: "Network growth across Bodoland Territorial Region via mobile units.", color: "bg-hot-pink" },
    { year: "2023", title: "EXCELLENCE_LOCKED", description: "Recognized as the leader in vocational excellence in Northeast India.", color: "bg-primary" },
];

const values = [
    {
        icon: <Users className="w-10 h-10 text-black" />,
        title: "LOCAL_PRIDE",
        description: "Uplifting the BTR community through elite skill-based education.",
        color: "bg-neon-green"
    },
    {
        icon: <Award className="w-10 h-10 text-black" />,
        title: "GLOBAL_SPEC",
        description: "International standards in hospitality and aviation training.",
        color: "bg-accent"
    },
    {
        icon: <Globe className="w-10 h-10 text-black" />,
        title: "UNLIMITED_SKY",
        description: "Bridges between rural talent and global career missions.",
        color: "bg-hot-pink"
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white min-h-screen pt-24 overflow-x-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 border-b-8 border-black">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1 space-y-12">
                        <div className="inline-block bg-black text-white px-6 py-2 font-heading font-black uppercase text-xl rotate-[-2deg] border-4 border-black shadow-hard">
                            MISSION_OVERVIEW
                        </div>
                        <h1 className="text-7xl md:text-9xl font-heading font-black text-black leading-[0.8] tracking-tighter uppercase drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                            WE BUILD <br />
                            <span className="text-primary italic">PIONEERS</span>.
                        </h1>
                        <p className="text-3xl font-bold text-black leading-tight border-l-8 border-black pl-8 max-w-2xl transform rotate-[1deg]">
                            Founded in 2017, IAN Institute is a mission-driven NGO dedicated to bridging the gap between rural potential and global careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Stickers Section */}
            <section className="bg-black py-32 border-b-8 border-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "p-10 border-4 border-black shadow-hard-lg transition-all hover:rotate-0",
                                    value.color,
                                    idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                                )}
                            >
                                <div className="bg-white w-20 h-20 border-4 border-black flex items-center justify-center mb-8 shadow-hard">
                                    {value.icon}
                                </div>
                                <h3 className="text-4xl font-heading font-black text-black tracking-tighter mb-4">{value.title}</h3>
                                <p className="text-xl font-bold text-black leading-snug">{value.description}</p>

                                <div className="mt-8 pt-4 border-t-2 border-black/20 font-mono text-[10px] font-black uppercase">
                                    CORE_VALUE_V.01 // IAN_RECORDS
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Log (Timeline) */}
            <section className="container mx-auto px-6 py-32 border-b-8 border-black">
                <div className="flex flex-col lg:flex-row gap-8 mb-24 justify-between items-end">
                    <h2 className="text-6xl lg:text-8xl font-heading font-black uppercase tracking-tighter leading-none">
                        MISSION<span className="text-primary">_LOG</span>
                    </h2>
                    <div className="bg-neon-green px-6 py-2 border-4 border-black font-heading font-black uppercase rotate-[2deg]">
                        ESTD_2017_KOKRAJHAR
                    </div>
                </div>

                <div className="space-y-0">
                    {milestones.map((milestone, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "flex flex-col md:flex-row border-4 border-black shadow-hard mb-12",
                                milestone.color,
                                milestone.color === "bg-primary" ? "text-white" : "text-black"
                            )}
                        >
                            <div className="bg-black text-white p-8 flex items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black min-w-[200px]">
                                <span className="text-6xl font-heading font-black">{milestone.year}</span>
                            </div>
                            <div className="p-8 flex-1 space-y-4">
                                <h4 className="text-4xl font-heading font-black uppercase tracking-tighter leading-none">{milestone.title}</h4>
                                <p className="text-2xl font-bold leading-tight max-w-2xl">{milestone.description}</p>
                            </div>
                            <div className="p-8 hidden md:flex items-center justify-center opacity-20 text-6xl font-black">
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="bg-hot-pink py-32">
                <div className="container mx-auto px-6">
                    <div className="border-8 border-black p-12 lg:p-24 bg-white shadow-hard-xl flex flex-col items-center text-center space-y-12 rotate-[-1deg]">
                        <h2 className="text-6xl lg:text-9xl font-heading font-black uppercase tracking-tighter leading-none">
                            READY TO <span className="text-primary italic">UPGRADE</span>?
                        </h2>
                        <p className="text-3xl font-bold max-w-3xl leading-tight">
                            We provide the skills, the confidence, and the connections for young people in Assam to work with the world&apos;s most prestigious airline and hotel brands.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                            <Button variant="accent" size="lg" className="w-full text-3xl h-24 shadow-hard">ENROLL NOW</Button>
                            <Button variant="outline" size="lg" className="w-full text-3xl h-24 hover:bg-black hover:text-white transition-colors">OUR MISSION</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
