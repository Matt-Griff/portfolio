// English text. src/i18n/fr.ts must have exactly the same shape (enforced by its type).
// Strings used with set:html may contain inline <span> markup.

type DetailSection = { heading: string; text?: string; bullets?: string[] };

const en = {
    meta: {
        title: "Matthieu Griffonnet's Portfolio",
        description:
            "Portfolio of Matthieu Griffonnet, final-year computer science engineering student at Polytech Nice Sophia, looking for an embedded systems internship.",
    },
    nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
    },
    controls: {
        theme: "Toggle light and dark mode",
        switchLang: "Voir le site en français",
    },
    hero: {
        badge: "Open to a 6-month internship in embedded systems",
        eyebrow: "Software engineer in training",
        projects: "See my projects",
        contact: "Contact me",
        cv: "Download CV",
        cvHref: "/cv/cv-en.pdf",
        citations: [
            "I'm looking for an embedded systems internship",
            "I'm passionate about IT",
            "I'm a final-year engineering student at Polytech Nice Sophia",
            "I play in my university's football team",
            "I'm always eager to learn new technologies",
            "I enjoy working on challenging coding projects",
            "Teamwork is at the heart of everything I do",
            "I follow the esports scene closely",
            "I like building clean and efficient back-end systems",
            "I'm currently improving my skills in web development",
        ],
    },
    about: {
        title: "About Me",
        paragraphs: [
            `Hello! My name is <span class="font-semibold text-ink">Matthieu Griffonnet</span>, and I am a final-year (5th year) computer science engineering student at <span class="font-semibold text-ink">Polytech Nice Sophia</span> (Université Côte d’Azur), specialising in <span class="font-semibold text-ink">Internet of Things &amp; Cyber-Physical Systems</span>.`,
            `I enjoy building reliable, efficient, and well-structured software, from low-level code in C to backend services in Java and Python, and computer vision pipelines. At DNIIT in Da Nang, Vietnam, I designed perceptual hashing algorithms for real-time image copy detection and co-authored a paper accepted at IEEE-Blockchain 2026.`,
            `I am currently looking for a <span class="font-semibold text-accent">6-month end-of-studies internship in embedded systems</span>, where I can put my IoT/CPS background to work, keep learning, and contribute to meaningful projects as part of a team.`,
        ],
    },
    experience: {
        title: "Experience",
        items: {
            dniit: {
                title: "Asset Management System with Image Signature Verification",
                company: "DNIIT (Da Nang International Institute of Technology)",
                location: "Da Nang, Vietnam",
                dates: "May – Aug 2026",
                highlight: "Paper accepted at IEEE-Blockchain 2026",
                bullets: [
                    "Designed two novel perceptual hashing algorithms (CHash, RHash) and a multi-criteria fusion model for real-time duplicate and copy detection of images, reaching 85.6% retrieval precision and F1 = 0.936 on a 2,112-query benchmark.",
                    "Built a two-stage retrieval pipeline (DINOv2 embeddings + FAISS/HNSW approximate search) followed by algorithmic scoring, exposed through a FastAPI microservice containerised with Docker.",
                    "Co-authored a scientific paper on this detection pipeline, accepted at IEEE-Blockchain 2026.",
                ],
            },
            auguste: {
                title: "Web Developer Intern",
                company: "Auguste.io",
                location: "Grenoble, France",
                dates: "May – Jun 2024",
                highlight: "",
                bullets: [
                    "Designed and implemented an AI-based feature for the Auguste.io platform.",
                    "Developed a video integration system that cut processing time by 40%, automating the compilation of short videos through transcript analysis.",
                ],
            },
        },
    },
    skills: {
        title: "Skills",
        groups: {
            languages: "Programming Languages",
            frameworks: "Frameworks & Tools",
            ai: "Computer Vision & AI",
            spoken: "Spoken Languages",
        },
        spoken: ["French", "English (C1 – TOEIC 960)", "Spanish (B1)"],
    },
    projects: {
        title: "Most relevant projects",
        seeMore: "See more on my GitHub",
        details: "View details",
        onGithub: "on GitHub",
        page: {
            back: "All projects",
            stack: "Tech stack",
            source: "View source on GitHub",
            team: "Team",
            gallery: "Screenshots",
            prev: "Previous project",
            next: "Next project",
        },
        items: {
            letsgobiking: {
                title: "LetsGoBiking",
                summary:
                    "An application that computes the most efficient route between two locations by combining walking and JCDecaux bike sharing. A self-hosted C# routing server exposes REST and SOAP APIs, retrieves bike station data, and dynamically decides the best path.",
                intro: "A bike route planner built for the Service-Oriented Computing course at Polytech Nice Sophia. It combines walking and JCDecaux self-service bikes to find the best route between two addresses, across cities if needed.",
                sections: [
                    {
                        heading: "How it works",
                        bullets: [
                            "The web app geocodes the start and end addresses with Nominatim (OpenStreetMap) and asks the routing service for a route.",
                            "The C# routing service fetches JCDecaux contracts and stations through a SOAP proxy.",
                            "The proxy caches JCDecaux API responses for 60 seconds, so repeated requests don't hit the API again.",
                            "The router picks the nearest departure and arrival stations with bikes or free docks available, and handles transfers between cities.",
                            "The route is drawn on a Leaflet map with station markers and instructions.",
                        ],
                    },
                    {
                        heading: "Live notifications",
                        text: "A producer publishes simulated weather, traffic and pollution alerts to ActiveMQ topics every 30 seconds (publish/subscribe). The web app subscribes over STOMP/WebSocket and shows a coloured banner for each alert.",
                    },
                    {
                        heading: "Heavy client",
                        text: "A command-line SOAP client calls the same routing service, alongside the web front end.",
                    },
                ] as DetailSection[],
                team: "Matthieu Griffonnet & Rayan Outili",
                captions: [] as string[],
            },
            "erp-service-station": {
                title: "ERP, Service Station",
                summary:
                    "A web-based ERP for a gas station, developed as a university project using Agile/Scrum. It manages daily operations, with dedicated dashboards for employees and managers.",
                intro: "An ERP (Enterprise Resource Planning) system for a service station, built as a university project with Agile methods, from requirements analysis to design, sprint planning and development.",
                sections: [
                    {
                        heading: "Agile process",
                        text: "We turned the requirements into user stories, organised them into product backlogs and sprints, and assigned Scrum roles such as Scrum Master and Product Owner.",
                    },
                    {
                        heading: "Features",
                        bullets: [
                            "Switch fuel pumps on and off",
                            "Request fuel and product restocking",
                            "Issue loyalty and credit cards",
                            "Manage purchases and payments",
                            "View and update product stock",
                            "Get alerts when incidents happen",
                            "Receive instructions from regional management",
                            "Organise services between customers",
                        ],
                    },
                    {
                        heading: "Interface",
                        text: "Two dashboards, one for employees and one for the manager. A key design constraint was to keep the cash register on the left of the screen at all times, with every other component on the right. Each component can expand to fill the right side, giving one-click access to its features.",
                    },
                ] as DetailSection[],
                team: "Tom Da Costa, Sabra Essalah, Matthieu Griffonnet, Rayan Outili, Thomas Portelette, Clara Torri, Lucas Wallner",
                captions: ["Login screen", "Dashboard", "Fuel tank levels"],
            },
            portfolio: {
                title: "Personal Portfolio",
                summary:
                    "This website, showcasing my skills, projects and experience. Built with Astro and styled with TailwindCSS, it features a responsive design and smooth GSAP animations.",
                intro: "The site you are on. It started as a Create React App project and was rebuilt with Astro, so the pages are static HTML and ship very little JavaScript.",
                sections: [
                    {
                        heading: "Features",
                        bullets: [
                            "Light and dark themes that follow your system setting, with a manual toggle",
                            "English and French versions",
                            "GSAP scroll animations, including a rocket that flies through the Education timeline",
                            "A page for each project, like this one",
                            "Built as a static site for Cloudflare Pages",
                        ],
                    },
                ] as DetailSection[],
                team: "",
                captions: [] as string[],
            },
            noesis: {
                title: "Noésis",
                summary:
                    "A quiz website that adapts to users' cognitive abilities, such as people with Alzheimer's, to keep them engaged and support brain health. Built by a team of 4 students using Agile methods.",
                intro: "A quiz website designed for people with cognitive impairments such as Alzheimer's disease. The quizzes adapt to each person's abilities to keep them engaged and support their brain health.",
                sections: [
                    {
                        heading: "What I worked on",
                        bullets: [
                            "Adaptive question difficulty",
                            "User configuration management",
                            "Back end with Node.js, containerised with Docker",
                        ],
                    },
                    {
                        heading: "Team",
                        text: "Built by a team of 4 students using Agile methods.",
                    },
                ] as DetailSection[],
                team: "",
                captions: [] as string[],
            },
        },
    },
    education: {
        title: "Education",
        items: {
            bac: {
                degree: "Baccalaureate",
                school: "Valbonne Simone Veil High School",
                description: "Specialty: Mathematics and Computer Science",
            },
            military: {
                degree: "Military Preparation Certificate",
                school: "Naval Military Preparation",
                description: "Level: Honors (Mention Bien)",
            },
            iut: {
                degree: "Bachelor's Degree in Computer Science",
                school: "IUT Nice Côte d'Azur",
                description: "Application development track: design, development, validation",
            },
            polytech: {
                degree: "Engineering degree in Computer Science",
                school: "Polytech Nice Sophia",
                description: "",
            },
            next: {
                degree: "What's next ?",
                school: "Maybe in your Company!",
                description: "",
            },
        },
    },
    contact: {
        title: "Contact Me",
        intro: `Looking for an intern for a <span class="font-semibold text-accent">6-month end-of-studies internship in embedded systems</span>? Pick whichever way suits you best.`,
        mail: "Mail",
        cv: "CV",
        cvHandle: "Download PDF",
        copy: "Copy email address",
        copied: "Copied!",
    },
    footer: {
        rights: "All rights reserved.",
    },
    notFound: {
        title: "Page not found",
        text: "This page doesn't exist, or it has moved.",
        home: "Back to home",
    },
};

export default en;
export type Dictionary = typeof en;
