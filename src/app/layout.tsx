import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Agency in Hyderabad | 4KMEDIA",
    template: "%s | 4KMEDIA",
  },
  description: "4KMEDIA is a leading digital marketing agency in Hyderabad specializing in SEO, social media marketing, web development, and performance marketing.",
  keywords: ["Digital Marketing Agency Hyderabad", "SEO Services Hyderabad", "Social Media Marketing Hyderabad", "Website Development Hyderabad", "UI/UX Design", "Video Production", "4kmediax"],
  authors: [{ name: "4KMEDIA LLP" }],
  creator: "4KMEDIA LLP",
  publisher: "4KMEDIA LLP",
  metadataBase: new URL("https://www.4kmedia.in"),
  alternates: {
    canonical: "https://www.4kmedia.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.4kmedia.in",
    siteName: "4KMEDIA",
    title: "Digital Marketing Agency in Hyderabad | 4KMEDIA",
    description: "4KMEDIA is a leading digital marketing agency in Hyderabad specializing in SEO, social media marketing, web development, and performance marketing.",
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
    creator: "@4KMEDIA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-1E1477LXDR",
  },
  icons: {
    icon: [
      { url: '/logo1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo1.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "4KMEDIA LLP",
    "alternateName": "4kmediax",
    "url": "https://www.4kmedia.in",
    "logo": "https://www.4kmedia.in/assets/33.png",
    "sameAs": [
      "https://www.linkedin.com/company/4kmedia-in",
      "https://instagram.com/4kmediax",
      "https://youtube.com/@4kmediax"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919989958238",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Telugu"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3-13-745, Bharath Nagar, Mansoorabad, LB Nagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500074",
      "addressCountry": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "4KMEDIA LLP",
    "alternateName": "4kmediax",
    "image": "https://www.4kmedia.in/assets/33.png",
    "@id": "https://www.4kmedia.in/#localbusiness",
    "url": "https://www.4kmedia.in",
    "telephone": "+919989958238",
    "priceRange": "₹₹",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "4KMEDIA",
    "alternateName": "4kmediax",
    "url": "https://www.4kmedia.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.4kmedia.in/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Tag Manager / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1E1477LXDR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1E1477LXDR');
          `}
        </Script>

        {/* Meta Pixel Code (ID: 1952785648972570) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1952785648972570');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1952785648972570&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#11181f] text-white min-h-full flex flex-col`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1 pt-16 lg:pt-20 overflow-clip overflow-y-visible">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
