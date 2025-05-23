interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

interface Social {
  name: string;
  url: string;
  icon: string;
}

export const personalData = {
  name: "Syed Huzaifa Ahmed",
  title: "Full Stack Developer",
  email: "huzaifaahmed0605@gmail.com",
  location: "Pakistan",
  about: "I'm a passionate Full Stack developer with a focus on creating efficient and user-friendly applications. With a strong foundation in modern web technologies, I strive to build solutions that make a meaningful impact.",
  
  skillCategories: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "React", level: 4 },
        { name: "TypeScript", level: 4 },
        { name: "Tailwind CSS", level: 4 }
      ]
    },
    {
      category: "Backend",
      skills: [
        {name: "Laravel", level: 4},
        { name: "Node.js", level: 4 },
        { name: "Express", level: 4 },
        { name: "MongoDB", level: 3 },
        { name: "SQL", level: 3 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 4 },
        { name: "Docker", level: 3 },
        { name: "CI/CD", level: 3 },
       
      ]
    }
  ],
  
  experiences: [
    {
      title: "Junior Web Developer",
      company: "Iw Systems Private Limited",
      location: "Karachi",
      period: "2025 - Present",
      description: [
        "Developed and maintained multiple client-facing web applications using Laravel , Php , React , Node.js",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with design teams to translate UI/UX wireframes into functional components",
        "Optimized application performance resulting in 30% faster load times"
      ]
    },
    {
      title: "Laravel Developer",
      company: "SilverPoint Communication",
      location: "Karachi",
      period: "2021 - 2023",
      description: [
        "Created dynamic websites using modern Laravel frameworks",
        "Assisted in database design and implementation",
        "Participated in code reviews and implemented feedback",
        "Managed version control and deployment processes"
      ]
    },
    {
      title: "Web Development Intern",
      company: "InnoTech",
      location: "Karachi",
      period: "2020 - 2021",
      description: [
        "Assisted senior developers in building web applications",
        "Gained hands-on experience with frontend technologies",
        "Implemented pixel-perfect designs from Figma mockups",
        "Participated in team meetings and agile development processes"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor in Software Enginerring",
      institution: "Iqra University",
      location: "Karachi",
      period: "2024-present",
      description: "Focused on software development, data structures, and algorithms. Participated in coding competitions and contributed to open-source projects."
    },
    {
      degree: "Full-Stack Web Development Certification",
      institution: "Tech Academy",
      location: "Online",
      period: "2020",
      description: "Intensive program covering modern web development practices including MERN stack applications."
    }
  ],
  
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product management, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and user authentication.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data using external APIs.",
      tags: ["JavaScript", "API Integration", "CSS"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    },
    {
      title: "Personal Blog",
      description: "A blog platform with content management system and comment functionality.",
      tags: ["Next.js", "Markdown", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
    }
  ],
  
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syed-huzaifa-ahmed-20390729a",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/HuzaifaAhmed12",
      icon: "Github"
    },
    {
      name: "Twitter",
      url: "#",
      icon: "Twitter"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923172339596",
      icon: "MessageCircle"
    }
  ]
};