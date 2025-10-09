import type { Metadata, Viewport } from "next";
import { Georama } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const georama = Georama({
  variable: "--font-product-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ziybex.com"),
  title: {
    default: "Ziybex | Creative Marketing Agency karachi",
    template: "%s | Ziybex",
  },
  description:
    "Ziybex is a creative marketing agency specializing in modern web design, branding, and SEO solutions that help businesses grow online.",
  keywords: [
    "Ziybex",
    "creative marketing agency",
    "creative marketing agency Karachi",
    "web design company",
    "website design & development",
    "SEO services",
    "SEO optimization",
    "branding agency",
    "brand identity design",
    "social media marketing",
    "PPC services",
    "Google Ads management",
    "2D animation",
    "3D animation",
    "UI UX design",
    "creative agency Pakistan",
  ],

  authors: [{ name: "Ziybex" }],
  alternates: {
    canonical: "https://ziybex.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziybex.com",
    title: "Ziybex | Creative Marketing Agency karachi",
    description:
      "Ziybex is a creative marketing agency offering modern web design, branding, and SEO solutions for digital growth.",
    siteName: "Ziybex",
    images: [
      {
        url: "/ZS.jpg",
        width: 1200,
        height: 630,
        alt: "Ziybex - Creative Marketing Agency karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziybex | Creative Marketing Agency karachi",
    description:
      "Ziybex is a creative marketing agency providing web design, branding, and SEO solutions to help your business grow online.",
    images: ["/ZS.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziybex.com" />

        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ziybex",
              url: "https://ziybex.com",
              logo: "https://ziybex.com/favicon.ico",
              sameAs: [
                "https://facebook.com/ziybex",
                "https://www.linkedin.com/company/ziybex",
                "https://instagram.com/ziybex",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+923171875753",
                email: "ziybix@gmail.com",
                location: "Karachi, Sindh",
                contactType: "customer service",
                areaServed: "PK",
              },
            }),
          }}
        />

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ziybex",
              url: "https://ziybex.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ziybex.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Ziybex",
              image: "https://ziybex.com/ZS.jpg",
              description:
                "Ziybex is a creative marketing agency specializing in web design, branding, and SEO solutions for growing businesses.",
              url: "https://ziybex.com",
              serviceType: [
                "Social Media Marketing",
                "Branding & Creative Design",
                "SEO Optimization",
                "Website Design & Development",
                "PPC & Google Ads",
                "2D & 3D Animation",
              ],
              offers: {
                "@type": "Offer",
                url: "https://ziybex.com/#services",
                priceCurrency: "PKR",
                availability: "https://schema.org/InStock",
              },
              address: {
                "@type": "PostalAddress",
                location: "https://maps.app.goo.gl/JvMEZK97mHGyERQ89",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>

      <body className={`${georama.variable} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
