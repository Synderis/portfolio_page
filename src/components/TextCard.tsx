import React from 'react';


interface CardProps {
    header: string;
    subHeader?: string;
    imageUrl?: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}


const TextCard: React.FC<CardProps> = ({ header, subHeader, imageUrl, children, footer }) => {
    return (
        <div className="card rounded shadow-sm mb-4" style={{ maxWidth: 400 }}>
            {imageUrl && (
                <img src={imageUrl} className="card-img-top" alt="Card visual" style={{ objectFit: 'cover', height: 200 }} />
            )}
            <div className="card-body">
                <h4 className="card-title">{header}</h4>
                {subHeader && <h6 className="card-subtitle mb-2 text-muted">{subHeader}</h6>}
                <div className="card-text">
                    {children || (
                        <p>
                            This is a sample card. You can add your own content here to showcase your portfolio, experience, or anything else.
                        </p>
                    )}
                </div>
            </div>
            {footer && <div className="card-footer text-muted">{footer}</div>}
        </div>
    );
};

export default TextCard;
