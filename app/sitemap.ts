import type { MetadataRoute } from 'next';

const BASE = 'https://sairam949.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...['/cashfree', '/amazon', '/primevideo', '/cimpress', '/nukestorybook'].map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
