import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full p-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] shadow-[0_0_30px_rgba(0,234,255,0.3)] -mt-10 mb-4"
          >
            <img
              src="src\assets\profile.jpeg"
              alt="Ravi Kant Mishra"
              className="w-full h-full object-cover rounded-full border-4 border-[#020202]"
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] text-glow">Ravi Kant Mishra</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-gray-300"
          >
            Data Analyst | Software Engineer | B.Tech CSE (Data Science)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            "Transforming data into insights and building efficient software solutions."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, originY: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/ravikantMishra10"
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover px-6 py-3 rounded-full flex items-center gap-2 font-medium"
            >
              <Github size={20} className="text-[#00eaff]" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ravikant10"
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover px-6 py-3 rounded-full flex items-center gap-2 font-medium"
            >
              <Linkedin size={20} className="text-[#00eaff]" />
              LinkedIn
            </a>
            <a
              href="src\assets\Ravi CV.pdf"
              download
              className="px-6 py-3 rounded-full flex items-center gap-2 font-bold bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] text-black hover:shadow-[0_0_20px_rgba(0,234,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0fb9b1] opacity-10 rounded-full blur-[120px] -z-10 animate-float"></div>
    </section>
  );
};
