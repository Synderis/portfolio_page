

import React, { useEffect, useState } from 'react';

const SkillsSection: React.FC = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className={`skills-section fade-in-section${visible ? ' is-visible' : ''}`} style={{ marginBottom: '2rem', textAlign: 'center', transition: 'opacity 1s' }}>
            <div className="headline">
                {/* <hr className="line" /> */}
                <h2>My Tech Stack</h2>
                {/* <hr className="line" /> */}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                {/* Python */}
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python">
                    <img src="/python.svg" alt="Python" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* TypeScript */}
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" title="TypeScript">
                    <img src="/typescript.svg" alt="TypeScript" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* React */}
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React">
                    <img src="/react.svg" alt="React" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* CSS */}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" title="CSS">
                    <img src="/css.svg" alt="CSS" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* HTML 5 */}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" title="HTML 5">
                    <img src="/html-5.svg" alt="HTML 5" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* Snowflake */}
                <a href="https://www.snowflake.com/" target="_blank" rel="noopener noreferrer" title="Snowflake SQL">
                    <img src="/snowflake.svg" alt="Snowflake SQL" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* DBT */}
                <a href="https://www.getdbt.com/" target="_blank" rel="noopener noreferrer" title="DBT">
                    <img src="/dbt.svg" alt="DBT" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* Docker */}
                <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" title="Docker">
                    <img src="/docker.svg" alt="Docker" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
                {/* AWS */}
                <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" title="AWS">
                    <img src="/aws.svg" alt="AWS" width="48" height="48" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                </a>
            </div>
        </div>
    );
};

export default SkillsSection;
