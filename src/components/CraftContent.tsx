import React from "react";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";
import { Project } from "@/types/Project";
import { useTheme } from '@/context/ThemeContext';

interface CraftContentProps {
  projects: Project[];
}

export default function CraftContent({ projects }: CraftContentProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Interaction Design Craft</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>Exploring innovative interaction designs and user experiences</p>
        <ProjectList 
          projects={projects} 
          isDarkMode={isDarkMode}
        />
      </main>
      <Footer />
    </div>
  );
}
