import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const AdobePartnerClubProject = () => {
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
                Frontend
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Completed
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              Adobe Partner Club Platform
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A comprehensive partner platform built for Adobe&apos;s ecosystem, featuring user management, resource sharing, and collaborative tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2024</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Impact</h3>
                <p style={{ color: 'var(--text-secondary)' }}>200+ active partners</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Full-Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Developed an interactive platform for Adobe partners built with Next.js, featuring comprehensive 
                member management, resource sharing, and collaboration tools. The platform serves as a central 
                hub for Adobe's partner ecosystem to connect, share resources, and collaborate on projects.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Successfully onboarded 200+ active partners and created a thriving community space 
                that facilitates knowledge sharing and business networking within the Adobe ecosystem.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Platform Features
              </h2>
              <ul className="space-y-4">
                {[
                  'Partner Member Management',
                  'Resource Library & Sharing',
                  'Collaboration Tools',
                  'Project Showcase Gallery',
                  'Community Forums',
                  'Event Management',
                  'Partner Directory',
                  'Certification Tracking'
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
                { name: 'Next.js', category: 'Framework' },
                { name: 'React', category: 'Frontend Library' },
                { name: 'TypeScript', category: 'Language' },
                { name: 'Tailwind CSS', category: 'Styling' },
                { name: 'Prisma', category: 'ORM' },
                { name: 'PostgreSQL', category: 'Database' }
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
              Key Implementations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Member Management System
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Built comprehensive partner onboarding and management system with role-based access control, 
                  profile management, and partner verification workflows using Prisma and PostgreSQL.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Resource Collaboration
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Implemented file sharing, document collaboration, and project showcase features 
                  with real-time updates and version control for seamless partner collaboration.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Modern UI/UX Design
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Designed responsive, accessible interface using Tailwind CSS with Adobe brand guidelines, 
                  ensuring consistent user experience across desktop and mobile devices.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Performance Optimization
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Leveraged Next.js features like SSR, static generation, and image optimization 
                  to deliver fast loading times and excellent SEO performance.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Platform Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>200+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Active Partners</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Engaged community members</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>95%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>User Satisfaction</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Based on platform feedback</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>1000+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Resources Shared</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Through the platform</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Need a Partner Community Platform?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring our expertise to your next project and help scale your technology solutions.
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
                Discuss Your Platform
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdobePartnerClubProject; 