// French text. Same shape as en.ts.
import type { Dictionary } from './en';

const fr: Dictionary = {
    meta: {
        title: "Portfolio de Matthieu Griffonnet",
        description:
            "Portfolio de Matthieu Griffonnet, étudiant en dernière année du cycle ingénieur en informatique à Polytech Nice Sophia, à la recherche d’un stage en systèmes embarqués.",
    },
    nav: {
        about: "À propos",
        experience: "Expérience",
        skills: "Compétences",
        projects: "Projets",
        education: "Formation",
        contact: "Contact",
    },
    controls: {
        theme: "Basculer entre le mode clair et sombre",
        switchLang: "View the site in English",
    },
    hero: {
        badge: "Disponible pour un stage de 6 mois en systèmes embarqués",
        eyebrow: "Futur ingénieur logiciel",
        projects: "Voir mes projets",
        contact: "Me contacter",
        cv: "Télécharger mon CV",
        cvHref: "/cv/cv-fr.pdf",
        citations: [
            "Je cherche un stage en systèmes embarqués",
            "Je suis passionné d’informatique",
            "Je suis en dernière année d’école d’ingénieur à Polytech Nice Sophia",
            "Je joue dans l’équipe de football de mon université",
            "J’aime toujours découvrir de nouvelles technologies",
            "J’aime travailler sur des projets techniques exigeants",
            "Le travail d’équipe est au cœur de tout ce que je fais",
            "Je suis de près la scène e-sport",
            "J’aime concevoir des back-ends propres et efficaces",
            "Je continue de progresser en développement web",
        ],
    },
    about: {
        title: "À propos",
        paragraphs: [
            `Bonjour ! Je m’appelle <span class="font-semibold text-ink">Matthieu Griffonnet</span> et je suis étudiant en dernière année (5e année) du cycle ingénieur en informatique à <span class="font-semibold text-ink">Polytech Nice Sophia</span> (Université Côte d’Azur), spécialisation <span class="font-semibold text-ink">Internet des Objets &amp; Systèmes Cyber-Physiques</span>.`,
            `J’aime concevoir des logiciels fiables, efficaces et bien structurés, du code bas niveau en C aux services back-end en Java et Python, en passant par des pipelines de vision par ordinateur. Au DNIIT, à Da Nang (Vietnam), j’ai conçu des algorithmes de hachage perceptuel pour la détection de copies d’images en temps réel et co-écrit un article accepté à IEEE-Blockchain 2026.`,
            `Je recherche actuellement un <span class="font-semibold text-accent">stage de fin d’études de 6 mois en systèmes embarqués</span>, pour mettre à profit ma formation IoT/CPS, continuer à apprendre et contribuer à des projets qui ont du sens au sein d’une équipe.`,
        ],
    },
    experience: {
        title: "Expérience",
        items: {
            dniit: {
                title: "Système de gestion d’actifs avec vérification de signature d’image",
                company: "DNIIT (Da Nang International Institute of Technology)",
                location: "Da Nang, Vietnam",
                dates: "Mai – Août 2026",
                highlight: "Article accepté à IEEE-Blockchain 2026",
                bullets: [
                    "Conception de deux algorithmes de hachage perceptuel inédits (CHash, RHash) et d’un modèle de fusion multi-critères pour la détection en temps réel de doublons et copies d’images, atteignant 85,6 % de précision de récupération et un F1 = 0,936 sur un benchmark de 2 112 requêtes.",
                    "Développement d’un pipeline de recherche en deux étapes (embeddings DINOv2 + recherche approximative FAISS/HNSW) suivi d’un scoring algorithmique, exposé via un microservice FastAPI conteneurisé avec Docker.",
                    "Co-auteur d’un article scientifique sur ce pipeline de détection, accepté à IEEE-Blockchain 2026.",
                ],
            },
            auguste: {
                title: "Développeur web stagiaire",
                company: "Auguste.io",
                location: "Grenoble, France",
                dates: "Mai – Juin 2024",
                highlight: "",
                bullets: [
                    "Conception et implémentation d’une fonctionnalité basée sur l’IA pour la plateforme Auguste.io.",
                    "Développement d’un système d’intégration vidéo réduisant le temps de traitement de 40 %, automatisant la compilation de courtes vidéos par analyse de transcription.",
                ],
            },
        },
    },
    skills: {
        title: "Compétences",
        groups: {
            languages: "Langages de programmation",
            frameworks: "Frameworks & outils",
            ai: "Vision par ordinateur & IA",
            spoken: "Langues",
        },
        spoken: ["Français", "Anglais (C1 – TOEIC 960)", "Espagnol (B1)"],
    },
    projects: {
        title: "Projets les plus marquants",
        seeMore: "Voir plus sur mon GitHub",
        details: "Voir le détail",
        onGithub: "sur GitHub",
        page: {
            back: "Tous les projets",
            stack: "Technologies",
            source: "Voir le code sur GitHub",
            team: "Équipe",
            gallery: "Captures d’écran",
            prev: "Projet précédent",
            next: "Projet suivant",
        },
        items: {
            letsgobiking: {
                title: "LetsGoBiking",
                summary:
                    "Une application qui calcule l’itinéraire le plus efficace entre deux lieux en combinant marche et vélos en libre-service JCDecaux. Un serveur de routage C# auto-hébergé expose des API REST et SOAP, récupère les données des stations et choisit dynamiquement le meilleur trajet.",
                intro: "Un calculateur d’itinéraires vélo réalisé pour le cours d’Informatique Orientée Services à Polytech Nice Sophia. Il combine marche et vélos en libre-service JCDecaux pour trouver le meilleur trajet entre deux adresses, y compris d’une ville à l’autre.",
                sections: [
                    {
                        heading: "Fonctionnement",
                        bullets: [
                            "L’application web géocode les adresses de départ et d’arrivée avec Nominatim (OpenStreetMap) puis demande un itinéraire au service de routage.",
                            "Le service de routage C# récupère les contrats et les stations JCDecaux via un proxy SOAP.",
                            "Le proxy met en cache les réponses de l’API JCDecaux pendant 60 secondes, pour ne pas la rappeler à chaque requête.",
                            "Le routeur choisit les stations de départ et d’arrivée les plus proches avec des vélos ou des places disponibles, et gère les transferts entre villes.",
                            "L’itinéraire s’affiche sur une carte Leaflet avec les stations et les instructions.",
                        ],
                    },
                    {
                        heading: "Notifications en temps réel",
                        text: "Un producteur publie toutes les 30 secondes des alertes simulées (météo, trafic, pollution) sur des topics ActiveMQ (publish/subscribe). L’application web s’y abonne en STOMP/WebSocket et affiche un bandeau coloré pour chaque alerte.",
                    },
                    {
                        heading: "Client lourd",
                        text: "Un client SOAP en ligne de commande appelle le même service de routage, en plus de l’interface web.",
                    },
                ],
                team: "Matthieu Griffonnet & Rayan Outili",
                captions: [],
            },
            "erp-service-station": {
                title: "ERP, station-service",
                summary:
                    "Un ERP web pour une station-service, développé en projet universitaire avec la méthode Agile/Scrum. Il gère les opérations quotidiennes, avec des tableaux de bord dédiés aux employés et au gérant.",
                intro: "Un ERP (progiciel de gestion intégré) pour une station-service, réalisé en projet universitaire avec des méthodes agiles : de l’analyse des besoins à la conception, en passant par la planification des sprints et le développement.",
                sections: [
                    {
                        heading: "Démarche agile",
                        text: "Nous avons transformé les besoins en user stories, organisées en product backlogs et en sprints, et attribué les rôles Scrum comme Scrum Master et Product Owner.",
                    },
                    {
                        heading: "Fonctionnalités",
                        bullets: [
                            "Mettre en marche et arrêter les pompes",
                            "Demander des réapprovisionnements (carburant et produits)",
                            "Délivrer des cartes de fidélité et de crédit",
                            "Gérer les achats et les encaissements",
                            "Consulter et mettre à jour les stocks de produits",
                            "Être alerté en cas d’incident",
                            "Recevoir les directives de la direction régionale",
                            "Organiser des services entre particuliers",
                        ],
                    },
                    {
                        heading: "Interface",
                        text: "Deux tableaux de bord, l’un pour l’employé, l’autre pour le gérant. Contrainte de conception majeure : garder la caisse toujours à gauche de l’écran et tous les autres composants à droite. Chaque composant peut s’étendre sur toute la partie droite, pour un accès en un clic à ses fonctionnalités.",
                    },
                ],
                team: "Tom Da Costa, Sabra Essalah, Matthieu Griffonnet, Rayan Outili, Thomas Portelette, Clara Torri, Lucas Wallner",
                captions: ["Écran de connexion", "Tableau de bord", "État des cuves"],
            },
            portfolio: {
                title: "Portfolio personnel",
                summary:
                    "Ce site, qui présente mes compétences, mes projets et mon parcours. Réalisé avec Astro et stylé avec TailwindCSS, il est responsive et animé avec GSAP.",
                intro: "Le site sur lequel vous êtes. D’abord réalisé avec Create React App, il a été refait avec Astro : les pages sont du HTML statique et embarquent très peu de JavaScript.",
                sections: [
                    {
                        heading: "Fonctionnalités",
                        bullets: [
                            "Thèmes clair et sombre qui suivent le réglage de votre système, avec un bouton pour changer",
                            "Versions française et anglaise",
                            "Animations au défilement avec GSAP, dont une fusée qui traverse la frise de formation",
                            "Une page par projet, comme celle-ci",
                            "Site statique prévu pour Cloudflare Pages",
                        ],
                    },
                ],
                team: "",
                captions: [],
            },
            noesis: {
                title: "Noésis",
                summary:
                    "Un site de quiz qui s’adapte aux capacités cognitives de ses utilisateurs, par exemple des personnes atteintes d’Alzheimer, pour maintenir leur engagement et leur santé cérébrale. Réalisé par une équipe de 4 étudiants en méthode agile.",
                intro: "Un site de quiz pensé pour des personnes ayant des troubles cognitifs comme la maladie d’Alzheimer. Les quiz s’adaptent aux capacités de chacun pour maintenir l’engagement et la santé cérébrale.",
                sections: [
                    {
                        heading: "Ma contribution",
                        bullets: [
                            "Difficulté des questions adaptative",
                            "Gestion de la configuration des utilisateurs",
                            "Back-end en Node.js, conteneurisé avec Docker",
                        ],
                    },
                    {
                        heading: "Équipe",
                        text: "Réalisé par une équipe de 4 étudiants en méthode agile.",
                    },
                ],
                team: "",
                captions: [],
            },
        },
    },
    education: {
        title: "Formation",
        items: {
            bac: {
                degree: "Baccalauréat",
                school: "Lycée Simone Veil, Valbonne",
                description: "Spécialités : Mathématiques et Informatique",
            },
            military: {
                degree: "Certificat de préparation militaire",
                school: "Préparation militaire Marine",
                description: "Mention Bien",
            },
            iut: {
                degree: "BUT Informatique",
                school: "IUT Nice Côte d’Azur",
                description: "Parcours Réalisation d’applications : conception, développement, validation",
            },
            polytech: {
                degree: "Diplôme d’ingénieur en informatique",
                school: "Polytech Nice Sophia",
                description: "",
            },
            next: {
                degree: "Et ensuite ?",
                school: "Peut-être dans votre entreprise !",
                description: "",
            },
        },
    },
    contact: {
        title: "Me contacter",
        intro: `Vous cherchez un stagiaire pour un <span class="font-semibold text-accent">stage de fin d’études de 6 mois en systèmes embarqués</span> ? Choisissez le moyen qui vous convient.`,
        mail: "E-mail",
        copy: "Copier l’adresse e-mail",
        copied: "Copiée !",
    },
    footer: {
        rights: "Tous droits réservés.",
    },
    notFound: {
        title: "Page introuvable",
        text: "Cette page n’existe pas ou a été déplacée.",
        home: "Retour à l’accueil",
    },
};

export default fr;
