import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white/30 backdrop-blur-sm text-gray-600 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Enlaces a redes sociales */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/JuanCalderon2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-500"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/juan-calderon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-500"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Enlace a la página de Contact Me */}
        <div className="flex space-x-4">
          <Link href="/contact" className="flex items-center space-x-2 hover:text-indigo-500">
            <Mail size={20} />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
