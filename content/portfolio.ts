export const profile = {
  name: "Tobi Ogungbe",
  role: "Frontend developer",
  email: "hello@example.com",
  location: "Based in London, UK",
  availability: "Available for select projects",
  intro:
    "I turn thoughtful ideas into clear, considered digital experiences—one detail at a time.",
  about:
    "I’m a frontend developer who cares about the little things: how a page feels to use, how it responds on every screen, and how the code stays easy to build on. I partner with people who want to make useful, welcoming things for the web.",
  biography:
    "My path into development began with a curiosity about how the internet works and grew into a love for bringing design and technology together. Since then, I’ve worked across small teams and independent projects, helping ideas find their shape in the browser.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-handle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle/" },
] as const;

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "JavaScript",
  "HTML & CSS",
  "Accessibility",
  "Design systems",
  "Responsive UI",
  "Git",
];

export const focusAreas = [
  {
    number: "01",
    title: "Interface development",
    detail:
      "Building responsive, reliable interfaces with a strong foundation in HTML, CSS, and TypeScript.",
  },
  {
    number: "02",
    title: "Design collaboration",
    detail:
      "Working closely with design to bring visual systems to life without losing the human details.",
  },
  {
    number: "03",
    title: "Inclusive experiences",
    detail:
      "Making the web easier to use with semantic structure, keyboard support, and thoughtful states.",
  },
];

export const experience = [
  {
    period: "2023 — Now",
    role: "Independent frontend developer",
    detail: "Selected freelance and personal projects",
  },
  {
    period: "2021 — 2023",
    role: "Frontend developer",
    detail: "Digital studio · Placeholder experience",
  },
  {
    period: "2019 — 2021",
    role: "Learning & building",
    detail: "Web development · Open-source contributions",
  },
];

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Goodside",
    category: "Brand & digital experience",
    description:
      "A warm, welcoming home for a community-minded studio. Built to make the work—and the people behind it—easy to discover.",
    image: "/images/goodside.svg",
    imageAlt: "Abstract coral and cream Goodside website design preview",
    technologies: ["Next.js", "TypeScript", "CSS Modules"],
  },
  {
    number: "02",
    title: "Fieldnotes",
    category: "Editorial platform",
    description:
      "A quiet reading space for stories about getting outside, with a flexible editorial layout and careful attention to readability.",
    image: "/images/fieldnotes.svg",
    imageAlt: "Illustrated green landscape for the Fieldnotes editorial project",
    technologies: ["React", "TypeScript", "Responsive design"],
  },
  {
    number: "03",
    title: "Daymark",
    category: "Product concept",
    description:
      "A small daily-planning tool that makes room for focus. A compact interface turns a long to-do list into a calmer next step.",
    image: "/images/daymark.svg",
    imageAlt: "Lavender and yellow Daymark planning dashboard preview",
    technologies: ["Next.js", "Accessibility", "Prototyping"],
  },
];
