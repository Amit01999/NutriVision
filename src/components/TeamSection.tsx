import {
  GraduationCap,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Feroj Sarkar',
      role: 'CEO & Co-Founder',
      specialty: 'Food Technology & Business Strategy',
      description:
        'Leading food technologist with expertise in product development and market strategy',
      skills: ['Product Development', 'Market Analysis', 'Team Leadership'],
      image: '/images/team/arif.jpg', // <-- Add image path
      color: 'bg-primary',
    },
    {
      name: 'MD Saikat ',
      role: 'CTO & Co-Founder',
      specialty: 'Food Safety & Quality Control',
      description:
        'Specialized in food safety protocols and quality assurance systems',
      skills: ['Quality Control', 'Food Safety', 'Process Optimization'],
      image: '/images/team/fatima.jpg',
      color: 'bg-accent',
    },
    {
      name: 'Sodrul Amin Sadi',
      role: 'Head of Production',
      specialty: 'Manufacturing & Operations',
      description:
        'Expert in food manufacturing processes and supply chain optimization',
      skills: ['Manufacturing', 'Supply Chain', 'Cost Optimization'],
      image: '/images/team/rafiq.jpg',
      color: 'bg-secondary',
    },
    {
      name: 'Sumaiya Tuj Johora',
      role: 'Head of Research',
      specialty: 'Nutrition Science & Innovation',
      description:
        'Nutrition scientist focused on functional food development and health benefits',
      skills: ['Nutrition Science', 'R&D', 'Health Analysis'],
      image: '/images/team/nusrat.jpg',
      color: 'bg-beetroot',
    },
    // {
    //   name: 'Karim Uddin',
    //   role: 'Marketing Director',
    //   specialty: 'Brand Strategy & Consumer Insights',
    //   description:
    //     'Marketing strategist with deep understanding of Bangladesh consumer behavior',
    //   skills: ['Brand Strategy', 'Digital Marketing', 'Consumer Research'],
    //   image: '/images/team/karim.jpg',
    //   color: 'bg-banana',
    // },
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

        {/* Team members - 4 cards aligned */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group relative bg-card border-2 border-border shadow-lg hover:shadow-vibrant transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Profile image in circle */}
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
                <p className="font-semibold text-primary mb-1">{member.role}</p>
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
    </section>
  );
};

export default TeamSection;
