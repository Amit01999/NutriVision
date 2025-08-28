import { Check, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Competition = () => {
  const competitors = [
    {
      name: 'Cafe Breakfast',
      price: '150-200 BDT',
      nutrition: 'Medium',
      convenience: 'Low',
      availability: 'Limited hours',
      target: 'Premium segment',
    },
    {
      name: 'Street Food',
      price: '30-50 BDT',
      nutrition: 'Low',
      convenience: 'Medium',
      availability: 'Morning only',
      target: 'Budget conscious',
    },
    {
      name: 'Home Cooking',
      price: '40-60 BDT',
      nutrition: 'High',
      convenience: 'Very Low',
      availability: 'If time permits',
      target: 'Traditional families',
    },
    {
      name: 'Packaged Snacks',
      price: '25-40 BDT',
      nutrition: 'Very Low',
      convenience: 'High',
      availability: '24/7',
      target: 'Quick fix',
    },
  ];

  const advantages = [
    {
      title: 'Optimal Price Point',
      description: '20 BDT - Perfect balance of affordability and quality',
      icon: '💰',
    },
    {
      title: 'Complete Nutrition',
      description: 'Balanced macro and micronutrients in every bite',
      icon: '🥗',
    },
    {
      title: 'Grab & Go Ready',
      description: 'Zero preparation time, maximum convenience',
      icon: '⚡',
    },
    {
      title: 'Consistent Quality',
      description: 'Standardized taste and nutrition every time',
      icon: '✨',
    },
    {
      title: 'Local Ingredients',
      description: 'Fresh, locally-sourced ingredients supporting farmers',
      icon: '🌱',
    },
    {
      title: 'Shelf Stable',
      description: 'Long shelf life without compromising nutrition',
      icon: '📦',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Why{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              NutriVision
            </span>{' '}
            Wins
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive comparison shows our clear competitive advantages
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-16">
          <div className="bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden">
            <div className="bg-hero-gradient p-6">
              <h3 className="font-display font-bold text-2xl text-white text-center">
                Competitive Analysis
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-4 font-bold text-foreground">
                      Option
                    </th>
                    <th className="text-center p-4 font-bold text-foreground">
                      Price
                    </th>
                    <th className="text-center p-4 font-bold text-foreground">
                      Nutrition
                    </th>
                    <th className="text-center p-4 font-bold text-foreground">
                      Convenience
                    </th>
                    <th className="text-center p-4 font-bold text-foreground">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* NutriVision row - highlighted */}
                  <tr className="bg-card-gradient border-l-4 border-l-primary">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-foreground text-lg">
                          NutriVision
                        </span>
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                          WINNER
                        </span>
                      </div>
                    </td>
                    <td className="text-center p-4 font-bold text-primary">
                      20 BDT
                    </td>
                    <td className="text-center p-4 font-bold text-accent">
                      Excellent
                    </td>
                    <td className="text-center p-4 font-bold text-accent">
                      Very High
                    </td>
                    <td className="text-center p-4 font-bold text-accent">
                      24/7
                    </td>
                  </tr>

                  {/* Competitor rows */}
                  {competitors.map((competitor, index) => (
                    <tr
                      key={competitor.name}
                      className="border-t border-border/50 hover:bg-muted/20"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                            <X className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <span className="text-foreground">
                            {competitor.name}
                          </span>
                        </div>
                      </td>
                      <td className="text-center p-4 text-muted-foreground">
                        {competitor.price}
                      </td>
                      <td className="text-center p-4 text-muted-foreground">
                        {competitor.nutrition}
                      </td>
                      <td className="text-center p-4 text-muted-foreground">
                        {competitor.convenience}
                      </td>
                      <td className="text-center p-4 text-muted-foreground">
                        {competitor.availability}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Competitive advantages */}
        <div>
          <h3 className="font-display font-bold text-3xl text-center mb-12 text-foreground">
            Our Competitive Advantages
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={advantage.title}
                className="group relative bg-orange-100 border border-border shadow-card hover:shadow-vibrant transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4 animate-bounce-gentle">
                      {advantage.icon}
                    </div>
                    <h4 className="font-display font-bold text-lg mb-3 text-foreground">
                      {advantage.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-hero-gradient opacity-5 rounded-lg group-hover:opacity-10 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-3xl p-8 border border-accent/20">
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
              🎯 Clear Market Differentiation
            </h3>
            <p className="text-muted-foreground text-lg">
              NutriVision uniquely combines affordability, nutrition, and
              convenience - a combination no competitor currently offers in the
              Bangladeshi market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
