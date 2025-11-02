import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Sparkles } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
              Get to Know Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl border border-cyan-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Clean Code
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Writing maintainable, efficient, and scalable code is at the heart of everything I build.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl border border-blue-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Fast Performance
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Optimizing for speed and performance to deliver seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl border border-purple-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Beautiful Design
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Crafting visually stunning interfaces that combine aesthetics with functionality.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/80 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700"
          >
            <p className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
              I'm <span className="font-bold text-cyan-600 dark:text-cyan-400">Parthiban B</span>, a passionate{' '}
              <span className="font-bold text-slate-900 dark:text-white">Full Stack Web Developer</span> who loves
              crafting seamless, high-performing web experiences. I specialize in building scalable front-end
              interfaces with <span className="font-semibold">React</span> and{' '}
              <span className="font-semibold">Tailwind CSS</span>, and developing robust back-end solutions using{' '}
              <span className="font-semibold">Node.js</span> and <span className="font-semibold">Supabase</span>.
              My mission is to create digital products that are functional and visually engaging, blending design
              precision with clean, efficient code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
