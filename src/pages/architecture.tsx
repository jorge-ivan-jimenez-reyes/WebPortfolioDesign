import React from 'react';
import Layout from '../components/Layout';
import { useTheme } from '../context/ThemeContext';

const Architecture = () => {
  const { isDarkMode } = useTheme();

  const architecturalProjects = [
    {
      title: "E-commerce Platform Modernization",
      description: "Redesigned legacy monolithic e-commerce platform into scalable microservices architecture",
      challenge: "Legacy system couldn't handle 10x traffic growth during peak seasons",
      solution: "Migrated to cloud-native microservices with auto-scaling and distributed caching",
      technologies: ["AWS", "Kubernetes", "Event-Driven Architecture", "Redis", "PostgreSQL"],
      metrics: {
        performance: "300% faster response times",
        scalability: "Handles 10x traffic spikes",
        cost: "40% reduction in infrastructure costs"
      },
      scale: "1M+ daily users"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Built high-throughput data processing platform for real-time business insights",
      challenge: "Process and analyze 100TB+ of data daily with sub-second query responses",
      solution: "Event streaming architecture with real-time processing and analytical databases",
      technologies: ["Apache Kafka", "Apache Spark", "ClickHouse", "Docker", "Terraform"],
      metrics: {
        throughput: "1M events/second",
        latency: "Sub-200ms query times", 
        reliability: "99.99% uptime"
      },
      scale: "100TB+ daily processing"
    },
    {
      title: "Multi-tenant SaaS Platform",
      description: "Designed secure, scalable multi-tenant architecture for B2B SaaS product",
      challenge: "Ensure data isolation and performance across 1000+ enterprise tenants",
      solution: "Hybrid tenant isolation with shared services and dedicated resources",
      technologies: ["Node.js", "MongoDB", "JWT", "API Gateway", "Load Balancers"],
      metrics: {
        tenants: "1000+ active tenants",
        isolation: "100% data separation",
        availability: "99.9% SLA compliance"
      },
      scale: "Enterprise-grade security"
    }
  ];

  const architecturalPrinciples = [
    {
      title: "Scalability First",
      description: "Design systems that grow seamlessly with business needs",
      icon: "📈"
    },
    {
      title: "Fault Tolerance", 
      description: "Build resilient systems that gracefully handle failures",
      icon: "🛡️"
    },
    {
      title: "Security by Design",
      description: "Implement security at every layer of the architecture",
      icon: "🔒"
    },
    {
      title: "Cost Optimization",
      description: "Balance performance with cost-effective resource utilization",
      icon: "💰"
    },
    {
      title: "Observability",
      description: "Ensure systems are monitored, logged, and traceable",
      icon: "👁️"
    },
    {
      title: "Developer Experience",
      description: "Create architectures that enable developer productivity",
      icon: "⚡"
    }
  ];

  return (
    <Layout>
      <div className={`min-h-screen py-20 px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Solution Architecture
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Designing scalable, resilient, and cost-effective systems that power modern businesses. 
              From microservices to cloud-native architectures, I help organizations build for the future.
            </p>
          </div>

          {/* Architectural Principles */}
          <div className="mb-20">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Architectural Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {architecturalPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50' 
                      : 'bg-white/70 border border-gray-200/50 hover:bg-white/90'
                  } backdrop-blur-md shadow-lg text-center`}
                >
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {principle.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Architecture Case Studies
            </h2>
            <div className="space-y-12">
              {architecturalProjects.map((project, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border border-gray-700/50' 
                      : 'bg-white/70 border border-gray-200/50'
                  } backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-102`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                            : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                        }`}>
                          {project.scale}
                        </span>
                      </div>

                      <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                        {project.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Challenge
                          </h4>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Solution
                          </h4>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isDarkMode 
                                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                                  : 'bg-blue-100 text-blue-700 border border-blue-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="lg:col-span-1">
                      <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Key Results
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div
                            key={metricIndex}
                            className={`p-4 rounded-lg ${
                              isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'
                            }`}
                          >
                            <div className={`text-sm font-medium capitalize mb-1 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              {key}
                            </div>
                            <div className={`text-lg font-bold ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center p-8 rounded-xl ${
            isDarkMode 
              ? 'bg-gray-800/30 border border-gray-700/30' 
              : 'bg-white/50 border border-gray-200/30'
          } backdrop-blur-md`}>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Scale Your Architecture?
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
              Let's discuss how I can help design and implement scalable, resilient architectures 
              that will power your business growth and handle future challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-700 text-white'
              } shadow-lg hover:shadow-xl hover:-translate-y-1`}>
                Schedule Architecture Review
              </button>
              <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 border ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              } hover:-translate-y-1`}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Architecture; 