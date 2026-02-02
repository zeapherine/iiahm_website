"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ApplicationPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay Background */}
            <div
                className="absolute inset-0 bg-noir/40 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Premium Window */}
            <div className="relative w-full max-w-lg bg-white border-2 border-noir shadow-glow overflow-hidden animate-in fade-in zoom-in duration-300 rounded-[var(--radius-card)]">
                {/* Title Bar */}
                <div className="bg-noir border-b border-white/10 p-4 flex justify-between items-center">
                    <h3 className="font-heading text-sm font-black uppercase tracking-[0.2em] text-white">
                        IIAHM // ADMISSION_GATEWAY
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-primary transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-10 space-y-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="font-heading text-[10px] font-black uppercase tracking-[0.2em] text-noir/40 block">Candidate Name</label>
                            <input
                                type="text"
                                placeholder="ENTER FULL NAME"
                                className="w-full h-14 bg-smoke border border-noir/10 px-6 font-bold focus:border-primary focus:bg-white outline-none transition-all placeholder:text-noir/20 rounded-[var(--radius-btn)]"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-heading text-[10px] font-black uppercase tracking-[0.2em] text-noir/40 block">Contact Email</label>
                            <input
                                type="email"
                                placeholder="EMAIL@EXAMPLE.COM"
                                className="w-full h-14 bg-smoke border border-noir/10 px-6 font-bold focus:border-primary focus:bg-white outline-none transition-all placeholder:text-noir/20 rounded-[var(--radius-btn)]"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-heading text-[10px] font-black uppercase tracking-[0.2em] text-noir/40 block">Training Program</label>
                            <select className="w-full h-14 bg-smoke border border-noir/10 px-6 font-bold focus:border-primary focus:bg-white outline-none appearance-none transition-all rounded-[var(--radius-btn)]">
                                <option>AIR_HOSTESS_&_AVIATION</option>
                                <option>HOTEL_MANAGEMENT</option>
                                <option>HOSPITALITY_MANAGEMENT</option>
                                <option>GLOBAL_CUSTOMER_SERVICE</option>
                            </select>
                        </div>
                    </div>

                    <Button
                        variant="accent"
                        size="lg"
                        magnetic
                        className="w-full text-xl h-24"
                        onClick={() => {
                            alert("ENROLLMENT REQUEST LOGGED!");
                            onClose();
                        }}
                    >
                        SUBMIT_ENROLLMENT
                    </Button>

                    <p className="font-mono text-[9px] font-black uppercase tracking-[0.3em] text-center text-noir/30">
                        OFFICIAL_IIAHM_SECURE_PORTAL // 2025_REF
                    </p>
                </div>
            </div>
        </div>
    );
}
