import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-r from-[#0A2342] to-[#0D2E56] text-white px-4 sm:px-0 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="h-full w-full bg-[url('https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#E6AF2E] text-lg sm:text-xl md:text-2xl mb-4 font-light"
          >
            Hello, I'm
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Divy Raj Johari
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6 font-light"
          >
            Professional <span className="text-[#E6AF2E] font-medium">Accountant</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-2xl"
          >
            Detail-oriented accountant with experience at Blackline Corporation and Walmart Inc. 
            Specialized in reconciliations, financial reporting, and cash flow management.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-[#E6AF2E] to-[#d9a429] text-[#0A2342] font-semibold py-3 px-8 rounded-md shadow-lg text-center relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d9a429] to-[#E6AF2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="./DivyResume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-white hover:border-[#E6AF2E] text-white hover:text-[#E6AF2E] font-semibold py-3 px-8 rounded-md text-center backdrop-blur-sm transition-colors duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.button 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToAbout}
          className="bg-transparent text-white p-2 rounded-full hover:text-[#E6AF2E] transition-colors"
          aria-label="Scroll Down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;