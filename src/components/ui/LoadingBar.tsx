"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const key = `${pathname}${searchParams?.toString()}`;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={key}
                initial={{ scaleX: 0, opacity: 1, originX: 0 }}
                animate={{ scaleX: [0, 0.9, 1], opacity: [1, 1, 0] }}
                transition={{
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    ease: "circOut"
                }}
                className="fixed top-0 left-0 right-0 h-1 bg-accent z-[9999]"
            />
        </AnimatePresence>
    );
}
