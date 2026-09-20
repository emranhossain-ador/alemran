import type { SkillType } from "../../types/skillType";

interface SkillProps {
    skill: SkillType;
}

interface Skill {
    techName: string;
    persent: number;
}

const SkillCard = ({ skill }: SkillProps) => {
    return (
        <div className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
            <h3 className="text-center font-display text-2xl font-bold">{skill.title}</h3>
            <div className="mt-7 space-y-5">

                {
                    skill.skills.map((s: Skill) => technologyList({ skill: s }))
                }

            </div>
        </div>
    );
};


function technologyList({ skill }: { skill: Skill }) {
    return (
        <div className="group cursor-default">
            <div className="flex items-center justify-between text-sm font-medium">
                <span className="transition-colors group-hover:text-primary">{skill.techName}</span>
                <span className="text-muted-foreground">{skill.persent}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-linear-to-r from-primary to-accent" style={{ width: `${skill.persent}%` }}></div>
            </div>
        </div>
    )
}

export default SkillCard;