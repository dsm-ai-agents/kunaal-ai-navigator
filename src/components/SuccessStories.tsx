import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Star, TrendingUp, Clock, DollarSign } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: "👩‍💼",
      quote: "Kunaal's AI automation saved me 25 hours per week. I went from drowning in data analysis to focusing on strategy. Our team's productivity increased by 300%.",
      metrics: {
        timeSaved: "25 hrs/week",
        productivity: "+300%",
        roi: "$150k annual savings"
      },
      category: "Business Automation"
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Analyst → AI Engineer",
      company: "Now at Microsoft",
      image: "👨‍💻",
      quote: "Kunaal's career coaching transformed my trajectory. From $65k analyst to $180k AI engineer in 8 months. The investment paid for itself 100x over.",
      metrics: {
        timeToPromotion: "8 months",
        salaryIncrease: "+177%",
        roi: "100x ROI"
      },
      category: "Career Transformation"
    },
    {
      name: "Jennifer Walsh",
      role: "Operations Manager",
      company: "Global Manufacturing Co.",
      image: "👩‍🔧",
      quote: "The custom AI agents Kunaal built automated our entire quality control process. We reduced errors by 95% and cut inspection time from hours to minutes.",
      metrics: {
        errorReduction: "95%",
        timeReduction: "87%",
        roi: "$2M annual savings"
      },
      category: "Process Automation"
    },
    {
      name: "David Park",
      role: "Startup Founder",
      company: "AI-First SaaS",
      image: "👨‍🚀",
      quote: "Kunaal didn't just teach us AI—he helped us build our entire product roadmap. We raised $5M Series A with AI at our core. Game-changing mentorship.",
      metrics: {
        funding: "$5M raised",
        growth: "500% user growth",
        roi: "Invaluable"
      },
      category: "Startup Success"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "500+", label: "Professionals Transformed" },
    { icon: Clock, value: "10,000+", label: "Hours Saved Monthly" },
    { icon: DollarSign, value: "$50M+", label: "Value Generated" },
    { icon: Star, value: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section id="success-stories" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
              Success Stories
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              Real Results, Real People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From career transformations to business revolutions, see how AI automation 
              has changed lives and bottom lines.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center bg-card/50 backdrop-blur-sm border-electric-blue/20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card/50 backdrop-blur-sm border-vibrant-yellow/20 hover:border-vibrant-yellow/40 transition-all duration-300 group hover:shadow-elegant animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-vibrant-yellow" />
                  
                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border">
                    {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-semibold text-vibrant-yellow mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-electric-blue">
                        {testimonial.company}
                      </div>
                    </div>
                    <Badge variant="outline" className="border-vibrant-yellow/30 text-vibrant-yellow text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Video CTA */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-4">
              Watch More Success Stories
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              See detailed case studies and hear directly from professionals who've 
              transformed their careers and businesses with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                View Case Studies
              </Button>
              <Button variant="outline" size="lg" className="border-electric-blue/30 hover:bg-electric-blue/10">
                Join Success Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;