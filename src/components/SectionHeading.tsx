

interface SectionProps{
    eyebrow:string;
    title: string;
    subtitle: string;
}


const SectionHeading = ({eyebrow, title, subtitle}: SectionProps) => {
    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </div>
    );
};

export default SectionHeading;