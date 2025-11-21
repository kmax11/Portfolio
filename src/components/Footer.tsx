import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Twitter } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-black border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Portfolio
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate software developer creating innovative digital solutions 
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kmax11"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kidus-asrat-95b176362"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/kmax78555"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:kidusasrat10@gmail.com"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Ready to work together?
              </p>
              <a
                href="mailto:kidusasrat10@gmail.com"
                className={`text-sm text-blue-600 hover:text-blue-700 transition-colors`}
              >
                kidusasrat10@gmail.com
              </a>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Ethiopia
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm flex items-center gap-1 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {currentYear} Kidus Asrat. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}