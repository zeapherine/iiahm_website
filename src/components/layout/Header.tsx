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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md border-b-2 border-noir/10 py-4"
                        : "bg-transparent py-8"
                )}
            >
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-4xl font-heading font-black text-noir tracking-tighter uppercase group"
                    >
                        IIA<span className="text-primary transition-all duration-500 group-hover:tracking-[0.2em]">H</span>M
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group",
                                        pathname === link.href ? "text-primary" : "text-noir"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
                                        pathname === link.href && "w-full"
                                    )} />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button
                                variant="accent"
                                size="sm"
                                magnetic
                                className="hidden lg:flex px-8"
                                onClick={() => setShowPopup(true)}
                            >
                                START ENROLLMENT
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-noir p-2 h-12 w-12 flex items-center justify-center border-2 border-noir hover:bg-noir hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl"
                        >
                            <div className="flex flex-col h-full p-12 justify-center">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-8 right-8 p-3 border-2 border-noir"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                <div className="space-y-10">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "text-6xl font-heading font-black uppercase tracking-tighter block transition-all",
                                                    pathname === link.href ? "text-primary translate-x-4" : "text-noir hover:translate-x-2"
                                                )}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-16"
                                >
                                    <Button
                                        variant="accent"
                                        size="lg"
                                        className="w-full text-2xl h-20"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setShowPopup(true);
                                        }}
                                    >
                                        APPLY NOW
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <ApplicationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </>
    );
}
