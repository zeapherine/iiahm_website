"use client";

import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ApplicationPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay Background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Premium Admission Portal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100"
                    >
                        {/* Status Header */}
                        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-primary">Admission Enquiry</h3>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Academic Year 2025-26</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Portal Form */}
                        <div className="p-8 md:p-10 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block ml-1">Candidate Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full h-12 bg-white border border-slate-200 px-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91"
                                        className="w-full h-12 bg-white border border-slate-200 px-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block ml-1">Academic Interest</label>
                                <select className="w-full h-12 bg-white border border-slate-200 px-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-xl appearance-none cursor-pointer">
                                    <option>Aviation & Air Hostess Diploma</option>
                                    <option>Hotel Management Diploma</option>
                                    <option>Hospitality & Tourism Certificate</option>
                                    <option>Corporate Desk Operations</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="w-full rounded-xl"
                                    onClick={() => {
                                        alert("Thank you. Our admission counselor will contact you within 24 hours.");
                                        onClose();
                                    }}
                                >
                                    Proceed with Enquiry
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                                    Your data is secure and handled by IIAHM Admissions.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
