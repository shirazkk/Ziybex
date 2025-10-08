"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo3D from "./Logo3D";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-auto flex flex-col items-center py-20"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 mt-10 lg:mt-0 space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Creative Marketing for your{" "}
            <span className="text-accent">Brand Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            We help businesses automate workflows, build intelligent digital
            experiences, and grow brands with design, marketing, and
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-accent hover:scale-105 hover:bg-accent/90 transition"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition hover:scale-105"
              onClick={() => scrollToSection("#services")}
            >
              Our Services
            </Button>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="flex items-center justify-center">
            <Logo3D />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mt-0 lg:mt-16 grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
        {[
          { number: "22+", label: "Projects Completed" },
          { number: "50+", label: "Happy Clients" },
          { number: "4+", label: "Years Experience" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-accent">{stat.number}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
