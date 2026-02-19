"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const PROJECTS = [
    {
        title: "2027 Qatar World Cup Qualifiers",
        category: "Creative direction, Sport",
        gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #e94560 100%)",
        pattern: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(233,69,96,0.05) 10px, rgba(233,69,96,0.05) 20px)",
    },
    {
        title: "French Club Championship - Art Direction",
        category: "Creative direction, Sport",
        gradient: "linear-gradient(135deg, #0a0a0a 0%, #0f3460 50%, #16c79a 100%)",
        pattern: "radial-gradient(circle at 70% 30%, rgba(22,199,154,0.1) 0%, transparent 60%)",
    },
    {
        title: "EDF Foot - 2025",
        category: "Photomontage, Sport",
        gradient: "linear-gradient(135deg, #0a0a0a 0%, #2d3436 50%, #C8FF00 100%)",
        pattern: "linear-gradient(to right, rgba(200,255,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,255,0,0.05) 1px, transparent 1px)",
        patternSize: "40px 40px",
    },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
    const [ref, inView] = useInView<HTMLAnchorElement>();
    const [hovered, setHovered] = useState(false);

    return (
        <a
            ref={ref}
            href="/proyectos"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "block",
                textDecoration: "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${(index % 3) * 0.1}s`,
            }}
        >
            <div
                className="aspect-[16/10] md:aspect-[1/1.1]"
                style={{
                    width: "100%",
                    borderRadius: "12px",
                    background: project.gradient,
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: hovered ? "scale(1.01)" : "scale(1)",
                    border: "1px solid #1a1a1a",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: project.pattern,
                        backgroundSize: (project as any).patternSize || "auto",
                        opacity: 0.6,
                    }}
                />

                <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hovered ? "rgba(0,0,0,0.2)" : "transparent",
                    transition: "all 0.4s ease",
                    zIndex: 2,
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

            <div style={{ marginTop: "24px", padding: "0 4px" }}>
                <h3
                    style={{
                        fontFamily: "'Inter Tight', 'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#fff",
                        margin: "0 0 4px 0",
                        transition: "color 0.3s",
                    }}
                >
                    {project.title}
                </h3>
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        color: "#888",
                        margin: 0,
                    }}
                >
                    {project.category}
                </p>
            </div>
        </a>
    );
}

export function FeaturedProjects() {
    return (
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 32px 100px" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "60px"
            }}>
                <h2
                    style={{
                        fontFamily: "'Inter Tight', 'DM Sans', sans-serif",
                        fontSize: "clamp(32px, 4vw, 56px)",
                        color: "#fff",
                        fontWeight: 500,
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span style={{ color: "#C8FF00" }}>•</span> Selected projects
                </h2>
                <a
                    href="/proyectos"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "12px 32px",
                        borderRadius: "100px",
                        background: "#161616",
                        border: "1px solid #222",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#222";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#161616";
                    }}
                >
                    See all projects
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}
