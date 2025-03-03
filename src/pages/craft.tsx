import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const CraftPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Craft</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="mb-4">
              I specialize in creating responsive and interactive web applications using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <ul className="list-disc list-inside">
              <li>Frontend Development</li>
              <li>Backend Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p className="mb-4">
              I focus on creating intuitive and visually appealing user interfaces that enhance the overall user experience.
            </p>
            <ul className="list-disc list-inside">
              <li>User-Centered Design</li>
              <li>Wireframing and Prototyping</li>
              <li>Responsive Design</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CraftPage;
