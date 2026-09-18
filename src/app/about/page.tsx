import type { Metadata } from "next";
import About from "@/pages/About";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About 4KMEDIA | Digital Marketing Agency Hyderabad",
  description: "Learn about 4KMEDIA, Hyderabad's trusted digital marketing agency. Our experts deliver SEO, social media, web development & growth marketing.",
  keywords: "About 4kMedia, Digital Marketing Agency Hyderabad, SEO Experts Hyderabad, Marketing Team, Web Development Company, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/about",
  },
  openGraph: {
    title: "About 4KMEDIA | Digital Marketing Agency Hyderabad",
    description: "Learn about 4KMEDIA, Hyderabad's trusted digital marketing agency. Our experts deliver SEO, social media, web development & growth marketing.",
    url: "https://www.4kmedia.in/about",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "About 4KMEDIA - Digital Marketing Agency Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About 4KMEDIA | Digital Marketing Agency Hyderabad",
    description: "Learn about 4KMEDIA, Hyderabad's trusted digital marketing agency. Our experts deliver SEO, social media, web development & growth marketing.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About 4KMEDIA",
    "description": "Information about 4KMEDIA digital marketing agency in Hyderabad.",
    "url": "https://www.4kmedia.in/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "4KMEDIA LLP",
      "alternateName": "4kmediax",
      "url": "https://www.4kmedia.in",
      "logo": "https://www.4kmedia.in/assets/33.png",
      "description": "A leading digital marketing agency in Hyderabad specializing in SEO, Social Media, and Web Development."
    }
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
