import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-4 mt-20 bg-white/30 backdrop-blur-sm text-gray-600 dark:bg-gray-900 dark:text-gray-300 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="https://github.com/JuanCalderon2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-200"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/juan-esteban-calderon-nuñez-334b53323"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-200"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link href="/contact" className="flex items-center space-x-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-200">
            <Mail size={20} />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
