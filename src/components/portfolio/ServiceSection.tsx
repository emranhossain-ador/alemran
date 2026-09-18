import ServiceCard from "./ServiceCard";


const ServiceSection = () => {
    return (
        <section id="services" className="scroll-mt-20 bg-secondary/40 py-24">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
                    <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What I can build for you</h2>
                    <p className="mt-4 text-muted-foreground">End-to-end web solutions tailored to your goals — from a single landing page to a full product.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                </div>

            </div>
        </section>
    );
};

export default ServiceSection;