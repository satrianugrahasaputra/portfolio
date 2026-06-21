"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { HiExternalLink, HiCheckCircle, HiX, HiArrowRight } from "react-icons/hi";

const projects = [
    {
        id: "PRJ-01",
        title: "One Touch Statistics Jateng (Android App)",
        category: "Enterprise System",
        description: "Developed a mobile application to streamline statistical data access and reporting for BPS Jawa Tengah. The application enables users to efficiently retrieve, manage, and visualize statistical data through an intuitive interface.",
        longDescription: "One Touch Statistics (OTS) Jateng is a specialized enterprise mobile application developed to make BPS statistical publications, indices, and news easily accessible for public citizens and local governments. Built with scalability and robust API integration, the app parses large datasets, formats them dynamically into infographics, and stores cache data on the client device for offline accessibility, dramatically reducing traditional information bottlenecks.",
        impacts: [
            "Published and deployed application on Google Play Store",
            "Improved accessibility of statistical data for public and internal users",
            "Integrated backend system for real-time data retrieval",
            "Enhanced efficiency in data reporting and information access"
        ],
        tags: ["Java", "Kotlin", "MySQL", "REST API", "Android SDK"],
        year: "2026",
        status: "DEPLOYED",
        link: "https://play.google.com/store/apps/details?id=com.ionicframework.otsjateng&pcampaignid=web_share"
    },
    {
        id: "PRJ-02",
        title: "NLP Sentiment Engine",
        category: "Machine Learning",
        description: "Deep learning sentiment analysis system powered by advanced NLP, optimized for high-volume text classification.",
        longDescription: "This research-driven Sentiment Engine compares Recurrent Neural Network (RNN) and Convolutional Neural Network (CNN) architectures to classify and analyze user feedback at scale. Optimized using TensorFlow and served with a high-throughput FastAPI architecture, it processes large volumes of text datasets and maps public sentiment trends in real-time.",
        impacts: [
            "Achieved 87% accuracy using RNN & CNN architecture",
            "Processed 100,000+ real user review data points",
            "Optimized inference time to under 200ms per request"
        ],
        tags: ["Python", "TensorFlow", "FastAPI", "RNN", "CNN", "NLP"],
        year: "2025",
        status: "ACTIVE",
        link: "https://github.com/satrianugrahasaputra/Comparison-Model-RNN-and-CNN-in-Sentiment-Classification-of-User-Reviews-on-the-Play-Store/tree/main"
    },
    {
        id: "PRJ-03",
        title: "Healthcare Predictive Core",
        category: "AI/ML",
        description: "Machine learning architecture for early detection and healthcare outcome prediction with extensive feature engineering.",
        longDescription: "An end-to-end machine learning solution designed to assess patient metrics and forecast stroke/cardiovascular risks. Through rigorous feature engineering, outlier treatment, and synthetic dataset handling (SMOTE), the model balances accuracy and recall metrics to ensure reliable health risk predictions.",
        impacts: [
            "Trained on 10,000+ synthesized patient records",
            "Improved early detection metrics by 22%",
            "Integrated seamless feature engineering pipeline"
        ],
        tags: ["Scikit-learn", "Pandas", "XGBoost", "Python", "SMOTE"],
        year: "2025",
        status: "RESEARCH",
        link: "https://github.com/satrianugrahasaputra/Project_Machine_Learning_Prediction_Healtchare_Stroke"
    },
    {
        id: "PRJ-04",
        title: "DDA Online (Daerah Dalam Angka Portal)",
        category: "Enterprise System",
        description: "Collaborative statistics compilation and verification portal built for BPS (Badan Pusat Statistik) and regional government departments (OPD).",
        longDescription: "DDA Online is a web-based workflow integration system built using CodeIgniter 4 and MySQL. It facilitates the complex process of gathering, validating, and confirming statistical data from dozens of regional government departments (OPD) for the annual publication of 'Daerah Dalam Angka' by BPS. The system implements role-based access controls for BPS Admins, Supervisors, Liaison Officers, and OPD admins, along with built-in discussion boards and dashboard progress visualizations.",
        impacts: [
            "Streamlined data compilation workflow across 50+ local government units (OPD)",
            "Implemented secure multi-level role authentication (LO, Supervisor, Admin, OPD User)",
            "Integrated dynamic progress tracking dashboards and unified discussion forums",
            "Reduced processing delays in publishing the regional annual statistical report (DDA)"
        ],
        tags: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "MVC Architecture"],
        year: "2026",
        status: "DEPLOYED",
        link: "https://github.com/satrianugrahasaputra/DDA_Online"
    },
    {
        id: "PRJ-05",
        title: "Ayam Nusantara Victoria (Web App)",
        category: "Web Application",
        description: "A modern culinary web portal featuring menu highlights, customer testimonials, photo galleries, and an automated WhatsApp-integrated order management system.",
        longDescription: "Ayam Nusantara Victoria is a high-performance web platform designed to digitize and optimize ordering workflows for a local Indonesian cuisine restaurant. Built on top of Laravel, TailwindCSS, and Alpine.js, it includes full responsive navigation, interactive food gallery displays, local business SEO schema injection, and custom WhatsApp message templating for direct order placements.",
        impacts: [
            "Successfully built and deployed live landing page and digital menu system",
            "Implemented automated checkout template messages directed to WhatsApp",
            "Optimized local search engine optimization (SEO) using structured JSON-LD schemas",
            "Designed a responsive UI to support online menus, dining reviews, and location routing"
        ],
        tags: ["Laravel", "TailwindCSS", "Alpine.js", "PHP", "SEO Schema", "MySQL"],
        year: "2026",
        status: "ACTIVE",
        link: "https://umkm-ayam-nusantara.vercel.app/"
    }
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Get unique categories dynamically
    const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

    const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 3);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [activeProject]);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-16 max-w-3xl"
                    ref={ref}
                >
                    <div className="font-sans text-accent text-sm font-bold mb-4 tracking-[0.2em] uppercase">
                        Selected Works
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl font-black mb-6 tracking-tighter text-black">
                        Mission <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Impact</span>
                    </h2>
                    <p className="text-zinc-600 font-sans text-lg leading-relaxed font-light">
                        Deploying scalable architectures and intelligent models that drive measurable results and operational efficiency.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-12 border-b border-black/5 pb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${selectedCategory.toLowerCase() === category.toLowerCase()
                                ? "bg-black text-white border-black shadow-lg"
                                : "bg-transparent text-zinc-600 border-zinc-200 hover:border-black hover:text-black"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpenDetails={() => setActiveProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More/Less Button */}
                {filteredProjects.length > 3 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-black/10 hover:border-black font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span>{isExpanded ? "Show Less" : "More Projects"}</span>
                            <motion.span
                                animate={{ rotate: isExpanded ? -90 : 90 }}
                                transition={{ duration: 0.3 }}
                                className="inline-block"
                            >
                                <HiArrowRight size={14} />
                            </motion.span>
                        </button>
                    </div>
                )}
            </div>

            {/* Premium Project Details Modal */}
            {mounted && typeof window !== "undefined" && createPortal(
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                            className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white text-black max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-black/5"
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-700 hover:text-black transition-colors z-10"
                                >
                                    <HiX size={20} />
                                </button>

                                {/* Modal Content */}
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="font-sans text-xs text-accent tracking-[0.2em] font-bold px-3 py-1 bg-accent/10 rounded-full">
                                            {activeProject.id}
                                        </span>
                                        <span className="font-sans text-xs text-zinc-500 uppercase tracking-wider">
                                            {activeProject.category}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-3xl md:text-5xl font-black text-black tracking-tight mb-6">
                                        {activeProject.title}
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 border-t border-black/5 pt-8">
                                        {/* Left: Long Description */}
                                        <div className="md:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="font-sans font-bold text-zinc-400 text-xs tracking-wider uppercase mb-2">Project Brief</h4>
                                                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                                                    {activeProject.longDescription}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-sans font-bold text-zinc-400 text-xs tracking-wider uppercase mb-3">Technologies Deployed</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {activeProject.tags.map((tag) => (
                                                        <span key={tag} className="px-4 py-1.5 bg-black/5 rounded-full text-black/70 font-sans text-xs font-semibold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Key Achievements */}
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-sans font-bold text-zinc-400 text-xs tracking-wider uppercase mb-4">Key Achievements</h4>
                                                <ul className="space-y-3">
                                                    {activeProject.impacts.map((impact, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <HiCheckCircle className="text-accent mt-0.5 shrink-0 text-lg" />
                                                            <span className="font-sans text-sm text-zinc-700 leading-relaxed">{impact}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-6 border-t border-black/5 flex flex-col gap-4">
                                                <div className="flex justify-between">
                                                    <span className="font-sans text-xs text-zinc-400 font-bold uppercase">Year</span>
                                                    <span className="font-sans text-sm font-bold text-black">{activeProject.year}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-sans text-xs text-zinc-400 font-bold uppercase">Status</span>
                                                    <span className="font-sans text-xs font-bold px-2.5 py-0.5 rounded bg-green-100 text-green-800 uppercase tracking-wide">
                                                        {activeProject.status}
                                                    </span>
                                                </div>

                                                <a
                                                    href={activeProject.link || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 flex items-center justify-center gap-2 font-sans text-sm font-bold bg-accent text-white hover:bg-accent/90 transition-colors py-3 px-6 rounded-full shadow-md"
                                                >
                                                    <span>Visit Live Link</span>
                                                    <HiExternalLink size={18} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}

function ProjectCard({
    project,
    onOpenDetails
}: {
    project: typeof projects[0];
    onOpenDetails: () => void;
}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8, scale: 1.01 }}
            onClick={onOpenDetails}
            className="p-8 md:p-12 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-2xl hover:border-accent/40 flex flex-col md:flex-row gap-8 lg:gap-16 transition-all duration-500 relative overflow-hidden group cursor-pointer"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Left Col: Header & Desc */}
            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                    <span className="font-sans text-xs text-accent tracking-[0.2em] font-bold px-3 py-1 bg-accent/10 rounded-full">
                        {project.id}
                    </span>
                    <span className="font-sans text-xs text-zinc-400 uppercase tracking-wider">{project.category}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-black text-black tracking-tight mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                <p className="text-zinc-600 font-sans text-base leading-relaxed mb-8 max-w-xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-black/5 rounded-full text-black/70 font-sans text-xs font-medium tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Col: Impact & Actions */}
            <div className="flex-1 flex flex-col justify-between md:border-l md:border-black/5 md:pl-12 lg:pl-16">
                <div>
                    <h4 className="font-sans font-bold text-black text-sm mb-4 tracking-wider uppercase">Key Achievements</h4>
                    <ul className="space-y-3">
                        {project.impacts.slice(0, 3).map((impact, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <HiCheckCircle className="text-accent mt-0.5 shrink-0 text-lg" />
                                <span className="font-sans text-sm text-zinc-700 leading-relaxed">{impact}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-between items-center pt-8 mt-8 border-t border-black/5">
                    <span className="font-sans text-sm text-zinc-400 font-bold">{project.year}</span>
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onOpenDetails();
                            }}
                            className="flex items-center gap-1.5 font-sans text-xs font-bold text-zinc-400 hover:text-black transition-colors group/learn"
                        >
                            <span>Learn More</span>
                            <HiArrowRight className="transform group-hover/learn:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href={project.link || "#"}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-sans text-xs font-bold text-black hover:text-accent transition-colors"
                        >
                            <HiExternalLink size={16} />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
