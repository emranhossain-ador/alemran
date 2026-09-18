import AboutInfoCard from "./AboutInfoCard";
import { aboutInfo } from "../../data/about";


const AboutSection = () => {

    return (
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
            <div className="mx-auto mb-14 max-w-2xl text-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">About Me</span>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Turning ideas into reliable products</h2>
                <p className="mt-4 text-muted-foreground">A little about who I am and how I work.</p>
            </div>

            <div className="grid items-start gap-12 md:grid-cols-2">
                {/* Left Content */}
                <div>
                    <p className="text-lg leading-relaxed text-muted-foreground">I'm a passionate full-stack web developer who loves crafting clean, performant, and user-friendly digital experiences. From pixel-perfect interfaces to scalable APIs and databases, I handle the whole stack.</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">I focus on writing maintainable code, following best practices, and delivering solutions that help businesses grow. When I'm not coding, I'm exploring new technologies and improving my craft.</p>
                    <ul className="mt-6 space-y-3">

                        <li className="flex items-start gap-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" data-tsd-source="/src/components/portfolio/About.tsx:42:17">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="text-muted-foreground">Clean, maintainable code with modern best practices</span>
                        </li>
                        
                        <li className="flex items-start gap-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" data-tsd-source="/src/components/portfolio/About.tsx:42:17">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="text-muted-foreground">Responsive, accessible interfaces across all devices</span>
                        </li>
                        
                        <li className="flex items-start gap-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" data-tsd-source="/src/components/portfolio/About.tsx:42:17">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="text-muted-foreground">Scalable backend APIs and efficient database design</span>
                        </li>
                        
                        <li className="flex items-start gap-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" data-tsd-source="/src/components/portfolio/About.tsx:42:17">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="text-muted-foreground">Clear communication and on-time delivery</span>
                        </li>
                    
                    
                    </ul>
                </div>

                {/* Right Content */}

                <div className="grid grid-cols-2 gap-4">
                    {
                        aboutInfo.map((data, i)=> <AboutInfoCard key={i} aboutInfo={data}/>)
                    }
                </div>

            </div>

        </section>
    );
};

export default AboutSection;