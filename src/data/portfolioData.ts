export const headlineData = {
    name: 'DYLAN TOCCI',
    subtitle: 'Software Engineer, Data Engineer, Web Developer, and Speedrunner',
    contacts: [
        {
            href: 'https://github.com/Synderis',
            icon: 'icons/github.svg',
            label: 'GitHub'
        },
        {
            href: 'https://www.linkedin.com/in/dylan-tocci-69198929a',
            icon: 'icons/linkedin.svg',
            label: 'LinkedIn'
        },
        {
            href: 'mailto:toccidylan@gmail.com',
            icon: 'icons/email.svg',
            label: 'Email'
        },
        {
            href: '/dylan_tocci_resume.pdf',
            icon: 'icons/resume.svg',
            label: 'Resume'
        }
    ]
};

export const skills = [
    { 
        name: 'Python', href: 'https://www.python.org/', icon: '/icons/python.svg' 
    },
    { 
        name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: '/icons/typescript.svg' 
    },
    { 
        name: 'React', href: 'https://react.dev/', icon: 'icons/react.svg' 
    },
    { 
        name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: '/icons/css.svg' 
    },
    { 
        name: 'HTML 5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: '/icons/html-5.svg' 
    },
    { 
        name: 'Snowflake', href: 'https://www.snowflake.com/', icon: '/icons/snowflake.svg' 
    },
    { 
        name: 'DBT', href: 'https://www.getdbt.com/', icon: '/icons/dbt.svg' 
    },
    { 
        name: 'Docker', href: 'https://www.docker.com/', icon: '/icons/docker.svg' 
    },
    { 
        name: 'AWS', href: 'https://aws.amazon.com/', icon: '/icons/aws.svg' 
    }
];

export const workExperience = [
    {
        title: 'Data Engineer', year: '2025-Present', desc: 'Developed scalable data pipelines and internal applications.', company: 'CollisionRight'
    },
    {
        title: 'Software Engineer', year: '2022–Present', desc: 'Built custom CRM and automation tools.', company: 'Freelance'
    },
    {
        title: 'Data Analyst', year: '2024-2025', desc: 'Created dashboards and data cleaning tools.', company: 'Matic'
    },
    {
        title: 'Data Engineer', year: '2023-2024', desc: 'Created automated data pipelines and data QA tools.', company: 'T-Cetra'
    }
];

export const education = [
    {
        title: 'Masters of Data Science', year: '2025-Present', company: 'Illinois Institute of Technology'
    },
    {
        title: 'Bachelors of Science in Mathematics', year: '2019–2023', company: 'Mayville State University'
    }
];

export const projects = [
    {
        title: "Trading Card Price Scraper",
        description: "A tool for identifying and pricing trading cards using machine learning.",
        detailedDescription: [
            "Bulk tool for scraping trading card prices with ML image recognition for card name and card ID. Built with FastAPI and React, supporting Pokemon, Magic, and Yugioh cards.",
            "",
            "Features include:",
            "• CSV import/export functionality with automatic data correction",
            "• OCR model for automatic text recognition from card images",
            "• CNN Classifier Model for card type determination",
            "• ORB similarity matching algorithm for optimized results",
            "• Filtering capabilities for pricing calculations"
        ],
        link: "https://github.com/Synderis/trading_card_price_scraper",
        imageUrl: "https://i.imgur.com/qLS6VxB.png",
        images: [
            "https://i.imgur.com/yYGiOMQ.png",
            "https://i.imgur.com/lRHqCFO.png",
            "https://i.imgur.com/0kzLFQt.png",
            "https://i.imgur.com/qLS6VxB.png",
            "https://i.imgur.com/wfFfWIT.png",
            "https://i.imgur.com/gHtKHzC.png"
        ],
        techStack: ["Python", "Machine Learning", "FastAPI", "TypeScript", "Web Scraping"]
    },
    {
        title: "E-commerce Website",
        description: "A full-featured e-commerce platform built with TypeScript and FastAPI.",
        detailedDescription: [
            "A fully functional e-commerce site built using FastAPI, React, and TypeScript, with a PostgreSQL database and stripe payment integration.",
            "",
            "Key Features:",
            "• FastAPI Backend - Modern, fast web framework for building APIs",
            "• PostgreSQL - Highly customizable database for users, products, orders", 
            "• Frontend written with TypeScript/React",
            "• Complete user authentication and account management",
            "• Shopping cart and order processing system",
            "• Product catalog with detailed product pages",
            "• Admin panel with analytics features"
        ],
        link: "https://github.com/Synderis/ecommerce_site",
        imageUrl: "https://i.imgur.com/0thdFMh.png",
        images: [
            "https://i.imgur.com/dHZpW8r.png",
            "https://i.imgur.com/0thdFMh.png",
            "https://i.imgur.com/SbWATG4.jpeg",
            "https://i.imgur.com/gUYyum4.png",
            "https://i.imgur.com/ntwMA80.png",
            "https://i.imgur.com/fFHlZGM.png",
            "https://i.imgur.com/z5Q2BUB.png",
            "https://i.imgur.com/Gy6jKhP.png"
        ],
        techStack: ["Python", "TypeScript", "FastAPI", "PostgreSQL"]
    },
    {
        title: "Tekton Simulator",
        description: "A web application for simulating a boss fight in Old School RuneScape.",
        detailedDescription: [
            "A comprehensive simulation tool for the Tekton boss fight in Old School RuneScape. Users can select gear through an interactive table interface and analyze combat results.",
            "",
            "Features:",
            "• Gear selection interface with comprehensive equipment options",
            "• Combat simulation with probability density analysis",
            "• Results comparison against custom HP values",
            "• Statistical analysis with probability density visualization",
            "• Machine learning time prediction based on combat inputs",
            "• Random Forest Regression for accurate time estimates",
            "• Interactive frontend built with React"
        ],
        link: "https://github.com/Synderis/tekton_sim_app",
        imageUrl: "https://i.imgur.com/VM2d0ll.png",
        images: [
            "https://i.imgur.com/ZTvx1F8.gif",
            "https://i.imgur.com/o7NPnRi.png",
            "https://i.imgur.com/Xc6sfLb.png"
        ],
        techStack: ["Python", "TypeScript", "Machine Learning", "Statistics"]
    }
];
