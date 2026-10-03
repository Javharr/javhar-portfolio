import type { Achievement, Education, Experience, Highlight, Profile, Project, SkillGroup } from './types';

export const profile: Profile = {
  name: 'Javhar Bokhodirov',
  headline: 'QA Engineer · Business Systems Analyst',
  location: 'Tashkent, Uzbekistan',
  summary: [
    'QA Engineer in the core banking (ABS) team at UZUM Technologies × Kapitalbank. I test payment flows and SWIFT messaging, verify backend logic directly in the database with SQL and PL/SQL, and test APIs in Postman.',
    'Graduated from School 21 as a Business Systems Analyst: a full analysis cycle from stakeholders and BPMN to data models, UI specs and REST / SOAP integration. Studying Management Information Systems at Webster University (GPA 3.9, Dean’s List).',
  ],
  email: 'bohodirovjavhar@gmail.com',
  links: [
    { label: 'Telegram', href: 'https://t.me/javxarr', handle: '@javxarr' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/javhar-bokhodirov-636bb52ab', handle: 'javhar-bokhodirov' },
    { label: 'GitHub', href: 'https://github.com/Javharr', handle: 'Javharr' },
  ],
};

export const highlights: Highlight[] = [
  { value: 'ABS', label: 'Core banking QA: payments, SWIFT, PL/SQL' },
  { value: '16', label: 'System analysis projects at School 21' },
  { value: '3.9', label: 'GPA at Webster University, Dean’s List' },
  { value: '1st', label: 'International STEM competition, 150+ teams from 20 countries' },
];

export const experience: Experience[] = [
  {
    id: 'uzum',
    role: 'QA Engineer, ABS team',
    company: 'UZUM Technologies × Kapitalbank',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Test core banking (ABS) modules: transactions, payments, balances, account operations and integrations.',
      'Test SWIFT message processing: construction, field validation, routing and status handling, including negative cases (malformed fields, wrong references, duplicates).',
      'Verify results in the database with SQL and trace PL/SQL packages to find where logic breaks, so defects come with a root cause.',
      'Write checklists and test cases from specifications; mine became part of the team’s permanent regression set.',
      'Scrum team with weekly sprints; defects and docs in Jira and Confluence, working closely with analysts and backend developers.',
    ],
  },
  {
    id: 'technocamp',
    role: 'STEM Coordinator',
    company: 'TechnoCAMP',
    period: '2024',
    bullets: [
      'Coordinated a robotics, drone and aerospace program for 400+ students across multiple schools.',
      'Wrote entrance examinations in mathematics, physics and English for student selection.',
    ],
  },
  {
    id: 'nazarx',
    role: 'Robotics Engineer (from intern)',
    company: 'NazarXuz',
    period: '2022 — 2024',
    bullets: [
      'Drone, robotics and aerospace projects: hardware integration, Arduino systems and technical testing.',
    ],
  },
];

export const caseStudies: Project[] = [
  {
    id: 'barbershop',
    title: 'Barbershop & Delivery: end-to-end system analysis',
    role: 'School 21 · Business Systems Analyst track, solo and team lead',
    summary:
      'Two systems analysed from scratch through 16 projects: from who the stakeholders are to how the API answers. Every artifact below was produced by me or by a team I led.',
    highlights: [
      'Stakeholder map & onion',
      'Context diagram & DFD',
      'BPMN as-is / to-be',
      'User stories & use cases',
      'Class & ER model',
      'Status lifecycles',
      'Role access matrix',
      'UI wireframes',
      'Non-functional requirements',
      'Integration & REST / SOAP specs',
    ],
    stack: ['BPMN 2.0', 'UML', 'draw.io', 'Excel', 'REST', 'SOAP'],
    cover: '/s21_context.jpg',
    images: ['/s21_context.jpg', '/s21_bpmn.jpg', '/s21_class.jpg', '/s21_lifecycle.jpg', '/s21_screen.jpg'],
  },
  {
    id: 'qa-artifacts',
    title: 'Web testing artifacts',
    role: 'School 21 · QA track',
    summary:
      'Test documentation for real websites: positive and negative test cases for the Swag Labs login, checklists for School 21 pages (desktop and 390 px mobile), a test plan structured on ISO/IEC/IEEE 29119-3, and boundary test data — e.g. a “5 MB” file that is over 5 000 000 bytes but under 5 MiB, to expose which unit a limit uses.',
    highlights: ['Test cases', 'Checklists', 'Test plan', 'Test data & boundaries'],
    stack: ['Web testing', 'Chrome DevTools', 'ISO 29119'],
    cover: '/qa_saucedemo.jpg',
    images: ['/qa_saucedemo.jpg'],
  },
  {
    id: 'mockmate',
    title: 'MockMate',
    role: 'Personal project',
    summary: 'AI-powered mock interview platform for practising technical and behavioural interviews.',
    highlights: ['AI interviewer', 'Live demo'],
    stack: ['Next.js', 'AI integration'],
    cover: '/mock_1.png',
    images: ['/mock_1.png', '/mock_3.png'],
    link: 'https://mockmate-swart.vercel.app/',
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
      '972-hour peer-to-peer program, project-based.',
      'Business systems analysis: 16 projects, from decomposition and requirements to BPMN, UML, UI and API integration.',
      'SQL Bootcamp (PostgreSQL): 12 projects — joins, DML, indexes, isolation levels, functions and procedures, OLAP, data warehouse basics.',
      'Also: QA foundations and test artifacts, Python and Unix tools for data science.',
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
];

export const achievements: Achievement[] = [
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
    id: 'turkey',
    rank: '1st place',
    title: 'International STEM Competition',
    event: 'International Turkish World Science Festival',
    location: 'Ankara, Turkey',
    year: '2023',
    scale: '150+ teams · 20 countries',
    summary: 'Won first place with a technical team, developing and presenting engineering solutions.',
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
    summary: 'Built an electric carrier platform for transporting heavy objects in technical environments.',
    images: ['/defence_1.jpeg', '/defence_2.jpeg'],
  },
];

export const robotics: Project[] = [
  {
    id: 'satellite',
    title: 'Student Satellite',
    role: 'Hardware integration & testing',
    summary:
      'High-altitude satellite for environmental data collection that reached the stratosphere at over 45 km. The team presented it on the national “Uzbekiston” TV channel.',
    highlights: ['45+ km altitude'],
    stack: ['Arduino', 'Sensors'],
    cover: '/satelite_4.jpg',
    images: ['/satelite_4.jpg', '/satelite_3.png', '/satelite_2.jpg', '/satelite_1.jpg', '/achievement_1.jpg'],
  },
  {
    id: 'lidar',
    title: 'LiDAR Scanning Drone',
    role: 'Engineering team member',
    summary: 'Autonomous drone for 3D mapping with autonomous flight and landing.',
    highlights: ['222 cm span', '210 km range', '8 kg payload'],
    stack: ['LiDAR', 'Autonomous flight'],
    cover: '/pilot_1.jpg',
    images: ['/pilot_1.jpg', '/pilot_2.png', '/pilot_3.png', '/pilot_4.jpg'],
  },
];

export const moreHighlights: string[] = [
  'Semi-finalist and team leader: NASA Space Apps Challenge, Robo Football, Sumo Robotics, Most Smart House.',
  'Plane-drone project flown at a military training ground with permission from the Ministry of Defense.',
  'Model United Nations delegate at several conferences.',
];

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'Russian', level: 'Native' },
  { name: 'Uzbek', level: 'Native' },
];

export const skills: SkillGroup[] = [
  {
    id: 'qa',
    category: 'Testing',
    skills: ['Web testing', 'Mobile testing', 'API testing', 'Backend / DB testing', 'Regression', 'Test cases & checklists', 'Test plans', 'Bug reporting'],
  },
  {
    id: 'analysis',
    category: 'Systems analysis',
    skills: ['Requirements (FR / NFR)', 'User stories', 'Use cases', 'BPMN 2.0', 'UML', 'DFD', 'ER / data modelling', 'REST / SOAP specs', 'Integration design'],
  },
  {
    id: 'data',
    category: 'Code & data',
    skills: ['SQL (PostgreSQL)', 'PL/SQL (Oracle)', 'Python', 'pytest', 'requests'],
  },
  {
    id: 'tools',
    category: 'Tools',
    skills: ['Postman', 'Swagger / OpenAPI', 'Jira', 'Confluence', 'draw.io', 'DataGrip', 'Git'],
  },
  { id: 'domain', category: 'Domain', skills: ['Core banking (ABS)', 'Payments', 'SWIFT', 'Scrum'] },
];
