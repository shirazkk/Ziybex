/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ziybex.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/studio/*', '/private/*', '/admin/*'], // exclude non-public areas
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/private', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://ziybex.com/sitemap.xml', // main sitemap
    ],
  },
};
