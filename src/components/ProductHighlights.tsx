import React from "react";
import { Leaf, Zap, ShoppingBag, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductHighlights = () => {
  const highlights = [
    {
      icon: Leaf,
      title: "Nutritious Ingredients",
      description: "Packed with bananas, beetroots, dates, peanuts, and chia seeds for complete nutrition",
      color: "bg-accent",
      bgGradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Zap,
      title: "Long-lasting Energy",
      description: "Sustained energy release keeps you powered throughout the morning and beyond",
      color: "bg-primary",
      bgGradient: "from-primary/20 to-primary/5"
    },
    {
      icon: ShoppingBag,
      title: "Grab & Go Convenience", 
      description: "Ready-to-eat format perfect for busy mornings, no preparation needed",
      color: "bg-secondary",
      bgGradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: DollarSign,
      title: "Affordable at 20 BDT",
      description: "Premium nutrition at student-friendly prices - 5x cheaper than cafe alternatives",
      color: "bg-banana",
      bgGradient: "from-banana/20 to-banana/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Why Choose <span className="bg-hero-gradient bg-clip-text text-transparent">NutriVision</span>?
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a breakfast cake - it's your daily dose of smart nutrition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title} 
              className={`group relative overflow-hidden border-0 shadow-card hover:shadow-vibrant transition-all duration-500 hover:scale-105 bg-gradient-to-br ${highlight.bgGradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${highlight.color} rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-vibrant transition-all duration-300 group-hover:scale-110`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 w-20 h-20 ${highlight.color} rounded-2xl mx-auto opacity-20 animate-pulse scale-125`}></div>
                </div>

                <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                  {highlight.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card-gradient px-6 py-3 rounded-full border border-primary/20 shadow-card">
            <span className="font-semibold text-foreground">✨ Perfect for busy lifestyles</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-semibold text-foreground">Ready in seconds</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="font-semibold text-foreground">Tastes amazing! ✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;