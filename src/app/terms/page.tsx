import type { Metadata } from "next";
import Terms from "@/pages/Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions | 4KMEDIA Digital Agency",
  description: "Read 4KMEDIA's Terms and Conditions. Guidelines governing client engagements, scope, payment terms, IP rights, and service delivery.",
  keywords: "Terms and Conditions, Terms of Service, 4KMEDIA Terms, Client Agreement, Digital Marketing Agency Hyderabad, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/terms",
  },
  openGraph: {
    title: "Terms and Conditions | 4KMEDIA Digital Agency",
    description: "Read 4KMEDIA's Terms and Conditions. Guidelines governing client engagements, scope, payment terms, IP rights, and service delivery.",
    url: "https://www.4kmedia.in/terms",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - 4KMEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | 4KMEDIA Digital Agency",
    description: "Read 4KMEDIA's Terms and Conditions. Guidelines governing client engagements, scope, payment terms, IP rights, and service delivery.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function TermsPage() {
  return <Terms />;
}
