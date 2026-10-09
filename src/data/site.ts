// Language-independent data. Translated text lives in src/i18n/en.ts and src/i18n/fr.ts,
// keyed by the same ids/slugs used here.

export const email = "matthieu.griffonnet1@gmail.com";
export const linkedin = "https://www.linkedin.com/in/matthieu-griffonnet/";
export const github = "https://github.com/Matt-Griff";

export const experiences = [
    { id: "dniit", stack: ["Python", "PyTorch", "FAISS", "OpenCV", "FastAPI", "Docker", "Git", "Linux"] },
    { id: "auguste", stack: [] as string[] },
] as const;

export const projects = [
    {
        slug: "letsgobiking",
        image: "/images/projects/letsgobiking-route.webp",
        link: "https://github.com/Matt-Griff/LetsGoBiking",
        tools: ["C#", ".NET (WCF)", "REST/SOAP", "Proxy / Cache", "ActiveMQ", "Leaflet", "Vanilla HTML"],
        gallery: [
            "/images/projects/letsgobiking-route.webp",
            "/images/projects/letsgobiking-form.webp",
        ],
    },
    {
        slug: "laserdiff",
        image: "/images/projects/laserdiff-game.webp",
        link: "https://github.com/Matt-Griff/ps8-Laserdiff",
        tools: ["Node.js", "JavaScript", "Microservices", "Socket.IO", "MongoDB", "JWT", "Docker"],
        gallery: [
            "/images/projects/laserdiff-game.webp",
            "/images/projects/laserdiff-home.webp",
        ],
    },
    {
        slug: "dam",
        image: "/images/projects/dam-upload.webp",
        link: "https://github.com/HammoudYounes/dam-blockchain",
        tools: ["Python", "FastAPI", "PyTorch", "FAISS", "Solidity", "Polygon", "NestJS", "Next.js", "Docker"],
        gallery: [
            "/images/projects/dam-upload.webp",
            "/images/projects/dam-contracts.webp",
        ],
    },
    {
        slug: "noesis",
        image: "/images/projects/noesis-quizlist.webp",
        link: "https://github.com/Matt-Griff/si3-ps6-noesis",
        tools: ["Angular", "TypeScript", "Node.js", "Express", "Chart.js", "Playwright", "Docker"],
        gallery: [
            "/images/projects/noesis-quiz.webp",
            "/images/projects/noesis-quizlist.webp",
            "/images/projects/noesis-profiles.webp",
        ],
    },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export const education = [
    { id: "bac", logo: "/images/valbonne.png", years: "2019 - 2022" },
    { id: "military", logo: "/images/marine.png", years: "2021 - 2022" },
    { id: "iut", logo: "/images/iut.png", years: "2022 - 2024" },
    { id: "polytech", logo: "/images/polytech.png", years: "2024 - 2027" },
    { id: "next", logo: "/images/next.png", years: "2027 - ..." },
] as const;
