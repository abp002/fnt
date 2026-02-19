"use client";

import { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navLinks = [
        { label: "HOME", href: "/" },
        { label: "PROJECTS", href: "/proyectos", badge: "16" },
    ];

    return (
        <>
            {/* CSS media query styles — no JS flash */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-desktop-links { display: flex; }
                .nav-burger { display: none; }
                .nav-mobile-overlay { display: none; }
                .nav-bar {
                    padding: ${scrolled ? "15px 60px" : "30px 60px"};
                }
                .nav-right { gap: 60px; }
                .nav-contact {
                    font-size: 11px;
                    padding: 12px 32px;
                }
                @media (max-width: 767px) {
                    .nav-desktop-links { display: none !important; }
                    .nav-burger { display: flex !important; }
                    .nav-mobile-overlay { display: flex !important; }
                    .nav-bar {
                        padding: ${scrolled ? "12px 20px" : "20px 20px"} !important;
                    }
                    .nav-right { gap: 12px !important; }
                    .nav-contact {
                        font-size: 10px !important;
                        padding: 10px 20px !important;
                    }
                }
            `}} />

            <nav
                className="nav-bar"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: scrolled ? "rgba(10,10,10,0.8)" : "transparent",
                    backdropFilter: scrolled ? "blur(15px)" : "none",
                    transition: "background 0.4s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                {/* Logo - Far Left */}
                <a
                    href="/"
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "24px",
                        color: "#C8FF00",
                        letterSpacing: "3px",
                        textDecoration: "none",
                        fontWeight: 400,
                    }}
                >
                    FNT.STUDIO
                </a>

                {/* Right side */}
                <div
                    className="nav-right"
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/* Desktop nav links — hidden on mobile via CSS */}
                    <div className="nav-desktop-links" style={{
                        alignItems: "center",
                        gap: "40px"
                    }}>
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                style={{
                                    color: "#fff",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    letterSpacing: "1.5px",
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    transition: "opacity 0.3s",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                            >
                                {item.label}
                                {item.badge && (
                                    <span
                                        style={{
                                            background: "#C8FF00",
                                            color: "#000",
                                            fontSize: "9px",
                                            fontWeight: 800,
                                            padding: "1px 6px",
                                            borderRadius: "100px",
                                            transform: "translateY(-1px)"
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Contact button */}
                    <a
                        href="/contacto"
                        className="nav-contact"
                        style={{
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: "#fff",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                            borderRadius: "100px",
                            textDecoration: "none",
                            textTransform: "uppercase",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            background: scrolled ? "rgba(255,255,255,0.05)" : "transparent",
                        }}
                        onMouseEnter={(e) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.background = "#fff";
                            target.style.color = "#000";
                            target.style.borderColor = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.background = "transparent";
                            target.style.color = "#fff";
                            target.style.borderColor = "rgba(255,255,255,0.15)";
                        }}
                    >
                        CONTACT US
                    </a>

                    {/* Burger menu - shown on mobile via CSS */}
                    <button
                        className="nav-burger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "50%",
                            width: "44px",
                            height: "44px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            cursor: "pointer",
                            padding: 0,
                        }}
                        aria-label="Menu"
                    >
                        <span style={{
                            display: "block",
                            width: "18px",
                            height: "2px",
                            background: "#fff",
                            borderRadius: "2px",
                            transition: "all 0.3s ease",
                            transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none",
                        }} />
                        <span style={{
                            display: "block",
                            width: "18px",
                            height: "2px",
                            background: "#fff",
                            borderRadius: "2px",
                            transition: "all 0.3s ease",
                            transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
                        }} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay — hidden on desktop via CSS */}
            <div
                className="nav-mobile-overlay"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 999,
                    background: "rgba(10,10,10,0.95)",
                    backdropFilter: "blur(20px)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "40px",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                {navLinks.map((item, i) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: "#fff",
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "48px",
                            letterSpacing: "3px",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                            opacity: menuOpen ? 1 : 0,
                            transitionDelay: `${i * 0.1}s`,
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        {item.label}
                        {item.badge && (
                            <span
                                style={{
                                    background: "#C8FF00",
                                    color: "#000",
                                    fontSize: "14px",
                                    fontWeight: 800,
                                    padding: "2px 10px",
                                    borderRadius: "100px",
                                }}
                            >
                                {item.badge}
                            </span>
                        )}
                    </a>
                ))}
            </div>
        </>
    );
}
