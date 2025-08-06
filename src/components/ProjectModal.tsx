import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/ProjectModal.css';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        detailedDescription: string | string[];
        images: string[];
        techStack?: string[];
        link: string;
    } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentImageIndex(0); // Reset to first image when modal opens
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const nextImage = () => {
        if (project && project.images.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (project && project.images.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.images.length - 1 : prev - 1
            );
        }
    };

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>
                        <div className="modal-scroll-wrapper">
                            <div className="modal-header">
                                <h2 className="modal-title">{project.title}</h2>
                            </div>
                            <div className="modal-body">
                                {project.images.length > 0 && (
                                    <div className="image-gallery">
                                        <div className="image-container">
                                            <img
                                                src={project.images[currentImageIndex]}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                className="modal-image"
                                            />
                                            {project.images.length > 1 && (
                                                <>
                                                    <button className="image-nav prev" onClick={prevImage}>
                                                        <ChevronLeft size={24} />
                                                    </button>
                                                    <button className="image-nav next" onClick={nextImage}>
                                                        <ChevronRight size={24} />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                        {project.images.length > 1 && (
                                            <div className="image-dots">
                                                {project.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="project-details">
                                    <div className="modal-project-description">
                                        <h3>About this Project</h3>
                                        <p>{Array.isArray(project.detailedDescription)
                                            ? project.detailedDescription.join('\n')
                                            : project.detailedDescription}</p>
                                    </div>
                                    {project.techStack && project.techStack.length > 0 && (
                                        <div className="tech-stack-section">
                                            <h3>Technologies Used</h3>
                                            <div className="tech-stack">
                                                {project.techStack.map((tech) => (
                                                    <span key={tech} className="tech-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
