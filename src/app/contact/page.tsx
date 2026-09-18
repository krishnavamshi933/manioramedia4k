import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact 4KMEDIA | Digital Marketing Agency Hyderabad",
  description: "Get in touch with 4KMEDIA, Hyderabad's premier digital marketing agency. Request a free consultation for SEO, social media, web development, & branding.",
  keywords: "Contact 4KMEDIA, Digital Marketing Agency Hyderabad, SEO Consultation, Web Development Quote, Social Media Marketing Hyderabad, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/contact",
  },
  openGraph: {
    title: "Contact 4KMEDIA | Digital Marketing Agency Hyderabad",
    description: "Get in touch with 4KMEDIA, Hyderabad's premier digital marketing agency. Request a free consultation for SEO, social media, web development, & branding.",
    url: "https://www.4kmedia.in/contact",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Contact 4KMEDIA Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact 4KMEDIA | Digital Marketing Agency Hyderabad",
    description: "Get in touch with 4KMEDIA, Hyderabad's premier digital marketing agency. Request a free consultation for SEO, social media, web development, & branding.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function ContactPage() {
  return <Contact />;
}
