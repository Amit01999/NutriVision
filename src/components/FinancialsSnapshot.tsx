import { TrendingUp, DollarSign, Target, PieChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FinancialsSnapshot = () => {
  const metrics = [
    {
      icon: DollarSign,
      title: 'Revenue Projection',
      value: '৳5 Crore',
      period: 'Year 1',
      growth: '+300% Y2',
      color: 'bg-primary',
    },
    {
      icon: TrendingUp,
      title: 'Gross Margin',
      value: '40%',
      period: 'Steady State',
      growth: 'Industry Leading',
      color: 'bg-accent',
    },
    {
      icon: Target,
      title: 'Break-even',
      value: '8 Months',
      period: 'From Launch',
      growth: 'Self-sustaining',
      color: 'bg-secondary',
    },
    {
      icon: PieChart,
      title: 'Market Share',
      value: '5%',
      period: 'Year 3 Target',
      growth: '₹50 Cr Market',
      color: 'bg-beetroot',
    },
  ];

  const salesForecast = [
    { month: 'Month 1', units: '5,000', revenue: '₹1L' },
    { month: 'Month 3', units: '25,000', revenue: '₹5L' },
    { month: 'Month 6', units: '75,000', revenue: '₹15L' },
    { month: 'Month 12', units: '200,000', revenue: '₹40L' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Financial
            </span>{' '}
            Snapshot
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong unit economics and scalable business model with attractive
            returns
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={metric.title}
              className="group relative bg-white/10 border border-border shadow-card hover:shadow-vibrant transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card group-hover:shadow-vibrant transition-all duration-300`}
                >
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display font-bold text-3xl text-foreground mb-2">
                  {metric.value}
                </h3>

                <p className="text-muted-foreground mb-1 text-sm">
                  {metric.period}
                </p>

                <div className="bg-muted/50 px-3 py-1 rounded-full text-xs font-semibold text-accent">
                  {metric.growth}
                </div>

                <h4 className="font-semibold text-sm text-foreground mt-3">
                  {metric.title}
                </h4>

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 ${metric.color} opacity-5 rounded-lg group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales forecast chart */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card shadow-card border border-border/50">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground flex items-center gap-3">
                📈 Sales Forecast
              </h3>

              <div className="space-y-4">
                {salesForecast.map((data, index) => (
                  <div
                    key={data.month}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
                  >
                    <div>
                      <div className="font-semibold text-foreground">
                        {data.month}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Units: {data.units}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-primary">
                        {data.revenue}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Revenue
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-primary/20 rounded-b-xl">
                      <div
                        className="h-full bg-primary rounded-b-xl transition-all duration-1000"
                        style={{ width: `${(index + 1) * 25}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Unit Economics */}
          <Card className="bg-card shadow-card border border-border/50">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground flex items-center gap-3">
                💰 Unit Economics
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-foreground">Selling Price</span>
                  <span className="font-bold text-accent">৳20</span>
                </div>

                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-muted-foreground">Raw Materials</span>
                  <span className="font-semibold">৳8</span>
                </div>

                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-muted-foreground">Manufacturing</span>
                  <span className="font-semibold">৳2</span>
                </div>

                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-muted-foreground">Distribution</span>
                  <span className="font-semibold">৳2</span>
                </div>

                <hr className="border-border" />

                <div className="flex justify-between p-3 bg-primary/10 rounded-lg">
                  <span className="font-bold text-foreground">
                    Gross Profit
                  </span>
                  <span className="font-bold text-primary">৳8 (40%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment highlights */}
        <div className="bg-hero-gradient rounded-3xl p-8 text-white shadow-vibrant">
          <h3 className="font-display font-bold text-3xl text-center mb-8">
            Investment Highlights
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="font-bold text-xl mb-2">Fast Growth</h4>
              <p className="text-white/90">
                300% revenue growth projected in Year 2
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">💎</div>
              <h4 className="font-bold text-xl mb-2">High Margins</h4>
              <p className="text-white/90">
                40% gross margins with scalable operations
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="font-bold text-xl mb-2">Proven Model</h4>
              <p className="text-white/90">
                Validated demand with pre-orders and partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSnapshot;
