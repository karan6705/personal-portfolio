import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_0du3w8ka',
        'template_4z776ml',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'karanraval3409@gmail.com'
        },
        '3GSPABt14LezxrBiW'
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6 text-primary group-hover:animate-bounce" />{" "}
                </div>
                <div className="flex-1">
                  <h4 className="text-medium group-hover:text-primary transition-colors duration-300 text-foreground"> Email</h4>
                  <a
                    href="mailto:karanraval3409@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:underline"
                  >
                    karanraval3409@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6 text-primary group-hover:animate-pulse" />{" "}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors duration-300"> Phone</h4>
                  <a
                    href="tel:+14085920635"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:underline"
                  >
                    (408) 592-0635
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-primary group-hover:animate-ping" />{" "}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors duration-300"> Location</h4>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    San Jose, CA
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/karanraval05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:karanraval3409@gmail.com"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/k_aranraval/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground"> Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Enter your email..."
                />
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                  placeholder="Hello, I'd like to talk about..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
