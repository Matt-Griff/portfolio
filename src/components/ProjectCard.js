export default function ProjectCard({ className, tools, title, description, image, link }) {

    const handleButtonClick = () => {
        window.open(link, '_blank');
    };



    return (
        <div
            className={`cardBox ${className} 
            w-[90%] mx-auto md:w-full h-auto md:h-[600px] 
            flex flex-col justify-between content-center 
            
            bg-[#3A2622] rounded-lg p-4 md:p-6 shadow-2xl border border-[#5a3a2a]/30
            `}
        >
            {/* Header: Title & Icon */}
            <div className="flex items-start md:items-center justify-between mb-4 gap-2">
                <div className="text-3xl md:text-5xl font-bold drop-shadow-lg break-words w-full">
                    {title}
                </div>
                {link && (
                    <button
                        onClick={handleButtonClick}
                        aria-label="Github"
                        className="shrink-0 ml-2 bg-transparent hover:bg-[#FFD700]/20 rounded-full transition-colors p-1"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-[#FFD700] hover:text-yellow-500 transition-colors">
                            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                        </svg>
                    </button>
                )}
            </div>

            {/* List of tools */}
            <div className="flex gap-2 w-full flex-wrap mb-4">
                {tools?.map((tool, index) => (
                    <span key={index} className="bg-black/40 px-2 py-1 md:px-3 rounded-full text-xs md:text-sm text-[#FFD700] font-medium shadow-sm border border-[#FFD700]/20">
                        {tool}
                    </span>
                ))}
            </div>

            {/* Image */}
            <div className="flex justify-center w-full mb-4 shrink-0">
                <img
                    className="w-full h-[200px] md:h-[283px] object-cover rounded-lg shadow-md border border-[#FFD700]/10"
                    src={image}
                    alt={title || "Project preview"}
                />
            </div>

            {/* Description */}
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
                <div className="h-full overflow-y-auto pr-2 text-[#F5E9DA] text-sm md:text-base leading-relaxed scrollbar-thin scrollbar-thumb-[#FFD700]/30 scrollbar-track-[#3A2622]">
                    {description && description.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-3 first:mt-0 last:mb-0">{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}