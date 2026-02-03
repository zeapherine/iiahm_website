"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DynamicBackground() {
    const { scrollYProgress } = useScroll();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Light: White -> Soft Azure -> Subtle Lavender -> Slate-50
    // Dark: Deep Midnight -> Dark Blue -> Deep Slate -> Deep Midnight
    const colors = resolvedTheme === 'dark'
        ? ["#020617", "#0f172a", "#1e293b", "#020617"]
        : ["#ffffff", "#f0f9ff", "#f5f3ff", "#f8fafc"];

    const bgColor = useTransform(smoothProgress, [0, 0.4, 0.8, 1], colors);

    if (!mounted) return null;


    return (
        <motion.div
            style={{ backgroundColor: bgColor }}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
}
