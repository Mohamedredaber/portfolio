const base = import.meta.env.BASE_URL;

const skillsData = {
  categories: {
    frontend: { en: "Frontend", fr: "Frontend", ar: "الواجهة الأمامية" },
    backend: { en: "Backend", fr: "Backend", ar: "الخلفية" },
    database: { en: "Database", fr: "Base de données", ar: "قواعد البيانات" },
    devops: { en: "Server & DevOps", fr: "Serveur & DevOps", ar: "الخوادم و DevOps" },
    tools: { en: "Tools", fr: "Outils", ar: "الأدوات" },
    other: { en: "Other", fr: "Autres", ar: "أخرى" },
  },

  levels: {
    beginner: { en: "Beginner", fr: "Débutant", ar: "مبتدئ" },
    intermediate: { en: "Intermediate", fr: "Intermédiaire", ar: "متوسط" },
    advanced: { en: "Advanced", fr: "Avancé", ar: "متقدم" },
  },

  items: [
    { category: "frontend", name: "HTML5", level: "advanced", icon: `${base}images/skills/HTML.png` },
    { category: "frontend", name: "CSS3", level: "advanced", icon: `${base}images/skills/css.png` },
    { category: "frontend", name: "JavaScript", level: "advanced", icon: `${base}images/skills/Javascript.png` },
    { category: "frontend", name: "React.js", level: "advanced", icon: `${base}images/skills/React.png` },
    { category: "frontend", name: "Tailwind CSS", level: "beginner", icon: `${base}images/skills/tailwind.png` },

    { category: "backend", name: "Node.js", level: "beginner", icon: `${base}images/skills/nodejs.png` },
    { category: "backend", name: "Express.js", level: "beginner", icon: `${base}images/skills/Expressjs.png` },
    { category: "backend", name: "PHP", level: "advanced", icon: `${base}images/skills/php.png` },
    { category: "backend", name: "Laravel", level: "intermediate", icon: `${base}images/skills/laravel.png` },

    { category: "database", name: "MySQL", level: "advanced", icon: `${base}images/skills/MySQL.png` },
    { category: "database", name: "MongoDB", level: "intermediate", icon: `${base}images/skills/mongodb.png` },

    { category: "devops", name: "Docker", level: "beginner", icon: `${base}images/skills/docker.png` },

    { category: "tools", name: "Git", level: "advanced", icon: `${base}images/skills/git.png` },
    { category: "tools", name: "GitHub", level: "advanced", icon: `${base}images/skills/github.png` },
    { category: "tools", name: "VS Code", level: "intermediate", icon: `${base}images/skills/vscode.png` },
    { category: "tools", name: "Figma", level: "beginner", icon: `${base}images/skills/figma.png` },
    { category: "tools", name: "Postman", level: "intermediate", icon: `${base}images/skills/postman.png` },
    { category: "tools", name: "Jira", level: "intermediate", icon: `${base}images/skills/jira.png` },

    { category: "other", name: "Cyber Security Basics", level: "beginner", icon: `${base}images/skills/securite.png` },
    { category: "other", name: "REST API", level: "intermediate", icon: `${base}images/skills/api.png` },
    { category: "other", name: "Agile / Scrum", level: "intermediate", icon: `${base}images/skills/scrum.png` },
  ],
};

export default skillsData;
