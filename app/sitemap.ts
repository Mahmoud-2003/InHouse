import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const routes = ['', '/inhouse', '/lol', '/valorant', '/queue', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
