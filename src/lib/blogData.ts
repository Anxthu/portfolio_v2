export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  instagramUrl?: string;
  images?: string[];
  content: Array<{
    type: "paragraph" | "heading" | "list";
    text?: string;
    items?: string[];
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sites-for-designers-vol-2",
    title: "Sites For Designers",
    excerpt: "More essential design resources to bookmark. Round two of must-visit websites covering everything from inspiration galleries to practical design tools.",
    category: "Resources",
    date: "March 2024",
    image: "/images/blog/Post-17/Poster -1sa.jpg",
    images: [
      "/images/blog/Post-17/Poster -1sa.jpg",
      "/images/blog/Post-17/Poster-2.webp",
      "/images/blog/Post-17/Poster-2-1.webp",
      "/images/blog/Post-17/Poster-2-2.jpg",
      "/images/blog/Post-17/Poster-2-3.jpg",
      "/images/blog/Post-17/Poster-6.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "More essential design resources to bookmark. Round two of must-visit websites covering everything from inspiration galleries to practical design tools.",
      },
    ],
  },
  {
    slug: "ui-components-devs",
    title: "UI Component For Devs",
    excerpt: "Ready-to-use components that bridge design and code. Speed up your workflow with these production-ready UI components built for modern frameworks.",
    category: "Resources",
    date: "March 2024",
    image: "/images/blog/Post -16/Poster -1sa.webp",
    images: [
      "/images/blog/Post -16/Poster -1sa.webp",
      "/images/blog/Post -16/Poster-2.jpg",
      "/images/blog/Post -16/Poster-3.jpg",
      "/images/blog/Post -16/Poster-4.jpg",
      "/images/blog/Post -16/Poster-5.jpg",
      "/images/blog/Post -16/Poster-6.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Ready-to-use components that bridge design and code. Speed up your workflow with these production-ready UI components built for modern frameworks.",
      },
    ],
  },
  {
    slug: "ui-ux-inspo-website",
    title: "UI/UX Inspo Website",
    excerpt: "Your new go-to for interface inspiration. Discover a treasure trove of UI/UX examples, patterns, and innovative solutions to common design challenges.",
    category: "Inspiration",
    date: "March 2024",
    image: "/images/blog/Post -15/Poster -1sa.webp",
    images: [
      "/images/blog/Post -15/Poster -1sa.webp",
      "/images/blog/Post -15/Poster-2.jpg",
      "/images/blog/Post -15/Poster-3.jpg",
      "/images/blog/Post -15/Poster-4.jpg",
      "/images/blog/Post -15/Poster-5.jpg",
      "/images/blog/Post -15/Poster-6.webp",
    ],
    content: [
      {
        type: "paragraph",
        text: "Your new go-to for interface inspiration. Discover a treasure trove of UI/UX examples, patterns, and innovative solutions to common design challenges.",
      },
    ],
  },
  {
    slug: "landing-pages-vol-02",
    title: "A Curation of Landing Pages Concepts - Vol:02",
    excerpt: "Week two of landing page inspiration. More stunning concepts pushing the boundaries of web design with innovative interactions and visual storytelling.",
    category: "Inspiration",
    date: "March 2024",
    image: "/images/blog/Post -14/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVsWGqPAZyr/",
    images: [
      "/images/blog/Post -14/Poster -1.webp",
      "/images/blog/Post -14/Poster-2.webp",
      "/images/blog/Post -14/Poster-3.webp",
      "/images/blog/Post -14/Poster-4.webp",
      "/images/blog/Post -14/Poster-5.webp",
      "/images/blog/Post -14/Poster-6.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Week two of landing page inspiration. More stunning concepts pushing the boundaries of web design with innovative interactions and visual storytelling.",
      },
    ],
  },
  {
    slug: "handwritten-fonts",
    title: "Hand Written Fonts",
    excerpt: "Add personality with handwritten typography. These fonts bring warmth and authenticity to your designs, perfect for branding, editorial, and creative projects.",
    category: "Typography",
    date: "March 2024",
    image: "/images/blog/Post -13/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVp27XpAVT0/",
    images: [
      "/images/blog/Post -13/Poster -1.webp",
      "/images/blog/Post -13/Poster-2.jpg",
      "/images/blog/Post -13/Poster-3.jpg",
      "/images/blog/Post -13/Poster-4.jpg",
      "/images/blog/Post -13/Poster-5.jpg",
      "/images/blog/Post -13/Poster-6.jpg",
      "/images/blog/Post -13/Poster-6-1.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Add personality with handwritten typography. These fonts bring warmth and authenticity to your designs, perfect for branding, editorial, and creative projects.",
      },
    ],
  },
  {
    slug: "sites-for-devs",
    title: "Sites For Devs",
    excerpt: "Essential developer resources for designers who code. Bridge the gap between design and development with these tools, documentation sites, and learning platforms.",
    category: "Resources",
    date: "March 2024",
    image: "/images/blog/Post -12/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVnAjzDAer0/",
    images: [
      "/images/blog/Post -12/Poster -1.webp",
      "/images/blog/Post -12/Poster-2.webp",
      "/images/blog/Post -12/Poster-2-1.jpg",
      "/images/blog/Post -12/Poster-2-2.webp",
      "/images/blog/Post -12/Poster-2-3.webp",
      "/images/blog/Post -12/Poster-6.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Essential developer resources for designers who code. Bridge the gap between design and development with these tools, documentation sites, and learning platforms.",
      },
    ],
  },
  {
    slug: "color-palette-designers",
    title: "Color Palette For Designers",
    excerpt: "Curated color combinations that work. From bold and vibrant to subtle and sophisticated, these palettes will inspire your next project and elevate your color theory game.",
    category: "Design Tips",
    date: "March 2024",
    image: "/images/blog/Post -11/Poster -1.jpg",
    instagramUrl: "https://www.instagram.com/p/DVkX9tuAURf/",
    images: [
      "/images/blog/Post -11/Poster -1.jpg",
      "/images/blog/Post -11/Poster-2.webp",
      "/images/blog/Post -11/Poster-2-1.webp",
      "/images/blog/Post -11/Poster-2-2.webp",
      "/images/blog/Post -11/Poster-2-3.jpg",
      "/images/blog/Post -11/Poster-6.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Curated color combinations that work. From bold and vibrant to subtle and sophisticated, these palettes will inspire your next project and elevate your color theory game.",
      },
    ],
  },
  {
    slug: "hidden-internet-design-gem",
    title: "Hidden Internet Design Gem",
    excerpt: "Uncover the design resources hiding in plain sight. This hidden gem will change how you approach your creative workflow and unlock new possibilities.",
    category: "Resources",
    date: "March 2024",
    image: "/images/blog/Post -10/Poster -1.jpg",
    instagramUrl: "https://www.instagram.com/p/DVh7wpHAQmH/",
    images: [
      "/images/blog/Post -10/Poster -1.jpg",
      "/images/blog/Post -10/Poster-3.jpg",
      "/images/blog/Post -10/Poster-3-1.jpg",
      "/images/blog/Post -10/Poster-3-2.jpg",
      "/images/blog/Post -10/Poster-3-3.jpg",
      "/images/blog/Post -10/Poster-6.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Uncover the design resources hiding in plain sight. This hidden gem will change how you approach your creative workflow and unlock new possibilities.",
      },
    ],
  },
  {
    slug: "free-mockups-designers",
    title: "Free Mockups For Designers",
    excerpt: "High-quality mockups without the price tag. Present your work professionally with this collection of free mockup resources for UI, branding, and product design.",
    category: "Resources",
    date: "March 2024",
    image: "/images/blog/Post -9/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVfYjvzgRpn/",
    images: [
      "/images/blog/Post -9/Poster -1.webp",
      "/images/blog/Post -9/Poster-2.webp",
      "/images/blog/Post -9/Poster-3.webp",
      "/images/blog/Post -9/Poster-4.jpg",
      "/images/blog/Post -9/Poster-5.webp",
      "/images/blog/Post -9/Poster-6.webp",
    ],
    content: [
      {
        type: "paragraph",
        text: "High-quality mockups without the price tag. Present your work professionally with this collection of free mockup resources for UI, branding, and product design.",
      },
    ],
  },
  {
    slug: "ink-trap-fonts",
    title: "Ink Trap Fonts For Designers",
    excerpt: "Discover the subtle art of ink trap typography. These fonts are designed with precision cuts that prevent ink bleeding at small sizes, perfect for modern digital and print design.",
    category: "Typography",
    date: "March 2024",
    image: "/images/blog/Post -8/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVdGd9zAaWH/",
    images: [
      "/images/blog/Post -8/Poster -1.webp",
      "/images/blog/Post -8/Poster-2.jpg",
      "/images/blog/Post -8/Poster-3.jpg",
      "/images/blog/Post -8/Poster-4.jpg",
      "/images/blog/Post -8/Poster-5.jpg",
      "/images/blog/Post -8/Poster-6.jpg",
      "/images/blog/Post -8/Poster-7.jpg",
    ],
    content: [
      {
        type: "paragraph",
        text: "Discover the subtle art of ink trap typography. These fonts are designed with precision cuts that prevent ink bleeding at small sizes, perfect for modern digital and print design.",
      },
    ],
  },
  {
    slug: "landing-pages-vol-01",
    title: "A Curation of Landing Pages Concepts - Vol:01",
    excerpt: "This week's best landing page designs. Fresh concepts showcasing innovative layouts, bold typography, and creative approaches to conversion-focused design.",
    category: "Inspiration",
    date: "March 2024",
    image: "/images/blog/Post -7/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVaTGYkgXFR/",
    images: [
      "/images/blog/Post -7/Poster -1.webp",
      "/images/blog/Post -7/Poster-2.webp",
      "/images/blog/Post -7/Poster-3.webp",
      "/images/blog/Post -7/Poster-4.webp",
      "/images/blog/Post -7/Poster-5.webp",
      "/images/blog/Post -7/Poster-6.webp",
    ],
    content: [
      {
        type: "paragraph",
        text: "This week's best landing page designs. Fresh concepts showcasing innovative layouts, bold typography, and creative approaches to conversion-focused design.",
      },
    ],
  },
  {
    slug: "grid-systems-guide",
    title: "Grid Systems",
    excerpt: "Master the foundation of great layouts. Understanding grid systems is crucial for creating balanced, professional designs that work across all devices.",
    category: "Design Systems",
    date: "March 2024",
    image: "/images/blog/Post -6/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVXh-mvAeID/",
    images: [
      "/images/blog/Post -6/Poster -1.webp",
      "/images/blog/Post -6/Poster-2.jpg",
      "/images/blog/Post -6/Poster-3.jpg",
      "/images/blog/Post -6/Poster-4.jpg",
      "/images/blog/Post -6/Poster-5.jpg",
      "/images/blog/Post -6/Poster-6.webp",
    ],
    content: [
      {
        type: "paragraph",
        text: "Master the foundation of great layouts. Understanding grid systems is crucial for creating balanced, professional designs that work across all devices.",
      },
    ],
  },
  {
    slug: "sites-for-designers-vol-1",
    title: "Sites For Designers",
    excerpt: "A curated collection of essential websites every designer should bookmark. From inspiration to resources, these sites will level up your design game.",
    category: "Resources",
    date: "March 2024",
    image: "/images/blog/Post - 4/Poster -1.webp",
    instagramUrl: "https://www.instagram.com/p/DVVlDv2AavO/",
    images: [
      "/images/blog/Post - 4/Poster -1.webp",
      "/images/blog/Post - 4/Poster-2.jpg",
      "/images/blog/Post - 4/Poster-3.jpg",
      "/images/blog/Post - 4/Poster-4.jpg",
      "/images/blog/Post - 4/Poster-5.jpg",
      "/images/blog/Post - 4/Poster-6.webp",
    ],
    content: [
      {
        type: "paragraph",
        text: "A curated collection of essential websites every designer should bookmark. From inspiration to resources, these sites will level up your design game.",
      },
    ],
  },
  {
    slug: "design-systems-scale",
    title: "Building Design Systems That Scale",
    excerpt:
      "How to create design systems that grow with your product and team, maintaining consistency without sacrificing flexibility.",
    category: "Design Systems",
    date: "March 2024",
    image: "/images/visual-identity.jpg",
    content: [
      {
        type: "paragraph",
        text: "Design systems are more than just component libraries—they're the foundation of consistent, scalable product experiences. After working on multiple design systems, I've learned that the key to success isn't just documentation, it's adoption.",
      },
      {
        type: "heading",
        text: "Start with Principles, Not Components",
      },
      {
        type: "paragraph",
        text: "Before diving into button variants and color tokens, establish your design principles. These principles should guide every decision and help teams make choices when the system doesn't have an answer.",
      },
      {
        type: "heading",
        text: "Key Elements of a Scalable Design System",
      },
      {
        type: "list",
        items: [
          "Clear documentation with real-world examples",
          "Flexible tokens that adapt to different contexts",
          "Component variants that cover 80% of use cases",
          "Contribution guidelines for extending the system",
          "Regular audits and updates based on usage data",
        ],
      },
      {
        type: "paragraph",
        text: "The best design systems are living, breathing entities that evolve with your product. They should enable teams to move faster while maintaining quality, not slow them down with rigid rules.",
      },
    ],
  },
  {
    slug: "ux-research-methods",
    title: "Essential UX Research Methods for Product Designers",
    excerpt:
      "A practical guide to choosing the right research methods for different stages of product development.",
    category: "UX Research",
    date: "February 2024",
    image: "/images/digital.jpg",
    content: [
      {
        type: "paragraph",
        text: "UX research isn't one-size-fits-all. The methods you choose should align with your goals, timeline, and resources. Here's how I approach research at different stages of product development.",
      },
      {
        type: "heading",
        text: "Discovery Phase",
      },
      {
        type: "paragraph",
        text: "In the discovery phase, focus on understanding the problem space. User interviews, contextual inquiry, and competitive analysis help you build empathy and identify opportunities.",
      },
      {
        type: "heading",
        text: "Validation Phase",
      },
      {
        type: "paragraph",
        text: "Once you have concepts, validate them quickly with usability testing, prototype testing, and A/B testing. The goal is to fail fast and iterate based on real user feedback.",
      },
      {
        type: "list",
        items: [
          "Conduct 5-8 user interviews for qualitative insights",
          "Use surveys for quantitative validation at scale",
          "Run usability tests with 5 users to catch major issues",
          "Analyze analytics data to understand behavior patterns",
        ],
      },
    ],
  },
  {
    slug: "micro-interactions-matter",
    title: "Why Micro-interactions Matter in Modern UI Design",
    excerpt:
      "Small details make big differences. Exploring how thoughtful micro-interactions enhance user experience and build trust.",
    category: "UI Design",
    date: "January 2024",
    image: "/images/art-direction.jpg",
    content: [
      {
        type: "paragraph",
        text: "Micro-interactions are the small, functional animations and feedback mechanisms that guide users through your interface. They're often overlooked, but they're crucial for creating delightful experiences.",
      },
      {
        type: "heading",
        text: "The Four Parts of a Micro-interaction",
      },
      {
        type: "list",
        items: [
          "Trigger: What initiates the interaction",
          "Rules: What happens during the interaction",
          "Feedback: How the user knows what's happening",
          "Loops & Modes: What happens over time",
        ],
      },
      {
        type: "paragraph",
        text: "Good micro-interactions feel invisible—they guide users without drawing attention to themselves. They provide feedback, prevent errors, and make interfaces feel responsive and alive.",
      },
      {
        type: "heading",
        text: "Best Practices",
      },
      {
        type: "paragraph",
        text: "Keep animations under 300ms for UI feedback. Use easing functions that feel natural. Always provide visual feedback for user actions. And most importantly, test on real devices to ensure performance.",
      },
    ],
  },
];
