import type { ProjectType } from "../../types/projectType";

interface ProjectProps{
    project: ProjectType;
}

const ProjectCard = ({project}:ProjectProps) => {

    const {image, name, description, tags, githubLink, liveLink} = project;

    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card" >
            <div className="relative flex h-44 items-center justify-center bg-linear-to-br from-primary/25 to-accent/25">
                <img src={image} alt={name} className="w-full h-full " />
            </div>
            
            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {
                        tags.map(tag=> 
                            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                        )
                    }
                </div>
                <div className="mt-5 flex gap-3">
                    <a href={liveLink} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link h-4 w-4" aria-hidden="true" data-tsd-source="/src/components/portfolio/Projects.tsx:79:21"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg> Live Demo
                    </a>
                    <a href={githubLink} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-4 w-4" aria-hidden="true" data-tsd-source="/src/components/portfolio/Projects.tsx:85:21">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg> Code
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;