import { MetadataRoute } from 'next'
import { servicesData } from '@/constants/servicesData'
import { jobsData } from '@/constants/jobsData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.4kmedia.in'

    // Dynamic service routes
    const serviceUrls = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Dynamic career/job routes
    const jobUrls = jobsData.map((job) => ({
        url: `${baseUrl}/careers/${job.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const routes = [
        '',
        '/about',
        '/services',
        '/careers',
        '/contact',
        '/privacy',
        '/terms',
        '/refund-policy',
        '/disclaimer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...serviceUrls, ...jobUrls]
}
