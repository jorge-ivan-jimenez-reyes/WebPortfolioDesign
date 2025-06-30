import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cloud-Native E-commerce Platform",
    description: "Enterprise-scale microservices architecture serving 1M+ daily users with auto-scaling capabilities.",
    technologies: ["AWS", "Kubernetes", "Event Sourcing", "CQRS", "Redis", "PostgreSQL"],
    category: "architecture",
    year: "2023",
    impact: "300% performance improvement",
    status: "completed",
    featured: true
  },
  {
    id: 2,
    title: "Real-time Analytics Infrastructure",
    description: "High-throughput data processing platform processing 100TB+ daily data with sub-second analytics.",
    technologies: ["Apache Kafka", "Apache Spark", "ClickHouse", "Docker", "Terraform"],
    category: "architecture",
    year: "2023",
    impact: "1M events/second throughput",
    status: "in-progress",
    featured: true
  },
  {
    id: 3,
    title: "Multi-tenant SaaS Architecture",
    description: "Secure, scalable architecture for B2B SaaS with 1000+ enterprise tenants and hybrid isolation.",
    technologies: ["Node.js", "MongoDB", "JWT", "API Gateway", "Load Balancers"],
    category: "architecture",
    year: "2022",
    impact: "1000+ active tenants",
    status: "maintenance",
    featured: true
  },
  {
    id: 4,
    title: "AI-Powered Project Management Suite",
    description: "Complete project management platform with AI recommendations and machine learning insights.",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "TypeScript", "Python"],
    category: "fullstack",
    year: "2022",
    impact: "35% productivity increase",
    status: "completed",
    featured: false
  },
  {
    id: 5,
    title: "Real-time Collaboration Platform",
    description: "Slack-like communication platform with WebRTC video calls and comprehensive file sharing.",
    technologies: ["Vue.js", "Express.js", "Socket.io", "WebRTC", "MongoDB"],
    category: "fullstack",
    year: "2021",
    impact: "500+ daily active users",
    status: "maintenance",
    featured: false
  },
  {
    id: 6,
    title: "E-learning Management System",
    description: "Comprehensive LMS with adaptive learning paths, video streaming, and advanced analytics.",
    technologies: ["React", "Django", "PostgreSQL", "Redis", "FFmpeg"],
    category: "fullstack",
    year: "2021",
    impact: "10,000+ students onboarded",
    status: "completed",
    featured: false
  },
  {
    id: 7,
    title: "Interactive Data Visualization Dashboard",
    description: "Complex dashboard with D3.js visualizations, real-time updates, and advanced filtering.",
    technologies: ["React", "D3.js", "Chart.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    year: "2020",
    impact: "60% faster data analysis",
    status: "completed",
    featured: false
  },
  {
    id: 8,
    title: "Progressive Web App for Retail",
    description: "Mobile-first PWA with service workers, offline capabilities, and push notifications.",
    technologies: ["React", "PWA", "Service Workers", "IndexedDB"],
    category: "frontend",
    year: "2020",
    impact: "50% mobile engagement boost",
    status: "completed",
    featured: false
  },
  {
    id: 9,
    title: "Component Design System",
    description: "Reusable UI component library with Storybook documentation adopted across 5+ teams.",
    technologies: ["React", "Storybook", "Styled Components", "Jest"],
    category: "frontend",
    year: "2019",
    impact: "40% faster development",
    status: "maintenance",
    featured: false
  }
];

const ProjectsPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'fullstack' | 'architecture'>('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [animatedElements, setAnimatedElements] = useState<{[key: string]: boolean}>({});

  const categories = [
    { key: 'all', label: 'All', count: projects.length },
    { key: 'architecture', label: 'Architecture', count: projects.filter(p => p.category === 'architecture').length },
    { key: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  ];

  // Helper function to check if an element should be animated
  const isElementAnimated = (projectId: number, element: string) => {
    return animatedElements[`${projectId}-${element}`] || false;
  };

  useEffect(() => {
    const filtered = selectedCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);
    
    setVisibleProjects(filtered);
    setAnimatedElements({});
    
    // Animate each project and its elements sequentially
    filtered.forEach((project, projectIndex) => {
      const baseDelay = projectIndex * 800; // Delay between projects
      
      // Sequential animation for each element
      const animationSequence = [
        { element: 'number', delay: baseDelay + 100 },
        { element: 'title', delay: baseDelay + 300 },
        { element: 'badge', delay: baseDelay + 600 },
        { element: 'description', delay: baseDelay + 900 },
        { element: 'tech', delay: baseDelay + 1200 },
        { element: 'year', delay: baseDelay + 1500 },
        { element: 'line', delay: baseDelay + 1800 }
      ];

      animationSequence.forEach(({ element, delay }) => {
        setTimeout(() => {
          setAnimatedElements(prev => ({
            ...prev,
            [`${project.id}-${element}`]: true
          }));
        }, delay);
      });
    });
  }, [selectedCategory]);

  const getCategoryIcon = (category: string) => {
    const icons = {
      architecture: '🏗️',
      fullstack: '⚡',
      frontend: '🎨'
    };
    return icons[category as keyof typeof icons] || '💻';
  };

  return (
    <div className={`w-screen min-h-screen relative overflow-hidden ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      
      {/* Notebook-style Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className={`absolute inset-0 ${
            isDarkMode ? 'opacity-30' : 'opacity-40'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(${isDarkMode ? 'rgba(21, 37, 59, 0.2)' : 'rgba(21, 37, 59, 0.12)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDarkMode ? 'rgba(21, 37, 59, 0.2)' : 'rgba(21, 37, 59, 0.12)'} 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            animation: 'gridMove 25s linear infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-7xl font-black mb-6 ${
              isDarkMode ? 'text-white' : 'text-black'
            } tracking-tight`}>
              PROJECTS
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#15253B]"></div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-16">
            <div className={`flex p-2 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/30' : 'bg-gray-100/50'
            } backdrop-blur-sm border ${
              isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'
            }`}>
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as any)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    selectedCategory === category.key
                      ? 'bg-[#15253B] text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-black hover:bg-gray-200/50'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    selectedCategory === category.key
                      ? 'bg-white/20 text-white'
                      : isDarkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-1">
            {visibleProjects.map((project, index) => {
              
              return (
                <div
                  key={project.id}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  
                  {/* Project Row */}
                  <div className={`flex items-center justify-between py-8 px-6 rounded-lg transition-all duration-300 ${
                    hoveredProject === project.id 
                      ? isDarkMode 
                        ? 'bg-gray-900/50 border-l-4 border-l-[#15253B]' 
                        : 'bg-gray-50/80 border-l-4 border-l-[#15253B]'
                      : 'hover:bg-gray-900/20 hover:bg-gray-50/40'
                  }`}>
                    
                    {/* Left: Number + Content */}
                    <div className="flex items-start space-x-8 flex-1">
                      
                      {/* Project Number */}
                      <div className={`text-4xl font-black ${
                        isDarkMode ? 'text-gray-600' : 'text-gray-400'
                      } min-w-[60px] transition-colors duration-300 ${
                        hoveredProject === project.id ? 'text-[#15253B]' : ''
                      } ${
                        isElementAnimated(project.id, 'number') 
                          ? 'animate-typewriter-number' 
                          : 'opacity-0 transform scale-0'
                      }`}>
                        {String(index + 1).padStart(2, '0')}.
                      </div>
                      
                      {/* Project Info */}
                      <div className="flex-1">
                        
                        {/* Title + Category */}
                        <div className="flex items-center space-x-4 mb-2">
                          <div className={`${
                            isElementAnimated(project.id, 'title')
                              ? 'animate-typewriter-title'
                              : 'opacity-0 w-0 overflow-hidden'
                          }`}>
                            <h3 className={`text-2xl md:text-3xl font-bold ${
                              isDarkMode ? 'text-white' : 'text-black'
                            } transition-colors duration-300 ${
                              hoveredProject === project.id ? 'text-[#15253B]' : ''
                            } whitespace-nowrap`}>
                              {project.title}
                              {isElementAnimated(project.id, 'title') && (
                                <span className={`inline-block ml-1 ${
                                  isDarkMode ? 'text-[#15253B]' : 'text-[#15253B]'
                                } animate-blink`}>
                                  |
                                </span>
                              )}
                            </h3>
                          </div>
                          
                          {project.featured && (
                            <span className={`bg-[#15253B] text-white px-3 py-1 rounded-full text-xs font-semibold ${
                              isElementAnimated(project.id, 'badge')
                                ? 'animate-typewriter-badge'
                                : 'opacity-0 scale-0 rotate-180'
                            }`}>
                              Featured
                            </span>
                          )}
                        </div>
                        
                        {/* Description */}
                        <div className={`${
                          isElementAnimated(project.id, 'description')
                            ? 'animate-typewriter-text'
                            : 'opacity-0 max-h-0 overflow-hidden'
                        }`}>
                          <p className={`text-base ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          } mb-3 leading-relaxed max-w-3xl`}>
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Tech Stack */}
                        <div className={`flex items-center space-x-3 ${
                          isElementAnimated(project.id, 'tech')
                            ? 'animate-typewriter-tech'
                            : 'opacity-0 transform -translate-x-8'
                        }`}>
                          <span className={`text-sm ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            {getCategoryIcon(project.category)}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`text-sm ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}
                              >
                                {tech}{techIndex < Math.min(project.technologies.length, 4) - 1 ? ' •' : ''}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className={`text-sm ${
                                isDarkMode ? 'text-gray-500' : 'text-gray-500'
                              }`}>
                                +{project.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right: Year + Arrow */}
                    <div className={`flex items-center space-x-6 ${
                      isElementAnimated(project.id, 'year')
                        ? 'animate-typewriter-right'
                        : 'opacity-0 transform translate-x-8'
                    }`}>
                      <div className="text-right">
                        <div className={`text-xl font-bold ${
                          isDarkMode ? 'text-white' : 'text-black'
                        }`}>
                          [{project.year}]
                        </div>
                        <div className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {project.impact}
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className={`text-2xl transition-all duration-300 ${
                        hoveredProject === project.id 
                          ? 'text-[#15253B] transform translate-x-2' 
                          : isDarkMode ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        ↗
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator Line */}
                  {index < visibleProjects.length - 1 && (
                    <div className={`h-px mx-6 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    } transition-all duration-300 ${
                      hoveredProject === project.id ? 'bg-[#15253B]/30' : ''
                    } ${
                      isElementAnimated(project.id, 'line')
                        ? 'animate-typewriter-line'
                        : 'w-0 opacity-0'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes typewriter {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typewriter-number {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          60% {
            transform: scale(1.05) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes typewriter-title {
          0% {
            opacity: 0;
            width: 0;
            overflow: hidden;
          }
          100% {
            opacity: 1;
            width: 100%;
          }
        }

        @keyframes typewriter-text {
          0% {
            opacity: 0;
            max-height: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            max-height: 100px;
            transform: translateY(0);
          }
        }

        @keyframes typewriter-tech {
          0% {
            opacity: 0;
            transform: translateX(-15px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typewriter-right {
          0% {
            opacity: 0;
            transform: translateX(15px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typewriter-badge {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-10deg);
          }
          80% {
            transform: scale(1.1) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes typewriter-line {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .animate-typewriter {
          animation: typewriter 0.8s ease-out forwards;
        }

        .animate-typewriter-number {
          animation: typewriter-number 1s ease-out forwards;
        }

        .animate-typewriter-title {
          animation: typewriter-title 1.5s ease-out forwards;
          overflow: hidden;
          white-space: nowrap;
        }

        .animate-typewriter-text {
          animation: typewriter-text 1s ease-out forwards;
        }

        .animate-typewriter-tech {
          animation: typewriter-tech 0.8s ease-out forwards;
        }

        .animate-typewriter-right {
          animation: typewriter-right 0.8s ease-out forwards;
        }

        .animate-typewriter-badge {
          animation: typewriter-badge 0.6s ease-out forwards;
        }

        .animate-typewriter-line {
          animation: typewriter-line 1s ease-out forwards;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(25px, 25px);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
