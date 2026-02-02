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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white border-b-4 border-black shadow-hard py-3"
                        : "bg-transparent py-5"
                )}
            >
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-3xl font-heading font-black text-black tracking-tighter uppercase"
                    >
                        IAN<span className="text-primary">.</span>INST
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-widest transition-all hover:text-primary hover:translate-y-[-1px]",
                                    pathname === link.href ? "text-primary border-b-4 border-primary" : "text-black"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            variant="accent"
                            size="sm"
                            className="hidden lg:flex"
                            onClick={() => setShowPopup(true)}
                        >
                            APPLY NOW <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black p-2 border-2 border-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            className="fixed inset-0 z-40 md:hidden bg-accent border-l-4 border-black"
                        >
                            <div className="flex flex-col h-full p-10 justify-center space-y-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 p-2 border-2 border-black"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-5xl font-heading font-black uppercase tracking-tighter transition-colors",
                                            pathname === link.href ? "text-primary" : "text-black"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button
                                    variant="default"
                                    className="w-full text-2xl h-16 mt-10"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setShowPopup(true);
                                    }}
                                >
                                    START MISSION
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
