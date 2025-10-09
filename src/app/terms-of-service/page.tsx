import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Ziybex - Creative Marketing Agency Karachi",
  description:
    "Read Ziybex's Terms of Service to understand our rules, responsibilities, and policies for providing web design, SEO, branding, and digital marketing services.",
  keywords: [
    "terms of service Ziybex",
    "Ziybex policies",
    "creative marketing agency terms",
    "website terms and conditions",
  ],
  alternates: { canonical: "/terms-of-service" },
};

const termsData = [
  {
    title: "Service Usage",
    content:
      "You may use our services only for lawful purposes. Any misuse may result in termination of service. We reserve the right to suspend or terminate access to our services at our discretion if we determine that usage violates these terms or applicable laws.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, designs, and code created by Ziybex are our intellectual property unless otherwise agreed upon in writing. Upon full payment, clients receive the agreed-upon usage rights for deliverables as specified in the project agreement.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Ziybex is not liable for any indirect or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service in question. We strive to deliver quality work but cannot guarantee specific business outcomes.",
  },
  {
    title: "Payment Terms",
    content:
      "Payment terms will be specified in individual project agreements. Generally, we require a deposit before beginning work and final payment upon project completion. Late payments may incur additional fees or result in service suspension.",
  },
  {
    title: "Project Modifications",
    content:
      "Changes to project scope after approval may result in additional charges. We will provide estimates for any requested modifications before proceeding. Minor revisions within the agreed scope are included in the original quote.",
  },
  {
    title: "Confidentiality",
    content:
      "We respect the confidentiality of client information and will not disclose proprietary details to third parties. Clients agree that we may showcase completed work in our portfolio unless a non-disclosure agreement specifies otherwise.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate services with written notice. Upon termination, clients are responsible for payment of work completed to date. Ziybex retains the right to refuse service to any client at our discretion.",
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Please read these terms carefully before using Ziybex web design,
            SEO, branding, and digital marketing services
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
              By using Ziybex services, you agree to these Terms of Service.
              These terms govern your use of our website and services, including
              web design, development, SEO optimization, branding, and digital
              marketing solutions. Please read them carefully before engaging
              with our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-6">
          {termsData.map((section, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="mb-4 text-2xl font-bold text-foreground">
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
            <h2 className="mb-4 text-2xl font-bold">
              Questions About Our Terms?
            </h2>
            <p className="mb-6 text-muted-foreground">
              If you have any questions or concerns about these terms of
              service, please don&apos;t hesitate to reach out to us.
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
