import { FaGithub } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import { Mail, MapPin, Phone, Send} from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";

const details = [
  { icon: Mail, label: "Email", value: 'emranhossain.ador@gmail.com', href: `mailto:emranhossain.ador@gmail.com` },
  { icon: Phone, label: "Phone", value: '01851384660', href: `tel:01851384660` },
  { icon: MapPin, label: "Location", value: "Bangladesh" },
];

const socials = [
  { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com" },
  { icon: <FiLinkedin className="w-5 h-5" />, href: "https://linkedin.com" },
  { icon: <LuTwitter  className="w-5 h-5"/>, href: "https://twitter.com" },
];

const field = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

const ContactSection = () => {
    return (
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
            <SectionHeading 
                eyebrow="contact" 
                title="Let's build something together" 
                subtitle="Have a project in mind or just want to say hi? Reach out anytime."
            />

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left content */}
                <div>
                    <h3 className="font-display text-2xl font-bold">Let's Connect</h3>
                    <p className="mt-4 max-w-md text-muted-foreground">
                        Whether you have a project in mind, want to collaborate, or just want
                        to say hello, I'd love to hear from you. Reach out through any of the
                        channels below.
                    </p>

                    <div className="mt-8 space-y-4">
                        {
                        details.map(({ icon: Icon, label, value, href }) => {

                            const inner = (
                                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
                                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold">{label}</p>
                                        <p className="truncate text-sm text-muted-foreground">
                                        {value}
                                        </p>
                                    </div>
                                </div>
                            );

                            return href ? (
                                <a key={label} href={href} className="block">
                                {inner}
                                </a>
                            ) : (
                                <div key={label}>{inner}</div>
                            );
                        })
                        }
                    </div>

                    <p className="mt-8 font-display font-bold">Follow Me</p>
                    <div className="mt-3 flex items-center gap-3">
                        {socials.map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
                            >
                                {Icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Form */}
                <div>
                    <form className="rounded-3xl border border-border bg-card p-7 md:p-9">
                        <h3 className="font-display text-2xl font-bold">Send a Message</h3>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="text-sm font-medium">Name</label>
                                <input required placeholder="Your Name" className={`mt-1.5 ${field}`}/>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <input required placeholder="your.email@example.com" className={`mt-1.5 ${field}`}/>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium">Subject</label>
                            <input placeholder="Subject"
                                className={`mt-1.5 ${field}`}/>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium">Message</label>
                            <textarea required rows={5} placeholder="Your message..." className={`mt-1.5 resize-none ${field}`}/>
                        </div>
                        <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground cursor-pointer shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"> 
                        <Send /> Send Message
                        </button>

                    </form>
                </div>

            </div>

        </section>
    );
};

export default ContactSection;