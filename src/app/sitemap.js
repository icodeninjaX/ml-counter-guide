import { heroes } from '../data/heroes';

export default function sitemap() {
    // Base URL - update this with your actual domain when deployed
    const baseUrl = 'https://your-domain.com';

    // Get current date for lastModified
    const currentDate = new Date();

    // Create sitemap entries for all pages
    const routes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/heroes`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Add all hero detail pages
    const heroRoutes = heroes.map((hero) => ({
        url: `${baseUrl}/heroes/${hero.id}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...routes, ...heroRoutes];
}
