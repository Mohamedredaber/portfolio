const base = import.meta.env.BASE_URL;

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: "Advanced", icon: `${base}images/skills/HTML.PNG` },
      { name: "CSS3", level: "Advanced", icon: `${base}images/skills/css.PNG` },
      { name: "JavaScript", level: "Advanced", icon: `${base}images/skills/Javascript.PNG` },
      { name: "React.js", level: "Advanced", icon: `${base}images/skills/React.PNG` },
      { name: "Tailwind CSS", level: "Beginner", icon: `${base}images/skills/tailwind.PNG` },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Beginner", icon: `${base}images/skills/nodejs.PNG` },
      { name: "Express.js", level: "Beginner", icon: `${base}images/skills/Expressjs.PNG` },
      { name: "PHP", level: "Advanced", icon: `${base}images/skills/php.PNG` },
      { name: "Laravel", level: "Intermediate", icon: `${base}images/skills/laravel.PNG` },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: "Advanced", icon: `${base}images/skills/MySQL.PNG` },
      { name: "MongoDB", level: "Intermediate", icon: `${base}images/skills/mongodb.PNG` },
    ],
  },
  {
    category: "Server & DevOps",
    items: [
      { name: "Docker", level: "Beginner", icon: `${base}images/skills/docker.PNG` },
      { name: "sonarqube", level: "Beginner", icon: `${base}images/skills/sonarqube.PNG` },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Advanced", icon: `${base}images/skills/git.PNG` },
      { name: "GitHub", level: "Advanced", icon: `${base}images/skills/github.PNG` },
      { name: "VS Code", level: "Intermediate", icon: `${base}images/skills/vscode.PNG` },
      { name: "Figma", level: "Beginner", icon: `${base}images/skills/figma.PNG` },
      { name: "Postman", level: "Intermediate", icon: `${base}images/skills/postman.PNG` },
      { name: "Jira", level: "Intermediate", icon: `${base}images/skills/jira.PNG` },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Cyber Security Basics", level: "Beginner", icon: `${base}images/skills/securite.PNG` },
      { name: "REST API", level: "Intermediate", icon: `${base}images/skills/api.PNG` },
      { name: "Agile / Scrum", level: "Intermediate", icon: `${base}images/skills/scrum.PNG` },
    ],
  },
];

export default skills;
