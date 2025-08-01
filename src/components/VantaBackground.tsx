import React, { useEffect } from 'react';


interface VantaBackgroundProps {
    vantaRef: React.RefObject<HTMLDivElement | null>;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ vantaRef }) => {
    useEffect(() => {
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
        loadScript('/three.r134.min.js', () => {
            (window as any).THREE = (window as any).THREE || (window as any).THREE;
        })
            .then(() => loadScript('/vanta.net.min.js'))
            .then(() => {
                const win = window as any;
                if (win.VANTA && win.VANTA.NET && win.THREE) {
                    vantaEffect = win.VANTA.NET({
                        el: vantaRef.current,
                        mouseControls: false,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: window.innerHeight,
                        minWidth: window.innerWidth,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color: 0x3fffaf,
                    });
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
    }, [vantaRef]);

    return (
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
                background: '#222',
            }}
        ></div>
    );
};

export default VantaBackground;
