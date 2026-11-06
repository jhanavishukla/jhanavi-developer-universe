/**
 * PORTFOLIO DATA CONFIGURATION
 * JHANAVI.EXE — THE DEVELOPER UNIVERSE
 * 
 * Centralized data store for Jhanavi Shukla's developer portfolio.
 * Designed for the AWS Student Builder Challenge: Build Your Tech Superpower.
 * 
 * Edit this file to update your personal details, profile links, project repositories,
 * achievements, and contact channels. All values are automatically reflected across the OS.
 */

export const personalProfile = {
  name: "Jhanavi Shukla",
  systemId: "JHANAVI.EXE",
  systemVersion: "v2.5.0-student-builder",
  tagline: "Curious mind. Constantly building. Always evolving.",
  role: "Computer Science Student | Aspiring AI & Backend Engineer",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    year: "Second Year (Class of 2027)",
    institution: "Ramdeobaba University",
    location: "Nagpur, Maharashtra, India",
    focus: "AI, Backend Engineering & Systems Architecture"
  },
  shortBio: "Second-year Computer Science student passionate about backend systems, machine learning fundamentals, and robust algorithmic problem-solving. Learning and building through code.",
  aboutStory: [
    "I am a second-year Computer Science and Engineering student at Ramdeobaba University, Nagpur, driven by a deep fascination with how large-scale software systems and intelligent models work beneath the surface.",
    "My journey centers on understanding core engineering principles: writing clean, modular code, strengthening my foundation in Data Structures and Algorithms, and designing scalable backend architectures.",
    "Currently, I am actively exploring Python backend workflows, asynchronous APIs, machine learning pipelines, and cloud computing with Amazon Web Services (AWS) as part of the AWS Student Builder community.",
    "I believe the best way to master technology is by building things that solve genuine problems. Every bug resolved and every project deployed is an opportunity to learn, iterate, and evolve."
  ],
  interests: [
    "Backend Architecture & Microservices",
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithm Design",
    "Cloud Computing & Serverless (AWS)",
    "Clean Code & Open Source Culture"
  ],
  // SOCIAL & CONTACT LINKS (Replace placeholders with your real URLs)
  socialLinks: {
    github: {
      url: "https://github.com/jhanavishukla",
      username: "@jhanavishukla",
      isConfigured: true
    },
    linkedin: {
      url: "https://www.linkedin.com/in/jhanavi-shukla-8b18952ab",
      username: "Jhanavi Shukla",
      isConfigured: true
    },
    email: {
      address: "jhanavishukla288@gmail.com",
      isConfigured: true
    },
    leetcode: {
      url: "https://leetcode.com/placeholder-jhanavi", // Replace with your LeetCode profile URL
      username: "jhanavi_codes",
      isConfigured: false
    },
    codechef: {
      url: "https://codechef.com/users/placeholder-jhanavi", // Replace with your CodeChef profile URL
      username: "jhanavi_cc",
      isConfigured: false
    }
  },
  awsChallenge: {
    challengeName: "AWS Student Builder Challenge",
    theme: "Build Your Tech Superpower",
    status: "Project Built for Evaluation",
    hosting: "AWS Amplify Hosting",
    region: "ap-south-1 (Mumbai)"
  }
};

/**
 * TECHNICAL SKILLS MATRIX
 * Categorized into distinct engineering pillars with realistic status flags.
 * "Proficient" = established skill; "Exploring" = active learning / research area.
 */
export const skillsMatrix = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    description: "Core languages used for systems, problem-solving, and web software.",
    skills: [
      { name: "Java", level: "Core Foundation", status: "Active", type: "Language" },
      { name: "Python", level: "Backend & Data", status: "Active", type: "Language" },
      { name: "C", level: "Systems Fundamentals", status: "Core", type: "Language" },
      { name: "JavaScript", level: "Web & Interactive", status: "Active", type: "Language" }
    ]
  },
  {
    category: "Frontend Development",
    iconName: "Layout",
    description: "Crafting modern, accessible, and responsive user interfaces.",
    skills: [
      { name: "HTML5", level: "Semantic Markup", status: "Proficient", type: "Frontend" },
      { name: "CSS3 / Modern CSS", level: "Flexbox, Grid, Animations", status: "Proficient", type: "Frontend" },
      { name: "React", level: "Component Architecture & Hooks", status: "Active Learning", type: "Frontend" },
      { name: "Vite", level: "Modern Tooling & Bundling", status: "Active Learning", type: "Frontend" }
    ]
  },
  {
    category: "Backend & AI Exploration",
    iconName: "Cpu",
    description: "Building server logic, APIs, and exploring intelligent systems.",
    skills: [
      { name: "Python Backend", level: "Server logic & scripts", status: "Building", type: "Backend" },
      { name: "FastAPI Exploration", level: "Modern async Python REST APIs", status: "Currently Exploring", type: "Backend" },
      { name: "AI / ML Foundations", level: "Neural networks & data pipelines", status: "Currently Exploring", type: "AI/ML" },
      { name: "REST APIs", level: "HTTP methods, JSON, endpoints", status: "Learning", type: "Backend" }
    ]
  },
  {
    category: "Computer Science & Engineering",
    iconName: "Layers",
    description: "Core algorithmic thinking and version control workflows.",
    skills: [
      { name: "Data Structures", level: "Arrays, Trees, Graphs, Lists", status: "Active Practice", type: "Core CS" },
      { name: "Algorithms", level: "Searching, Sorting, Recursion, DP", status: "Active Practice", type: "Core CS" },
      { name: "Problem Solving", level: "Algorithmic deduction & efficiency", status: "Active Practice", type: "Core CS" },
      { name: "Git & GitHub", level: "Version control & collaboration", status: "Workflow Essential", type: "Tools" }
    ]
  },
  {
    category: "Cloud & DevOps",
    iconName: "Cloud",
    description: "Understanding scalable cloud platforms and deployment pipelines.",
    skills: [
      { name: "AWS Cloud Foundations", level: "Compute, storage, networking basics", status: "Currently Exploring", type: "Cloud" },
      { name: "AWS Amplify Hosting", level: "Continuous static & SPA deployment", status: "Hands-on Project", type: "Cloud" },
      { name: "Amazon S3 Basics", level: "Object storage architecture", status: "Learning", type: "Cloud" },
      { name: "AWS Student Builder Group", level: "Active community member", status: "Community", type: "Cloud" }
    ]
  }
];

/**
 * PROJECTS SHOWCASE
 * Highlights real projects with detailed descriptions, tech tags, and links.
 * Visual previews are generated via custom cyber UI mockups to ensure zero broken images.
 */
export const projectsShowcase = [
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    badge: "Web Utility",
    shortDescription: "A responsive and lightweight QR code generation utility that renders high-definition custom QR codes dynamically.",
    fullDescription: "Built with pure semantic HTML5, modern CSS3 styling, and JavaScript. This tool takes any URL or text input and generates clear, downloadable QR codes in real-time with responsive mobile adaptations.",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM API", "Responsive"],
    previewType: "qr-tool",
    features: [
      "Dynamic real-time QR generation",
      "Clean dark/light responsive interface",
      "Zero heavyweight third-party runtime frameworks",
      "Instant copy and download support"
    ],
    githubUrl: "https://github.com/jhanavishukla/qr-code-generator",
    liveUrl: "https://placeholder-qr-demo.netlify.app", // Centralized placeholder
    isConfigured: false
  },
  {
    id: "nexcent-landing-page",
    title: "Nexcent Landing Page",
    badge: "UI / UX Design",
    shortDescription: "A modern, pixel-perfect corporate landing page interface emphasizing typography, visual hierarchy, and responsive layouts.",
    fullDescription: "Constructed using advanced modern CSS features including CSS Grid, Flexbox, custom media queries, and smooth micro-interactions. Demonstrates foundational front-end mastery and clean aesthetic sensibilities.",
    tags: ["HTML5", "Modern CSS", "Flexbox & Grid", "UI Design", "Cross-Browser"],
    previewType: "landing-page",
    features: [
      "Structured semantic HTML layout",
      "Fluid typography and flexible grid systems",
      "Mobile-first responsive breakpoints",
      "Interactive button states and hero illustrations"
    ],
    githubUrl: "https://github.com/jhanavishukla/nexcent-landing-page",
    liveUrl: "https://placeholder-nexcent-demo.netlify.app", // Centralized placeholder
    isConfigured: false
  },
  {
    id: "dsa-ai-tracker",
    title: "DSA Tracker & AI Skills Roadmap",
    badge: "Full Application",
    shortDescription: "A web application built with Vite and React to help students track Data Structures & Algorithms milestones and explore curated AI roadmaps.",
    fullDescription: "Engineered to solve a personal challenge: keeping track of DSA practice questions across platforms while visualizing the step-by-step learning progression into machine learning and backend engineering.",
    tags: ["Vite", "React", "JavaScript", "Modern CSS", "LocalStorage", "Roadmaps"],
    previewType: "tracker-app",
    features: [
      "Categorized DSA tracking with completion status",
      "Interactive AI & Backend engineering progression roadmaps",
      "Fast Vite-powered development and ultra-light bundle",
      "Built for continuous student self-assessment"
    ],
    githubUrl: "https://github.com/jhanavishukla/dsa-ai-tracker", // Centralized placeholder
    liveUrl: "https://placeholder-dsa-tracker.vercel.app", // Centralized placeholder
    isConfigured: false
  }
];

/**
 * ACHIEVEMENTS & MILESTONES
 * Authentic milestones representing Jhanavi's engineering journey.
 * Values and links are clearly editable without fabricated statistics.
 */
export const achievementsMilestones = [
  {
    id: "sih-hackathon",
    title: "Internal Round Qualifier — Smart India Hackathon (SIH)",
    organization: "Smart India Hackathon / Ramdeobaba University",
    date: "2024",
    type: "Hackathon",
    status: "Qualified",
    description: "Competed with university peer teams, ideated an innovative technical solution, and successfully cleared the rigorous internal evaluation rounds.",
    highlight: "Top University Teams Selected for National Nomination",
    metrics: "Internal Selection Round Qualified",
    linkUrl: null
  },
  {
    id: "aws-student-builder",
    title: "Active Member — AWS Student Builder Group",
    organization: "Ramdeobaba University Student Chapter",
    date: "Ongoing",
    type: "Community & Cloud",
    status: "Active",
    description: "Engaging in hands-on cloud labs, peer architecture reviews, and exploring AWS services (S3, Amplify, EC2) to design cloud-native student applications.",
    highlight: "Participant in AWS Student Builder Challenge: Build Your Tech Superpower",
    metrics: "Active Cloud Learner",
    linkUrl: null
  },
  {
    id: "leetcode-journey",
    title: "Algorithmic Problem-Solving Journey — LeetCode",
    organization: "LeetCode",
    date: "Continuous Practice",
    type: "DSA & Problem Solving",
    status: "In Progress",
    description: "Consistently practicing core algorithmic problem solving: arrays, strings, two pointers, hashing, linked lists, and binary search.",
    highlight: "Focusing on algorithmic time-space complexity optimization",
    metrics: "Practice Profile (Configurable)",
    linkUrl: "https://leetcode.com/placeholder-jhanavi"
  },
  {
    id: "codechef-journey",
    title: "Competitive Programming Journey — CodeChef",
    organization: "CodeChef",
    date: "Continuous Practice",
    type: "Competitive Programming",
    status: "In Progress",
    description: "Participating in graded practice contests to improve speed, edge-case testing, and mathematical deduction under time constraints.",
    highlight: "Sharpening logic and foundational computer science problem-solving",
    metrics: "Practice Profile (Configurable)",
    linkUrl: "https://codechef.com/users/placeholder-jhanavi"
  },
  {
    id: "continuous-engineering",
    title: "Academic & Practical Engineering Growth",
    organization: "Ramdeobaba University, Nagpur",
    date: "Second Year B.Tech CSE",
    type: "Academics",
    status: "Active",
    description: "Maintaining a disciplined balance between university curriculum (OS, DBMS, OOP in Java, Discrete Math) and hands-on self-directed project building.",
    highlight: "Consistent commitment to foundational engineering depth",
    metrics: "Semester 3 & 4 Progression",
    linkUrl: null
  }
];

/**
 * SIGNATURE FEATURE: "DISCOVER YOUR DEVELOPER SUPERPOWER"
 * Creative interactive feature for the AWS Student Builder Challenge.
 * Visitors click a button to generate a developer superpower personality result.
 */
export const developerSuperpowers = [
  {
    id: "problem-solver",
    title: "The Problem Solver",
    tagline: "Turns complex algorithmic chaos into elegant, optimal logic.",
    icon: "BrainCircuit",
    color: "#8b5cf6", // Electric Violet
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    glowColor: "rgba(139, 92, 246, 0.4)",
    archetype: "Algorithmic Architect",
    rarity: "Legendary",
    description: "You thrive when given a seemingly insurmountable edge-case or a knot of nested requirements. Where others see frustration, you see a path to optimal O(n log n) efficiency.",
    playfulMessage: "Your code doesn't just run; it executes with tactical elegance. You never guess — you calculate.",
    perks: [
      "Can spot an off-by-one error at 50 paces",
      "Treats recursive base cases as an art form",
      "Prefers optimal space complexity over lazy shortcuts"
    ],
    recommendedWeapon: "Graph traversal & clean whiteboard markers"
  },
  {
    id: "curious-explorer",
    title: "The Curious Explorer",
    tagline: "Always venturing beyond the known horizon into emerging frontiers.",
    icon: "Compass",
    color: "#06b6d4", // Cyan
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    glowColor: "rgba(6, 182, 212, 0.4)",
    archetype: "Tech Pioneer",
    rarity: "Epic",
    description: "You are propelled by an insatiable hunger to understand 'how it works under the hood'. From unfamiliar AWS serverless primitives to the latest AI research paper, you dive in fearlessly.",
    playfulMessage: "Your browser tabs are a sprawling galaxy of documentation, GitHub repos, and RFC drafts. You learn by breaking things safely.",
    perks: [
      "Reads official API specifications for fun",
      "Always the first to test a new framework release",
      "Connects disparate tech dots into unexpected breakthroughs"
    ],
    recommendedWeapon: "Vite dev server with hot module replacement"
  },
  {
    id: "creative-builder",
    title: "The Creative Builder",
    tagline: "Translates abstract ideas into tangible, functional digital universes.",
    icon: "Sparkles",
    color: "#ec4899", // Neon Rose / Pink
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    glowColor: "rgba(236, 72, 153, 0.4)",
    archetype: "Universe Crafter",
    rarity: "Mythic",
    description: "You believe software should feel magical, responsive, and alive. You bridge the gap between rigorous engineering and delightful user experiences with glassmorphism, fluid motion, and crisp UX.",
    playfulMessage: "You don't just write scripts; you craft interactive environments where every pixel and callback has a purpose.",
    perks: [
      "Obsessive attention to micro-interactions and transitions",
      "Transforms boring forms into enjoyable experiences",
      "Builds full prototypes while others are still debating"
    ],
    recommendedWeapon: "Glassmorphism CSS & Lucide icons"
  },
  {
    id: "persistent-debugger",
    title: "The Persistent Debugger",
    tagline: "Unflinching patience. Relentless root-cause investigator.",
    icon: "ShieldAlert",
    color: "#f59e0b", // Amber / Gold
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    glowColor: "rgba(245, 158, 11, 0.4)",
    archetype: "System Guardian",
    rarity: "Ultra-Rare",
    description: "Silent stack traces and phantom memory leaks don't scare you. You bring calm methodical deduction to the most cryptic compiler warnings and production anomalies.",
    playfulMessage: "You don't blame the compiler. You isolate the variable, inspect the call stack, and triumph over the bug with a victory coffee.",
    perks: [
      "Never gives up on a cryptic 500 internal server error",
      "Reads log files like poetry",
      "Writes unit tests that catch regressions before they happen"
    ],
    recommendedWeapon: "Chrome DevTools, break-points, and console.log with flair"
  },
  {
    id: "future-innovator",
    title: "The Future Innovator",
    tagline: "Architecting tomorrow's intelligent systems with cloud & AI.",
    icon: "Rocket",
    color: "#10b981", // Emerald
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)",
    archetype: "AI & Cloud Visionary",
    rarity: "Ascendant",
    description: "You keep your eyes firmly set on the next technological horizon: autonomous AI agents, distributed cloud architectures, and scalable intelligent backends that power the next decade.",
    playfulMessage: "You don't just anticipate the future of tech — you write the code that brings it into reality.",
    perks: [
      "Dreams in distributed systems and matrix multiplications",
      "Designs architectures that scale gracefully from day zero",
      "Champion of automated deployment and CI/CD pipelines"
    ],
    recommendedWeapon: "AWS Amplify, Python async, and neural architectures"
  }
];

/**
 * SIMULATED TERMINAL COMMANDS DATABASE
 * Supports: help, about, skills, projects, achievements, github, contact, clear, etc.
 */
export const terminalCommandsHelp = {
  help: "Lists all available commands in JHANAVI.EXE terminal.",
  about: "Displays Jhanavi Shukla's background, education, and bio.",
  skills: "Outputs the organized technical skill matrix and explorations.",
  projects: "Lists all featured projects with technologies and summaries.",
  achievements: "Displays hackathon, LeetCode, and academic milestones.",
  superpower: "Unlocks the interactive developer personality scanner.",
  github: "Prints the GitHub profile and repository information.",
  contact: "Displays email, LinkedIn, and communication channels.",
  aws: "Details the AWS Student Builder Challenge background and tech stack.",
  clear: "Clears the terminal output screen.",
  whoami: "Prints current user identity within JHANAVI.EXE.",
  date: "Displays current system time and universe uptime."
};

