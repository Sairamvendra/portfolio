import type {
  PersonalInfo,
  SocialLink,
  Skill,
  Achievement,
  Experience,
  Video,
  Certification,
  PortfolioLink,
} from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Sairam Vendra',
  title: 'Head of Design & AI Product Manager',
  location: 'Bangalore, Karnataka',
  email: 'sairamvendra949@gmail.com',
  phone: '(+91) 8072499687',
  quote: 'People ignore design that ignores people.',
  quoteAuthor: 'Frank Kimero',
  images: {
    profile: '/images/profile.jpg',
    banner: '/images/banner.jpg',
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sairamvendra/',
    handle: '@sairamvendra',
    icon: 'linkedin',
    ariaLabel: 'Visit Sairam Vendra on LinkedIn',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/sairam848',
    handle: '@sairam848',
    icon: 'twitter',
    ariaLabel: 'Follow Sairam Vendra on Twitter',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/sairamvendra/',
    handle: '@sairamvendra',
    icon: 'instagram',
    ariaLabel: 'Follow Sairam Vendra on Instagram',
  },
  {
    platform: 'Behance',
    url: 'https://www.behance.net/sairamvendra',
    handle: '@sairamvendra',
    icon: 'palette',
    ariaLabel: 'View Sairam Vendra portfolio on Behance',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Art & Creative Direction',
    items: ['Visual Design', 'Creative Strategy', 'Brand Direction'],
    color: 'neobrutalism-yellow',
  },
  {
    category: 'AI Product Management',
    items: ['AI Integration', 'Product Strategy', 'Innovation'],
    color: 'neobrutalism-cyan',
  },
  {
    category: 'Stakeholder & Agency Management',
    items: ['Partnership Management', 'Vendor Relations', 'Communication'],
    color: 'neobrutalism-pink',
  },
  {
    category: 'Program & Project Management',
    items: ['Agile', 'Cross-functional Leadership', 'Execution'],
    color: 'neobrutalism-purple',
  },
  {
    category: 'Design Strategy & Operations',
    items: ['Process Optimization', 'Team Leadership', 'Strategic Planning'],
    color: 'neobrutalism-yellow',
  },
  {
    category: 'Brand Research & Rebranding',
    items: ['Market Analysis', 'Brand Identity', 'Positioning'],
    color: 'neobrutalism-cyan',
  },
  {
    category: 'Market Research and Analysis',
    items: ['Consumer Insights', 'Competitive Analysis', 'Data Analysis'],
    color: 'neobrutalism-pink',
  },
  {
    category: 'Digital Transformation',
    items: ['Process Automation', 'Technology Integration', 'Change Management'],
    color: 'neobrutalism-purple',
  },
  {
    category: 'Brand and Communication Design',
    items: ['Visual Identity', 'Messaging', 'Brand Guidelines'],
    color: 'neobrutalism-yellow',
  },
  {
    category: 'Performance Marketing',
    items: ['Campaign Strategy', 'Analytics', 'ROI Optimization'],
    color: 'neobrutalism-cyan',
  },
  {
    category: 'Data-Driven Decision Making',
    items: ['Analytics', 'KPI Tracking', 'Insights Generation'],
    color: 'neobrutalism-pink',
  },
  {
    category: 'Product Lifecycle Management',
    items: ['Product Strategy', 'Launch Planning', 'Iteration'],
    color: 'neobrutalism-purple',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    text: 'Used tools like Chat GPT, Midjourney bots, Dall-E, Sora, Runway ML, Google Flow, Google AI studio and Eleven labs to streamline and Optimize the overall ad production speeds for kukufm',
  },
  {
    text: 'Scaled internal ad production capacity from 5 per week to 100 per week',
    metric: '5 → 100',
  },
  {
    text: 'Operationalized AI for an automated AI human system increasing throughput',
    metric: '2 → 20',
  },
  {
    text: 'Shipped an AI innovation slate—video pacing analysis, AI comics, chatbot storytelling, and intelligence, trend/news curation, book translation, and promo-script evaluation',
  },
  {
    text: 'Built asset ops and quality governance across social, web, email, app, and offline',
  },
  {
    text: 'Managed external creative agencies, ensuring their work aligned with performance metrics & brand goals',
  },
  {
    text: 'Led a multi-disciplinary design org and external partners; mentored teams and embedded automation-first practices to lift velocity and craft',
  },
  {
    text: 'Directed full campaign lifecycles—from concept to launch—delivering on-brief, on-time creative tied to business outcomes',
  },
  {
    text: 'Translated ambiguous business problems into crisp creative briefs and product roadmaps; aligned exec stakeholders on scope, OKRs, and timelines',
  },
  {
    text: 'Set end-to-end creative strategy for local and Chinese content portfolios, aligning output to market demand and audience insights',
  },
  {
    text: 'Drove cross-functional alignment with Product, Marketing, and Content; partnered with creators and AI Labs to refine their product funnel, UX, and visual identity',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'KukuTV',
    role: 'Head of Design and AI Product Manager',
    period: 'Since Nov\'23',
    startDate: '2023-11',
    endDate: null,
    achievements: [
      'Operationalized AI for design: GPT-powered bots and an automated AI thumbnail system generating multi-variant outputs from prompts; scaled daily throughput from 2 → 20 per title.',
      'Engineered AI video pipelines with multiple AI workflows; cut production TAT from 5 days → 4 hours per video while improving quality.',
      'Shipped an AI innovation slate—video pacing analysis, AI comics, chatbot storytelling, and intelligence, trend/news curation, book translation, promo-script evaluation, and 3D audio—to accelerate on-brief, on-time creative tied to business outcomes.',
      'Built asset ops and quality governance across social, web, email, app, and offline; enforced review gates to maintain brand consistency and creative rework.',
      'Managed external creative agencies, ensuring their work aligned with performance metrics & brand goals.',
      'Led a multi-disciplinary design org and external partners; mentored teams and embedded automation-first practices to lift velocity and craft.',
      'Directed full campaign lifecycles—from concept to launch—delivering on-brief, on-time creative tied to business outcomes.',
      'Translated ambiguous business problems into crisp creative briefs and product roadmaps; aligned exec stakeholders on scope, OKRs, and timelines.',
      'Set end-to-end creative strategy for local and Chinese content portfolios, aligning output to market demand and audience insights.',
      'Drove cross-functional alignment with Product, Marketing, and Content; partnered with creators and AI Labs to refine their product funnel, UX, and visual identity.',
    ],
    technologies: ['Chat GPT', 'Dall-E', 'Sora', 'Midjourney', 'Runway ML', 'Google Flow', 'Google AI studio', 'Eleven labs'],
  },
  {
    id: '2',
    company: 'Prime Video',
    role: 'Design Lead',
    period: 'Nov\'20 – Nov\'23',
    startDate: '2020-11',
    endDate: '2023-11',
    achievements: [
      'Led Cross-Regional Projects: Managed project inflows across TVOD, SVOD, AVOD and global regions (US, ROW, EU), streamlining workflows for aligning priorities & designers.',
      'Directed Creative & Quality Control: Supervised design execution, ensuring high-quality deliverables and providing creative guidance and feedback.',
      'Collaborated Across Teams: Partnered with Product, Marketing, UX, and external stakeholders to align on creative strategies and content distribution.',
      'Optimized Processes & Reporting: Utilized data insights to drive performance and developed SOPs to standardize production, ensuring consistency and efficiency.',
      'Led High-Profile Event Designs: Directed design sprints for Prime Day, Holiday Sale, and DEI events, delivering impactful creative assets.',
      'Managed Brand Onboarding and Refresh: Supported external partners with brand updates and onboarding, to ensure alignment with Amazon\'s high standards.',
    ],
  },
  {
    id: '3',
    company: 'Amazon',
    role: 'Imaging Associate',
    period: 'Sept\'18 – Nov\'20',
    startDate: '2018-09',
    endDate: '2020-11',
    achievements: [
      'Enhanced Product Imagery: Led advanced retouching of apparel images, maintaining high-quality standards and meeting SLA deadlines.',
      'Improved Efficiency & Quality: Streamlined retouching processes, conducting audits and ensuring timely and high-quality deliverables.',
    ],
  },
  {
    id: '4',
    company: 'Cimpress tech. (Vistaprint)',
    role: 'Production Artist',
    period: 'Oct\'17 – Mar\'18',
    startDate: '2017-10',
    endDate: '2018-03',
    achievements: [
      'Led end-to-end creation of digital/print assets from brief to final: built reusable templates and simple QA gates to speed up TAT and keep outputs consistent; provided live, on-the-spot design support for urgent requests.',
      'Partnered directly with clients/brands to deliver on-guideline creatives; translated complex briefs into clear visuals.',
    ],
  },
];

export const VIDEOS: Video[] = [
  {
    id: '1',
    url: 'https://youtu.be/wuv-b1FWMhY',
    title: 'AI Innovation Showcase - Video 1',
    embedUrl: 'https://www.youtube.com/embed/wuv-b1FWMhY?autoplay=1&mute=1',
  },
  {
    id: '2',
    url: 'https://youtu.be/UiN-iTjGy0o',
    title: 'Creative Design Process - Video 2',
    embedUrl: 'https://www.youtube.com/embed/UiN-iTjGy0o?autoplay=1&mute=1',
  },
  {
    id: '3',
    url: 'https://youtu.be/QgitqyLypss',
    title: 'Product Management Strategy - Video 3',
    embedUrl: 'https://www.youtube.com/embed/QgitqyLypss?autoplay=1&mute=1',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: '100X – Generative AI',
    issuer: '100X',
    date: undefined,
    credentialId: undefined,
    url: undefined,
  },
  {
    name: 'LLM Custom Training',
    issuer: '100X',
    date: undefined,
    credentialId: undefined,
    url: undefined,
  },
  {
    name: 'Product Management Certification',
    issuer: 'Duke University (Upgrad)',
    date: undefined,
    credentialId: undefined,
    url: undefined,
  },
  {
    name: 'UI Design Certification',
    issuer: 'Uxmint',
    date: undefined,
    credentialId: undefined,
    url: undefined,
  },
  {
    name: 'VERSANT Certification CEFR B2',
    issuer: 'Pearson',
    date: undefined,
    credentialId: '18111017',
    url: undefined,
  },
];

export const PORTFOLIO_LINKS: PortfolioLink[] = [
  {
    title: 'AI LVR Real Footage',
    url: '#',
    description: 'AI-powered live video rendering',
    type: 'video',
  },
  {
    title: 'Sora Longform Content',
    url: '#',
    description: 'Long-form content creation with AI',
    type: 'video',
  },
  {
    title: 'Live Action AI-Lip-sync',
    url: '#',
    description: 'Real-time AI lip-sync technology',
    type: 'video',
  },
  {
    title: 'Privé',
    url: '#',
    description: 'Premium content platform',
    type: 'external',
  },
  {
    title: 'Notion Portfolio',
    url: 'https://www.notion.so/sairamvendra/Sairam-Vendra-1eb4d5e77783804fa1bcdb800a6eeb01',
    description: 'Detailed portfolio and case studies',
    type: 'notion',
  },
];

export const ABOUT_ME = `Leader in creative direction, AI product management, and design strategy. Track record of building automation-first pipelines, scaling static ad and video production, and driving measurable business outcomes. Cross-functional leadership; stakeholder alignment, and end-to-end campaign delivery.`;

export const EDUCATION = {
  degree: 'B.Tech in Electrical and Electronics Engineering',
  institution: 'INSTITUTE OF AERONAUTICAL ENGINEERING',
  period: '2011 – 2014',
};
