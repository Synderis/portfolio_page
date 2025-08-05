import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Ellipsis, Filter } from 'lucide-react';
import { FiGithub } from "react-icons/fi";
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import '../css/Projects.css';

interface Project {
  title: string;
  description: string;
  detailedDescription: string | string[];
  images: string[];
  techStack?: string[];
  link: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique tech stack items for filtering
  const allTechs = Array.from(
    new Set(projects.flatMap(project => project.techStack || []))
  );

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.techStack?.includes(filter)
      );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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

  const projectVariants = {
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
    <section id="projects" className="projects section">
      <div className="projects-background">
        <img 
          src="/showcase.jpg" 
          alt="Projects showcase" 
          className="background-image"
        />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
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
              Featured Projects
            </motion.h2>
            <motion.p
              className="section-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A selection of projects that showcase my skills and passion for development
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="filter-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                <Filter size={16} />
                All Projects
              </button>
              {allTechs.map(tech => (
                <button
                  key={tech}
                  className={`filter-btn ${filter === tech ? 'active' : ''}`}
                  onClick={() => setFilter(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={projectVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                layout
              >
                <div className="project-image">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub size={20} color='#000000' />
                      </a>
                      <button
                        onClick={() => openModal(project)}
                        className="project-link"
                        aria-label={`View ${project.title} details`}
                      >
                        <Ellipsis size={25} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {project.techStack && (
                    <div className="tech-stack">
                      {project.techStack.map(tech => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Mobile action buttons */}
                  <div className="mobile-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-btn github-btn"
                    >
                      <FiGithub size={20} color='#000000' />
                      View Code
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="mobile-btn details-btn"
                    >
                      <Ellipsis size={21} />
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>No projects found for the selected filter.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
