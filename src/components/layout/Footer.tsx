import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t-8 border-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-heading font-black tracking-tighter uppercase leading-none">
                            IAN<span className="text-primary">.</span>INST
                        </h2>
                        <p className="text-lg font-bold leading-tight border-l-4 border-neon-green pl-4">
                            Transforming lives through world-class vocational training in Northeast India.
                            Building global careers for the talented youth of BTR.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="bg-white p-3 border-4 border-black text-black shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard-lg transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h3 className="bg-hot-pink text-black px-4 py-1 font-heading font-black uppercase text-xl inline-block rotate-[-1deg] border-2 border-black">
                            MISSION_MAP
                        </h3>
                        <ul className="space-y-4 font-heading font-black text-lg uppercase tracking-wider">
                            {["Career Placement", "Student Stories", "BTR Empowerment", "Affiliations"].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="hover:text-neon-green transition-colors flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white" /> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="space-y-8">
                        <h3 className="bg-accent text-black px-4 py-1 font-heading font-black uppercase text-xl inline-block rotate-[1deg] border-2 border-black">
                            SPECIAL_OPS
                        </h3>
                        <ul className="space-y-4 font-heading font-black text-lg uppercase tracking-wider">
                            {["Aviation & Hostess", "Hotel Management", "Cabin Crew Services", "Hospitality Management"].map((link, i) => (
                                <li key={i}>
                                    <Link href="/programs" className="hover:text-hot-pink transition-colors flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white" /> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 bg-neon-green text-black p-8 border-4 border-black shadow-hard rotate-[-1deg]">
                        <h3 className="font-heading font-black text-2xl uppercase border-b-2 border-black pb-2">HQ_COMMS</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-3 font-bold">
                                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                                <span className="leading-tight">Kokrajhar, Bodoland Territorial Region (BTR), Assam, India</span>
                            </div>
                            <div className="flex items-center space-x-3 font-bold">
                                <Phone className="w-5 h-5 shrink-0" />
                                <span>+91 XXX XXX XXXX</span>
                            </div>
                            <div className="flex items-center space-x-3 font-bold">
                                <Mail className="w-5 h-5 shrink-0" />
                                <span className="break-all">info@ianinstitute.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t-4 border-white/20 flex flex-col md:flex-row justify-between items-center text-xs font-mono font-bold uppercase tracking-widest opacity-60">
                    <p>© {currentYear} IAN_INST_GLOBAL_OPS. ALL_RIGHTS_RESERVED.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</Link>
                        <Link href="#" className="hover:text-white transition-colors">TERMS_OF_ENGAGEMENT</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
