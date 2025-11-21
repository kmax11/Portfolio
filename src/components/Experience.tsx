import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const experiences = [
    {
      title: 'Back End Developer',
      company: 'Adama Smart City',
      location: 'Adama, Ethiopia',
      period: 'July 2024 - September 2024',
      description: [
        'Developed and maintained backend logic for an ecommerce platform using Django and PostgreSQL',
        'Implemented user authentication, product management, order processing, and cart functionalities with RESTful APIs',
        'Designed scalable database models and optimized queries, reducing data retrieval time by 40% and enhancing overall system reliability and performance',
        'Integrated third-party services such as payment gateways and email notifications',
        'Followed secure coding practices and applied role-based access control for both customers and administrators',
        'Collaborated with frontend developers (React/HTML/CSS) to ensure seamless API integration and user experience'
      ],
      technologies: ['Django', 'PostgreSQL', 'REST APIs', 'Payment Integration', 'Database Optimization', 'React Integration'],
      type: 'Full-time'
    },
    {
      title: 'CBS Trainee',
      company: 'Huawei',
      location: 'Ethiopia',
      period: 'Feb 2024 – May 2024',
      description: [
        'Worked on backend development and service optimization using Django framework',
        'Collaborated with cross-functional teams to improve service delivery, achieving 30% reduction in response time',
        'Gained hands-on experience with telecom service logic and system debugging',
        'Participated in code reviews and contributed to best practices documentation'
      ],
      technologies: ['Django', 'REST APIs', 'Team Collaboration', 'Debugging', 'Telecom Service Logic'],
      type: 'Internship'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 – Present',
      description: [
        'Developing web and mobile applications for various clients using modern technologies',
        'Building eCommerce platforms with secure payment integration using Chapa',
        'Creating mobile applications with Flutter for tourism and transport sectors',
        'Maintaining and optimizing existing applications for better performance'
      ],
      technologies: ['React', 'Django', 'Flutter', 'Chapa Integration', 'Mobile Development'],
      type: 'Freelance'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Internship':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Freelance':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-300'
          } hidden md:block`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full hidden md:block"></div>
                
                <div className={`md:ml-16 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-xl font-semibold ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}>
                          {exp.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className={`flex flex-col md:items-end mt-2 md:mt-0 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-sm rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}