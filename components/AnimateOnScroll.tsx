"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

type AnimationType = "fadeIn" | "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "staggerChild";

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
}

export default function AnimateOnScroll({
    children,
    animation = "fadeUp",
    delay = 0,
    duration = 600,
    className = "",
    threshold = 0.1,
}: AnimateOnScrollProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold });

    const animationClasses: Record<AnimationType, string> = {
        fadeIn: "opacity-0 transition-opacity",
        fadeUp: "opacity-0 translate-y-8 transition-all",
        fadeDown: "opacity-0 -translate-y-8 transition-all",
        fadeLeft: "opacity-0 translate-x-8 transition-all",
        fadeRight: "opacity-0 -translate-x-8 transition-all",
        scaleIn: "opacity-0 scale-95 transition-all",
        staggerChild: "opacity-0 translate-y-4 transition-all",
    };

    const visibleClasses = "opacity-100 translate-x-0 translate-y-0 scale-100";

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? visibleClasses : animationClasses[animation]}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            {children}
        </div>
    );
}
