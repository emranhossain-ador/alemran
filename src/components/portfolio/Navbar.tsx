import { User } from "lucide-react";
import Logo from "../../assets/logo1.png"

const Navbar = () => {

    const navLink = <>
        <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">About</a>
        <a href="#services" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Services</a>
        <a href="#projects" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Projects</a>
        <a href="#skills" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Skills</a>
    </>

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all border-b border-border bg-background/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-.5">
                <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
                    <img src={Logo} alt="logo" className="h-14 w-auto object-cover" />
                </a>

                {/* NavMenu Link */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLink}
                </div>

                <div>
                    <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"><User className="w-5 h-5" /> Contact</a>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;