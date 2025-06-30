import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      id: 1,
      role: "Senior Solution Architect",
      company: "TechCorp Global",
      period: "2023 - Present",
      location: "Remote",
      description: "Leading architectural decisions for enterprise-scale applications serving millions of users. Designing cloud-native solutions using AWS, microservices, and modern DevOps practices.",
      technologies: ["AWS", "Kubernetes", "Microservices", "Terraform", "Docker"],
      achievements: [
        "Reduced infrastructure costs by 40% through optimized cloud architecture",
        "Led migration of 15+ services to cloud-native architecture", 
        "Established DevOps best practices across 5 development teams"
      ],
      impact: "40% cost reduction",
      status: "current"
    },
    {
      id: 2,
      role: "Full Stack Team Lead",
      company: "InnovateSoft",
      period: "2021 - 2023",
      location: "Hybrid",
      description: "Led a team of 8 developers building modern web applications. Responsible for technical decisions, code reviews, and mentoring junior developers.",
      technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "TypeScript"],
      achievements: [
        "Delivered 12+ projects on time and within budget",
        "Improved code quality metrics by 60% through implementation of best practices",
        "Mentored 5 junior developers to mid-level positions"
      ],
      impact: "60% quality improvement",
      status: "completed"
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2019 - 2021",
      location: "On-site",
      description: "Developed and maintained web applications from conception to deployment. Worked closely with product and design teams to deliver user-centric solutions.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "JavaScript"],
      achievements: [
        "Built 3 major features that increased user engagement by 35%",
        "Optimized application performance resulting in 50% faster load times",
        "Implemented automated testing reducing bugs by 70%"
      ],
      impact: "35% engagement increase",
      status: "completed"
    },
    {
      id: 4,
      role: "Junior Developer",
      company: "TechStart Solutions",
      period: "2018 - 2019",
      location: "On-site",
      description: "Started my professional journey as a junior developer, learning modern web development practices and contributing to various client projects.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
      achievements: [
        "Successfully completed 8+ client projects",
        "Learned and applied modern development frameworks",
        "Collaborated effectively in agile development environments"
      ],
      impact: "8+ projects delivered",
      status: "completed"
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
              EXPERIENCE
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My journey from junior developer to solution architect, building scalable solutions and leading high-performing teams.
            </p>
          </div>

          {/* Experience List */}
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Experience Row */}
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
                          <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                            {experience.role}
                          </h3>
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ 
                              backgroundColor: experience.status === 'current' ? '#10b981' : 'var(--accent)', 
                              color: 'white' 
                            }}
                          >
                            {experience.status === 'current' ? 'Current' : 'Completed'}
                          </span>
                        </div>
                        
                        <div className="mb-3">
                          <p className="text-lg font-semibold" style={{ color: '#15253B' }}>
                            {experience.company}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {experience.period} • {experience.location}
                          </p>
                        </div>

                        <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                          {experience.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {experience.technologies.map((tech, techIndex) => (
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
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.slice(0, 2).map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-sm" style={{ color: 'var(--text-secondary)' }}>
                                <span className="text-[#15253B] mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col lg:items-end text-sm">
                        <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-2">
                          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                            {experience.period.split(' - ')[0]}
                          </span>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {experience.impact}
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
                {index < experiences.length - 1 && (
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring my expertise to your next project and help scale your technology solutions.
            </p>
            <div className="space-x-4">
              <button 
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                Get In Touch
              </button>
              <button 
                className="px-8 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience; 