import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Ziybex - Creative Marketing Agency Karachi",
  description:
    "Frequently Asked Questions about Ziybex, a creative marketing agency offering web design, branding, SEO, and social marketing services in Karachi.",
  keywords: [
    "FAQ Ziybex",
    "Ziybex questions",
    "creative marketing agency FAQ",
    "web design FAQ",
    "SEO FAQ",
    "branding FAQ",
  ],
  alternates: { canonical: "/faq" },
};

const faqData = [
  {
    question: "What services does Ziybex offer?",
    answer:
      "Ziybex provides web design & development, SEO optimization, branding & creative design, social media marketing, PPC & Google Ads, and 2D & 3D animation services.",
  },
  {
    question: "Where is Ziybex located?",
    answer:
      "We are based in Karachi, Sindh, Pakistan, serving clients locally and globally.",
  },
  {
    question: "How can I contact Ziybex?",
    answer:
      "You can contact us via email at ziybix@gmail.com or call us at +923171875753. We typically respond within 24 hours on business days.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 2-4 weeks, while branding projects can take 1-2 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes! We understand every business has unique needs. We offer fully customizable packages tailored to your specific requirements and budget. Contact us to discuss your project.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across all industries including e-commerce, healthcare, technology, education, real estate, and more. Our diverse portfolio showcases our versatility.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Absolutely! We offer maintenance packages and ongoing support to ensure your digital presence continues to perform optimally. This includes updates, security monitoring, and technical assistance.",
  },
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Find answers to common questions about our services, process, and
            how we can help grow your brand
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="item-0"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card px-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-16 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Still Have Questions?</h2>
            <p className="mb-6 text-muted-foreground">
              Can&apos;t find the answer you&apos;re looking for? Get in touch with our
              team.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:ziybix@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 hover:shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
              <a
                href="tel:+923171875753"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
