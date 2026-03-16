import { motion } from 'framer-motion';
import { Terminal, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Python", "Java", "C++", "JavaScript"],
    },
    {
      title: "Data Science",
      icon: <Database className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analysis"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-[#0fb9b1]">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00eaff]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center justify-center gap-3 mb-6 text-[#00eaff]">
                {category.icon}
                <h3 className="text-xl font-semibold text-center">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    variants={itemVariants}
                    className="relative px-4 py-2 bg-black/40 border border-[#0fb9b1]/30 rounded-full text-sm text-gray-200 hover:text-white hover:border-[#00eaff] hover:shadow-[0_0_15px_rgba(0,234,255,0.4)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#00eaff] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#0fb9b1] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};
