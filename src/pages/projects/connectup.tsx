import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const ConnectUpProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                Full-Stack
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Completed
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              ConnectUP
            </h1>
            
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Academic Management Platform for Engineering Universities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2023</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Impact</h3>
                <p style={{ color: 'var(--text-secondary)' }}>500+ professors, 10K+ students</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                ConnectUP is a comprehensive platform designed to revolutionize academic management in engineering universities. 
                The platform optimizes the coordination between academies, professors, schedules, classes, and subjects, 
                creating a seamless workflow for academic institutions.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Built with scalability in mind, the platform handles complex scheduling algorithms, resource allocation, 
                and provides real-time insights for academic administrators and educators.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  'Dynamic Schedule Management',
                  'Professor-Academy Coordination',
                  'Real-time Class Allocation',
                  'Student Enrollment Tracking',
                  'Resource Optimization',
                  'Analytics Dashboard',
                  'Multi-role Access Control',
                  'Automated Notifications'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Django', category: 'Backend' },
                { name: 'React', category: 'Frontend' },
                { name: 'MySQL', category: 'Database' },
                { name: 'AWS', category: 'Cloud' },
                { name: 'Kubernetes', category: 'Orchestration' },
                { name: 'Docker', category: 'Containerization' },
                { name: 'Redis', category: 'Caching' },
                { name: 'Nginx', category: 'Web Server' }
              ].map((tech, index) => (
                <div key={index} className="p-4 rounded-lg border" style={{ 
                  borderColor: 'var(--border)',
                  backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
                }}>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{tech.name}</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Architecture Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Monolithic Architecture
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Implemented as a robust monolithic application with clear separation of concerns, 
                  ensuring reliable performance and simplified deployment for academic environments.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Kubernetes Orchestration
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Containerized deployment with Kubernetes for high availability, auto-scaling, 
                  and efficient resource management across multiple academic terms.
                </p>
              </div>
            </div>
          </div>

          {/* Impact & Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Impact & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>500+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Active Professors</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Managing their schedules and classes efficiently</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>10K+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Students Enrolled</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Across multiple engineering disciplines</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>95%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Schedule Efficiency</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Reduction in scheduling conflicts and errors</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Interested in Learning More?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Get in touch to discuss this project or explore collaboration opportunities.
            </p>
            <div className="space-x-4">
              <Link href="/projects" className="inline-block px-6 py-3 rounded-lg transition-colors duration-300" style={{
                backgroundColor: 'var(--accent)',
                color: 'white'
              }}>
                View All Projects
              </Link>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg border transition-colors duration-300" style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)'
              }}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConnectUpProject; 