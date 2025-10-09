"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Our Services", "Portfolio", "Blogs"],
    Services: [
      "Social Media Marketing",
      "Branding & Creative Design",
      "SEO Optimization",
      "Web Design & Development",
      "PPC & Google Ads",
      "2D & 3D Animation",
    ],
    Support: ["Contact Us", "FAQ", "Privacy Policy", "Terms of Service"],
  };

  const scrollToSection = (href: string) => {
    const sectionMap: { [key: string]: string } = {
      "About Us": "#about",
      "Our Services": "#services",
      Portfolio: "#portfolio",
      Blogs: "#blogs",
      "Contact Us": "#contact",
    };

    const sectionId = sectionMap[href];
    if (sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const pageLinks: { [key: string]: string } = {
    FAQ: "/faq",
    "Privacy Policy": "/privacy-policy",
    "Terms of Service": "/terms-of-service",
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-3xl mb-4">
                Ziybex<span className="text-accent">.</span>
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Transforming businesses through innovative digital solutions. We
                help brands grow, connect, and stand out in the digital
                landscape.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/ziybex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="https://instagram.com/ziybex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/ziybex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {pageLinks[link] ? (
                      <a
                        href={pageLinks[link]}
                        className="text-primary-foreground/70 hover:text-accent transition-smooth text-left block"
                      >
                        {link}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link)}
                        className="text-primary-foreground/70 hover:text-accent transition-smooth cursor-pointer text-left"
                      >
                        {link}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Ziybex Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
