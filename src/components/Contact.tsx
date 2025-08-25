import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Linkedin, Youtube, MessageSquare, ArrowRight, Mic, BookOpen } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Book Consultation",
      description: "30-minute strategy session to discuss your AI automation needs",
      cta: "Schedule Now",
      color: "electric-blue",
      popular: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect for career insights and industry updates",
      cta: "Connect",
      color: "vibrant-yellow"
    },
    {
      icon: Youtube,
      title: "YouTube Channel",
      description: "Free tutorials and case studies on AI automation",
      cta: "Subscribe",
      color: "electric-blue"
    },
    {
      icon: MessageSquare,
      title: "Data Science Masterminds",
      description: "Join our community of 10,000+ AI professionals",
      cta: "Join Community",
      color: "vibrant-yellow"
    }
  ];

  const speakingTopics = [
    "The Future of Work: AI Automation Trends",
    "Building AI Agents for Business Growth",
    "Career Transformation in the AI Era",
    "From Manual to Intelligent: Enterprise AI",
    "Data Science Leadership in 2024"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-vibrant-yellow/30 text-vibrant-yellow">
              Let's Connect
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're looking to automate your business, accelerate your career, 
              or bring AI insights to your organization, I'm here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-6 bg-card/50 backdrop-blur-sm border-${method.color}/20 hover:border-${method.color}/40 transition-all duration-300 group cursor-pointer animate-slide-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {method.popular && (
                        <div className="absolute -top-2 -right-2">
                          <Badge className="bg-gradient-primary text-foreground text-xs">
                            Popular
                          </Badge>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4">
                        <div className={`rounded-lg bg-${method.color}/10 p-3 group-hover:bg-${method.color}/20 transition-colors`}>
                          <IconComponent className={`h-5 w-5 text-${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {method.description}
                          </p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className={`text-${method.color} hover:bg-${method.color}/10 p-0 h-auto`}
                          >
                            {method.cta}
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Speaking Topics */}
              <div className="mt-12">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                  <Mic className="h-5 w-5 text-electric-blue" />
                  Speaking Topics
                </h3>
                <div className="space-y-3">
                  {speakingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-vibrant-yellow" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4 border-electric-blue/30 hover:bg-electric-blue/10">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Download Speaker Kit
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-electric-blue/20">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="John"
                        className="bg-background/50 border-border/50 focus:border-electric-blue"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe"
                        className="bg-background/50 border-border/50 focus:border-electric-blue"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="bg-background/50 border-border/50 focus:border-electric-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company
                    </label>
                    <Input 
                      placeholder="Your Company"
                      className="bg-background/50 border-border/50 focus:border-electric-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      What can I help you with?
                    </label>
                    <Textarea 
                      placeholder="Tell me about your automation needs, career goals, or speaking requirements..."
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-electric-blue resize-none"
                    />
                  </div>
                  
                  <Button variant="premium" size="lg" className="w-full">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Quick Contact */}
              <div className="text-center p-6 bg-gradient-hero rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">
                  Need immediate assistance?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries or media requests
                </p>
                <Button variant="outline" size="sm" className="border-electric-blue/30 hover:bg-electric-blue/10">
                  <Mail className="h-4 w-4 mr-2" />
                  kunaal@aiautomation.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;