
import React, { useRef } from 'react';
import Headline from './components/Headline';
import ProjectSection from './components/ProjectSection';
import './App.css';
import InfoSection from './components/InfoSection';
import useFadeInOnScroll from './hooks/useFadeInOnScroll';
import VantaBackground from './components/VantaBackground';

function App() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null!);
    const infoRef = useRef<HTMLDivElement>(null!);
    const projectsRef = useRef<HTMLDivElement>(null!);

    useFadeInOnScroll(headlineRef);
    useFadeInOnScroll(infoRef);
    useFadeInOnScroll(projectsRef);

    return (
        <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <VantaBackground vantaRef={vantaRef} />
            <div className='app-background'>
                <div ref={headlineRef} className="fade-in-section">
                    <Headline />
                </div>
                <div ref={infoRef} className="fade-in-section">
                    <InfoSection />
                </div>
                <div ref={projectsRef} className="fade-in-section">
                    <ProjectSection />
                </div>
            </div>
        </div>
    );
}

export default App;