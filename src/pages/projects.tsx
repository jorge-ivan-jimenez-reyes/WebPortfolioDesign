import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import Link from 'next/link';

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
  slug?: string; // Add slug for navigation
}

const projects: Project[] = [
  // ARCHITECTURE PROJECTS
  {
    id: 1,
    title: "AI-Powered Social Media Platform Architecture",
    description: "Scalable social media platform with AI-generated content, using AWS Cognito for authentication and EC2 with load balancing for high availability.",
    technologies: ["AWS Cognito", "EC2", "Application Load Balancer", "Lambda", "S3", "RDS", "CloudFront"],
    category: "architecture",
    year: "2024",
    impact: "Supports 100K+ concurrent users",
    status: "in-progress",
    featured: true,
    slug: "ai-social-media-platform"
  },
  {
    id: 2,
    title: "Microservices E-commerce Platform",
    description: "Event-driven microservices architecture for high-traffic e-commerce with auto-scaling, API Gateway, and distributed caching.",
    technologies: ["AWS EKS", "API Gateway", "EventBridge", "ElastiCache", "RDS Aurora", "CloudWatch"],
    category: "architecture",
    year: "2024",
    impact: "99.9% uptime, 500% scalability",
    status: "completed",
    featured: true,
    slug: "microservices-ecommerce"
  },
  {
    id: 3,
    title: "Real-time Analytics Data Lake",
    description: "Serverless data processing pipeline with real-time analytics, handling petabytes of data with cost-optimized storage and processing.",
    technologies: ["AWS Kinesis", "Lambda", "S3 Data Lake", "Athena", "Glue", "QuickSight", "EMR"],
    category: "architecture",
    year: "2024",
    impact: "Processes 10TB+ daily data",
    status: "completed",
    featured: true,
    slug: "analytics-data-lake"
  },
  {
    id: 4,
    title: "Multi-tenant SaaS Infrastructure",
    description: "Secure, isolated multi-tenant architecture with tenant-specific data segregation, monitoring, and compliance automation.",
    technologies: ["AWS Organizations", "Control Tower", "Transit Gateway", "WAF", "Config", "CloudTrail"],
    category: "architecture",
    year: "2023",
    impact: "1000+ enterprise tenants",
    status: "maintenance",
    featured: false,
    slug: "multitenant-saas"
  },

  // FULL-STACK PROJECTS
  {
    id: 5,
    title: "ConnectUP - Academic Management Platform",
    description: "Comprehensive platform for managing engineering academies, professors, schedules, classes, and subjects with optimized academic workflows.",
    technologies: ["Django", "React", "MySQL", "AWS", "Kubernetes", "Docker", "Redis"],
    category: "fullstack",
    year: "2023",
    impact: "500+ professors, 10K+ students",
    status: "completed",
    featured: true,
    slug: "connectup"
  },
  {
    id: 6,
    title: "Universidad Panamericana Postgraduate Portal",
    description: "Microsite for managing postgraduate programs, academic projects, and schools with integrated coffee break management system and email services.",
    technologies: ["Express.js", "React", "Node.js", "IIS", "SQL Server", "Nodemailer"],
    category: "fullstack",
    year: "2023",
    impact: "50+ postgraduate programs",
    status: "maintenance",
    featured: false,
    slug: "up-postgraduate-portal"
  },

  // FRONTEND PROJECTS
  {
    id: 7,
    title: "Astro Landing Page",
    description: "High-performance landing page built with Astro for optimal SEO and lightning-fast loading times with modern design principles.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    category: "frontend",
    year: "2024",
    impact: "98+ Lighthouse score",
    status: "completed",
    featured: false,
    slug: "astro-landing"
  },
  {
    id: 8,
    title: "Angular Corporate Landing",
    description: "Enterprise-grade landing page with Angular featuring advanced animations, responsive design, and optimized performance.",
    technologies: ["Angular", "TypeScript", "Angular Material", "RxJS", "SCSS"],
    category: "frontend",
    year: "2023",
    impact: "40% conversion increase",
    status: "completed",
    featured: false,
    slug: "angular-corporate"
  },
  {
    id: 9,
    title: "Stoyco Management Dashboard",
    description: "Business operations dashboard for Stoyco with real-time data visualization, inventory management, and analytics reporting.",
    technologies: ["Angular", "Chart.js", "Angular Material", "TypeScript", "Bootstrap"],
    category: "frontend",
    year: "2023",
    impact: "30% operational efficiency",
    status: "completed",
    featured: false,
    slug: "stoyco-dashboard"
  },
  {
    id: 10,
    title: "Adobe Partner Club Platform",
    description: "Interactive platform for Adobe partners built with Next.js featuring member management, resources, and collaboration tools.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "frontend",
    year: "2024",
    impact: "200+ active partners",
    status: "completed",
    featured: false,
    slug: "adobe-partner-club"
  }
];

const ProjectsPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'fullstack' | 'architecture'>('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [animatedElements, setAnimatedElements] = useState<{[key: string]: boolean}>({});
  const [typingText, setTypingText] = useState<{[key: number]: string}>({});
  const [showCursor, setShowCursor] = useState<{[key: number]: boolean}>({});

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

  // Typewriter effect for titles
  const typeWriterEffect = (projectId: number, text: string, delay: number) => {
    setTypingText(prev => ({ ...prev, [projectId]: '' }));
    setShowCursor(prev => ({ ...prev, [projectId]: true }));
    
    setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTypingText(prev => ({ 
            ...prev, 
            [projectId]: text.slice(0, currentIndex) 
          }));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Hide cursor after typing is complete
          setTimeout(() => {
            setShowCursor(prev => ({ ...prev, [projectId]: false }));
          }, 1000);
        }
      }, 50); // 50ms between each character
    }, delay);
  };

  useEffect(() => {
    const filtered = selectedCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);
    
    setVisibleProjects(filtered);
    setAnimatedElements({});
    setTypingText({});
    setShowCursor({});
    
    // Animate each project and its elements sequentially
    filtered.forEach((project, projectIndex) => {
      const baseDelay = projectIndex * 800; // Delay between projects
      
      // Sequential animation for each element
      const animationSequence = [
        { element: 'number', delay: baseDelay + 100 },
        { 
          element: 'title', 
          delay: baseDelay + 300,
          callback: () => typeWriterEffect(project.id, project.title, baseDelay + 400)
        },
        { element: 'badge', delay: baseDelay + 600 + (project.title.length * 50) },
        { element: 'description', delay: baseDelay + 900 + (project.title.length * 50) },
        { element: 'tech', delay: baseDelay + 1200 + (project.title.length * 50) },
        { element: 'year', delay: baseDelay + 1500 + (project.title.length * 50) },
        { element: 'line', delay: baseDelay + 1800 + (project.title.length * 50) }
      ];

      animationSequence.forEach(({ element, delay, callback }) => {
        setTimeout(() => {
          setAnimatedElements(prev => ({
            ...prev,
            [`${project.id}-${element}`]: true
          }));
          if (callback) callback();
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
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      
      {/* Notebook-style Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(var(--grid-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
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
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ color: '#15253B' }}>
              PROJECTS
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
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
          <div className="space-y-1">
            {visibleProjects.map((project, index) => {
              
              return (
                <Link 
                  href={`/projects/${project.slug}`}
                  key={project.id}
                  className={`block group relative cursor-pointer transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  
                  {/* Project Row */}
                  <div className={`flex items-center justify-between py-8 px-6 rounded-lg transition-all duration-300 ${
                    hoveredProject === project.id 
                      ? isDarkMode 
                        ? 'bg-gray-900/50' 
                        : 'bg-gray-50/80'
                      : 'hover:bg-gray-900/20 hover:bg-gray-50/40'
                  }`}
                  style={{
                    borderLeft: hoveredProject === project.id ? '4px solid var(--accent)' : 'none'
                  }}>
                    
                    {/* Left: Number + Content */}
                    <div className="flex items-start space-x-8 flex-1">
                      
                      {/* Project Number */}
                      <div className={`text-4xl font-black ${
                        isDarkMode ? 'text-gray-600' : 'text-gray-400'
                      } min-w-[60px] transition-colors duration-300 ${
                        isElementAnimated(project.id, 'number') 
                          ? 'animate-typewriter-number' 
                          : 'opacity-0 transform scale-0'
                      }`}
                      style={{
                        color: hoveredProject === project.id ? 'var(--accent)' : undefined
                      }}>
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
                            } transition-colors duration-300 whitespace-nowrap`}
                            style={{
                              color: hoveredProject === project.id ? 'var(--accent)' : undefined
                            }}>
                              {typingText[project.id] || ''}
                              {showCursor[project.id] && (
                                <span className="inline-block ml-1 animate-blink" style={{ color: 'var(--accent)' }}>
                                  |
                                </span>
                              )}
                            </h3>
                          </div>
                          
                          {project.featured && (
                            <span className={`text-white px-3 py-1 rounded-full text-xs font-semibold ${
                              isElementAnimated(project.id, 'badge')
                                ? 'animate-typewriter-badge'
                                : 'opacity-0 scale-0 rotate-180'
                            }`}
                            style={{ backgroundColor: 'var(--accent)' }}>
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
                        isDarkMode ? 'text-gray-600' : 'text-gray-400'
                      }`}
                      style={{
                        color: hoveredProject === project.id ? 'var(--accent)' : undefined,
                        transform: hoveredProject === project.id ? 'translateX(8px)' : 'translateX(0)'
                      }}>
                        ↗
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator Line */}
                  {index < visibleProjects.length - 1 && (
                    <div className={`h-px mx-6 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    } transition-all duration-300 ${
                      isElementAnimated(project.id, 'line')
                        ? 'animate-typewriter-line'
                        : 'w-0 opacity-0'
                    }`}
                    style={{
                      backgroundColor: hoveredProject === project.id ? 'var(--hover-border)' : undefined
                    }}></div>
                  )}
                </Link>
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
