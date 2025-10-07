/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ziybex.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/studio/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/studio'] },
    ],
    additionalSitemaps: [
      'https://ziybex.com/sitemap.xml',
    ],
  },
};


