"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { StudioSection } from "@/components/home/StudioSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/shared/CTASection";

export default function RousselStudioReplica() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <Hero loaded={loaded} />
      <StudioSection />
      <ExpertiseSection />
      <ServicesGrid />
      <CTASection />
      <FeaturedProjects />
    </div>
  );
}