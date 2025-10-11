"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Social Media Strategist",
      image: "/about_assest/team-member-1.jpg",
    },
    {
      name: "David Chen",
      role: "Creative Director",
      image: "/about_assest/team-member-2.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Analyst",
      image: "/about_assest/team-member-3.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Content Creator",
      image: "/about_assest/team-member-4.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate group of marketing experts, designers, and strategists
            dedicated to helping your brand succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-smooth">
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={member.image}
                    fill
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
