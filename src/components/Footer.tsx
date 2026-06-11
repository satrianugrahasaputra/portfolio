"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-20 bg-transparent border-t border-zinc-100 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <a href="#home" className="font-heading text-4xl font-black text-zinc-900 tracking-tighter">
                            SNS<span>.</span>
                        </a>
                        <p className="text-zinc-500 font-medium text-sm">
                            © {new Date().getFullYear()} Satria Nugraha Saputra. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-4">
                            <p className="text-zinc-900 font-heading font-bold uppercase text-xs tracking-widest">Navigation</p>
                            <a href="#home" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">Home</a>
                            <a href="#projects" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">Projects</a>
                            <a href="#tech" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">Skills</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-zinc-900 font-heading font-bold uppercase text-xs tracking-widest">Social</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all shadow-sm"><FaGithub size={18} /></a>
                                <a href="https://www.linkedin.com/" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all shadow-sm"><FaLinkedin size={18} /></a>
                                <a href="https://twitter.com/" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all shadow-sm"><FaTwitter size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-20 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                        Handcrafted with passion & Precision
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Privacy Policy</a>
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
