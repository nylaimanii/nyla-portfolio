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
    event: "Georgetown University — Hoya Hacks 2026",
    location: "Washington, D.C.",
    date: "February 2026",
    track: "Sustainability Track",
    placement: "2ND PLACE",
    description: "First-ever hackathon. Competed against university teams nationwide. Rapidly prototyped an AI-powered sustainability solution — integrated new libraries on the fly. Designed, built, and presented within the time limit.",
    devpost: "https://devpost.com/nylaimanii7"
  },
  {
    event: "Rutgers University — HackHERS 2026",
    location: "New Brunswick, NJ",
    date: "2026",
    track: "Rutgers Women in Computer Science · 24-Hour Hackathon",
    placement: null,
    description: "Competed in Rutgers' annual women-focused hackathon dedicated to closing the gender gap in tech. Built and shipped a full AI-integrated project in 24 hours. Attended workshops, mentorship sessions, and tech talks.",
    devpost: "https://devpost.com/nylaimanii7"
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

HACKATHONS:
- Georgetown Hoya Hacks 2026 — 2ND PLACE, Sustainability Track. Her very first hackathon. Competed against university teams nationwide. Built an AI-powered sustainability solution.
- Rutgers HackHERS 2026 — 24-hour women in CS hackathon. Built and shipped full AI-integrated project in 24 hours.

PROJECTS (6 total — 4 in progress, 2 completed):
1. AI Resume & Internship Matcher — Python, NLP, React
2. Full-Stack Habit & Focus Tracker — MERN, JWT Auth
3. Computer Vision Accessibility Game — OpenCV, MediaPipe
4. Algorithm Visualizer — JavaScript, React
5. Gesture-Controlled Educational Game — COMPLETED
6. Emotional Regulation Game for Kids — COMPLETED

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
