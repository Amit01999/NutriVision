import React from 'react';
import {
  Clock,
  Briefcase,
  GraduationCap,
  Zap,
  Heart,
  Coffee,
} from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            The{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Morning Rush
            </span>{' '}
            Dilemma
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Millions skip breakfast daily due to busy lifestyles. We're here to
            change that!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-8">
              <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                😰 The Problem
              </h3>
              <p className="text-lg text-muted-foreground">
                Busy mornings mean skipped meals and low energy throughout the
                day
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-vibrant transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    No Time to Cook
                  </h4>
                  <p className="text-muted-foreground">
                    Rushing to work or classes leaves no time for proper
                    breakfast preparation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-vibrant transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Expensive Options
                  </h4>
                  <p className="text-muted-foreground">
                    Healthy breakfast options from cafes and restaurants cost
                    100-200 BDT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-vibrant transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Low Energy All Day
                  </h4>
                  <p className="text-muted-foreground">
                    Skipping breakfast leads to fatigue, poor concentration, and
                    decreased productivity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-8">
              <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                ✨ The Solution
              </h3>
              <p className="text-lg text-muted-foreground">
                NutriVision makes nutritious breakfast accessible, affordable,
                and instant
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card-gradient rounded-2xl shadow-vibrant border border-primary/20 hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Ready in Seconds
                  </h4>
                  <p className="text-muted-foreground">
                    Grab and go! No preparation needed - perfect for busy
                    mornings
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card-gradient rounded-2xl shadow-vibrant border border-accent/20 hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Super Affordable
                  </h4>
                  <p className="text-muted-foreground">
                    Only 20 BDT - 5x cheaper than cafe options with better
                    nutrition
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card-gradient rounded-2xl shadow-vibrant border border-secondary/20 hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">All-Day Energy</h4>
                  <p className="text-muted-foreground">
                    Balanced nutrition keeps you energized and focused
                    throughout the day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central VS illustration */}
        {/* <div className="flex justify-center my-12">
          <div className="relative">
            <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-glow animate-wiggle">
              VS
            </div>
            <div className="absolute -top-2 -left-2 w-24 h-24 border-4 border-primary/20 rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProblemSolution;
