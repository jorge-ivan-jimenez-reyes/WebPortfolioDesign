import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const AISocialMediaProject = () => {
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
                Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                In Progress
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              AI-Powered Social Media Platform
            </h1>
            
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Scalable Architecture with AI Content Generation & Real-time Interactions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2024</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Scale</h3>
                <p style={{ color: 'var(--text-secondary)' }}>100K+ concurrent users</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Cloud Architect</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Architecture Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Designed a cutting-edge social media platform that leverages artificial intelligence to generate 
                engaging content including posts, videos, and interactions. The platform uses AWS Cognito for 
                secure authentication and EC2 instances with application load balancing for high availability.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Currently implementing a monolithic architecture that will evolve into microservices as the 
                platform scales, ensuring optimal performance and maintainability.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  'AI-Generated Content Creation',
                  'Real-time Video Processing',
                  'Scalable User Authentication',
                  'Auto-scaling Infrastructure',
                  'Content Recommendation Engine',
                  'Real-time Notifications',
                  'Media Storage & CDN',
                  'Analytics & Monitoring'
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'AWS Cognito', category: 'Authentication' },
                { name: 'EC2', category: 'Compute' },
                { name: 'Load Balancer', category: 'Networking' },
                { name: 'Lambda', category: 'Serverless' },
                { name: 'S3', category: 'Storage' },
                { name: 'RDS', category: 'Database' },
                { name: 'CloudFront', category: 'CDN' },
                { name: 'OpenAI API', category: 'AI/ML' }
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
              Architecture Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  AI Content Generation
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Integrated advanced AI models to generate personalized content, videos, and interactions. 
                  Lambda functions handle AI processing while S3 stores generated media content.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Scalable Authentication
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  AWS Cognito provides secure, scalable user authentication with social login integration 
                  and advanced security features like MFA and user pool management.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>100K+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Concurrent Users</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Supported simultaneously with auto-scaling</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>50ms</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>API Response Time</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Average response time for content delivery</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>99.9%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Uptime Target</h4>
                <p style={{ color: 'var(--text-secondary)' }}>High availability with load balancing</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss how I can help architect your next scalable platform.
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

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Something Amazing Together
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AISocialMediaProject; 