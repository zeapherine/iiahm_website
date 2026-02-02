"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ApplicationPopup } from "@/components/ui/ApplicationPopup";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled || isOpen
                        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4 shadow-subtle"
                        : "bg-transparent py-5 border-b border-transparent"
                )}
            >
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                    >
                        <span className={cn(
                            "text-xl md:text-2xl font-heading font-black tracking-tight",
                            "text-foreground"
                        )}>
                            IIAHM
                        </span>
                        <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-heading font-medium tracking-wide transition-all relative py-1",
                                    pathname === link.href
                                        ? "text-accent font-semibold"
                                        : "text-muted-foreground hover:text-foreground"
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
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Button
                                variant="default"
                                size="sm"
                                className="px-6 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all font-semibold"
                                onClick={() => setShowPopup(true)}
                            >
                                Enquire Now
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button - and ThemeToggle for mobile */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            className="text-foreground p-2 relative z-50"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1], // easeOutQuart
                                        staggerChildren: 0.08,
                                        delayChildren: 0.1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    y: -20,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1]
                                    }
                                }
                            }}
                            className="fixed inset-0 z-40 top-0 md:hidden bg-background border-t border-border pt-24"
                        >
                            <div className="flex flex-col p-8 space-y-6">
                                {navLinks.map((link) => (
                                    <motion.div
                                        key={link.name}
                                        variants={{
                                            open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
                                            closed: { opacity: 0, x: -20 }
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-heading font-medium text-foreground hover:text-accent transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={{
                                        open: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                                        closed: { opacity: 0, y: 10 }
                                    }}
                                >
                                    <Button
                                        variant="default"
                                        className="w-full h-12 text-lg mt-8 rounded-full"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setShowPopup(true);
                                        }}
                                    >
                                        Enquire Now
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
