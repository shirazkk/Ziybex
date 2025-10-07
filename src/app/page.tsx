import type { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { FeaturedProjects } from "@/components/Featureprojects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/video";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogsSection from "@/components/blogs";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Hero />
      <VideoSection />
      <Services />
      <About />
      <WhyChooseUs />
      <FeaturedProjects/>
      <BlogsSection/>
      <Testimonials />
      <Contact />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Ziybex | Creative Web Solutions",
  description:
    "Ziybex is a modern creative digital studio offering web design, development, and branding solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ziybex | Creative Web Solutions",
    description:
      "Ziybex is a modern creative digital studio offering web design, development, and branding solutions.",
    url: "https://ziybex.com/",
    images: [
      {
        url: "/ZB-Website Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ziybex - Creative Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};
