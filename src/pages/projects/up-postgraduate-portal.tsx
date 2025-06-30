import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const UPPostgraduatePortalProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                Full-Stack
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Maintenance
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              Universidad Panamericana Postgraduate Portal
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A comprehensive management platform for Universidad Panamericana&apos;s postgraduate programs, streamlining academic operations and enhancing student experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2023</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Impact</h3>
                <p style={{ color: 'var(--text-secondary)' }}>50+ postgraduate programs</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Support & Enhancement Developer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Joined an existing project to provide ongoing support and feature enhancements for Universidad Panamericana's 
                postgraduate portal. The platform manages academic projects, school programs, and postgraduate offerings 
                with an integrated coffee break management system.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Implemented email notification services and enhanced the coffee break management system to streamline 
                academic event coordination and communication between faculty and students.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  'Postgraduate Program Management',
                  'Academic Project Tracking',
                  'School & Faculty Coordination',
                  'Coffee Break Event System',
                  'Email Notification Services',
                  'Student Enrollment Portal',
                  'Faculty Resource Management',
                  'Administrative Dashboard'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Express.js', category: 'Backend Framework' },
                { name: 'React', category: 'Frontend' },
                { name: 'Node.js', category: 'Runtime' },
                { name: 'IIS', category: 'Web Server' },
                { name: 'SQL Server', category: 'Database' },
                { name: 'Nodemailer', category: 'Email Service' }
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              My Contributions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Email Service Integration
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Implemented comprehensive email notification system using Nodemailer to automate 
                  communication for program updates, event notifications, and administrative alerts.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Coffee Break Management
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Enhanced the existing coffee break system with better scheduling, participant management, 
                  and integration with the main academic calendar.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  System Maintenance
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Provided ongoing technical support, bug fixes, and performance optimizations 
                  to ensure platform stability and user satisfaction.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Feature Enhancements
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Added new functionality to improve user experience and administrative efficiency 
                  based on faculty and student feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Project Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>50+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Postgraduate Programs</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Managed through the platform</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>100%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email Delivery Rate</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Reliable notification system</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>24/7</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>System Availability</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Continuous support and maintenance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Need Academic Platform Support?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Expert maintenance and enhancement services for educational technology platforms.
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
                Discuss Support Needs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UPPostgraduatePortalProject; 