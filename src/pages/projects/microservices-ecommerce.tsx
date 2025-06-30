import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const MicroservicesEcommerceProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Hero Section with Microservices Architecture Blueprint */}
          <div className="mb-16 relative">
            {/* Microservices Network Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                <defs>
                  <pattern id="microservices-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="8" fill="currentColor"/>
                    <line x1="30" y1="0" x2="30" y2="60" stroke="currentColor" strokeWidth="1"/>
                    <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#microservices-grid)" />
              </svg>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold sketch-border" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                🏗️ Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 sketch-border">
                ✅ Completed
              </span>
              {/* Microservices annotation */}
              <div className="absolute -top-8 right-0 transform rotate-3">
                <div className="bg-blue-200 px-2 py-1 text-xs font-handwritten text-gray-800 sketch-border">
                  🔧 Microservices Magic
                  <div className="absolute -bottom-1 left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-200"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-excalidraw mb-6 relative" style={{ color: '#15253B' }}>
              Microservices E-commerce Platform
              {/* Service mesh underline */}
              <div className="absolute -bottom-2 left-0 w-full h-3 opacity-40">
                <svg viewBox="0 0 400 12" className="w-full h-full">
                  <path d="M5,6 Q100,2 200,6 T395,7" stroke="#15253B" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M5,8 Q100,4 200,8 T395,9" stroke="#15253B" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              🚀 Event-Driven Architecture for High-Traffic E-commerce Solutions
            </p>

            {/* Floating architecture annotation */}
            <div className="absolute -right-20 top-32 transform rotate-12 opacity-80">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-handwritten text-emerald-600">⚡ Scalable & Resilient!</span>
                <svg width="70" height="35" viewBox="0 0 70 35">
                  <path d="M5,18 Q35,8 60,18 L55,13 M60,18 L55,23" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Enhanced Info Cards with Service Connections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
              {/* Service Connection Lines */}
              <div className="absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-orange-400 via-red-500 to-purple-400 opacity-50 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400 opacity-30 hidden md:block transform translate-y-1"></div>
              
              <div className="sketch-card p-6 bg-gradient-to-br from-orange-50 to-red-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform rotate-12">
                  📅
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>Project Year</h3>
                <p className="text-2xl font-bold text-orange-600">2024</p>
                <p className="text-sm text-orange-500">Modern Architecture</p>
              </div>

              <div className="sketch-card p-6 bg-gradient-to-br from-green-50 to-emerald-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform -rotate-12">
                  📈
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>Performance</h3>
                <p className="text-lg font-bold text-green-600">99.9% uptime</p>
                <p className="text-sm text-green-500">500% scalability boost</p>
              </div>

              <div className="sketch-card p-6 bg-gradient-to-br from-purple-50 to-indigo-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform rotate-12">
                  👨‍💻
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>My Role</h3>
                <p className="text-2xl font-bold text-purple-600">Solutions Architect</p>
                <p className="text-sm text-purple-500">System Designer</p>
              </div>
            </div>
          </div>

          {/* Architecture Overview with Microservices Diagram */}
          <div className="mb-16 relative">
            {/* Central Microservices Diagram */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  🏗️ Microservices Architecture Diagram
                </h2>
                {/* Central hub indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      🔗
                    </div>
                    <div className="text-xs font-handwritten text-blue-600 mt-1">Service Mesh</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                  Architecture Overview
                  {/* Event-driven annotation */}
                  <div className="absolute -top-4 -right-8 transform rotate-12">
                    <div className="bg-cyan-200 px-3 py-2 text-xs font-handwritten text-gray-800 sketch-border">
                      ⚡ Event-Driven
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-b-8 border-transparent border-b-cyan-300"></div>
                    </div>
                  </div>
                </h3>
                
                <div className="sketch-card p-6 mb-6">
                  <p className="text-lg leading-relaxed mb-6 font-handwritten" style={{ color: 'var(--text-secondary)' }}>
                    Built a comprehensive <span className="sketch-highlight">microservices architecture</span> for high-traffic e-commerce operations. 
                    The platform leverages <span className="sketch-highlight">AWS EKS</span> for container orchestration, <span className="sketch-highlight">API Gateway</span> for service mesh, 
                    and <span className="sketch-highlight">EventBridge</span> for event-driven communication between services.
                  </p>
                  <p className="text-lg leading-relaxed font-handwritten" style={{ color: 'var(--text-secondary)' }}>
                    Designed for <span className="sketch-highlight">elasticity and fault tolerance</span>, the system automatically scales based on demand 
                    and maintains service isolation to prevent cascading failures.
                  </p>
                </div>

                {/* Sticky Note with Technical Metrics */}
                <div className="absolute -bottom-4 right-8 transform rotate-3">
                  <div className="bg-yellow-200 p-3 text-sm font-handwritten text-gray-800 sketch-border max-w-48">
                    🚀 40% cost reduction through smart scaling!
                    <div className="absolute -top-2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                  🔧 Microservices Architecture
                </h3>
                <div className="sketch-card p-6">
                  <div className="space-y-4">
                    {[
                      { service: 'User Management Service', icon: '👥', color: 'bg-blue-100 text-blue-600', api: '/api/users' },
                      { service: 'Product Catalog Service', icon: '📦', color: 'bg-green-100 text-green-600', api: '/api/products' },
                      { service: 'Order Processing Service', icon: '🛒', color: 'bg-orange-100 text-orange-600', api: '/api/orders' },
                      { service: 'Payment Gateway Service', icon: '💳', color: 'bg-purple-100 text-purple-600', api: '/api/payments' },
                      { service: 'Inventory Management', icon: '📊', color: 'bg-red-100 text-red-600', api: '/api/inventory' },
                      { service: 'Notification Service', icon: '📧', color: 'bg-yellow-100 text-yellow-600', api: '/api/notifications' },
                      { service: 'Analytics Service', icon: '📈', color: 'bg-indigo-100 text-indigo-600', api: '/api/analytics' },
                      { service: 'Search & Recommendation', icon: '🔍', color: 'bg-pink-100 text-pink-600', api: '/api/search' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 relative group">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color} font-bold sketch-border hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-handwritten font-semibold" style={{ color: 'var(--text-secondary)' }}>{item.service}</span>
                          <div className="text-xs text-gray-500 font-mono">{item.api}</div>
                        </div>
                        {/* Service communication arrows */}
                        {index < 7 && (
                          <svg className="absolute left-5 top-10" width="20" height="15">
                            <path d="M4,2 L4,10 L15,10 M12,7 L15,10 L12,13" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round"/>
                          </svg>
                        )}
                        {/* Event flow indicators */}
                        {index % 2 === 0 && (
                          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                              E
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

          {/* Technology Stack with Advanced Service Architecture */}
          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                🛠️ Cloud-Native Technology Stack
              </h2>
              {/* Orchestration Doodles */}
              <div className="absolute top-0 left-8 transform -rotate-12 opacity-60">
                <svg width="50" height="35">
                  <circle cx="15" cy="15" r="8" fill="none" stroke="#6366f1" strokeWidth="2"/>
                  <circle cx="35" cy="20" r="6" fill="none" stroke="#6366f1" strokeWidth="2"/>
                  <line x1="23" y1="15" x2="29" y2="20" stroke="#6366f1" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute top-0 right-8 transform rotate-12 opacity-60">
                <svg width="50" height="35">
                  <rect x="5" y="10" width="40" height="15" fill="none" stroke="#10b981" strokeWidth="2" rx="3"/>
                  <line x1="15" y1="17" x2="35" y2="17" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              {/* Kubernetes Orchestration Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full">
                  <path d="M20%,30% Q50%,10% 80%,30%" stroke="#6366f1" strokeWidth="3" fill="none" strokeDasharray="8,4"/>
                  <path d="M20%,70% Q50%,90% 80%,70%" stroke="#10b981" strokeWidth="3" fill="none" strokeDasharray="8,4"/>
                  <circle cx="20%" cy="30%" r="4" fill="#6366f1"/>
                  <circle cx="80%" cy="30%" r="4" fill="#6366f1"/>
                  <circle cx="20%" cy="70%" r="4" fill="#10b981"/>
                  <circle cx="80%" cy="70%" r="4" fill="#10b981"/>
                </svg>
              </div>

              {[
                { name: 'AWS EKS', category: 'Orchestration', icon: '☸️', color: 'from-blue-400 to-indigo-500', complexity: 5, deployment: 'Kubernetes' },
                { name: 'API Gateway', category: 'Service Mesh', icon: '🌐', color: 'from-cyan-400 to-blue-500', complexity: 4, deployment: 'AWS' },
                { name: 'EventBridge', category: 'Event Streaming', icon: '⚡', color: 'from-orange-400 to-red-500', complexity: 3, deployment: 'Serverless' },
                { name: 'ElastiCache', category: 'Caching', icon: '🚀', color: 'from-green-400 to-emerald-500', complexity: 3, deployment: 'Redis' },
                { name: 'RDS Aurora', category: 'Database', icon: '💽', color: 'from-purple-400 to-pink-500', complexity: 4, deployment: 'MySQL' },
                { name: 'CloudWatch', category: 'Monitoring', icon: '📊', color: 'from-yellow-400 to-orange-500', complexity: 3, deployment: 'AWS' },
                { name: 'Docker', category: 'Containerization', icon: '🐳', color: 'from-indigo-400 to-purple-500', complexity: 4, deployment: 'Containers' },
                { name: 'Terraform', category: 'IaC', icon: '🏗️', color: 'from-teal-400 to-cyan-500', complexity: 5, deployment: 'Infrastructure' }
              ].map((tech, index) => (
                <div key={index} className={`sketch-card p-4 bg-gradient-to-br ${tech.color} text-white relative transform hover:rotate-1 transition-transform group`}>
                  {/* Service Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  
                  <h4 className="font-semibold mb-1 font-handwritten text-lg">{tech.name}</h4>
                  <p className="text-sm opacity-90 mb-2">{tech.category}</p>
                  <div className="text-xs opacity-80 mb-2">{tech.deployment}</div>
                  
                  {/* Complexity Level Indicators */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < tech.complexity ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Container orchestration arrows */}
                  {(index === 0 || index === 6) && (
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <svg width="25" height="25">
                        <path d="M12,2 L12,18 M9,15 L12,18 L15,15" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="20" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Technical annotation */}
            <div className="absolute -bottom-16 left-8 transform -rotate-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-blue-600">🔧 Auto-scaling with Kubernetes HPA!</span>
                <svg width="40" height="20">
                  <path d="M5,10 Q20,5 35,10" stroke="#2563eb" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Architecture Patterns with Event Flow Diagrams */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🎯 Architecture Patterns & Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="sketch-card p-6 bg-gradient-to-br from-cyan-50 to-blue-100 relative">
                {/* Event flow diagram */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white transform rotate-12">
                  ⚡
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-handwritten text-cyan-800">
                  Event-Driven Architecture
                </h3>
                <p className="font-handwritten text-cyan-700 mb-4">
                  Implemented <span className="sketch-highlight">CQRS and Event Sourcing</span> patterns with AWS EventBridge to ensure 
                  loose coupling between services and eventual consistency across the platform.
                </p>
                
                {/* Event flow visualization */}
                <div className="mt-4 p-3 bg-white/80 rounded-lg">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
                      <span className="mt-1 font-handwritten">Service</span>
                    </div>
                    <svg width="40" height="20">
                      <path d="M5,10 L30,10 M27,7 L30,10 L27,13" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
                    </svg>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">E</div>
                      <span className="mt-1 font-handwritten">Event</span>
                    </div>
                    <svg width="40" height="20">
                      <path d="M5,10 L30,10 M27,7 L30,10 L27,13" stroke="#f97316" strokeWidth="2" fill="none"/>
                    </svg>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
                      <span className="mt-1 font-handwritten">Consumer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="sketch-card p-6 bg-gradient-to-br from-green-50 to-emerald-100 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white transform -rotate-12">
                  📊
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-handwritten text-emerald-800">
                  Auto-Scaling & Load Balancing
                </h3>
                <p className="font-handwritten text-emerald-700 mb-4">
                  <span className="sketch-highlight">Kubernetes HPA and VPA</span> ensure optimal resource utilization while Application 
                  Load Balancers distribute traffic efficiently across service instances.
                </p>
                
                {/* Load balancing visualization */}
                <div className="mt-4 p-3 bg-white/80 rounded-lg">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">LB</div>
                    <div className="flex justify-center space-x-4 mt-2">
                      {[1,2,3].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                          <svg width="20" height="15">
                            <line x1="10" y1="0" x2="10" y2="15" stroke="#10b981" strokeWidth="2"/>
                          </svg>
                          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Results with Enhanced Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              📊 Performance Results Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  value: '99.9%', 
                  label: 'Uptime Achieved', 
                  description: 'With fault-tolerant microservices design',
                  color: 'text-emerald-600',
                  bgColor: 'from-emerald-50 to-green-100',
                  icon: '🎯',
                  trend: '+2.1%'
                },
                { 
                  value: '500%', 
                  label: 'Scalability Improvement', 
                  description: 'Compared to monolithic architecture',
                  color: 'text-blue-600',
                  bgColor: 'from-blue-50 to-cyan-100',
                  icon: '🚀',
                  trend: '+450%'
                },
                { 
                  value: '40%', 
                  label: 'Cost Reduction', 
                  description: 'Through optimized resource utilization',
                  color: 'text-purple-600',
                  bgColor: 'from-purple-50 to-indigo-100',
                  icon: '💰',
                  trend: '-40%'
                }
              ].map((metric, index) => (
                <div key={index} className={`sketch-card text-center p-6 bg-gradient-to-br ${metric.bgColor} relative`}>
                  {/* Floating Icon with Trend */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg sketch-border">
                      {metric.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {metric.trend}
                    </div>
                  </div>
                  
                  <div className={`text-4xl font-black mb-2 mt-4 ${metric.color} font-excalidraw`}>{metric.value}</div>
                  <h4 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>{metric.label}</h4>
                  <p className="text-sm font-handwritten" style={{ color: 'var(--text-secondary)' }}>{metric.description}</p>
                  
                  {/* Enhanced progress bar with gradient */}
                  <div className="mt-4 bg-white rounded-full h-3 overflow-hidden shadow-inner">
                    <div 
                      className={`h-full bg-gradient-to-r ${metric.color.replace('text-', 'from-').replace('-600', '-400')} ${metric.color.replace('text-', 'to-').replace('-600', '-600')} relative`}
                      style={{ width: index === 0 ? '99%' : index === 1 ? '90%' : '75%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Performance indicator dots */}
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < (index === 0 ? 5 : index === 1 ? 4 : 3) ? 'bg-green-400' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center relative">
            {/* Microservices connection arrows */}
            <div className="absolute -left-20 top-8 transform -rotate-12">
              <div className="flex items-center space-x-2">
                <svg width="60" height="30">
                  <circle cx="15" cy="15" r="8" fill="none" stroke="#6366f1" strokeWidth="2"/>
                  <path d="M23,15 L45,15 M42,12 L45,15 L42,18" stroke="#6366f1" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-handwritten text-indigo-600">Scale it!</span>
              </div>
            </div>
            
            <div className="absolute -right-20 top-8 transform rotate-12">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-emerald-600">Build it!</span>
                <svg width="60" height="30">
                  <path d="M15,15 L37,15 M34,12 L37,15 L34,18" stroke="#10b981" strokeWidth="2" fill="none"/>
                  <circle cx="45" cy="15" r="8" fill="none" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Need Scalable E-commerce Solutions? 🚀
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
                💬 Discuss Your Project
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

export default MicroservicesEcommerceProject; 