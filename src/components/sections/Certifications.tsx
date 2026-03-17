import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy } from 'lucide-react';

export const Certifications = () => {
  const achievements = [
    {
      title: "Data Structures with C++",
      organization: "Techvanto",
      icon: <Award className="w-10 h-10 text-[#00eaff]" />,
      desc: "Complete certification learning foundational and advanced Data Structures and Algorithms using C++.",
      date: "Jun 2025",
      link: "https://drive.google.com/file/d/14yXjZHd2aPbV3V5xG6EHRYEajHaL8r5n/view?usp=drive_link"
    },
    {
      title: "Responsive Web Design",
      organization: "Free Code Camp",
      icon: <BookOpen className="w-10 h-10 text-[#0fb9b1]" />,
      desc: "Developer Certification for building modern and responsive HTML & CSS web layouts.",
      date: "Oct 2023"
    },
    {
      title: "100+ LeetCode Questions Solved",
      organization: "LeetCode",
      icon: <Trophy className="w-10 h-10 text-[#00eaff]" />,
      desc: "Demonstrated consistent problem-solving skills across various algorithmic challenges.",
      date: "Ongoing"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements & <span className="text-[#00eaff]">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            item.link ? (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl relative group overflow-hidden block cursor-pointer border border-white/5 hover:border-[#00eaff]/30 transition-colors"
                title="View Certificate"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,234,255,0.3)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00eaff] transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-[#0fb9b1] mb-3">
                      <span className="font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl relative group overflow-hidden border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,234,255,0.3)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-[#0fb9b1] mb-3">
                      <span className="font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00eaff] opacity-5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#0fb9b1] opacity-5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
    </section>
  );
};
