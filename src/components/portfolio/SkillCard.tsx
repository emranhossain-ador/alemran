

const SkillCard = () => {
    return (
        <div className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
            <h3 className="text-center font-display text-2xl font-bold">Frontend</h3>
            <div className="mt-7 space-y-5">
                <div className="group cursor-default">
                    <div className="flex items-center justify-between text-sm font-medium">
                        <span className="transition-colors group-hover:text-primary">React</span>
                        <span className="text-muted-foreground">95%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-linear-to-r from-primary to-accent"></div>
                    </div>
                </div>
                <div className="group cursor-default">
                    <div className="flex items-center justify-between text-sm font-medium">
                        <span className="transition-colors group-hover:text-primary">TypeScript</span>
                        <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-linear-to-r from-primary to-accent"></div>
                    </div>
                </div>
                <div className="group cursor-default">
                    <div className="flex items-center justify-between text-sm font-medium">
                        <span className="transition-colors group-hover:text-primary">Next.js</span>
                        <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-linear-to-r from-primary to-accent"></div>
                    </div>
                </div>
                <div className="group cursor-default">
                    <div className="flex items-center justify-between text-sm font-medium">
                        <span className="transition-colors group-hover:text-primary">Tailwind CSS</span >
                        <span className="text-muted-foreground">92%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-linear-to-r from-primary to-accent"></div>
                    </div>
                </div>
                <div className="group cursor-default">
                    <div className="flex items-center justify-between text-sm font-medium">
                        <span className="transition-colors group-hover:text-primary">JavaScript</span>
                        <span className="text-muted-foreground">95%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-linear-to-r from-primary to-accent"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;