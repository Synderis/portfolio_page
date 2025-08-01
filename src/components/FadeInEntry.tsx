import React, { useRef } from 'react';
import useFadeInOnDelay from '../hooks/useFadeInOnDelay';

const FadeInEntry: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null!);
    useFadeInOnDelay(ref, delay);
    return <div ref={ref} className="fade-in-section info-entry" style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};

export default FadeInEntry;
