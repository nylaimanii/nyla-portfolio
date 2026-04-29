export const personalInfo = {
  name: "Nyla Wilson",
  title: "Software Developer | AI & Full-Stack Engineer | NYC Metro",
  subtitle: "CS Student // Software Developer // NYC Metro",
  github: "https://github.com/nylaimanii",
  linkedin: "https://linkedin.com/in/nylaimanii",
  devpost: "https://devpost.com/nylaimanii7",
  portfolio: "https://nyla-portfolio-xi.vercel.app",
  location: "New York City Metropolitan Area",
  status: "OPEN TO OPPORTUNITIES — Summer 2026",
  email: ""
};

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML", "CSS", "Rust", "Go"],
  frontend: ["React", "Next.js", "SvelteKit", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  backend: ["Node.js", "FastAPI", "Express.js", "REST APIs", "Docker"],
  ai: ["Groq (LLaMA 3.3)", "Google Gemini", "K2 Think V2", "Prompt Engineering", "RAG", "NLP"],
  neural: ["CNNs", "EfficientNetV2", "ConvNeXt", "Model Training", "Fine-Tuning", "Inference Pipelines"],
  data: ["NumPy", "Pandas", "OpenCV", "MediaPipe"],
  databases: ["PostgreSQL", "Supabase", "Firebase", "MongoDB", "SQL", "Drizzle ORM"],
  tools: ["Git", "GitHub", "Vercel", "Railway", "Docker", "Figma", "Mapbox GL JS"]
};

export const skillCategories = [
  { key: 'languages', label: 'LANGUAGES',     accent: 'blue',     level: 5 },
  { key: 'frontend',  label: 'FRONTEND',      accent: 'pink',     level: 5 },
  { key: 'backend',   label: 'BACKEND',       accent: 'mint',     level: 4 },
  { key: 'ai',        label: 'AI & LLMs',     accent: 'lavender', level: 5 },
  { key: 'neural',    label: 'NEURAL NETS',   accent: 'peach',    level: 4 },
  { key: 'data',      label: 'DATA & ML',     accent: 'yellow',   level: 4 },
  { key: 'databases', label: 'DATABASES',     accent: 'mint',     level: 4 },
  { key: 'tools',     label: 'TOOLS & DEPLOY',accent: 'blue',     level: 5 },
];

export const education = [
  {
    school: "Camden County College",
    location: "Blackwood, NJ",
    degree: "Associate of Science in Computer Science",
    status: "In Progress",
    expected: "May 2027",
    coursework: ["Data Structures", "Artificial Intelligence", "Web Development", "Discrete Mathematics"]
  },
  {
    school: "Timber Creek Regional High School",
    location: "Sicklerville, NJ",
    degree: "High School Diploma",
    status: "Graduated",
    year: "2023"
  }
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Origin Foundation",
    location: "New York City, NY",
    date: "Summer 2026",
    type: "INTERNSHIP",
    bullets: [
      "Selected following standout solo performance at YHack (Yale University, Spring 2026).",
      "Contributing to AI-powered and full-stack web application development in a professional engineering environment.",
      "Applying skills in React, Node.js, Python, and REST APIs to real production projects."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Actual Foods",
    location: "New York City, NY",
    date: "Summer 2026",
    type: "INTERNSHIP",
    bullets: [
      "Offered internship directly following RIPPLE's recognition at YHack (Yale University, Spring 2026).",
      "Supporting full-stack development and AI integration initiatives within the engineering team."
    ]
  },
  {
    role: "Independent Software Developer",
    company: "Self-Employed",
    location: "NYC Metro Area",
    date: "August 2025 — Present",
    type: "CURRENT",
    bullets: [
      "Designed and shipped 7+ full-stack and AI-powered projects across React, SvelteKit, Next.js, Python, and multiple LLM APIs.",
      "Mentored by a senior software engineer (IBM, Microsoft) in clean code, system design, and scalable architecture."
    ]
  },
  {
    role: "Mentee — Senior Software Engineer (Father)",
    company: "Ongoing Mentorship",
    location: "Personal",
    date: "Ongoing",
    type: "MENTORSHIP",
    bullets: [
      "M.S. Computer Science, Temple University.",
      "Industry experience: IBM, Microsoft, DXC, Lockheed Martin, Avanade, Argano & more.",
      "Ongoing mentorship in clean code, debugging discipline, system design, and long-term code maintainability."
    ]
  }
];

export const projects = [
  {
    name: "FORGE",
    tagline: "AI Database Builder",
    stack: ["SvelteKit", "TypeScript", "Tailwind v4", "Supabase", "Groq LLaMA 3.3", "Monaco Editor", "tldraw", "Vercel"],
    status: "COMPLETED",
    category: "ai",
    description: "Browser-based relational database builder with an infinite canvas whiteboard — think Airtable's structure, Figma's canvas, and Supabase's power in one premium dev tool. Features AI schema generation via Groq, visual schema builder, SQL editor with Monaco, live data cards on tldraw canvas, and full Supabase Auth — built entirely on free-tier services.",
    github: "https://github.com/nylaimanii/forge"
  },
  {
    name: "RESUMEPRO",
    tagline: "AI Resume Analyzer & Builder",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Groq LLaMA 3.3", "React PDF"],
    status: "COMPLETED",
    category: "ai",
    description: "Deterministic ATS scoring across 6 measurable factors with keyword matching against a 350+ skill taxonomy. AI suggestions with before/after diff and one-click apply, 3 ATS-safe resume templates, tailored cover letter generation with tone slider, and content-hash caching for sub-1s re-analysis.",
    github: "https://github.com/nylaimanii/resumepro"
  },
  {
    name: "RIPPLE",
    tagline: "AI Interactive History Experience",
    stack: ["React 19", "Vite", "K2 Think V2", "Groq", "Gemini 1.5 Flash", "Mapbox GL JS", "Supabase", "Web Speech API"],
    status: "COMPLETED",
    category: "hackathon",
    description: "Solo-built at YHack (Yale, 2026) — users step into real historical moments as decision-makers with a live 3D globe, Human Cost Counter, Decision DNA profile, Mirror Moment, and real-time Regret Archive. Engineered a two-stage JSON parser for K2 Think V2 chain-of-thought blocks and a 5-variant Wikipedia image resolution pipeline.",
    live: "https://ripple-six-omega.vercel.app"
  },
  {
    name: "MERIDIAN",
    tagline: "Full-Stack AI Application",
    stack: ["Meteor.js", "React", "Groq API", "rspack", "Docker", "Railway"],
    status: "COMPLETED",
    category: "fullstack",
    description: "Full-stack application with AI integration, real onboarding flow, condition matching, and production deployment via Docker and Railway.",
    github: "https://github.com/nylaimanii/meridian"
  },
  {
    name: "DREAMTALE",
    tagline: "AI Children's Storytelling App",
    stack: ["JavaScript", "Firebase", "CSS", "HTML"],
    status: "COMPLETED",
    category: "ai",
    description: "AI-powered interactive storytelling app for children — built for the Gemini Live Agent Challenge with Firebase Firestore as the backend database.",
    github: "https://github.com/nylaimanii/dreamtale"
  },
  {
    name: "GREENSPACE",
    tagline: "Environmental Social Good Platform",
    stack: ["TypeScript", "React", "Vite", "Node.js", "Drizzle ORM", "Google Gemini AI"],
    status: "COMPLETED — Hoya Hacks 2026 Winner",
    category: "hackathon",
    description: "AI-powered community app where Gemini evaluates eco-action photos and builds competitive Green Score leaderboards with community feeds.",
    github: "https://github.com/Agent-AA/greenspace"
  },
  {
    name: "DOCBUDDY",
    tagline: "AI Legal Document Analyzer",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Python", "FastAPI"],
    status: "COMPLETED",
    category: "hackathon",
    description: "Analyzes uploaded legal and financial documents using AI, returning plain-language summaries and risk flags.",
    github: "https://github.com/nylaimanii/docbuddy"
  },
  {
    name: "Gesture-Controlled Educational Game",
    tagline: "Computer Vision Game for Kids",
    stack: ["Python", "OpenCV", "MediaPipe Hands"],
    status: "COMPLETED",
    category: "games",
    description: "Number-matching game controlled by real-time hand gestures via webcam. Drag-and-drop physics, collision detection. Designed for children ages 3+."
  },
  {
    name: "Emotional Regulation Game for Kids",
    tagline: "Therapeutic Game Design",
    stack: ["Python", "Game Design", "UI/UX"],
    status: "COMPLETED",
    category: "games",
    description: "Helps neurodivergent children practice emotional regulation through calming gameplay. Combines psychology, accessible UX, and software engineering."
  }
];

export const projectFilters = [
  { key: 'all',       label: 'ALL' },
  { key: 'ai',        label: 'AI/ML' },
  { key: 'fullstack', label: 'FULL STACK' },
  { key: 'hackathon', label: 'HACKATHON' },
  { key: 'games',     label: 'GAMES' },
];

export const hackathons = [
  {
    event: "YHack Spring 2026 — Yale University",
    location: "New Haven, CT",
    date: "April 2026",
    track: "Solo Build · 5 Tracks Submitted",
    placement: "INTERNSHIP + DEPLOYMENT OFFER",
    project: "RIPPLE",
    description: "Built RIPPLE solo — AI-powered cinematic interactive history experience using K2 Think V2, Groq LLaMA 3.3, Gemini 1.5 Flash, Mapbox GL JS, Supabase, and Web Speech API. Received a summer internship offer from Actual Foods and a product deployment offer from K2 Think V2 at the event itself.",
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    event: "Hoya Hacks 2026 — Georgetown University",
    location: "Washington, D.C.",
    date: "February 2026",
    track: "Sustainability Track (Powered by Cisco)",
    placement: "2ND PLACE WINNER",
    project: "GREENSPACE",
    description: "Won the Sustainability Track with GREENSPACE — Google Gemini AI evaluates eco-friendly user photos and awards Green Score points. Built the full Community tab, photo feed and like system, backend improvements, and the core Gemini AI prompt.",
    devpost: "https://devpost.com/nylaimanii7",
    github: "https://github.com/Agent-AA/greenspace"
  },
  {
    event: "HackHERS 2026 — Rutgers University",
    location: "New Brunswick, NJ",
    date: "2026",
    track: "Rutgers Women in Computer Science · 24-Hour Hackathon",
    placement: null,
    project: "DOCBUDDY",
    description: "Built DOCBUDDY with a team of 5 — AI web app analyzing legal and financial documents with plain-language risk summaries. Owned the entire frontend: React components, Framer Motion animations, Tailwind CSS, and Figma-to-code implementation.",
    devpost: "https://devpost.com/nylaimanii7",
    github: "https://github.com/nylaimanii/docbuddy"
  }
];

export const badges = [
  { name: "Hackathon Winner",       icon: "♛", color: "yellow"   },
  { name: "3x Hackathons",          icon: "✦", color: "lavender" },
  { name: "First In-Person",        icon: "★", color: "pink"     },
  { name: "Generalist",             icon: "◆", color: "mint"     },
  { name: "Welcome to Devpost",     icon: "♥", color: "peach"    },
];

export const stats = [
  { num: "9",  label: "Projects",          accent: "blue"     },
  { num: "3",  label: "Hackathons",        accent: "pink"     },
  { num: "2",  label: "Internship Offers", accent: "lavender" },
  { num: "∞",  label: "Drive",             accent: "peach"    },
];

export const chatbotSystemPrompt = `You are Nyla Bot, an enthusiastic and professional AI assistant embedded in Nyla Wilson's personal portfolio website. Your job is to answer recruiter and visitor questions about Nyla and make her look as impressive as possible.

EVERYTHING YOU KNOW ABOUT NYLA:

PERSONAL:
- Full name: Nyla Wilson
- Title: Software Developer | AI & Full-Stack Engineer | NYC Metro
- Location: New York City Metropolitan Area
- Status: OPEN TO OPPORTUNITIES — Summer 2026
- GitHub: github.com/nylaimanii
- LinkedIn: linkedin.com/in/nylaimanii
- Devpost: devpost.com/nylaimanii7
- Portfolio: nyla-portfolio-xi.vercel.app

EDUCATION:
- Camden County College, Blackwood NJ — A.S. Computer Science, In Progress, Expected May 2027. Coursework: Data Structures, Artificial Intelligence, Web Development, Discrete Mathematics
- Timber Creek Regional HS, Sicklerville NJ — Diploma, Graduated 2023

EXPERIENCE:
- Software Engineering Intern @ Origin Foundation (NYC, Summer 2026) — selected after solo performance at YHack (Yale, Spring 2026). AI-powered + full-stack work.
- Software Engineering Intern @ Actual Foods (NYC, Summer 2026) — offer came directly from RIPPLE's recognition at YHack.
- Independent Software Developer (NYC Metro, August 2025 — Present) — shipped 7+ full-stack/AI projects across React, SvelteKit, Next.js, Python, multiple LLM APIs.

SKILLS:
- Languages: Python, JavaScript, TypeScript, Java, C++, SQL, HTML, CSS, Rust, Go
- Frontend: React, Next.js, SvelteKit, Vite, Tailwind CSS, Framer Motion, shadcn/ui
- Backend: Node.js, FastAPI, Express.js, REST APIs, Docker
- AI & LLMs: Groq (LLaMA 3.3), Google Gemini, K2 Think V2, Prompt Engineering, RAG, NLP
- Neural Networks: CNNs, EfficientNetV2, ConvNeXt — model training, fine-tuning, inference pipelines
- Data & ML: NumPy, Pandas, OpenCV, MediaPipe
- Databases: PostgreSQL, Supabase, Firebase, MongoDB, SQL, Drizzle ORM
- Tools & Deployment: Git, GitHub, Vercel, Railway, Docker, Figma, Mapbox GL JS

HACKATHONS (3):
- YHack Spring 2026 (Yale University, April 2026) — Solo Build, 5 Tracks Submitted. Result: SUMMER INTERNSHIP OFFER + DEPLOYMENT OFFER. Built RIPPLE solo using K2 Think V2, Groq, Gemini 1.5 Flash, Mapbox GL JS, Supabase, Web Speech API.
- Hoya Hacks 2026 (Georgetown University, February 2026) — Sustainability Track (Cisco). Result: 2ND PLACE WINNER. Built GREENSPACE with Google Gemini AI.
- HackHERS 2026 (Rutgers University, 2026) — 24-Hour Hackathon. Built DOCBUDDY with team of 5 — owned entire frontend.

PROJECTS (9 total, 7+ shipped):
1. FORGE — AI Database Builder. SvelteKit + TS + Tailwind v4 + Supabase + Groq LLaMA 3.3 + Monaco + tldraw. Browser-based relational DB with infinite canvas. Built entirely on free-tier services.
2. RESUMEPRO — AI Resume Analyzer. Next.js 15 + TS + Tailwind + shadcn/ui + Supabase + Groq + React PDF. Deterministic ATS scoring across 6 factors, 350+ skill taxonomy, sub-1s re-analysis via content-hash caching.
3. RIPPLE — AI Interactive History. React 19 + Vite + K2 Think V2 + Groq + Gemini + Mapbox + Supabase. Solo-built at YHack. Live at ripple-six-omega.vercel.app.
4. MERIDIAN — Meteor.js + React + Groq + Docker + Railway. Full-stack with AI, onboarding, condition matching.
5. DREAMTALE — AI children's storytelling. JS + Firebase. Gemini Live Agent Challenge.
6. GREENSPACE — Hoya Hacks 2026 Winner. TS + React + Vite + Node + Drizzle + Gemini. Eco-action photo evaluation + Green Score leaderboards.
7. DOCBUDDY — HackHERS 2026. React + Framer Motion + Tailwind + Python + FastAPI. AI legal/financial doc analyzer.
8. Gesture-Controlled Educational Game — Python + OpenCV + MediaPipe. Number-matching game for kids 3+.
9. Emotional Regulation Game for Kids — Python. For neurodivergent children.

MENTORSHIP:
- Mentored by her father, Senior Software Engineer
- M.S. CS, Temple University
- Industry: IBM, Microsoft, DXC, Lockheed Martin, Avanade, Argano & more
- Topics: clean code, debugging discipline, system design, long-term maintainability

PERSONALITY & STRENGTHS:
- Self-directed builder — doesn't wait to be taught
- Bias toward execution — ships real things (7+ projects in <1 year)
- Solo-built RIPPLE at Yale and earned 2 internship offers from a single hackathon
- Persistent debugger, clean-architecture mindset
- Passionate about AI, accessibility, and underrepresented communities in tech

RESPONSE RULES:
- Be enthusiastic, warm, and professional
- Keep answers 2-4 sentences unless more detail is requested
- Always frame Nyla's experience positively and impressively
- If asked something unknown, encourage using the contact form
- Never say anything negative about Nyla
- If a recruiter asks if Nyla is available — yes, actively seeking software engineering internships and full-time opportunities for Summer 2026 and beyond.`;
