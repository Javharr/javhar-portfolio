import type { Achievement, Education, Experience, Highlight, Profile, Project, SkillGroup } from './types';

export const profile: Profile = {
  name: 'Javhar Bokhodirov',
  headline: 'QA & Automation · Robotics · Systems',
  location: 'Tashkent, Uzbekistan',
  summary: [
    'MIS student at Webster University in Tashkent, working in QA and automation at UZUM Technologies × Kapitalbank.',
    'Background in robotics and aerospace: a stratospheric student satellite, an autonomous LiDAR drone, and first places at international and national engineering competitions. Now focused on automation, systems analysis and AI.',
  ],
  email: 'bohodirovjavhar@gmail.com',
  links: [
    { label: 'Telegram', href: 'https://t.me/javxarr', handle: '@javxarr' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/javhar-bokhodirov-636bb52ab', handle: 'javhar-bokhodirov' },
    { label: 'GitHub', href: 'https://github.com/Javharr', handle: 'Javharr' },
  ],
};

export const highlights: Highlight[] = [
  { value: '1st', label: 'International STEM competition, 150+ teams' },
  { value: '20', label: 'Countries competed against' },
  { value: '45 km', label: 'Student satellite altitude' },
  { value: '400+', label: 'Students in STEM program coordinated' },
];

export const experience: Experience[] = [
  {
    id: 'uzum',
    role: 'QA & Automation',
    company: 'UZUM Technologies × Kapitalbank',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Software and mobile testing in large-scale production systems; bug analysis and reporting.',
      'Work with developers through testing and release cycles.',
      'Build automation-focused workflows with Python, SQL and PL/SQL.',
    ],
  },
  {
    id: 'technocamp',
    role: 'STEM Coordinator',
    company: 'TechnoCAMP',
    period: '2024',
    bullets: [
      'Coordinated a robotics, aerospace and drone-engineering program for 400+ students.',
      'Organised technical activities and educational events.',
      'Wrote entrance examinations in mathematics, physics and English.',
    ],
  },
  {
    id: 'nazarx',
    role: 'Robotics Engineering',
    company: 'NazarXuz',
    period: '2022 — 2024',
    bullets: [
      'Worked on drone, robotics and autonomous engineering projects.',
      'Arduino prototyping, hardware systems and technical experimentation.',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'webster',
    school: 'Webster University in Tashkent',
    program: 'Management Information Systems (MIS)',
    period: 'Current',
  },
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
  { id: 'software', category: 'Software', skills: ['Python', 'SQL', 'PL/SQL', 'Automation testing', 'Mobile testing'] },
  { id: 'engineering', category: 'Engineering', skills: ['Arduino', 'Robotics', 'Embedded systems', 'Hardware integration'] },
  { id: 'analysis', category: 'Analysis', skills: ['Systems analysis', 'Data science', 'Problem solving'] },
  { id: 'leadership', category: 'Leadership', skills: ['Team coordination', 'STEM mentorship', 'Public speaking'] },
];
