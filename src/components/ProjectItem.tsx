import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import TypewriterText from './TypewriterText';
import useTypewriterInView from '../hooks/useTypewriterInView';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'architecture';
  year: string;
  impact: string;
  status: 'completed' | 'in-progress' | 'maintenance';
  featured: boolean;
  slug?: string;
}

interface ProjectItemProps {
  project: Project;
  index: number;
  getCategoryIcon: (category: string) => string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, getCategoryIcon }) => {
  const { isDarkMode } = useTheme();
  
  // Individual typewriter hooks for each element
  const numberInView = useTypewriterInView(0.6);
  const titleInView = useTypewriterInView(0.6);
  const textInView = useTypewriterInView(0.6);
  const techInView = useTypewriterInView(0.6);

  return (
    <div className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]">
      <Link href={`/projects/${project.slug}`}>
        <div 
          className={`flex items-center justify-between py-8 px-6 rounded-lg transition-all duration-300 hover:bg-gray-900/20 hover:bg-gray-50/40`}
          style={{
            borderLeft: 'none'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.borderLeft = '4px solid var(--accent)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.borderLeft = 'none';
          }}
        >
          
          {/* Number */}
          <div className="flex-shrink-0 mr-8">
            <span 
              ref={numberInView.ref as React.RefCallback<HTMLSpanElement>}
              className="text-4xl font-black transition-colors duration-300 group-hover:text-[#15253B]"
              style={{ color: 'var(--text-muted)' }}
            >
              <TypewriterText
                text={`${String(index + 1).padStart(2, '0')}.`}
                startAnimation={numberInView.isInView}
                delay={100}
                speed={150}
              />
            </span>
          </div>

          {/* Content */}
          <div className="flex-grow min-w-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Main Info */}
              <div className="flex-grow min-w-0 mb-6 lg:mb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{getCategoryIcon(project.category)}</span>
                  <h3 
                    ref={titleInView.ref as React.RefCallback<HTMLHeadingElement>}
                    className="text-xl md:text-2xl font-bold" 
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <TypewriterText
                      text={project.title}
                      startAnimation={titleInView.isInView}
                      delay={300}
                      speed={80}
                    />
                  </h3>
                  {project.featured && (
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                    >
                      Featured
                    </span>
                  )}
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ 
                      backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    {project.status === 'in-progress' ? 'In Progress' : 
                     project.status === 'maintenance' ? 'Maintenance' : 'Completed'}
                  </span>
                </div>
                
                <p 
                  ref={textInView.ref as React.RefCallback<HTMLParagraphElement>}
                  className="text-sm md:text-base leading-relaxed mb-4" 
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <TypewriterText
                    text={project.description}
                    startAnimation={textInView.isInView}
                    delay={600}
                    speed={30}
                  />
                </p>

                {/* Technologies */}
                <div 
                  ref={techInView.ref as React.RefCallback<HTMLDivElement>}
                  className="flex flex-wrap gap-2 mb-4"
                  style={{
                    opacity: techInView.isInView ? 1 : 0,
                    transform: techInView.isInView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.8s ease-out 900ms'
                  }}
                >
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-col lg:items-end text-sm">
                <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-2">
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {project.year}
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {project.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 ml-6">
            <span 
              className="text-2xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#15253B]"
              style={{ color: 'var(--text-muted)' }}
            >
              ↗
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem; 