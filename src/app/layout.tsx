import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ziybex.com"),
  title: {
    default: "Ziybex | Creative Web Solutions",
    template: "%s | Ziybex",
  },
  description:
    "Ziybex is a modern creative digital studio offering web design, development, and branding solutions.",
  keywords: [
    "Ziybex",
    "web design",
    "web development",
    "creative agency",
    "branding",
  ],
  authors: [{ name: "Ziybex" }],
  icons: {
    icon: { url: "/ziybex_logo1.png", type: "image/png" },
    shortcut: "/ziybex_logo1.png",
    apple: "/ziybex_logo1.png",
  },
  openGraph: {
    type: "website",
    url: "https://ziybex.com",
    title: "Ziybex | Creative Web Solutions",
    description:
      "Ziybex is a modern creative digital studio offering web design, development, and branding solutions.",
    siteName: "Ziybex",
    images: [
      {
        url: "/ZB-Website Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ziybex - Creative Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziybex | Creative Web Solutions",
    description:
      "Ziybex is a modern creative digital studio offering web design, development, and branding solutions.",
    images: ["/ZB-Website Banner.jpg"],
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
        {/* Organization JSON-LD */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ziybex",
              url: "https://ziybex.com",
              logo: "https://ziybex.com/ziybex_logo1.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />
        {/* Website JSON-LD */}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
