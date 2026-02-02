import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/@coooltips", color: "hover:bg-red-600" },
  { icon: Twitter, name: "Twitter", url: "https://twitter.com/coool_tips", color: "hover:bg-sky-500" },
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/alaa-elsa", color: "hover:bg-blue-600" },
  { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/coooltips", color: "hover:bg-blue-700" },
];

const SocialLinks = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect With <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Follow us on social media for more tips, updates, and community discussions
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`border-border text-foreground ${social.color} hover:text-primary-foreground hover:border-transparent gap-2 transition-all duration-300`}
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
