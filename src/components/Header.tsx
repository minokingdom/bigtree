"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white tracking-tight group">
                    BigTree<span className="text-gold-500 group-hover:text-gold-400 transition-colors">.</span>
                </Link>

                <nav className="hidden md:flex gap-8">
                    {["Features", "Urgency", "Specs", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-300 hover:text-white hover:text-glow transition-all font-medium text-sm tracking-wide uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <Link href="#contact">
                    <button className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-6 py-2.5 rounded-full font-bold transition-all text-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                        상담 신청
                    </button>
                </Link>
            </div>
        </motion.header>
    );
}
