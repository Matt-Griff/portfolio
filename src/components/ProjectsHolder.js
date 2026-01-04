import ProjectCard from './ProjectCard';

export default function ProjectHolder() {
    return (
        <>
            <div className='bg-auto bg-[#3A2622] w-[97%] rounded-lg mt-5 mb-10 flex items-center mx-auto'>
                <div className='text-6xl p-6'> Most relevant projects </div>
            </div>
            <div className="grid md:grid-cols-[48vw_1fr_48vw] grid-cols-1 md:grid-rows-3  justify-items-center md:gap-y-16 gap-10 md:gap-0" >
                <ProjectCard className="md:col-start-1 md:row-start-1  col-start-1 md:w-[45vw] w-[70vw]" title="Project1" tools={['Java', 'Python', 'C++']} > </ProjectCard>
                <ProjectCard className="md:col-start-3 md:row-start-1 col-start-1 md:w-[45vw] w-[70vw]" title="Project2"> </ProjectCard>
                <ProjectCard className="md:col-start-1 md:row-start-2 col-start-1 row-span-[3] md:w-[45vw] w-[70vw]" title="Project2"> </ProjectCard>
                <ProjectCard className="md:col-start-3 md:row-start-3 col-start-1 row-span-[2] md:w-[45vw] w-[70vw]" title="Project2"> </ProjectCard>
            </div>
        </>
    );
}   