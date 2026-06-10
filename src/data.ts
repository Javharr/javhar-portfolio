import { Project, Experience, Achievement, SkillCategory } from './types';

export const experienceData: Experience[] = [
  {
    id: "1",
    role: "QA & Automation",
    company: "UZUM Technologies × Kapitalbank",
    period: "2025 - Present",
    description: "Working with software testing, bug analysis, mobile testing, and automation-focused workflows inside large-scale production systems."
  },
  {
    id: "2",
    role: "Robotics Engineering",
    company: "NazarXuz",
    period: "2022 - 2024",
    description: "Worked on drone, robotics, and autonomous engineering projects involving Arduino, hardware systems, and technical experimentation."
  },
  {
    id: "3",
    role: "STEM Coordination",
    company: "TechnoCAMP",
    period: "2024",
    description: "Coordinated STEM activities involving 400+ students and helped organize technical programs, educational events, and entrance examinations."
  }
];

export const portfolioData: Project[] = [
  {
    id: "1",
    title: "Student Satellite Project",
    description: [
      "Worked with a student engineering team on a high-altitude satellite project focused on environmental data collection and aerospace experimentation.",
      "The satellite successfully reached the stratosphere at an altitude of more than 45 kilometers. I contributed to hardware integration, testing, and technical preparation during different stages of the project.",
      "After the successful launch, our team was invited to an interview on the official “Uzbekiston” TV channel, where we presented the project and shared our experience working on a real aerospace initiative."
    ],
    technicalHighlights: [
      "45+ km stratosphere launch",
      "Environmental data collection",
      "Hardware integration & testing"
    ],
    techStack: ["Aerospace Systems", "Sensors", "Arduino", "STEM Research"],
    imageUrl: "/satelite_4.jpg",
    images: ["/satelite_3.png", "/satelite_2.jpg", "/satelite_1.jpg"]
  },
  {
    id: "2",
    title: "LiDAR Scanning Drone Project",
    description: [
      "Worked with an engineering team on a large-scale LiDAR scanning drone project designed for 3D mapping and environmental scanning.",
      "The drone was capable of autonomous flight, autonomous landing, and carrying additional payloads while using LiDAR systems for high-precision 3D scanning. Participating in this project gave me hands-on experience with drone engineering, hardware systems, and aerospace-related technologies."
    ],
    technicalHighlights: [
      "222 cm autonomous drone",
      "LiDAR-based 3D scanning",
      "210 km range",
      "Max altitude: 4 km",
      "Payload capacity: 8 kg",
      "Autonomous landing system"
    ],
    techStack: ["LiDAR Systems", "Drone Engineering", "Autonomous Flight", "Hardware Integration", "3D Mapping", "Robotics"],
    imageUrl: "/pilot_1.jpg",
    images: ["/pilot_2.png", "/pilot_3.png", "/pilot_4.jpg"]
  },
  {
    id: "3",
    title: "Mars Rover Project",
    description: [
      "Started working on a Mars rover-inspired robotics project based on real aerospace mobility concepts and autonomous exploration systems.",
      "I explored rover designs, hardware structure, mobility concepts, and robotics-related systems while adapting engineering references into my own prototype ideas.",
      "The project was temporarily paused because of financial limitations and limited access to components, but I still plan to continue developing it in the future."
    ],
    techStack: ["Robotics", "Arduino", "Hardware Design", "Autonomous Systems", "Engineering Research"],
    imageUrl: "/mars_1.jpg",
    images: ["/mars_2.jpg", "/mars_3.jpg"]
  },
  {
    id: "4",
    title: "MockMate - AI Mock Interview Platform",
    description: [
      "MockMate is an AI-powered mock interview platform designed to help users practice technical and behavioral interviews in a more interactive way.",
      "I built the project to explore how AI can improve interview preparation and make realistic practice environments more accessible for students and early-career professionals."
    ],
    techStack: ["Next.js", "AI Integration", "Frontend Development", "UI/UX Thinking", "Web Deployment"],
    imageUrl: "/mock_1.png",
    images: ["/mock_3.png"],
    link: "https://mockmate-swart.vercel.app/"
  },
  {
    id: "5",
    title: "QA & Automation",
    description: [
      "Working with software testing, mobile testing, bug analysis, and automation-focused workflows inside large-scale production systems at UZUM Technologies × Kapitalbank.",
      "I collaborate with developers and technical teams during testing and release processes while exploring automation and systems-oriented workflows in real production environments."
    ],
    techStack: ["Python", "SQL", "PL/SQL", "Automation Testing"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "STEM Leadership Initiative - TechnoCAMP",
    description: [
      "Worked as a coordinator in a STEM initiative involving more than 400 students focused on robotics, aerospace technologies, and drone engineering.",
      "Alongside organizing technical activities and educational events, I also helped create entrance examinations in mathematics, physics, and English for students participating in the program."
    ],
    technicalHighlights: [
      "400+ students coordinated",
      "STEM activities & events",
      "Entrance examination development"
    ],
    techStack: ["STEM Mentorship", "Leadership", "Event Management"],
    imageUrl: "/coordinator_1.png",
    images: ["/coordinator_4.png", "/coordinator_3.png"]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "1",
    title: "International STEM Competition Winner",
    event: "International Turkish World Science Festival",
    location: "Ankara, Turkey",
    year: "2023",
    description: [
      "Won 1st place in an international engineering and STEM competition involving more than 150 teams from 20 countries.",
      "Worked as part of a technical team on developing engineering-based solutions and presenting projects in a highly competitive international environment."
    ],
    keyAreas: [
      "Engineering Problem-Solving",
      "Robotics & Innovation",
      "Technical Presentations",
      "Team Collaboration",
      "Competitive Project Development"
    ],
    images: [
      "/international_1.jpeg",
      "/international_2.jpeg",
      "/international_3.jpeg",
      "/international_4.jpeg"
    ]
  },
  {
    id: "2",
    title: "National Engineering Competition Winner",
    event: "Ministry of Defense STEM Festival",
    location: "Uzbekistan",
    year: "2024",
    description: [
      "Won 1st place in a national engineering and innovation competition organized in collaboration with military and technical institutions.",
      "Worked on the development of an electrical carrier platform capable of transporting heavy objects in technical environments.",
      "The competition involved more than 50 teams and focused on practical engineering innovation and hardware-oriented problem-solving."
    ],
    keyAreas: [
      "Engineering Systems",
      "Hardware Integration",
      "Robotics Concepts",
      "Technical Prototyping",
      "Team-Based Development"
    ],
    images: [
      "/defence_1.jpeg",
      "/defence_2.jpeg"
    ]
  },
  {
    id: "3",
    title: "Best Implementation Award",
    event: "Code for Change Hackathon",
    location: "Webster University Tashkent",
    year: "2025",
    description: [
      "Certificate of achievement awarded for outstanding performance in the Best Implementation category at the Webster University Tashkent Hackathon.",
      "Received the Best Implementation award at the Webster University Tashkent “Code for Change” Hackathon. Recognized for developing a high-impact solution aligned with innovation in education and tourism, demonstrating strong execution, teamwork, and technical implementation."
    ],
    keyAreas: [
      "Software Execution",
      "Technical Implementation",
      "Teamwork",
      "Rapid Prototyping",
      "Innovation & Strategy"
    ],
    images: [
      "/webster_achievement_1.jpeg"
    ]
  },
  {
    id: "4",
    title: "Media Recognition & Academic Achievement",
    event: "Governor's Recognition & TV Interview",
    location: "Uzbekistan",
    year: "2023",
    description: [
      "I was invited with my team to an interview on the official “Uzbekiston” TV channel as a young technology enthusiast, where we presented our project and shared our experience working on engineering and aerospace-related initiatives.",
      "In 2023, I was also recognized by the governor of Almazar district for my achievements in robotics and academic performance, where I was awarded a laptop during the graduation ceremony."
    ],
    keyAreas: [
      "Public Speaking",
      "Technical Communication",
      "Academic Excellence",
      "Media Representation",
      "Community Recognition"
    ],
    images: [
      "/achievement_1.jpg",
      "/achievement_2.jpg",
      "/achievement_3.jpg"
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "1",
    category: "Software",
    skills: ["Python", "SQL", "PL/SQL", "Automation Testing", "Vibe Coding"]
  },
  {
    id: "2",
    category: "Engineering",
    skills: ["Arduino", "Robotics", "Hardware Integration", "Aerospace Projects", "Embedded Systems"]
  },
  {
    id: "3",
    category: "Analytical",
    skills: ["Systems Thinking", "Problem Solving", "Data Science", "Systems Analysis"]
  },
  {
    id: "4",
    category: "Leadership",
    skills: ["Team Coordination", "STEM Mentorship", "Collaboration"]
  }
];
