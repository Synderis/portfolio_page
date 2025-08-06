import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { workExperience, education } from '../data/portfolioData';
import '../css/Experience.css';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isInView = useInView(ref, { once: true, amount: isMobile ? 0.1 : 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Experience & Education
            </motion.h2>
            <motion.p
              className="section-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My professional journey and academic background
            </motion.p>
          </div>

          <div className="experience-grid">
            {/* Work Experience */}
            <div className="experience-column">
              <motion.h3
                className="column-title"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Briefcase size={24} />
                Work Experience
              </motion.h3>
              
              <motion.div 
                className="cards-container"
                variants={containerVariants}
              >
                {workExperience.map((job, index) => (
                  <motion.div
                    key={`${job.company}-${index}`}
                    className="experience-card work-card"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="card-header">
                      <h4 className="job-title">{job.title}</h4>
                      <div className="job-meta">
                        <span className="company">{job.company}</span>
                        <div className="job-period">
                          <Calendar size={16} />
                          <span>{job.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="job-description">{job.desc}</p>
                    <div className="card-decoration work-decoration"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Education */}
            <div className="experience-column">
              <motion.h3
                className="column-title"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GraduationCap size={24} />
                Education
              </motion.h3>
              
              <motion.div 
                className="cards-container"
                variants={containerVariants}
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={`${edu.company}-${index}`}
                    className="experience-card education-card"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="card-header">
                      <h4 className="degree-title">{edu.title}</h4>
                      <div className="edu-meta">
                        <span className="institution">{edu.company}</span>
                        <div className="edu-period">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-decoration education-decoration"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
