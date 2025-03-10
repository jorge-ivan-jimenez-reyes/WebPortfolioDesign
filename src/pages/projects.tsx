import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication and payment integration.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Weather App",
      description: "A real-time weather application using geolocation and weather APIs.",
      technologies: ["React Native", "Redux", "OpenWeatherMap API"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => setProjectRef(el, index)}
              className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} opacity-0 transform translate-y-4 transition-all duration-300 ease-out fade-in`}
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={`px-2 py-1 text-sm rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
