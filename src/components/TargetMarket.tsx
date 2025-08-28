import { GraduationCap, Briefcase, Train } from 'lucide-react';

const TargetMarket = () => {
  const targetGroups = [
    {
      icon: GraduationCap,
      title: 'Students',
      subtitle: 'University & College',
      description:
        'Affordable, nutritious breakfast that fits tight budgets and busy schedules',
      stats: '2M+ students in Dhaka',
      color: 'bg-accent',
      illustration: '🎓',
    },
    {
      icon: Briefcase,
      title: 'Office Workers',
      subtitle: 'Corporate Professionals',
      description:
        'Quick morning fuel for productive workdays without the cafe premium',
      stats: '1.5M+ office workers',
      color: 'bg-primary',
      illustration: '💼',
    },
    {
      icon: Train,
      title: 'Commuters',
      subtitle: 'Daily Travelers',
      description:
        'Perfect grab-and-go option for long commutes and travel days',
      stats: '3M+ daily commuters',
      color: 'bg-secondary',
      illustration: '🚌',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Built for{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Bangladesh's
            </span>{' '}
            Busy Lives
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            From Dhaka's universities to corporate offices - NutriVision fits
            every lifestyle
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {targetGroups.map((group, index) => (
            <div
              key={group.title}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Main card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-vibrant transition-all duration-500 hover:scale-105 border border-border">
                {/* Illustration switcher */}
                <div className="text-center mb-6 relative h-28 flex items-center justify-center">
                  {/* Lucide icon by default */}
                  <div
                    className={`absolute transition-all duration-500 ease-in-out 
                opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75
                w-16 h-16 ${group.color} rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-vibrant`}
                  >
                    <group.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Emoji on hover */}
                  <div className="absolute transition-all duration-500 ease-in-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 text-6xl animate-bounce-gentle">
                    {group.illustration}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                    {group.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <div
                      className={`w-2 h-2 ${group.color} rounded-full`}
                    ></div>
                    <span className="font-semibold text-sm">{group.stats}</span>
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 ${group.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Connecting line (except for mobile) */}
              {index < targetGroups.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-muted to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom stats section */}
        <div className="mt-20 text-center">
          <div className="bg-hero-gradient rounded-3xl p-8 text-white shadow-vibrant">
            <h3 className="font-display font-bold text-3xl mb-4">
              Total Addressable Market
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">6.5M+</div>
                <div className="text-white/80">Potential Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">৳500Cr+</div>
                <div className="text-white/80">Market Size</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-white/80">Skip Breakfast Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
