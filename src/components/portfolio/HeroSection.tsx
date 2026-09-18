import image from "../../assets/profile.jpeg"

const HeroSection = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-grid pt-32 pb-24 md:pt-40">
            <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"></div>
            <div className="pointer-events-none absolute top-52 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"></div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-12 lg:gap-8">
                {/* Left Content */}
                <div className="z-10 flex flex-col gap-10 lg:col-span-7">
                    <div className="flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Open for Collaboration</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">Building Next-Gen <br className="hidden sm:block"/>
                            <span className="text-gradient">Digital Systems.</span>
                        </h1>
                        <p className="max-w-xl text-lg font-light leading-relaxed text-muted-foreground lg:text-xl">I engineer high-performance full-stack applications with a focus on clean architecture, scalable infrastructure, and seamless user experiences.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a href="#projects" className="rounded-sm bg-primary px-8 py-4 font-bold text-primary-foreground shadow-[0_0_20px_-4px_var(--primary)] transition-all hover:brightness-110 hover:shadow-[0_0_30px_-4px_var(--primary)]">View My Work</a>

                        <a href="#contact" className="rounded-sm border border-border bg-transparent px-8 py-4 font-medium transition-colors hover:bg-secondary">Get in Touch</a>

                        <a href="/cv.pdf" aria-busy="false" aria-live="polite" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-60 px-4 py-2 text-muted-foreground hover:text-primary ">

                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" >
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            <span className="text-sm">Download CV</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-10 pt-6">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex flex-col">
                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">GitHub</span>
                            <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex flex-col">
                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">LinkedIn</span>
                            <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a href="mailto:hello@example.com" target="_blank" rel="noreferrer" className="group flex flex-col">
                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">Email</span>
                            <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                </div>

                {/* Right Content */}
                <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                    <div className="relative aspect-4/5 w-full max-w-105">
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-border"></div>
                        <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card">
                            <img src={image} alt="Portrait of the full-stack web developer" width="1024" height="1280" className="h-full w-full scale-105 object-cover grayscale transition-all duration-1000 group-hover:scale-100 group-hover:grayscale-0"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                            <div className="absolute inset-x-6 bottom-6">
                                <div className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 backdrop-blur-xl">
                                <div className="flex flex-col">
                                    <span className="font-display text-2xl font-bold">05+</span>
                                    <span className="text-[10px] font-bold uppercase tracking-tight text-primary">Years in Production</span>
                                </div>
                                <div className="h-8 w-px bg-border"></div>
                                <p className="text-sm leading-tight text-muted-foreground">Delivering high-end<br/>solutions globally.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;