import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const AnalyticsDataLakeProject = () => {
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
              Real-time Analytics Data Lake
            </h1>
            
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Serverless Data Processing Pipeline for Petabyte-Scale Analytics
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Year</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2024</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Data Volume</h3>
                <p style={{ color: 'var(--text-secondary)' }}>10TB+ daily processing</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Role</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Data Architect</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Architecture Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Designed and implemented a fully serverless data lake architecture capable of processing 
                petabytes of data with real-time analytics capabilities. The solution leverages AWS Kinesis 
                for streaming data ingestion and Lambda functions for serverless processing.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Built with cost optimization in mind, using S3 intelligent tiering and automated 
                lifecycle policies to minimize storage costs while maintaining query performance.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Data Pipeline Stages
              </h2>
              <ul className="space-y-4">
                {[
                  'Real-time Data Ingestion',
                  'Stream Processing & Transformation',
                  'Data Cataloging & Schema Registry',
                  'Automated Data Quality Checks',
                  'Multi-format Data Storage',
                  'Interactive Query Engine',
                  'Visualization & Dashboards',
                  'ML Model Integration'
                ].map((stage, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{stage}</span>
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
                { name: 'AWS Kinesis', category: 'Streaming' },
                { name: 'Lambda', category: 'Processing' },
                { name: 'S3 Data Lake', category: 'Storage' },
                { name: 'Athena', category: 'Query Engine' },
                { name: 'Glue', category: 'ETL' },
                { name: 'QuickSight', category: 'Visualization' },
                { name: 'EMR', category: 'Big Data' },
                { name: 'CloudFormation', category: 'IaC' }
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
              Key Architecture Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Serverless Processing
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Lambda functions handle data transformation and processing with automatic scaling. 
                  No infrastructure management required, pay only for compute time used.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Cost-Optimized Storage
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  S3 intelligent tiering automatically moves data between storage classes. 
                  Achieved 60% cost reduction compared to traditional data warehouse solutions.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Real-time Analytics
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Kinesis Analytics enables real-time stream processing for immediate insights. 
                  Sub-second latency for critical business metrics and alerts.
                </p>
              </div>

              <div className="p-6 rounded-lg border" style={{ 
                borderColor: 'var(--border)',
                backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'var(--surface-secondary)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Data Governance
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  AWS Glue Data Catalog provides centralized metadata management with 
                  automated schema discovery and data lineage tracking.
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
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>10TB+</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Daily Data Processing</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Handled automatically with serverless scaling</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>&lt;1s</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Query Response Time</h4>
                <p style={{ color: 'var(--text-secondary)' }}>For most analytical queries on Athena</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>60%</div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Cost Savings</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Compared to traditional data warehouse</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Ready to Unlock Your Data Potential?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's build a data architecture that scales with your business insights.
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
                Discuss Data Strategy
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

export default AnalyticsDataLakeProject; 