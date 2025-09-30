import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "YouTube Clone",
        description:
            "Recreated the YouTube homepage as a pixel-perfect, responsive single-page layout using only advanced HTML5 and CSS3, demonstrating mastery of Flexbox and Grid.",
        image: "/projects/YouTube.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://youtube-clone-one-plum.vercel.app",
        githubUrl: "https://github.com/tauqeer-rahim03/youtube-clone",
    },
    {
        id: 2,
        title: "SpaceX Clone",
        description:
            "Developed a multi-page, responsive clone of the SpaceX website using vanilla JavaScript to implement interactive features like scroll-triggered animations and a dynamic mobile menu.",
        image: "/projects/SpaceX.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://space-x-clone-ten.vercel.app",
        githubUrl: "https://github.com/tauqeer-rahim03/SpaceX-clone",
    },

    {
        id: 3,
        title: "E-Commerce Website",
        description:
            "Developed a dynamic, responsive e-commerce application with React featuring product filtering, a shopping cart, and a multi-step checkout simulation.",
        image: "/projects/E-Commerce.png",
        tags: ["ReactJs", "TailwindCSS", "API"],
        demoUrl: "https://future-fs-02-six.vercel.app/",
        githubUrl: "https://github.com/tauqeer-rahim03/FUTURE_FS_02",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects">
            <div className="container mx-auto max-w-5xl relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was carefully
                    crafted with attention to detail and user experience
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-muted-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-muted-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/tauqeer-rahim03"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
