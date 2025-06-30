import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const MicroservicesEcommerceProject = () => {
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Completed
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              Microservices E-commerce Platform
            </h1>
            
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Event-Driven Architecture for High-Traffic E-commerce Solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2024</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Performance</h3>
                <p style={{ color: 'var(--text-secondary)' }}>99.9% uptime, 500% scalability</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Solutions Architect</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Architecture Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Built a comprehensive microservices architecture for high-traffic e-commerce operations. 
                The platform leverages AWS EKS for container orchestration, API Gateway for service mesh, 
                and EventBridge for event-driven communication between services.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Designed for elasticity and fault tolerance, the system automatically scales based on demand 
                and maintains service isolation to prevent cascading failures.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Microservices
              </h2>
              <ul className="space-y-4">
                {[
                  'User Management Service',
                  'Product Catalog Service',
                  'Order Processing Service',
                  'Payment Gateway Service',
                  'Inventory Management',
                  'Notification Service',
                  'Analytics Service',
                  'Search & Recommendation'
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{service}</span>
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
                { name: 'AWS EKS', category: 'Orchestration' },
                { name: 'API Gateway', category: 'Service Mesh' },
                { name: 'EventBridge', category: 'Event Streaming' },
                { name: 'ElastiCache', category: 'Caching' },
                { name: 'RDS Aurora', category: 'Database' },
                { name: 'CloudWatch', category: 'Monitoring' },
                { name: 'Docker', category: 'Containerization' },
                { name: 'Terraform', category: 'IaC' }
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
              Architecture Patterns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Event-Driven Architecture
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Implemented CQRS and Event Sourcing patterns with AWS EventBridge to ensure 
                  loose coupling between services and eventual consistency across the platform.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Auto-Scaling & Load Balancing
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Kubernetes HPA and VPA ensure optimal resource utilization while Application 
                  Load Balancers distribute traffic efficiently across service instances.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Performance Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>99.9%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Uptime Achieved</h4>
                <p style={{ color: 'var(--text-secondary)' }}>With fault-tolerant microservices design</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>500%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Scalability Improvement</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Compared to monolithic architecture</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>40%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Cost Reduction</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Through optimized resource utilization</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Need Scalable E-commerce Solutions?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's architect a platform that grows with your business.
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
                Discuss Your Project
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

export default MicroservicesEcommerceProject; 