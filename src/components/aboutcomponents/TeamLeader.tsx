"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const TeamLeaderSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about_assest/team-leader.jpg" 
              width={500}
              height={500}
              alt="Shahzaib Usman — Team Leader"
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <span>Team Leader</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Shahzaib Usman
            </h2>

            <p className="text-xl text-accent mb-6">
              Graphic Designer & Creative Leader
            </p>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi! I&apos;m Shahzaib Usman, a passionate graphic designer from
                Pakistan with 4+ years of experience in turning ideas into
                pixel-perfect realities. My design philosophy? “Design isn’t
                just my work, it’s how I tell stories.”
              </p>

              <p>
                Over the years, I’ve worked on a wide variety of projects — from
                branding, visual design, UI/UX, to creative campaign assets.
                I’ve helped clients bring their visions to life, always focusing
                on detail, clarity, and visual impact.
              </p>

              <p>
                My goal with Ziybex is to combine strategic thinking with
                creative execution, setting new trends in social media marketing
                and digital branding. I believe in collaboration, continuous
                learning, and pushing the boundaries of what’s possible.
              </p>
            </div>

            {/* Stats or highlights if you want */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">
                  Client Retention Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">22</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">19</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
