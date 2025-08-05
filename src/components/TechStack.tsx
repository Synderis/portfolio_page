import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import '../css/TechStack.css';

const TechStack: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="tech-stack section">
      <div className="tech-stack-background">
        <div className="overlay"></div>
      </div>
      
      <div className="container">
        <motion.div
          ref={ref}
          className="tech-stack-content"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tech Stack & Skills
            </motion.h2>
            <motion.p
              className="section-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Technologies and tools I use to build amazing digital experiences
            </motion.p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.a
                key={skill.name}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : { 
                  opacity: 0, 
                  y: 50, 
                  scale: 0.9 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="skill-icon">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                  />
                  <motion.div
                    className="skill-glow"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 0.3 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <motion.div
                  className="skill-indicator"
                  initial={{ width: 0 }}
                  animate={isInView ? { 
                    width: hoveredSkill === skill.name ? '100%' : '100%' 
                  } : { width: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + index * 0.1 
                  }}
                />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="skills-footer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <p className="skills-note">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
