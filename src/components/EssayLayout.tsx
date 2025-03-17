import React, { ReactNode } from 'react';
import Layout from './Layout';
import { motion } from 'framer-motion';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface EssayLayoutProps {
  children: ReactNode;
  title: string;
  date: string;
  tableOfContents: TableOfContentsItem[];
}

const EssayLayout: React.FC<EssayLayoutProps> = ({ children, title, date, tableOfContents }) => {
  return (
    <Layout>
      <motion.article
        className="max-w-4xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{date}</p>
        
        <nav className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul>
            {tableOfContents.map((item) => (
              <li key={item.id} className="mb-2">
                <a href={`#${item.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="prose dark:prose-invert max-w-none">
          {children}
        </div>
      </motion.article>
    </Layout>
  );
};

export default EssayLayout;
