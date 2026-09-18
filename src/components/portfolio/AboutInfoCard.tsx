import type { AboutType } from "../../types/aboutType";

interface AboutProps{
    aboutInfo: AboutType
}

const AboutInfoCard = ({aboutInfo}:AboutProps) => {

    const {icon:Icon, title, content} = aboutInfo;

    return (
        <div>
            <div className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="w-6 h-6"/>
                </div>
                <p className="font-display text-3xl font-bold text-gradient">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content}</p>
            </div>
        </div>
    );
};

export default AboutInfoCard;