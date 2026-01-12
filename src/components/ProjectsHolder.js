import React from "react";
import ProjectCard from './ProjectCard';

const projects = [
    {
        // Removed manual grid positioning classes. The Grid component handles layout now.
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
        tools: ['React', 'Express', 'PostgreSQL', 'Heroku', "Agile/Scrum", "Sprint Planning"], // Added dummy tools for consistent look
        description: `ERP of a Service Station is a web-based application developed as part of a university project using 
        Agile/Scrum methodologies. The system manages daily operations of a gas station, with dedicated dashboards for
         employees and managers.`,
        image: "./images/erp.png",
        link: "https://github.com/Matt-Griff/ERP_station_service"
    },
    // You can now add a 3rd or 4th project here easily without breaking the layout
];

export default function ProjectHolder() {
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

            {/* Grid Container 
               - grid-cols-1: 1 column on mobile
               - md:grid-cols-2: 2 columns on tablets/desktops
               - max-w-7xl: Prevents cards from getting too wide on huge screens
            */}
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
        </div>
    );
}