import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, TrendingUp, Users, Mic, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Development",
      subtitle: "Transform Your Workflows",
      description: "Custom AI agents that automate your most time-consuming tasks with 99% accuracy.",
      features: [
        "Data processing automation",
        "Customer service bots",
        "Lead qualification systems",
        "Content generation workflows"
      ],
      price: "Starting at $5,000",
      color: "electric-blue",
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      subtitle: "AI-Powered Growth",
      description: "Strategic coaching to transition into high-impact AI roles and skyrocket your earning potential.",
      features: [
        "AI skill assessment & roadmap",
        "Portfolio development",
        "Interview preparation",
        "Salary negotiation strategy"
      ],
      price: "Starting at $2,500",
      color: "vibrant-yellow",
      popular: false
    },
    {
      icon: Users,
      title: "Corporate Training",
      subtitle: "Team Transformation",
      description: "Enterprise-level AI automation training that transforms entire teams and departments.",
      features: [
        "Custom curriculum design",
        "Hands-on workshops",
        "Implementation support",
        "ROI measurement & tracking"
      ],
      price: "Custom pricing",
      color: "electric-blue",
      popular: false
    },
    {
      icon: Mic,
      title: "Speaking & Consulting",
      subtitle: "Thought Leadership",
      description: "Keynote presentations and strategic consulting for organizations ready to embrace AI.",
      features: [
        "Conference keynotes",
        "Executive workshops",
        "Strategic AI roadmaps",
        "Change management support"
      ],
      price: "Custom pricing",
      color: "vibrant-yellow",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-vibrant-yellow/30 text-vibrant-yellow">
              Services
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From individual skill development to enterprise-wide transformation, 
              I offer comprehensive AI automation solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative p-8 bg-card/50 backdrop-blur-sm border-${service.color}/20 hover:border-${service.color}/40 transition-all duration-300 group hover:shadow-elegant animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <Badge className="bg-gradient-primary text-foreground font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl bg-${service.color}/10 p-3 group-hover:bg-${service.color}/20 transition-colors`}>
                        <IconComponent className={`h-6 w-6 text-${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                          {service.title}
                        </h3>
                        <p className={`text-${service.color} font-medium text-sm`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className={`h-4 w-4 text-${service.color} flex-shrink-0`} />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold text-foreground">
                            {service.price}
                          </p>
                        </div>
                        <Button 
                          variant={service.popular ? "premium" : "outline"}
                          onClick={scrollToContact}
                          className={!service.popular ? `border-${service.color}/30 hover:bg-${service.color}/10` : ""}
                        >
                          Get Started
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free 30-minute consultation to discuss your automation needs 
              and discover how AI can revolutionize your workflow.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;