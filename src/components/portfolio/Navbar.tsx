
const Navbar = () => {

    const navLink = <>
        <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">About</a>
        <a href="#services" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Services</a>
        <a href="#projects" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Projects</a>
        <a href="#skills" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Skills</a>
        <a href="#contact" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Contact</a>
    </>

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all border-b border-border bg-background/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml h-5 w-5" aria-hidden="true"><path d="m18 16 4-4-4-4"></path>
                            <path d="m6 8-4 4 4 4"></path>
                            <path d="m14.5 4-5 16"></path>
                        </svg>
                    </span>
                    <span>AL Emran</span>
                </a>

                {/* NavMenu Link */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLink}
                </div>

                <div className="flex items-center gap-2">
                    <button aria-label="Toggle theme" className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun h-5 w-5" aria-hidden="true" data-tsd-source="/src/components/portfolio/Navbar.tsx:74:15"><circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path><path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                    </button>
                    <button aria-label="Toggle menu" className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu h-5 w-5" aria-hidden="true">
                            <path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
                        </svg>
                    </button>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;