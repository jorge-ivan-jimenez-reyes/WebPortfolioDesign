import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const Blog = () => {
  const { isDarkMode } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "Microservices Architecture: Lessons Learned",
      excerpt: "Key insights from migrating a monolithic application to microservices architecture, including common pitfalls and best practices.",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "DevOps"],
      featured: true
    },
    {
      id: 2,
      title: "Building Resilient Cloud Infrastructure",
      excerpt: "How to design fault-tolerant systems using AWS services, implementing circuit breakers, and handling graceful degradation.",
      date: "November 28, 2023",
      readTime: "12 min read",
      category: "Cloud",
      tags: ["AWS", "Infrastructure", "Resilience"],
      featured: true
    },
    {
      id: 3,
      title: "Leading Technical Teams: A Developer's Journey",
      excerpt: "Transitioning from individual contributor to technical leader, sharing strategies for effective team management and mentoring.",
      date: "October 22, 2023",
      readTime: "6 min read",
      category: "Leadership",
      tags: ["Leadership", "Management", "Career"],
      featured: false
    },
    {
      id: 4,
      title: "Modern DevOps Practices for Startups",
      excerpt: "Implementing CI/CD pipelines, infrastructure as code, and monitoring solutions for fast-growing startups.",
      date: "September 10, 2023",
      readTime: "10 min read",
      category: "DevOps",
      tags: ["DevOps", "CI/CD", "Startups"],
      featured: false
    },
    {
      id: 5,
      title: "React Performance Optimization Guide",
      excerpt: "Advanced techniques for optimizing React applications, including code splitting, memoization, and bundle analysis.",
      date: "August 5, 2023",
      readTime: "15 min read",
      category: "Development",
      tags: ["React", "Performance", "JavaScript"],
      featured: true
    },
    {
      id: 6,
      title: "Database Design for Scale",
      excerpt: "Strategies for designing databases that can handle millions of users, including sharding, replication, and query optimization.",
      date: "July 18, 2023",
      readTime: "11 min read",
      category: "Database",
      tags: ["Database", "Scale", "Performance"],
      featured: false
    }
  ];

  // Background grid animation
  const backgroundGrid = {
    backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
    backgroundSize: '25px 25px',
    animation: 'moveGrid 25s linear infinite',
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Architecture: '🏗️',
      Cloud: '☁️',
      Leadership: '👑',
      DevOps: '⚙️',
      Development: '💻',
      Database: '🗄️'
    };
    return icons[category as keyof typeof icons] || '📝';
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
              BLOG
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Insights, tutorials, and thoughts on software architecture, development practices, and technology leadership.
            </p>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Blog Post Row */}
                <div 
                  className={`flex items-center justify-between py-8 px-6 rounded-lg transition-all duration-300 hover:bg-gray-900/20 hover:bg-gray-50/40`}
                  style={{
                    borderLeft: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeft = '4px solid var(--accent)';
                  }}
                  onMouseLeave={(e) => {
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
                      <div className="flex-grow min-w-0 mb-4 lg:mb-0 lg:pr-8">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{getCategoryIcon(post.category)}</span>
                          <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                            {post.title}
                          </h3>
                          {post.featured && (
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
                            {post.category}
                          </span>
                        </div>
                        
                        <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 rounded text-xs"
                              style={{ 
                                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                                color: 'var(--text-muted)',
                                border: '1px solid var(--border)'
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col lg:items-end text-sm">
                        <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-2">
                          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </span>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {post.readTime}
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

                {/* Separator */}
                {index < blogPosts.length - 1 && (
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
              Subscribe to My Newsletter
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="flex-1 px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 style={{
                   backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                   borderColor: 'var(--border)',
                   color: 'var(--text-primary)'
                 }}
               />
               <button 
                 className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                 style={{ backgroundColor: 'var(--accent)', color: 'white' }}
               >
                 Subscribe
               </button>
             </div>
            <div className="space-x-4">
              <button 
                className="px-8 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                View All Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog; 