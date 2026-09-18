import type { Metadata, ResolvingMetadata } from "next";
import { servicesData } from "@/constants/servicesData";
import ServiceDetail from "@/pages/ServiceDetail";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata(
    props: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const service = servicesData.find((s) => s.id === params.id);

    if (!service) {
        return {
            title: "Service Not Found | 4KMEDIA",
        };
    }

    const title = `${service.t} Services | 4KMEDIA Hyderabad`;
    const rawDesc = service.d || `Professional ${service.t} services in Hyderabad by 4KMEDIA. Drive growth and engagement with our data-driven agency strategies.`;
    const description = rawDesc.length > 155 ? `${rawDesc.substring(0, 152)}...` : rawDesc;
    const url = `https://www.4kmedia.in/services/${service.id}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "4KMEDIA",
            locale: "en_IN",
            type: "article",
            images: [
                {
                    url: "https://www.4kmedia.in/assets/33.png",
                    alt: title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://www.4kmedia.in/assets/33.png"],
        },
    };
}

export function generateStaticParams() {
    return servicesData.map((service) => ({
        id: service.id,
    }));
}

export default async function ServiceDynamicPage(props: Props) {
    const params = await props.params;
    const service = servicesData.find((s) => s.id === params.id);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.t,
        "description": service.d,
        "provider": {
            "@type": "Organization",
            "name": "4KMEDIA LLP",
            "alternateName": "4kmediax",
            "url": "https://www.4kmedia.in"
        },
        "areaServed": "IN",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.t,
            "itemListElement": service.subServices?.map((sub) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": sub.title,
                    "description": sub.description
                }
            })) || []
        }
    };

  return (
    <>
      <Script
        id={`service-schema-${service.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
