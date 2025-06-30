import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const MultitenantSaaSProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Hero Section with Enterprise Security Architecture */}
          <div className="mb-16 relative">
            {/* Security Network Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 900 700">
                <defs>
                  <pattern id="security-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" rx="8"/>
                    <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <path d="M25,25 L55,55 M55,25 L25,55" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#security-grid)" />
              </svg>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold sketch-border" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                🏗️ Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 sketch-border">
                🔧 Maintenance
              </span>
              {/* Security annotation */}
              <div className="absolute -top-8 right-0 transform rotate-3">
                <div className="bg-red-200 px-2 py-1 text-xs font-handwritten text-gray-800 sketch-border">
                  🔒 Enterprise Security
                  <div className="absolute -bottom-1 left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-200"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-excalidraw mb-6 relative" style={{ color: '#15253B' }}>
              Multi-tenant SaaS Infrastructure
              {/* Security shield underline */}
              <div className="absolute -bottom-2 left-0 w-full h-4 opacity-40">
                <svg viewBox="0 0 500 16" className="w-full h-full">
                  <path d="M5,8 Q125,3 250,8 T495,9" stroke="#15253B" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50,12 L70,12 M60,8 L60,16" stroke="#15253B" strokeWidth="2" opacity="0.5"/>
                  <path d="M200,12 L220,12 M210,8 L210,16" stroke="#15253B" strokeWidth="2" opacity="0.5"/>
                  <path d="M350,12 L370,12 M360,8 L360,16" stroke="#15253B" strokeWidth="2" opacity="0.5"/>
                </svg>
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              🛡️ Enterprise-Grade Security & Compliance for 1000+ Tenants
            </p>

            {/* Floating security annotation */}
            <div className="absolute -right-24 top-32 transform rotate-12 opacity-80">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-handwritten text-red-600">🔐 Zero Trust Architecture!</span>
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <path d="M5,20 Q40,10 70,20 L65,15 M70,20 L65,25" stroke="#dc2626" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <rect x="2" y="15" width="8" height="10" fill="none" stroke="#dc2626" strokeWidth="1" rx="2"/>
                </svg>
              </div>
            </div>

            {/* Enhanced Info Cards with Security Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
              {/* Security Connection Lines */}
              <div className="absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 opacity-50 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 opacity-30 hidden md:block transform translate-y-1"></div>
              
              <div className="sketch-card p-6 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform rotate-12">
                  📅
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>Project Year</h3>
                <p className="text-2xl font-bold text-blue-600">2023</p>
                <p className="text-sm text-blue-500">Security-First Design</p>
              </div>

              <div className="sketch-card p-6 bg-gradient-to-br from-red-50 to-pink-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform -rotate-12">
                  🏢
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>Scale</h3>
                <p className="text-lg font-bold text-red-600">1000+ tenants</p>
                <p className="text-sm text-red-500">enterprise grade</p>
              </div>

              <div className="sketch-card p-6 bg-gradient-to-br from-green-50 to-emerald-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform rotate-12">
                  🔒
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>My Role</h3>
                <p className="text-2xl font-bold text-green-600">Security Architect</p>
                <p className="text-sm text-green-500">Compliance Lead</p>
              </div>
            </div>
          </div>

          {/* Architecture Overview with Multi-tenant Security Diagram */}
          <div className="mb-16 relative">
            {/* Central Security Architecture Diagram */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  🏗️ Enterprise Security Architecture
                </h2>
                {/* Security control center indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center animate-pulse transform rotate-45">
                      🛡️
                    </div>
                    <div className="text-xs font-handwritten text-red-600 mt-1">Security Control Center</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                  Architecture Overview
                  {/* Compliance annotation */}
                  <div className="absolute -top-4 -right-8 transform rotate-12">
                    <div className="bg-green-200 px-3 py-2 text-xs font-handwritten text-gray-800 sketch-border">
                      ✅ SOC2 Compliant
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-b-8 border-transparent border-b-green-300"></div>
                    </div>
                  </div>
                </h3>
                
                <div className="sketch-card p-6 mb-6">
                  <p className="text-lg leading-relaxed mb-6 font-handwritten" style={{ color: 'var(--text-secondary)' }}>
                    Designed a comprehensive <span className="sketch-highlight">multi-tenant SaaS infrastructure</span> with strict tenant isolation, 
                    automated compliance monitoring, and <span className="sketch-highlight">enterprise-grade security controls</span>. The architecture 
                    supports 1000+ enterprise tenants with complete <span className="sketch-highlight">data segregation</span> and audit capabilities.
                  </p>
                  <p className="text-lg leading-relaxed font-handwritten" style={{ color: 'var(--text-secondary)' }}>
                    Implemented using <span className="sketch-highlight">AWS Organizations</span> and <span className="sketch-highlight">Control Tower</span> for centralized governance, 
                    with automated compliance checks and security monitoring across all tenant environments.
                  </p>
                </div>

                {/* Security metrics sticky note */}
                <div className="absolute -bottom-4 right-8 transform rotate-3">
                  <div className="bg-orange-200 p-3 text-sm font-handwritten text-gray-800 sketch-border max-w-48">
                    🎯 100% compliance rate, 0 security incidents!
                    <div className="absolute -top-2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                  🔒 Security Controls Matrix
                </h3>
                <div className="sketch-card p-6">
                  <div className="space-y-4">
                    {[
                      { feature: 'Tenant-specific Data Isolation', icon: '🏠', color: 'bg-blue-100 text-blue-600', level: 'Critical' },
                      { feature: 'Automated Compliance Monitoring', icon: '🔍', color: 'bg-green-100 text-green-600', level: 'High' },
                      { feature: 'Enterprise SSO Integration', icon: '🔑', color: 'bg-purple-100 text-purple-600', level: 'High' },
                      { feature: 'Advanced Threat Detection', icon: '🚨', color: 'bg-red-100 text-red-600', level: 'Critical' },
                      { feature: 'Audit Trail & Logging', icon: '📝', color: 'bg-yellow-100 text-yellow-600', level: 'Medium' },
                      { feature: 'Encryption at Rest & Transit', icon: '🔐', color: 'bg-indigo-100 text-indigo-600', level: 'Critical' },
                      { feature: 'Network Segmentation', icon: '🏗️', color: 'bg-orange-100 text-orange-600', level: 'High' },
                      { feature: 'Identity & Access Management', icon: '👤', color: 'bg-pink-100 text-pink-600', level: 'Critical' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 relative group">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color} font-bold sketch-border hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-handwritten font-semibold" style={{ color: 'var(--text-secondary)' }}>{item.feature}</span>
                          <div className={`text-xs px-2 py-1 rounded-full inline-block ml-2 ${
                            item.level === 'Critical' ? 'bg-red-100 text-red-600' :
                            item.level === 'High' ? 'bg-orange-100 text-orange-600' :
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            {item.level}
                          </div>
                        </div>
                        {/* Security flow indicators */}
                        {index < 7 && (
                          <svg className="absolute left-5 top-12" width="20" height="15">
                            <path d="M4,2 L4,10 L15,10 M12,7 L15,10 L12,13" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round"/>
                          </svg>
                        )}
                        {/* Compliance badges */}
                        {index % 3 === 0 && (
                          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                              ✓
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack with Security Focus */}
          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                🛠️ Enterprise Security Technology Stack
              </h2>
              {/* Security Doodles */}
              <div className="absolute top-0 left-8 transform -rotate-12 opacity-60">
                <svg width="60" height="40">
                  <rect x="10" y="15" width="40" height="20" fill="none" stroke="#dc2626" strokeWidth="2" rx="5"/>
                  <circle cx="30" cy="25" r="5" fill="none" stroke="#dc2626" strokeWidth="2"/>
                  <path d="M25,25 L35,25" stroke="#dc2626" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute top-0 right-8 transform rotate-12 opacity-60">
                <svg width="60" height="40">
                  <path d="M15,25 Q30,15 45,25" stroke="#059669" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="20" r="3" fill="#059669"/>
                  <path d="M20,30 L40,30" stroke="#059669" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              {/* Security Architecture Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-15">
                <svg className="w-full h-full">
                  <path d="M25%,20% Q50%,5% 75%,20%" stroke="#dc2626" strokeWidth="4" fill="none" strokeDasharray="10,5"/>
                  <path d="M25%,80% Q50%,95% 75%,80%" stroke="#059669" strokeWidth="4" fill="none" strokeDasharray="10,5"/>
                  <circle cx="25%" cy="20%" r="6" fill="#dc2626"/>
                  <circle cx="75%" cy="20%" r="6" fill="#dc2626"/>
                  <circle cx="25%" cy="80%" r="6" fill="#059669"/>
                  <circle cx="75%" cy="80%" r="6" fill="#059669"/>
                </svg>
              </div>

              {[
                { name: 'AWS Organizations', category: 'Governance', icon: '🏢', color: 'from-blue-400 to-indigo-500', securityLevel: 5, compliance: 'SOC2' },
                { name: 'Control Tower', category: 'Landing Zone', icon: '🗼', color: 'from-cyan-400 to-blue-500', securityLevel: 5, compliance: 'GDPR' },
                { name: 'Transit Gateway', category: 'Networking', icon: '🌐', color: 'from-green-400 to-emerald-500', securityLevel: 4, compliance: 'HIPAA' },
                { name: 'WAF', category: 'Security', icon: '🛡️', color: 'from-red-400 to-pink-500', securityLevel: 5, compliance: 'PCI' },
                { name: 'Config', category: 'Compliance', icon: '⚙️', color: 'from-yellow-400 to-orange-500', securityLevel: 4, compliance: 'SOC2' },
                { name: 'CloudTrail', category: 'Auditing', icon: '📊', color: 'from-purple-400 to-indigo-500', securityLevel: 5, compliance: 'All' },
                { name: 'GuardDuty', category: 'Threat Detection', icon: '🔍', color: 'from-orange-400 to-red-500', securityLevel: 5, compliance: 'SOX' },
                { name: 'KMS', category: 'Encryption', icon: '🔐', color: 'from-indigo-400 to-purple-500', securityLevel: 5, compliance: 'FIPS' }
              ].map((tech, index) => (
                <div key={index} className={`sketch-card p-4 bg-gradient-to-br ${tech.color} text-white relative transform hover:rotate-1 transition-transform group`}>
                  {/* Security Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  
                  <h4 className="font-semibold mb-1 font-handwritten text-lg">{tech.name}</h4>
                  <p className="text-sm opacity-90 mb-2">{tech.category}</p>
                  <div className="text-xs opacity-80 mb-2">{tech.compliance} compliant</div>
                  
                  {/* Security Level Indicators */}
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < tech.securityLevel ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Security badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      SECURE
                    </div>
                  </div>

                  {/* Security connection lines */}
                  {(index === 1 || index === 5) && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <svg width="30" height="30">
                        <path d="M15,2 L15,22 M12,19 L15,22 L18,19" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="15" cy="25" r="3" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Security annotation */}
            <div className="absolute -bottom-20 left-8 transform -rotate-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-red-600">🔒 Zero trust architecture with defense in depth!</span>
                <svg width="50" height="25">
                  <path d="M5,12 Q25,5 40,12" stroke="#dc2626" strokeWidth="2" fill="none"/>
                  <rect x="2" y="8" width="6" height="8" fill="none" stroke="#dc2626" strokeWidth="1" rx="1"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Architecture Components with Security Diagrams */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🎯 Security Architecture Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Tenant Isolation',
                  description: 'Each tenant operates in a dedicated AWS account with complete resource isolation. Cross-account access is controlled through IAM roles and policies with principle of least privilege.',
                  icon: '🏠',
                  color: 'from-blue-50 to-cyan-100',
                  badge: '🔐',
                  diagram: 'tenant-isolation'
                },
                {
                  title: 'Compliance Automation',
                  description: 'AWS Config rules automatically monitor compliance with security standards. Non-compliant resources are flagged and automatically remediated where possible.',
                  icon: '✅',
                  color: 'from-green-50 to-emerald-100',
                  badge: '📋',
                  diagram: 'compliance'
                },
                {
                  title: 'Network Security',
                  description: 'Transit Gateway provides centralized connectivity with micro-segmentation. WAF and Shield protect against common web attacks and DDoS threats.',
                  icon: '🌐',
                  color: 'from-orange-50 to-red-100',
                  badge: '🛡️',
                  diagram: 'network'
                },
                {
                  title: 'Monitoring & Alerting',
                  description: 'CloudTrail logs all API calls across tenant accounts. GuardDuty provides intelligent threat detection with automated incident response workflows.',
                  icon: '📊',
                  color: 'from-purple-50 to-indigo-100',
                  badge: '🚨',
                  diagram: 'monitoring'
                }
              ].map((component, index) => (
                <div key={index} className={`sketch-card p-6 bg-gradient-to-br ${component.color} relative`}>
                  {/* Security Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                    {component.badge}
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{component.icon}</div>
                    <h3 className="text-xl font-semibold font-handwritten" style={{ color: 'var(--text-primary)' }}>
                      {component.title}
                    </h3>
                  </div>
                  
                  <p className="font-handwritten mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {component.description}
                  </p>
                  
                  {/* Security Architecture Diagram */}
                  <div className="mt-4 p-3 bg-white/80 rounded-lg">
                    {component.diagram === 'tenant-isolation' && (
                      <div className="flex justify-between items-center text-xs">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg mb-1 flex items-center justify-center text-white font-bold">T1</div>
                          <span>Tenant 1</span>
                        </div>
                        <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-lg mb-1 flex items-center justify-center text-white font-bold">T2</div>
                          <span>Tenant 2</span>
                        </div>
                        <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg mb-1 flex items-center justify-center text-white font-bold">T3</div>
                          <span>Tenant 3</span>
                        </div>
                      </div>
                    )}
                    {component.diagram === 'compliance' && (
                      <div className="flex items-center justify-center space-x-2 text-xs">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                        <span>Monitor</span>
                        <svg width="20" height="10">
                          <path d="M2,5 L18,5 M15,2 L18,5 L15,8" stroke="#059669" strokeWidth="1" fill="none"/>
                        </svg>
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">!</div>
                        <span>Remediate</span>
                      </div>
                    )}
                    {component.diagram === 'network' && (
                      <div className="text-center">
                        <div className="flex justify-center items-center space-x-2 mb-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <span className="text-xs">WAF</span>
                          <svg width="15" height="10">
                            <path d="M2,5 L13,5 M10,2 L13,5 L10,8" stroke="#dc2626" strokeWidth="1" fill="none"/>
                          </svg>
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span className="text-xs">VPC</span>
                        </div>
                      </div>
                    )}
                    {component.diagram === 'monitoring' && (
                      <div className="flex justify-center items-center space-x-2 text-xs">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">📊</div>
                        <svg width="20" height="10">
                          <path d="M2,5 L18,5 M15,2 L18,5 L15,8" stroke="#7c3aed" strokeWidth="1" fill="none"/>
                        </svg>
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">🚨</div>
                      </div>
                    )}
                  </div>

                  {/* Security connection arrows on alternating items */}
                  {index % 2 === 0 && (
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-45">
                      <svg width="35" height="35">
                        <path d="M5,17 L25,17 M22,14 L25,17 L22,20" stroke="#6b7280" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics with Enhanced Security Dashboard */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              📊 Security & Compliance Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  value: '1000+', 
                  label: 'Enterprise Tenants', 
                  description: 'Securely isolated and compliant',
                  color: 'text-blue-600',
                  bgColor: 'from-blue-50 to-cyan-100',
                  icon: '🏢',
                  trend: '+200%',
                  status: 'SECURE'
                },
                { 
                  value: '100%', 
                  label: 'Compliance Rate', 
                  description: 'SOC2, GDPR, HIPAA compliant',
                  color: 'text-green-600',
                  bgColor: 'from-green-50 to-emerald-100',
                  icon: '✅',
                  trend: '100%',
                  status: 'COMPLIANT'
                },
                { 
                  value: '0', 
                  label: 'Security Incidents', 
                  description: 'Zero breaches with proactive monitoring',
                  color: 'text-red-600',
                  bgColor: 'from-red-50 to-pink-100',
                  icon: '🛡️',
                  trend: '0',
                  status: 'PROTECTED'
                }
              ].map((metric, index) => (
                <div key={index} className={`sketch-card text-center p-6 bg-gradient-to-br ${metric.bgColor} relative`}>
                  {/* Floating Icon with Security Status */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg sketch-border">
                      {metric.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {metric.status}
                    </div>
                  </div>
                  
                  <div className={`text-4xl font-black mb-2 mt-4 ${metric.color} font-excalidraw`}>{metric.value}</div>
                  <h4 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>{metric.label}</h4>
                  <p className="text-sm font-handwritten" style={{ color: 'var(--text-secondary)' }}>{metric.description}</p>
                  
                  {/* Security progress bar */}
                  <div className="mt-4 bg-white rounded-full h-3 overflow-hidden shadow-inner">
                    <div 
                      className={`h-full bg-gradient-to-r ${metric.color.replace('text-', 'from-').replace('-600', '-400')} ${metric.color.replace('text-', 'to-').replace('-600', '-600')} relative`}
                      style={{ width: index === 0 ? '95%' : index === 1 ? '100%' : '100%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Security rating dots */}
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-green-400"
                      />
                    ))}
                  </div>
                  
                  {/* Compliance badges */}
                  <div className="mt-3 flex justify-center space-x-1">
                    {['SOC2', 'GDPR', 'HIPAA'].map((cert, i) => (
                      <div key={i} className="text-xs bg-white px-2 py-1 rounded-full font-bold text-gray-600">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action with Security Theme */}
          <div className="text-center relative">
            {/* Security architecture arrows */}
            <div className="absolute -left-24 top-8 transform -rotate-12">
              <div className="flex items-center space-x-2">
                <svg width="70" height="35">
                  <rect x="5" y="10" width="25" height="15" fill="none" stroke="#dc2626" strokeWidth="2" rx="3"/>
                  <path d="M30,17 L55,17 M52,14 L55,17 L52,20" stroke="#dc2626" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-handwritten text-red-600">Secure it!</span>
              </div>
            </div>
            
            <div className="absolute -right-24 top-8 transform rotate-12">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-green-600">Protect it!</span>
                <svg width="70" height="35">
                  <path d="M15,17 L40,17 M37,14 L40,17 L37,20" stroke="#059669" strokeWidth="2" fill="none"/>
                  <rect x="45" y="10" width="25" height="15" fill="none" stroke="#059669" strokeWidth="2" rx="3"/>
                  <circle cx="57" cy="17" r="3" fill="#059669"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Need Enterprise Security Architecture? 🔒
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring our expertise to your next project and help scale your technology solutions.
            </p>
            <div className="space-x-4">
              <Link href="/projects" className="sketch-button inline-block px-6 py-3 rounded-lg transition-colors duration-300 relative" style={{
                backgroundColor: 'var(--accent)',
                color: 'white'
              }}>
                🎯 View All Projects
                <div className="absolute -bottom-2 left-0 w-full h-1 opacity-60">
                  <svg viewBox="0 0 150 4" className="w-full h-full">
                    <path d="M2,2 Q75,1 148,2" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </Link>
              <Link href="/contact" className="sketch-button inline-block px-6 py-3 rounded-lg border transition-colors duration-300" style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)'
              }}>
                🔒 Security Consultation
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Something Amazing Together 🌟
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MultitenantSaaSProject; 