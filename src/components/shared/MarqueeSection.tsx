"use client";

import { useInView } from "@/hooks/useInView";
import { CLIENTS } from "@/lib/constants";

export function MarqueeSection() {
    const [ref, inView] = useInView<HTMLElement>();

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
            ref={ref}
            style={{
                padding: "80px 0",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.8s ease",
            }}
        >
            <h2
                style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(24px, 3.5vw, 44px)",
                    color: "#fff",
                    letterSpacing: "2px",
                    textAlign: "center",
                    padding: "0 40px",
                    marginBottom: "16px",
                    maxWidth: "900px",
                    margin: "0 auto 48px",
                    lineHeight: 1.2,
                }}
            >
                Join these companies that have thrived with their image!
            </h2>

            {/* Marquee Row 1 */}
            <div style={{ overflow: "hidden", marginBottom: "12px" }}>
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
            <div style={{ overflow: "hidden" }}>
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
        </section>
    );
}
