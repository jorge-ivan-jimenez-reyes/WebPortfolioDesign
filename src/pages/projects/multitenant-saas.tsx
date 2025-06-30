import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const MultitenantSaaSProject = () => {
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Maintenance
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#15253B' }}>
              Multi-tenant SaaS Infrastructure
            </h1>
            
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Enterprise-Grade Security & Compliance for 1000+ Tenants
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2023</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Scale</h3>
                <p style={{ color: 'var(--text-secondary)' }}>1000+ enterprise tenants</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Security Architect</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Architecture Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Designed a comprehensive multi-tenant SaaS infrastructure with strict tenant isolation, 
                automated compliance monitoring, and enterprise-grade security controls. The architecture 
                supports 1000+ enterprise tenants with complete data segregation and audit capabilities.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Implemented using AWS Organizations and Control Tower for centralized governance, 
                with automated compliance checks and security monitoring across all tenant environments.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Security Features
              </h2>
              <ul className="space-y-4">
                {[
                  'Tenant-specific Data Isolation',
                  'Automated Compliance Monitoring',
                  'Enterprise SSO Integration',
                  'Advanced Threat Detection',
                  'Audit Trail & Logging',
                  'Encryption at Rest & Transit',
                  'Network Segmentation',
                  'Identity & Access Management'
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
                { name: 'AWS Organizations', category: 'Governance' },
                { name: 'Control Tower', category: 'Landing Zone' },
                { name: 'Transit Gateway', category: 'Networking' },
                { name: 'WAF', category: 'Security' },
                { name: 'Config', category: 'Compliance' },
                { name: 'CloudTrail', category: 'Auditing' },
                { name: 'GuardDuty', category: 'Threat Detection' },
                { name: 'KMS', category: 'Encryption' }
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
              Architecture Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Tenant Isolation
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Each tenant operates in a dedicated AWS account with complete resource isolation. 
                  Cross-account access is controlled through IAM roles and policies with principle of least privilege.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Compliance Automation
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  AWS Config rules automatically monitor compliance with security standards. 
                  Non-compliant resources are flagged and automatically remediated where possible.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Network Security
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Transit Gateway provides centralized connectivity with micro-segmentation. 
                  WAF and Shield protect against common web attacks and DDoS threats.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Monitoring & Alerting
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  CloudTrail logs all API calls across tenant accounts. GuardDuty provides 
                  intelligent threat detection with automated incident response workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>1000+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Enterprise Tenants</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Securely isolated and compliant</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>100%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Compliance Rate</h4>
                <p style={{ color: 'var(--text-secondary)' }}>SOC2, GDPR, HIPAA compliant</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>0</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Security Incidents</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Zero breaches with proactive monitoring</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Need Enterprise Security Architecture?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's design a secure, compliant infrastructure for your SaaS platform.
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
                Security Consultation
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

export default MultitenantSaaSProject; 