const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: "Advanced", icon: '/images/skills/HTML.png' },
      { name: "CSS3", level: "Advanced", icon: '/images/skills/css.png' },
      { name: "JavaScript", level: "Advanced", icon: '/images/skills/Javascript.png' },
      { name: "React.js", level: "Advanced", icon: '/images/skills/React.png' },
      { name: "Tailwind CSS", level: "Beginner", icon: '/images/skills/tailwind.png' },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Beginner", icon: '/images/skills/nodejs.png' },
      { name: "Express.js", level: "Beginner", icon: '/images/skills/Expressjs.png' },
      { name: "PHP", level: "Advanced", icon: '/images/skills/php.png' },
      { name: "Laravel", level: "Intermediate", icon: '/images/skills/laravel.png' },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: "Advanced", icon: '/images/skills/MySQL.png' },
      { name: "MongoDB", level: "Intermediate", icon: '/images/skills/mongodb.png' },
    ],
  },
  {
    category: "Server & DevOps",
    items: [
      { name: "Docker", level: "Beginner", icon: '/images/skills/docker.png' },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Advanced", icon: '/images/skills/git.png' },
      { name: "GitHub", level: "Advanced", icon: '/images/skills/github.png' },
      { name: "VS Code", level: "Intermediate", icon: '/images/skills/vscode.png' }, // Corrigé
      { name: "Figma", level: "Beginner", icon: '/images/skills/figma.png' }, // Corrigé
      { name: "Postman", level: "Intermediate", icon: '/images/skills/postman.png' }, // Corrigé
      { name: "Jira", level: "Intermediate", icon: '/images/skills/jira.png' }, // Corrigé (notez le 'J' majuscule)
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Cyber Security Basics", level: "Beginner", icon: '/images/skills/securite.png' }, // Corrigé
      { name: "REST API", level: "Intermediate", icon: '/images/skills/api.png' }, // Corrigé
      { name: "Agile / Scrum", level: "Intermediate", icon: '/images/skills/scrum.png' }, // Corrigé
    ],
  },
];

export default skills;