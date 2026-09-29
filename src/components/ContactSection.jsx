
import { Mail, MapPin, Linkedin, Music, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX_LENGTH = 2000;

export const ContactSection = () => {

        const { toast } = useToast();
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [formData, setFormData] = useState({ name: "", email: "", message: "" });

        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {
                e.preventDefault();

                if (!EMAIL_REGEX.test(formData.email)) {
                        toast({
                                title: "Invalid email",
                                description: "Please enter a valid email address.",
                                variant: "destructive",
                        });
                        return;
                }

                setIsSubmitting(true);

                try {
                        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
                        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
                        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

                        if (!serviceId || !templateId || !publicKey) {
                                throw new Error("EmailJS configuration is missing.");
                        }

                        await emailjs.send(
                                serviceId,
                                templateId,
                                {
                                        name: formData.name,
                                        email: formData.email,
                                        message: formData.message,
                                },
                                publicKey
                        );

                        toast({
                                title: "Message sent!",
                                description: "Thank you for your message. I'll get back to you soon!",
                        });

                        setFormData({ name: "", email: "", message: "" });
                } catch (err) {
                        console.error("EmailJS error:", err);
                        toast({
                                title: "Something went wrong",
                                description: "Failed to send message. Please try again or email me directly.",
                                variant: "destructive",
                        });
                } finally {
                        setIsSubmitting(false);
                }
        };
        return (
                <section id="contact" className="pt-6 pb-14 px-4 relative bg-secondary/30">
                <div className="mx-auto max-w-5xl bg-background/65 rounded-lg p-4 md:p-6">
                        <div className="">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                        Get in <span className="text-primary"> Touch</span>
                                </h2>

                                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                        Want to connect, collaborate, or just say hello? Feel free to reach out! I'm always open to discussing opportunities.
                                </p>
                                

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-8">
                                                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                                                <div className="space-y-6 justify-center">
                                                        <div className="flex items-start space-x-4">
                                                                <div className="p-3 rounded-full bg-primary/10">
                                                                        <Mail className="h-6 w-6 text-primary" />
                                                                </div>

                                                                <div>
                                                                <h4 className="font-medium"> Email</h4>
                                                                        <a
                                                                        href="mailto:roanpyeh@gmail.com"
                                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                                        >
                                                                        roanpyeh+portfolio@gmail.com
                                                                        </a>    
                                                                </div>
                                                        </div>

                                                        <div className="flex items-start space-x-4">
                                                                <div className="p-3 rounded-full bg-primary/10">
                                                                        <MapPin className="h-6 w-6 text-primary" />
                                                                </div>

                                                                <div>
                                                                <h4 className="font-medium"> Location</h4>
                                                                        <a
                                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                                        >
                                                                        Cambridge, MA, USA
                                                                        </a>    
                                                                </div>
                                                        </div>

                                                </div>

                                                <div className="pt-8">
                                                        <h4 className="font-medium mb-4">Connect With Me</h4>
                                                        <div className="flex space-x-4 justify-center">
                                                                <a 
                                                                 href="https://www.linkedin.com/in/roan-yeh-4340aa260/"
                                                                 target="_blank"
                                                                >
                                                                        <Linkedin />
                                                                </a>

                                                                <a 
                                                                 href="https://open.spotify.com/artist/5nLkNqueZ7b2ahL6188q5A?si=2s5D8FKnSGGg82PRgdws7g"
                                                                 target="_blank"
                                                                >
                                                                        <Music />
                                                                </a>

                                                                <a 
                                                                 href="https://www.instagram.com/roanjustroan?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                                                                 target="_blank"
                                                                >
                                                                        <Instagram />
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="bg-card p-8 rounded-lg shadow-xs">
                                                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                                                        <form className="space-y-6" onSubmit={handleSubmit}>
                                                                <div>
                                                                        <label 
                                                                         htmlFor="name" 
                                                                         className="block text-sm font-medium mb-2"
                                                                        >
                                                                                {" "}
                                                                                Your Name
                                                                        </label>
                                                                        <input
                                                                         type="text"
                                                                         id="name"
                                                                         name="name"
                                                                         required
                                                                         maxLength={100}
                                                                         value={formData.name}
                                                                         onChange={handleChange}
                                                                         className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                                                         placeholder="Roan Yeh..."/>

                                                                </div>

                                                                <div>
                                                                        <label 
                                                                         htmlFor="email" 
                                                                         className="block text-sm font-medium mb-2"
                                                                        >
                                                                                {" "}
                                                                                Your Email
                                                                        </label>
                                                                        <input
                                                                         type="email"
                                                                         id="email"
                                                                         name="email"
                                                                         required
                                                                         maxLength={254}
                                                                         value={formData.email}
                                                                         onChange={handleChange}
                                                                         className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                                                         placeholder="roanpyeh@gmail.com"/>

                                                                </div>

                                                                <div>
                                                                        <label 
                                                                         htmlFor="message" 
                                                                         className="block text-sm font-medium mb-2"
                                                                        >
                                                                                {" "}
                                                                                Your Message
                                                                        </label>
                                                                        <textarea
                                                                         id="message"
                                                                         name="message"
                                                                         required
                                                                         maxLength={MESSAGE_MAX_LENGTH}
                                                                         value={formData.message}
                                                                         onChange={handleChange}
                                                                         className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                                                         placeholder="Hello, I'd like to talk about..."/>
                                                                        <div
                                                                         className={cn(
                                                                                "text-xs text-right mt-1",
                                                                                formData.message.length >= MESSAGE_MAX_LENGTH * 0.9
                                                                                 ? "text-destructive"
                                                                                 : "text-muted-foreground"
                                                                         )}
                                                                        >
                                                                                {formData.message.length}/{MESSAGE_MAX_LENGTH}
                                                                        </div>

                                                                </div>
                                                                
                                                                <button 
                                                                 type="submit" 
                                                                 disabled={isSubmitting}
                                                                 className={cn(
                                                                        "cosmic-button w-full flex items-center justify-center gap-2",
                                                                        
                                                                 )}
                                                                >
                                                                {isSubmitting ? "Sending..." : "Send Message"}
                                                                <Send size={16}/>

                                                                </button>
                                                        </form>
                                                </div>
                                </div>
                        </div>
                </div>
                </section>
        )
}