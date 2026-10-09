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
        image: "/images/letsGo.png",
        link: "https://github.com/Matt-Griff/LetsGoBiking",
        tools: ["C#", ".NET (WCF)", "REST/SOAP", "Proxy / Cache", "ActiveMQ", "Leaflet", "Vanilla HTML"],
        gallery: [] as string[],
    },
    {
        slug: "erp-service-station",
        image: "/images/projects/erp-dashboard.webp",
        link: "https://github.com/Matt-Griff/ERP_station_service",
        tools: ["React", "Express", "PostgreSQL", "Heroku", "Agile/Scrum", "Sprint Planning"],
        gallery: [
            "/images/projects/erp-login.webp",
            "/images/projects/erp-dashboard.webp",
            "/images/projects/erp-tanks.webp",
        ],
    },
    {
        slug: "portfolio",
        image: "/images/port.png",
        link: "https://github.com/Matt-Griff/portfolio",
        tools: ["Astro", "TailwindCSS", "GSAP", "Cloudflare Pages"],
        gallery: [] as string[],
    },
    {
        slug: "noesis",
        image: "/images/noesis.png",
        link: "https://github.com/Matt-Griff/si3-ps6-noesis",
        tools: ["Node.js", "Docker", "Angular", "TypeScript", "Wireframing"],
        gallery: [] as string[],
    },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export const education = [
    { id: "bac", logo: "/images/valbonne.png", years: "2019 - 2022" },
    { id: "military", logo: "/images/marine.png", years: "2021 - 2022" },
    { id: "iut", logo: "/images/iut.png", years: "2022 - 2024" },
    { id: "polytech", logo: "/images/polytech.png", years: "2024 - 2027" },
    { id: "next", logo: "/images/polytech.png", years: "2027 - ..." },
] as const;
