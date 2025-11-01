import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, User, ChevronDown } from 'lucide-react';
import { headlineData } from '../data/portfolioData';
import AboutModal from './AboutModal';
import '../css/Hero.css';

const Hero: React.FC = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const scrollToNext = () => {
    const nextSection = document.getElementById('skills');
    if (nextSection) {
      const headerHeight = 70; // Account for fixed header height
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              className="hero-greeting"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.div>
            
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {headlineData.name}
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {headlineData.subtitle}
            </motion.p>
            
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://synderis-portfolio-page.s3.us-east-1.amazonaws.com/dylan_tocci_resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={() => setIsAboutModalOpen(true)}
                className="btn btn-secondary"
              >
                <User size={18} />
                My Hobbies
              </button>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={scrollToNext}
        >
          <div className="scroll-line"></div>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
      <AboutModal 
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
