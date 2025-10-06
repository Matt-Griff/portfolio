import ProjectCard from './ProjectCard';

export default function ProjectHolder() {
    return (
        <div className="grid grid-cols-[45vw_1fr_45vw] justify-items-center">
            <ProjectCard className="col-start-1" title="Project1" tools={['Java', 'Python', 'C++']} > </ProjectCard>
            <ProjectCard className="col-start-3" title="Project2"> </ProjectCard>
        </div>
    );
}   