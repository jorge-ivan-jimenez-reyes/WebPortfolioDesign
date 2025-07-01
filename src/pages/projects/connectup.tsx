import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const ConnectUpProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Back Button */}
          <Link href="/projects" className="sketch-button inline-flex items-center text-sm mb-8 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="mb-16 relative">
            {/* Sketch annotation arrow */}
            <div className="absolute -top-12 right-0 hidden md:block">
              <svg width="120" height="80" viewBox="0 0 120 80" className="sketch-arrow">
                <path d="M10 20 Q60 10 100 40" stroke="var(--accent)" strokeWidth="2" fill="none" strokeDasharray="5,3"/>
                <polygon points="95,35 105,40 95,45" fill="var(--accent)" transform="rotate(-10 100 40)"/>
              </svg>
              <span className="absolute top-0 right-0 text-sm font-handwritten" style={{ color: 'var(--accent)', fontFamily: 'Kalam' }}>
                Main Project! ✨
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="sketch-button px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                ⚡ Full-Stack
              </span>
              <span className="sketch-button px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                ✅ Completed
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 relative" style={{ color: '#15253B' }}>
              ConnectUP
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 20">
                <path d="M5 15 Q200 5 390 12" stroke="var(--accent)" strokeWidth="3" fill="none" opacity="0.6"/>
              </svg>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 sketch-highlight" style={{ color: 'var(--text-secondary)' }}>
              Academic Management Platform for <span className="sketch-highlight">Engineering Universities</span>
            </p>

            {/* Sketch-style info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
              {/* Connecting lines between cards */}
              <svg className="absolute top-1/2 left-1/4 w-1/2 h-8 hidden md:block" viewBox="0 0 200 30">
                <path d="M10 15 Q100 5 190 15" stroke="var(--text-muted)" strokeWidth="1" fill="none" strokeDasharray="2,2" opacity="0.5"/>
              </svg>
              
              <div className="sketch-card p-6 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center text-xs">📅</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>2023</p>
              </div>
              <div className="sketch-card p-6 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-xs">📊</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Impact</h3>
                <p className="text-lg font-bold" style={{ color: 'var(--accent)' }}>500+ professors</p>
                <p className="text-lg font-bold" style={{ color: 'var(--accent)' }}>10K+ students</p>
              </div>
              <div className="sketch-card p-6 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-xs">👨‍💻</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p className="text-lg font-bold" style={{ color: 'var(--accent)' }}>Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 relative">
            {/* Arrow connecting sections */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 hidden lg:block" viewBox="0 0 80 80">
              <path d="M20 40 L60 40" stroke="var(--accent)" strokeWidth="2" fill="none" strokeDasharray="5,3"/>
              <polygon points="55,35 65,40 55,45" fill="var(--accent)"/>
              <circle cx="40" cy="25" r="8" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2,2"/>
              <text x="40" y="30" textAnchor="middle" fontSize="10" fill="var(--accent)">💡</text>
            </svg>

            <div className="sketch-card p-8">
              {/* Hand-drawn bookmark */}
              <div className="absolute -top-4 right-8 w-8 h-12 bg-yellow-300 transform rotate-12" style={{clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 60%, 0 80%)'}}>
                <span className="text-xs">📝</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 relative" style={{ color: 'var(--text-primary)' }}>
                Project Overview
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
                  <path d="M2 4 Q100 1 198 5" stroke="var(--accent)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                ConnectUP is a <span className="sketch-highlight">comprehensive platform</span> designed to revolutionize academic management in engineering universities. 
                The platform optimizes the coordination between academies, professors, schedules, classes, and subjects, 
                creating a seamless workflow for academic institutions.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Built with <span className="sketch-highlight">scalability in mind</span>, the platform handles complex scheduling algorithms, resource allocation, 
                and provides real-time insights for academic administrators and educators.
              </p>
              
              {/* Sketch note */}
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg transform -rotate-1 relative">
                <div className="absolute -top-2 -right-2 text-red-500">📌</div>
                                  <p className="text-sm italic" style={{fontFamily: 'Kalam', color: '#8B5000'}}>
                  &quot;This was a challenging project that required deep understanding of academic workflows!&quot;
                </p>
              </div>
            </div>

            <div className="sketch-card p-8">
              <h2 className="text-3xl font-bold mb-6 relative" style={{ color: 'var(--text-primary)' }}>
                Key Features
                <span className="absolute -right-4 -top-2 text-2xl">🚀</span>
              </h2>
              <div className="space-y-4">
                {[
                  { feature: 'Dynamic Schedule Management', icon: '📅' },
                  { feature: 'Professor-Academy Coordination', icon: '👥' },
                  { feature: 'Real-time Class Allocation', icon: '⚡' },
                  { feature: 'Student Enrollment Tracking', icon: '🎓' },
                  { feature: 'Resource Optimization', icon: '⚙️' },
                  { feature: 'Analytics Dashboard', icon: '📊' },
                  { feature: 'Multi-role Access Control', icon: '🔐' },
                  { feature: 'Automated Notifications', icon: '🔔' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-sm">
                      {item.icon}
                    </div>
                    <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{item.feature}</span>
                    {index % 3 === 0 && (
                      <svg className="w-4 h-4 ml-auto" viewBox="0 0 16 16">
                        <path d="M2 8 L8 2 L14 8" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16 relative">
            {/* Decorative doodles */}
            <div className="absolute -top-8 right-0">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="8" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.3"/>
                <path d="M15 30 Q30 15 45 30" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.5"/>
                <text x="30" y="35" textAnchor="middle" fontSize="12">⚙️</text>
              </svg>
            </div>

            <h2 className="text-3xl font-bold mb-8 relative" style={{ color: 'var(--text-primary)' }}>
              Technology Stack
              {/* Hand-drawn arrow pointing to tech */}
              <svg className="absolute -right-16 top-0 w-16 h-8" viewBox="0 0 64 32">
                <path d="M5 16 Q32 8 55 16" stroke="var(--accent)" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
                <polygon points="50,12 60,16 50,20" fill="var(--accent)" opacity="0.7"/>
              </svg>
            </h2>
            
            {/* Tech cards arranged in a creative layout */}
            <div className="relative">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                <path d="M100 80 Q300 60 500 100" stroke="var(--text-muted)" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
                <path d="M150 200 Q350 180 550 220" stroke="var(--text-muted)" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
              </svg>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative" style={{zIndex: 1}}>
                {[
                  { name: 'Django', category: 'Backend', icon: '🐍', color: 'from-green-100 to-green-200' },
                  { name: 'React', category: 'Frontend', icon: '⚛️', color: 'from-blue-100 to-blue-200' },
                  { name: 'MySQL', category: 'Database', icon: '🗄️', color: 'from-orange-100 to-orange-200' },
                  { name: 'AWS', category: 'Cloud', icon: '☁️', color: 'from-yellow-100 to-yellow-200' },
                  { name: 'Kubernetes', category: 'Orchestration', icon: '⚓', color: 'from-purple-100 to-purple-200' },
                  { name: 'Docker', category: 'Containerization', icon: '🐳', color: 'from-cyan-100 to-cyan-200' },
                  { name: 'Redis', category: 'Caching', icon: '💾', color: 'from-red-100 to-red-200' },
                  { name: 'Nginx', category: 'Web Server', icon: '🌐', color: 'from-pink-100 to-pink-200' }
                ].map((tech, index) => (
                  <div key={index} className={`sketch-card p-4 relative bg-gradient-to-br ${tech.color}`} 
                       style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`}}>
                    {/* Tech icon badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs">
                      {tech.icon}
                    </div>
                    
                    <h4 className="font-bold mb-1 text-lg" style={{ color: 'var(--text-primary)' }}>{tech.name}</h4>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{tech.category}</p>
                    
                    {/* Skill level indicator */}
                    <div className="mt-2 flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full" 
                             style={{backgroundColor: i < (index % 3) + 1 ? 'var(--accent)' : 'var(--border)'}}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sketch annotation */}
            <div className="mt-8 relative">
              <div className="absolute right-0 -top-4">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <path d="M10 30 Q40 10 70 25" stroke="var(--accent)" strokeWidth="1" fill="none"/>
                  <polygon points="65,20 75,25 65,30" fill="var(--accent)" opacity="0.6"/>
                </svg>
              </div>
              <p className="text-sm italic text-right mr-20" style={{fontFamily: 'Kalam', color: 'var(--text-muted)'}}>
                &quot;Each tech was carefully chosen for the academic context!&quot;
              </p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
              {/* Decorative arrows */}
              <svg className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-8 hidden md:block" viewBox="0 0 48 32">
                <path d="M5 16 L35 16" stroke="var(--accent)" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
                <polygon points="30,12 40,16 30,20" fill="var(--accent)" opacity="0.6"/>
              </svg>
              
              <Link href="/projects" className="sketch-button inline-block px-8 py-4 rounded-lg transition-all duration-300 relative" style={{
                backgroundColor: 'var(--accent)',
                color: 'white'
              }}>
                🚀 View All Projects
                <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-2" viewBox="0 0 80 8">
                  <path d="M5 4 Q40 1 75 5" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
                </svg>
              </Link>
              
              <Link href="/contact" className="sketch-button inline-block px-8 py-4 rounded-lg transition-all duration-300 relative" style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)',
                border: '2px solid var(--accent)'
              }}>
                💬 Get In Touch
              </Link>
              
              <svg className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-8 hidden md:block" viewBox="0 0 48 32">
                <path d="M43 16 L13 16" stroke="var(--accent)" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
                <polygon points="18,12 8,16 18,20" fill="var(--accent)" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConnectUpProject; 