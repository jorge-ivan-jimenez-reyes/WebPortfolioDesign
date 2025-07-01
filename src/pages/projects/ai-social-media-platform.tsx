import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const AISocialMediaProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300 font-handwritten" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Enhanced Hero Section with AI Wireframe Styling */}
          <div className="mb-16 relative">
            {/* AI neural network background */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-8 h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex flex-col justify-around">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="w-2 h-2 rounded-full bg-purple-400"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold font-handwritten" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                🤖 AI-Powered Frontend
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 font-handwritten">
                🚀 100K+ Users
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-excalidraw relative" style={{ color: '#15253B' }}>
              AI Social Media Platform
              {/* AI-themed underline */}
              <div className="absolute -bottom-2 left-0 w-full h-2">
                <svg viewBox="0 0 600 8" className="w-full h-full">
                  <path d="M5,4 Q300,1 595,5" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.7"/>
                </svg>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Revolutionary social platform with AI content generation supporting 100K+ concurrent users 🤖✨
            </p>

            {/* Info Cards with AI styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
              {[
                { label: 'Year', value: '2024', icon: '📅', color: 'from-purple-50 to-purple-100' },
                { label: 'Scale', value: '100K+ users', icon: '👥', color: 'from-blue-50 to-blue-100' },
                { label: 'Role', value: 'AI Frontend Lead', icon: '🤖', color: 'from-green-50 to-green-100' }
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
                        <path d="M5,10 L25,10 M22,7 L25,10 L22,13" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI UX Wireframing Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center relative" style={{ color: 'var(--text-primary)' }}>
              🎨 AI-First Design Process
              {/* Hand-drawn arrow pointing down */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <svg width="30" height="25">
                  <path d="M15,5 L15,18 M12,15 L15,18 L18,15" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </h2>

            {/* AI Wireframing Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Wireframe Process */}
              <div className="sketch-card p-8 bg-gradient-to-br from-purple-50 to-purple-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                  <span className="text-xl">🤖</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  AI UX Research
                </h3>
                
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'User Behavior Analysis', desc: 'Analyzed social media usage patterns with AI insights', icon: '📊' },
                    { step: '2', title: 'AI Content Strategy', desc: 'Designed content generation flows and user interactions', icon: '💡' },
                    { step: '3', title: 'Interactive Wireframes', desc: 'Created AI-powered feature wireframes and prototypes', icon: '📱' },
                    { step: '4', title: 'Real-time Features', desc: 'Planned live interactions and AI recommendations', icon: '⚡' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 relative">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold" style={{ color: '#8b5cf6' }}>
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
                        <div className="absolute left-4 top-8 w-0.5 h-6 bg-gradient-to-b from-purple-400 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Sticky note annotation */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-300 p-3 rounded transform rotate-6 shadow-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-red-500">📌</div>
                  <p className="text-xs font-handwritten" style={{color: '#8B5000'}}>
                    &quot;AI + UX = Magic User Experience!&quot;
                  </p>
                </div>
              </div>

              {/* Right: Real Implementation */}
              <div className="sketch-card p-8 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  Live AI Platform
                </h3>

                {/* Mock AI social media platform preview */}
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-dashed border-gray-300 mb-6">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded p-2 mb-3">
                    <div className="flex space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white rounded p-3">
                      {/* AI-powered header */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="h-2 bg-purple-300 rounded w-16"></div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-purple-200 rounded-full flex items-center justify-center text-xs">🤖</div>
                          <div className="h-1 bg-gray-300 rounded w-6"></div>
                        </div>
                      </div>
                      {/* AI content feed */}
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-200 rounded w-full"></div>
                        <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded"></div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-3 bg-green-100 rounded"></div>
                          <div className="h-3 bg-blue-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center font-handwritten" style={{color: 'var(--text-muted)'}}>
                    Live AI Social Platform ✨
                  </p>
                </div>

                {/* Key achievements */}
                <div className="space-y-3">
                  {[
                    { metric: '100K+', label: 'Concurrent Users', color: 'text-purple-600' },
                    { metric: '50ms', label: 'AI Response Time', color: 'text-blue-600' },
                    { metric: '99.9%', label: 'Uptime', color: 'text-green-600' },
                    { metric: '5★', label: 'User Rating', color: 'text-orange-600' }
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

          {/* AI Technology Stack with Enhanced Design */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🤖 AI-Powered Tech Stack
            </h2>
            
            <div className="relative">
              {/* AI connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <path d="M100 80 Q300 60 500 100" stroke="#8b5cf6" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
                <path d="M150 200 Q350 180 550 220" stroke="#8b5cf6" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
              </svg>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { name: 'React', category: 'Frontend', icon: '⚛️', color: 'from-blue-100 to-blue-200', aiLevel: 4 },
                  { name: 'Node.js', category: 'Backend', icon: '🟢', color: 'from-green-100 to-green-200', aiLevel: 5 },
                  { name: 'OpenAI API', category: 'AI Engine', icon: '🤖', color: 'from-purple-100 to-purple-200', aiLevel: 5 },
                  { name: 'WebSockets', category: 'Real-time', icon: '⚡', color: 'from-yellow-100 to-yellow-200', aiLevel: 4 },
                  { name: 'MongoDB', category: 'Database', icon: '🍃', color: 'from-green-100 to-emerald-200', aiLevel: 3 },
                  { name: 'Redis', category: 'Caching', icon: '💾', color: 'from-red-100 to-red-200', aiLevel: 4 },
                  { name: 'AWS S3', category: 'Storage', icon: '☁️', color: 'from-orange-100 to-orange-200', aiLevel: 3 },
                  { name: 'TensorFlow.js', category: 'ML Frontend', icon: '🧠', color: 'from-orange-100 to-yellow-200', aiLevel: 5 }
                ].map((tech, index) => (
                  <div key={index} className={`sketch-card p-4 relative bg-gradient-to-br ${tech.color}`} 
                       style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)`}}>
                    {/* Tech icon badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs">
                      {tech.icon}
                    </div>
                    
                    <h4 className="font-bold mb-1 text-sm font-handwritten" style={{ color: 'var(--text-primary)' }}>{tech.name}</h4>
                    <p className="text-xs font-handwritten" style={{ color: 'var(--text-muted)' }}>{tech.category}</p>
                    
                    {/* AI integration level indicator */}
                    <div className="mt-2 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full" 
                             style={{backgroundColor: i < tech.aiLevel ? '#8b5cf6' : 'var(--border)'}}></div>
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
                  <path d="M10 30 Q40 10 70 25" stroke="#8b5cf6" strokeWidth="1" fill="none"/>
                  <polygon points="65,20 75,25 65,30" fill="#8b5cf6" opacity="0.6"/>
                </svg>
              </div>
              <p className="text-sm italic text-right mr-20 font-handwritten" style={{color: 'var(--text-muted)'}}>
                &quot;AI-first architecture for intelligent social interactions! 🤖&quot;
              </p>
            </div>
          </div>

          {/* AI Features Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🚀 Intelligent Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI Content Generation',
                  description: 'Integrated advanced AI models to generate personalized content, videos, and interactions. Real-time content creation based on user preferences and trends.',
                  icon: '🎨',
                  color: 'from-purple-400 to-pink-500',
                  badge: '🤖'
                },
                {
                  title: 'Smart Recommendations',
                  description: 'Machine learning algorithms analyze user behavior to provide personalized content recommendations and friend suggestions in real-time.',
                  icon: '🎯',
                  color: 'from-blue-400 to-cyan-500',
                  badge: '🧠'
                },
                {
                  title: 'Real-time Interactions',
                  description: 'WebSocket-powered live chat, notifications, and AI-moderated discussions with sub-50ms response times for seamless user experience.',
                  icon: '⚡',
                  color: 'from-green-400 to-emerald-500',
                  badge: '💨'
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Auto-scaling infrastructure with load balancing supporting 100K+ concurrent users while maintaining high performance and reliability.',
                  icon: '📈',
                  color: 'from-orange-400 to-red-500',
                  badge: '🚀'
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

          {/* Performance Metrics Dashboard */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              📊 AI Platform Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  value: '100K+', 
                  label: 'Concurrent Users', 
                  description: 'Supported simultaneously with auto-scaling',
                  color: 'text-purple-600',
                  bgColor: 'from-purple-50 to-purple-100',
                  icon: '👥'
                },
                { 
                  value: '50ms', 
                  label: 'AI Response Time', 
                  description: 'Average AI content generation speed',
                  color: 'text-blue-600',
                  bgColor: 'from-blue-50 to-blue-100',
                  icon: '⚡'
                },
                { 
                  value: '99.9%', 
                  label: 'Uptime Target', 
                  description: 'High availability with load balancing',
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
                      style={{ width: index === 0 ? '95%' : index === 1 ? '98%' : '99%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Call to Action */}
          <div className="text-center relative">
            {/* Decorative arrows pointing to CTA */}
            <div className="absolute -left-16 top-8 transform -rotate-12">
              <div className="flex items-center space-x-2">
                <svg width="50" height="25">
                  <path d="M5,12 Q25,5 40,12 L35,8 M40,12 L35,16" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-handwritten text-purple-600">AI Magic!</span>
              </div>
            </div>
            
            <div className="absolute -right-16 top-8 transform rotate-12">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-emerald-600">Intelligent!</span>
                <svg width="50" height="25">
                  <path d="M45,12 Q25,5 10,12 L15,8 M10,12 L15,16" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something Intelligent? 🤖
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Let&apos;s create an AI-powered platform that revolutionizes how users interact and create content together.
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
                🤖 Start AI Project
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build the Future with AI Together 🤖🚀
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AISocialMediaProject; 