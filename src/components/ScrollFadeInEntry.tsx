import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const ScrollFadeInEntry: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = React.useRef<HTMLDivElement>(null!);
    useScrollFadeIn(ref);
    return <div ref={ref} className="fade-in-section info-entry">{children}</div>;
};

export default ScrollFadeInEntry;
