import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Youtube, MessageSquare, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-foreground">
                Kunaal Naik
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering professionals to build intelligent systems and automate their way to success.
              </p>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/kunaal-naik/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:me@kunaalnaik.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.youtube.com/KunaalNaik" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://datasciencemasterminds.com/" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Agent Development
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Career Acceleration
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Corporate Training
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Speaking & Consulting
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Automation Guide
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Career Roadmap
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Speaking Kit
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get Started</h4>
              <div className="space-y-3">
                <Button 
                  variant="premium" 
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-electric-blue/30 hover:bg-electric-blue/10"
                  asChild
                >
                  <a href="https://datasciencemasterminds.com/" target="_blank" rel="noopener noreferrer">
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Kunaal Naik. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={scrollToTop}
                  className="ml-4"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;