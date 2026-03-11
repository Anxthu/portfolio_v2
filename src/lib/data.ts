export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year?: string;
    role?: string;
    client?: string;
    content?: string;
    contentSections?: { title: string; body: string[] }[];
    images?: string[];
    processImages?: {
        research?: string[];
        wireframes?: string[];
        designSystem?: string[];
        iterations?: string[];
    };
    isOngoing?: boolean;
}

export const projects: Project[] = [
    {
        id: "inari",
        title: "Inari",
        category: "Brand & App Design",
        description: "Mobile experience for the Inari platform",
        image: "/Projects Mockups/Inari/inari2mob1_opt.webp",
        year: "2023",
        role: "UI/UX Designer",
        client: "Inari",
        contentSections: [
            {
                title: "The App",
                body: [
                    "Inari is a concept for an on-demand home service marketplace. Whether it's plumbing, deep cleaning, or electrical repairs, the app connects homeowners with a curated network of verified local professionals.",
                    "For this self-initiated project, my primary focus as a product designer was solving the massive lack of transparency native to the gig-economy service sector."
                ]
            },
            {
                title: "The Problem",
                body: [
                    "Inviting a stranger into your home for a repair is inherently stressful. Users hate opaque pricing, calling companies only to be put on hold, and the ambiguous \"4-hour service window\" where they are left wondering when the technician will actually arrive.",
                    "Core UX Challenge: How might we design a booking and tracking experience that removes friction, establishes absolute trust in the provider, and provides highly transparent real-time updates?"
                ]
            },
            {
                title: "The Solution",
                body: [
                    "To combat form-fatigue, I broke down the traditionally lengthy questionnaire into a frictionless, chunked 4-step booking flow.",
                    "More importantly, I designed a \"Live Tracking\" experience—similar to ridesharing apps—that activates the moment the technician is en route. It provides a live mini-map, exact ETA, and native messaging, replacing anxiety with absolute certainty."
                ]
            }
        ],
        images: [
            "/Projects Mockups/Inari/inari2mob1_opt.webp",
            "/Projects Mockups/Inari/Carosul01_opt.webp",
            "/Projects Mockups/Inari/Desktop - 4_opt.webp",
        ]
    },
    {
        id: "linear-home",
        title: "Linear Home",
        category: "Web & E-commerce",
        description: "Digital presence and e-commerce for a modern furniture brand",
        image: "/Projects Mockups/Linear Home/linearhomemp_opt.webp",
        year: "2024",
        role: "Lead UI/UX Designer",
        client: "Linear Home",
        contentSections: [
            {
                title: "The Brand",
                body: [
                    "Linear Home is a conceptual Scandinavian furniture brand. Their physical products celebrate the intersection of brutalist geometry and the warmth of organic materials like white ash and linen.",
                    "I created this project to explore how highly physical, tactile brand virtues (like \"Hygge\" or the grain of natural wood) could be translated accurately into a cold, flat digital interface."
                ]
            },
            {
                title: "The Problem",
                body: [
                    "Luxury digital design often falls into the trap of over-minimalism. In an effort to look high-end, designers strip away standard UI elements—like obvious buttons, clear filters, and legible typography—rendering beautiful websites completely unusable for everyday commerce.",
                    "Core UX Challenge: How do we build a platform that feels incredibly premium and airy, without sacrificing the rigid structural usability required for a successful e-commerce funnel?"
                ]
            },
            {
                title: "The Solution",
                body: [
                    "I utilized an \"invisible architecture\" approach. By relying strictly on deliberate typographic scale and massive, intentional whitespace, the UI guides the user's eye naturally down the page.",
                    "There are no heavy borders or card backgrounds. The layout is held together entirely by alignment and tension, allowing the imagery of the furniture to breathe and act as the primary structural element."
                ]
            }
        ],
        processImages: {
            wireframes: [
                "/Projects Mockups/Linear Home/ogcolor1_opt.webp",
                "/Projects Mockups/Linear Home/ogcolor2_opt.webp",
            ],
        },
        images: [
            "/Projects Mockups/Linear Home/linearhomemp_opt.webp",
            "/Projects Mockups/Linear Home/Linear Home Landing Page_opt.webp",
            "/Projects Mockups/Linear Home/Linear Home Landing Page02_opt.webp",
            "/Projects Mockups/Linear Home/linearhomes store_opt.webp",
            "/Projects Mockups/Linear Home/linearhomemp1_opt.webp",
            "/Projects Mockups/Linear Home/Mockup_opt.webp",
        ]
    },
    {
        id: "moda-space",
        title: "Moda Space",
        category: "Digital Platform",
        description: "A stylish digital destination for fashion enthusiasts",
        image: "/Projects Mockups/Moda Space/moda_opt.webp",
        year: "2023",
        role: "Product Designer",
        client: "Moda Space",
        contentSections: [
            {
                title: "The Brand",
                body: [
                    "Moda Space is a conceptual premium interior design and contemporary furniture brand. They cater to a demographic that values minimalism, sustainability, and high-end craftsmanship.",
                    "As a self-initiated exercise, I created Moda Space to challenge myself with designing a luxury e-commerce experience that feels less like a catalog and more like an editorial gallery."
                ]
            },
            {
                title: "The Problem",
                body: [
                    "Shopping for high-end furniture online is notoriously difficult. Users often feel overwhelmed by dense, uninspired navigation and struggle to gauge the true scale, context, and aesthetic of a piece without seeing it in a real room.",
                    "Core UX Challenge: How might we design an immersive digital experience that reduces the cognitive load of browsing, while inspiring the confidence needed to make premium interior purchases online?"
                ]
            },
            {
                title: "The Solution",
                body: [
                    "I designed a minimalist, image-first platform focused on \"Shop by Context\" rather than just traditional categories.",
                    "By simplifying the global navigation and introducing a contextual scrolling experience, users can explore curated \"rooms\" that showcase multiple products seamlessly. The interface steps back, allowing the materials, colors, and textures of the furniture to guide the user's journey."
                ]
            }
        ],
        images: [
            "/Projects Mockups/Moda Space/moda_opt.webp",
            "/Projects Mockups/Moda Space/moddaa_opt.webp",
            "/Projects Mockups/Moda Space/baord_opt.webp",
        ]
    },
    {
        id: "vayka",
        title: "Vayka",
        category: "Product & App",
        description: "Interface design for smart wearables and companion apps",
        image: "/Projects Mockups/vayka/vykass_opt.webp",
        year: "2024",
        role: "UI Designer",
        client: "Vayka Technologies",
        content: "Designed the companion app interface and marketing materials for the Vayka smartwatch ecosystem. The goal was to provide dense health and tracking data in an easily digestible, scannable format.",
        isOngoing: true,
        images: [
            "/Projects Mockups/vayka/vykass_opt.webp",
            "/Projects Mockups/vayka/vayka smartwatch_opt.webp",
            "/Projects Mockups/vayka/iPhone 16 & 17 Pro - 1_opt.webp",
        ]
    },
    {
        id: "kanso-studio",
        title: "Kanso Studio",
        category: "Web Design",
        description: "Portfolio web experience for Kanso Studio",
        image: "/Projects Mockups/kanso studio/kansostudio01_opt.webp",
        year: "2023",
        role: "UI/UX Designer",
        client: "Kanso Studio",
        contentSections: [
            {
                title: "The Brand",
                body: [
                    "Kanso Studio is a conceptual Japanese streetwear label built on the philosophy of Kanso (簡素)—the Zen principle of simplicity, or the elimination of clutter. Every garment, every thread, every detail is intentional and nothing is superfluous.",
                    "For this self-initiated project, the challenge was to translate this deeply cultural design philosophy into a digital shopping experience that embodies the very restraint it sells."
                ]
            },
            {
                title: "The Problem",
                body: [
                    "E-commerce thrives on visual noise—sale banners, countdown timers, pop-ups, upsells. Minimalism in fashion retail is counterintuitive because conversion-driven UI actively opposes quiet design.",
                    "Core UX Challenge: How do we design an e-commerce interface that sells without shouting? How do we make the absence of elements feel like a deliberate luxury rather than a lack of effort?"
                ]
            },
            {
                title: "The Solution",
                body: [
                    "Instead of stripping away elements arbitrarily, I developed a \"Quiet UI\" framework—a system where every remaining element carries maximum informational weight. Typography replaces color as the primary hierarchy tool. Whitespace replaces borders. Motion replaces static states.",
                    "The result is an interface that feels like walking into a gallery rather than a store. Products breathe, the user's focus is never competed for, and the restraint itself communicates the brand's premium positioning."
                ]
            }
        ],
        images: [
            "/Projects Mockups/kanso studio/kansostudio01_opt.webp",
            "/Projects Mockups/kanso studio/Desktop - 2_opt.webp",
        ]
    },
    {
        id: "med-4med",
        title: "Med 4Med",
        category: "Healthcare UI",
        description: "Modernizing the medical dashboard experience",
        image: "/Projects Mockups/Med 4med/med4medcase02_opt.webp",
        year: "2022",
        role: "Product Designer",
        client: "Med 4Med Solutions",
        content: "Overhauled the user interface for Med 4Med's core product, prioritizing extreme clarity, accessibility, and speed for medical professionals who use the system daily.",
        images: [
            "/Projects Mockups/Med 4med/med4medcase02_opt.webp",
        ]
    },
    {
        id: "pitbull",
        title: "Pitbull",
        category: "Brand Campaign",
        description: "Bold visual direction for the Pitbull energy brand",
        image: "/Projects Mockups/Pitbull/pitbullcase02_opt.webp",
        year: "2022",
        role: "Visual Designer",
        client: "Pitbull",
        content: "Crafted a high-energy, high-impact landing page and marketing assets for Pitbull. The aesthetic was driven by bold, aggressive typography and high-contrast colorways.",
        images: [
            "/Projects Mockups/Pitbull/pitbullcase02_opt.webp",
            "/Projects Mockups/Pitbull/pitbullcsmp_opt.webp",
        ]
    },
];
