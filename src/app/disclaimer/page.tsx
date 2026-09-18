import type { Metadata } from "next";
import Disclaimer from "@/pages/Disclaimer";

export const metadata: Metadata = {
  title: "Disclaimer | 4KMEDIA Digital Marketing Agency",
  description: "Read 4KMEDIA's Disclaimer. Information regarding website use, professional advice, advertising results, third-party services, and legal boundaries.",
  keywords: "Disclaimer, Legal Disclaimer, 4KMEDIA Disclaimer, Terms of Service, Digital Marketing Agency Hyderabad, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | 4KMEDIA Digital Marketing Agency",
    description: "Read 4KMEDIA's Disclaimer. Information regarding website use, professional advice, advertising results, third-party services, and legal boundaries.",
    url: "https://www.4kmedia.in/disclaimer",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Disclaimer - 4KMEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | 4KMEDIA Digital Marketing Agency",
    description: "Read 4KMEDIA's Disclaimer. Information regarding website use, professional advice, advertising results, third-party services, and legal boundaries.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function DisclaimerPage() {
  return <Disclaimer />;
}
