import { Project, Experience, Achievement, SkillCategory } from './types';

export const experienceData: Experience[] = [
  {
    id: "1",
    role: "QA & Automation",
    company: "UZUM Technologies × Kapitalbank",
    period: "2025 - Present",
    description: [
      "Currently working in QA and automation-focused workflows within a collaboration between UZUM Technologies and Kapitalbank.",
      "My responsibilities include testing software systems, identifying and reporting bugs, analyzing application behavior, and helping improve product quality during development processes. I also work with mobile testing, automation-related tasks, and collaborate with developers and technical teams in fast-paced production environments."
    ]
  },
  {
    id: "2",
    role: "STEM Coordination",
    company: "TechnoCAMP",
    period: "2024",
    description: [
      "Worked as a coordinator in TechnoCAMP, a STEM initiative involving more than 400 students focused on robotics, drone engineering, and aerospace technologies.",
      "Helped organize technical activities, supported students during the program, and contributed to creating entrance examinations in mathematics, physics, and English for applicants participating in the selection process."
    ]
  },
  {
    id: "3",
    role: "Robotics Engineering",
    company: "NazarXuz",
    period: "2022 - 2024",
    description: [
      "Started as an intern in the NazarXuz robotics engineering team, where I worked on drone and robotics-related projects connected to engineering, hardware systems, and technical experimentation. After several months, I became a full team member and continued working on more complex engineering tasks alongside the team.",
      "During this time, I gained hands-on experience with Arduino, hardware integration, autonomous systems, and real engineering workflows while participating in technical projects and innovation-focused environments.",
      "Working in NazarXuz played a big role in developing my interest in robotics, aerospace technologies, and intelligent systems because it was one of the first places where I could apply technical ideas in real projects instead of only studying them theoretically."
    ]
  }
];

export const portfolioData: Project[] = [
  {
    id: "1",
    title: "Student Satellite Project - Aerospace Initiative",
    description: [
      "One of the most exciting projects I worked on was a student satellite initiative focused on environmental data collection and aerospace experimentation. Together with our team, we developed and launched a satellite project that successfully reached the stratosphere at an altitude of more than 45 kilometers.",
      "I contributed to technical and engineering-related tasks throughout the project, including hardware integration, testing, and teamwork during preparation and launch stages. Working on a real aerospace-focused project gave me hands-on experience with engineering workflows, problem-solving, and collaboration in a fast-paced technical environment."
    ],
    techStack: ["Aerospace Systems", "Sensors", "Arduino", "STEM Research"],
    imageUrl: "/satelite_1.jpg",
    images: [
      "/satelite_2.jpg",
      "/satelite_3.png",
      "/satelite_4.jpg"
    ]
  },
  {
    id: "2",
    title: "STEM Leadership Initiative - TechnoCAMP",
    description: [
      "Worked as a coordinator in a large-scale STEM educational initiative involving more than 400 students from multiple schools.",
      "Participated in organizing robotics, drone engineering, aerospace, and innovation-focused educational activities while helping students explore engineering and technology-related fields. I also contributed to creating entrance examinations in mathematics, physics, and English for hundreds of applicants participating in the selection process.",
      "The initiative focused on developing students’ technical skills through hands-on engineering environments, teamwork, and practical STEM education."
    ],
    techStack: ["STEM Mentorship", "Leadership", "Event Management"],
    imageUrl: "/coordinator_1.png",
    images: [
      "/coordinator_4.png",
      "/coordinator_3.png"
    ]
  },
  {
    id: "3",
    title: "LiDAR Scanning Drone Project - Robotics & Engineering Initiative",
    description: [
      "Worked with an engineering team on a large-scale LiDAR scanning drone project designed for 3D mapping and environmental scanning of designated areas. The project focused on autonomous aerial scanning and engineering-oriented data collection.",
      "The drone had a total length of 222 cm and was capable of flying at altitudes of up to 4 kilometers while carrying additional payloads of up to 8 kg. It was equipped with a LiDAR scanning system for generating detailed 3D scans and could travel distances of up to 210 kilometers at full capacity.",
      "The system also included autonomous flight and landing capabilities, with a maximum speed of 110 km/h. Participating in this project gave me hands-on experience with drone engineering, hardware integration, teamwork, and real-world aerospace-related problem-solving in a technical environment."
    ],
    techStack: [
      "LiDAR Systems",
      "Drone Engineering",
      "Autonomous Flight Systems",
      "Hardware Integration",
      "Aerospace",
      "3D Mapping",
      "Robotics"
    ],
    imageUrl: "/pilot_1.jpg",
    images: [
      "/pilot_2.png",
      "/pilot_3.png",
      "/pilot_4.jpg"
    ]
  },
  {
    id: "4",
    title: "MockMate - AI Mock Interview Platform",
    description: [
      "MockMate is an AI-powered mock interview platform we built to help people practice interviews in a more interactive and realistic way. The idea came from seeing how stressful technical and behavioral interviews can feel, especially when people do not have enough opportunities to practice in real environments.",
      "While working on the project, I focused not only on development, but also on making the experience feel smooth, practical, and easy to use. I enjoyed thinking about how AI can make preparation more accessible and help users improve confidence, communication, and problem-solving skills through repeated practice.",
      "This project also helped me strengthen my frontend development, product thinking, and experience working with modern deployment and web technologies."
    ],
    techStack: [
      "Next.js",
      "AI Integration",
      "Frontend Development",
      "UI/UX Thinking",
      "Web Deployment",
      "Product-Oriented Development"
    ],
    imageUrl: "/mock_1.png",
    images: [
      "/mock_3.png"
    ],
    link: "https://mockmate-swart.vercel.app/"
  },
  {
    id: "5",
    title: "Mars Rover Project - Independent Engineering Project",
    description: [
      "One of the projects I became deeply interested in was building a Mars rover-inspired robotic system based on real aerospace and exploration technologies. I started developing the project by studying engineering references, rover designs, and autonomous mobility concepts while adapting them into my own prototype and ideas.",
      "I worked on the overall concept, hardware planning, and robotics-related systems while exploring how intelligent machines can operate in difficult environments. Unfortunately, because of financial limitations and limited access to some components, the project had to be temporarily paused before reaching the final stage.",
      "Even though the rover is still unfinished, the experience taught me a lot about engineering design, long-term problem-solving, and the realities of building ambitious technical projects from scratch. I still hope to continue working on it in the future."
    ],
    techStack: [
      "Robotics",
      "Arduino",
      "Hardware Design",
      "Autonomous Systems",
      "Engineering Research",
      "Aerospace Concepts"
    ],
    imageUrl: "/mars_1.jpg",
    images: [
      "/mars_2.jpg",
      "/mars_3.jpg"
    ]
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
