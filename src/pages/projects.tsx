import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import ProjectItem from '../components/ProjectItem';

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
    title: "ChatGPT Local",
    description: "Local AI chatbot running entirely in the browser with Llama model, built with vanilla JavaScript for complete privacy and offline functionality.",
    technologies: ["Vanilla JS", "HTML5", "CSS3", "Web Workers"],
    category: "frontend",
    year: "2024",
    impact: "100% Private",
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
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
              A showcase of innovative solutions spanning <span className="sketch-highlight">architecture design</span>, <span className="sketch-highlight">full-stack development</span>, and <span className="sketch-highlight">frontend excellence</span>.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-16">
            <div className={`flex p-2 rounded-2xl sketch-border ${
              isDarkMode ? 'bg-gray-900/30' : 'bg-gray-100/50'
            } backdrop-blur-sm`}>
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as 'all' | 'frontend' | 'fullstack' | 'architecture')}
                  className={`sketch-button px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    selectedCategory === category.key
                      ? 'text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-black'
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
              <ProjectItem 
                key={project.id}
                project={project}
                index={index}
                getCategoryIcon={getCategoryIcon}
              />
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
                className="sketch-button px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                Start a Project ✨
              </button>
              <button 
                className="sketch-button px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                Get In Touch 👋
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
