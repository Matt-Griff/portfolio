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
                captions: ["A route across Lyon: walk, bike between two JCDecaux stations, walk", "Route form with address autocompletion"],
            },
            laserdiff: {
                title: "Laser Diff",
                summary:
                    "An online Khet laser chess game built with Node.js microservices: play locally, against an AI (minimax) or online 1v1, with Elo ranking, leagues, friends, duels and real-time chat.",
                intro: "Laser Diff is a web version of Khet, the laser chess game where mirrored pieces bounce lasers across the board, built by a team of 3 for the PS8 project at Polytech Nice Sophia.",
                sections: [
                    {
                        heading: "Game modes",
                        bullets: [
                            "Local 1v1 on the same screen",
                            "Player vs AI, using a minimax algorithm limited to 250 ms per move",
                            "Online 1v1, including private duel rooms between friends",
                            "A 10-minute timer per player, and 30 seconds to reconnect after a disconnection",
                        ],
                    },
                    {
                        heading: "Players and community",
                        bullets: [
                            "Sign-up and login with JWT access and refresh tokens",
                            "Elo rating and leagues, up to Challenger at 2400",
                            "Profile with game history and Elo changes, plus a leaderboard",
                            "Friend requests, duels and a private friend chat",
                            "Real-time global chat with a word filter, and in-game chat with emotes and preset messages",
                        ],
                    },
                    {
                        heading: "Architecture",
                        text: "Eight Node.js services (auth, game, chat, files, friends, ranking, user and a gateway) plus MongoDB, run with Docker Compose. The gateway is the single entry point: it forwards HTTP requests and keeps WebSocket connections to the game and chat services, so JWT checks happen in one place and internal services are never exposed.",
                    },
                ] as DetailSection[],
                team: "Louis Duban, Matthieu Griffonnet, Thomas Portelette",
                captions: ["A local 1v1 game: board, timers, move history and in-game chat", "Home page with the three game modes"],
            },
            dam: {
                title: "Blockchain-backed DAM",
                summary:
                    "A Digital Asset Management system that proves image ownership and detects unauthorised copies, combining perceptual hashing, cryptographic signatures and NFTs on Polygon. Built during my internship at DNIIT.",
                intro: "A Digital Asset Management system built during my internship at DNIIT in Da Nang, Vietnam. Each uploaded image is fingerprinted with perceptual hashes, signed by its creator and registered as an NFT on Polygon, so ownership can be proven and near-duplicate copies detected.",
                sections: [
                    {
                        heading: "How it works",
                        bullets: [
                            "Upload: the image is hashed with six perceptual algorithms (aHash, dHash, pHash, colour hash, CHash and RHash)",
                            "Check: the hashes are compared against the index to catch duplicates and copies before registration",
                            "Blockchain: the creator signs the hash, and the asset is minted as an NFT on the Polygon Amoy testnet",
                        ],
                    },
                    {
                        heading: "Image copy detection",
                        text: "I designed two novel perceptual hashing algorithms, CHash and RHash, and a multi-criteria fusion model. A two-stage retrieval pipeline (DINOv2 embeddings and FAISS/HNSW approximate search, followed by algorithmic scoring) reaches 85.6% retrieval precision and F1 = 0.936 on a 2,112-query benchmark. The work led to a paper accepted at IEEE-Blockchain 2026.",
                    },
                    {
                        heading: "Architecture",
                        bullets: [
                            "Hashing service: Python and FastAPI, for hashing, signing and similarity checks",
                            "Smart contracts: Solidity and Hardhat. DAMAsset (ERC-721), DAMSignature (hash and ECDSA signature) and DAMVerifier (on-chain signature recovery), verified on Polygonscan",
                            "Back end: NestJS API with PostgreSQL, linking the front end, the hashing service and the blockchain",
                            "Front end: Next.js with MetaMask wallet connection, for uploading, minting and verifying assets",
                        ],
                    },
                ] as DetailSection[],
                team: "",
                captions: ["Registering a new asset: upload, hashing, blockchain", "The three smart contracts and how they connect"],
            },
            noesis: {
                title: "Noésis",
                summary:
                    "An adaptive quiz web app for people with Alzheimer's disease: quizzes adjust to each resident's profile, and caregivers follow their progress through statistics. Built by a team of 4 using Agile methods.",
                intro: "Noésis is an adaptive quiz application for people with Alzheimer's disease in day-care centres. Each resident has a profile whose settings change how quizzes look and behave, and caregivers can follow their results over time.",
                sections: [
                    {
                        heading: "Adapted to each resident",
                        bullets: [
                            "Text and image sizes",
                            "Delay before a hint appears, and before an encouragement reminder",
                            "Optional confirmation before validating an answer",
                            "Number of answers per question, with wrong answers removed or the question skipped after repeated mistakes",
                        ],
                    },
                    {
                        heading: "Follow-up for caregivers",
                        text: "Each resident has a statistics page: score, average time per question, attempts per question, hint use and skipped questions, shown as a chart over time and a game history. It helps psychologists and day-care staff see how each person's abilities evolve.",
                    },
                    {
                        heading: "Managing content",
                        text: "Caregivers create and edit resident profiles and quizzes, with questions, hints and difficulty levels, and form validation throughout.",
                    },
                    {
                        heading: "Testing and deployment",
                        text: "End-to-end tests with Playwright, prioritised by three criteria: the resident's well-being, adaptation to the disease, and follow-up of the disease. The front end and back end run with Docker Compose, with a separate setup for the tests.",
                    },
                    {
                        heading: "What I worked on",
                        bullets: [
                            "Adaptive question difficulty",
                            "User configuration management",
                            "Back end with Node.js, containerised with Docker",
                        ],
                    },
                ] as DetailSection[],
                team: "4 students, Agile methods",
                captions: ["A quiz in progress, with large picture answers", "Quizzes grouped by theme", "Resident profiles, managed by caregivers"],
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
