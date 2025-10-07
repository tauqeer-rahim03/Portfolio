import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import ContactForm from "../utility/ContactForm";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to
                    reach out. I'm alway open to discussing new opportunities,
                    whether it's a freelance project, a full-time position, or
                    just a chat about tech and design.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="bg-card p-4 rounded-md flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:tauqeer.rahim03@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        tauqeer.rahim03@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="bg-card p-4 rounded-md flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+917022043367"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 70220 43367
                                    </a>
                                </div>
                            </div>
                            <div className="bg-card p-4 rounded-md flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Bangalore, Karnataka, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4 ">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/tauqeer-rahim/"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/tauqeer.rahim03/"
                                    target="_blank"
                                >
                                    <Instagram />
                                </a>
                                <a
                                    href="https://x.com/TauqeerRahim"
                                    target="_blank"
                                >
                                    <Twitter />
                                </a>
                                <a
                                    href="https://github.com/tauqeer-rahim03"
                                    target="_blank"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};
