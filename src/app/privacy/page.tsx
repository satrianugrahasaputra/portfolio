"use client";

import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f0fdfa] via-white to-[#ecfeff] text-black py-20 px-6 font-sans relative overflow-hidden">
            {/* Background ambient glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-3xl relative z-10">
                {/* Back button */}
                <Link href="/" passHref legacyBehavior>
                    <motion.a
                        whileHover={{ x: -4 }}
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-black font-semibold text-xs tracking-wider uppercase mb-12 cursor-pointer transition-colors"
                    >
                        <HiArrowLeft size={16} />
                        Back to Portfolio
                    </motion.a>
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-zinc-500 text-sm">Last updated: June 26, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700 leading-relaxed font-light font-sans">
                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">1. Information We Collect</h2>
                        <p>
                            This website is a personal portfolio showcasing professional work. We do not use cookies or tracking mechanisms to collect personal details automatically. The only personal data we receive is the information you choose to submit voluntarily via our contact form (such as your name, email address, and message content).
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">2. How We Use Your Information</h2>
                        <p>
                            Any information submitted through the contact form is used strictly to respond to your inquiries, discuss projects, or coordinate professional collaboration. Your data is never shared with third parties, sold, or used for commercial marketing purposes.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">3. Security</h2>
                        <p>
                            We prioritize the security of any information you share. While no transmission method over the Internet is 100% secure, we implement industry-standard practices to protect your data from unauthorized access or disclosure.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">4. Third-Party Links</h2>
                        <p>
                            Our portfolio contains links to external websites (e.g., GitHub, LinkedIn, and live project deployments). We are not responsible for the privacy practices or content of these external platforms, and we encourage you to read their respective privacy policies.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">5. Contact Information</h2>
                        <p>
                            If you have questions regarding this Privacy Policy or wish to request the deletion of any messages you have sent, please feel free to reach out via the contact form on the home page.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
