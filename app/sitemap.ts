import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://templatiz.io'

  // Core pages
  const routes = [
    '',
    '/pricing',
    '/blog',
    '/contact',
    '/waitlist',
    '/login',
    '/signup',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const blogPosts = [
    '/blog/join-the-tempatiz-beta',
    '/blog/why-templatizing-content-is-the-secret'
  ].map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogPosts]
} 