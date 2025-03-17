import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import { Project } from '@/types/Project';

const projects: Project[] = [
  {
    id: 1,
    title: "Devouring Details",
    description: "Remember your last moment of discovery?",
    link: "https://devouringdetails.com",
    year: "2025"
  },
  {
    id: 2,
    title: "Vercel.com",
    description: "The Vercel homepage",
    link: "https://vercel.com/home",
    year: "2023"
  },
  {
    id: 3,
    title: "Web Interface Guidelines",
    description: "A list of details that make a good web interface",
    link: "https://interfaces.rauno.me",
    year: "2023"
  },
  {
    id: 4,
    title: "Vesper",
    description: "Peppermint and orange flavored dark theme for VSCode",
    link: "https://github.com/raunofreiberg/vesper",
    year: "2023"
  },
  {
    id: 5,
    title: "(Basic) Bookmarks",
    description: "A home for your internet discoveries",
    link: "https://bmrks.com",
    year: "2023"
  },
  {
    id: 6,
    title: "⌘K",
    description: "Fast, unstyled, composable command menu for React",
    link: "https://cmdk.paco.me",
    year: "2022"
  },
  {
    id: 7,
    title: "uiwtf",
    description: "An experimental laboratory for user interfaces",
    link: "https://uiw.tf",
    year: "2021"
  },
  {
    id: 8,
    title: "Flow",
    description: "Clear your mind through expressive writing",
    link: "https://flow.rest",
    year: "2021"
  },
  {
    id: 9,
    title: "UI Playbook",
    description: "The documented collection of UI components",
    link: "https://uiplaybook.dev",
    year: "2020"
  }
];

const ProjectsPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <main className="container mx-auto px-4 py-12 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-6 rounded-lg transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
