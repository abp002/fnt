"use client";

export function Footer() {
    return (
        <footer
            style={{
                padding: "60px 32px 40px",
                borderTop: "1px solid #1a1a1a",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "40px",
                    marginBottom: "60px",
                }}
            >
                <div>
                    <div
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "22px",
                            color: "#C8FF00",
                            letterSpacing: "3px",
                            marginBottom: "16px",
                        }}
                    >
                        FNT.STUDIO
                    </div>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            color: "#555",
                            lineHeight: 1.8,
                        }}
                    >
                        The studio works with clients worldwide ✲
                        <br />
                        Based in Spain.
                    </p>
                </div>

                <div>
                    <h4
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            color: "#555",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "16px",
                        }}
                    >
                        MENU
                    </h4>
                    {["Home", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={item === "Home" ? "/" : item === "Projects" ? "/proyectos" : "/contacto"}
                            style={{
                                display: "block",
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "14px",
                                color: "#888",
                                textDecoration: "none",
                                marginBottom: "10px",
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div>
                    <h4
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            color: "#555",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "16px",
                        }}
                    >
                        SOCIAL MEDIA
                    </h4>
                    {["Instagram", "LinkedIn", "Behance"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            style={{
                                display: "block",
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "14px",
                                color: "#888",
                                textDecoration: "none",
                                marginBottom: "10px",
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            <div
                style={{
                    borderTop: "1px solid #1a1a1a",
                    paddingTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "16px",
                }}
            >
                <span
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "#333",
                    }}
                >
                    © 2025 FNT.Studio — All rights reserved
                </span>
                <a
                    href="#"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "#333",
                        textDecoration: "none",
                    }}
                >
                    Legal Notice
                </a>
            </div>
        </footer>
    );
}
