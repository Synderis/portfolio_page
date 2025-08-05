import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';
import { headlineData } from '../data/portfolioData';
import '../css/Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getContactIcon = (label: string) => {
    switch (label) {
      case 'GitHub':
        return <Github size={20} />;
      case 'LinkedIn':
        return <Linkedin size={20} />;
      case 'Email':
        return <Mail size={20} />;
      case 'Resume':
        return <FileText size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-name">{headlineData.name}</h3>
              <p className="footer-subtitle">
                Building digital experiences with passion and precision
              </p>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="social-links">
                  {headlineData.contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="social-link"
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={contact.label}
                    >
                      {getContactIcon(contact.label)}
                      <span>{contact.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <p className="copyright">
                © {new Date().getFullYear()} {headlineData.name}. Made with{' '}
                <Heart size={16} className="heart-icon" /> using React & TypeScript
              </p>
              
              <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
