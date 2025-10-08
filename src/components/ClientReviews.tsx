"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clientreviews } from "@/data/reviews";
import Image from "next/image";
import GoogleReviewButton from "./GoogleReview";

const ClientReviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const nextClientreview = () => {
    setActiveIndex((prev) => (prev + 1) % clientreviews.length);
  };

  const prevClientreview = () => {
    setActiveIndex(
      (prev) => (prev - 1 + clientreviews.length) % clientreviews.length
    );
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <span>Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it – hear from the businesses
            we&apos;ve helped grow
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-accent mb-6" />

                <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  &quot;{clientreviews[activeIndex].content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={clientreviews[activeIndex].image || "/placeholder.jpg"}
                    alt="client-picture"
                    width="100"
                    height="100"
                    className="w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center"
                  ></Image>

                  <div>
                    <div className="font-bold text-lg">
                      {clientreviews[activeIndex].name}
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mt-6">
                  {[...Array(clientreviews[activeIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevClientreview}
                className="rounded-full border-2 hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {clientreviews.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === activeIndex
                        ? "bg-accent w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to client ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextClientreview}
                className="rounded-full border-2 hover:border-accent hover:text-accent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex justify-center items-center mt-4">

            <GoogleReviewButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
