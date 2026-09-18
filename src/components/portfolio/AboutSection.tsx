import type { ReactNode } from "react";
import AboutInfoCard from "./AboutInfoCard";

interface AboutInfoType{
    icon: ReactNode;
    title: string;
    content: string;
}

const AboutSection = () => {

    const infoData:AboutInfoType[] = [
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award h-5 w-5" aria-hidden="true">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle>
                </svg>
            ),
            title: `5+`,
            content: 'Years Experience',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rocket h-5 w-5" aria-hidden="true"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>
            ),
            title: `10+`,
            content: 'Projects Delivered',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-5 w-5" aria-hidden="true" data-tsd-source="/src/components/portfolio/About.tsx:56:21"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            ),
            title: `30+`,
            content: 'Happy Clients',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-coffee h-5 w-5" aria-hidden="true" data-tsd-source="/src/components/portfolio/About.tsx:56:21"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
            ),
            title: `99%`,
            content: 'Satisfaction',
        },
    ]

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
                        infoData.map((data:AboutInfoType, i:number)=> <AboutInfoCard key={i} data={data}/>)
                    }
                </div>

            </div>

        </section>
    );
};

export default AboutSection;