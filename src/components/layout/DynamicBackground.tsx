"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

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
        [0, 0.33, 0.66, 1],
        [
            "var(--background)",
            "var(--slate-50, #f8fafc)",
            "var(--slate-100, #f1f5f9)",
            "var(--background)"
        ]
    );

    return (
        <motion.div
            style={{ backgroundColor: bgColor }}
            className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-1000"
        />
    );
}
