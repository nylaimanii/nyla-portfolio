export const personalInfo = {
  name: "Nyla Wilson",
  title: "CS Student // Aspiring Software Engineer // NYC Metro",
  github: "https://github.com/nylaimanii",
  linkedin: "https://linkedin.com/in/nylaimanii",
  devpost: "https://devpost.com/nylaimanii7",
  location: "New York City Metropolitan Area",
  email: ""
};

export const skills = {
  languages: ["Python","JavaScript","HTML","CSS","SQL","C++","Java"],
  stack: ["React","Node.js","Express.js","MongoDB","MERN Stack","Git","GitHub","REST APIs","JWT Auth"],
  aiml: ["CNNs","EfficientNetV2","ConvNeXt","NLP","Cosine Similarity","Data Preprocessing","Model Evaluation","Multimodal Models","Real-time Inference Pipelines"],
  vision: ["OpenCV","MediaPipe","UI/UX Design","System Design","Debugging","Clean Architecture"]
};

export const education = [
  {
    school: "Camden County College",
    location: "Blackwood, NJ",
    degree: "Associate of Science in Computer Science",
    status: "In Progress",
    expected: "2026",
    coursework: ["Data Structures","Intro to Computer Science","Web Development","Artificial Intelligence","Discrete Mathematics"]
  },
  {
    school: "Timber Creek Regional High School",
    location: "Sicklerville, NJ",
    degree: "High School Diploma",
    status: "Graduated",
    year: "2023"
  }
];

export const projects = [
  {
    name: "DocBuddy",
    stack: ["JavaScript","Python","React","Node.js","Tailwind CSS","AI"],
    status: "COMPLETED",
    description: "Before you sign, let Buddy read between the lines. AI-powered document reader that analyzes contracts and legal docs, surfacing red flags before you commit. Built in 24 hours at HackHers 2026.",
    github: "https://github.com/nylaimanii/docbuddy",
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    name: "Greenspace",
    stack: ["TypeScript","React","Node.js","AI","Maps API"],
    status: "COMPLETED",
    description: "The world has a plastic problem. Greenspace rallies people around local environmental issues and inspires collective action to make our greenspaces greener. 2nd Place winner at Georgetown Hoya Hacks 2026.",
    github: "https://github.com/Agent-AA/greenspace",
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    name: "DreamTale",
    stack: ["JavaScript","React","Firebase","Firestore","CSS"],
    status: "IN PROGRESS",
    description: "Where Imagination Comes to Life. An interactive storytelling platform powered by real-time data and dynamic content generation. Built with Firebase for seamless live collaboration.",
    github: "https://github.com/nylaimanii/dreamtale"
  },
  {
    name: "AI Resume & Internship Matcher",
    stack: ["Python","NLP","Cosine Similarity","React","REST API"],
    status: "IN PROGRESS",
    description: "Analyzes resumes and matches them to internship postings using NLP and cosine similarity scoring. Identifies ATS gaps and optimizes content for applicant tracking systems."
  },
  {
    name: "Full-Stack Habit & Focus Tracker",
    stack: ["React","Node.js","SQL","JWT Auth","REST API"],
    status: "IN PROGRESS",
    description: "Tracks habits, mood, and focus trends with data visualization. Secure auth, relational DB, clean architecture, and separation of concerns."
  },
  {
    name: "Computer Vision Accessibility Game",
    stack: ["Python","OpenCV","MediaPipe","Webcam"],
    status: "IN PROGRESS",
    description: "Hands-free interactive game using real-time hand and face tracking. Built for users with physical limitations — accessibility-first design from the ground up."
  },
  {
    name: "Algorithm Visualizer",
    stack: ["JavaScript","React","HTML/CSS"],
    status: "IN PROGRESS",
    description: "Step-by-step sorting and searching algorithm visualizer for beginner learners. Focused on intuitive UI, performance, and making CS concepts approachable."
  },
  {
    name: "Gesture-Controlled Educational Game",
    stack: ["Python","OpenCV","MediaPipe Hands"],
    status: "COMPLETED",
    description: "Number-matching game controlled by real-time hand gestures via webcam. Drag-and-drop physics, collision detection. Designed for children ages 3+."
  },
  {
    name: "Emotional Regulation Game for Kids",
    stack: ["Python","Game Design","UI/UX"],
    status: "COMPLETED",
    description: "Helps neurodivergent children practice emotional regulation through calming gameplay. Combines psychology, accessible UX, and software engineering."
  }
];

export const hackathons = [
  {
    event: "Rutgers University — HackHERS 2026",
    location: "New Brunswick, NJ",
    date: "February 2026",
    track: "Rutgers Women in Computer Science · 24-Hour Hackathon",
    placement: null,
    project: "DocBuddy",
    description: "Built DocBuddy — an AI-powered document reader that analyzes contracts and surfaces red flags before you sign. Shipped a full-stack JavaScript + Python app in 24 hours. Attended workshops, mentorship sessions, and tech talks.",
    devpost: "https://devpost.com/nylaimanii7",
    github: "https://github.com/nylaimanii/docbuddy"
  },
  {
    event: "Georgetown University — Hoya Hacks 2026",
    location: "Washington, D.C.",
    date: "January 2026",
    track: "Sustainability Track",
    placement: "2ND PLACE",
    project: "Greenspace",
    description: "First-ever hackathon. Competed against university teams nationwide. Built Greenspace — an app that rallies communities around local environmental issues. Rapidly prototyped an AI-powered sustainability solution, integrated new libraries on the fly, and presented within the time limit.",
    devpost: "https://devpost.com/nylaimanii7",
    github: "https://github.com/Agent-AA/greenspace"
  }
];

export const chatbotSystemPrompt = `You are Nyla Bot, an enthusiastic and professional AI assistant embedded in Nyla Wilson's personal portfolio website. Your job is to answer recruiter and visitor questions about Nyla and make her look as impressive as possible.

EVERYTHING YOU KNOW ABOUT NYLA:

PERSONAL:
- Full name: Nyla Wilson
- Location: New York City Metropolitan Area
- GitHub: github.com/nylaimanii
- LinkedIn: linkedin.com/in/nylaimanii
- Devpost: devpost.com/nylaimanii7

EDUCATION:
- Camden County College, Blackwood NJ — AS Computer Science, In Progress, Expected 2026. Coursework: Data Structures, Web Dev, AI, Discrete Math
- Timber Creek Regional HS — Diploma, Graduated 2023

SKILLS:
- Languages: Python, JavaScript, HTML, CSS, SQL, C++, Java
- Stack: React, Node.js, Express.js, MongoDB (MERN), Git, GitHub, REST APIs, JWT Auth
- AI/ML: CNNs, EfficientNetV2, ConvNeXt, NLP, Cosine Similarity, Data Preprocessing, Model Evaluation, Multimodal Models, Real-time Inference Pipelines
- Vision: OpenCV, MediaPipe
- Other: UI/UX Design, System Design, Debugging, Clean Architecture, Agentic Software

HACKATHONS (14 total participated):
- Rutgers HackHERS 2026 — 24-hour women in CS hackathon. Built DocBuddy: AI-powered doc reader that surfaces contract red flags. Full-stack JavaScript + Python.
- Georgetown Hoya Hacks 2026 — 2ND PLACE, Sustainability Track. Her very first hackathon. Built Greenspace: community environmental action app. Competed against university teams nationwide.

DEVPOST ACHIEVEMENTS (5 badges):
- Hackathon Winner Level 1 — won a hackathon prize (Jan 2026)
- X Hackathons Level 2 — submitted to multiple hackathons (Feb 2026)
- Generalist — submitted to 3 hackathons with different themes
- First In-Person Hackathon (Jan 2026)
- Welcome to Devpost (Oct 2025)

PROJECTS (9 total):
COMPLETED:
1. DocBuddy — JavaScript, Python, React, Tailwind CSS, AI. HackHers 2026. github.com/nylaimanii/docbuddy
2. Greenspace — TypeScript, React, AI, Maps API. 2nd Place Hoya Hacks 2026. github.com/Agent-AA/greenspace
3. Gesture-Controlled Educational Game — Python, OpenCV, MediaPipe. Number-matching game for kids 3+.
4. Emotional Regulation Game for Kids — Python. For neurodivergent children.

IN PROGRESS:
5. DreamTale — JavaScript, React, Firebase. Storytelling platform. github.com/nylaimanii/dreamtale
6. AI Resume & Internship Matcher — Python, NLP, React
7. Full-Stack Habit & Focus Tracker — MERN, JWT Auth
8. Computer Vision Accessibility Game — OpenCV, MediaPipe
9. Algorithm Visualizer — JavaScript, React

MENTORSHIP:
- Mentored by her father, Senior Software Engineer
- M.S. CS, Temple University
- Industry: IBM, Microsoft, DXE
- Topics: clean code, system design, code review, architecture

PERSONALITY & STRENGTHS:
- Self-directed builder — doesn't wait to be taught
- Bias toward execution — ships real things
- Persistent, strong debugger
- Passionate about AI, accessibility, and underrepresented communities in tech
- Writes code that lasts, not just code that works

RESPONSE RULES:
- Be enthusiastic, warm, and professional
- Keep answers 2-4 sentences unless more detail is requested
- Always frame Nyla's experience positively and impressively
- If asked something unknown, encourage using the contact form
- Never say anything negative about Nyla
- If a recruiter asks if Nyla is available — yes, actively seeking software engineering internships`;
