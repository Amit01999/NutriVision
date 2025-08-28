import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Dumbbell, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VisionExpansion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const futureVariants = [
    {
      id: 1,
      title: 'NutriVision Diabetic-Friendly',
      subtitle: 'Sugar-Free & Low GI',
      description:
        'Special formulation with natural sweeteners and low glycemic ingredients for diabetic customers',
      ingredients: [
        'Stevia',
        'Almond Flour',
        'Chia Seeds',
        'Cinnamon',
        'Walnuts',
      ],
      targetMarket: '3M+ diabetic patients in Bangladesh',
      icon: Heart,
      color: 'bg-red-500',
      bgGradient: 'from-red-500/20 to-red-500/5',
      emoji: '❤️',
    },
    {
      id: 2,
      title: 'NutriVision Protein-Packed',
      subtitle: 'Fitness & Athletes Edition',
      description:
        'High-protein variant designed for fitness enthusiasts and athletes with enhanced muscle recovery benefits',
      ingredients: [
        'Whey Protein',
        'Quinoa',
        'Almonds',
        'Pumpkin Seeds',
        'Greek Yogurt Powder',
      ],
      targetMarket: '500K+ gym members and athletes',
      icon: Dumbbell,
      color: 'bg-orange-500',
      bgGradient: 'from-orange-500/20 to-orange-500/5',
      emoji: '💪',
    },
    {
      id: 3,
      title: 'NutriVision Kids-Friendly',
      subtitle: 'Growing Minds Edition',
      description:
        "Specially crafted for children with essential vitamins, minerals, and appealing flavors they'll love",
      ingredients: [
        'Chocolate Chips',
        'Honey',
        'Oats',
        'Dried Fruits',
        'Calcium Fortification',
      ],
      targetMarket: '2M+ school children',
      icon: Baby,
      color: 'bg-purple-500',
      bgGradient: 'from-purple-500/20 to-purple-500/5',
      emoji: '👶',
    },
  ];

  const expansionPlans = [
    {
      title: 'Regional Expansion',
      description: 'Launch in Chittagong, Sylhet, and other major cities',
      timeline: 'Year 2',
      icon: '🌍',
    },
    {
      title: 'International Markets',
      description: 'Export to India, Nepal, and Middle East markets',
      timeline: 'Year 3',
      icon: '✈️',
    },
    {
      title: 'Product Line Extension',
      description: 'Lunch boxes, dinner options, and beverage combinations',
      timeline: 'Year 4',
      icon: '🍱',
    },
    {
      title: 'Franchise Model',
      description: 'Licensed manufacturing and distribution partnerships',
      timeline: 'Year 5',
      icon: '🤝',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % futureVariants.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + futureVariants.length) % futureVariants.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Future Vision
            </span>{' '}
            & Expansion
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the next generation of smart nutrition products for every
            lifestyle and need
          </p>
        </div>

        {/* Future product variants carousel */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-3xl text-center mb-8 text-foreground">
            🚀 Upcoming Product Variants
          </h3>

          <div className="relative">
            <Card
              className={`bg-gradient-to-br ${futureVariants[currentSlide].bgGradient} border border-border/50 shadow-vibrant`}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 ${futureVariants[currentSlide].color} rounded-2xl flex items-center justify-center shadow-card`}
                      >
                        {(() => {
                          const IconComponent =
                            futureVariants[currentSlide].icon;
                          return (
                            <IconComponent className="w-8 h-8 text-white" />
                          );
                        })()}
                      </div>
                      <div className="text-4xl animate-bounce-gentle">
                        {futureVariants[currentSlide].emoji}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-3xl text-foreground mb-2">
                      {futureVariants[currentSlide].title}
                    </h3>

                    <p className="text-lg font-semibold text-muted-foreground mb-4">
                      {futureVariants[currentSlide].subtitle}
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {futureVariants[currentSlide].description}
                    </p>

                    {/* Ingredients */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {futureVariants[currentSlide].ingredients.map(
                          (ingredient, index) => (
                            <span
                              key={index}
                              className="bg-card px-3 py-1 rounded-full text-sm border border-border/50 shadow-card"
                            >
                              {ingredient}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Target market */}
                    <div className="bg-muted/50 p-4 rounded-xl">
                      <span className="text-sm text-muted-foreground">
                        Target Market:{' '}
                      </span>
                      <span className="font-semibold text-foreground">
                        {futureVariants[currentSlide].targetMarket}
                      </span>
                    </div>
                  </div>

                  {/* Visual placeholder */}
                  <div className="text-center">
                    <div
                      className={`w-64 h-64 mx-auto ${futureVariants[currentSlide].color} rounded-3xl flex items-center justify-center shadow-vibrant relative overflow-hidden`}
                    >
                      <div className="text-8xl text-white/20">
                        {futureVariants[currentSlide].emoji}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Product visualization coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {futureVariants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary scale-125'
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Expansion roadmap */}
        <div>
          <h3 className="font-display font-bold text-3xl text-center mb-12 text-foreground">
            🗺️ Expansion Roadmap
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expansionPlans.map((plan, index) => (
              <Card
                key={plan.title}
                className="group relative bg-card border border-border shadow-card hover:shadow-vibrant transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-bounce-gentle">
                    {plan.icon}
                  </div>

                  <h4 className="font-display font-bold text-lg mb-3 text-foreground">
                    {plan.title}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    {plan.timeline}
                  </div>

                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-hero-gradient opacity-5 rounded-lg group-hover:opacity-10 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision statement */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-3xl p-8 text-white shadow-vibrant">
            <h3 className="font-display font-bold text-3xl mb-4">
              Our Vision for 2030
            </h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              To become Bangladesh's leading smart nutrition brand, empowering
              millions with convenient, affordable, and healthy food choices
              while supporting local communities and sustainable agriculture
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionExpansion;
