"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "NGO Impact", href: "/impact" },
    { name: "About Us", href: "/about" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on navigation
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-subtle py-4"
                        : "bg-white/50 backdrop-blur-sm py-5" // Added subtle background to default state to prevent total transparency clashes
                )}
            >
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                    >
                        <span className={cn(
                            "text-2xl font-heading font-black tracking-tight",
                            isScrolled ? "text-slate-900" : "text-slate-900"
                        )}>
                            IIAHM
                        </span>
                        <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium tracking-wide transition-all relative py-1",
                                    pathname === link.href
                                        ? "text-accent font-semibold"
                                        : "text-slate-600 hover:text-slate-900"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent"
                                    />
                                )}
                            </Link>
                        ))}
                        <Button
                            variant="default"
                            size="sm"
                            className="hidden lg:flex px-6 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
                            onClick={() => setShowPopup(true)}
                        >
                            Enquire Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-800 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 z-40 top-[70px] md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
                        >
                            <div className="flex flex-col p-8 space-y-6">
                                {navLinks.map((link, i) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-heading font-medium text-slate-800 hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button
                                    variant="default"
                                    className="w-full h-12 text-lg mt-8 rounded-full"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setShowPopup(true);
                                    }}
                                >
                                    Start Application
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </>
    );
}
