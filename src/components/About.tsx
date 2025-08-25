import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Target, Lightbulb, Award, Users, Linkedin } from "lucide-react";
// import kunaalHeadshot from "@/assets/kunaal-headshot.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
              About Kunaal
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              From Manual Tasks to AI Mastery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I transformed my career from drowning in repetitive work to building intelligent systems 
              that scale businesses. Now I help others do the same.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image & Stats */}
            <div className="space-y-8 animate-slide-up">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/88f09d36-5f8d-4d8f-9031-b588fe587829.png" 
                    alt="Kunaal Naik - AI Automation Coach" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-full opacity-20 -z-10" />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-electric-blue/20">
                  <div className="text-3xl font-bold text-electric-blue mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-vibrant-yellow/20">
                  <div className="text-3xl font-bold text-vibrant-yellow mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Story */}
              <div className="space-y-6">
                <h3 className="font-display font-semibold text-2xl text-foreground">
                  My Journey to AI Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Five years ago, I was drowning in manual data analysis, spending 12-hour days on tasks that 
                  should have taken minutes. The breaking point came when I realized I was becoming a human 
                  spreadsheet instead of a strategic thinker.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That's when I discovered the power of AI automation. I built my first intelligent agent that 
                  reduced my workload by 80% and increased accuracy by 95%. The transformation was so dramatic 
                  that colleagues started asking how they could do the same.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, I've helped over 500 professionals and business owners build AI systems that work 
                  around the clock, freeing them to focus on high-impact decisions and strategic growth.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-electric-blue/10 p-2">
                    <Brain className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Staying ahead of AI trends</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-vibrant-yellow/10 p-2">
                    <Target className="h-5 w-5 text-vibrant-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Results</h4>
                    <p className="text-sm text-muted-foreground">Execution over theory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-electric-blue/10 p-2">
                    <Lightbulb className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Simplicity</h4>
                    <p className="text-sm text-muted-foreground">Complex problems, simple solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-vibrant-yellow/10 p-2">
                    <Users className="h-5 w-5 text-vibrant-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Community</h4>
                    <p className="text-sm text-muted-foreground">Empowering others to succeed</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="premium" size="lg">
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="border-electric-blue/30 hover:bg-electric-blue/10">
                  <Award className="h-5 w-5 mr-2" />
                  View Credentials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;