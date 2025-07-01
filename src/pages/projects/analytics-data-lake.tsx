import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const AnalyticsDataLakeProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Hero Section with Architecture Blueprint */}
          <div className="mb-16 relative">
            {/* Decorative Blueprint Lines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
              </svg>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold sketch-border" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                🏗️ Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 sketch-border">
                ✅ Completed
              </span>
              {/* Technical annotation */}
              <div className="absolute -top-8 right-0 transform rotate-3">
                <div className="bg-yellow-200 px-2 py-1 text-xs font-handwritten text-gray-800 sketch-border">
                  📐 Data Engineering
                  <div className="absolute -bottom-1 left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-200"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-excalidraw mb-6 relative" style={{ color: '#15253B' }}>
              Real-time Analytics Data Lake
              {/* Hand-drawn underline */}
              <div className="absolute -bottom-2 left-0 w-full h-3 opacity-40">
                <svg viewBox="0 0 300 12" className="w-full h-full">
                  <path d="M5,6 Q75,2 150,5 T295,7" stroke="#15253B" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              🚀 Serverless Data Processing Pipeline for Petabyte-Scale Analytics
            </p>

            {/* Annotative Arrow pointing to main content */}
            <div className="absolute -right-16 top-32 transform rotate-12 opacity-80">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-handwritten text-purple-600">⚡ Big Data Magic!</span>
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <path d="M5,15 Q25,5 45,15 L40,10 M45,15 L40,20" stroke="#9333ea" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Info Cards with Technical Connections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
              {/* Connecting Lines Between Cards */}
              <div className="absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 opacity-50 hidden md:block"></div>
              
              <div className="sketch-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 relative">
                {/* Corner Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform rotate-12">
                  📅
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>Project Year</h3>
                <p className="text-2xl font-bold text-blue-600">2024</p>
                <p className="text-sm text-blue-500">Latest & Greatest</p>
              </div>

              <div className="sketch-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform -rotate-12">
                  📊
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>Data Volume</h3>
                <p className="text-2xl font-bold text-purple-600">10TB+</p>
                <p className="text-sm text-purple-500">daily processing</p>
              </div>

              <div className="sketch-card p-6 bg-gradient-to-br from-green-50 to-green-100 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform rotate-12">
                  👨‍💻
                </div>
                <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>My Role</h3>
                <p className="text-2xl font-bold text-green-600">Data Architect</p>
                <p className="text-sm text-green-500">System Designer</p>
              </div>
            </div>
          </div>

          {/* Architecture Overview with Central Diagram */}
          <div className="mb-16 relative">
            {/* Central Architecture Diagram */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  🏗️ System Architecture Blueprint
                </h2>
                {/* Connecting Arrow with Lightbulb */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                      💡
                    </div>
                    <svg width="3" height="20">
                      <line x1="1" y1="0" x2="1" y2="20" stroke="#facc15" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                  Architecture Overview
                  {/* Bookmark annotation */}
                  <div className="absolute -top-4 -right-8 transform rotate-12">
                    <div className="bg-orange-200 px-3 py-2 text-xs font-handwritten text-gray-800 sketch-border">
                      📖 Design Docs
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-b-8 border-transparent border-b-orange-300"></div>
                    </div>
                  </div>
                </h3>
                
                <div className="sketch-card p-6 mb-6">
                  <p className="text-lg leading-relaxed mb-6 font-handwritten" style={{ color: 'var(--text-secondary)' }}>
                    Designed and implemented a <span className="sketch-highlight">fully serverless data lake architecture</span> capable of processing 
                    petabytes of data with real-time analytics capabilities. The solution leverages <span className="sketch-highlight">AWS Kinesis</span> 
                    for streaming data ingestion and <span className="sketch-highlight">Lambda functions</span> for serverless processing.
                  </p>
                  <p className="text-lg leading-relaxed font-handwritten" style={{ color: 'var(--text-secondary)' }}>
                    Built with <span className="sketch-highlight">cost optimization</span> in mind, using S3 intelligent tiering and automated 
                    lifecycle policies to minimize storage costs while maintaining query performance.
                  </p>
                </div>

                {/* Sticky Note with Pin */}
                <div className="absolute -bottom-4 right-8 transform rotate-3">
                  <div className="bg-pink-200 p-3 text-sm font-handwritten text-gray-800 sketch-border max-w-48">
                    💰 60% cost reduction vs traditional warehouses!
                    {/* Pin */}
                    <div className="absolute -top-2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                  🔄 Data Pipeline Stages
                </h3>
                <div className="sketch-card p-6">
                  <div className="space-y-4">
                    {[
                      { stage: 'Real-time Data Ingestion', icon: '🚀', color: 'bg-red-100 text-red-600' },
                      { stage: 'Stream Processing & Transformation', icon: '⚙️', color: 'bg-orange-100 text-orange-600' },
                      { stage: 'Data Cataloging & Schema Registry', icon: '📚', color: 'bg-yellow-100 text-yellow-600' },
                      { stage: 'Automated Data Quality Checks', icon: '✅', color: 'bg-green-100 text-green-600' },
                      { stage: 'Multi-format Data Storage', icon: '💾', color: 'bg-blue-100 text-blue-600' },
                      { stage: 'Interactive Query Engine', icon: '🔍', color: 'bg-indigo-100 text-indigo-600' },
                      { stage: 'Visualization & Dashboards', icon: '📊', color: 'bg-purple-100 text-purple-600' },
                      { stage: 'ML Model Integration', icon: '🤖', color: 'bg-pink-100 text-pink-600' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 relative">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color} font-bold sketch-border`}>
                          {item.icon}
                        </div>
                        <span className="font-handwritten" style={{ color: 'var(--text-secondary)' }}>{item.stage}</span>
                        {/* Flow arrows on some items */}
                        {index < 7 && (
                          <svg className="absolute left-4 top-8" width="20" height="15">
                            <path d="M4,2 L4,10 L15,10 M12,7 L15,10 L12,13" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack with Enhanced Wireframe Design */}
          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                🛠️ Technology Stack Architecture
              </h2>
              {/* Decorative Doodles */}
              <div className="absolute top-0 left-8 transform -rotate-12 opacity-60">
                <svg width="40" height="30">
                  <path d="M5,15 Q15,5 25,15 T35,15" stroke="#6366f1" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="absolute top-0 right-8 transform rotate-12 opacity-60">
                <svg width="40" height="30">
                  <path d="M5,15 L35,15 M30,10 L35,15 L30,20" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              {/* Connecting Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <svg className="w-full h-full">
                  <path d="M25%,25% Q50%,10% 75%,25%" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <path d="M25%,75% Q50%,90% 75%,75%" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                </svg>
              </div>

              {[
                { name: 'AWS Kinesis', category: 'Streaming', icon: '🌊', color: 'from-blue-400 to-cyan-500', skillLevel: 5 },
                { name: 'Lambda', category: 'Processing', icon: '⚡', color: 'from-orange-400 to-red-500', skillLevel: 5 },
                { name: 'S3 Data Lake', category: 'Storage', icon: '🗄️', color: 'from-green-400 to-emerald-500', skillLevel: 5 },
                { name: 'Athena', category: 'Query Engine', icon: '🔍', color: 'from-purple-400 to-pink-500', skillLevel: 4 },
                { name: 'Glue', category: 'ETL', icon: '🔗', color: 'from-yellow-400 to-orange-500', skillLevel: 4 },
                { name: 'QuickSight', category: 'Visualization', icon: '📊', color: 'from-indigo-400 to-purple-500', skillLevel: 4 },
                { name: 'EMR', category: 'Big Data', icon: '🚀', color: 'from-pink-400 to-rose-500', skillLevel: 3 },
                { name: 'CloudFormation', category: 'IaC', icon: '🏗️', color: 'from-teal-400 to-blue-500', skillLevel: 5 }
              ].map((tech, index) => (
                <div key={index} className={`sketch-card p-4 bg-gradient-to-br ${tech.color} text-white relative transform hover:-rotate-1 transition-transform`}>
                  {/* Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg shadow-lg">
                    {tech.icon}
                  </div>
                  
                  <h4 className="font-semibold mb-1 font-handwritten text-lg">{tech.name}</h4>
                  <p className="text-sm opacity-90 mb-2">{tech.category}</p>
                  
                  {/* Skill Level Indicators */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < tech.skillLevel ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Decorative Arrow for some items */}
                  {index % 3 === 0 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <svg width="20" height="20">
                        <path d="M10,2 L10,15 M7,12 L10,15 L13,12" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hand-drawn annotation arrows */}
            <div className="absolute -bottom-12 left-8 transform -rotate-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-blue-600">💡 Serverless = No servers to manage!</span>
                <svg width="40" height="20">
                  <path d="M5,10 Q20,5 35,10" stroke="#2563eb" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Key Architecture Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🎯 Key Architecture Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Serverless Processing',
                  description: 'Lambda functions handle data transformation and processing with automatic scaling. No infrastructure management required, pay only for compute time used.',
                  icon: '⚡',
                  color: 'from-yellow-400 to-orange-500',
                  badge: '🚀'
                },
                {
                  title: 'Cost-Optimized Storage',
                  description: 'S3 intelligent tiering automatically moves data between storage classes. Achieved 60% cost reduction compared to traditional data warehouse solutions.',
                  icon: '💰',
                  color: 'from-green-400 to-emerald-500',
                  badge: '💡'
                },
                {
                  title: 'Real-time Analytics',
                  description: 'Kinesis Analytics enables real-time stream processing for immediate insights. Sub-second latency for critical business metrics and alerts.',
                  icon: '⏱️',
                  color: 'from-blue-400 to-cyan-500',
                  badge: '⚡'
                },
                {
                  title: 'Data Governance',
                  description: 'AWS Glue Data Catalog provides centralized metadata management with automated schema discovery and data lineage tracking.',
                  icon: '🛡️',
                  color: 'from-purple-400 to-pink-500',
                  badge: '🔒'
                }
              ].map((feature, index) => (
                <div key={index} className={`sketch-card p-6 bg-gradient-to-br ${feature.color} text-white relative`}>
                  {/* Corner Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center transform rotate-12">
                    {feature.badge}
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <h3 className="text-xl font-semibold font-handwritten">{feature.title}</h3>
                  </div>
                  
                  <p className="font-handwritten opacity-90">{feature.description}</p>

                  {/* Decorative arrows on alternating items */}
                  {index % 2 === 0 && (
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-45">
                      <svg width="30" height="30">
                        <path d="M5,15 L20,15 M17,12 L20,15 L17,18" stroke="white" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics with Data Visualization */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              📊 Performance Metrics Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  value: '10TB+', 
                  label: 'Daily Data Processing', 
                  description: 'Handled automatically with serverless scaling',
                  color: 'text-blue-600',
                  bgColor: 'from-blue-50 to-blue-100',
                  icon: '📈'
                },
                { 
                  value: '<1s', 
                  label: 'Query Response Time', 
                  description: 'For most analytical queries on Athena',
                  color: 'text-green-600',
                  bgColor: 'from-green-50 to-green-100',
                  icon: '⚡'
                },
                { 
                  value: '60%', 
                  label: 'Cost Savings', 
                  description: 'Compared to traditional data warehouse',
                  color: 'text-purple-600',
                  bgColor: 'from-purple-50 to-purple-100',
                  icon: '💰'
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
                      style={{ width: index === 0 ? '95%' : index === 1 ? '98%' : '85%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action with Enhanced Design */}
          <div className="text-center relative">
            {/* Decorative arrows pointing to CTA */}
            <div className="absolute -left-16 top-8 transform -rotate-12">
              <div className="flex items-center space-x-2">
                <svg width="50" height="25">
                  <path d="M5,12 Q25,5 40,12 L35,8 M40,12 L35,16" stroke="#6366f1" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-handwritten text-indigo-600">Let&apos;s talk!</span>
              </div>
            </div>
            
            <div className="absolute -right-16 top-8 transform rotate-12">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-emerald-600">Data magic!</span>
                <svg width="50" height="25">
                  <path d="M45,12 Q25,5 10,12 L15,8 M10,12 L15,16" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Ready to Unlock Your Data Potential? 🚀
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring our expertise to your next project and help scale your technology solutions.
            </p>
            <div className="space-x-4">
              <Link href="/projects" className="sketch-button inline-block px-6 py-3 rounded-lg transition-colors duration-300" style={{
                backgroundColor: 'var(--accent)',
                color: 'white'
              }}>
                🎯 View All Projects
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
                💬 Discuss Data Strategy
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

export default AnalyticsDataLakeProject; 