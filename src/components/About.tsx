"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-image.jpg"
                width="400"
                height="400"
                alt="Ziybex team collaboration"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">
                Years of Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <span>About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Ziybex Solutions, we&apos;re not just a marketing agency – we&apos;re
              your strategic partner in growth. With over 4+ years of
              experience, we&apos;ve helped hundreds of businesses transform their
              digital presence and achieve remarkable results.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Our team of creative designers, strategic marketers, and skilled
              developers work together to deliver solutions that don&apos;t just look
              good – they drive real business outcomes. We believe in the power
              of innovation, creativity, and data-driven strategies.
            </p>
            {/* Read More Button */}
            <Link href="/about">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>

          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
