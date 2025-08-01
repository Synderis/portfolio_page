import React, { useRef } from 'react';

import SkillsSection from './SkillsSection';
import { workExperience, education } from '../constants/data';
import '../css/InfoSection.css';
import FadeInEntry from './FadeInEntry';
import ScrollFadeInEntry from './ScrollFadeInEntry';


const InfoSection: React.FC = () => {
    const educationHeaderRef = useRef<HTMLDivElement>(null!);
    return (
        <section className="info-section" style={{ margin: '3rem 0' }}>
            <div className="info-block">
                <SkillsSection />
                <FadeInEntry delay={0.2}>
                    <div className="headline">
                        <h2>Work Experience</h2>
                    </div>
                    <hr className="line" />
                </FadeInEntry>
                {workExperience.map((entry, idx) => (
                    <FadeInEntry key={idx} delay={0.3 + idx * 0.1}>
                        <div className="info-header-3col">
                            <div className="info-col-left">
                                <span className="info-title">{entry.title}</span>
                                <span className="info-year">{entry.year}</span>
                            </div>
                            <div className="info-col-center">
                                <span className="info-desc-3col">{entry.desc}</span>
                            </div>
                            <div className="info-col-right">
                                <span className="info-company">{entry.company}</span>
                            </div>
                        </div>
                        <hr className="line" />
                    </FadeInEntry>
                ))}
                <FadeInEntry delay={0.3 + workExperience.length * 0.1}>
                    <div ref={educationHeaderRef} className="headline">
                        <h2>Education</h2>
                    </div>
                    <hr className="line" />
                </FadeInEntry>
                {education.map((entry, idx) => (
                    <ScrollFadeInEntry key={idx + workExperience.length}>
                        <div className="info-education-header">
                            <div className="info-education-title-block">
                                <span className="info-education-title">{entry.title}</span>
                                <span className="info-education-year">{entry.year}</span>
                            </div>
                            <span className="info-education-company">{entry.company}</span>
                        </div>
                        <hr className="line" />
                    </ScrollFadeInEntry>
                ))}
            </div>
        </section>
    );
};

export default InfoSection;
