import { Store, School, Building2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessModel = () => {
  const channels = [
    {
      icon: Store,
      title: "Retail Shops",
      description: "Partner with local convenience stores and supermarkets",
      reach: "500+ outlets",
      color: "bg-primary",
      details: ["High foot traffic", "Impulse purchases", "Wide coverage"]
    },
    {
      icon: School,
      title: "University Canteens", 
      description: "Direct partnerships with educational institutions",
      reach: "50+ universities",
      color: "bg-accent",
      details: ["Target audience", "Regular customers", "Volume sales"]
    },
    {
      icon: Building2,
      title: "Corporate Offices",
      description: "Workplace vending and cafeteria partnerships",
      reach: "200+ companies",
      color: "bg-secondary",
      details: ["Premium market", "Subscription model", "Bulk orders"]
    },
    {
      icon: Package,
      title: "Vending Machines",
      description: "Strategic placement in high-traffic locations",
      reach: "100+ locations",
      color: "bg-beetroot",
      details: ["24/7 availability", "Prime locations", "Automated sales"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Multi-Channel</span> Distribution Strategy
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Reaching customers wherever they are - from campus to corporate, retail to vending
          </p>
        </div>

        {/* Distribution channels grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {channels.map((channel, index) => (
            <div 
              key={channel.title}
              className="group relative bg-card rounded-3xl p-6 shadow-card hover:shadow-vibrant transition-all duration-500 hover:scale-105 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${channel.color} rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-vibrant transition-all duration-300 group-hover:scale-110`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {channel.description}
                </p>
                
                {/* Reach badge */}
                <div className="bg-muted/50 px-3 py-1 rounded-full text-sm font-semibold text-foreground mb-4">
                  {channel.reach}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {channel.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <div className={`w-1.5 h-1.5 ${channel.color} rounded-full`}></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background gradient */}
              <div className={`absolute inset-0 ${channel.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Go-to-Market Timeline */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
          <h3 className="font-display font-bold text-3xl text-center mb-8 text-foreground">
            📈 Go-to-Market Timeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary text-xl">1</span>
              </div>
              <h4 className="font-bold mb-2">Month 1-2</h4>
              <p className="text-sm text-muted-foreground">Launch in 5 universities and 20 retail outlets</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-accent text-xl">2</span>
              </div>
              <h4 className="font-bold mb-2">Month 3-4</h4>
              <p className="text-sm text-muted-foreground">Expand to 15 universities and 100 retail partners</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-secondary text-xl">3</span>
              </div>
              <h4 className="font-bold mb-2">Month 5-6</h4>
              <p className="text-sm text-muted-foreground">Launch corporate partnerships and vending machines</p>
            </div>
            
            <div className="text-center">
              <div className="bg-beetroot/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-beetroot text-xl">4</span>
              </div>
              <h4 className="font-bold mb-2">Month 7+</h4>
              <p className="text-sm text-muted-foreground">Scale nationally with franchise model</p>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-3xl p-8 text-white shadow-vibrant">
            <h3 className="font-display font-bold text-3xl mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Join Bangladesh's next big food revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Become a Retailer
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Corporate Partnership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;