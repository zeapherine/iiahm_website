import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 filter grayscale contrast-150">
                <Image
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2940&auto=format&fit=crop"
                    alt="Students looking forward"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="inline-block bg-hot-pink text-white border-2 border-black px-4 py-1 mb-8 rotate-[-2deg] font-bold uppercase tracking-tighter animate-bounce">
                    New Era of Training
                </div>

                <h1 className="font-heading text-6xl font-black uppercase leading-[0.8] tracking-widest text-white md:text-[10rem] lg:text-[13rem] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                    SKIES<br />
                    <span className="text-accent">LIMIT</span><span className="text-hot-pink">!</span>
                </h1>

                <div className="mt-12 flex flex-col items-center gap-8">
                    <p className="max-w-xl font-heading text-2xl font-black uppercase tracking-tighter text-white bg-black/80 px-4 py-2 border-2 border-white">
                        IAN INSTITUTE: KOKRAJHAR TO THE WORLD
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <Button
                            variant="accent"
                            size="lg"
                            className="text-2xl h-16"
                        >
                            ENROLL NOW <ArrowRight className="ml-2 h-8 w-8" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-2xl h-16 bg-white text-black"
                        >
                            OUR MISSION
                        </Button>
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <div className="absolute bottom-0 w-full bg-neon-green border-t-4 border-black py-4 overflow-hidden whitespace-nowrap z-20">
                <div className="flex animate-marquee">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-4xl font-heading font-black uppercase text-black mx-10 flex items-center">
                            ENROLL NOW • TRANSFORMING LIVES • BTR TO THE WORLD • AVIATION • HOSPITALITY •
                        </span>
                    ))}
                </div>
            </div>

            {/* Side Stamps */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:block rotate-[-90deg]">
                <div className="bg-white border-2 border-black px-4 py-1 font-mono text-xs uppercase font-bold text-black">
                    Est. 2017 // Bodoland Region
                </div>
            </div>
        </section>
    );
}
