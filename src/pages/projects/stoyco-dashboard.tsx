import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const StoycoDashboardProject = () => {
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
              Stoyco Management Dashboard
            </h1>
            
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Business Operations Dashboard with Real-time Data Visualization & Inventory Management
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2023</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Impact</h3>
                <p style={{ color: 'var(--text-secondary)' }}>30% operational efficiency</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Developed a comprehensive business operations dashboard for Stoyco, featuring real-time data visualization, 
                inventory management, and analytics reporting. The dashboard serves as the central hub for business 
                operations and decision-making processes.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Implemented as a back-office (BO) solution that significantly improved operational efficiency by 
                30% through streamlined workflows and intuitive data presentation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Dashboard Features
              </h2>
              <ul className="space-y-4">
                {[
                  'Real-time Data Visualization',
                  'Inventory Management System',
                  'Analytics & Reporting',
                  'Sales Performance Tracking',
                  'Order Management',
                  'Customer Analytics',
                  'Financial Dashboards',
                  'Export & Import Tools'
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
                { name: 'Angular', category: 'Framework' },
                { name: 'Chart.js', category: 'Data Visualization' },
                { name: 'Angular Material', category: 'UI Components' },
                { name: 'TypeScript', category: 'Language' },
                { name: 'Bootstrap', category: 'CSS Framework' }
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
              Key Functionality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Real-time Analytics
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Implemented dynamic charts and graphs using Chart.js to display real-time business metrics, 
                  sales performance, and operational KPIs with automatic data refresh capabilities.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Inventory Management
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Built comprehensive inventory tracking system with stock levels, product management, 
                  supplier information, and automated alerts for low stock situations.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  User Experience Design
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Designed intuitive interface using Angular Material components and Bootstrap grid system 
                  for responsive layouts that work seamlessly across desktop and tablet devices.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Data Export & Reporting
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Implemented data export functionality for reports in multiple formats (PDF, Excel, CSV) 
                  with customizable date ranges and filtering options.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>30%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Efficiency Improvement</h4>
                <p style={{ color: 'var(--text-secondary)' }}>In daily operations management</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>100%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Real-time Data</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Live business metrics and KPIs</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>24/7</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>System Availability</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Reliable dashboard performance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Need a Business Operations Dashboard?
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
                Discuss Your Dashboard
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

export default StoycoDashboardProject; 