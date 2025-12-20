import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Software Engineer", "Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between md:gap-16">
        {/* Left Side: Text Content */}
        <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          <h1
            className={`text-5xl md:text-7xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Hi, I'm <span className="text-blue-600">Kidus</span>
          </h1>
          <div className="h-16 flex items-center justify-center md:justify-start">
            <p
              className={`text-2xl md:text-3xl font-medium flex items-center gap-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm&nbsp;
              <span className="relative inline-flex h-8 md:h-9 w-auto">
                <span
                  key={currentRole}
                  className="animate-slideUp text-blue-500"
                  style={
                    {
                      display: "inline-block",
                      ["--tw-ch" as any]: roles[currentRole]?.length ?? 0,
                      ["--tw-steps" as any]: roles[currentRole]?.length ?? 0,
                    } as React.CSSProperties
                  }
                >
                  {roles[currentRole]}
                </span>
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1NrXSFGjlEI4P76RmSt8F9fEWYM-Y6AsI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={`px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2 ${
                darkMode ? "hover:bg-blue-600" : ""
              }`}
            >
              <span>
                <Download size={20} />
              </span>
              Download CV
            </a>
          </div>
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/kmax11"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white"
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kidus-asrat-95b176362"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white"
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/kmax78555"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white"
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:kidusasrat10@gmail.com"
              className={`p-3 rounded-full transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white"
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        {/* Right Side: Profile Image */}
        <div className="flex-1 md:flex-none flex items-center justify-center md:justify-end mt-12 md:mt-0">
          <div className="relative overflow-hidden w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0">
            {/* Floating Particles with Different Colors */}
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-10 left-24 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-float"></span>
              <span className="absolute bottom-16 right-24 w-3 h-3 bg-pink-400 rounded-full opacity-30 animate-float-fast"></span>
              <span className="absolute top-1/2 left-8 w-2 h-2 bg-yellow-300 rounded-full opacity-20 animate-float-slow"></span>
              <span className="absolute top-20 right-16 w-5 h-5 bg-green-400 rounded-full opacity-30 animate-float"></span>
              <span className="absolute bottom-24 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float-fast"></span>
              <span className="absolute top-32 left-1/2 w-4 h-4 bg-red-400 rounded-full opacity-30 animate-float-slow"></span>
            </div>
            <img
              src="/20250623_113336.jpg"
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-blue-300 object-cover shadow-xl relative z-10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: darkMode ? "#111" : "#fff" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className={`block p-2 rounded-full ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
