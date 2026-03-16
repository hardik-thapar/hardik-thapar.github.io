export const PERSONAL = {
  name: 'Hardik Thapar',
  title: 'AI & ML Engineer',
  location: 'Chandigarh, India',
  email: 'hardikthapar1@gmail.com',
  phone: '+91 98724-05709',
  github: 'https://github.com/hardik-thapar',
  linkedin: 'https://www.linkedin.com/in/hardik-thapar',
  twitter: 'https://x.com/ThaparHardik',
  leetcode: 'https://leetcode.com/u/HARDIKTHAPAR/',
  bio: 'Second-year AI/ML engineering student who builds things that actually work. 8 national hackathon wins, IIT Bombay national finalist, selected for McKinsey, AWS, and Harvard programmes — all before finishing second year. Currently doing EEG research with a professor in Taiwan toward an SCI publication.',
};

export const PROJECTS = [
  {
    title: 'VocalWell — Voice Pathology Detection',
    description: 'End-to-end ML pipeline for voice pathology detection. Audio preprocessing, MFCC and spectrogram feature extraction, deep learning classifier, FastAPI REST API, PostgreSQL backend, Docker containerization. Deployed live on Render. 12–15% accuracy improvement over baseline.',
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

export const HONORS = [
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

export const CERTIFICATIONS = [
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

export const EXPERIENCE = [
  {
    title: 'Research Collaborator',
    company: 'National Kaohsiung University of Science and Technology (NKUST), Taiwan',
    date: 'Mar 2026 – Present',
    description: 'EEG-based Alzheimer\'s Disease detection research under Assoc. Prof. Chang Kang-Ming. Applying DNN and LLM approaches on public neuroscience datasets (ADNI, Temple University EEG Corpus). Working toward SCI-indexed journal publication.',
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

export const EDUCATION = [
  {
    degree: 'B.E. Artificial Intelligence & Machine Learning',
    institution: 'Chitkara University',
    date: 'Aug 2024 – Aug 2028',
    gpa: '8.50 / 10.0',
    note: 'Dean\'s List — All Semesters',
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

export const SKILLS = {
  languages: ['Python', 'C++', 'SQL', 'Bash'],
  aiml: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LLMs', 'Signal Processing', 'Time-Series Analysis', 'EEG Data Processing', 'CatBoost', 'XGBoost'],
  engineering: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Docker', 'Git', 'Linux'],
  cloud: ['AWS SageMaker', 'AWS Lambda', 'Amazon S3', 'Amazon QuickSight'],
  learning: ['DSA', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design'],
};

export const PUBLICATIONS = [
  {
    title: 'None',
    venue: 'None',
    description: 'None',
    link: '#',
    date: '2026 — expected',
  },
];