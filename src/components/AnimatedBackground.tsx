"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden z-0 bg-[#fafafa]">
            {/* Base soft warmth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5]" />

            {/* Floating gradient blobs - Soft & Immersive */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #ff2d55 0%, transparent 70%)" }}
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -50, 40, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ background: "radial-gradient(circle, #ff9500 0%, transparent 70%)" }}
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, 40, -60, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #007aff 0%, transparent 70%)" }}
                animate={{
                    x: [0, 30, -40, 0],
                    y: [0, -30, 50, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
            />

            {/* Grid overlay - Softened for bright theme */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Noise texture overlay for premium feel */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
