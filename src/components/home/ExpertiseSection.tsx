"use client";

import { useInView } from "@/hooks/useInView";

const EXPERTISE = [
    "Art Direction",
    "Graphic Design",
    "Branding",
    "Web Design",
    "Front-End Development",
    "No-code",
];

export function ExpertiseSection() {
    const [ref, inView] = useInView<HTMLElement>();

    return (
        <section
            ref={ref}
            style={{
                padding: "80px 32px",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <h2
                style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(28px, 4vw, 48px)",
                    color: "#fff",
                    letterSpacing: "2px",
                    marginBottom: "48px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-50px)",
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                <span style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#C8FF00",
                    borderRadius: "50%",
                    display: "inline-block",
                    boxShadow: "0 0 10px rgba(200,255,0,0.5)"
                }} />
                Studio Expertise
            </h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "center",
                    marginTop: "60px",
                }}
            >
                {EXPERTISE.map((skill, i) => (
                    <div
                        key={skill}
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(42px, 6vw, 100px)",
                            color: "#fff",
                            letterSpacing: "1px",
                            cursor: "pointer",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(40px)",
                            transitionDelay: `${i * 0.1}s`,
                            lineHeight: 1.1,
                            textAlign: "center",
                            width: "100%",
                        }}
                        onMouseEnter={(e) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.color = "#C8FF00";
                            target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.color = "#fff";
                            target.style.transform = "scale(1)";
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
