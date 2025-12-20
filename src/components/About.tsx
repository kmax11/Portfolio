import React from "react";
import { Code, Lightbulb, Users, Target } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Proficient in modern technologies including React, Django, Flutter, and full-stack development.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Strong analytical mindset with experience in digital forensics and complex system debugging.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Excellent communication skills with experience working in cross-functional teams at Huawei.",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description:
        "Focused on delivering high-quality solutions that meet business objectives and user needs.",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            About <span className="gold-text">Me</span>
          </h2>
          <div className="gold-divider mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Passionate Software Developer
            </h3>
            <div
              className={`text-lg leading-relaxed space-y-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                I'm a dedicated software developer with a passion for web and
                mobile development. My journey focuses on creating innovative
                solutions using modern technologies like React, Django, and
                Flutter to build efficient, scalable applications.
              </p>
              <p>
                With hands-on experience at Adama Smart City and Huawei, I've
                worked on backend development and eCommerce platforms using
                Django. I enjoy working across the entire technology stack, from
                designing user interfaces with React and Flutter to architecting
                robust backend systems.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies,
                contributing to open-source projects, and continuously learning
                to enhance my craft in full-stack development and mobile
                applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-transform hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      darkMode ? "bg-white" : "bg-black"
                    }`}
                  >
                    <highlight.icon
                      size={24}
                      className={darkMode ? "text-black" : "text-white"}
                    />
                  </div>
                </div>
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {highlight.title}
                </h4>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
