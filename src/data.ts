import type { Achievement, Education, Experience, Highlight, Profile, Project, SkillGroup } from './types';

export const profile: Profile = {
  name: 'Javhar Bokhodirov',
  headline: 'QA Engineer · Business Systems Analyst',
  location: 'Tashkent, Uzbekistan',
  summary: [
    'Junior QA Engineer at UZUM Technologies × Kapitalbank, testing core banking systems: web, mobile and API, manual and automated with Python and pytest.',
    'School 21 graduate in Business Systems Analysis and a Management Information Systems student at Webster University (GPA 3.9, Dean’s List).',
    'Before software I built robots and drones: a stratospheric student satellite, an autonomous LiDAR drone, and first places at international and national engineering competitions.',
  ],
  email: 'bohodirovjavhar@gmail.com',
  links: [
    { label: 'Telegram', href: 'https://t.me/javxarr', handle: '@javxarr' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/javhar-bokhodirov-636bb52ab', handle: 'javhar-bokhodirov' },
    { label: 'GitHub', href: 'https://github.com/Javharr', handle: 'Javharr' },
  ],
};

export const highlights: Highlight[] = [
  { value: '1st', label: 'International STEM competition, 150+ teams from 20 countries' },
  { value: '3.9', label: 'GPA at Webster University, Dean’s List' },
  { value: '972 h', label: 'School 21 Business Systems Analyst program' },
  { value: '45 km', label: 'Student satellite altitude' },
];

export const experience: Experience[] = [
  {
    id: 'uzum',
    role: 'Junior QA Engineer',
    company: 'UZUM Technologies × Kapitalbank',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Test core banking (ABS) modules: transactions, payments, balances, account operations and system integrations.',
      'Web, mobile and API testing; manual API checks in Postman and Swagger / OpenAPI.',
      'Write and maintain automated tests in Python with requests and pytest.',
      'Validate backend data and analyse incidents with PL/SQL.',
      'Design test cases and checklists, report bugs and work in Jira and Confluence with the product team.',
    ],
  },
  {
    id: 'technocamp',
    role: 'STEM Coordinator',
    company: 'TechnoCAMP',
    period: '2024',
    bullets: [
      'Coordinated STEM activities and technical events for 400+ students across multiple schools.',
      'Organised robotics, drone-engineering and aerospace programs and supported students at workshops and competitions.',
      'Wrote entrance examinations in mathematics, physics and English for student selection.',
    ],
  },
  {
    id: 'nazarx',
    role: 'Robotics Engineer (from intern)',
    company: 'NazarXuz',
    period: '2022 — 2024',
    bullets: [
      'Joined as an intern and became a full member of the robotics engineering team.',
      'Drone, robotics and aerospace projects involving autonomous systems and LiDAR.',
      'Hardware integration, Arduino-based systems and technical testing.',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'school21',
    school: 'School 21',
    program: 'Business Systems Analyst · professional retraining diploma',
    period: 'Mar — Oct 2026',
    badge: 'Graduated',
    details: [
      '972-hour project-based program in systems analysis, software architecture and data-oriented technologies.',
      'Peer-to-peer learning on real-world technical problems.',
    ],
    images: ['/school21_2.jpg', '/school21_1.jpg', '/school21_diploma.jpg'],
  },
  {
    id: 'webster',
    school: 'Webster University in Tashkent',
    program: 'B.Sc. Management Information Systems',
    period: '2024 — 2028',
    details: ['GPA 3.9 / 4.0 · Dean’s List'],
  },
  {
    id: 'school278',
    school: 'Tashkent State School №278',
    program: 'High school diploma, advanced math and physics',
    period: '2013 — 2024',
    details: ['Title of honour for achievements, academic results and conduct.'],
  },
];

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'Russian', level: 'Native' },
  { name: 'Uzbek', level: 'Native' },
];

export const moreHighlights: string[] = [
  'Semi-finalist and team leader: Robo Football, Sumo Robotics, Most Smart House, NASA Space Apps Challenge.',
  'Plane-drone project flown at a military training ground with permission from the Ministry of Defense.',
  'Officially invited by the government to attend the President’s Navruz address.',
  'Model United Nations delegate at several conferences; main submitter in multiple committees.',
  'Two years at IT Step Academy; accelerated electronics course.',
  'Tournament chess player for 1.5 years, close to first category.',
];

export const achievements: Achievement[] = [
  {
    id: 'turkey',
    rank: '1st place',
    title: 'International STEM Competition',
    event: 'International Turkish World Science Festival',
    location: 'Ankara, Turkey',
    year: '2023',
    scale: '150+ teams · 20 countries',
    summary:
      'Won first place as part of a technical team, developing and presenting engineering solutions against teams from 20 countries.',
    images: ['/international_1.jpeg', '/international_2.jpeg', '/international_3.jpeg', '/international_4.jpeg'],
  },
  {
    id: 'defence',
    rank: '1st place',
    title: 'National Engineering Competition',
    event: 'Ministry of Defense STEM Festival',
    location: 'Uzbekistan',
    year: '2024',
    scale: '50+ teams',
    summary:
      'Built an electric carrier platform for transporting heavy objects in technical environments. Competition run with military and technical institutions.',
    images: ['/defence_1.jpeg', '/defence_2.jpeg'],
  },
  {
    id: 'webster',
    rank: 'Best Implementation',
    title: '“Code for Change” Hackathon',
    event: 'Webster University Tashkent',
    location: 'Tashkent',
    year: '2025',
    summary:
      'Awarded for the strongest execution: a working solution for innovation in education and tourism, built by the team during the hackathon.',
    images: ['/webster_achievement_1.jpeg'],
  },
  {
    id: 'recognition',
    rank: 'Recognition',
    title: 'Governor’s Award & national TV',
    event: 'Almazar district · “Uzbekiston” TV channel',
    location: 'Uzbekistan',
    year: '2023',
    summary:
      'Recognised by the governor of Almazar district for achievements in robotics and academics (awarded a laptop at graduation). Presented the satellite project with the team on the “Uzbekiston” TV channel.',
    images: ['/achievement_1.jpg', '/achievement_2.jpg', '/achievement_3.jpg'],
  },
];

export const projects: Project[] = [
  {
    id: 'satellite',
    title: 'Student Satellite',
    role: 'Hardware integration & testing',
    summary:
      'High-altitude student satellite for environmental data collection. Reached the stratosphere at over 45 km; the team was later interviewed on national TV.',
    highlights: ['45+ km altitude', 'Environmental sensors', 'Pre-launch testing'],
    stack: ['Arduino', 'Sensors', 'Aerospace systems'],
    cover: '/satelite_4.jpg',
    images: ['/satelite_4.jpg', '/satelite_3.png', '/satelite_2.jpg', '/satelite_1.jpg'],
  },
  {
    id: 'lidar',
    title: 'LiDAR Scanning Drone',
    role: 'Engineering team member',
    summary:
      'Large autonomous drone for 3D mapping and environmental scanning, with autonomous flight and landing and room for extra payload.',
    highlights: ['222 cm span', '210 km range', '4 km ceiling', '8 kg payload'],
    stack: ['LiDAR', 'Autonomous flight', '3D mapping'],
    cover: '/pilot_1.jpg',
    images: ['/pilot_1.jpg', '/pilot_2.png', '/pilot_3.png', '/pilot_4.jpg'],
  },
  {
    id: 'mockmate',
    title: 'MockMate',
    role: 'Solo build',
    summary:
      'AI-powered mock interview platform for practising technical and behavioural interviews.',
    highlights: ['AI interviewer', 'Deployed on Vercel'],
    stack: ['Next.js', 'AI integration'],
    cover: '/mock_1.png',
    images: ['/mock_1.png', '/mock_3.png'],
    link: 'https://mockmate-swart.vercel.app/',
  },
  {
    id: 'rover',
    title: 'Mars Rover Prototype',
    role: 'Personal project',
    summary:
      'Rover prototype inspired by real aerospace mobility concepts: hardware structure, mobility and autonomous exploration.',
    highlights: ['Rover design research', 'Own prototype'],
    stack: ['Arduino', 'Hardware design', 'Robotics'],
    cover: '/mars_1.jpg',
    images: ['/mars_1.jpg', '/mars_2.jpg', '/mars_3.jpg'],
    status: 'Paused',
  },
];

export const skills: SkillGroup[] = [
  { id: 'qa', category: 'Testing', skills: ['Web testing', 'Mobile testing', 'API testing', 'Manual testing', 'Test cases & checklists', 'Bug reporting'] },
  { id: 'tools', category: 'Tools', skills: ['Postman', 'Swagger / OpenAPI', 'Jira', 'Confluence'] },
  { id: 'code', category: 'Automation & data', skills: ['Python', 'pytest', 'requests', 'SQL', 'PL/SQL'] },
  { id: 'analysis', category: 'Analysis', skills: ['Business systems analysis', 'Software architecture', 'Data science'] },
  { id: 'engineering', category: 'Engineering', skills: ['Arduino', 'Robotics', 'Embedded systems', 'Electronics', 'Hardware integration'] },
  { id: 'leadership', category: 'Leadership', skills: ['Team coordination', 'STEM mentorship', 'Public speaking'] },
];
