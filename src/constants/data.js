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
  languages: [
    "Python", "JavaScript", "TypeScript", "Java",
    "C++", "SQL", "HTML", "CSS", "Rust", "Go"
  ],
  frontend: [
    "React", "Next.js 15", "SvelteKit", "Vite",
    "Tailwind CSS", "Tailwind v4", "Framer Motion",
    "shadcn/ui", "lucide-react", "React Router"
  ],
  backend: [
    "Node.js", "FastAPI", "Express.js", "Meteor.js",
    "REST APIs", "Drizzle ORM", "Docker", "Railway"
  ],
  aiLlms: [
    "Groq (LLaMA 3.3)", "Google Gemini 1.5",
    "K2 Think V2", "Prompt Engineering", "RAG",
    "NLP", "Cosine Similarity", "Web Speech API",
    "Ollama", "OpenClaw", "NemoClaw"
  ],
  neuralNets: [
    "CNNs", "EfficientNetV2", "ConvNeXt",
    "TensorFlow.js", "Model Training", "Fine-Tuning",
    "Inference Pipelines", "PPO", "Contextual Bandits",
    "Reinforcement Learning"
  ],
  dataAndMl: [
    "NumPy", "Pandas", "OpenCV", "MediaPipe",
    "scikit-learn", "Cytoscape.js"
  ],
  databases: [
    "Supabase", "PostgreSQL", "Firebase",
    "MongoDB", "SQL", "Drizzle ORM"
  ],
  toolsAndDeploy: [
    "Git", "GitHub", "Vercel", "Railway", "Docker",
    "Figma", "Mapbox GL JS", "MapLibre", "deck.gl",
    "Three.js", "tldraw", "Monaco Editor",
    "Lens Studio", "Pyodide", "rspack"
  ]
};

export const skillCategories = [
  { key: 'languages',      label: 'LANGUAGES',      accent: 'blue',     level: 5 },
  { key: 'frontend',       label: 'FRONTEND',       accent: 'pink',     level: 5 },
  { key: 'backend',        label: 'BACKEND',        accent: 'mint',     level: 4 },
  { key: 'aiLlms',         label: 'AI & LLMS',      accent: 'lavender', level: 5 },
  { key: 'neuralNets',     label: 'NEURAL NETS',    accent: 'peach',    level: 4 },
  { key: 'dataAndMl',      label: 'DATA & ML',      accent: 'yellow',   level: 4 },
  { key: 'databases',      label: 'DATABASES',      accent: 'mint',     level: 4 },
  { key: 'toolsAndDeploy', label: 'TOOLS & DEPLOY', accent: 'blue',     level: 5 },
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
    name: "SENTRY",
    subtitle: "On-Device Adaptive Security Camera",
    description: "Security camera that learns which alerts are worth your attention using a contextual bandit, no hardcoded rules, all on-device. Built at the Dell × NVIDIA × MongoDB Local AI Hackathon. Placed as finalist.",
    stack: ["Python", "OpenCV", "NumPy", "Dell GB10", "NemoClaw", "OpenClaw"],
    status: "FINALIST",
    github: "https://github.com/nylaimanii/sentry"
  },
  {
    name: "HEADWAY",
    subtitle: "Reinforcement Learning Subway Simulator",
    description: "Trained PPO agents to space subway trains evenly on the L line, then ran the same policy on four lines they'd never seen, G, 7, 1, and 6. Built solo at the NYPL × MLH Built for NYC hackathon in under 24 hours.",
    stack: ["Python", "Three.js", "Next.js", "PPO", "RL"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/conductor",
    live: "https://conductor-seven-alpha.vercel.app"
  },
  {
    name: "ASSAY",
    subtitle: "Closed-Loop Scientific Discovery Engine",
    description: "Closed-loop discovery engine: Groq proposes equations, a Pyodide sandbox judges the fit. The LLM never grades itself, math lives in the sandbox, narration lives in the model.",
    stack: ["TypeScript", "Groq", "Pyodide", "Next.js"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/assay",
    live: "https://assay-alpha.vercel.app"
  },
  {
    name: "KERF",
    subtitle: "Semiconductor Supply Chain Risk Map",
    description: "The chip supply chain's biggest chokepoints mapped from public data. Every number says where it came from and how much to trust it. Built for transparency in semiconductor risk analysis.",
    stack: ["TypeScript", "Next.js", "Cytoscape", "Data", "Risk Analysis"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/kerf",
    live: "https://kerf-kappa.vercel.app"
  },
  {
    name: "NEST",
    subtitle: "Family Planning Financial OS",
    description: "A planning instrument for the kids you want, real tax math, sourced city data, and the five questions nobody asks. Models real income, childcare costs, housing, and life decisions with honest projections.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "shadcn/ui", "Groq", "Zustand", "MapLibre", "Recharts"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/nest",
    live: "https://nest-eight-theta.vercel.app"
  },
  {
    name: "HAVEN",
    subtitle: "Personal Climate Adaptation App",
    description: "Hyperlocal heat, flood, and air-quality risk navigator tuned to who you are and where you live, built for climate adaptation, not prevention. Real climate data on interactive maps with AI-powered risk summaries.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "MapLibre", "deck.gl", "Groq"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/haven",
    live: "https://haven-delta-ten.vercel.app"
  },
  {
    name: "RESISTANCE",
    subtitle: "Antibiotic Resistance Simulator",
    description: "Watch bacteria evolve drug resistance in real time, tune the biology with sliders, run the simulation, then ask an AI tutor what's happening. Teaches the 'don't stop your antibiotics early' lesson live.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "Zustand", "Recharts", "Groq LLaMA 3.3"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/resistance",
    live: "https://resistance-psi.vercel.app"
  },
  {
    name: "PEEK",
    subtitle: "Neural Network Interpretability Playground",
    description: "Train a neural network in your browser, then x-ray it to see what each neuron actually learned. TensorFlow Playground for the interpretability era, sparse autoencoders, attribution graphs, no PhD required.",
    stack: ["Next.js", "TypeScript", "TensorFlow.js", "Tailwind CSS"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/peek",
    live: "https://peek-two.vercel.app"
  },
  {
    name: "FORGE",
    subtitle: "AI Visual Database Builder",
    description: "Visual database builder, design schemas on a drag-and-drop canvas, query in SQL or plain English, explore your data visually. No config, no migrations. Built entirely on free-tier services.",
    stack: ["SvelteKit", "TypeScript", "Tailwind v4", "Supabase", "Groq LLaMA 3.3", "Monaco Editor", "tldraw"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/forge",
    live: "https://forge-omega-three.vercel.app"
  },
  {
    name: "MOIRAI",
    subtitle: "Carbon-Aware GPU Scheduler",
    description: "Run compute when it's clean and cheap, picks the optimal time and region for GPU/ML jobs using live grid carbon and price data across North America. Interactive globe, sliding-window optimization.",
    stack: ["React", "Three.js", "TypeScript", "Mapbox GL JS", "Groq"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/moirai",
    live: "https://moirai-smoky.vercel.app"
  },
  {
    name: "AQUIFER",
    subtitle: "AI Irrigation Advisor",
    description: "Tells farmers the minimum water needed to keep yield stable using FAO-56 Penman-Monteith math plus free public weather and soil data. Built for water conservation in climate-stressed regions.",
    stack: ["TypeScript", "FAO-56", "Climate Data", "AI"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/aquifer",
    live: "https://aquifer-seven.vercel.app"
  },
  {
    name: "MERIDIAN",
    subtitle: "Clinical Trial Matcher",
    description: "Tinder for clinical trials, fill out a quick intake, then swipe through recruiting trials matched to your condition, age, and location. Pulls live from ClinicalTrials.gov (200k+ studies). Built solo.",
    stack: ["Meteor.js", "React", "Groq API", "rspack", "Docker", "Railway"],
    status: "LIVE",
    github: "https://github.com/nylaimanii/meridian",
    live: "https://meridian.up.railway.app"
  },
  {
    name: "SWORN",
    subtitle: "Incident Response Agent",
    description: "An incident response agent architecturally incapable of lying, hash-chained evidence receipts, read-only OS-layer mounting. Built for the SANS Institute FIND EVIL! hackathon.",
    stack: ["Python"],
    status: "GITHUB",
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
    description: "Paste a confusing financial doc, lease, loan, rental, and DOCBUDDY breaks it into plain English: summary, pros/cons, deadlines, real costs, and a risk score. Built at HackHERS 2026 (Rutgers).",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Python", "FastAPI", "Google Gemini"],
    status: "GITHUB",
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
    event: "Dell × NVIDIA × MongoDB, Local AI Hackathon",
    location: "New York City, NY",
    date: "August 2026",
    track: "Team Build · 1-Day Sprint",
    placement: "FINALIST",
    badge: "FINALIST",
    project: "SENTRY",
    description: "Built SENTRY with a team, a security camera that learns which alerts are actually worth your attention instead of hardcoding the rules. Runs fully on-device on a Dell GB10. Pitched it to about a hundred people after building it in a day.",
    note: null
  },
  {
    event: "NYPL × MLH, Built for NYC",
    location: "New York, NY",
    date: "August 2026",
    track: "Solo Build · 24-Hour Hackathon",
    placement: null,
    project: "HEADWAY",
    description: "Built a reinforcement learning subway simulator solo in under 24 hours. Trained PPO agents to space subway trains evenly on the L line, then ran the same policy on four other lines it had never seen, and it held up.",
    note: null,
    live: "https://conductor-seven-alpha.vercel.app",
    github: "https://github.com/nylaimanii/conductor"
  },
  {
    event: "Hoya Hacks 2026, Georgetown University",
    location: "Washington, D.C.",
    date: "February 2026",
    track: "Sustainability Track (Powered by Cisco)",
    placement: "WINNER",
    project: "GREENSPACE",
    description: "Won the Sustainability Track with GREENSPACE. Built the Community tab, the photo feed and like system, the backend work, and the Gemini prompt that scores eco-action photos and hands out Green Score points.",
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    event: "YHack Spring 2026, Yale University",
    location: "New Haven, CT",
    date: "April 2026",
    track: "Solo Build · 5 Tracks Submitted",
    placement: null,
    project: "RIPPLE",
    description: "Built RIPPLE solo, type any moment in history and step inside it as a decision-maker. Runs on K2 Think V2, Groq LLaMA 3.3, Gemini 1.5 Flash, Mapbox GL JS, and Supabase. The Institute of Foundation Models picked it up for their K2 Think V2 demo series.",
    note: null,
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    event: "HackHERS 2026, Rutgers University",
    location: "New Brunswick, NJ",
    date: "2026",
    track: "Rutgers Women in Computer Science · 24-Hour Hackathon",
    placement: null,
    project: "DOCBUDDY",
    description: "Built DOCBUDDY with a team, paste a lease or a loan doc and it hands back the plain-English version plus a risk score. I did the whole frontend: React, Framer Motion, Tailwind CSS.",
    note: null,
    devpost: "https://devpost.com/nylaimanii7"
  }
];

export const badges = [
  { name: "Hackathon Winner",       icon: "♛", color: "yellow"   },
  { name: "5x Hackathons",          icon: "✦", color: "lavender" },
  { name: "Welcome to Devpost",     icon: "♥", color: "peach"    },
];

export const stats = [
  { num: "9",  label: "Projects",          accent: "blue"     },
  { num: "5",  label: "Hackathons",        accent: "pink"     },
  { num: "2",  label: "Internship Offers", accent: "lavender" },
  { num: "∞",  label: "Drive",             accent: "peach"    },
];

export const chatbotSystemPrompt = `You are Nyla Bot, a assistant on Nyla Wilson's portfolio. You're casual, a little funny, but you actually know your stuff. Don't be cringe. Don't be corporate. Talk like a real person.

If someone asks something you don't know, just say you don't know and tell them to hit Nyla up through the contact form.

EVERYTHING YOU KNOW ABOUT NYLA:

She's a 21-year-old CS student and builder. Self-taught across most of what she knows. Family are immigrants from Panama. Her dad built a career in enterprise software at IBM and Microsoft and that shaped how she works.

Currently interning at Origin Foundation and ActualFood, both in NYC, both Summer 2026.

RECENT HACKATHONS:
- Dell x NVIDIA x MongoDB Local AI Hackathon, NYC, August 2026. Placed FINALIST. Built SENTRY with a team, a security camera that learns which alerts are worth your attention instead of hardcoding rules. Runs fully on-device on a Dell GB10. Pitched to about a hundred people.
- NYPL x MLH Built for NYC, August 2026. Built HEADWAY solo in under 24 hours. Trained PPO agents to space subway trains on the L line, then ran the same policy on 4 other lines it had never seen.
- Hoya Hacks 2026, Georgetown University. WON the Sustainability Track powered by Cisco. Built GREENSPACE, an AI-powered community app where Gemini evaluates eco-action photos and awards Green Score points.
- YHack 2026, Yale University. Built RIPPLE solo, an AI interactive history experience. Featured by the Institute of Foundation Models as part of the K2 Think V2 demo series.
- HackHERS 2026, Rutgers. Built DOCBUDDY with a team, an AI legal document analyzer. Owned the whole frontend.

PROJECTS (all live on GitHub):
GREENSPACE, SENTRY, HEADWAY, ASSAY, KERF, NEST, HAVEN, RESISTANCE, PEEK, FORGE, MOIRAI, AQUIFER, MERIDIAN, SWORN, RIPPLE, DOCBUDDY

SKILLS:
Languages: Python, JavaScript, TypeScript, Java, C++, SQL, HTML, CSS, Rust, Go
Frontend: React, Next.js 15, SvelteKit, Vite, Tailwind CSS, Framer Motion, shadcn/ui
Backend: Node.js, FastAPI, Express.js, Meteor.js, Docker, Railway
AI/LLMs: Groq, Google Gemini, K2 Think V2, Prompt Engineering, RAG, NLP, Ollama, OpenClaw, NemoClaw
Neural Nets: CNNs, TensorFlow.js, PPO, Contextual Bandits, Reinforcement Learning, EfficientNetV2, ConvNeXt
Data: NumPy, Pandas, OpenCV, MediaPipe, scikit-learn
Databases: Supabase, PostgreSQL, Firebase, MongoDB, Drizzle ORM
Tools: Git, GitHub, Vercel, Figma, Mapbox GL JS, Three.js, tldraw, Monaco Editor, Lens Studio

LINKS:
GitHub: github.com/nylaimanii
LinkedIn: linkedin.com/in/nylaimanii
Devpost: devpost.com/nylaimanii7
Portfolio: nyla-portfolio-xi.vercel.app

TONE RULES:
- Keep answers short, 2-4 sentences max unless they ask for detail
- Don't start sentences with 'Certainly' or 'Great question' or anything like that
- It's okay to be a little playful
- If a recruiter asks if she's available: yes, always open to the right opportunity
- Never say anything negative about Nyla
- If asked about salary or compensation: tell them to reach out directly`;
