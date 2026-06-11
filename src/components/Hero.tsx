"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HiOutlinePlay } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const slides = [
    {
        number: "01.",
        titleTop: "Data",
        titleBottom: "Revolution",
        description: "Transforming statistical data processing and distribution with scalable web and Android solutions.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000", // Sunny bright beach
        video: "ScMzIvxBSi4"
    },
    {
        number: "02.",
        titleTop: "Logic",
        titleBottom: "Engine",
        description: "Deep learning sentiment analysis system powered by advanced NLP, optimized for high-volume text classification.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000", // Foggy/moody beach
        video: "jfKfPfyJRdk"
    },
    {
        number: "03.",
        titleTop: "Predictive",
        titleBottom: "Core",
        description: "Machine learning architecture for early detection and healthcare outcome prediction with extensive feature engineering.",
        image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=80&w=2000", // Sunset vibrant beach
        video: "5JN720K8F-c"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [isMissionView, setIsMissionView] = useState(false);

    const { scrollY } = useScroll();
    const ySubject = useTransform(scrollY, [0, 800], [0, 180]);

    const nextSlide = useCallback(() => {
        if (!isMissionView) {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }
    }, [isMissionView]);

    const prevSlide = useCallback(() => {
        if (!isMissionView) {
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        }
    }, [isMissionView]);

    useEffect(() => {
        if (!isMissionView) {
            const timer = setInterval(nextSlide, 6000);
            return () => clearInterval(timer);
        }
    }, [nextSlide, isMissionView]);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-[#111] font-sans">
            {/* Vertical Grid Lines */}
            <div className={`absolute inset-0 z-10 pointer-events-none flex justify-between px-[5%] md:px-[10%] transition-opacity duration-1000 ${isMissionView ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-[1px] h-full bg-white/10" />
                <div className="w-[1px] h-full bg-white/10 hidden md:block" />
                <div className="w-[1px] h-full bg-white/10 hidden md:block" />
                <div className="w-[1px] h-full bg-white/10" />
            </div>

            {/* Background Layer (z-0 to z-10) */}
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, filter: "blur(40px)", scaleX: 1.2 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scaleX: 1 }}
                    exit={{ opacity: 0, filter: "blur(40px)", scaleX: 0.8 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full z-0"
                >
                    {/* Background Image / Video */}
                    <div className="absolute inset-0 w-full h-full bg-black">
                        {/* Background Image fades out when video is active */}
                        <div className={`absolute inset-0 transition-opacity duration-1000 ${isMissionView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <Image
                                src={slides[current].image}
                                alt={`${slides[current].titleTop} ${slides[current].titleBottom}`}
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                        {isMissionView && (
                            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black z-10">
                                <iframe
                                    src={`https://www.youtube.com/embed/${slides[current].video}?autoplay=1&mute=1&loop=1&playlist=${slides[current].video}&controls=0&showinfo=0&modestbranding=1&playsinline=1`}
                                    className="absolute inset-0 w-[150vw] h-[150vh] -top-[25vh] -left-[25vw] pointer-events-none opacity-90"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    title="Background Video"
                                    frameBorder="0"
                                />
                            </div>
                        )}

                        {/* Dark Gradient Overlay for text contrast on the left */}
                        <div className={`absolute inset-0 transition-opacity duration-1000 mix-blend-multiply z-20 ${isMissionView ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-gradient-to-r from-black/80 via-black/40 to-transparent'}`} />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Subtle Volumetric Glow behind the subject - hidden in mission view */}
            <div className={`absolute right-[5%] md:right-[15%] bottom-0 w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full bg-cyan-500/20 blur-[100px] md:blur-[130px] pointer-events-none z-20 mix-blend-screen transition-opacity duration-500 ${isMissionView ? 'opacity-0' : 'opacity-70 animate-pulse duration-[5000ms]'}`} />

            {/* Foreground Subject (z-30) with Parallax scroll - fades out in mission view */}
            <motion.div
                style={{ y: ySubject }}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: isMissionView ? 0 : 1,
                    scale: isMissionView ? 0.95 : 1
                }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-[10vh] md:-bottom-[20vh] right-0 md:right-[10%] z-30 pointer-events-none h-[65vh] md:h-[105vh] w-auto flex items-end"
            >
                <div className="relative h-full w-auto aspect-[800/1050]">
                    <Image
                        src="/subject.png"
                        alt="Satria Nugraha Saputra"
                        fill
                        priority
                        sizes="(max-width: 768px) 70vw, 40vw"
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </motion.div>

            {/* Text Typography Layer (z-40) */}
            <AnimatePresence initial={false} mode="wait">
                {!isMissionView && (
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 z-40 h-full w-full flex items-center px-[5%] md:px-[10%] pointer-events-none"
                    >
                        <div className="w-full max-w-7xl flex pointer-events-auto">
                            {/* Left Side: Typography */}
                            <div className="flex flex-col w-full md:w-1/2 pt-20">
                                {/* Personal Branding Signature */}
                                <div className="mb-8 flex items-center gap-4 hidden md:flex">
                                    <div className="w-8 h-[2px] bg-accent" />
                                    <p className="font-sans text-sm text-white tracking-[0.2em] uppercase font-bold drop-shadow-md">
                                        Satria Nugraha Saputra
                                    </p>
                                    <p className="font-sans text-xs text-white/90 tracking-widest uppercase drop-shadow-md">
                                        — Building scalable systems and data-driven applications
                                    </p>
                                </div>

                                <div>
                                    <h1 className="text-[18vw] md:text-[8vw] font-display font-black leading-[0.8] tracking-tighter text-left drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                                        <span
                                            className="block text-transparent relative z-10"
                                            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                                        >
                                            {slides[current].titleTop}
                                        </span>
                                        <span className="block text-white relative z-20 -mt-2 md:-mt-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                                            {slides[current].titleBottom}
                                        </span>
                                    </h1>
                                </div>

                                <div className="flex items-center gap-8 mt-8">
                                    <span className="font-display font-black text-[60px] md:text-[80px] text-white/40 leading-none tracking-tighter">
                                        {slides[current].number}
                                    </span>
                                    <p className="text-white/90 font-sans text-sm md:text-base max-w-[280px] leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {slides[current].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Navigation Bar (z-50) */}
            <div className="absolute bottom-12 left-0 w-full z-50 px-[5%] md:px-[10%] flex justify-between items-center text-white text-xs font-semibold tracking-[0.2em] uppercase">

                {/* Mission View Toggles */}
                <AnimatePresence mode="wait">
                    {isMissionView ? (
                        <motion.div
                            key="exit-mission"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="w-full flex justify-center"
                        >
                            <button
                                onClick={() => setIsMissionView(false)}
                                className="flex items-center gap-3 group hover:bg-accent transition-colors px-6 py-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 hover:border-transparent text-white font-bold tracking-widest shadow-2xl"
                            >
                                <HiX size={20} />
                                <span>EXIT MISSION</span>
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="nav-mission"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex justify-between items-center"
                        >
                            {/* Left: Copyright */}
                            <div className="hidden md:flex items-center w-32">
                                <span className="px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
                                    © 2026
                                </span>
                            </div>

                            {/* Center: Prev/Next & Progress */}
                            <div className="flex-1 flex items-center justify-center gap-6 md:gap-12 pointer-events-auto">
                                <button
                                    onClick={prevSlide}
                                    className="px-6 py-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-white hover:text-black hover:border-transparent transition-all"
                                >
                                    PREV
                                </button>

                                {/* Progress Line */}
                                <div className="w-48 md:w-80 h-[2px] bg-white/20 relative overflow-hidden rounded-full backdrop-blur-sm hidden sm:block">
                                    <motion.div
                                        key={current}
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 6, ease: "linear" }}
                                        className="absolute top-0 left-0 h-full bg-white"
                                    />
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="px-6 py-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-white hover:text-black hover:border-transparent transition-all"
                                >
                                    NEXT
                                </button>
                            </div>

                            {/* Right: Watch Video & Social */}
                            {/* <div className="hidden lg:flex items-center gap-8 justify-end w-48 pointer-events-auto">
                                <button
                                    onClick={() => setIsMissionView(true)}
                                    className="flex items-center gap-3 group hover:text-accent transition-colors px-5 py-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:border-accent"
                                >
                                    <HiOutlinePlay size={16} />
                                    <span>VIEW MISSION</span>
                                </button>

                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center shrink-0 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent hover:border-transparent hover:text-white transition-all">
                                    <FaInstagram size={18} />
                                </a>
                            </div> */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
