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
                captions: ["Un trajet à travers Lyon : marche, vélo entre deux stations JCDecaux, marche", "Formulaire d’itinéraire avec autocomplétion des adresses"],
            },
            laserdiff: {
                title: "Laser Diff",
                summary:
                    "Un jeu d’échecs laser Khet en ligne, construit en microservices Node.js : en local, contre une IA (minimax) ou en ligne en 1v1, avec classement Elo, ligues, amis, duels et chat en temps réel.",
                intro: "Laser Diff est une version web de Khet, le jeu d’échecs laser où des pièces à miroirs font rebondir des lasers sur le plateau, réalisée en équipe de 3 pour le projet PS8 à Polytech Nice Sophia.",
                sections: [
                    {
                        heading: "Modes de jeu",
                        bullets: [
                            "1v1 en local sur le même écran",
                            "Joueur contre IA, avec un algorithme minimax limité à 250 ms par coup",
                            "1v1 en ligne, avec des salons de duel privés entre amis",
                            "Un chronomètre de 10 minutes par joueur, et 30 secondes pour se reconnecter après une déconnexion",
                        ],
                    },
                    {
                        heading: "Joueurs et communauté",
                        bullets: [
                            "Inscription et connexion avec des jetons JWT (accès et rafraîchissement)",
                            "Classement Elo et ligues, jusqu’à Challenger à 2400",
                            "Profil avec historique des parties et évolution de l’Elo, plus un classement général",
                            "Demandes d’ami, duels et chat privé entre amis",
                            "Chat global en temps réel avec filtre de mots, et chat en partie avec emotes et messages prédéfinis",
                        ],
                    },
                    {
                        heading: "Architecture",
                        text: "Huit services Node.js (auth, game, chat, files, friends, ranking, user et une gateway) plus MongoDB, lancés avec Docker Compose. La gateway est le point d’entrée unique : elle relaie les requêtes HTTP et garde les connexions WebSocket vers les services de jeu et de chat, si bien que la vérification des JWT se fait à un seul endroit et que les services internes ne sont jamais exposés.",
                    },
                ],
                team: "Louis Duban, Matthieu Griffonnet, Thomas Portelette",
                captions: ["Une partie en 1v1 local : plateau, chronomètres, historique des coups et chat en partie", "Page d’accueil avec les trois modes de jeu"],
            },
            dam: {
                title: "DAM sur blockchain",
                summary:
                    "Un système de gestion d’actifs numériques (DAM) qui prouve la propriété des images et détecte les copies non autorisées, en combinant hachage perceptuel, signatures cryptographiques et NFT sur Polygon. Réalisé pendant mon stage au DNIIT.",
                intro: "Un système de gestion d’actifs numériques (DAM) réalisé pendant mon stage au DNIIT, à Da Nang (Vietnam). Chaque image importée reçoit une empreinte par hachage perceptuel, est signée par son créateur et enregistrée comme NFT sur Polygon : on peut ainsi prouver sa propriété et détecter les copies quasi identiques.",
                sections: [
                    {
                        heading: "Fonctionnement",
                        bullets: [
                            "Import : l’image est hachée avec six algorithmes perceptuels (aHash, dHash, pHash, hachage couleur, CHash et RHash)",
                            "Vérification : les empreintes sont comparées à l’index pour repérer doublons et copies avant l’enregistrement",
                            "Blockchain : le créateur signe l’empreinte, et l’actif est créé comme NFT sur le réseau de test Polygon Amoy",
                        ],
                    },
                    {
                        heading: "Détection de copies d’images",
                        text: "J’ai conçu deux algorithmes de hachage perceptuel inédits, CHash et RHash, et un modèle de fusion multi-critères. Un pipeline de recherche en deux étapes (embeddings DINOv2 et recherche approximative FAISS/HNSW, suivis d’un scoring algorithmique) atteint 85,6 % de précision de récupération et un F1 = 0,936 sur un benchmark de 2 112 requêtes. Ce travail a donné lieu à un article accepté à IEEE-Blockchain 2026.",
                    },
                    {
                        heading: "Architecture",
                        bullets: [
                            "Service de hachage : Python et FastAPI, pour le hachage, la signature et la comparaison d’images",
                            "Smart contracts : Solidity et Hardhat. DAMAsset (ERC-721), DAMSignature (empreinte et signature ECDSA) et DAMVerifier (vérification de la signature on-chain), vérifiés sur Polygonscan",
                            "Back-end : API NestJS avec PostgreSQL, qui relie le front-end, le service de hachage et la blockchain",
                            "Front-end : Next.js avec connexion au portefeuille MetaMask, pour importer, créer et vérifier les actifs",
                        ],
                    },
                ],
                team: "",
                captions: ["Enregistrer un nouvel actif : import, hachage, blockchain", "Les trois smart contracts et leurs liens"],
            },
            noesis: {
                title: "Noésis",
                summary:
                    "Une application web de quiz adaptatifs pour les personnes atteintes de la maladie d’Alzheimer : les quiz s’adaptent au profil de chaque accueilli, et les accompagnants suivent leur évolution grâce aux statistiques. Réalisée par une équipe de 4 en méthode agile.",
                intro: "Noésis est une application de quiz adaptatifs pour les personnes atteintes de la maladie d’Alzheimer en accueil de jour. Chaque accueilli a un profil dont les réglages modifient l’affichage et le déroulement des quiz, et les accompagnants peuvent suivre ses résultats dans le temps.",
                sections: [
                    {
                        heading: "Adapté à chaque accueilli",
                        bullets: [
                            "Taille des textes et des images",
                            "Délai avant l’apparition d’un indice et avant un message d’encouragement",
                            "Confirmation facultative avant de valider une réponse",
                            "Nombre de réponses par question, avec suppression des mauvaises réponses ou passage à la question suivante après plusieurs erreurs",
                        ],
                    },
                    {
                        heading: "Suivi pour les accompagnants",
                        text: "Chaque accueilli a une page de statistiques : score, temps moyen par question, nombre d’essais, utilisation des indices et questions passées, sous forme de graphique dans le temps et d’historique des parties. Les psychologues et le personnel de l’accueil de jour peuvent ainsi suivre l’évolution des capacités de chacun.",
                    },
                    {
                        heading: "Gestion du contenu",
                        text: "Les accompagnants créent et modifient les profils des accueillis et les quiz, avec questions, indices et niveaux de difficulté, et une validation des formulaires.",
                    },
                    {
                        heading: "Tests et déploiement",
                        text: "Tests de bout en bout avec Playwright, priorisés selon trois critères : le bien-être de l’accueilli, l’adaptation à la maladie et le suivi de la maladie. Le front-end et le back-end tournent avec Docker Compose, avec une configuration dédiée aux tests.",
                    },
                    {
                        heading: "Ma contribution",
                        bullets: [
                            "Difficulté des questions adaptative",
                            "Gestion de la configuration des utilisateurs",
                            "Back-end en Node.js, conteneurisé avec Docker",
                        ],
                    },
                ],
                team: "4 étudiants, méthode agile",
                captions: ["Un quiz en cours, avec de grandes réponses illustrées", "Les quiz regroupés par thème", "Les profils des accueillis, gérés par les accompagnants"],
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
        cv: "CV",
        cvHandle: "Télécharger le PDF",
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
