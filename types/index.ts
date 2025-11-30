// Type definitions for the portfolio website

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  quote: string;
  quoteAuthor: string;
  images: {
    profile: string;
    banner: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
  icon: string;
  ariaLabel: string;
}

export interface Skill {
  category: string;
  items: string[];
  color: string;
}

export interface Achievement {
  text: string;
  metric?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
  technologies?: string[];
}

export interface Video {
  id: string;
  url: string;
  title: string;
  embedUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  url?: string;
}

export interface PortfolioLink {
  title: string;
  url: string;
  description?: string;
  type: 'notion' | 'video' | 'external';
}
