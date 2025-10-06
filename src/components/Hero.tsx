"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center py-20"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          
          alt="Digital technology background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div> */}

      {/* Animated circles */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div> */}

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 ">
        {/* Left */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-accent hover:scale-105 transition"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/ziybex_logo1.png"
              width={1920}
              height={1080}
              alt="Ziybex Solutions"
              className="object-contain w-[500px] h-[500px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
        {[
          { number: "500+", label: "Projects Completed" },
          { number: "300+", label: "Happy Clients" },
          { number: "8+", label: "Years Experience" },
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

// "use client"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, CheckCircle2 } from "lucide-react"

// const Hero = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.querySelector(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20"
//       aria-label="Hero section"
//     >
//       <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />

//       {/* Content layout */}
//       <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-14">
//           {/* Left side: Text + Buttons */}
//           <div className="flex-1 w-full max-w-2xl space-y-8 mt-10">
//             {/* Text composition */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="space-y-2 md:space-y-3"
//             >
//               <motion.h2
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.05 }}
//                 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
//               >
//                  Creative Marketing for your
//                 <span className="text-accent"> BRAND GROWTH</span>
//               </motion.h2>
//             </motion.div>

//             {/* Supporting paragraph */}
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl"
//             >
//               We design intelligent digital experiences and growth systems across strategy, creative, and development—so
//               your brand stands out and scales.
//             </motion.p>

//             {/* Quick value bullets */}
//             <motion.ul
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.45 }}
//               className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground"
//               aria-label="Key value points"
//             >
//               {[
//                 "Full-funnel strategy & creative",
//                 "SEO + high-performing content",
//                 "Conversion-focused web builds",
//                 "Ongoing optimization & reporting",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <CheckCircle2 className="w-4 h-4 text-accent" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </motion.ul>

//             {/* Buttons below text */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Button
//                 size="lg"
//                 className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group focus-visible:ring-2 focus-visible:ring-accent/60"
//                 aria-label="Get Started"
//                 onClick={() => scrollToSection("#contact")}
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 hover:border-accent focus-visible:ring-2 focus-visible:ring-accent/60 bg-transparent"
//                 aria-label="View Our Services"
//                 onClick={() => scrollToSection("#services")}
//               >
//                 Our Services
//               </Button>
//             </motion.div>

//             {/* Trusted by brands */}
//             <motion.div
//               initial={{ opacity: 0, y: 6 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="mt-10 md:mt-12"
//               aria-label="Trusted by brands"
//             >
//               <div className="text-center text-xs md:text-sm text-muted-foreground mb-3">Trusted by growing brands</div>
//               <div className="flex items-center justify-center gap-6 md:gap-10 opacity-90">
//                 <img src="/generic-brand-logo-1.png" alt="Brand logo 1" className="h-5 md:h-6" />
//                 <img src="/generic-brand-logo-2.png" alt="Brand logo 2" className="h-5 md:h-6" />
//                 <img src="/brand-logo-3.png" alt="Brand logo 3" className="h-5 md:h-6" />
//                 <img src="/brand-logo-4.png" alt="Brand logo 4" className="h-5 md:h-6" />
//               </div>
//             </motion.div>
//           </div>

//           {/* Right side: Logo image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="w-full lg:w-auto flex justify-center"
//           >
//             <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] overflow-hidden rounded-2xl bg-background shadow-lg ring-1 ring-border p-6">
//               <img src="/ziybex_logo1.png" alt="Ziybex Solutions logo" className="w-full h-full object-contain" />
//             </div>
//           </motion.div>
//         </div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
//         >
//           {[
//             { number: "500+", label: "Projects Completed" },
//             { number: "300+", label: "Happy Clients" },
//             { number: "8+", label: "Years Experience" },
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">{stat.number}</div>
//               <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
//         aria-hidden="true"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
//           className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero
