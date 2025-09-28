import ProjectCard from './ProjectCard';

export default function ProjectHolder() {
    return (
        <div className="grid grid-cols-[40vw_1fr_40vw]">
            <ProjectCard className="col-start-1"> </ProjectCard>
            <ProjectCard className="col-start-3"> </ProjectCard>
        </div>
    );
}   