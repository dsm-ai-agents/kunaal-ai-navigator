import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, TrendingUp, Zap } from "lucide-react";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${aiHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-secondary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Empowering 1M+ Professionals with AI
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Automate Your Success with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform from manual tasks to intelligent automation. 
            I help business owners and professionals build AI agents that work while you sleep.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-electric-blue" />
              <span>500+ Professionals Transformed</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-vibrant-yellow" />
              <span>80% Average Productivity Increase</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 h-auto"
            >
              Start Your AI Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="text-lg px-8 py-6 h-auto border-electric-blue/30 hover:bg-electric-blue/10"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Success Stories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by professionals at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60">
              <span className="font-medium">Google</span>
              <span className="font-medium">Microsoft</span>
              <span className="font-medium">Tesla</span>
              <span className="font-medium">OpenAI</span>
              <span className="font-medium">Meta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-electric-blue/10 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-vibrant-yellow/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-electric-blue/20 animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;