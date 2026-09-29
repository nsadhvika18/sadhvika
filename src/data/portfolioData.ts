import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Sadhvika N',
    headline: 'B.Tech 2nd Year Student (Data Science) | Aspiring Data Analyst & Software Developer',
    shortBio: 'Second-year Data Science undergraduate at Nalla Narsimha Reddy Group of Institutions. Focused on mastering Python, SQL, Data Structures & Algorithms, and building practical problem-solving projects.',
    status: 'Seeking Future Internship Opportunities',
    avatarUrl: '/src/assets/images/avatar_profile_1790673454170.jpg',
    resumeFileName: 'Sadhvika_N_Resume.pdf',
    socials: {
      email: 'nsadhvika18@gmail.com',
      github: 'https://github.com/nsadhvika18',
      linkedin: 'https://linkedin.com/in/sadhvika-n',
      kaggle: 'https://kaggle.com/sadhvika',
    },
  },
  about: {
    summary: 'I am a second-year Data Science student interested in Data Science, Data Analysis, Python, SQL, Machine Learning, problem solving, and software development. I am currently learning and building my technical skills and looking for future internship opportunities.',
    careerProfile: 'Dedicated to understanding core computational principles and analytical problem-solving. Actively strengthening foundational knowledge in Data Structures & Algorithms, database querying with SQL, and building practical software applications.',
    interests: [
      'Data Science',
      'Data Analysis',
      'Python Programming',
      'SQL & Relational Databases',
      'Machine Learning Fundamentals',
      'Problem Solving & DSA',
      'Software Development',
    ],
    currentFocus: 'Building strong problem-solving habits in Data Structures & Algorithms, expanding practical Python & SQL proficiency, and developing hands-on projects like AquaSync.',
  },
  technicalSkills: [
    { name: 'Python', level: 'Basic' },
    { name: 'C', level: 'Basic' },
    { name: 'Java', level: 'Basic' },
    { name: 'SQL', level: 'Basic' },
    { name: 'Data Structures & Algorithms', level: 'Core' },
    { name: 'Basic Data Analysis', level: 'Foundational' },
  ],
  toolsAndPlatforms: [
    'Git',
    'GitHub',
    'VS Code',
  ],
  softSkills: [
    'Communication',
    'Quick Learning',
    'Problem Solving',
    'Teamwork',
    'Time Management',
  ],
  projects: [
    {
      id: 'aquasync',
      title: 'AquaSync',
      tagline: 'Smart Water Tank Monitoring & Automatic Motor Control',
      purpose: 'A smart water management system designed to monitor water levels in a tank and automate motor control to help prevent overflow and unnecessary water wastage.',
      technologies: ['Python', 'Data Logic', 'Git', 'GitHub', 'IoT Architecture'],
      features: [
        'Water-level monitoring with real-time level percentages and visual indicators',
        'Tank status tracking (Empty, Normal, High, Full, Overflow Risk)',
        'Automatic motor ON/OFF control triggered by threshold levels to prevent water wastage',
        'Water-level alert notifications for critical high or dry-run conditions',
        'Water-level history logging for trend observation and usage analysis',
        'Sensor and device connection status indicators',
        'Interactive demo mode with simulated sensor values to evaluate control behavior',
        'Flexible hardware/API integration designed to support various ultrasonic/float sensors and IoT boards upon final hardware selection',
      ],
      statusNote: 'In active development — includes an interactive demo mode with simulated sensor readings while final sensor and microcontroller boards are being finalized.',
      githubUrl: 'https://github.com/nsadhvika18/AquaSync',
      hasInteractiveDemo: true,
    },
  ],
  education: [
    {
      id: 'btech',
      level: 'B.Tech (2nd Year)',
      field: 'Data Science',
      institution: 'Nalla Narsimha Reddy Group of Educational Society and Institutions',
      yearOrStatus: 'Currently in 2nd Year (2023 - 2027)',
      score: '8.58 CGPA',
      scoreType: '1st Year Academic Performance',
    },
    {
      id: 'inter',
      level: '12th / Intermediate',
      institution: 'Junior College / State Board of Intermediate Education',
      yearOrStatus: 'Completed',
      score: '93%',
      scoreType: 'Final Board Examination',
    },
    {
      id: 'ssc',
      level: '10th / Secondary School',
      institution: 'Secondary School Certificate (SSC)',
      yearOrStatus: 'Completed',
      score: '75%',
      scoreType: 'Board Examination',
    },
  ],
  learningJourney: [
    {
      id: 'journey-1',
      phase: '1st Year Foundation',
      title: 'Core Computing & Programming Foundations',
      focus: 'Strengthened fundamental computer science and mathematical thinking.',
      activities: [
        'Learned procedural programming concepts in C and foundational object-oriented principles in Java.',
        'Maintained consistent academic discipline, earning an 8.58 CGPA in the first year.',
        'Developed early appreciation for problem decomposition, algorithms, and analytical logic.',
      ],
    },
    {
      id: 'journey-2',
      phase: '2nd Year (Current)',
      title: 'Data Science Specialization & Project Prototyping',
      focus: 'Transitioning into core Data Science subjects, database management, and hands-on coding.',
      activities: [
        'Practicing Python programming for data handling and exploratory analytical tasks.',
        'Studying Data Structures & Algorithms to build stronger algorithmic reasoning and code efficiency.',
        'Learning SQL querying basics for tabular data manipulation and database schemas.',
        'Designing AquaSync — an automated water-level monitoring and motor control system with simulated sensor modes.',
      ],
    },
    {
      id: 'journey-3',
      phase: 'Next Milestone',
      title: 'Internship Preparation & Applied Skill Growth',
      focus: 'Preparing for summer and semester internship opportunities.',
      activities: [
        'Deepening practical Machine Learning foundations and statistical data analysis techniques.',
        'Expanding version control discipline using Git and GitHub for collaborative code repositories.',
        'Seeking future internship roles where foundational skills in Python, SQL, and Data Science can contribute to real-world tasks.',
      ],
    },
  ],
};

const STORAGE_KEY = 'sadhvika_portfolio_data_v2';

export function getStoredPortfolioData(): PortfolioData {
  if (typeof window === 'undefined') return portfolioData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return portfolioData;
    const parsed = JSON.parse(raw);
    // Ensure we only use authentic structure
    return { ...portfolioData, ...parsed };
  } catch (err) {
    console.error('Failed to parse portfolio data:', err);
    return portfolioData;
  }
}

export function saveStoredPortfolioData(data: PortfolioData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Failed to save portfolio data:', err);
  }
}

export function resetStoredPortfolioData(): PortfolioData {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return portfolioData;
}
