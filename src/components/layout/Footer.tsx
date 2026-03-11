import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass mt-20 py-8 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/ravikantMishra10" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00eaff] hover:text-glow transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/ravikant10" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00eaff] hover:text-glow transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mshrikant454@gmail.com" className="text-gray-400 hover:text-[#00eaff] hover:text-glow transition-all duration-300">
            <Mail size={24} />
          </a>
          <a href="tel:+919056647254" className="text-gray-400 hover:text-[#00eaff] hover:text-glow transition-all duration-300">
            <Phone size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ravi Kant Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
