import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xwproyjy");
    const { toast } = useToast();
    const [isSubmission, setSubmission] = useState(false);

    const handleSubmission = (e) => {
        e.preventDefault();
        setSubmission(true);
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description:
                    "Thank you for your message. I'll get back to you soon.",
            });
            setSubmission(false);
        }, 1500);
    };

    return (
        <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmission}
        >
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium mb-2"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="John Doe..."
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium mb-2"
                    >
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="john@gmail.com"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium mb-2"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full p-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Hello, I'd like to talk about..."
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmission}
                    className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2",
                        "bg-primary text-white hover:bg-primary/90 transition-colors"
                    )}
                >
                    {" "}
                    {isSubmission ? "Sending..." : "Send Message"}
                    <Send size={16} />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
