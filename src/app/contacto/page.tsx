"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const PROJECT_TYPES = [
    "Art Direction",
    "Graphic Design",
    "Web Design",
    "Web Development",
    "Motion Design",
    "Other",
];

const BUDGETS = [
    "Less than €2k",
    "Between €2k and €5k",
    "Between €5k and €10k",
    "More than €10k",
    "I don't know",
];

export default function ContactPage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

    // Animation refs
    const [heroRef, heroInView] = useInView<HTMLDivElement>();
    const [formRef, formInView] = useInView<HTMLDivElement>();

    const toggleType = (type: string) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter(t => t !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };

    return (
        <div
            style={{
                background: "#0a0a0a",
                minHeight: "100vh",
                fontFamily: "'DM Sans', sans-serif",
                color: "#fff",
                paddingBottom: "100px",
            }}
        >

            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
                {/* Hero Section */}
                <div
                    ref={heroRef}
                    style={{
                        padding: "180px 0 100px",
                        opacity: heroInView ? 1 : 0,
                        transform: heroInView ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>
                        <h1
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(60px, 10vw, 120px)",
                                lineHeight: 0.9,
                                margin: 0,
                                maxWidth: "800px",
                            }}
                        >
                            Let's talk about your <br />
                            <span style={{ color: "#fff" }}>project!</span>
                        </h1>

                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "16px",
                                color: "#888",
                                maxWidth: "300px",
                                lineHeight: 1.5,
                                margin: "20px 0 0",
                            }}
                        >
                            The Studio commits to responding to your contact request within 24 hours.
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div
                    ref={formRef}
                    style={{
                        opacity: formInView ? 1 : 0,
                        transform: formInView ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr", // 2 Column Layout
                        gap: "60px",
                        paddingTop: "40px",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                    }}
                >
                    {/* Left Column: Title */}
                    <div>
                        <h2
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontSize: "32px",
                                fontWeight: 500,
                                margin: 0,
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                position: "sticky",
                                top: "40px",
                            }}
                        >
                            <span style={{ color: "#C8FF00" }}>•</span> Your Project
                        </h2>
                    </div>

                    {/* Right Column: Form Fields */}
                    <div>
                        {/* Project Nature */}
                        <div style={{ marginBottom: "60px" }}>
                            <p style={{ fontSize: "18px", color: "#ccc", marginBottom: "24px" }}>
                                What is the nature of your project?
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                {PROJECT_TYPES.map((type) => {
                                    const isSelected = selectedTypes.includes(type);
                                    return (
                                        <button
                                            key={type}
                                            onClick={() => toggleType(type)}
                                            style={{
                                                background: "rgba(255,255,255,0.03)",
                                                border: `1px solid ${isSelected ? "#C8FF00" : "#333"}`,
                                                color: isSelected ? "#C8FF00" : "#fff",
                                                padding: "14px 28px",
                                                borderRadius: "100px",
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "15px",
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSelected) e.currentTarget.style.borderColor = "#666";
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSelected) e.currentTarget.style.borderColor = "#333";
                                            }}
                                        >
                                            {type}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Budget */}
                        <div style={{ marginBottom: "60px", paddingBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                            <p style={{ fontSize: "18px", color: "#ccc", marginBottom: "24px" }}>
                                What is your budget in euros?
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                {BUDGETS.map((budget) => {
                                    const isSelected = selectedBudget === budget;
                                    return (
                                        <button
                                            key={budget}
                                            onClick={() => setSelectedBudget(budget)}
                                            style={{
                                                background: selectedBudget === budget ? "#fff" : "rgba(255,255,255,0.03)",
                                                border: `1px solid ${isSelected ? "#fff" : "#333"}`,
                                                color: isSelected ? "#000" : "#fff", // White pill black text for ease of reading budget maybe? Or stick to green style? User ref showed white pill for budget.
                                                padding: "14px 28px",
                                                borderRadius: "100px",
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "15px",
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSelected) e.currentTarget.style.borderColor = "#666";
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSelected) e.currentTarget.style.borderColor = "#333";
                                            }}
                                        >
                                            {budget}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Project Details */}
                        <div style={{ marginBottom: "60px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                                <p style={{ fontSize: "18px", color: "#ccc", margin: 0 }}>
                                    Your project in detail
                                </p>
                                <p style={{ fontSize: "12px", color: "#666", maxWidth: "300px", textAlign: "right", margin: 0 }}>
                                    Thank you for including as much information as possible, such as the deadline or your inspirations.
                                </p>
                            </div>

                            <textarea
                                placeholder="Write project details..."
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid #333",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    color: "#fff",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "16px",
                                    resize: "vertical",
                                    outline: "none",
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#C8FF00"}
                                onBlur={(e) => e.target.style.borderColor = "#333"}
                            />
                        </div>


                        {/* Submit Button Removed from here */}
                    </div>
                </div>

                {/* 'Sobre ti' Section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        gap: "60px",
                        paddingTop: "60px",
                        marginTop: "60px",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                    }}
                >
                    {/* Left Column: Title */}
                    <div>
                        <h2
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontSize: "32px",
                                fontWeight: 500,
                                margin: 0,
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                position: "sticky",
                                top: "40px",
                            }}
                        >
                            <span style={{ color: "#C8FF00" }}>•</span> About You
                        </h2>
                    </div>

                    {/* Right Column: Form Fields */}
                    <div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "30px 24px",
                            marginBottom: "60px"
                        }}>
                            {/* Name */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <label style={{ fontSize: "16px", color: "#ccc" }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid #333",
                                        borderRadius: "12px",
                                        padding: "16px",
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "16px",
                                        outline: "none",
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "#C8FF00"}
                                    onBlur={(e) => e.target.style.borderColor = "#333"}
                                />
                            </div>

                            {/* Surname */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <label style={{ fontSize: "16px", color: "#ccc" }}>Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid #333",
                                        borderRadius: "12px",
                                        padding: "16px",
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "16px",
                                        outline: "none",
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "#C8FF00"}
                                    onBlur={(e) => e.target.style.borderColor = "#333"}
                                />
                            </div>

                            {/* Company */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <label style={{ fontSize: "16px", color: "#ccc" }}>Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter your company"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid #333",
                                        borderRadius: "12px",
                                        padding: "16px",
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "16px",
                                        outline: "none",
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "#C8FF00"}
                                    onBlur={(e) => e.target.style.borderColor = "#333"}
                                />
                            </div>

                            {/* Email */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <label style={{ fontSize: "16px", color: "#ccc" }}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid #333",
                                        borderRadius: "12px",
                                        padding: "16px",
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "16px",
                                        outline: "none",
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "#C8FF00"}
                                    onBlur={(e) => e.target.style.borderColor = "#333"}
                                />
                            </div>
                        </div>

                        {/* Final Submit */}
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button
                                style={{
                                    background: "#C8FF00",
                                    color: "#000",
                                    border: "none",
                                    padding: "20px 60px",
                                    borderRadius: "100px",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 0 30px rgba(200,255,0,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
