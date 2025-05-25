import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="#hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I'm
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Tauqeer
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Rahim
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I&#39;m a front-end developer who enjoys crafting
                        thoughtful, responsive interfaces that blend design with
                        functionality. With a growing foundation in React, HTML,
                        CSS, and JavaScript. I&#39;m focused on building clean,
                        accessible web experiences while continuously learning
                        and evolving as a developer.
                    </p>
                    <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">
                    Scroll
                </span>
                <ArrowDown className="h-5 w-4 text-primary" />
            </div>
        </section>
    );
};
