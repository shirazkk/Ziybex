import About from "@/components/About";
import Contact from "@/components/Contact";
import { FeaturedProjects } from "@/components/Featureprojects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/video";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      {/* <CompanyLogos/> */}
      <Services />
      <About />
      <WhyChooseUs />
      <FeaturedProjects/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
