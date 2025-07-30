import React, { useEffect, useRef } from 'react';
// import logo from './logo.svg';
// import TextCard from './components/TextCard';
import Headline from './components/Headline';
import ProjectCard from './components/ProjectCard';

import './App.css';
import InfoSection from './components/InfoSection';

// Overload to support optional delay
function useFadeInOnScroll(ref: React.RefObject<HTMLDivElement>, delay: number = 0) {
  useEffect(() => {
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
// Fade-in wrapper for projects
const FadeInProjectEntry: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null!);
  useFadeInOnScroll(ref, delay);
  return <div ref={ref} className="fade-in-section project-entry" style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};

function App() {
  const vantaRef = useRef(null);
  const headlineRef = useRef<HTMLDivElement>(null!);
  const infoRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);

  useFadeInOnScroll(headlineRef);
  useFadeInOnScroll(infoRef);
  useFadeInOnScroll(projectsRef);

  useEffect(() => {
    // Dynamically load scripts from public folder
    const loadScript = (src: string, onLoad?: () => void): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          if (onLoad) onLoad();
          resolve();
        };
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    let vantaEffect: any = null;
    // First load three.js, then assign to window.THREE, then load vanta.net
    loadScript('/three.r134.min.js', () => {
      (window as any).THREE = (window as any).THREE || (window as any).THREE;
    })
      .then(() => loadScript('/vanta.net.min.js'))
      .then(() => {
        const win = window as any;
        if (win.VANTA && win.VANTA.NET && win.THREE) {
          console.log('VANTA.NET and THREE loaded');
          vantaEffect = win.VANTA.NET({
            el: vantaRef.current,
            mouseControls: false,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3fffaf
          });
        } else {
          console.error('VANTA.NET or THREE not found on window');
        }
      })
      .catch((err) => {
        console.error('Error loading VANTA scripts:', err);
      });
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div
        id="vanta-bg"
        ref={vantaRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          background: '#222' // fallback color
        }}
      ></div>
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(0,0,0,0.7)', // semi-transparent black
        maxWidth: '800px', // limit width for content
        margin: '0 auto', // center horizontally
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <div ref={headlineRef} className="fade-in-section">
          <Headline />
        </div>
        <div ref={infoRef} className="fade-in-section">
          <InfoSection />
        </div>
        <section ref={projectsRef} className="fade-in-section projects-section" style={{ paddingBottom: '2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h2>
          <div className="projects-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {[{
              title: "Trading Card Price Scraper",
              description: "A tool for identifying and pricing trading cards.",
              link: "https://github.com/Synderis/trading_card_price_scraper",
              imageUrl: "https://i.imgur.com/qLS6VxB.png"
            }, {
              title: "E-commerce Website",
              description: "A full-featured e-commerce platform built with TypeScript and FastAPI.",
              link: "https://github.com/Synderis/e-commerce-website",
              imageUrl: "https://i.imgur.com/0thdFMh.png"
            }, {
              title: "Tekton Simulator",
              description: "A web application for simulating a boss fight in Old School RuneScape.",
              link: "https://github.com/Synderis/tekton_sim_app",
              imageUrl: "https://i.imgur.com/VM2d0ll.png"
            }].map((project, idx) => (
              <FadeInProjectEntry key={project.title} delay={0}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  imageUrl={project.imageUrl}
                />
              </FadeInProjectEntry>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
