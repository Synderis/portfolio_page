import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Dumbbell, Gamepad2, ExternalLink } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';
import '../css/AboutModal.css';

interface LinkItem {
  href: string;
  text: string;
  imgUrl?: string;
}

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getYouTubeEmbedUrl = (url: string): string | null => {
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const isYouTubePlaylist = (url: string): boolean => {
    return url.includes('playlist?list=');
  };

  const getPlaylistEmbedUrl = (url: string): string | null => {
    const playlistRegex = /playlist\?list=([a-zA-Z0-9_-]+)/;
    const match = url.match(playlistRegex);
    return match ? `https://www.youtube.com/embed/playlist?list=${match[1]}` : null;
  };

  const getSectionIcon = (sectionKey: string) => {
    switch (sectionKey) {
      case 'background':
        return <User size={24} />;
      case 'powerlifting':
        return <Dumbbell size={24} />;
      case 'gaming':
        return <Gamepad2 size={24} />;
      default:
        return <User size={24} />;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="about-modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-scroll-wrapper">
            <div className="about-modal-header">
              <h2>{aboutMe.title}</h2>
              <button className="close-button" onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            <div className="about-modal-content">
              <div className="about-modal-intro">
                <p>{aboutMe.description}</p>
              </div>
              <div className="about-modal-sections">
                {Object.entries(aboutMe.sectionDetails).map(([key, section]) => (
                  <motion.div
                    key={key}
                    className="about-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="about-section-header">
                      <div className="section-icon">
                        {getSectionIcon(key)}
                      </div>
                      <h3>{section.sectionTitle}</h3>
                    </div>
                    <div className="section-content">
                      {section.details.map((detail: string, index: number) => (
                        <p key={index} className="section-detail">
                          {detail}
                        </p>
                      ))}
                      {/* Handle single link object */}
                      {section.links && !Array.isArray(section.links) && (
                        <div className="section-links">
                          <a
                            href={section.links.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="section-link"
                          >
                            <ExternalLink size={16} />
                            {section.links.text}
                          </a>
                          {section.links.imgUrl && (
                            <div className="link-image">
                              <img
                                src={section.links.imgUrl}
                                alt={section.links.text}
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                      )}
                      {/* Handle array of links */}
                      {Array.isArray(section.links) && section.links.length > 0 && (
                        <div className="section-links">
                          {section.links.map((link: LinkItem, index: number) => {
                            const embedUrl = getYouTubeEmbedUrl(link.href);
                            const playlistUrl = isYouTubePlaylist(link.href)
                              ? getPlaylistEmbedUrl(link.href)
                              : null;
                            return (
                              <div key={index} className="link-container">
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="section-link"
                                >
                                  <ExternalLink size={16} />
                                  {link.text}
                                </a>
                                {(embedUrl || playlistUrl) && (
                                  <div className="video-embed">
                                    <iframe
                                      src={embedUrl || playlistUrl || ''}
                                      title={link.text}
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                )}
                                {link.imgUrl && !embedUrl && !playlistUrl && (
                                  <div className="link-image">
                                    <img
                                      src={link.imgUrl}
                                      alt={link.text}
                                      loading="lazy"
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutModal;
