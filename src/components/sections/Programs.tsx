import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Plane, Building2, Users } from "lucide-react";

const programs = [
    {
        title: "Aviation & Air Hostess",
        description: "Master the art of cabin crew services, grooming standards, and safety protocols with our world-class trainers.",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop",
        color: "bg-neon-green",
        size: "large",
    },
    {
        title: "Hotel Management",
        description: "Comprehensive training in front office, housekeeping, and F&B management.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop",
        color: "bg-accent",
        size: "normal",
    },
    {
        title: "Hospitality & Tourism",
        description: "Learn the dynamics of global tourism and customer relations.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop",
        color: "bg-hot-pink",
        size: "normal",
    },
];

export function Programs() {
    return (
        <section className="container mx-auto px-4 py-32 bg-white">
            <div className="mb-20 space-y-4">
                <div className="inline-block bg-black text-white px-6 py-2 font-heading font-black uppercase text-xl rotate-[-1deg]">
                    SELECT YOUR MISSION
                </div>
                <h2 className="font-heading text-6xl font-black uppercase leading-[0.8] tracking-tighter text-black md:text-9xl">
                    CORE <span className="text-primary">PROGRAMS</span>
                </h2>
            </div>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                {programs.map((program, idx) => (
                    <Card
                        key={idx}
                        className={`group relative border-4 border-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-hard-xl ${program.size === "large" ? "lg:col-span-8 min-h-[500px]" : "lg:col-span-4 min-h-[500px]"
                            }`}
                    >
                        <div className="absolute top-4 right-4 z-20 bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase">
                            MOD-0{idx + 1}
                        </div>

                        {/* Background Image Container */}
                        <div className="relative h-64 border-b-4 border-black overflow-hidden bg-black">
                            <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 grayscale"
                            />
                            <div className={cn("absolute inset-0 opacity-40 mix-blend-multiply", program.color)} />
                        </div>

                        <div className={cn("flex-1 p-8 space-y-6", program.color)}>
                            <div className="inline-flex h-16 w-16 items-center justify-center border-4 border-black bg-white shadow-hard">
                                <program.icon className="h-10 w-10 text-black" />
                            </div>

                            <CardTitle className="font-heading text-4xl font-black uppercase tracking-tighter text-black leading-none">
                                {program.title}
                            </CardTitle>

                            <p className="text-xl font-bold text-black border-l-4 border-black pl-4">
                                {program.description}
                            </p>

                            <Button
                                variant="outline"
                                className="w-full bg-white hover:bg-black hover:text-white transition-colors text-lg"
                            >
                                VIEW SYLLABUS <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>
                    </Card>
                ))}

                {/* Decorative filler */}
                <div className="lg:col-span-12 bg-black text-white p-12 border-4 border-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-hard-lg">
                    <div className="space-y-4">
                        <h3 className="text-4xl font-heading font-black uppercase text-neon-green">Ready to Fly?</h3>
                        <p className="text-xl font-bold max-w-xl">Join 1000+ students who transformed their lives through global careers.</p>
                    </div>
                    <Button variant="accent" size="lg" className="text-2xl h-18 px-12">
                        START APPLICATION
                    </Button>
                </div>
            </div>
        </section>
    );
}
