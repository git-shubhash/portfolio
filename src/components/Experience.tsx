import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 relative pl-8 border-l-2 border-indigo-600 dark:border-indigo-400"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;