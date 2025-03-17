import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/Project';

interface ProjectListProps {
  projects: Project[];
  isDarkMode: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, isDarkMode }) => {
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return <div className="text-center py-8 text-xl">No projects available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id || index}
          className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {project.videoSrc && (
            <video
              src={project.videoSrc}
              className="w-full h-48 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
          {project.imageSrc && (
            <div className="relative w-full h-48">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            {project.date && (
              <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.date}
              </p>
            )}
            <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.description}
            </p>
            {project.actionText && project.actionLink && (
              <a
                href={project.actionLink}
                className={`inline-block px-4 py-2 rounded-md text-sm font-medium ${
                  isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } transition-colors duration-300`}
              >
                {project.actionText}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
