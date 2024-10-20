import Link from 'next/link';
import React from 'react';
import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPython, FaGithub,
  FaServer, FaTools, FaDocker, FaAws, FaDatabase, FaGitAlt
} from 'react-icons/fa';

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-8 lg:px-16 md:mt-18">
      {/* Sección "About Me" */}
      <section className="text-center pt-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          About Me
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            I am Juan Calderon, a web developer with experience in frontend and backend technologies.
            I love creating innovative solutions and working with modern technologies.
          </p>
        </div>
        <Link
          href="/images/hv.pdf" // Asegúrate de cambiar esto a la ruta correcta
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          View My Resume
        </Link>
      </section>

      {/* Sección de Lenguajes y Herramientas */}
      <section className="w-full flex flex-col justify-center items-center pt-2 pb-7">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5">
          Languages and Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <FaGithub className="text-4xl md:text-5xl text-gray-600 dark:text-gray-300" />
          <FaReact className="text-blue-500 text-4xl md:text-5xl" />
          <FaNodeJs className="text-green-500 text-4xl md:text-5xl" />
          <FaHtml5 className="text-orange-500 text-4xl md:text-5xl" />
          <FaCss3Alt className="text-blue-600 text-4xl md:text-5xl" />
          <FaPython className="text-yellow-500 text-4xl md:text-5xl" />
          <FaGitAlt className="text-red-600 text-4xl md:text-5xl" />
          <FaDatabase className="text-indigo-500 text-4xl md:text-5xl" />
          <FaDocker className="text-blue-400 text-4xl md:text-5xl" />
          <FaAws className="text-yellow-400 text-4xl md:text-5xl" />
        </div>
      </section>

      {/* Sección de Tarjetas */}
      <section className="w-full flex flex-col justify-center items-center mb-24">
        <div className='flex flex-wrap justify-center gap-6'>
          <div className="p-6 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized in React, Next.js, Tailwind CSS, and responsive web design.
            </p>
          </div>
          <div className="p-6 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <FaServer className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">Backend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Development of RESTful APIs with Node.js, Express, and SQL/NoSQL databases.
            </p>
          </div>
          <div className="p-6 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <FaTools className="text-gray-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">DevOps</h3>
            <p className="text-gray-600 dark:text-gray-300">
              CI/CD implementation, cloud deployment with Docker and AWS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
