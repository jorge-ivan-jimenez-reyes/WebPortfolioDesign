import React from 'react';
import Layout from '../components/Layout';
import { useTheme } from '../context/ThemeContext';

const Blog = () => {
  const { isDarkMode } = useTheme();

  const blogPosts = [
    {
      title: "Microservices Architecture: Lessons Learned",
      excerpt: "Key insights from migrating a monolithic application to microservices architecture, including common pitfalls and best practices.",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "DevOps"]
    },
    {
      title: "Building Resilient Cloud Infrastructure",
      excerpt: "How to design fault-tolerant systems using AWS services, implementing circuit breakers, and handling graceful degradation.",
      date: "November 28, 2023",
      readTime: "12 min read",
      category: "Cloud",
      tags: ["AWS", "Infrastructure", "Resilience"]
    },
    {
      title: "Leading Technical Teams: A Developer's Journey",
      excerpt: "Transitioning from individual contributor to technical leader, sharing strategies for effective team management and mentoring.",
      date: "October 22, 2023",
      readTime: "6 min read",
      category: "Leadership",
      tags: ["Leadership", "Management", "Career"]
    },
    {
      title: "Modern DevOps Practices for Startups",
      excerpt: "Implementing CI/CD pipelines, infrastructure as code, and monitoring solutions for fast-growing startups.",
      date: "September 10, 2023",
      readTime: "10 min read",
      category: "DevOps",
      tags: ["DevOps", "CI/CD", "Startups"]
    },
    {
      title: "React Performance Optimization Guide",
      excerpt: "Advanced techniques for optimizing React applications, including code splitting, memoization, and bundle analysis.",
      date: "August 5, 2023",
      readTime: "15 min read",
      category: "Development",
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      title: "Database Design for Scale",
      excerpt: "Strategies for designing databases that can handle millions of users, including sharding, replication, and query optimization.",
      date: "July 18, 2023",
      readTime: "11 min read",
      category: "Database",
      tags: ["Database", "Scale", "Performance"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Architecture: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      Cloud: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      Leadership: 'bg-green-500/20 text-green-400 border-green-500/30',
      DevOps: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      Development: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      Database: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <Layout>
      <div className={`min-h-screen py-20 px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Technical Blog
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Insights, tutorials, and thoughts on software architecture, development practices, and technology leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50' 
                    : 'bg-white/70 border border-gray-200/50 hover:bg-white/90'
                } backdrop-blur-md shadow-lg rounded-xl overflow-hidden`}
              >
                {/* Article Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className={`text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h2>

                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 rounded text-xs ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-300' 
                            : 'bg-gray-200/50 text-gray-600'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {post.date}
                  </div>
                </div>

                {/* Read More Footer */}
                <div className={`px-6 py-4 border-t ${
                  isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium group-hover:text-purple-500 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Read More
                    </span>
                    <svg 
                      className={`w-4 h-4 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={`mt-16 text-center p-8 rounded-xl ${
            isDarkMode 
              ? 'bg-gray-800/30 border border-gray-700/30' 
              : 'bg-white/50 border border-gray-200/30'
          } backdrop-blur-md`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Subscribe to My Newsletter
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              } shadow-lg hover:shadow-xl hover:-translate-y-1`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 