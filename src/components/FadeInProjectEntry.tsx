import React, { useRef } from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const FadeInProjectEntry: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null!);
    useFadeInOnScroll(ref, delay);
    return <div ref={ref} className="fade-in-section project-entry" style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};

export default FadeInProjectEntry;