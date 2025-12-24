import { Star, Users, PartyPopper, Building2, Mic } from "lucide-react";

const experiences = [
  {
    icon: Star,
    title: "Opened for Samay Raina",
    venue: "NMIMS",
    description: "Opening act for the renowned comedian at NMIMS college fest",
    highlight: true,
    year: "2024",
  },
  {
    icon: Building2,
    title: "College Concert Tour",
    venue: "KES, KC, Mithibai College",
    description: "Performed at major college festivals across Mumbai",
    highlight: false,
    year: "2023-24",
  },
  {
    icon: PartyPopper,
    title: "Poonam Dhillon's Party",
    venue: "Private Event",
    description: "Private performance at celebrity event",
    highlight: true,
    year: "2024",
  },
  {
    icon: Users,
    title: "75+ Private Gigs",
    venue: "Weddings & Corporates",
    description: "Extensive experience in private and corporate entertainment",
    highlight: false,
    year: "Ongoing",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-10 md:py-14">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="relative mb-12 md:mb-14">
          <span className="font-display text-[8rem] md:text-[12rem] text-primary/10 absolute -top-16 -left-4 select-none leading-none">
            03
          </span>
          <div className="relative z-10 max-w-2xl">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              As a Singer & Guitarist
            </span>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-2">
              WORK <span className="gradient-text">EXPERIENCE</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Performing at venues ranging from intimate gatherings to grand stages, 
              creating memorable musical experiences.
            </p>
          </div>
        </div>

        {/* Experience grid - centered card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative glass-card p-6 hover-lift hover-glow ${
                exp.highlight ? 'border-primary/30' : ''
              }`}
            >
              {/* Highlight badge */}
              {exp.highlight && (
                <div className="absolute -top-2 -right-2">
                  <span className="flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                  </span>
                </div>
              )}

              {/* Year badge */}
              <span className="text-xs text-primary uppercase tracking-wider">
                {exp.year}
              </span>

              {/* Icon and title */}
              <div className="flex items-start gap-4 mt-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl tracking-wider">
                    {exp.title}
                  </h3>
                  <p className="text-primary text-sm">{exp.venue}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '75+', label: 'Private Gigs' },
            { number: '3+', label: 'College Tours' },
            { number: '1', label: 'Celebrity Event' },
            { number: '1', label: 'Year Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl gradient-text">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
