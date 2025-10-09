import type { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { FeaturedProjects } from "@/components/Featureprojects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoSection, { VideoSkeleton } from "@/components/video";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogsSection from "@/components/blogs";
import { Suspense } from "react";
import ClientReviews from "@/components/ClientReviews";

export const metadata: Metadata = {
  title: "Ziybex | Creative Marketing Agency karachi",
  description:
    "Ziybex is a creative marketing agency specializing in web design, branding, SEO, and digital marketing to help businesses grow online.",
  keywords: [
    "Ziybex",
    "creative marketing agency",
    "web design company",
    "SEO services",
    "branding agency",
    "digital marketing",
    "creative agency Pakistan",
    "Next.js web development",
    "UI UX design",
  ],
  alternates: {
    canonical: "https://ziybex.com/",
  },
  openGraph: {
    title: "Ziybex | Creative Marketing Agency karachi",
    description:
      "Ziybex is a creative marketing agency specializing in modern web design, branding, and SEO solutions that help businesses grow online.",
    url: "https://ziybex.com/",
    siteName: "Ziybex",
    images: [
      {
        url: "/ZS.jpg",
        width: 1200,
        height: 630,
        alt: "Ziybex - Creative Marketing Agency karachi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziybex | Creative Marketing Agency karachi",
    description:
      "Ziybex is a creative marketing agency offering web design, branding, and SEO services to boost your business growth online.",
    images: ["/ZS.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Hero />
      <Suspense fallback={<VideoSkeleton />}>
        <VideoSection />
      </Suspense>
      <Services />
      <About />
      <WhyChooseUs />
      <FeaturedProjects />
      <BlogsSection />
      <ClientReviews />
      <Contact />
    </div>
  );
}
