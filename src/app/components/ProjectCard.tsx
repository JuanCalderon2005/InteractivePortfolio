'use client'
import React from 'react'
import { projects } from '../../../data'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-600">My Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-between w-full h-full p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <Image
              width={300}
              height={200}
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">{project.title}</h3>
            <p className="text-gray-600 text-center mt-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-indigo-500 hover:underline flex items-center justify-center"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
