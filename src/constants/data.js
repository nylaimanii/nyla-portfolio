export const personalInfo = {
  name: "Nyla Wilson",
  title: "Software Developer | AI & Full-Stack Engineer | NYC Metro",
  subtitle: "CS Student // Software Developer // NYC Metro",
  github: "https://github.com/nylaimanii",
  linkedin: "https://linkedin.com/in/nylaimanii",
  devpost: "https://devpost.com/nylaimanii7",
  portfolio: "https://nyla-portfolio-xi.vercel.app",
  location: "New York City Metropolitan Area",
  status: "OPEN TO OPPORTUNITIES",
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
    company: "ActualFood",
    role: "Software Engineering Intern",
    type: "Internship",
    date: "May 2026 – Present",
    location: "New York City, NY",
    badge: "CURRENT"
  },
  {
    company: "Origin Foundation",
    role: "Software Engineering Intern",
    type: "Internship",
    date: "May 2026 – Present",
    location: "New York City, NY",
    badge: "CURRENT"
  },
  {
    company: "Self-Employed",
    role: "Independent Software Developer",
    type: "Freelance",
    date: "Aug 2025 – Present",
    location: "NYC Metro",
    description: "Designed and shipped 10+ full-stack and AI-powered projects across React, Next.js, SvelteKit, Python, and multiple LLM APIs. Competed in 5+ hackathons earning 2 awards.",
    badge: "ONGOING"
  }
];

export const projects = [
  {
    name: "GREENSPACE",
    subtitle: "Sustainability Social Platform",
    description: "AI-powered community app where Gemini evaluates eco-action photos and builds competitive Green Score leaderboards. Won Georgetown Hoya Hacks 2026 Sustainability Track powered by Cisco.",
    stack: ["TypeScript", "React", "Vite", "Node.js", "Drizzle ORM", "Google Gemini AI"],
    status: "WINNER",
    github: "https://github.com/nylaimanii/greenspace"
  },
  {
    name: "ASSAY",
    subtitle: "Closed-Loop Scientific Discovery Engine",
    description: "Closed-loop discovery engine: Groq proposes equations, a Pyodide sandbox judges the fit. The LLM never grades itself — math lives in the sandbox, narration lives in the model.",
    stack: ["TypeScript", "Groq", "Pyodide", "Next.js"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/assay"
  },
  {
    name: "KERF",
    subtitle: "Semiconductor Supply Chain Risk Map",
    description: "The chip supply chain's biggest chokepoints mapped from public data. Every number says where it came from and how much to trust it. Built for transparency in semiconductor risk analysis.",
    stack: ["TypeScript", "Next.js", "Cytoscape", "Data", "Risk Analysis"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/kerf"
  },
  {
    name: "NEST",
    subtitle: "Family Planning Financial OS",
    description: "A planning instrument for the kids you want — real tax math, sourced city data, and the five questions nobody asks. Models real income, childcare costs, housing, and life decisions with honest projections.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "shadcn/ui", "Groq", "Zustand", "MapLibre", "Recharts"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/nest",
    live: "https://nest-eight-theta.vercel.app"
  },
  {
    name: "HAVEN",
    subtitle: "Personal Climate Adaptation App",
    description: "Hyperlocal heat, flood, and air-quality risk navigator tuned to who you are and where you live — built for climate adaptation, not prevention. Real climate data on interactive maps with AI-powered risk summaries.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "MapLibre", "deck.gl", "Groq"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/haven",
    live: "https://haven-delta-ten.vercel.app"
  },
  {
    name: "RESISTANCE",
    subtitle: "Antibiotic Resistance Simulator",
    description: "Watch bacteria evolve drug resistance in real time — tune the biology with sliders, run the simulation, then ask an AI tutor what's happening. Teaches the 'don't stop your antibiotics early' lesson live.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "Zustand", "Recharts", "Groq LLaMA 3.3"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/resistance",
    live: "https://resistance-psi.vercel.app"
  },
  {
    name: "PEEK",
    subtitle: "Neural Network Interpretability Playground",
    description: "Train a neural network in your browser, then x-ray it to see what each neuron actually learned. TensorFlow Playground for the interpretability era — sparse autoencoders, attribution graphs, no PhD required.",
    stack: ["Next.js", "TypeScript", "TensorFlow.js", "Tailwind CSS"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/peek"
  },
  {
    name: "FORGE",
    subtitle: "AI Visual Database Builder",
    description: "Visual database builder — design schemas on a drag-and-drop canvas, query in SQL or plain English, explore your data visually. No config, no migrations. Built entirely on free-tier services.",
    stack: ["SvelteKit", "TypeScript", "Tailwind v4", "Supabase", "Groq LLaMA 3.3", "Monaco Editor", "tldraw"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/forge",
    live: "https://forge-omega-three.vercel.app"
  },
  {
    name: "MOIRAI",
    subtitle: "Carbon-Aware GPU Scheduler",
    description: "Run compute when it's clean and cheap — picks the optimal time and region for GPU/ML jobs using live grid carbon and price data across North America. Interactive globe, sliding-window optimization.",
    stack: ["React", "Three.js", "TypeScript", "Mapbox GL JS", "Groq"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/moirai"
  },
  {
    name: "AQUIFER",
    subtitle: "AI Irrigation Advisor",
    description: "Tells farmers the minimum water needed to keep yield stable using FAO-56 Penman-Monteith math plus free public weather and soil data. Built for water conservation in climate-stressed regions.",
    stack: ["TypeScript", "FAO-56", "Climate Data", "AI"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/aquifer"
  },
  {
    name: "MERIDIAN",
    subtitle: "Clinical Trial Matcher",
    description: "Tinder for clinical trials — fill out a quick intake, then swipe through recruiting trials matched to your condition, age, and location. Pulls live from ClinicalTrials.gov (200k+ studies). Built solo.",
    stack: ["Meteor.js", "React", "Groq API", "rspack", "Docker", "Railway"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/meridian"
  },
  {
    name: "SWORN",
    subtitle: "Incident Response Agent",
    description: "An incident response agent architecturally incapable of lying — hash-chained evidence receipts, read-only OS-layer mounting. Built for the SANS Institute FIND EVIL! hackathon.",
    stack: ["Python"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/sworn"
  },
  {
    name: "RIPPLE",
    subtitle: "AI Interactive History Experience",
    description: "Type any moment in history, step inside it as a key decision-maker, and watch your choices ripple across the world. Built solo at YHack 2026 (Yale). Featured by the Institute of Foundation Models (IFM).",
    stack: ["React 19", "Vite", "K2 Think V2", "Groq", "Gemini 1.5 Flash", "Mapbox GL JS", "Supabase", "Web Speech API"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/ripple",
    live: "https://ripple-six-omega.vercel.app"
  },
  {
    name: "DOCBUDDY",
    subtitle: "AI Legal Document Analyzer",
    description: "Paste a confusing financial doc — lease, loan, rental — and DOCBUDDY breaks it into plain English: summary, pros/cons, deadlines, real costs, and a risk score. Built at HackHERS 2026 (Rutgers).",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Python", "FastAPI", "Google Gemini"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/docbuddy"
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
    placement: null,
    project: "RIPPLE",
    description: "Built RIPPLE solo — an AI-powered interactive history experience using K2 Think V2, Groq LLaMA 3.3, Gemini 1.5 Flash, Mapbox GL JS, Supabase, and Web Speech API. RIPPLE was featured by the Institute of Foundation Models (IFM) as part of the K2 Think V2 demo series.",
    note: null,
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    event: "Hoya Hacks 2026 — Georgetown University",
    location: "Washington, D.C.",
    date: "February 2026",
    track: "Sustainability Track (Powered by Cisco)",
    placement: "WINNER",
    project: "GREENSPACE",
    description: "Won the Sustainability Track with GREENSPACE — built the full Community tab, photo feed and like system, backend improvements, and the core Gemini AI prompt that evaluates eco-action photos and awards Green Score points.",
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    event: "HackHERS 2026 — Rutgers University",
    location: "New Brunswick, NJ",
    date: "2026",
    track: "Rutgers Women in Computer Science · 24-Hour Hackathon",
    placement: null,
    project: "DOCBUDDY",
    description: "Built DOCBUDDY with a team — AI web app that analyzes legal and financial documents and returns plain-language risk summaries. Owned the entire frontend: React, Framer Motion, Tailwind CSS.",
    note: null,
    devpost: "https://devpost.com/nylaimanii7"
  }
];

export const badges = [
  { name: "Hackathon Winner",       icon: "♛", color: "yellow"   },
  { name: "3x Hackathons",          icon: "✦", color: "lavender" },
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
- Status: OPEN TO OPPORTUNITIES
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
