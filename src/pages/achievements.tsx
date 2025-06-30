import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const Achievements = () => {
  const { isDarkMode } = useTheme();

  const achievements = [
    {
      title: "AWS Solutions Architect Professional",
      description: "Advanced certification in designing scalable cloud architectures",
      year: "2023",
      type: "Certification",
      impact: "Enhanced cloud expertise"
    },
    {
      title: "Led Migration to Microservices",
      description: "Successfully migrated monolithic application serving 1M+ users to microservices architecture",
      year: "2023",
      type: "Technical Achievement",
      impact: "300% performance improvement"
    },
    {
      title: "Team Lead - 15 Developers",
      description: "Led a cross-functional team of 15 developers across 3 different projects",
      year: "2022",
      type: "Leadership",
      impact: "5 successful project deliveries"
    },
    {
      title: "99.9% Uptime Achievement",
      description: "Implemented monitoring and alerting systems achieving 99.9% uptime for critical services",
      year: "2022",
      type: "Technical Achievement",
      impact: "Zero critical outages"
    },
    {
      title: "Full Stack Developer Certification",
      description: "Completed advanced full-stack development program with distinction",
      year: "2021",
      type: "Certification",
      impact: "Advanced technical skills"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to multiple open source projects with 500+ stars and community impact",
      year: "2020-Present",
      type: "Community",
      impact: "500+ GitHub stars"
    }
  ];

  // Background grid animation
  const backgroundGrid = {
    backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
    backgroundSize: '25px 25px',
    animation: 'moveGrid 25s linear infinite',
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Certification': return '🎓';
      case 'Technical Achievement': return '⚡';
      case 'Leadership': return '👑';
      case 'Community': return '🌟';
      default: return '🏆';
    }
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
              ACHIEVEMENTS
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Professional milestones and accomplishments that define my journey from developer to solution architect.
            </p>
          </div>

          {/* Achievements List */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Achievement Row */}
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
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      {/* Title and Description */}
                      <div className="flex-grow min-w-0 mb-4 lg:mb-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{getTypeIcon(achievement.type)}</span>
                          <h3 className="text-xl md:text-2xl font-bold truncate" style={{ color: 'var(--text-primary)' }}>
                            {achievement.title}
                          </h3>
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                          >
                            {achievement.type}
                          </span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {achievement.description}
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col lg:items-end text-sm">
                        <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-2">
                          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                            {achievement.year}
                          </span>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {achievement.impact}
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
                {index < achievements.length - 1 && (
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
              Ready to take on new challenges and continue making an impact in the tech industry.
            </p>
            <div className="space-x-4">
              <button 
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                Let's Connect
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

export default Achievements; 