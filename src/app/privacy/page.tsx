import type { Metadata } from "next";
import Privacy from "@/pages/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | 4KMEDIA Digital Marketing Agency",
  description: "Read 4KMEDIA's Privacy Policy. Learn how we collect, use, process, and protect your personal data under the DPDP Act 2023 and IT Act.",
  keywords: "Privacy Policy, Data Protection, DPDP Act 2023, 4KMEDIA Privacy, Digital Marketing Agency Hyderabad, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | 4KMEDIA Digital Marketing Agency",
    description: "Read 4KMEDIA's Privacy Policy. Learn how we collect, use, process, and protect your personal data under the DPDP Act 2023 and IT Act.",
    url: "https://www.4kmedia.in/privacy",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - 4KMEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | 4KMEDIA Digital Marketing Agency",
    description: "Read 4KMEDIA's Privacy Policy. Learn how we collect, use, process, and protect your personal data under the DPDP Act 2023 and IT Act.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
