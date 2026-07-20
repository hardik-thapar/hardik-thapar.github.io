// Portfolio data — converted from data.ts
// All original data preserved exactly as-is

const PERSONAL = {
  name: 'Hardik Thapar',
  title: 'Software Engineer',
  location: 'Chandigarh, India',
  email: 'hardikthapar1@gmail.com',
  phone: '+91 98724-05709',
  github: 'https://github.com/hardik-thapar',
  linkedin: 'https://www.linkedin.com/in/hardik-thapar',
  twitter: 'https://x.com/ThaparHardik',
  leetcode: 'https://leetcode.com/u/HARDIKTHAPAR/',
  bio: 'Third-year Computer Science student focused on software engineering and backend development. I enjoy understanding how systems work under the hood and building reliable, scalable software from first principles. Currently sharpening my problem-solving skills through DSA while exploring modern backend engineering concepts.',
};

const PROJECTS = [
  {
    title: 'VocalWell — Voice Pathology Detection',
    description: 'End-to-end ML platform for voice pathology detection. Audio preprocessing, MFCC feature extraction, CNN-BiLSTM classifier, FastAPI REST API, PostgreSQL backend, Docker containerization. Deployed on Render with an interactive web interface for real-time predictions.',
    stack: ['Python', 'TensorFlow', 'Librosa', 'FastAPI', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/hardik-thapar/vocalwell',
  },
  {
    title: 'DengCast — Dengue Time Series Forecasting',
    description: 'Structured ML pipeline for forecasting weekly dengue cases using environmental variables and temporal features. Evaluated on the DrivenData DengAI dataset for San Juan (MAE: 11.87) and Iquitos (MAE: 4.74). Combines climate features, autoregressive case lags, rolling statistics, and CatBoost gradient boosting. Strict chronological cross-validation to avoid temporal leakage.',
    stack: ['Python', 'CatBoost', 'XGBoost', 'Time-Series Analysis', 'Feature Engineering', 'scikit-learn'],
    link: 'https://github.com/hardik-thapar/dengcast-dengue-forecasting',
  },
  {
    title: 'LLM Scheduling Assistant',
    description: 'Multi-agent constraint-aware scheduling system using LLaMA-3.1 and DeepSeek-7B. Ran inference on AMD MI300 GPU with vLLM. Batching strategies for throughput optimisation. National finalist at AMD AI Sprint, IIT Bombay from 500+ teams. Built in 24 hours.',
    stack: ['Python', 'LLaMA-3.1', 'DeepSeek-7B', 'vLLM', 'Bash'],
    link: 'https://github.com/hardik-thapar/llm-scheduling-assistant',
  },
];

const HONORS = [
  {
    title: '1st Place — Swasthathon',
    description: 'Government of India recognition. National hackathon organised by PCI and Ministry of Health, India.',
    date: '2025',
  },
  {
    title: 'National Finalist — AMD AI Sprint, IIT Bombay',
    description: 'Finalist out of 500+ teams. Built LLM scheduling assistant on AMD MI300 GPU in 24 hours.',
    date: '2025',
  },
  {
    title: '1st Place — GDG Hacks',
    description: 'National hackathon win.',
    date: '2025',
  },
  {
    title: '1st Place — Hackaccino 3.0',
    description: 'National hackathon win.',
    date: '2025',
  },
  {
    title: '1st Place — Hackenomics 2025',
    description: 'National hackathon win.',
    date: '2025',
  },
  {
    title: '1st Place — CodePi 2.0',
    description: 'National hackathon win.',
    date: '2025',
  },
  {
    title: 'Runner-up — Hack With Her 4.0',
    description: 'National hackathon runner-up.',
    date: '2025',
  },
  {
    title: 'Runner-up — Code with DCG, DTU',
    description: 'National hackathon runner-up.',
    date: '2025',
  },
  {
    title: 'Finalist — GSMA National Hackathon',
    description: 'National finalist.',
    date: '2025',
  },
  {
    title: '8 National Hackathon Wins',
    description: 'Secured first place in 8 national hackathons before finishing second year of college.',
    date: '',
  },
];

const CERTIFICATIONS = [
  {
    title: 'AWS AI & ML Scholar',
    description: 'Selected globally for AWS AI & ML Scholars program. Built and deployed GenAI application using SageMaker, Lambda, S3, and QuickSight.',
    date: '2025',
  },
  {
    title: 'McKinsey Forward Fellow',
    description: 'Selected for McKinsey global Forward Program. Applied structured problem-solving frameworks with an international cohort.',
    date: '2025–2026',
  },
  {
    title: 'Harvard Aspire Leaders Program',
    description: 'Selected for Harvard University-founded Aspire Leaders Program on leadership and social impact.',
    date: '2025',
  },
  {
    title: 'Microsoft Azure AI Fundamentals',
    description: 'Microsoft certified.',
    date: '2025',
  },
  {
    title: 'CS50x — Introduction to Computer Science',
    description: 'Harvard University via edX.',
    date: '2024',
  },
  {
    title: 'Intermediate Machine Learning',
    description: 'Kaggle certification.',
    date: '2024',
  },
];

const EXPERIENCE = [
  {
    title: 'Research Intern',
    company: 'National Kaohsiung University of Science and Technology (NKUST), Taiwan',
    date: 'Mar 2026 – May 2026',
    description: "EEG-based Alzheimer's Disease detection research under Assoc. Prof. Chang Kang-Ming. Applying DNN and LLM approaches on public neuroscience datasets (ADNI, Temple University EEG Corpus). Worked towards SCI-indexed journal publication.",
  },
  {
    title: 'Technical Executive',
    company: 'Google Developer Groups On Campus, Chitkara University',
    date: 'Aug 2025 – Present',
    description: 'Designed and delivered 4 hands-on AI/ML workshops to 100+ students covering ML pipelines, practical tooling, and responsible AI development.',
  },
  {
    title: 'AWS AI & ML Scholar',
    company: 'Amazon Web Services',
    date: 'Jul – Aug 2025',
    description: 'Selected globally. Built and deployed Generative AI application using AWS SageMaker, Lambda, S3, and QuickSight.',
  },
  {
    title: 'Forward Program Fellow',
    company: 'McKinsey & Company',
    date: 'Oct 2025 – Jan 2026',
    description: 'Applied data-driven analytical frameworks to structured case studies with a global cohort of early-career professionals.',
  },
];

const EDUCATION = [
  {
    degree: 'Bachelors of Engineering - Computer Science(AI-ML)',
    institution: 'Chitkara University',
    date: 'Aug 2024 – Aug 2028',
    gpa: '8.50 / 10.0',
    note: "Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Software Engineering, Machine Learning, Data Analyses, Soft Computing",
  },
  {
    degree: 'Leadership Development Program',
    institution: 'Aspire Institute — Harvard University',
    date: 'Jan – Apr 2025',
    gpa: '10.0 / 10.0',
    note: 'Leadership & Social Impact',
  },
  {
    degree: 'Certificate Program — Computer Science',
    institution: 'Daksh Gurukul, IIT Guwahati',
    date: 'May – Nov 2024',
    gpa: '',
    note: '',
  },
];

const SKILLS = {
  languages: ['Java', 'Python', 'SQL', 'C++', 'Bash'],

aiml: [
  'LLM APIs',
  'ML Systems',
  'Time-Series Analysis',
  'PyTorch',
  'TensorFlow',
  'scikit-learn',
],

engineering: [
  'FastAPI',
  'REST API Design',
  'PostgreSQL',
  'RDBMS',
  'Database Schema Design',
  'OOP',
  'Git',
  'GitHub',
  'Docker',
  'Linux',
  'Unit Testing',
  'Functional Testing',
  'Modular Architecture',
],

cloud: [
  'AWS Lambda',
  'Amazon S3',
  'AWS SageMaker',
  'CI/CD Pipelines',
  'Containerised Deployment (Docker + Render)',
],

learning: [
  'DSA',
  'Operating Systems',
  'DBMS',
  'Computer Networks',
  'System Design',
],
};

const PUBLICATIONS = [
  {
    title: 'None',
    venue: 'None',
    description: 'None',
    link: '#',
    date: '2026 — expected',
  },
];
