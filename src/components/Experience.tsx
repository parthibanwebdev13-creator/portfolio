import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: 'Full Stack Intern',
      company: 'Cognifyz Technologies',
      period: 'Recent',
      description: 'Developed responsive UI components and integrated RESTful APIs using React and Supabase. Collaborated with cross-functional teams to deliver high-quality web applications.',
      achievements: [
        'Built responsive UI components with React',
        'Integrated backend APIs with Supabase',
        'Improved application performance by 30%',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      role: 'Full Stack Intern',
      company: 'Innovate Solutions',
      period: 'Previous',
      description: 'Constructed dynamic web components and optimized backend workflows. Focused on creating scalable solutions for real-world problems.',
      achievements: [
        'Created dynamic components for client projects',
        'Optimized database queries and backend logic',
        'Enhanced user experience through frontend improvements',
      ],
      color: 'from-blue-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 hidden lg:block"></div>

              <div className="lg:ml-12 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-950 hidden lg:flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
                    <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * idx + 0.3, duration: 0.4 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-slate-700 dark:text-slate-300 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
