export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  themeColor: 'tangerine' | 'sage' | 'yellow' | 'paper';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Social Media Posts' | 'Content Ideas' | 'Campaign Concepts' | 'Community Engagement';
  tag: string;
  summary: string;
  objective: string;
  targetAudience: string;
  strategy: string;
  creativeDirection: string;
  execution: string[];
  statusBadge: string;
  isConceptual: boolean;
  accentColor: string;
}

export interface ExperienceItem {
  type: 'EDUCATION' | 'CERTIFICATION' | 'EXPERIENCE';
  title: string;
  institution: string;
  period: string;
  description: string;
  keySkills: string[];
  badgeColor: 'sage' | 'yellow' | 'orange';
}

export interface PhilosophyItem {
  number: string;
  title: string;
  principle: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  brandName: "THE SOCIAL EDIT",
  creatorName: "Maryem Essam",
  roles: [
    "Social Media Specialist",
    "Social Media Moderator",
    "Content Creation Specialist",
    "Sales Experience"
  ],
  tagline: "I MAKE PEOPLE STOP & LOOK.",
  supportingStatement: "Creative content. Meaningful conversations. Better brand connections.",
  heroBio: "I'm Maryem Essam, a Social Media Specialist and Moderator passionate about creating engaging content, building meaningful online interactions, and helping brands connect with their audiences.",
  contact: {
    phone: "+20 10 94960786",
    phoneTel: "tel:+201094960786",
    whatsapp: "https://wa.me/201094960786",
    linkedin: "https://www.linkedin.com/in/maryem-essam-648661431/",
    location: "Egypt"
  },
  meta: {
    title: "Maryem Essam | Social Media Specialist & Moderator",
    description: "Meet Maryem Essam, a Social Media Specialist and Moderator specializing in content creation, community engagement, and social media communication.",
    siteUrl: "https://maryemessam.github.io/the-social-edit", // Configurable for deployment
    keywords: [
      "Maryem Essam",
      "Social Media Specialist",
      "Social Media Moderator",
      "Content Creation Specialist",
      "Community Moderation",
      "Commerce Graduate",
      "Marketing Scale Set",
      "Egypt Social Media"
    ]
  }
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const servicesData: ServiceItem[] = [
  {
    id: "moderation",
    number: "01",
    title: "SOCIAL MEDIA MODERATION",
    category: "Community Care & Retention",
    description: "Managing online interactions, responding to audiences promptly, supporting positive community experiences, and maintaining professional brand communication around the clock.",
    deliverables: [
      "Inbound message & comment response workflows",
      "Escalation pathways for negative sentiment",
      "Brand voice tone guidelines in direct messaging",
      "Spam filtering and crisis-containment protocols"
    ],
    themeColor: "tangerine"
  },
  {
    id: "content-creation",
    number: "02",
    title: "CONTENT CREATION",
    category: "Visual & Copy Craft",
    description: "Developing creative content ideas, scroll-stopping social media posts, and platform-focused assets that communicate brand messages with clarity and style.",
    deliverables: [
      "Platform-specific content pillars & storyboards",
      "Engaging captions with deliberate hooks & CTAs",
      "Visual direction for carousels, reels, and stories",
      "Editorial calendars planned for maximum consistency"
    ],
    themeColor: "sage"
  },
  {
    id: "social-marketing",
    number: "03",
    title: "SOCIAL MEDIA MARKETING",
    category: "Audience & Growth Strategy",
    description: "Applying marketing knowledge and deep audience awareness to build targeted social media campaigns that turn casual scrollers into loyal brand supporters.",
    deliverables: [
      "Audience persona analysis & competitor benchmarking",
      "Organic reach expansion strategies",
      "Campaign concept development & timeline execution",
      "Content performance reviews and iterative improvements"
    ],
    themeColor: "yellow"
  },
  {
    id: "sales-engagement",
    number: "04",
    title: "SALES & CUSTOMER ENGAGEMENT",
    category: "Conversion & Commercial Awareness",
    description: "Understanding customer needs, communicating product value directly, and guiding purchasing decisions leveraging practical sales experience.",
    deliverables: [
      "Translating product features into customer benefits",
      "DM-to-checkout conversational sales tactics",
      "Addressing buyer hesitations and handling inquiries",
      "High-volume customer interaction management"
    ],
    themeColor: "paper"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "daily-spark",
    title: "The Daily Spark — Editorial Brand Series",
    category: "Social Media Posts",
    tag: "Post Strategy & Copy",
    summary: "A 5-part carousel and story framework engineered to disrupt Instagram feeds with bold typography and interactive audience prompts.",
    objective: "Increase organic save and share rates by transforming complex brand topics into digestible, magazine-style carousel slides.",
    targetAudience: "Gen Z and Millennial digital consumers who value design, brevity, and authentic brand viewpoints.",
    strategy: "Anchor every post with a 3-word provocation hook on Slide 1, follow with actionable value on Slides 2-4, and end with an explicit debate prompt on Slide 5.",
    creativeDirection: "Warm paper backgrounds, bold black Grotesk headlines, vibrant tangerine accent lines, and editorial sticker callouts.",
    execution: [
      "Crafted 5 sequential carousel layouts with strong visual hierarchy",
      "Engineered high-converting caption hooks and open-ended comment prompts",
      "Designed matching Instagram Story companion stickers for voting"
    ],
    statusBadge: "CONCEPTUAL SHOWCASE — READY FOR CLIENT ADAPTATION",
    isConceptual: true,
    accentColor: "#F45B35"
  },
  {
    id: "trend-to-cart",
    title: "TrendToCart — Commercial Social Campaign",
    category: "Campaign Concepts",
    tag: "E-Commerce & Sales",
    summary: "A launch strategy designed to bridge the gap between social engagement and direct checkouts for lifestyle and apparel brands.",
    objective: "Drive product discovery and reduce DM drop-off rates through clear value positioning and structured customer interaction flows.",
    targetAudience: "E-commerce shoppers looking for style inspiration, sizing clarity, and immediate purchasing guidance.",
    strategy: "Leverage high-frequency short-form video concepts paired with instant DM auto-replies providing direct product links and styling advice.",
    creativeDirection: "High-contrast split screens, clean editorial overlays, and clear 'Tap to Shop' CTA stickers styled like boutique retail tags.",
    execution: [
      "Developed 3 teaser concepts, 1 launch carousel, and 4 story response templates",
      "Structured a customer FAQ guide to accelerate DM conversion inquiries",
      "Integrated sales psychology principles refined through SHEIN platform experience"
    ],
    statusBadge: "CONCEPTUAL SHOWCASE — READY FOR CLIENT ADAPTATION",
    isConceptual: true,
    accentColor: "#F5C94A"
  },
  {
    id: "active-pulse",
    title: "ActivePulse — Community Care & Moderation System",
    category: "Community Engagement",
    tag: "Moderation & Retention",
    summary: "A systematic community engagement framework establishing response protocols, tone benchmarks, and dispute resolution workflows.",
    objective: "Transform brand comments and direct messages into positive relationship-building touchpoints while safeguarding brand reputation.",
    targetAudience: "Active social followers, existing customers with service questions, and prospective buyers seeking validation.",
    strategy: "Categorize incoming interactions into 3 urgency tiers (Urgent Care, Product Inquiry, Brand Love) with defined 15-minute response targets.",
    creativeDirection: "Clean editorial cheat-sheet matrices with color-coded sentiment indicators and empathetic response scripts.",
    execution: [
      "Designed a comprehensive 12-page moderation response playbook",
      "Created 20 customizable response templates across diverse customer moods",
      "Drafted standard operating procedures for crisis de-escalation"
    ],
    statusBadge: "CONCEPTUAL SHOWCASE — READY FOR CLIENT ADAPTATION",
    isConceptual: true,
    accentColor: "#3F523B"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    type: "EDUCATION",
    title: "Faculty of Commerce — Fresh Graduate",
    institution: "Benha University",
    period: "Recent Graduate",
    description: "Completed undergraduate degree in Commerce, establishing a foundational understanding of business operations, consumer behavior, market dynamics, and financial fundamentals.",
    keySkills: ["Business Acumen", "Consumer Behavior", "Market Analysis", "Commercial Communication"],
    badgeColor: "sage"
  },
  {
    type: "CERTIFICATION",
    title: "Marketing Scale Set Certificate",
    institution: "Professional Marketing Program",
    period: "Certified Specialist",
    description: "Comprehensive marketing training focusing on scalable campaign strategies, social media channels, audience segmentation, and growth mechanisms.",
    keySkills: ["Growth Strategies", "Audience Targeting", "Campaign Architecture", "Content Distribution"],
    badgeColor: "yellow"
  },
  {
    type: "EXPERIENCE",
    title: "Sales Experience — SHEIN Platform",
    institution: "E-Commerce & Digital Retail",
    period: "Practical Experience",
    description: "Hands-on sales experience facilitating customer transactions, managing high volumes of client inquiries, communicating product value, and directly driving purchasing decisions.",
    keySkills: ["Customer Engagement", "Product Value Communication", "Sales Conversion", "Inquiry Resolution"],
    badgeColor: "orange"
  }
];

export const philosophyData: PhilosophyItem[] = [
  {
    number: "01",
    title: "UNDERSTAND THE AUDIENCE",
    principle: "Good communication starts with understanding people.",
    description: "Before typing a single word or choosing an aesthetic, I study what makes your target audience pause, what questions keep them up at night, and what tone makes them feel genuinely heard."
  },
  {
    number: "02",
    title: "COMMUNICATE WITH PURPOSE",
    principle: "Every message should have a clear reason and direction.",
    description: "Content without intention is merely digital noise. Every post, story, caption, and comment response must serve a specific brand objective — whether educating, entertaining, or inspiring action."
  },
  {
    number: "03",
    title: "CREATE CONTENT THAT CONNECTS",
    principle: "The best content makes people feel involved.",
    description: "One-way broadcasting is dead. True social media success lies in creating two-way conversations that encourage responses, build community loyalty, and turn followers into passionate brand advocates."
  }
];

export const faqData: FAQItem[] = [
  {
    question: "Who is Maryem Essam?",
    answer: "Maryem Essam is a fresh graduate from the Faculty of Commerce at Benha University, specializing as a Social Media Specialist and Community Moderator. Certified with the Marketing Scale Set Certificate and backed by hands-on sales experience through the SHEIN platform, she creates compelling content and manages online brand communities."
  },
  {
    question: "What does a Social Media Moderator do?",
    answer: "A Social Media Moderator manages online interactions, actively replies to community comments and direct messages, maintains brand voice integrity, safeguards positive community sentiment, and de-escalates customer issues to protect the brand's reputation."
  },
  {
    question: "What social media services does Maryem offer?",
    answer: "Maryem offers four core services: (1) Social Media Moderation (active community management and response protocols), (2) Content Creation (creative post ideation, carousels, and copy), (3) Social Media Marketing (audience-aligned campaign strategies), and (4) Sales & Customer Engagement (leveraging commercial sales experience to assist buyers and drive conversions)."
  },
  {
    question: "Where did Maryem study?",
    answer: "Maryem studied at Benha University, graduating from the Faculty of Commerce, where she developed her commercial mindset, business literacy, and understanding of consumer purchasing psychology."
  },
  {
    question: "How can I contact Maryem?",
    answer: "You can reach Maryem directly via WhatsApp at https://wa.me/201094960786, connect on LinkedIn at https://www.linkedin.com/in/maryem-essam-648661431/, or call her directly at +20 10 94960786."
  }
];
