import React from "react";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const skills = [
    // Frontend
    { name: "React", icon: "react", category: "Frontend" },
    { name: "HTML5", icon: "html5", category: "Frontend" },
    { name: "CSS3", icon: "css3", category: "Frontend" },
    { name: "Bootstrap", icon: "bootstrap", category: "Frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend" },
    { name: "JavaScript", icon: "javascript", category: "Frontend" },

    // Backend
    { name: "Python", icon: "python", category: "Backend" },
    { name: "Node.js", icon: "nodedotjs", category: "Backend" },

    // Frameworks
    { name: "Django", icon: "django", category: "Backend Frameworks" },
    { name: "Express.js", icon: "express", category: "Backend Frameworks" },
    {
      name: "Django REST Framework",
      icon: "django",
      category: "Backend Frameworks",
    },

    // Databases
    { name: "PostgreSQL", icon: "postgresql", category: "Database" },
    { name: "MySQL", icon: "mysql", category: "Database" },
    { name: "SQLite", icon: "sqlite", category: "Database" },

    // Tools
    { name: "Git", icon: "git", category: "Others" },
    { name: "GitHub", icon: "github", category: "Others" },
    { name: "Flutter", icon: "flutter", category: "Others" },
    { name: "Figma", icon: "figma", category: "Others" },
    { name: "Postman", icon: "postman", category: "Others" },
    { name: "VS Code", icon: "visualstudiocode", category: "Others" },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="gold-text">Skills</span> & Expertise
          </h2>
          <div className="gold-divider mx-auto mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Technologies and tools I work with to create amazing digital
            experiences.
          </p>
        </div>

        {/* Unified Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800"
                  : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:bg-white"
              }`}
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full border-2 gold-border">
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}/${
                      darkMode ? "ffffff" : "000000"
                    }`}
                    alt={skill.name}
                    width="40"
                    height="40"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {skill.name}
              </p>
              <p
                className={`text-xs mt-1 ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
