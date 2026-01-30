const base = import.meta.env.BASE_URL;

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: "Advanced", icon: `${base}images/skills/HTML.png` },
      { name: "CSS3", level: "Advanced", icon: `${base}images/skills/css.png` },
      { name: "JavaScript", level: "Advanced", icon: `${base}images/skills/Javascript.png` },
      { name: "React.js", level: "Advanced", icon: `${base}images/skills/React.png` },
      { name: "Tailwind CSS", level: "Beginner", icon: `${base}images/skills/tailwind.png` },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Beginner", icon: `${base}images/skills/nodejs.png` },
      { name: "Express.js", level: "Beginner", icon: `${base}images/skills/Expressjs.png` },
      { name: "PHP", level: "Advanced", icon: `${base}images/skills/php.png` },
      { name: "Laravel", level: "Intermediate", icon: `${base}images/skills/laravel.png` },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: "Advanced", icon: `${base}images/skills/MySQL.png` },
      { name: "MongoDB", level: "Intermediate", icon: `${base}images/skills/mongodb.png` },
    ],
  },
  {
    category: "Server & DevOps",
    items: [
      { name: "Docker", level: "Beginner", icon: `${base}images/skills/docker.png` },
      { name: "sonarqube", level: "Beginner", icon: `${base}images/skills/sonarqube.png` },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Advanced", icon: `${base}images/skills/git.png` },
      { name: "GitHub", level: "Advanced", icon: `${base}images/skills/github.png` },
      { name: "VS Code", level: "Intermediate", icon: `${base}images/skills/vscode.png` },
      { name: "Figma", level: "Beginner", icon: `${base}images/skills/figma.png` },
      { name: "Postman", level: "Intermediate", icon: `${base}images/skills/postman.png` },
      { name: "Jira", level: "Intermediate", icon: `${base}images/skills/jira.png` },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Cyber Security Basics", level: "Beginner", icon: `${base}images/skills/securite.png` },
      { name: "REST API", level: "Intermediate", icon: `${base}images/skills/api.png` },
      { name: "Agile / Scrum", level: "Intermediate", icon: `${base}images/skills/scrum.png` },
    ],
  },
];

export default skills;
