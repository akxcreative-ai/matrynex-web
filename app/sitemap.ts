import { MetadataRoute } from 'next';
import { products } from '@/lib/data/products';
import { projects } from '@/lib/data/projects';
import { guides } from '@/lib/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matrynex-web-rwch.vercel.app';

  // Static routes
  const staticRoutes = [
    '',
    '/store',
    '/projects',
    '/guides',
    '/about',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/affiliate-disclosure',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic products
  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/store/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic projects
  const projectRoutes = projects.map((pr) => ({
    url: `${baseUrl}/projects/${pr.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic guides
  const guideRoutes = guides.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes, ...guideRoutes];
}
