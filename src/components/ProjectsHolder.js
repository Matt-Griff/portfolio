import React from "react";
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "LetsGoBiking",
        tools: ['C#', '.NET (WCF)', 'REST/SOAP', 'Proxy / Cache', 'ActiveMQ', 'Leaflet', 'Vanilla HTML'],
        description: `Let’s Go Biking is an application that computes the most efficient route between
    two locations by combining walking and JCDecaux bike sharing. A self-hosted C# routing server exposes both REST 
    and SOAP APIs, retrieves bike station data, and decides dynamically the best path`,
        image: "./images/letsGo.png",
        link: "https://github.com/Matt-Griff/LetsGoBiking"
    },
    {
        title: "ERP, Service Station",
        tools: ['React', 'Express', 'PostgreSQL', 'Heroku', "Agile/Scrum", "Sprint Planning"],
        description: `ERP of a Service Station is a web-based application developed as part of a university project using 
        Agile/Scrum methodologies. The system manages daily operations of a gas station, with dedicated dashboards for
         employees and managers.`,
        image: "./images/erp.png",
        link: "https://github.com/Matt-Griff/ERP_station_service"
    },
    {
        title: "Personal Portfolio",
        tools: ['React', 'TailwindCSS', 'Vercel', 'GitHub Pages'],
        description: `This personal portfolio website showcases my skills, projects, and experiences as a software developer.
        Built with React and styled using TailwindCSS, it features a responsive design and smooth animations to enhance user experience.`,
        image: "./images/port.png",
        link: "https://github.com/Matt-Griff/portfolio"
    },
    {
        title: "Noésis",
        tools: ['Nose.js', 'Docker', 'Angular.js', 'TypeSript', 'WireFrame'],
        description: `Developed a quiz website that adapts to user's cognitive abilities like alzheimer to maintain their engagement and brain health. 
        Built with a team of 4 students using Agile methods.
        Implemented adaptive question difficulty and user configuration management using Nose.js and Docker`,
        image: "./images/noesis.png",
        link: "https://github.com/Matt-Griff/si3-ps6-noesis"
    }
];

export default function ProjectHolder() {

    const handleSeeMoreClick = () => {
        window.open("https://github.com/Matt-Griff");
    };

    return (
        <div id='projects' className="w-full pb-20">
            {/* Header Section */}
            <div className='w-[95%] max-w-7xl mx-auto mt-10 mb-12'>
                <div className='bg-[#3A2622] rounded-lg p-6 shadow-xl border border-[#5a3a2a]/30'>
                    <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left drop-shadow-md'>
                        Most relevant projects
                    </h2>
                </div>
            </div>

            <div className="
                grid grid-cols-1 md:grid-cols-2 
                gap-8 md:gap-12 
                w-[95%] max-w-7xl mx-auto 
                place-items-start"
            >
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        {...project}
                        className="w-full h-full"
                    />
                ))}
            </div>
            <div className="w-full flex justify-center mt-12">
                <div className=" bg-[#3A2622] rounded-lg p-4 md:p-6 shadow-xl border border-[#5a3a2a]/30">
                    <button onClick={handleSeeMoreClick}>See more on my GitHub</button>
                </div>
            </div>
        </div>
    );
}