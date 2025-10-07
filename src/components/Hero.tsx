// "use client";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// const Hero = () => {
//   const scrollToSection = (id: string) => {
//     const el = document.querySelector(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col items-center py-20"
//     >
//       {/* Background */}
//       {/* <div className="absolute inset-0 z-0">
//         <img
//           src="/hero-bg.jpg"

//           alt="Digital technology background"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
//       </div> */}

//       {/* Animated circles */}
//       {/* <div className="absolute inset-0 z-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
//         />
//       </div> */}

//       <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 ">
//         {/* Left */}
//         <div className="flex-1 space-y-6 text-center lg:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold leading-tight"
//           >
//             Creative Marketing for your{" "}
//             <span className="text-accent">Brand Growth</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
//           >
//             We help businesses automate workflows, build intelligent digital
//             experiences, and grow brands with design, marketing, and
//             development.
//           </motion.p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Button
//               size="lg"
//               className="bg-accent hover:bg-accent/80 hover:scale-105 transition"
//               onClick={() => scrollToSection("#contact")}
//             >
//               Get Started <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => scrollToSection("#services")}
//             >
//               Our Services
//             </Button>
//           </div>
//         </div>

//         {/* Right */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="flex-1 flex justify-center"
//         >
//           <div className="flex items-center justify-center">
//             <Image
//               src="/ziybex_logo1.png"
//               width={1920}
//               height={1080}
//               alt="Ziybex Solutions"
//               className="object-contain w-[500px] h-[500px]"
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Stats */}
//       <div className="mt-16 grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
//         {[
//           { number: "500+", label: "Projects Completed" },
//           { number: "300+", label: "Happy Clients" },
//           { number: "8+", label: "Years Experience" },
//         ].map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//           >
//             <h3 className="text-3xl font-bold text-accent">{stat.number}</h3>
//             <p className="text-muted-foreground">{stat.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
      className="relative min-h-screen flex flex-col items-center py-20"
    >
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
            <Logo3D />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
        {[
          { number: "500+", label: "Projects Completed" },
          { number: "300+", label: "Happy Clients" },
          { number: "5+", label: "Years Experience" },
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
