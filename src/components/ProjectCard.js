export default function ProjectCard({ className, children }) {
    return (
        <div className={`cardBox ${className}`}>
            <div className="text-white text-lg">Title project</div>
            <img src="/images/j.png" alt="img project" />
        </div>
    );
}   