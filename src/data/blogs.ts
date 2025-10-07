export type Blog = {
  slug: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  date: string; // ISO string
};

export const blogs: Blog[] = [
  {
    slug: "design-trends-2025",
    title: "Design Trends Shaping 2025",
    shortDescription:
      "A quick look at the minimal, bold, and immersive design shifts this year.",
    content:
      "In 2025, design embraces clarity and emotion. Motion is purposeful, typography is bold yet legible, and 3D blends seamlessly with flat visuals...",
    image: "/projects/1.webp",
    date: "2025-07-10T00:00:00.000Z",
  },
  {
    slug: "seo-playbook-modern-brands",
    title: "SEO Playbook for Modern Brands",
    shortDescription:
      "Practical, human-first SEO tactics that actually move the needle.",
    content:
      "Algorithms change, but intent doesn’t. Focus on search journeys, topical depth, and performance budgets to win sustainable organic growth...",
    image: "/projects/2.webp",
    date: "2025-08-02T00:00:00.000Z",
  },
  {
    slug: "web-performance-ux",
    title: "Web Performance As a UX Feature",
    shortDescription:
      "Speed is design. Here’s how we ship delightful, fast experiences.",
    content:
      "Performance is a product decision. Measure what matters, ship less JavaScript, optimize images, stream video smartly, and design for perceived speed...",
    image: "/projects/3.webp",
    date: "2025-08-16T00:00:00.000Z",
  },
  {
    slug: "brand-storytelling-basics",
    title: "Brand Storytelling Basics",
    shortDescription:
      "Tell clear, memorable stories that your audience actually cares about.",
    content:
      "Stories create meaning. Define your protagonist (the customer), the conflict, and the resolution your product enables. Keep it simple, visual, and true...",
    image: "/projects/4.webp",
    date: "2025-09-01T00:00:00.000Z",
  },
  {
    slug: "ai-in-creative-workflows",
    title: "Where AI Fits in Creative Workflows",
    shortDescription:
      "Use AI to explore more, not to replace taste or craft.",
    content:
      "AI accelerates iteration. It drafts, suggests, and helps visualize options. Human judgment still curates, polishes, and aligns to brand truth...",
    image: "/ZB_hero.png",
    date: "2025-09-14T00:00:00.000Z",
  },
];

export function getAllBlogs(): Blog[] {
  return blogs
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestBlogs(limit = 4): Blog[] {
  return getAllBlogs().slice(0, limit);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}


