

import React from 'react';
import '../css/Headline.css';
import { headlineData } from '../constants/data';

const Headline: React.FC = () => (
    <div className="hero">
        <hr className="topline" />
        <div className="headline">
            <h1>{headlineData.name}</h1>
        </div>
        <p className="subtitle">{headlineData.subtitle}</p>
        <hr className="bottomline" />
        <nav className="nav-links">
            {headlineData.contacts.map(contact => (
                <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={contact.label}
                >
                    <img
                        className="contact-icon"
                        src={contact.icon}
                        alt={contact.label}
                    />
                </a>
            ))}
        </nav>
    </div>
);

export default Headline;
