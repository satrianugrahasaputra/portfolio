"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HiPaperAirplane } from "react-icons/hi";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formsubmit.co/ajax/satrians49@gmail.com", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });
            
            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message. Please try again.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setIsSubmitted(false), 4000);
        }
    };

    return (
        <section id="contact" className="py-24 pb-48 relative" ref={ref}>
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                >
                    {/* Left: Contact Info */}
                    <motion.div variants={fadeInUp} className="text-left">
                        <div className="font-sans text-accent text-sm font-bold mb-4 tracking-[0.2em] uppercase">
                            Get In Touch
                        </div>
                        <h2 className="font-display text-5xl md:text-6xl font-black mb-6 tracking-tighter text-black">
                            Start a <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Dialogue</span>
                        </h2>
                        <p className="text-zinc-600 font-sans text-lg leading-relaxed font-light mb-12 max-w-lg">
                            Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: "Email", value: "satrians49@gmail.com" },
                                { label: "Phone", value: "+62 858-7885-1613" },
                                { label: "Location", value: "Jawa Tengah, Indonesia" },
                                { label: "Availability", value: "Open for Opportunities" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-1 border-l-2 border-black/10 pl-6 py-2">
                                    <span className="font-sans text-[10px] text-zinc-400 font-bold tracking-widest uppercase">{item.label}</span>
                                    <span className="font-sans text-base text-black font-medium">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div variants={fadeInUp} className="p-8 md:p-12 bg-white border border-black/5 rounded-3xl shadow-xl relative overflow-hidden">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Success Overlay */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent text-4xl">
                                        <HiPaperAirplane className="-rotate-45" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-black mb-2">Message Sent!</h3>
                                    <p className="font-sans text-sm text-zinc-500">
                                        Thank you for reaching out. I'll get back to you shortly.
                                    </p>
                                </motion.div>
                            )}

                            <div>
                                <label className="block font-sans text-xs font-bold text-black mb-2 uppercase tracking-wider">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Satria Nugraha Saputra"
                                    className="w-full bg-black/[0.02] border border-black/10 rounded-xl focus:border-accent focus:bg-white p-4 font-sans text-sm text-black placeholder:text-zinc-400 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-sans text-xs font-bold text-black mb-2 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="satrians49@gmail.com"
                                    className="w-full bg-black/[0.02] border border-black/10 rounded-xl focus:border-accent focus:bg-white p-4 font-sans text-sm text-black placeholder:text-zinc-400 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-sans text-xs font-bold text-black mb-2 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-black/[0.02] border border-black/10 rounded-xl focus:border-accent focus:bg-white p-4 font-sans text-sm text-black placeholder:text-zinc-400 resize-none transition-all outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-accent/90 text-white p-5 rounded-xl font-sans text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-70 shadow-lg shadow-accent/20"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <HiPaperAirplane className="rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
