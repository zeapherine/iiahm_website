"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function DynamicBackground() {
    const { scrollYProgress } = useScroll();

    // We use spring to smooth out the scroll input even further for that "liquid" feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Define an ethereal color palette that shifts as we scroll
    // Light Mode Palette: White -> Very Light Slate -> Soft Off-White -> White
    // Dark Mode Palette: Deep Slate -> Midnight -> Dark Blue-Black -> Deep Slate
    // Note: We use CSS variables so it adapts to the current theme

    const bgColor = useTransform(
        smoothProgress,
        [0, 0.4, 0.8, 1],
        [
            "#ffffff",        // Start: Pure White
            "#f0f9ff",        // Middle-Top: Soft Azure
            "#f5f3ff",        // Middle-Bottom: Subtle Lavender
            "#f8fafc"         // End: Slate-50
        ]
    );

    return (
        <motion.div
            style={{ backgroundColor: bgColor }}
            className="fixed inset-0 -z-20 pointer-events-none transition-colors duration-1000"
        />
    );
}
