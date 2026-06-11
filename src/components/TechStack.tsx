"use client";

import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript,
    SiTailwindcss, SiPython, SiDocker, SiPostgresql,
    SiMysql, SiAndroid, SiPandas, SiScikitlearn,
    SiGit, SiJupyter, SiNodedotjs
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend & Mobile",
        skills: [
            { icon: SiReact, name: "React", version: "v18.x" },
            { icon: SiNextdotjs, name: "Next.js", version: "v14.x" },
            { icon: SiTypescript, name: "TypeScript", version: "v5.x" },
            { icon: SiTailwindcss, name: "Tailwind CSS", version: "v3.x" },
            { icon: SiAndroid, name: "Android", version: "Native" },
        ]
    },
    {
        title: "Backend & Systems",
        skills: [
            { icon: SiNodedotjs, name: "Node.js", version: "v20.x" },
            { icon: SiPython, name: "Python", version: "v3.12" },
            { icon: SiPostgresql, name: "PostgreSQL", version: "v16" },
            { icon: SiMysql, name: "MySQL", version: "v8" },
            { icon: SiDocker, name: "Docker", version: "Engine" },
            { icon: SiGit, name: "Git", version: "VCS" },
        ]
    },
    {
        title: "Data & AI",
        skills: [
            { icon: SiPandas, name: "Pandas", version: "Data Proc" },
            { icon: SiScikitlearn, name: "Scikit-learn", version: "ML Models" },
            { icon: SiJupyter, name: "Jupyter", version: "Analysis" },
        ]
    }
];

export default function TechStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="tech" className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-16 max-w-2xl"
                    ref={ref}
                >
                    <div className="font-sans text-accent text-sm font-bold mb-4 tracking-[0.2em] uppercase">
                        Our Expertise
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tighter text-black">
                        Technical Arsenal
                    </h2>
                    <p className="text-zinc-600 font-sans text-base leading-relaxed font-light">
                        Core technologies utilized in building scalable, mission-critical deployments.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                        >
                            <h3 className="font-display text-xl font-bold text-black mb-6 border-b border-black/10 pb-4">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {category.skills.map((tech, techIdx) => (
                                    <TechModule key={techIdx} tech={tech} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TechModule({ tech }: { tech: { icon: any, name: string, version: string } }) {
    const Icon = tech.icon;

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3, scale: 1.02 }}
            className="p-4 bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-md hover:border-accent/30 flex flex-col gap-3 group transition-all duration-300"
        >
            <div className="p-2 bg-black/5 rounded-lg group-hover:bg-accent/10 transition-colors w-fit">
                <Icon className="text-2xl text-black/60 group-hover:text-accent transition-colors" />
            </div>

            <div>
                <h4 className="font-sans font-bold text-black tracking-tight text-sm group-hover:text-accent transition-colors">
                    {tech.name}
                </h4>
                <span className="font-sans text-[10px] text-black/40 font-medium block mt-1">
                    {tech.version}
                </span>
            </div>
        </motion.div>
    );
}
