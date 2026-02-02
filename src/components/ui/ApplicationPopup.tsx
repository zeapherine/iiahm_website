"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ApplicationPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Glitch Overlay Background */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Retro Window */}
            <div className="relative w-full max-w-lg bg-white border-4 border-black shadow-hard-xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Title Bar */}
                <div className="bg-accent border-b-4 border-black p-3 flex justify-between items-center">
                    <h3 className="font-heading text-lg font-black uppercase tracking-tighter text-black">
                        [Admission_Portal_v1.0]
                    </h3>
                    <button
                        onClick={onClose}
                        className="bg-hot-pink border-2 border-black p-1 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white"
                    >
                        <X className="w-5 h-5 font-bold" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="font-heading text-sm font-bold uppercase block">Pilot Name</label>
                            <input
                                type="text"
                                placeholder="ENTER FULL NAME"
                                className="w-full h-12 bg-white border-2 border-black px-4 font-mono focus:bg-neon-green outline-none transition-colors placeholder:text-black/40"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-heading text-sm font-bold uppercase block">Contact Frequency</label>
                            <input
                                type="email"
                                placeholder="EMAIL@EXAMPLE.COM"
                                className="w-full h-12 bg-white border-2 border-black px-4 font-mono focus:bg-neon-green outline-none transition-colors placeholder:text-black/40"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-heading text-sm font-bold uppercase block">Selected Mission</label>
                            <select className="w-full h-12 bg-white border-2 border-black px-4 font-mono focus:bg-neon-green outline-none appearance-none transition-colors">
                                <option>AVIATION & AIR HOSTESS</option>
                                <option>HOTEL MANAGEMENT</option>
                                <option>HOSPITALITY MANAGEMENT</option>
                                <option>GLOBAL CUSTOMER SERVICE</option>
                            </select>
                        </div>
                    </div>

                    <Button
                        variant="neon"
                        size="lg"
                        className="w-full text-xl"
                        onClick={() => {
                            alert("APPLICATION LOGGED!");
                            onClose();
                        }}
                    >
                        LAUNCH APPLICATION
                    </Button>

                    <p className="text-[10px] font-mono text-center text-black/60">
                        SYSTEM MESSAGE: ENSURE ALL DATA FIELDS ARE ACCURATE BEFORE MISSION LAUNCH.
                    </p>
                </div>
            </div>
        </div>
    );
}
