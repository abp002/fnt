"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { MarqueeSection } from "@/components/shared/MarqueeSection";
import { CTASection } from "@/components/shared/CTASection";

interface Project {
    title: string;
    category: string;
    type: string;
    gradient: string;
}

const PROJECTS: Project[] = [
    { title: "World Cup Qualification Qatar 2027", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)" },
    { title: "Teaser & Champions Visuals — NM1 Finals", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #0f3460 0%, #533483 100%)" },
    { title: "Bleacher Report Football — 2025 Designs", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #2d3436 0%, #d63031 100%)" },
    { title: "French Club Championships", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #0c2461 0%, #6a89cc 100%)" },
    { title: "eLigue 1 McDonald's — 2025", category: "Art Direction", type: "eSport", gradient: "linear-gradient(135deg, #e1b12c 0%, #c0392b 100%)" },
    { title: "Cross Country 2025 — FFA", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #38ada9 0%, #079992 100%)" },
    { title: "3x3 — FFBB — 2023-24 Medals", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #e55039 0%, #b71540 100%)" },
    { title: "FIFAe — eFoot de France", category: "Art Direction", type: "eSport", gradient: "linear-gradient(135deg, #4a69bd 0%, #1e3799 100%)" },
    { title: "French 5K Championship", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #78e08f 0%, #079992 100%)" },
    { title: "Team Malizia — Rebranding", category: "Art Direction, Branding", type: "Sports", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)" },
    { title: "Social Media Visuals — OM", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #2e86de 0%, #54a0ff 100%)" },
    { title: "EDF Football — 2025", category: "Photo Compositing", type: "Sports", gradient: "linear-gradient(135deg, #1e272e 0%, #485460 100%)" },
    { title: "eLigue 1 by Ubereats — Season 2024", category: "Art Direction", type: "eSport", gradient: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)" },
    { title: "eCup of France — 2024", category: "Art Direction", type: "eSport", gradient: "linear-gradient(135deg, #00b894 0%, #00cec9 100%)" },
    { title: "Sanofi — Olympic & Paralympic Games Paris 2024", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)" },
    { title: "Arkea Ultim Challenge — Brest", category: "Art Direction", type: "Sports", gradient: "linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)" },
];

function Hero() {
    return (
        <section style={{
            padding: "180px 32px 80px",
            maxWidth: "1600px",
            margin: "0 auto",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            flexWrap: "wrap",
        }}>
            <div style={{
                position: "absolute", top: "100px", right: "0", width: "400px", height: "400px",
                background: "radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <h1 style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                fontSize: "clamp(42px, 7vw, 92px)",
                color: "#fff", letterSpacing: "-2px", lineHeight: 1.05, margin: 0,
                animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                maxWidth: "1000px",
            }}>
                Discover the
                <br />
                projects the Studio has worked on.
            </h1>
            <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#ccc8c8ff",
                letterSpacing: "0px", margin: "0 0 12px 0", maxWidth: "300px",
                animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
                lineHeight: 1.4,
            }}>
                A selection of the most representative projects.
            </p>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [ref, isInView] = useInView<HTMLAnchorElement>();
    const [hovered, setHovered] = useState(false);

    return (
        <a
            ref={ref}
            href="#"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "block",
                textDecoration: "none",
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${(index % 2) * 0.08}s`,

            }}
        >
            <div className="aspect-[16/10] md:aspect-[1.5/1]" style={{
                width: "100%",
                borderRadius: "12px",
                background: project.gradient,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hovered ? "scale(1.01)" : "scale(1)",
                border: "1px solid #1a1a1a",
            }}>
                <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hovered ? "rgba(0,0,0,0.2)" : "transparent",
                    transition: "all 0.4s ease",
                }}>
                    <div style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#C8FF00",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: hovered ? "scale(1)" : "scale(0.8)",
                        opacity: hovered ? 1 : 0,
                    }}>
                        <span style={{
                            fontSize: "24px",
                            color: "#0a0a0a",
                            transform: "rotate(-45deg)",
                        }}>→</span>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20px", padding: "0 4px" }}>
                <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#fff",
                    margin: "0 0 6px 0",
                    transition: "color 0.3s",
                }}>
                    {project.title}
                </h3>
                <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#666",
                    letterSpacing: "0.5px",
                    margin: 0,
                }}>
                    {project.category}
                </p>
            </div>
        </a>
    );
}

export default function FNTProjectsPage() {
    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
            <Hero />
            <div style={{
                maxWidth: "1600px",
                margin: "0 auto",
                padding: "0 32px 60px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                gap: "10px",
            }}>
                {PROJECTS.map((p, i) => (
                    <ProjectCard key={p.title} project={p} index={i} />
                ))}
            </div>
            <MarqueeSection />
            <CTASection />
        </div>
    );
}
