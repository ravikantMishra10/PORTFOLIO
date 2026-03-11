import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart2, Coffee, Recycle } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Uber Analytics Dashboard",
      tools: ["Power BI", "DAX"],
      icon: <BarChart2 className="w-10 h-10 text-[#00eaff]" />,
      desc: "Interactive dashboard analyzing ride trends with dynamic KPIs and slicers.",
      bullets: [
        "Revenue and booking pattern analysis",
        "Data-driven insights for decision making"
      ]
    },
    {
      title: "Coffee House Analytics Dashboard",
      tools: ["Python", "Excel"],
      icon: <Coffee className="w-10 h-10 text-[#0fb9b1]" />,
      desc: "Used Python EDA to analyze purchasing patterns and visualize insights.",
      bullets: [
        "Improved customer engagement by 40%",
        "Reduced inventory wastage by 30%",
        "Increased revenue by 18%"
      ]
    },
    {
      title: "Waste Management Awareness System",
      tools: ["HTML", "CSS", "JavaScript", "Python"],
      icon: <Recycle className="w-10 h-10 text-[#00eaff]" />,
      desc: "Website to promote environmental awareness and better waste management.",
      bullets: [
        "Responsive interface",
        "Improved user engagement toward waste management practices"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-[#00eaff]">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ 
                rotateX: 5, 
                rotateY: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass p-8 rounded-2xl flex flex-col h-full group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="mb-6 bg-black/50 w-20 h-20 rounded-full flex items-center justify-center border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform translate-z-12 group-hover:shadow-[0_0_20px_rgba(0,234,255,0.4)] transition-all duration-300">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white transform translate-z-10">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4 transform translate-z-8">
                {project.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium px-2 py-1 rounded bg-[#0fb9b1]/20 text-[#0fb9b1] border border-[#0fb9b1]/30">
                    {tool}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow transform translate-z-6">
                {project.desc}
              </p>
              
              <ul className="text-sm text-gray-400 mb-8 space-y-2 transform translate-z-6">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-[#00eaff] mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto transform translate-z-12">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#00eaff] transition-colors">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
