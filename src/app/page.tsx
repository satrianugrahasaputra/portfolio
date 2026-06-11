"use client";

import { motion } from "framer-motion";
import { Navbar, Hero, TechStack, Projects, Contact, Footer, ThreeScene, AnimatedBackground, CustomCursor } from "@/components";
import { pageTransition } from "@/lib/animations";

export default function Home() {
    return (
        <motion.main
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className="bg-white text-black"
        >
            <CustomCursor />
            <Navbar />
            
            {/* Hero Section pinned to background */}
            <div className="relative z-0">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <Hero />
                </div>
            </div>
            
            {/* Sections sliding over the Hero with bright frosted glass effect */}
            <div className="relative z-10 bg-gradient-to-br from-[#f0fdfa] via-white to-[#ecfeff] backdrop-blur-3xl shadow-[0_-20px_50px_rgba(6,182,212,0.15)]">
                {/* Smooth gradient fade at the top edge */}
                <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-transparent to-[#f0fdfa] pointer-events-none -translate-y-full" />
                
                <Projects />
                <TechStack />
                <Contact />
                <Footer />
            </div>
        </motion.main>
    );
}
