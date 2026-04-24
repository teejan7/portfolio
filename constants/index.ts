import type { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export type SocialLink = {
  name: string;
  icon: IconType;
  link: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
  detail: string;
};

export type SecondaryProject = {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  highlights: readonly string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  type: string;
  focus: string;
  points: readonly string[];
};

export type AchievementItem = {
  title: string;
  label: string;
  description: string;
};

export const HERO_METRICS = [
  {
    value: "6+",
    label: "Projects Built",
    detail: "Spanning AI, cybersecurity, full-stack web, and embedded systems.",
  },
  {
    value: "15+",
    label: "Certifications",
    detail: "Across AI, cloud, generative AI, and ML from Microsoft, Google, Infosys.",
  },
  {
    value: "2",
    label: "Internships",
    detail: "Microsoft Azure & AI (AICTE) and Einfachzauberer Technologies.",
  },
  {
    value: "2027",
    label: "Graduating",
    detail: "B.Tech CSE student focused on AI, cloud, and systems engineering.",
  },
] as const satisfies readonly ProjectMetric[];

export const CURRENT_FOCUS = [
  "Computer Vision",
  "Cybersecurity ML",
  "Full-Stack Web",
  "Cloud & Backend APIs",
] as const;

export const ABOUT_POINTS = [
  "I build across the full technology stack — from training ML models for computer vision and cybersecurity to architecting cloud infrastructure and shipping full-stack web applications.",
  "My work spans real-time sign language recognition (ASL Vision), phishing URL detection (PhishGuard), smart parking systems (PARKIKO), and hardware-software embedded solutions.",
  "I've interned at Microsoft under the AICTE Elevate program, competed at NASA Space Apps twice, and hold 15+ certifications across AI, cloud, and generative intelligence.",
] as const;

export const FOCUS_AREAS = [
  "AI/ML Engineering",
  "Computer Vision",
  "Cybersecurity ML",
  "Full-Stack Web",
  "Cloud & Backend",
  "Embedded Systems",
] as const;

export const SKILL_GROUPS = [
  {
    title: "AI & Machine Learning",
    description:
      "Applied ML capabilities spanning computer vision, cybersecurity, and real-time inference.",
    items: [
      "Machine Learning",
      "Computer Vision",
      "MediaPipe",
      "Feature Engineering",
      "Random Forest",
      "Model Evaluation",
      "NLP & LLMs",
      "PyTorch",
    ],
  },
  {
    title: "Full-Stack Web",
    description:
      "End-to-end web development from responsive UIs to backend APIs and database design.",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "FastAPI",
      "Django",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud platform experience and infrastructure fundamentals from internships and deployments.",
    items: [
      "Microsoft Azure",
      "Google Cloud",
      "AWS",
      "Git",
      "GitHub",
      "Linux",
      "Postman",
    ],
  },
  {
    title: "Embedded & IoT",
    description:
      "Low-level systems work combining hardware interfaces with software logic.",
    items: [
      "Embedded C",
      "ATmega32",
      "RTOS",
      "EEPROM",
      "Proteus",
      "Relay Control",
    ],
  },
  {
    title: "Programming",
    description:
      "Core languages used across ML experimentation, web development, and systems programming.",
    items: ["Python", "C", "C++", "Java", "SQL"],
  },
] as const satisfies readonly SkillGroup[];

export const FEATURED_PROJECT = {
  title: "ASL Vision & PhishGuard",
  subtitle:
    "Two flagship projects — one in accessibility-focused computer vision, one in cybersecurity ML.",
  description:
    "These projects represent my range: ASL Vision brings real-time sign language recognition to browsers without GPU dependency, while PhishGuard uses feature engineering on URL patterns to detect malicious links. Both solve real problems with practical deployment in mind.",
  metrics: [
    {
      value: "29",
      label: "ASL Classes",
      detail: "Hand sign gestures recognized in real-time.",
    },
    {
      value: "91-D",
      label: "Features",
      detail: "MediaPipe landmark features for classification.",
    },
    {
      value: "URL",
      label: "PhishGuard",
      detail: "ML-based malicious URL detection system.",
    },
    {
      value: "CPU",
      label: "Runtime",
      detail: "No GPU required, keeping deployment accessible.",
    },
  ],
  stack: [
    "MediaPipe",
    "Random Forest",
    "Python",
    "FastAPI",
    "scikit-learn",
    "Azure",
  ],
  points: [
    "ASL Vision: 29-class sign language recognition using 91-dimensional MediaPipe landmarks, achieving reliable real-time inference on CPU.",
    "PhishGuard: Feature engineering on URL patterns for ML-based phishing detection, built during Microsoft Azure & AI internship.",
    "Both projects prioritize practical deployment over demo-only capabilities — fast inference, minimal dependencies, browser-ready.",
    "ASL Vision targets accessibility; PhishGuard targets cybersecurity — showing range across meaningful problem domains.",
  ],
  pipeline: [
    "ASL Vision: Webcam → MediaPipe → 91-D Features → Random Forest → Real-Time Prediction",
    "PhishGuard: URL Input → Feature Extraction → ML Classification → Risk Score Output",
  ],
} as const;

export const SECONDARY_PROJECTS = [
  {
    title: "PARKIKO",
    category: "Full-Stack Web",
    description:
      "Smart parking management platform with live slot booking, role-based dashboards (customer/owner/admin), and Firebase-powered real-time updates.",
    image: "/projects/parkiko.png",
    link: "https://github.com/teejan7/parkiko",
    highlights: ["Firebase RTDB", "Role-Based Auth", "Live Booking"],
  },
  {
    title: "PhishGuard",
    category: "AI / Cybersecurity",
    description:
      "ML-based phishing URL detection system using feature engineering on URL patterns, built during Microsoft Azure & AI internship.",
    image: "/projects/phish.png",
    link: "https://github.com/teejan7/phishguard",
    highlights: ["scikit-learn", "Feature Engineering", "Azure Deployment"],
  },
  {
    title: "Embedded Lock",
    category: "Embedded Systems",
    description:
      "ATmega32-based digital locking system with keypad input, EEPROM password storage, relay control, and RTOS task scheduling.",
    image: "/projects/emb_c.png",
    link: "https://github.com/teejan7",
    highlights: ["Embedded C", "ATmega32", "Hardware Control"],
  },
] as const satisfies readonly SecondaryProject[];

export const EXPERIENCE = [
  {
    role: "Azure & AI Intern",
    company: "Microsoft (AICTE Elevate Program)",
    type: "Remote Internship",
    focus: "Cloud & AI Engineering",
    points: [
      "Completed structured internship focused on Microsoft Azure services and applied artificial intelligence.",
      "Built PhishGuard as capstone — an ML phishing detection system with real-time URL classification.",
      "Gained hands-on experience with cloud deployment, ML model serving, and Azure AI services.",
    ],
  },
  {
    role: "IT Intern",
    company: "Einfachzauberer Technologies Pvt. Ltd., Kochi",
    type: "On-site Internship",
    focus: "Software & Networking",
    points: [
      "Contributed to internal software development, testing, and debugging of company tools.",
      "Configured and troubleshoot LAN network environments and resolved technical support tickets.",
      "Gained practical exposure to real-world IT operations and software development workflows.",
    ],
  },
] as const satisfies readonly ExperienceItem[];

export const ACHIEVEMENTS = [
  {
    title: "NASA Space Apps Challenge",
    label: "Multiple Years",
    description:
      "Returned to a globally recognized hackathon environment more than once, showing consistency in problem-solving under pressure.",
  },
  {
    title: "2nd Place - Synapse'25",
    label: "Tech Event Win",
    description:
      "Placed second in Synapse'25, adding competitive validation to the project and systems work in this portfolio.",
  },
  {
    title: "Hackathon Participation",
    label: "Builder Mindset",
    description:
      "Active participation across hackathons sharpened speed, adaptability, and the ability to turn ideas into working prototypes.",
  },
] as const satisfies readonly AchievementItem[];

export const CERTIFICATION = {
  provider: "Infosys Springboard",
  title: "AI Learning Track",
  summary:
    "Grouped certifications across Data Science, NLP, Computer Vision, Deep Learning, and Generative AI.",
  focusAreas: [
    "Data Science",
    "NLP",
    "Computer Vision",
    "Deep Learning",
    "Generative AI",
  ],
  note: "Grouped intentionally to keep the emphasis on applied work and domain coverage instead of listing every course one by one.",
} as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/teejan7",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/teejan/",
  },
  {
    name: "Email",
    icon: MdEmail,
    link: "mailto:teejan107@gmail.com",
  },
] as const satisfies readonly SocialLink[];

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: "teejan107@gmail.com",
        link: "mailto:teejan107@gmail.com",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/teejan/",
      },
      {
        name: "GitHub",
        link: "https://github.com/teejan7",
      },
    ],
  },
  {
    title: "Resources",
    data: [
      {
        name: "Resume",
        link: "/Teejan.pdf",
      },
      {
        name: "Portfolio Source",
        link: "https://github.com/teejan7/portfolio",
      },
      {
        name: "Projects",
        link: "#projects",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#hero",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Proof",
    link: "#proof",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/teejan7/portfolio",
  resume: "/Teejan.pdf",
};
