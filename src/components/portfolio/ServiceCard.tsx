

const ServiceCard = () => {
    return (
        <div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml h-6 w-6" aria-hidden="true">
                    <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
                    </svg>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">Frontend Development</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Modern, responsive interfaces built with React, TypeScript, and Tailwind — pixel-perfect and fast.</p>
                
                <ul className="mt-5 space-y-1.5">
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>React &amp; Next.js
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>TypeScript
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>Tailwind CSS
                    </li>
                    
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;