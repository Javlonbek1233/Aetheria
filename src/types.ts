export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  icon: string; // Lucide icon name
  accentColor: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface PricePlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
}
