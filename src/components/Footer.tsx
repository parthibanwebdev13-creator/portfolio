import { motion } from 'framer-motion';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Parthiban.dev
            </h3>
            <p className="text-slate-400 flex items-center gap-2 justify-center md:justify-start">
              Made by Parthiban B
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href="mailto:parthiban.webdev13@gmail.com"
              className="p-3 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-all duration-300 group border border-slate-700"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/parthiban-webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-all duration-300 group border border-slate-700"
            >
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://github.com/parthibanwebdev13-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-all duration-300 group border border-slate-700"
            >
              <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm"
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
