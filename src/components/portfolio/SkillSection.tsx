import SkillCard from "./SkillCard";

const SkillSection = () => {
    return (
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
            <div className="mx-auto mb-14 max-w-2xl text-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Expertise</span>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Skills &amp; Technologies</h2>
                <p className="mt-4 text-muted-foreground">The tools and technologies I use to bring ideas to life. Hover a skill for details.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                
            </div>


        </section>
    );
};

export default SkillSection;