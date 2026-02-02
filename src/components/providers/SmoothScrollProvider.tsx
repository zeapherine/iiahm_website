"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        // Initialize Lenis with smooth, premium settings
        lenisRef.current = new Lenis({
            duration: 1.8,                   // Slow, luxurious scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    // Reset scroll to top on pathname change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}
