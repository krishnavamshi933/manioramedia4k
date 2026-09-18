import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Hyderabad | 4KMEDIA",
  description: "Explore top digital marketing services in Hyderabad by 4KMEDIA. Professional SEO, social media ads, website development, UI/UX, & video production.",
  keywords: "Digital Marketing Services Hyderabad, SEO Hyderabad, Social Media Marketing, Website Development, UI/UX Design, Video Production, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/services",
  },
  openGraph: {
    title: "Digital Marketing Services in Hyderabad | 4KMEDIA",
    description: "Explore top digital marketing services in Hyderabad by 4KMEDIA. Professional SEO, social media ads, website development, UI/UX, & video production.",
    url: "https://www.4kmedia.in/services",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services - 4KMEDIA Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Hyderabad | 4KMEDIA",
    description: "Explore top digital marketing services in Hyderabad by 4KMEDIA. Professional SEO, social media ads, website development, UI/UX, & video production.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function ServicesPage() {
  return <Services />;
}
