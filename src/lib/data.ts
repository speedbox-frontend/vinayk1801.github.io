import { ExperienceItem, ProjectItem, SkillCategory } from '@/types';

export const PERSONAL_INFO = {
  name: 'Vinay Kumar',
  title: 'Senior Software Developer',
  tagline: 'Building high-performance web experiences with modern frontend architecture',
  summary:
    'Software Developer with 3+ years building high-performance web applications. Specialized in React.js, Next.js, and TypeScript with proven track record of reducing load times by 35%, leading teams of 4+ developers, and delivering 10+ enterprise projects. Expert in scalable architecture, performance optimization, and modern frontend technologies.',
  email: 'vinayk180323@gmail.com',
  phone: '+91-965-094-4142',
  location: 'Delhi, India',
  linkedin: 'https://linkedin.com/in/vinaykumar1801',
  github: 'https://github.com/vinaykumar1801',
  website: 'https://vinaykumar1801.github.io',
  resumeUrl: '/resume.pdf',
  availability: 'Open to opportunities',
  yearsOfExperience: 3,
  projectsDelivered: 10,
  performanceImprovement: '35%',
  teamSizeLed: 4,
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'speedbox',
    company: 'Speedbox',
    role: 'Senior Software Developer',
    duration: 'May 2025 – Present',
    location: 'Delhi, India',
    description: [
      'Lead frontend architecture and development for enterprise-level applications serving thousands of users',
      'Implement performance optimizations and scalable solutions, reducing bundle size and improving load times',
      'Mentor 3+ junior developers through code reviews, pair programming, and technical guidance',
      'Collaborate with product, design, and backend teams to deliver high-quality features on aggressive timelines'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    id: 'antino',
    company: 'Antino Labs',
    role: 'Software Developer',
    duration: 'July 2023 – May 2025',
    location: 'Gurugram, India',
    description: [
      'Developed and maintained 10+ full-stack applications using React, Node.js, Express.js, and MongoDB',
      'Reduced application load time by 25% through code splitting, lazy loading, and performance optimization techniques',
      'Implemented responsive, cross-browser compatible features ensuring 95%+ browser compatibility',
      'Collaborated in Agile teams to deliver client projects on schedule with 95% code coverage through unit testing',
      'Wrote clean, maintainable code following SOLID principles and conducted thorough code reviews'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'TypeScript', 'Jest'],
  },
  {
    id: 'flamecloud',
    company: 'FlameCloud',
    role: 'Software Developer Intern',
    duration: 'March 2023 – June 2023',
    location: 'Gurugram, India',
    description: [
      'Built responsive web applications using React.js, JavaScript, and modern CSS frameworks',
      'Fixed 50+ bugs and implemented new features improving user experience and application stability',
      'Created comprehensive technical documentation for features, APIs, and development workflows'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'apt-global',
    title: 'APT Global',
    role: 'Frontend Team Lead',
    duration: 'Jan 2025 – Apr 2025',
    description:
      'A comprehensive financial platform empowering users with tax planning and mutual fund investment tools, built with modular calculators and secure payment features.',
    problem:
      'Users needed a unified, high-performing platform for complex tax calculations and mutual fund explorations with secure payments and reliable conversion analytics.',
    solution:
      'Architected a scalable React frontend with modular calculator components, integrated Stripe for secure payments, and implemented Google Analytics tracking for conversion funnels.',
    techStack: ['React.js', 'Redux', 'TypeScript', 'Stripe', 'Google OAuth', 'Google Analytics'],
    features: [
      'Led team of 4 developers to build financial platform with tax and mutual fund calculators',
      'Improved SEO score by 40% and reduced page load time by 35% through optimization and code splitting',
      'Integrated Stripe payment gateway and Google OAuth, handling 1,000+ transactions securely',
      'Implemented Google Analytics tracking and conversion funnels to drive product decisions'
    ],
    metrics: [
      { label: 'Active Users', value: '5,000+' },
      { label: 'SEO Improvement', value: '40%' },
      { label: 'Load Time Reduction', value: '35%' },
      { label: 'Transactions Handled', value: '1,000+' },
    ],
    githubUrl: 'https://github.com/vinaykumar1801',
    liveUrl: '#',
  },
  {
    id: 'spaarkd',
    title: 'Spaarkd',
    role: 'Full Stack Developer',
    duration: 'Jun 2024 – Dec 2024',
    description:
      'An immersive platform featuring interactive 3D visualizations and a responsive dashboard for highly engaging user experiences.',
    problem:
      'The client required a visually rich platform with interactive 3D graphics that also maintained a high degree of code coverage and fast page performance.',
    solution:
      'Built interactive 3D scenes using Three.js and Canvas, developed a responsive Next.js dashboard with TypeScript, and created a reusable component library reducing dev time by 30%.',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Stripe', 'Canvas'],
    features: [
      'Built interactive 3D visualizations using Three.js and Canvas, creating engaging user experiences',
      'Developed responsive dashboard with Next.js and TypeScript, maintaining 95% code coverage',
      'Integrated Stripe payment system and implemented secure authentication flow',
      'Created reusable component library reducing development time by 30%'
    ],
    metrics: [
      { label: 'Code Coverage', value: '95%' },
      { label: 'Dev Time Reduction', value: '30%' },
      { label: '3D Elements', value: '10+' },
      { label: 'Components Built', value: '40+' },
    ],
    githubUrl: 'https://github.com/vinaykumar1801',
    liveUrl: '#',
  },
  {
    id: 'gmr-energy',
    title: 'GMR Energy Trading Dashboard',
    role: 'Frontend Developer',
    duration: 'Dec 2023 – Mar 2024',
    description:
      'A high-performance energy trading dashboard capable of handling massive, real-time datasets with complex filtering and virtualized grid rendering.',
    problem:
      'Energy trading operations required rendering and filtering large-scale (100,000+ rows) datasets with virtualized grids and multi-role access authentication.',
    solution:
      'Built scalable architecture from scratch using AG-Grid for virtualized data rendering, integrated Razorpay for payments, and built a JWT-based multi-role authentication system.',
    techStack: ['React.js', 'AG-Grid', 'Redux', 'Razorpay', 'JWT', 'Node.js'],
    features: [
      'Built scalable architecture from scratch, reducing development cycle by 35% through modular design patterns',
      'Implemented AG-Grid for efficient handling of 100,000+ row datasets with virtual scrolling and pagination',
      'Integrated Razorpay payment gateway and multi-role authentication system with JWT'
    ],
    metrics: [
      { label: 'Dev Cycle Reduction', value: '35%' },
      { label: 'Rows Handled', value: '100,000+' },
      { label: 'Load Time Improvement', value: '40%' },
      { label: 'User Roles', value: '5+' },
    ],
    githubUrl: 'https://github.com/vinaykumar1801',
    liveUrl: '#',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 93 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Redux / Redux Toolkit', level: 90 },
      { name: 'Context API', level: 92 },
      { name: 'Three.js', level: 82 },
      { name: 'AG-Grid', level: 85 },
    ],
  },
  {
    category: 'UI Frameworks',
    items: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material-UI', level: 88 },
      { name: 'Ant Design', level: 85 },
      { name: 'Chakra UI', level: 82 },
      { name: 'Bootstrap', level: 90 },
      { name: 'SCSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'JWT Authentication', level: 90 },
      { name: 'Socket.io', level: 78 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'Firebase', level: 82 },
    ],
  },
  {
    category: 'Tools & Platform',
    items: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Jira', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Webpack', level: 80 },
      { name: 'CI/CD', level: 78 },
    ],
  },
  {
    category: 'Integrations',
    items: [
      { name: 'Stripe', level: 88 },
      { name: 'Razorpay', level: 85 },
      { name: 'Google OAuth', level: 90 },
      { name: 'Google Analytics', level: 85 },
    ],
  },
  {
    category: 'Methodologies',
    items: [
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Test-Driven Development', level: 85 },
      { name: 'Code Reviews', level: 92 },
      { name: 'Performance Optimization', level: 95 },
      { name: 'SEO', level: 88 },
    ],
  },
];

export const EDUCATION = {
  institution: 'Panipat Institute of Engineering & Technology',
  degree: 'Bachelor of Technology in Mechanical Engineering',
  location: 'Panipat, Haryana',
  duration: '2014 – 2019',
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/vinaykumar1801', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vinaykumar1801', icon: 'linkedin' },
  { name: 'Email', href: 'mailto:vinayk180323@gmail.com', icon: 'mail' },
];
