import { Service, Project, TeamMember, PricePlan, BlogPost } from "./types";

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    title: "Abstract 3D & WebGL Systems",
    category: "CREATIVE TECH",
    description: "Developing interactive 3D spaces and real-time graphics that deliver high aesthetic friction.",
    details: [
      "Custom Three.js & WebGL shaders",
      "Interactive 3D environments & spaces",
      "GPU-accelerated vector fields",
      "Dynamic physics engines"
    ],
    icon: "Boxes",
    accentColor: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "serv-2",
    title: "Brand Strategy & Architecture",
    category: "IDENTITY",
    description: "Crafting hyper-deliberate typographic codes, layouts, and style guidelines for visionary platforms.",
    details: [
      "Typographic systems & font pairing",
      "Aesthetic and visual style codes",
      "Interactive style guides",
      "Logo architecture & brand books"
    ],
    icon: "Compass",
    accentColor: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "serv-3",
    title: "High-Fidelity Interfaces",
    category: "EXPERIENCE",
    description: "Building fast, high-density React web applications with premium attention to motion, micro-interactions, and visual spacing.",
    details: [
      "Responsive fluid layout engineering",
      "High-precision micro-animations",
      "Interactive dashboard designs",
      "Fluid state & route transitions"
    ],
    icon: "Cpu",
    accentColor: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "serv-4",
    title: "Immersive Video & Audiovisuals",
    category: "CINEMATIC",
    description: "Creating sound design systems, interactive elements, and custom cinematic media filters to amplify engagement.",
    details: [
      "Atmospheric loops & background audio",
      "Custom video players & overlays",
      "Audio-responsive elements",
      "Interactive canvas visualizers"
    ],
    icon: "Tv",
    accentColor: "from-emerald-500/20 to-teal-500/20"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Nebula - Generative Ambient Visuals",
    category: "Creative Technology",
    year: "2026",
    description: "An interactive, browser-based WebGL simulation rendering multi-layered cloud particles responding to mouse velocities and audio frequencies.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    tags: ["Three.js", "GLSL Shaders", "React 19", "GSAP"],
    link: "#",
    featured: true
  },
  {
    id: "proj-2",
    title: "Sovereign - Editorial Brand Identity",
    category: "Brand Design",
    year: "2026",
    description: "A complete typographic and visual overhaul for a premium high-end architectural firm, establishing a rigid grid system and high contrast layouts.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Identity", "Typography", "Print", "Web Guide"],
    link: "#",
    featured: true
  },
  {
    id: "proj-3",
    title: "Aura - Immersive Spatial Interface",
    category: "UX/UI Design",
    year: "2025",
    description: "Designing a high-contrast desktop spatial command dashboard using glassmorphism components, floating charts, and physics-driven list items.",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Interaction", "Framer Motion", "Figma"],
    link: "#",
    featured: false
  },
  {
    id: "proj-4",
    title: "Hyperion - Audio-Reactive Installation",
    category: "Creative Technology",
    year: "2025",
    description: "Developing custom hardware-accelerated fluid simulation layers and custom synth presets integrated into an expansive web-based catalog.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    tags: ["WebGL", "Audio Node API", "GSAP ScrollTrigger"],
    link: "#",
    featured: false
  },
  {
    id: "proj-5",
    title: "Onyx - Brutalist Portfolio Showcase",
    category: "Web Development",
    year: "2026",
    description: "A luxury minimalist visual experience built around high typography hierarchies, oversized tracking, custom cursor interactions, and horizontal scroll layouts.",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1200",
    tags: ["GSAP", "Preact", "Tailwind 4", "GLSL"],
    link: "#",
    featured: true
  },
  {
    id: "proj-6",
    title: "Chronos - Spatial Calibrator Node",
    category: "Creative Technology",
    year: "2025",
    description: "A custom visual tool visualizing timezone overlaps, microsecond delay rates, and cosmic satellite positions through an interactive 3D orthographic globe.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tags: ["Three.js", "D3.js Grid", "Web Workers"],
    link: "#",
    featured: false
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Sofia Reyes",
    role: "Aesthetic Director & Founder",
    bio: "Ex-Awwwards jury panelist. Sofia establishes the high visual, typographic, and art direction guidelines for every digital system we deploy.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "team-2",
    name: "Marcus Drake",
    role: "Lead Creative Developer",
    bio: "Obsessed with math-based layouts and custom shaders. Marcus translates aesthetic visual concepts into hyper-fluid GPU-accelerated code realizations.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "team-3",
    name: "Kenji Sato",
    role: "Lead 3D Interaction Artist",
    bio: "Passionate about spatial simulations, kinetic typography, and audio synthesis. Kenji creates immersive real-time canvas sculptures.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    socials: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "team-4",
    name: "Chloe Laurent",
    role: "Brand Strategy Specialist",
    bio: "Chloe defines unique positioning vectors, naming frameworks, and editorial codes to align artistic creations with high commercial value.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
];

export const PRICING: PricePlan[] = [
  {
    id: "price-1",
    name: "Creative Sprint",
    price: {
      monthly: 4500,
      yearly: 3900
    },
    description: "Ideal for fast-scaling startups seeking an executive digital transformation over a high-contrast timeline.",
    features: [
      "Custom premium landing page system",
      "Basic Three.js 3D kinetic background",
      "Full interactive identity styleguide",
      "Framer Motion layout integration",
      "Priority project manager slack sync",
      "14-day post-launch optimization window"
    ],
    ctaText: "Initiate Sprint"
  },
  {
    id: "price-2",
    name: "Signature Immersive",
    price: {
      monthly: 9500,
      yearly: 8200
    },
    description: "Our signature multi-page brand, design, and 3D application suite designed to win prestigious visual awards.",
    features: [
      "Up to 8 high-density custom screen layouts",
      "Custom high-precision GLSL shader work",
      "Ambient synth & interaction sound designs",
      "Interactive customized physics canvas system",
      "Full brand strategy, research, and naming support",
      "Full-stack Express API proxy setups",
      "30-day post-launch high-touch maintenance"
    ],
    popular: true,
    ctaText: "Adopt Immersive Studio"
  },
  {
    id: "price-3",
    name: "Bespoke Enterprise",
    price: {
      monthly: 18000,
      yearly: 15500
    },
    description: "A continuous design-development retainer granting access to our complete network of top award-winning designers, developers, and copywriters.",
    features: [
      "UNLIMITED creative execution requests",
      "Dedicated senior production squad",
      "Complex custom data-visualizer pipelines",
      "Ongoing native WebGL and VR workspace upgrades",
      "Weekly creative and presentation reviews",
      "24/7 dedicated studio emergency line",
      "Lifetime security and tech dependency auditing"
    ],
    ctaText: "Establish Engagement"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "WebGL Shader Aesthetics: Balancing GPU Performance with Visceral Design",
    category: "CREATIVE TECH",
    excerpt: "Explore the core math models behind custom fragment shaders, liquid noise grids, and how we run 60FPS fluid fields smoothly in native mobile browsers.",
    content: "When creating premium visual experiences, standard CSS transitions often fall short. GPU-accelerated graphics offer complete mathematical control over every pixel on the screen. By utilizing WebGL fragment shaders in a dedicated render loop, we can construct fluid visual architectures that react immediately to cursor magnetic fields without taxing the main browser thread. This article covers vector flow offsets, simplex noise algorithms, and custom mesh deformation strategies.",
    date: "May 18, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Marcus Drake",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      role: "Lead Creative Developer"
    }
  },
  {
    id: "blog-2",
    title: "The Silent Anchor: How Radical Negative Space Shapes Digital Authority",
    category: "VISUAL THEORY",
    excerpt: "An in-depth critique of chaotic 'AI-slop' designs and why extreme white space paired with oversized editorial typography establishes premium brand status.",
    content: "Digital luxury is characterized by space. Unlike commodity applications that compete aggressively to pack status bars, logs, and interactive tabs into every open pixel, high-end portfolios establish dominance through structured restraint. When we allow an elegant line of serif display text to float center screen surrounded by absolute dark voids, we give the user's focus room to settle. This design principle transforms a common visit into a memorable museum walkthrough.",
    date: "April 24, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Sofia Reyes",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
      role: "Founder / Art Director"
    }
  },
  {
    id: "blog-3",
    title: "Micro-Friction: Why Instant Load Times Need Kinetic Anticipation Loader States",
    category: "USER UX",
    excerpt: "Why digital agencies intentionally delay the initial render of premium websites by 1.5 seconds, and the science of kinetic loader choreography.",
    content: "Instant page renders of simple data grids are superb for productivity panels, but luxury portfolios demand cognitive state resetting. An elegant preloading event serves as a visual palette cleanser. It signals that the visitor is entering a custom, highly curated exhibition. Using synchronized GSAP timelines, percentage counters, and letter-reveal animations, the loader prepares the observer, tuning their eyes for the delicate interactive canvases that follow.",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Kenji Sato",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      role: "Lead 3D Interaction Artist"
    }
  }
];
