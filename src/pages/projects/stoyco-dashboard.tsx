import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const StoycoDashboardProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300 font-handwritten" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Enhanced Hero Section with Business Wireframe Styling */}
          <div className="mb-16 relative">
            {/* Business grid background */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-16 gap-2 h-full">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border-l border-emerald-400"></div>
                ))}
              </div>
              <div className="absolute inset-0 grid grid-rows-10 gap-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="border-b border-emerald-400"></div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold font-handwritten" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                📊 Business Dashboard
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 font-handwritten">
                📈 30% Efficiency
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-excalidraw relative" style={{ color: '#15253B' }}>
              Stoyco Management Dashboard
              {/* Business underline */}
              <div className="absolute -bottom-2 left-0 w-full h-2">
                <svg viewBox="0 0 600 8" className="w-full h-full">
                  <path d="M5,4 Q300,1 595,5" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.7"/>
                </svg>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Business operations dashboard with real-time analytics achieving 30% operational efficiency improvement 📊✨
            </p>

            {/* Info Cards with business styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
              {[
                { label: 'Year', value: '2023', icon: '📅', color: 'from-emerald-50 to-emerald-100' },
                { label: 'Impact', value: '30% efficiency', icon: '📈', color: 'from-green-50 to-green-100' },
                { label: 'Role', value: 'Dashboard Developer', icon: '📊', color: 'from-blue-50 to-blue-100' }
              ].map((item, index) => (
                <div key={index} className={`sketch-card p-6 bg-gradient-to-br ${item.color} relative`}>
                  {/* Corner badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>{item.label}</h3>
                  <p className="font-bold text-lg font-excalidraw" style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
                  
                  {/* Connecting line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <svg width="30" height="20">
                        <path d="M5,10 L25,10 M22,7 L25,10 L22,13" stroke="#10b981" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Business Dashboard Wireframing Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center relative" style={{ color: 'var(--text-primary)' }}>
              📊 Business Intelligence Design Journey
              {/* Hand-drawn arrow pointing down */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <svg width="30" height="25">
                  <path d="M15,5 L15,18 M12,15 L15,18 L18,15" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </h2>

            {/* Business Wireframing Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Wireframe Process */}
              <div className="sketch-card p-8 bg-gradient-to-br from-emerald-50 to-green-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                  <span className="text-xl">📊</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  Business Analytics Research
                </h3>
                
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Business Requirements Analysis', desc: 'Studied operational workflows and KPI requirements', icon: '🎯' },
                    { step: '2', title: 'Data Flow Mapping', desc: 'Analyzed inventory and sales data visualization needs', icon: '📈' },
                    { step: '3', title: 'Dashboard Architecture', desc: 'Created responsive wireframes for real-time analytics', icon: '🏗️' },
                    { step: '4', title: 'User Experience Design', desc: 'Optimized for efficiency and intuitive navigation', icon: '🎨' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 relative">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold" style={{ color: '#10b981' }}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                          {item.icon} {item.title}
                        </h4>
                        <p className="text-sm font-handwritten" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                      </div>
                      
                      {/* Flow arrow */}
                      {index < 3 && (
                        <div className="absolute left-4 top-8 w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Sticky note annotation */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-300 p-3 rounded transform rotate-6 shadow-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-red-500">📌</div>
                  <p className="text-xs font-handwritten" style={{color: '#8B5000'}}>
                    &quot;Data-driven business decisions!&quot;
                  </p>
                </div>
              </div>

              {/* Right: Real Implementation */}
              <div className="sketch-card p-8 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  Live Business Dashboard
                </h3>

                {/* Mock business dashboard preview */}
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-dashed border-gray-300 mb-6">
                  <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded p-2 mb-3">
                    <div className="flex space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white rounded p-3">
                      {/* Business dashboard header */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="h-2 bg-emerald-300 rounded w-16"></div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-emerald-200 rounded-full flex items-center justify-center text-xs">📊</div>
                          <div className="h-1 bg-gray-300 rounded w-6"></div>
                        </div>
                      </div>
                      {/* Dashboard content */}
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-1">
                          <div className="h-4 bg-emerald-100 rounded"></div>
                          <div className="h-4 bg-blue-100 rounded"></div>
                          <div className="h-4 bg-green-100 rounded"></div>
                        </div>
                        <div className="h-6 bg-gradient-to-r from-emerald-100 to-blue-100 rounded"></div>
                        <div className="h-2 bg-green-200 rounded w-full"></div>
                        <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center font-handwritten" style={{color: 'var(--text-muted)'}}>
                    Live Stoyco Dashboard ✨
                  </p>
                </div>

                {/* Key achievements */}
                <div className="space-y-3">
                  {[
                    { metric: '30%', label: 'Efficiency Boost', color: 'text-emerald-600' },
                    { metric: '100%', label: 'Real-time Data', color: 'text-blue-600' },
                    { metric: '24/7', label: 'System Uptime', color: 'text-green-600' },
                    { metric: '5★', label: 'User Rating', color: 'text-purple-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
                      <span className="font-handwritten text-sm" style={{color: 'var(--text-secondary)'}}>{item.label}</span>
                      <span className={`font-bold text-lg font-excalidraw ${item.color}`}>{item.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Business Technology Stack with Enhanced Design */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🛠️ Business Dashboard Stack
            </h2>
            
            <div className="relative">
              {/* Business connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <path d="M100 80 Q300 60 500 100" stroke="#10b981" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
                <path d="M150 200 Q350 180 550 220" stroke="#10b981" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
              </svg>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {[
                  { name: 'Angular', category: 'Framework', icon: '🅰️', color: 'from-red-100 to-red-200', business: 5 },
                  { name: 'Chart.js', category: 'Data Visualization', icon: '📊', color: 'from-emerald-100 to-emerald-200', business: 5 },
                  { name: 'Angular Material', category: 'UI Components', icon: '🎨', color: 'from-blue-100 to-blue-200', business: 4 },
                  { name: 'TypeScript', category: 'Language', icon: '📘', color: 'from-indigo-100 to-indigo-200', business: 4 },
                  { name: 'Bootstrap', category: 'CSS Framework', icon: '🅱️', color: 'from-purple-100 to-purple-200', business: 3 }
                ].map((tech, index) => (
                  <div key={index} className={`sketch-card p-4 relative bg-gradient-to-br ${tech.color}`} 
                       style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)`}}>
                    {/* Tech icon badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs">
                      {tech.icon}
                    </div>
                    
                    <h4 className="font-bold mb-1 text-sm font-handwritten" style={{ color: 'var(--text-primary)' }}>{tech.name}</h4>
                    <p className="text-xs font-handwritten" style={{ color: 'var(--text-muted)' }}>{tech.category}</p>
                    
                    {/* Business integration level indicator */}
                    <div className="mt-2 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full" 
                             style={{backgroundColor: i < tech.business ? '#10b981' : 'var(--border)'}}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech annotation */}
            <div className="mt-8 relative">
              <div className="absolute right-0 -top-4">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <path d="M10 30 Q40 10 70 25" stroke="#10b981" strokeWidth="1" fill="none"/>
                  <polygon points="65,20 75,25 65,30" fill="#10b981" opacity="0.6"/>
                </svg>
              </div>
              <p className="text-sm italic text-right mr-20 font-handwritten" style={{color: 'var(--text-muted)'}}>
                &quot;Built for business intelligence! 📊&quot;
              </p>
            </div>
          </div>

          {/* Business Features Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🚀 Business Dashboard Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Real-time Analytics',
                  description: 'Implemented dynamic charts and graphs using Chart.js to display real-time business metrics, sales performance, and operational KPIs with automatic data refresh capabilities.',
                  icon: '📊',
                  color: 'from-emerald-400 to-green-500',
                  badge: '⚡'
                },
                {
                  title: 'Inventory Management',
                  description: 'Built comprehensive inventory tracking system with stock levels, product management, supplier information, and automated alerts for low stock situations.',
                  icon: '📦',
                  color: 'from-blue-400 to-cyan-500',
                  badge: '📋'
                },
                {
                  title: 'User Experience Design',
                  description: 'Designed intuitive interface using Angular Material components and Bootstrap grid system for responsive layouts that work seamlessly across desktop and tablet devices.',
                  icon: '🎨',
                  color: 'from-purple-400 to-pink-500',
                  badge: '✨'
                },
                {
                  title: 'Data Export & Reporting',
                  description: 'Implemented data export functionality for reports in multiple formats (PDF, Excel, CSV) with customizable date ranges and filtering options.',
                  icon: '📄',
                  color: 'from-orange-400 to-red-500',
                  badge: '📈'
                }
                             ].map((feature, index) => (
                 <div key={index} className={`sketch-card p-6 bg-gradient-to-br ${feature.color} relative`}>
                   {/* Corner Badge */}
                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center transform rotate-12">
                     {feature.badge}
                   </div>
                   
                   <div className="flex items-center space-x-3 mb-4">
                     <div className="text-2xl">{feature.icon}</div>
                     <h3 className="text-xl font-semibold font-handwritten text-white">{feature.title}</h3>
                   </div>
                   
                   <p className="font-handwritten text-white opacity-90">{feature.description}</p>
                 </div>
              ))}
            </div>
          </div>

          {/* Business Impact Dashboard */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              📊 Business Impact Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  value: '30%', 
                  label: 'Efficiency Improvement', 
                  description: 'In daily operations management',
                  color: 'text-emerald-600',
                  bgColor: 'from-emerald-50 to-emerald-100',
                  icon: '📈'
                },
                { 
                  value: '100%', 
                  label: 'Real-time Data', 
                  description: 'Live business metrics and KPIs',
                  color: 'text-blue-600',
                  bgColor: 'from-blue-50 to-blue-100',
                  icon: '⚡'
                },
                { 
                  value: '24/7', 
                  label: 'System Availability', 
                  description: 'Reliable dashboard performance',
                  color: 'text-green-600',
                  bgColor: 'from-green-50 to-green-100',
                  icon: '🎯'
                }
              ].map((metric, index) => (
                <div key={index} className={`sketch-card text-center p-6 bg-gradient-to-br ${metric.bgColor} relative`}>
                  {/* Floating Icon */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg sketch-border">
                      {metric.icon}
                    </div>
                  </div>
                  
                  <div className={`text-4xl font-black mb-2 mt-4 ${metric.color} font-excalidraw`}>{metric.value}</div>
                  <h4 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>{metric.label}</h4>
                  <p className="text-sm font-handwritten" style={{ color: 'var(--text-secondary)' }}>{metric.description}</p>
                  
                  {/* Progress bar visualization */}
                  <div className="mt-4 bg-white rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${metric.color.replace('text-', 'from-').replace('-600', '-400')} ${metric.color.replace('text-', 'to-').replace('-600', '-600')}`}
                      style={{ width: index === 0 ? '95%' : index === 1 ? '100%' : '99%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Call to Action */}
          <div className="text-center relative">
            {/* Decorative arrows pointing to CTA */}
            <div className="absolute -left-16 top-8 transform -rotate-12">
              <div className="flex items-center space-x-2">
                <svg width="50" height="25">
                  <path d="M5,12 Q25,5 40,12 L35,8 M40,12 L35,16" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-handwritten text-emerald-600">Business!</span>
              </div>
            </div>
            
            <div className="absolute -right-16 top-8 transform rotate-12">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-blue-600">Analytics!</span>
                <svg width="50" height="25">
                  <path d="M45,12 Q25,5 10,12 L15,8 M10,12 L15,16" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Need a Business Operations Dashboard? 📊
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Let&apos;s build a powerful dashboard that transforms your business data into actionable insights for operational excellence.
            </p>
            <div className="space-x-4">
              <Link href="/projects" className="sketch-button inline-block px-6 py-3 rounded-lg transition-colors duration-300" style={{
                backgroundColor: 'var(--accent)',
                color: 'white'
              }}>
                🚀 View All Projects
                {/* Hand-drawn underline */}
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
                📊 Start Dashboard Project
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Business Intelligence Together 📊🚀
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StoycoDashboardProject; 