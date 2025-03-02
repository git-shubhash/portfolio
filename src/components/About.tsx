import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a Computer Science and Engineering student specializing in Artificial Intelligence at Sri Venkateshwara College of Engineering, Bengaluru. My passion lies at the intersection of web development and AI, where I strive to create innovative solutions that make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Currently, I'm gaining hands-on experience as a Web Development Intern at Systemtron, where I work on real-world projects that enhance my technical skills. I also lead the GitHub Club at my college, promoting open-source contributions and organizing tech events.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My research work on developing software tools for aircraft search and rescue operations was published and presented at BIS-24, showcasing my commitment to applying technology for solving real-world problems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail size={20} className="text-indigo-600 dark:text-indigo-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone size={20} className="text-indigo-600 dark:text-indigo-400" />
                <span>{contactInfo.phone}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">Sri Venkateshwara College of Engineering, Bengaluru</h4>
                <p className="text-gray-700 dark:text-gray-300">B.E. in Computer Science and Engineering (AI) | 2022 - Present</p>
                <p className="text-gray-700 dark:text-gray-300">CGPA: 8.9</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Interests</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Web Development</li>
                <li>Computer Vision</li>
                <li>Open Source Contribution</li>
                <li>Research & Development</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;