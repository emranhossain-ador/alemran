import ProjectCard from "./ProjectCard";


const FeatureProjectSection = () => {
    return (
        <section id="projects" className="scroll-mt-20 bg-secondary/40 py-24">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</span>
                    <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-muted-foreground">A selection of products I've designed and built end to end.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>

            </div>
        </section>
    );
};

export default FeatureProjectSection;