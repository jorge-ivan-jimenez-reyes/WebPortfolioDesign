import React from 'react';
import Layout from '../components/Layout';
import { useTheme } from '../context/ThemeContext';

const Achievements = () => {
  const { isDarkMode } = useTheme();

  const achievements = [
    {
      title: "AWS Solutions Architect Professional",
      description: "Advanced certification in designing scalable cloud architectures",
      year: "2023",
      type: "Certification"
    },
    {
      title: "Led Migration to Microservices",
      description: "Successfully migrated monolithic application serving 1M+ users to microservices architecture",
      year: "2023",
      type: "Technical Achievement"
    },
    {
      title: "Team Lead - 15 Developers",
      description: "Led a cross-functional team of 15 developers across 3 different projects",
      year: "2022",
      type: "Leadership"
    },
    {
      title: "99.9% Uptime Achievement",
      description: "Implemented monitoring and alerting systems achieving 99.9% uptime for critical services",
      year: "2022",
      type: "Technical Achievement"
    },
    {
      title: "Full Stack Developer Certification",
      description: "Completed advanced full-stack development program",
      year: "2021",
      type: "Certification"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to multiple open source projects with 500+ stars",
      year: "2020-Present",
      type: "Community"
    }
  ];

  return (
    <Layout>
      <div className={`min-h-screen py-20 px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Professional milestones and accomplishments that define my journey from developer to solution architect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50' 
                    : 'bg-white/70 border border-gray-200/50 hover:bg-white/90'
                } backdrop-blur-md shadow-lg`}
              >
                <div className={`text-sm font-medium mb-2 px-3 py-1 rounded-full inline-block ${
                  achievement.type === 'Certification' 
                    ? 'bg-blue-500/20 text-blue-400'
                    : achievement.type === 'Leadership'
                    ? 'bg-purple-500/20 text-purple-400'
                    : achievement.type === 'Technical Achievement'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {achievement.type}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.title}
                </h3>
                
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {achievement.description}
                </p>
                
                <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center p-8 rounded-xl ${
            isDarkMode 
              ? 'bg-gray-800/30 border border-gray-700/30' 
              : 'bg-white/50 border border-gray-200/30'
          } backdrop-blur-md`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready for New Challenges
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Always looking for opportunities to grow and make an impact through technology.
            </p>
            <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
              isDarkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } shadow-lg hover:shadow-xl hover:-translate-y-1`}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements; 