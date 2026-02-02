"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export function AnimatedCounter({ value, duration = 2, suffix = "", className }: AnimatedCounterProps) {
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const springValue = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const displayValue = useTransform(springValue, (current) =>
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView && mounted) {
            springValue.set(value);
        }
    }, [isInView, value, springValue, mounted]);

    if (!mounted) return <span className={className}>0{suffix}</span>;

    return (
        <motion.span ref={ref} className={className}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </motion.span>
    );
}
