import { useState } from "react";

export default function ProjectCard({ className, tools, title }) {

    let opened = useState(false);

    const handleClick = () => {
        opened = !opened;
        console.log(opened);
    };

    return (

        <div
            onClick={handleClick}
            className={`cardBox ${className} w-[40vw] h-[400px] bg-red-500 flex rounded-[5px] p-[10px]`}>
            <div className="w-[60%] h-[100%] flex flex-col justify-evenly">

                <div className="text-5xl ">{title}</div>

                {/* Liste des outils */}
                <div className="flex gap-2">
                    {tools?.map((tool, index) => (
                        <span key={index} className="bg-black/30 px-2 py-1 rounded">
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="flex h-[calc(300px-4rem)]">
                    <div className="line-clamp overflow-hidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <img className="w-[40%] object-cover" src="/images/j.png" alt="img project" />
        </div>
    );
}   