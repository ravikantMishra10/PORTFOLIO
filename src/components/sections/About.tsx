import { motion } from 'framer-motion';
import { Database, Code, Cpu } from 'lucide-react';

export const About = () => {
  const focuses = [
    { icon: <Database className="text-[#00eaff] w-8 h-8 mb-4" />, title: "Data Analytics", desc: "Extracting insights from complex datasets." },
    { icon: <Code className="text-[#0fb9b1] w-8 h-8 mb-4" />, title: "Software Development", desc: "Building scalable and efficient applications." },
    { icon: <Cpu className="text-[#00eaff] w-8 h-8 mb-4" />, title: "Data Structures & Algorithms", desc: "Solving complex problems with optimized logic." }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-[#00eaff]">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl relative"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#00eaff] opacity-20 blur-2xl rounded-full"></div>
            <h3 className="text-2xl font-semibold mb-4 text-[#0fb9b1]">Who I am</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a B.Tech Computer Science student at Lovely Professional University with strong foundations in Data Structures, Algorithms, and Data Analytics. 
              <br/><br/>
              I am experienced in building analytical dashboards, performing data analysis, and developing efficient software solutions using modern technologies. My passion lies in finding patterns in data and transforming them into actionable insights while writing robust code to power those solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-1 gap-6"
          >
            {focuses.map((item, idx) => (
              <div key={idx} className="glass glass-hover p-6 rounded-xl flex items-center gap-6">
                <div className="p-4 rounded-full bg-black/50 border border-gray-800">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
