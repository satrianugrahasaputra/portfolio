"use client";

import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

export default function TermsOfService() {
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
                        Terms of Service
                    </h1>
                    <p className="text-zinc-500 text-sm">Last updated: June 26, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700 leading-relaxed font-light font-sans">
                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and browsing this portfolio website, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you should discontinue using the site.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">2. Intellectual Property Rights</h2>
                        <p>
                            All design elements, original code, graphics, copywriting, and project descriptions showcased on this website are the intellectual property of Satria Nugraha Saputra unless stated otherwise. Personal, non-commercial use of the portfolio content is permitted. Copying, republishing, or commercially exploiting any assets without explicit written authorization is strictly prohibited.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">3. Disclaimer</h2>
                        <p>
                            The information and project descriptions provided on this website are for general informational purposes only. While we aim to maintain correct and up-to-date information, we make no representations or warranties of any kind regarding the completeness, accuracy, or reliability of the projects, external links, or materials listed.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">4. Limitations of Liability</h2>
                        <p>
                            In no event shall the owner of this portfolio be held liable for any damages (including, without limitation, direct, indirect, special, or consequential damages) arising from the use of, or inability to use, this website or the materials contained within it.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display text-xl font-bold text-zinc-900">5. Modifications of Terms</h2>
                        <p>
                            We reserve the right to revise or update these Terms of Service at any time without prior notice. By continuing to use the website after changes are posted, you accept the modified terms.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
