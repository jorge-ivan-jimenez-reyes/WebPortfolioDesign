import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  slug?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Social Media Platform",
    description: "Scalable social platform with AI content moderation, real-time messaging, and intelligent feed algorithms using AWS services.",
    technologies: ["AWS", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    category: "architecture",
    year: "2024",
    impact: "1M+ users",
    status: "in-progress",
    featured: true,
    slug: "ai-social-media-platform"
  },
  {
    id: 2,
    title: "ConnectUP - Academic Management",
    description: "Comprehensive platform for managing engineering academies, professors, schedules, and classes with monolithic architecture.",
    technologies: ["Django", "React", "MySQL", "AWS", "Kubernetes", "Docker"],
    category: "fullstack",
    year: "2023",
    impact: "500+ students",
    status: "completed",
    featured: true,
    slug: "connectup"
  },
  {
    id: 3,
    title: "Microservices E-commerce Platform",
    description: "Distributed e-commerce system with independent services for catalog, orders, payments, and user management.",
    technologies: ["Node.js", "React", "MongoDB", "Redis", "Docker", "AWS"],
    category: "architecture",
    year: "2023",
    impact: "10K+ transactions",
    status: "completed",
    featured: true,
    slug: "microservices-ecommerce"
  },
  {
    id: 4,
    title: "Real-time Analytics Data Lake",
    description: "High-performance data lake architecture for processing and analyzing real-time business metrics and user behavior.",
    technologies: ["AWS", "Apache Kafka", "Elasticsearch", "Python", "Spark"],
    category: "architecture",
    year: "2023",
    impact: "TB+ data processed",
    status: "completed",
    featured: true,
    slug: "analytics-data-lake"
  },
  {
    id: 5,
    title: "Universidad Panamericana Portal",
    description: "Academic management platform for postgraduate programs with coffee break management and email services.",
    technologies: ["Express.js", "React", "Node.js", "SQL Server", "IIS"],
    category: "fullstack",
    year: "2023",
    impact: "50+ programs",
    status: "maintenance",
    featured: false,
    slug: "up-postgraduate-portal"
  },
  {
    id: 6,
    title: "Multi-tenant SaaS Infrastructure",
    description: "Scalable SaaS platform architecture supporting multiple tenants with isolated data and customizable features.",
    technologies: ["AWS", "Node.js", "PostgreSQL", "Redis", "Docker"],
    category: "architecture",
    year: "2022",
    impact: "100+ tenants",
    status: "maintenance",
    featured: false,
    slug: "multitenant-saas"
  },
  {
    id: 7,
    title: "Astro Landing Page",
    description: "High-performance landing page built with Astro framework achieving optimal SEO and lightning-fast loading times.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vite"],
    category: "frontend",
    year: "2024",
    impact: "98 PageSpeed",
    status: "completed",
    featured: false,
    slug: "astro-landing"
  },
  {
    id: 8,
    title: "Angular Corporate Landing",
    description: "Professional corporate website with modern design, responsive layout, and optimized performance using Angular.",
    technologies: ["Angular", "TypeScript", "SCSS", "RxJS"],
    category: "frontend",
    year: "2024",
    impact: "50% faster load",
    status: "completed",
    featured: false,
    slug: "angular-corporate"
  },
  {
    id: 9,
    title: "Stoyco Management Dashboard",
    description: "Business operations dashboard for Stoyco with comprehensive analytics, reporting, and management tools.",
    technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
    category: "frontend",
    year: "2023",
    impact: "40% efficiency",
    status: "completed",
    featured: false,
    slug: "stoyco-dashboard"
  },
  {
    id: 10,
    title: "Adobe Partner Club Platform",
    description: "Comprehensive partner platform for Adobe ecosystem with user management, resource sharing, and collaboration tools.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    year: "2024",
    impact: "200+ partners",
    status: "completed",
    featured: false,
    slug: "adobe-partner-club"
  }
];

const Projects = () => {
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
    
    setVisibleProjects(filtered);
  }, [selectedCategory]);

  const getCategoryIcon = (category: string) => {
    const icons = {
      architecture: '🏗️',
      fullstack: '⚡',
      frontend: '🎨'
    };
    return icons[category as keyof typeof icons] || '💻';
  };

  // Background grid animation
  const backgroundGrid = {
    backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
    backgroundSize: '25px 25px',
    animation: 'moveGrid 25s linear infinite',
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Grid */}
      <div 
        className="fixed inset-0 opacity-20"
        style={backgroundGrid}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              PROJECTS
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A showcase of innovative solutions spanning architecture design, full-stack development, and frontend excellence.
            </p>
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
                  onClick={() => setSelectedCategory(category.key as 'all' | 'frontend' | 'fullstack' | 'architecture')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    selectedCategory === category.key
                      ? 'text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-black hover:bg-gray-200/50'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.key ? 'var(--accent)' : 'transparent'
                  }}
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
          <div className="space-y-6">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
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
                        className="text-4xl font-black transition-colors duration-300 group-hover:text-[#15253B]"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        {/* Main Info */}
                        <div className="flex-grow min-w-0 mb-6 lg:mb-0 lg:pr-8">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl">{getCategoryIcon(project.category)}</span>
                            <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                              {project.title}
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
                          
                          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Separator */}
                {index < visibleProjects.length - 1 && (
                  <div 
                    className="h-px mx-6 transition-all duration-500"
                    style={{ backgroundColor: 'var(--border)' }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-x-4">
              <button 
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                Start a Project
              </button>
              <button 
                className="px-8 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
