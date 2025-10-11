"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CounterCard } from "@/components/countercard";

export const CompanyOverview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { number: 22, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: 4, suffix: "+", label: "Years Experience" },
    { number: 4, suffix: "+", label: "Team Members" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Brands Through Digital Excellence
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Ziybex is a forward-thinking social media marketing agency
              dedicated to helping businesses amplify their online presence and
              achieve remarkable growth. We specialize in comprehensive digital
              marketing strategies, creative branding solutions, and data-driven
              social media campaigns that deliver real results.
            </p>

            <p>
              Our mission is simple: to empower brands with innovative marketing
              solutions that drive engagement, build communities, and generate
              measurable business outcomes. We believe every brand has a unique
              story to tell, and we&apos;re here to help you share it with the world
              in the most impactful way possible.
            </p>

            <p>
              With a team of passionate creatives, strategic thinkers, and
              digital experts, we&apos;ve helped hundreds of businesses transform
              their digital presence. From startups to established enterprises,
              we bring the same level of dedication, creativity, and expertise
              to every project we undertake.
            </p>
          </div>
        </motion.div>

        {/* ✅ Counter Stats Section Replacing Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              stat={stat}
              inView={inView}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
