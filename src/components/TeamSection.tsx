import {
  GraduationCap,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import soikot from '../assets/soikot.jpg';
import feroj from '../assets/feroj.jpg';
import sadi from '../assets/sadi.jpg';
import sumaiya from '../assets/sumaiya.jpg';
import sourov from '../assets/sourov.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Feroj Sarkar',
      role: 'Team Leader & Product Strategy Lead',
      specialty: 'Product Innovation & Operations',
      description:
        'Skilled in product innovation and operations, driving the team with leadership and vision.',
      skills: ['Product Strategy', 'Innovation', 'Operations'],
      image: feroj,
      color: 'bg-primary',
    },
    {
      name: 'Saikat',
      role: 'Marketing & Branding Head',
      specialty: 'Youth Engagement & Digital Reach',
      description:
        'Focused on creative marketing, youth engagement, and building strong digital presence.',
      skills: ['Marketing', 'Branding', 'Digital Strategy'],
      image: soikot,
      color: 'bg-accent',
    },
    {
      name: 'Sadi',
      role: 'Quality & Nutrition Analyst',
      specialty: 'Nutritional Profiling & Food Safety',
      description:
        'Expert in nutritional profiling and food safety, ensuring products meet top quality standards.',
      skills: ['Food Safety', 'Nutrition Analysis', 'Quality Assurance'],
      image: sadi,
      color: 'bg-secondary',
    },
    {
      name: 'Sowrov',
      role: 'Supply Chain & Logistics Manager',
      specialty: 'Procurement & Vendor Coordination',
      description:
        'Strong in procurement and vendor coordination, ensuring smooth supply chain operations.',
      skills: ['Procurement', 'Vendor Management', 'Logistics'],
      image: sourov, // 👉 Replace with Sowrov’s actual image if available
      color: 'bg-secondary',
    },

    {
      name: 'Sumaiya',
      role: 'Consumer Research & Community Lead',
      specialty: 'Customer Insights & Feedback',
      description:
        'Passionate about understanding customer needs and building community-driven insights.',
      skills: [
        'Consumer Research',
        'Community Engagement',
        'Feedback Analysis',
      ],
      image: sumaiya,
      color: 'bg-beetroot',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Meet Our{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Food Engineering students turning academic excellence
            into real-world innovation
          </p>
        </div>

        {/* Team members - 5 cards aligned */}
        <div>
          {/* First row → 3 cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Card
                key={member.name}
                className="group relative bg-card border-2 border-border shadow-lg hover:shadow-vibrant transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  {/* Profile image */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/30 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member info */}
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-primary mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-xs uppercase tracking-wide text-foreground">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-muted/50 px-2 py-1 rounded-full text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row → 2 cards centered */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {teamMembers.slice(3).map(member => (
              <Card
                key={member.name}
                className="group relative bg-card border-2 border-border shadow-lg hover:shadow-vibrant transition-all duration-500 hover:scale-105 overflow-hidden w-full max-w-sm"
              >
                <CardContent className="p-6 text-center">
                  {/* Profile image */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/30 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member info */}
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-primary mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-xs uppercase tracking-wide text-foreground">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-muted/50 px-2 py-1 rounded-full text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
