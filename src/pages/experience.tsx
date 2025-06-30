import React from 'react';
import Layout from '../components/Layout';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
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
      ]
    },
    {
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
      ]
    },
    {
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
      ]
    },
    {
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
      ]
    }
  ];

  return (
    <Layout>
      <div className={`min-h-screen py-20 px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              My journey from junior developer to solution architect, building scalable solutions and leading high-performing teams.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline dot */}
                <div className={`absolute -left-10 top-6 w-4 h-4 rounded-full ${
                  index === 0 
                    ? 'bg-green-500' 
                    : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
                } border-4 ${isDarkMode ? 'border-gray-900' : 'border-white'}`}></div>

                <div className={`p-8 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border border-gray-700/50' 
                    : 'bg-white/70 border border-gray-200/50'
                } backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105`}>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.role}
                      </h3>
                      <p className="text-blue-500 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {exp.period}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center p-8 rounded-xl ${
            isDarkMode 
              ? 'bg-gray-800/30 border border-gray-700/30' 
              : 'bg-white/50 border border-gray-200/30'
          } backdrop-blur-md`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Build Something Amazing Together
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Ready to bring my expertise to your next project and help scale your technology solutions.
            </p>
            <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
              isDarkMode
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            } shadow-lg hover:shadow-xl hover:-translate-y-1`}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience; 