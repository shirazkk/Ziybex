import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";

const transformaMixMedium = localFont({
  src: [
    {
      path: "/fonts/TransformaMixMedium.woff2",
      weight: "500", // Medium weight
      style: "normal",
    },
  ],
  display: "swap", // Recommended for better user experience
  variable: "--font-transforma-mix-medium",
});

const montserrat = localFont({
  src: [
    {
      path: "/fonts/MontserratItalicVariableFont.woff2",
      style: "italic",
      weight: "400", // normal weight for paragraphs
    },
  ],
  display: "swap",
  variable: "--font-montserrat",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    <html
      lang="en"
      className={`${transformaMixMedium.variable} ${montserrat.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziybex.com" />

        {/* Favicon & Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziybex.com" />
        <meta
          property="og:title"
          content="Ziybex | Creative Marketing Agency Karachi"
        />
        <meta
          property="og:description"
          content="Ziybex is a creative marketing agency offering modern web design, branding, and SEO solutions for digital growth."
        />
        <meta property="og:image" content="https://ziybex.com/ZS.jpg" />
        <meta property="og:site_name" content="Ziybex" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ziybex | Creative Marketing Agency Karachi"
        />
        <meta
          name="twitter:description"
          content="Ziybex is a creative marketing agency providing web design, branding, and SEO solutions to help your business grow online."
        />
        <meta name="twitter:image" content="https://ziybex.com/ZS.jpg" />
        <meta name="twitter:site" content="@ziybex" />
        <meta name="twitter:creator" content="@ziybex" />

        {/* JSON-LD Structured Data */}
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
              founder: {
                "@type": "Person",
                name: "Shahzaib Usman",
              },
              sameAs: [
                "https://facebook.com/ziybex",
                "https://www.linkedin.com/company/ziybex",
                "https://instagram.com/ziybex",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+923171875753",
                email: "ziybix@gmail.com",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: ["English"],
              },
              brand: {
                "@type": "Brand",
                name: "Ziybex",
                logo: "https://ziybex.com/favicon.ico",
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
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
