
const educationData = [
    {
        logo: "./images/valbonne.png",
        school: "Valbonne Simone Veil High School",
        degree: "Baccalaureate",
        years: "2019 - 2022",
        description: "Specialty: Mathematics and Computer Science",
    },
    {
        logo: "./images/marine.png",
        school: "Naval Military Preparation",
        degree: "Military Preparation Certificate",
        years: "2021 - 2022",
        description: "Level: Honors (Mention Bien)",
    },
    {
        logo: "./images/iut.png",
        school: "IUT Nice Côte d'Azur",
        degree: "Bachelor's Degree in Computer Science",
        years: "2022 - 2024",
        description: "Application development track: design, development, validation",
    },
    {
        logo: "./images/polytech.png",
        school: "Polytech Nice Sophia",
        degree: "Engineering degree in Computer Science",
        years: "2024 - 2027",
    },
    {
        logo: "./images/polytech.png",
        school: "Maybe in your Company!",
        degree: "What's next ?",
        years: "2027 - ...",
    }
];

export default function Education() {
    return (
        <>
            <div>
                <div className='bg-auto bg-[#3A2622] w-[97%] rounded-lg mt-5 mb-10 flex items-center mx-auto' id="education">
                    <div className='text-6xl p-6'> Education </div>
                </div>
                <div className='grid grid-rows-5 grid-cols-[100px_1fr] gap-8 w-[70%] mx-auto mb-20'>
                    {educationData.map((edu, idx) => (
                        <div key={idx} className="col-start-2 col-span-2 flex items-center bg-[#3A2622] rounded-lg p-4 shadow-xl">
                            {edu.logo && (
                                <img src={edu.logo} alt={edu.school + ' logo'} className="w-16 h-16 object-contain rounded-full bg-white p-1 shadow-md mr-6" />
                            )}
                            <div className="flex-1 ">
                                <div className="flex flex-col md:flex-row md:items-center w-full place-content-between">
                                    <div className="text-2xl font-semibold">{edu.degree}</div>
                                    <div className="ml-auto text-xl md:ml-6">{edu.years}</div>
                                </div>
                                <div className="text-sm mt-1">{edu.school}</div>
                                {edu.description && <div className="mt-2 text-md">{edu.description}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};