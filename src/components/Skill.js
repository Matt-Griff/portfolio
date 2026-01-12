import StackLoop from './StackLoop';

export default function Skill() {
    return (
        <div className="skills-container">

            {/* Header Section */}
            <div className='w-[95%]  mx-auto mt-10 mb-12'>
                <div className='bg-[#3A2622] rounded-lg p-6 shadow-xl border border-[#5a3a2a]/30'>
                    <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left drop-shadow-md'>
                        Skills
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 w-[90vw] mx-auto mb-8">
                {/* Programming Languages */}
                <div className="flex flex-col items-center w-[90%]">
                    <span className="font-semibold mb-2">Programming Languages</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
                        <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                        <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" />
                        <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                        <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" alt="Bash" />
                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                        <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
                    </div>
                </div>
                {/* Frameworks & Tools */}
                <div className="flex flex-col items-center w-[90%]">
                    <span className="font-semibold mb-2">Frameworks & Tools</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                        <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
                        <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
                        <img src="https://img.shields.io/badge/.Net-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".Net" />
                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                        <img src="https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white" alt="JUnit" />
                        <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="RabbitMQ" />
                        <img src="https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white" alt="Cucumber" />
                        <img src="https://img.shields.io/badge/CI%2FCD-4285F4?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI/CD" />
                    </div>
                </div>
            </div>

            <div>

            </div>

            {/* Skills List Section */}
            <div className="skills-list">
                <StackLoop />
            </div>
        </div>
    );
}