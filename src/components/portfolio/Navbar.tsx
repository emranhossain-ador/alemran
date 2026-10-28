import { User, X } from "lucide-react";
import Logo from "../../assets/logo1.png"
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const navLink = <>
        <a href="#home" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Home</a>
        <a href="#about" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">About</a>
        <a href="#services" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Services</a>
        <a href="#projects" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Projects</a>
        <a href="#skills" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Skills</a>
    </>

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all border-b border-border bg-background/80 backdrop-blur-lg">
            <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-.5">
                <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
                    <img src={Logo} alt="logo" className="h-14 w-auto object-cover" />
                </a>

                {/* NavMenu Link */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLink}
                </div>

                <div className="flex items-center gap-2">
                    <a href="#contact" className="ml-2 hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex"><User className="w-5 h-5" /> Contact</a>

                    {/* mobile device */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="md:hidden w-8 h-8 cursor-pointer transition-all hover:bg-border text-foreground shrink-0 flex justify-center items-center border border-border rounded-md"
                    >
                        {isOpen ? <X className="h-4 w-4" /> : <CiMenuFries className="h-4 w-4" />}
                    </button>
                </div>

                {/* Mobile NavMenu */}
                <div
                    className={`md:hidden absolute left-0 top-full w-full overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-105 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                >
                    <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
                        {navLink}
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-1 flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                        >
                            <User className="w-5 h-5" /> Contact
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;