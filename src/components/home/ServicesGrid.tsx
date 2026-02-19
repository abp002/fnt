"use client";

import { useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { motion, useScroll, useTransform } from "framer-motion";

const SERVICES = [
    {
        num: "01",
        title: "Graphic Design",
        desc: "At FNT Studio, we bring your ideas to life with unique designs. Whether it's posters, logos or marketing materials, our graphic design expertise ensures visuals that captivate and strengthen your brand image.",
        tags: "Art Direction • Branding • Motion Design • Photoshop • After Effects",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#E0C3FC",
    },
    {
        num: "02",
        title: "Web Design",
        desc: "We specialize in user interface (UI) design for attractive and easy-to-navigate websites. Our user-centered approach ensures that every visual element is optimized for a smooth and intuitive experience.",
        tags: "UI Design • UX Design • Figma",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "#8EC5FC",
    },
    {
        num: "03",
        title: "Web Development",
        desc: "We create custom websites using modern technologies. Our sites are fully responsive, ensuring an optimal experience on mobile devices and all screen sizes.",
        tags: "Front-end • HTML/CSS/JS • No-code • Responsive Design • WordPress • Webflow",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        color: "#C8FF00",
    },
];

function ServiceCard({ service, index, targetScale }: { service: typeof SERVICES[0]; index: number, targetScale: number }) {
    const containerRef = useRef(null);

    // Track scroll of the card wrapper. 
    // Since it's sticky, we want the animation to happen as it "sticks" and the next one comes up.
    // 'start start': top of card hits top of viewport (sticks).
    // 'end start': bottom of card hits top of viewport (end of stickiness usually, or when scrolled past).
    // To make it scale *during* the stick, we map progress.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]); // Fade out eventually

    return (
        <div
            ref={containerRef}
            className="sticky top-[10vh] mb-[5vh]" // Clean sticky positioning
            style={{
                top: `calc(10vh + ${index * 40}px)`,
                marginBottom: "10vh", // Spacing
                zIndex: index + 1
            }}
        >
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 bg-[#fdfdfd] rounded-[32px] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
                style={{
                    scale,
                    opacity: 1, // Keep simple opacity for now, or use the transform
                    // opacity, // Optional: uncomment if fading is desired too
                    transformOrigin: "top center",
                    minHeight: "550px",
                    alignItems: "stretch",
                }}
            >
                <div
                    className="p-10 md:p-20 flex flex-col justify-center"
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "#C8FF00",
                            color: "#000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "24px",
                            marginBottom: "40px",
                        }}
                    >
                        {service.num}
                    </div>

                    <h3
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(48px, 5vw, 90px)",
                            color: "#1a1a1a",
                            letterSpacing: "1px",
                            margin: "0 0 32px 0",
                            lineHeight: 0.9,
                            marginLeft: "30px"
                        }}
                    >
                        {service.title}
                    </h3>

                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "18px",
                            color: "#444",
                            lineHeight: 1.6,
                            marginBottom: "40px",
                            maxWidth: "90%",
                            marginLeft: "30px"

                        }}
                    >
                        {service.desc}
                    </p>

                    <div
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                            color: "#1a1a1a",
                            fontWeight: 600,
                            letterSpacing: "0.5px",
                            marginLeft: "30px"

                        }}
                    >
                        {service.tags}
                    </div>

                    <a
                        href="/proyectos"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "40px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "15px",
                            color: "#1a1a1a",
                            textDecoration: "none",
                            fontWeight: 700,
                            borderBottom: "2px solid #C8FF00",
                            paddingBottom: "4px",
                            width: "fit-content",
                            marginLeft: "30px"

                        }}
                    >
                        VIEW PROJECTS
                    </a>
                </div>

                <div
                    className="min-h-[300px] md:min-h-auto"
                    style={{
                        width: "100%",
                        height: "100%",
                        background: service.gradient,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Visual pattern */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}

export function ServicesGrid() {
    return (
        <section
            className="px-4 py-[60px] pb-[100px] md:px-8 md:py-[100px] md:pb-[300px]" // Optimized padding
            style={{
                maxWidth: "1400px", // Increased max-width
                margin: "0 auto",
            }}
        >
            {SERVICES.map((service, i) => {
                // More aggressive scaling: Bottom cards stay large, top ones shrink more?
                // Actually reversed: The card *leaving* (top) shrinking? 
                // No, sticking cards stack. 
                // The first card is index 0. It sticks. The second comes. 
                // We want index 0 to scale to 0.8. 
                // Index 1 (last) stays 1.
                const targetScale = 1 - ((SERVICES.length - 1 - i) * 0.05);
                return (
                    <ServiceCard
                        key={service.title}
                        service={service}
                        index={i}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
