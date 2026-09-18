import type { Metadata, ResolvingMetadata } from "next";
import { jobsData } from "@/constants/jobsData";
import JobDetail from "@/pages/JobDetail";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    props: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const job = jobsData.find((j) => j.id === params.slug);

    if (!job) {
        return {
            title: "Job Position Not Found | 4KMEDIA Careers",
        };
    }

    const title = `${job.title} | Careers at 4KMEDIA`;
    const rawDesc = job.description || `Apply for ${job.title} at 4KMEDIA in Hyderabad. Join our digital marketing agency team and build a rewarding career.`;
    const description = rawDesc.length > 155 ? `${rawDesc.substring(0, 152)}...` : rawDesc;
    const url = `https://www.4kmedia.in/careers/${job.id}`;

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
    return jobsData.map((job) => ({
        slug: job.id,
    }));
}

export default async function JobDynamicPage(props: Props) {
    const params = await props.params;
    const job = jobsData.find((j) => j.id === params.slug);

    if (!job) {
        notFound();
    }

    return <JobDetail job={job} />;
}
