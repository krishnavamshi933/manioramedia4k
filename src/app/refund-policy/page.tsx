import type { Metadata } from "next";
import RefundPolicy from "@/pages/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | 4KMEDIA Hyderabad",
  description: "Read 4KMEDIA's Refund and Cancellation Policy. Detailed guidelines on advance payments, client cancellations, retainers, and refund requests.",
  keywords: "Refund Policy, Cancellation Policy, 4KMEDIA Refund, Terms of Service, Digital Marketing Agency Hyderabad, 4kmediax",
  alternates: {
    canonical: "https://www.4kmedia.in/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | 4KMEDIA Hyderabad",
    description: "Read 4KMEDIA's Refund and Cancellation Policy. Detailed guidelines on advance payments, client cancellations, retainers, and refund requests.",
    url: "https://www.4kmedia.in/refund-policy",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.4kmedia.in/assets/33.png",
        width: 1200,
        height: 630,
        alt: "Refund Policy - 4KMEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy | 4KMEDIA Hyderabad",
    description: "Read 4KMEDIA's Refund and Cancellation Policy. Detailed guidelines on advance payments, client cancellations, retainers, and refund requests.",
    images: ["https://www.4kmedia.in/assets/33.png"],
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
