import React, { useRef } from 'react';

import SkillsSection from './SkillsSection';
import '../css/InfoSection.css';

// Brand new scroll fade-in hook (does not reuse any existing fade-in logic)
function useScrollFadeIn(ref: React.RefObject<HTMLDivElement>) {
    React.useEffect(() => {
        const node = ref.current;
        if (!node) return;
        node.classList.remove('is-visible');
        let hasFadedIn = false;
        const onScroll = () => {
            if (hasFadedIn) return;
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                node.classList.add('is-visible');
                hasFadedIn = true;
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [ref]);
}

// Brand new wrapper component for scroll fade-in
const ScrollFadeInEntry: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = React.useRef<HTMLDivElement>(null!);
    useScrollFadeIn(ref);
    return <div ref={ref} className="fade-in-section info-entry">{children}</div>;
};

function useFadeInOnDelay(ref: React.RefObject<HTMLDivElement>, delay: number = 0) {
    React.useEffect(() => {
        const node = ref.current;
        if (!node) return;
        node.classList.remove('is-visible');
        let hasFadedIn = false;
        let timeoutId: any = null;
        const handleScroll = () => {
            if (hasFadedIn) return;
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                if (!node.classList.contains('is-visible')) {
                    if (timeoutId) clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        node.classList.add('is-visible');
                        hasFadedIn = true;
                    }, delay * 1000);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [ref, delay]);
}

const infoEntries = [
    {
        title: 'Data Engineer', year: '2025-Present', desc: 'Developed scalable data pipelines and internal applications.', company: 'CollisionRight'
    },
    {
        title: 'Software Engineer', year: '2022–Present', desc: 'Built custom CRM and automation tools.', company: 'Freelance'
    },
    {
        title: 'Data Analyst', year: '2024-2025', desc: 'Created dashboards and data cleaning tools.', company: 'Matic'
    },
    {
        title: 'Data Engineer', year: '2023-2024', desc: 'Created automated data pipelines and data QA tools.', company: 'T-Cetra'
    }
];

const educationEntries = [
    {
        title: 'Masters of Data Science', year: '2025-Present', company: 'Illinois Institute of Technology'
    },
    {
        title: 'Bachelors of Science in Mathematics', year: '2019–2023', company: 'Mayville State University'
    }
];

const FadeInEntry: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null!);
    useFadeInOnDelay(ref, delay);
    return <div ref={ref} className="fade-in-section info-entry" style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};

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
                {infoEntries.map((entry, idx) => (
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
                <FadeInEntry delay={0.3 + infoEntries.length * 0.1}>
                    <div ref={educationHeaderRef} className="headline">
                        <h2>Education</h2>
                    </div>
                    <hr className="line" />
                </FadeInEntry>
                {educationEntries.map((entry, idx) => (
                    <ScrollFadeInEntry key={idx + infoEntries.length}>
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
