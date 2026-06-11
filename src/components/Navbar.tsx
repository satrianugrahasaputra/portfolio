"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Archive", href: "#projects" },
    { name: "Expertise", href: "#tech" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-[5%] md:px-[10%] py-6 bg-black/20 backdrop-blur-xl border-b border-white/5 flex justify-between items-center text-white font-sans transition-all duration-300">
                {/* Logo */}
                <a href="#home" className="font-display text-4xl font-black tracking-tighter">
                    SNS<span>.</span>
                </a>

                {/* Center Links */}
                <div className="hidden md:flex gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[15px] font-medium tracking-wide hover:opacity-70 transition-opacity capitalize"
                        >
                            {link.name.toLowerCase()}
                        </a>
                    ))}
                </div>

                {/* Hamburger Menu */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex flex-col gap-[6px] group z-50 p-2"
                >
                    <div className="w-8 h-[1px] bg-white transition-all" />
                    <div className="w-8 h-[1px] bg-white transition-all group-hover:w-6 group-hover:ml-auto" />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-white z-[110] flex flex-col p-12 md:p-24"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="text-black font-mono text-xs tracking-widest uppercase">
                                [ MENU_SYSTEM ]
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-black font-display text-4xl font-light hover:rotate-90 transition-transform"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-12">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="text-black font-display text-6xl md:text-8xl font-black tracking-tighter hover:text-accent transition-colors uppercase leading-none"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between gap-8">
                            <div className="space-y-2">
                                <span className="block text-black/40 font-mono text-[10px] tracking-widest uppercase">Location</span>
                                <span className="text-black font-mono text-xs uppercase">Central_Java, Indonesia</span>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-black/40 font-mono text-[10px] tracking-widest uppercase">Social</span>
                                <div className="flex gap-8">
                                    <a href="https://www.linkedin.com/in/satria-nugraha-saputra-647807179/" className="text-black font-mono text-xs uppercase hover:underline">LinkedIn</a>
                                    <a href="https://github.com/satrians49" className="text-black font-mono text-xs uppercase hover:underline">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
