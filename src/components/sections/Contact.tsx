import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
import resumePdf from '../assets/Ravi CV.pdf';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-[#00eaff]">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-[#00eaff]/30 transition-colors">
              <div className="bg-[#00eaff]/10 p-4 rounded-full">
                <Mail className="text-[#00eaff] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-1">Email</h4>
                <a href="mailto:mshrikant454@gmail.com" className="text-white font-medium hover:text-[#00eaff] transition-colors break-all">
                  mshrikant454@gmail.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-[#0fb9b1]/30 transition-colors">
              <div className="bg-[#0fb9b1]/10 p-4 rounded-full">
                <Phone className="text-[#0fb9b1] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-1">Phone</h4>
                <a href="tel:+919056647254" className="text-white font-medium hover:text-[#0fb9b1] transition-colors">
                  +91 9056647254
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-[#00eaff]/30 transition-colors">
              <div className="bg-[#00eaff]/10 p-4 rounded-full">
                <Linkedin className="text-[#00eaff] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-1">LinkedIn</h4>
                <a href="https://linkedin.com/in/ravikant10" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-[#00eaff] transition-colors break-all">
                  linkedin.com/in/ravikant10
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-[#0fb9b1]/30 transition-colors">
              <div className="bg-[#0fb9b1]/10 p-4 rounded-full">
                <Github className="text-[#0fb9b1] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-1">GitHub</h4>
                <a href="https://github.com/ravikantMishra10" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-[#0fb9b1] transition-colors break-all">
                  github.com/ravikantMishra10
                </a>
              </div>
            </div>

            <a
              href={resumePdf}
              download="Ravi_Kant_Mishra_Resume.pdf"
              className="mt-8 glass glass-hover w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-[#00eaff] border border-[#00eaff]/30 hover:bg-[#00eaff]/10 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 glass p-8 rounded-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00eaff] focus:ring-1 focus:ring-[#00eaff] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00eaff] focus:ring-1 focus:ring-[#00eaff] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00eaff] focus:ring-1 focus:ring-[#00eaff] transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00eaff] focus:ring-1 focus:ring-[#00eaff] transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00eaff] to-[#0fb9b1] text-black font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,234,255,0.4)] transition-all duration-300 flex justify-center items-center gap-2 transform hover:-translate-y-1"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
