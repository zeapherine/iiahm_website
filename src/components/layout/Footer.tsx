import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-noir text-white pt-32 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
                    {/* Brand Section */}
                    <div className="space-y-10">
                        <h2 className="text-4xl font-heading font-black tracking-tighter uppercase leading-none">
                            IIA<span className="text-primary italic">H</span>M
                        </h2>
                        <p className="text-lg font-bold leading-snug text-white/60 uppercase tracking-tight border-l-4 border-primary pl-6">
                            International Institute of Aviation and Hotel Management.
                            Building global missions for the talented youth of Northeast India.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="p-4 bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-glow group"
                                >
                                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40">MISSION_MAP</span>
                        </div>
                        <ul className="space-y-4">
                            {["Career Placement", "Student Stories", "BTR Empowerment", "Affiliations"].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-lg font-bold uppercase tracking-tight text-white/60 hover:text-primary transition-all flex items-center group">
                                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40">SPECIAL_OPS</span>
                        </div>
                        <ul className="space-y-4">
                            {["Aviation & Hostess", "Hotel Management", "Cabin Crew Services", "Hospitality Management"].map((link, i) => (
                                <li key={i}>
                                    <Link href="/programs" className="text-lg font-bold uppercase tracking-tight text-white/60 hover:text-primary transition-all flex items-center group">
                                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div className="bg-white/5 border border-white/10 p-10 relative group hover:border-primary/50 transition-all duration-500 rounded-[var(--radius-card)]">
                            <div className="absolute -top-3 -left-3 bg-primary text-noir px-3 py-1 text-[10px] font-black tracking-widest uppercase">
                                HQ_COMMS
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-5 h-5 shrink-0 mt-1 text-primary" />
                                    <span className="font-bold text-lg leading-tight uppercase tracking-tight text-white/80">Kokrajhar, Bodoland Territorial Region (BTR), Assam, India</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-5 h-5 shrink-0 text-primary" />
                                    <span className="font-bold text-lg uppercase tracking-tight text-white/80">+91 XXX XXX XXXX</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="w-5 h-5 shrink-0 text-primary" />
                                    <span className="font-bold text-lg uppercase tracking-tight text-white/80 break-all">info@iiahm.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/30 text-center lg:text-left">
                        © {currentYear} IIAHM_GLOBAL_OPS. ALL_RIGHTS_RESERVED. [V.02_NOIR_LUXE]
                    </p>
                    <div className="flex gap-10">
                        <Link href="#" className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-primary transition-colors">PRIVACY_PROTOCOL</Link>
                        <Link href="#" className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-primary transition-colors">TERMS_OF_ENGAGEMENT</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
