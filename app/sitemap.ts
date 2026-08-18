import type { MetadataRoute } from 'next';
import { CONVERSION_PAIRS } from '@/lib/conversion-engine';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://speedometer.tools';
  const now = new Date();

  const staticPages = [
    '',
    '/speedometer',
    '/speed-converter',
    '/guides',
    '/guides/how-gps-speed-works',
    '/guides/gps-speed-vs-car-speedometer',
    '/guides/how-accurate-is-gps-speed',
    '/guides/phone-as-speedometer',
    '/guides/kmh-vs-mph',
    '/guides/what-are-knots',
    '/guides/speed-units-explained',
    '/guides/speedometer-accuracy',
    '/faq',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/speedometer' ? 1.0 : route.startsWith('/guides') || route.startsWith('/speed-converter') ? 0.8 : 0.5,
  }));

  const conversionPages = CONVERSION_PAIRS.map((pair) => ({
    url: `${baseUrl}/speed-converter/${pair.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...conversionPages];
}
