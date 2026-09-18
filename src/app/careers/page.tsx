import type { Metadata } from "next";
import Careers from "@/pages/Careers";

export const metadata: Metadata = {
  title: "Careers at 4KMEDIA | Digital Marketing Jobs Hyderabad",
  description: "Join 4KMEDIA in Hyderabad. Explore career opportunities in SEO, social media marketing, web development, UI/UX design, and content creation.",
  keywords: "Digital Marketing Jobs Hyderabad, Careers at 4KMEDIA, SEO Jobs, Social Media Jobs, Web Development Careers, Graphic Designer Jobs Hyderabad, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/careers",
  },
  openGraph: {
    title: "Careers at 4KMEDIA | Digital Marketing Jobs Hyderabad",
    description: "Join 4KMEDIA in Hyderabad. Explore career opportunities in SEO, social media marketing, web development, UI/UX design, and content creation.",
    url: "https://www.4kmedia.in/careers",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Careers at 4KMEDIA Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at 4KMEDIA | Digital Marketing Jobs Hyderabad",
    description: "Join 4KMEDIA in Hyderabad. Explore career opportunities in SEO, social media marketing, web development, UI/UX design, and content creation.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function CareersPage() {
  return <Careers />;
}
