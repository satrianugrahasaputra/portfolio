"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Disable on touch/mobile devices
        const checkDevice = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        
        checkDevice();
        window.addEventListener("resize", checkDevice);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Add mouse move listener
        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Hover effect selectors
        const addHoverListeners = () => {
            const hoverables = document.querySelectorAll(
                'a, button, [role="button"], input, select, textarea, .hover-target'
            );
            
            hoverables.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovered(true));
                el.addEventListener("mouseleave", () => setIsHovered(false));
            });
        };

        addHoverListeners();

        // Re-apply hover listeners on DOM changes (e.g. page changes, projects loaded)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("resize", checkDevice);
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();
        };
    }, [cursorX, cursorY, isVisible]);

    if (isMobile || !isVisible) return null;

    return (
        <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? "rgba(6, 182, 212, 0.3)" : "rgba(255, 255, 255, 0.8)",
                border: isHovered ? "1px solid rgba(6, 182, 212, 0.8)" : "none",
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        />
    );
}
