

import React, { useEffect, useState } from 'react';
import { skills } from '../constants/data';
import '../css/SkillsSection.css';

const SkillsSection: React.FC = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className={`skills-section fade-in-section${visible ? ' is-visible' : ''}`} style={{ marginBottom: '2rem', textAlign: 'center', transition: 'opacity 1s' }}>
            <div className="headline">
                <h2>My Tech Stack</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                {skills.map(skill => (
                    <a key={skill.name} href={skill.href} target="_blank" rel="noopener noreferrer" title={skill.name}>
                        <img className="skill-icon" src={skill.icon} alt={skill.name} width="48" height="48"/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
