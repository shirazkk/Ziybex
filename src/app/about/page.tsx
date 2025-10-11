"use client";
import { HeroSection } from "@/components/aboutcomponents/Hero";
import { CompanyOverview } from "@/components/aboutcomponents/CompanyOverview";
import { TeamLeaderSection } from "@/components/aboutcomponents/TeamLeader";
import { TeamSection } from "@/components/aboutcomponents/Team";
import { CTASection } from "@/components/aboutcomponents/CTA";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <HeroSection />
      <CompanyOverview />
      <TeamLeaderSection />
      <TeamSection />
      <CTASection />
    </div>
  );
};



export default About;
