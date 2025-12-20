import React from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  ShoppingCart,
  MapPin,
} from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: "ShopEase",
      description:
        "Full-stack eCommerce platform with user authentication, real-time cart/order management, and secure Chapa payment integration. Built with modern web technologies.",
      image: "/project-screens/shopease.png",
      technologies: ["React", "Django", "Chapa", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/kmax11/Adama-smart-City-Internship",
      liveUrl: "https://tested-ecommerce-store.netlify.app/",
      category: "Full Stack",
      icon: ShoppingCart,
    },
    {
      title: "Visit Ethiopia",
      description:
        "Mobile tourism application showcasing Ethiopian destinations, cultural sites, and travel information. Features offline maps and local recommendations.",
      image: "/project-screens/VisitEthiopia.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      githubUrl: "https://github.com/kmax11/Visit-Ethiopia",
      category: "Mobile",
      icon: MapPin,
      imageVariant: "mono" as const,
    },
    {
      title: "QuickTrip",
      description:
        "Transport platform connecting passengers with drivers for efficient urban mobility. Real-time tracking, fare calculation, and secure payment processing.",
      image: "/project-screens/quicktrip.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/kmax11/Quicktrip-official1",
      liveUrl: "https://quicktrip-delta.vercel.app/",
      category: "Full Stack",
      icon: Smartphone,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing projects and skills with smooth animations, dark mode, and modern design principles.",
      image: "/project-screens/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      githubUrl: "https://github.com/kmax11/portfolio",
      liveUrl: "http://kidus11.netlify.app/",
      category: "Frontend",
      icon: MapPin,
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for task management with user authentication, role-based permissions, and real-time notifications. Built for scalability.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Django", "Django REST Framework", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/kmax11/task-management-api",
      category: "Backend",
      icon: Smartphone,
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <ShoppingCart size={16} />;
      case "Frontend":
        return <MapPin size={16} />;
      case "Backend":
        return <Smartphone size={16} />;
      case "Mobile":
        return <Smartphone size={16} />;
      default:
        return <MapPin size={16} />;
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects showcasing my skills in
            full-stack development, mobile applications, and digital forensics
            tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform hover:scale-110 ${
                    project.imageVariant === 'mono'
                      ? 'grayscale contrast-125 brightness-110'
                      : ''
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                      darkMode
                        ? "bg-black/80 text-gray-200"
                        : "bg-white/80 text-gray-700"
                    }`}
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded ${
                        darkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Github size={16} />
                    GitHub Repo
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-colors border ${
                        darkMode
                          ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
