import React from "react";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";
import { Project } from "@/types/Project";
import { useTheme } from '@/context/ThemeContext';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface CraftContentProps {
  projects: Project[];
}

export default function CraftContent({ projects }: CraftContentProps) {
  const { isDarkMode } = useTheme();
  const { observedElements, setObservedElement } = useIntersectionObserver();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <h1 className="text-4xl font-bold mb-4">Interaction Design Craft</h1>
        <p className="text-xl mb-8">Exploring innovative interaction designs and user experiences</p>
        <ProjectList 
          projects={projects} 
          isDarkMode={isDarkMode}
          setObservedElement={setObservedElement}
          observedElements={observedElements}
        />
      </main>
      <Footer />
    </div>
  );
}
