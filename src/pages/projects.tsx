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

  const categories = [
    { key: 'all', label: 'All', count: projects.length },
    { key: 'architecture', label: 'Architecture', count: projects.filter(p => p.category === 'architecture').length },
    { key: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  ];

  useEffect(() => {
    const filtered = selectedCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);
    
    setVisibleProjects([]);
    setTimeout(() => {
      setVisibleProjects(filtered);
    }, 150);
  }, [selectedCategory]);

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
        <div className="max-w-7xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-12">
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 ${
                  project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                } ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border border-gray-800/50 hover:border-[#15253B]/40' 
                    : 'bg-white border border-gray-200/50 hover:border-[#15253B]/40'
                } backdrop-blur-sm shadow-lg hover:shadow-xl cursor-pointer`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'projectSlideIn 0.6s ease-out forwards'
                }}
              >
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-[#15253B] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                {/* Subtle Category Indicator */}
                <div className="h-0.5 bg-[#15253B]/30"></div>

                {/* Content */}
                <div className="p-6">
                  
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode 
                        ? 'bg-[#15253B]/20 text-[#15253B] border border-[#15253B]/30' 
                        : 'bg-[#15253B]/10 text-[#15253B] border border-[#15253B]/20'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } group-hover:text-[#15253B] transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } leading-relaxed`}>
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className={`mb-4 p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                  } border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} border-l-2 border-l-[#15253B]/40`}>
                    <div className={`text-xs font-medium mb-1 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      IMPACT
                    </div>
                    <div className={`text-sm font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.impact}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            isDarkMode 
                              ? 'bg-gray-800/50 text-gray-300 border border-gray-700/50' 
                              : 'bg-gray-100 text-gray-600 border border-gray-200'
                          } hover:border-[#15253B]/30 transition-colors duration-200`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-200 text-gray-500'
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className={`text-xs font-medium ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {project.year}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? isDarkMode 
                          ? 'bg-green-900/30 text-green-400 border border-green-800/50'
                          : 'bg-green-100 text-green-700 border border-green-200'
                        : project.status === 'in-progress'
                        ? isDarkMode
                          ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50'
                          : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                        : isDarkMode
                          ? 'bg-[#15253B]/30 text-blue-400 border border-[#15253B]/50'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      {project.status === 'completed' ? 'Done' : 
                       project.status === 'in-progress' ? 'Active' : 'Live'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes projectSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
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
