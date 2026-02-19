"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

export function StudioSection() {
    const [ref, inView] = useInView<HTMLElement>();
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const timezones = [
        { city: "ESP", offset: 1 },
        { city: "NYC", offset: -5 },
        { city: "TOKYO", offset: 9 },
    ];

    return (
        <section
            ref={ref}
            style={{
                padding: "100px 32px",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "48px",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                <h2
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(32px, 5vw, 56px)",
                        color: "#fff",
                        letterSpacing: "2px",
                        margin: 0,
                    }}
                >
                    The Studio
                </h2>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "40px",
                    alignItems: "start",
                }}
            >
                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            color: "#555",
                            textTransform: "uppercase",
                            letterSpacing: "4px",
                            marginBottom: "24px",
                            lineHeight: 1.8,
                        }}
                    >
                        THE STUDIO IS LOCATED IN SPAIN.
                        <br />
                        WE WORK WITH CLIENTS WORLDWIDE ✲
                    </p>

                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "18px",
                            color: "#ccc",
                            lineHeight: 1.7,
                            maxWidth: "500px",
                        }}
                    >
                        Our studio specializes in{" "}
                        <span style={{ color: "#C8FF00", fontWeight: 600 }}>
                            art direction, graphic design and branding
                        </span>{" "}
                        for your projects in the world of sports and esports.
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "32px",
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                    }}
                >
                    {timezones.map((tz) => (
                        <div
                            key={tz.city}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    border: "1px solid #333",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        width: "4px",
                                        height: "4px",
                                        borderRadius: "50%",
                                        background: "#C8FF00",
                                    }}
                                />
                                {mounted && (
                                    <>
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "1px",
                                                height: "20px",
                                                background: "#fff",
                                                bottom: "50%",
                                                transformOrigin: "bottom center",
                                                transform: `rotate(${((time.getUTCHours() + tz.offset) % 12) * 30 + (time.getUTCMinutes() / 2)
                                                    }deg)`,
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "1px",
                                                height: "28px",
                                                background: "#C8FF00",
                                                bottom: "50%",
                                                transformOrigin: "bottom center",
                                                transform: `rotate(${time.getUTCMinutes() * 6}deg)`,
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            <span
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "11px",
                                    color: "#666",
                                    letterSpacing: "3px",
                                }}
                            >
                                {tz.city}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
