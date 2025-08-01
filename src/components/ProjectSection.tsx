

import React from 'react';
import '../css/ProjectCard.css';
import useIsMobile from '../hooks/useIsMobile';
import { projects } from '../constants/data';
import FadeInProjectEntry from './FadeInProjectEntry';


const ProjectSection: React.FC = () => {
    const isMobile = useIsMobile(600);
    return (
        <div>
            <div className="headline">
                <h2>Projects</h2>
            </div>
            <div className="projects-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', paddingBottom: '2rem' }}>
                {projects.map((project) => (
                    <FadeInProjectEntry key={project.title} delay={0}>
                        <div key={project.title} className="project-image-card-container">
                            {isMobile && <h3 className='project-mobile-header'>{project.title}</h3>}
                            <div key={project.title} className="project-image-card">
                                <div className='project-image'>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title + ' preview'}
                                        {...(isMobile ? {
                                            onClick: () => window.open(project.link, '_blank', 'noopener,noreferrer'),
                                            style: { cursor: 'pointer' }
                                        } : {})}
                                    />
                                </div>
                                <div className="project-card-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            {isMobile && <span className="project-mobile-desc">{project.description}</span>}
                        </div>
                    </FadeInProjectEntry>
                ))}
            </div>
        </div>

    );
};

export default ProjectSection;
