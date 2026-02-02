"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ChevronRight, Globe } from "lucide-react";

export default function Footer() {
    const [year, setYear] = useState(2025); // Default fallback

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-primary/95 dark:bg-primary-dark text-slate-300 py-20 relative overflow-hidden transition-colors">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03]">
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-semibold text-white tracking-tight">
                            IIA<span className="text-accent">H</span>M
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Building global careers in Aviation & Hospitality. The premier institute for professional excellence in Northeast India.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/iiahm_official" },
                                { Icon: Linkedin, href: "https://linkedin.com/school/iiahm" },
                                { Icon: Twitter, href: "https://twitter.com/iiahm" },
                                { Icon: Globe, href: "https://facebook.com/iiahm" } // Using Globe as fallback for FB if Lucide Facebook is missing or different
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-white/5 rounded-full text-slate-400 transition-all duration-300 hover:bg-accent hover:text-white"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Career Placement", href: "/impact" },
                                { name: "Student Stories", href: "/about" },
                                { name: "About Us", href: "/about" },
                                { name: "Contact", href: "/contact" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-slate-400 hover:text-accent transition-colors flex items-center text-sm">
                                        <ChevronRight className="w-3 h-3 mr-2 text-white/20" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold text-lg">Programs</h3>
                        <ul className="space-y-3">
                            {[
                                "Aviation & Hostess",
                                "Hotel Management",
                                "Cabin Crew Services",
                                "Hospitality Management"
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href="/programs" className="text-slate-400 hover:text-accent transition-colors flex items-center text-sm">
                                        <ChevronRight className="w-3 h-3 mr-2 text-white/20" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold text-lg">Contact Us</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                                <span className="text-slate-400">Kokrajhar, Bodoland Territorial Region (BTR), Assam, India</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 shrink-0 text-accent" />
                                <span className="text-slate-400">+91 XXX XXX XXXX</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 shrink-0 text-accent" />
                                <span className="text-slate-400">info@iiahm.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs">
                        © {year} IIAHM. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
