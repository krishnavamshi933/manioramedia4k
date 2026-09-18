import type { Metadata } from "next";
import Home from "@/pages/Home";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Hyderabad | 4KMEDIA",
  description: "4KMEDIA is a leading digital marketing agency in Hyderabad specializing in SEO, social media marketing, web development, and performance marketing.",
  keywords: "Digital Marketing Agency Hyderabad, SEO Services Hyderabad, Social Media Marketing Hyderabad, Website Development Hyderabad, UI/UX Design, Video Production, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in",
  },
  openGraph: {
    title: "Digital Marketing Agency in Hyderabad | 4KMEDIA",
    description: "4KMEDIA is a leading digital marketing agency in Hyderabad specializing in SEO, social media marketing, web development, and performance marketing.",
    url: "https://www.4kmedia.in",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "4KMEDIA - Digital Marketing Agency in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Hyderabad | 4KMEDIA",
    description: "4KMEDIA is a leading digital marketing agency in Hyderabad specializing in SEO, social media marketing, web development, and performance marketing.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "4KMEDIA",
    "alternateName": "4kmediax",
    "image": "https://www.4kmedia.in/assets/33.png",
    "@id": "https://www.4kmedia.in/#localbusiness",
    "url": "https://www.4kmedia.in",
    "telephone": "+919989958238",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3-13-745, Bharath Nagar, Mansoorabad, LB Nagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500074",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3457,
      "longitude": 78.5522
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/4kmedia-in",
      "https://instagram.com/4kmediax",
      "https://youtube.com/@4kmediax"
    ]
  };

  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
