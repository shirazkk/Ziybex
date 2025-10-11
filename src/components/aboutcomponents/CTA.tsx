"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export const CTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-12 md:p-16 border border-accent/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your brand&apos;s digital presence? Our team is
              excited to learn about your goals and create a strategy that
              drives real results.
            </p>

            <a href="mailto:info@ziybex.com">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group"
              >
                Email Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
