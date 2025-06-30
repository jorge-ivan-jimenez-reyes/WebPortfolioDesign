import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const Architecture = () => {
  const { isDarkMode } = useTheme();

  const architecturalProjects = [
    {
      id: 1,
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
      scale: "1M+ daily users",
      featured: true
    },
    {
      id: 2,
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
      scale: "100TB+ daily processing",
      featured: true
    },
    {
      id: 3,
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
      scale: "Enterprise-grade security",
      featured: false
    },
    {
      id: 4,
      title: "Cloud-Native Migration Strategy",
      description: "Led comprehensive migration from on-premises to cloud-native architecture",
      challenge: "Minimize downtime while migrating critical business systems to the cloud",
      solution: "Phased migration approach with blue-green deployments and automated rollbacks",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      metrics: {
        downtime: "Zero downtime migration",
        performance: "50% performance improvement",
        scalability: "Auto-scaling capabilities"
      },
      scale: "Mission-critical systems",
      featured: false
    }
  ];

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
              ARCHITECTURE
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Designing scalable, resilient, and cost-effective systems that power modern businesses. 
              From microservices to cloud-native architectures, I help organizations build for the future.
            </p>
          </div>

          {/* Architecture Projects List */}
          <div className="space-y-6">
            {architecturalProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Row */}
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
                      <div className="flex-grow min-w-0 mb-6 lg:mb-0 lg:pr-8">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">🏗️</span>
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
                            {project.scale}
                          </span>
                        </div>
                        
                        <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                        </p>

                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-xs font-semibold mb-1" style={{ color: 'var(--accent)' }}>CHALLENGE</h4>
                            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold mb-1" style={{ color: 'var(--accent)' }}>SOLUTION</h4>
                            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 rounded text-xs"
                              style={{ 
                                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                                color: 'var(--text-muted)',
                                border: '1px solid var(--border)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span
                              className="px-2 py-1 rounded text-xs"
                              style={{ 
                                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                                color: 'var(--text-muted)',
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
                            {Object.values(project.metrics)[0]}
                          </span>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            Architecture
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
                {index < architecturalProjects.length - 1 && (
                  <div 
                    className="h-px mx-6 transition-all duration-500"
                    style={{ backgroundColor: 'var(--border)' }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Architectural Principles Section */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
              Architectural Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Scalability First", description: "Design systems that grow seamlessly with business needs", icon: "📈" },
                { title: "Fault Tolerance", description: "Build resilient systems that gracefully handle failures", icon: "🛡️" },
                { title: "Security by Design", description: "Implement security at every layer of the architecture", icon: "🔒" },
                { title: "Cost Optimization", description: "Balance performance with cost-effective resource utilization", icon: "💰" },
                { title: "Observability", description: "Ensure systems are monitored, logged, and traceable", icon: "👁️" },
                { title: "Developer Experience", description: "Create architectures that enable developer productivity", icon: "⚡" }
              ].map((principle, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg text-center transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div className="text-3xl mb-3">{principle.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Let&apos;s design a robust, scalable architecture that will power your business for years to come.
            </p>
            <div className="space-x-4">
              <button 
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                Schedule Consultation
              </button>
              <button 
                className="px-8 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Architecture; 