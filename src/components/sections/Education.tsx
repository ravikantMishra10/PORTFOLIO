import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education & <span className="text-[#0fb9b1]">Training</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Central Line for large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00eaff]/50 to-transparent -translate-x-1/2"></div>
          
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white">
              <GraduationCap className="text-[#00eaff]" /> Education
            </h3>
            
            <div className="relative border-l border-white/10 ml-4 pl-8 pb-12">
              <div className="absolute w-4 h-4 bg-[#00eaff] rounded-full -left-[8.5px] top-2 shadow-[0_0_10px_#00eaff]"></div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300"
              >
                <h4 className="text-xl font-bold text-white">Lovely Professional University</h4>
                <p className="text-[#0fb9b1] font-medium mb-2">B.Tech Computer Science and Engineering</p>
                <span className="text-sm text-gray-400 block mb-4">Aug 2023 – Present</span>
                <p className="text-gray-300 bg-white/5 inline-block px-3 py-1 rounded-md border border-white/10">CGPA: 6.59</p>
              </motion.div>
            </div>

            <div className="relative border-l border-white/10 ml-4 pl-8">
              <div className="absolute w-4 h-4 bg-[#0fb9b1] rounded-full -left-[8.5px] top-2 shadow-[0_0_10px_#0fb9b1]"></div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300"
              >
                <h4 className="text-xl font-bold text-white">Army Public School, Jalandhar</h4>
                <p className="text-[#0fb9b1] font-medium mb-2">Higher Secondary & Secondary</p>
                <span className="text-sm text-gray-400 block mb-4">2019 – 2022</span>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li className="flex justify-between border-b border-white/5 pb-1"><span>Higher Secondary (2021-2022)</span> <span className="text-green-400">74%</span></li>
                  <li className="flex justify-between pt-1"><span>Secondary (2019-2020)</span> <span className="text-green-400">83%</span></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Training & Certifications Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white">
                <BookOpen className="text-[#00eaff]" /> Training
              </h3>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass p-6 rounded-xl border border-l-4 border-l-[#0fb9b1] relative overflow-hidden group"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#00eaff]/10 blur-[50px] group-hover:bg-[#00eaff]/20 transition-colors"></div>
                <h4 className="text-xl font-bold text-white">Techvanto (EdTech Company)</h4>
                <p className="text-[#00eaff] font-medium mb-4">Data Structures using C++</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <p className="font-medium text-white">Key Topics Covered:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Arrays, Linked Lists, Stacks, Queues</li>
                    <li>Trees, Graphs, Hashmaps</li>
                    <li>Recursion, Dynamic Programming, Greedy Algorithms</li>
                    <li>Time & Space Complexity Analysis</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white">
                <Award className="text-[#00eaff]" /> Certifications
              </h3>
              <div className="grid gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass flex items-center p-4 rounded-lg hover:border-[#00eaff]/50 transition-colors"
                >
                  <div className="bg-[#0fb9b1]/20 p-3 rounded-full mr-4">
                    <Award className="text-[#0fb9b1]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Data Structures with C++</h4>
                    <p className="text-sm text-gray-400">Techvanto</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass flex items-center p-4 rounded-lg hover:border-[#00eaff]/50 transition-colors"
                >
                  <div className="bg-[#00eaff]/20 p-3 rounded-full mr-4">
                    <Award className="text-[#00eaff]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Responsive Web Design</h4>
                    <p className="text-sm text-gray-400">FreeCodeCamp</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
