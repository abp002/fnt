"use client";

import { useInView } from "@/hooks/useInView";
import { useEffect, useRef, useState } from "react";
import { CLIENTS } from "@/lib/constants";

export function CTASection() {
    const [ref, inView] = useInView<HTMLElement>();
    const [scrollY, setScrollY] = useState(0);
    const [sectionTop, setSectionTop] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        const handleResize = () => {
            if (sectionRef.current) {
                setSectionTop(sectionRef.current.offsetTop);
            }
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Initial measure
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Combine the inView ref with our local ref for measurement
    const setRefs = (element: HTMLElement | null) => {
        // @ts-ignore
        if (ref) ref.current = element;
        sectionRef.current = element;
    };

    // Calculate relative scroll position
    // We want relativeScroll to be 0 when the section is centered in the viewport
    const [vh, setVh] = useState(0);
    useEffect(() => {
        setVh(window.innerHeight);
    }, []);

    const viewportCenter = scrollY + vh / 2;
    const sectionCenter = sectionTop + (sectionRef.current?.offsetHeight || 0) / 2;
    const relativeScroll = viewportCenter - sectionCenter;

    const row = CLIENTS.map((c) => (
        <span
            key={c}
            style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "15px",
                color: "#555",
                letterSpacing: "4px",
                whiteSpace: "nowrap",
                padding: "12px 32px",
                border: "1px solid #222",
                borderRadius: "100px",
                transition: "all 0.3s",
                cursor: "default",
                flexShrink: 0,
            }}
            onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = "#C8FF00";
                target.style.borderColor = "#C8FF00";
            }}
            onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = "#555";
                target.style.borderColor = "#222";
            }}
        >
            {c}
        </span>
    ));

    return (
        <section
            ref={setRefs}
            style={{
                padding: "80px 32px 80px", // Reduced padding
                textAlign: "center",
                position: "relative",
                // overflow: "hidden", // Removed to allow images to overlap
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Floating Images */}
            {/* Central Light Effect */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50%",
                    height: "50%",
                    maxWidth: "1000px",
                    maxHeight: "1000px",
                    background:
                        "radial-gradient(circle, rgba(200,255,0,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            {/* Floating Images */}
            {/* Left Image - Headphones */}
            <img
                src="/images/auriculares.png"
                alt="Headphones"
                style={{
                    position: "absolute",
                    left: "2%",
                    top: "15%", // Slightly higher than center
                    width: "clamp(150px, 15vw, 300px)",
                    height: "auto",
                    transform: `translateY(${relativeScroll * 0.1}px)`,
                    transition: "transform 0.05s linear",
                    zIndex: 0,
                    opacity: 0.6,
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                }}
            />

            {/* Right Image - Rugby Ball */}
            <img
                src="/images/rugby.png"
                alt="Rugby Ball"
                style={{
                    position: "absolute",
                    right: "2%",
                    top: "40%", // Centered
                    width: "clamp(150px, 18vw, 350px)",
                    height: "auto",
                    transform: `translateY(${relativeScroll * -0.12}px)`,
                    transition: "transform 0.05s linear",
                    zIndex: 0,
                    opacity: 0.6,
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(40px, 6vw, 90px)",
                        color: "#fff",
                        lineHeight: 0.95,
                        marginBottom: "24px",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    Join these companies that have thrived with their image!
                </h2>

                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "18px",
                        color: "#888",
                        marginBottom: "48px",
                        maxWidth: "600px",
                        margin: "0 auto 48px",
                        lineHeight: 1.6,
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                    }}
                >
                    The Studio responds to your contact request in less than 24 hours.
                </p>

                <a
                    href="/contacto"
                    style={{
                        display: "inline-block",
                        backgroundColor: "#C8FF00",
                        color: "#000",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        padding: "16px 40px",
                        borderRadius: "100px",
                        textDecoration: "none",
                        marginBottom: "80px",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                        boxShadow: "none",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(200,255,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    Contact Us
                </a>
            </div>

            {/* Marquee Row 1 */}
            <div style={{ width: "100%", overflow: "hidden", marginBottom: "12px", opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.4s" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        animation: "marqueeLeft 40s linear infinite",
                        width: "max-content",
                    }}
                >
                    {row}
                    {row}
                </div>
            </div>

            {/* Marquee Row 2 (reverse) */}
            <div style={{ width: "100%", overflow: "hidden", opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.4s" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        animation: "marqueeRight 45s linear infinite",
                        width: "max-content",
                    }}
                >
                    {row}
                    {row}
                </div>
            </div>
        </section >
    );
}
