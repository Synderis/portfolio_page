
import React from 'react';
import '../css/ProjectCard.css';


interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

function useIsMobile(breakpoint = 600) {
    const [isMobile, setIsMobile] = React.useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    });
    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        setIsMobile(mq.matches);
        return () => mq.removeEventListener('change', handler);
    }, [breakpoint]);
    return isMobile;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, imageUrl }) => {
    const isMobile = useIsMobile(600);
    return (
        isMobile ? (
            <>
                <div className="project-mobile-image-card-container">
                <div>
                    <h3>{title}</h3>
                </div>
                <div className="project-mobile-image-card">
                <div className="project-mobile-image">
                    <img
                        src={imageUrl}
                        alt={title + ' preview'}
                    />
                </div>
                <div className="project-card-overlay">
                    <p>{description}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                </div>
            </>
        ) : (
            <div className="project-image-card">
                <img
                    src={imageUrl}
                    alt={title + ' preview'}
                />
                <div className="project-card-overlay">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
            </div>
        )
    );
}
export default ProjectCard;
