"use client";

interface HeroProps {
    loaded: boolean;
}

export function Hero({ loaded }: HeroProps) {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "120px 24px 80px",
                position: "relative",
                overflow: "hidden",
                background: "#000",
            }}
        >
            {/* Style added once for spin animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slowSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes scrollPulse {
                    0% { transform: scaleY(1); opacity: 0.5; }
                    50% { transform: scaleY(1.2); opacity: 1; }
                    100% { transform: scaleY(1); opacity: 0.5; }
                }
            `}} />

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                    opacity: 0.6,
                }}
            >
                <source src="/videos/fondobgFNT-loop.mp4" type="video/mp4" />
            </video>

            {/* Overlay Gradient for readability */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            {/* Spinning Logo in the center */}
            <div
                style={{
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "40px",
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "scale(1)" : "scale(0.8)",
                    transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                <div
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(60px, 15vw, 240px)",
                        color: "transparent",
                        WebkitTextStroke: "1px #C8FF00",
                        animation: "slowSpin 20s linear infinite",
                        lineHeight: 1,
                        letterSpacing: "10px",
                        filter: "drop-shadow(0 0 20px rgba(200,255,0,0.3))",
                    }}
                >
                    FNT
                </div>
            </div>

            <h1
                style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(42px, 8vw, 120px)",
                    lineHeight: 0.95,
                    color: "#fff",
                    letterSpacing: "2px",
                    margin: 0,
                    zIndex: 2,
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(40px)",
                    transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
            >
                Your Creative Studio,
                <br />
                <span style={{ color: "#C8FF00" }}>specialized in</span>
                <br />
                <span style={{ color: "#C8FF00" }}>sports and esports.</span>
            </h1>

            <p
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(14px, 1.5vw, 18px)",
                    color: "#aaa",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginTop: "32px",
                    zIndex: 2,
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(30px)",
                    transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
                }}
            >
                Art Direction • UI Design • Web Development
            </p>

            <div
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    opacity: loaded ? 0.5 : 0,
                    transition: "opacity 1s ease 1.2s",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        width: "1px",
                        height: "50px",
                        background: "linear-gradient(to bottom, #C8FF00, transparent)",
                        animation: "scrollPulse 2s infinite",
                    }}
                />
            </div>
        </section>
    );
}
