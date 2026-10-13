import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Capabilities } from "@/components/home/Capabilities";
import { FeaturedComponents } from "@/components/home/FeaturedComponents";
import { LatestGuides } from "@/components/home/LatestGuides";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <Capabilities />
      <FeaturedComponents />
      <LatestGuides />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
