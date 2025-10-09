import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ziybex - Creative Marketing Agency Karachi",
  description:
    "Learn about Ziybex's Privacy Policy, how we protect your data while providing web design, SEO, branding, and social marketing services.",
  keywords: [
    "privacy policy Ziybex",
    "data protection",
    "creative marketing agency privacy",
    "website privacy policy",
  ],
  alternates: { canonical: "/privacy-policy" },
};

const privacyData = [
  {
    title: "Information We Collect",
    content:
      "We may collect your name, email address, and website usage data for better service delivery. This information helps us provide personalized services and improve your experience with Ziybex.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your data is used only for communication, service improvement, and marketing purposes. We never sell your personal data to third parties. We are committed to maintaining the trust and confidence of our visitors.",
  },
  {
    title: "Cookies",
    content:
      "We use cookies to enhance user experience and analyze website traffic. Cookies help us understand how you use our website and enable us to improve our services accordingly.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. Your data is stored securely and accessed only by authorized personnel.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use third-party services for analytics and marketing purposes. These services have their own privacy policies, and we encourage you to review them.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, modify, or delete your personal information at any time. Contact us if you wish to exercise these rights or have any concerns about your data.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl font-heading">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Learn about how Ziybex protects your data while providing web
            design, SEO, branding, and digital marketing services
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              At Ziybex, we respect your privacy. This policy explains how we
              collect, use, and protect your personal information when you use
              our website and services. We are committed to ensuring that your
              privacy is protected and that any information you provide is
              handled responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-6">
          {privacyData.map((section, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="mb-4 text-2xl font-bold text-foreground font-heading">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold font-heading">
              Questions About Our Privacy Policy?
            </h2>
            <p className="mb-6 text-muted-foreground">
              If you have any questions or concerns about this privacy policy,
              please don&apos;t hesitate to reach out to us.
            </p>
            <a
              href="mailto:ziybix@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 hover:shadow-lg"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
