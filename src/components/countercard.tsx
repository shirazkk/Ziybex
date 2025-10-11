"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CounterCard = ({
  stat,
  inView,
  delay,
}: {
  stat: { number: number; suffix: string; label: string };
  inView: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-smooth"
    >
      <div className="text-3xl font-bold text-accent mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
};
