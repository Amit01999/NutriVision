import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-hero-gradient rounded-3xl p-12 text-white shadow-vibrant relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
                Ready to Join the<br />
                <span className="text-yellow-200">Nutrition Revolution?</span>
              </h2>
              
              <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Partner with us to bring smart nutrition to millions across Bangladesh
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 group">
                  🚀 Invest in NutriVision
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold text-lg px-8 py-6 backdrop-blur-sm">
                  📋 Get Business Plan
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">₹50L+</div>
                  <div className="text-white/80">Investment Opportunity</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">12-18x</div>
                  <div className="text-white/80">Projected ROI</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">6M+</div>
                  <div className="text-white/80">Target Market Size</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/20 text-center hover:shadow-vibrant transition-all duration-300">
            <div className="text-4xl mb-4">🥉</div>
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
              Early Partner
            </h3>
            <div className="text-3xl font-bold text-primary mb-4">₹5-15L</div>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>✓ 5-8% equity stake</li>
              <li>✓ Board advisory role</li>
              <li>✓ First product access</li>
              <li>✓ Quarterly updates</li>
            </ul>
            <Button variant="cta" className="w-full">
              Join as Partner
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-vibrant border-2 border-primary text-center hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <div className="text-4xl mb-4">🥈</div>
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
              Strategic Investor
            </h3>
            <div className="text-3xl font-bold text-primary mb-4">₹15-30L</div>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>✓ 8-15% equity stake</li>
              <li>✓ Board seat</li>
              <li>✓ Strategic guidance</li>
              <li>✓ Exclusive territories</li>
              <li>✓ Revenue sharing</li>
            </ul>
            <Button variant="hero" className="w-full">
              Become Investor
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-secondary/20 text-center hover:shadow-vibrant transition-all duration-300">
            <div className="text-4xl mb-4">🥇</div>
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
              Lead Investor
            </h3>
            <div className="text-3xl font-bold text-primary mb-4">₹30L+</div>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>✓ 15-25% equity stake</li>
              <li>✓ Co-founder status</li>
              <li>✓ Strategic decisions</li>
              <li>✓ National expansion rights</li>
              <li>✓ Executive roles</li>
            </ul>
            <Button variant="cta" className="w-full">
              Lead the Vision
            </Button>
          </div>
        </div>

        {/* Contact information */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
          <h3 className="font-display font-bold text-3xl text-center mb-8 text-foreground">
            Get in Touch
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Email Us</h4>
              <p className="text-muted-foreground mb-4">
                Ready to discuss partnership opportunities?
              </p>
              <Button variant="outline" className="group">
                contact@nutrivision.bd
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Call Us</h4>
              <p className="text-muted-foreground mb-4">
                Speak directly with our founding team
              </p>
              <Button variant="outline" className="group">
                +880-1700-NUTRI
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Visit Us</h4>
              <p className="text-muted-foreground mb-4">
                Schedule a meeting at our office
              </p>
              <Button variant="outline" className="group">
                Dhaka, Bangladesh
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA message */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
              🌟 Be Part of Bangladesh's Food Innovation Story
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NutriVision isn't just a product - it's a mission to nourish a nation. 
              Join us in creating a healthier, more productive Bangladesh, one breakfast at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;