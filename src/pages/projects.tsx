import React, { useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import ProjectList from '@/components/ProjectList';
import { Project } from '@/types/Project';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import ErrorBoundary from '@/components/ErrorBoundary';

// Single Responsibility Principle: Separate data fetching
const getProjects = (): Project[] => {
  // In a real application, this could be an API call
  return [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      type: "Web Development",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication and payment integration.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      type: "Web Development",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A real-time weather application using geolocation and weather APIs.",
      technologies: ["React Native", "Redux", "OpenWeatherMap API"],
      type: "Mobile Development",
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A web-based project management tool with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
      type: "Web Development",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
      type: "Mobile Development",
    },
  ];
};

interface ProjectsPageProps {
  initialProjects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ initialProjects }) => {
  const { isDarkMode } = useTheme();
  const { observedElements, setObservedElement } = useIntersectionObserver();

  const projects = useMemo(() => initialProjects, [initialProjects]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <ErrorBoundary>
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl mb-12 max-w-2xl">
            Explore a collection of my latest web and mobile development projects. 
            Each project showcases different technologies and problem-solving approaches.
          </p>
          <div className="overflow-hidden">
            <ProjectList 
              projects={projects}
              isDarkMode={isDarkMode}
              setObservedElement={setObservedElement}
              observedElements={observedElements}
            />
          </div>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = getProjects();
  return { props: { initialProjects: projects } };
};

export default ProjectsPage;
