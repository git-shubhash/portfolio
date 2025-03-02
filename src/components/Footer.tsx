import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-indigo-400 mb-2">Shubhash B</h3>
            <p className="text-gray-400">Web Developer | AI Enthusiast</p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a 
              href="https://linkedin.com/in/shubhash-b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/shubhash-b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:shubhash.pvt@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Shubhash B. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;