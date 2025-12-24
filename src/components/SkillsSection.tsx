import { Mic2, Guitar } from "lucide-react";

const skills = [
  {
    icon: Mic2,
    title: "Vocalist",
    subtitle: "Main Profession",
    description: "Mastery in multiple genres including Sufi, Qawwali, Bollywood Pop & Rock with expressive range and soulful delivery.",
    genres: ['Sufi', 'Qawwali', 'Bollywood', 'Rock', 'Pop'],
  },
  {
    icon: Guitar,
    title: "Guitarist",
    subtitle: "Acoustic & Rhythm",
    description: "Skilled accompaniment with acoustic and rhythm guitar for live performances.",
    genres: ['Acoustic', 'Rhythm', 'Fingerstyle'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-10 md:py-14 bg-gradient-to-b from-card/50 to-background">
      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-12 md:mb-14">
          <span className="font-display text-[8rem] md:text-[12rem] text-primary/10 absolute -top-16 -left-4 select-none leading-none">
            02
          </span>
          <div className="relative z-10">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              What I Do
            </span>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-2">
              PERSONAL <span className="gradient-text">SKILLS</span>
            </h2>
          </div>
        </div>

        {/* Skills layout - 2 equal cards horizontally */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group glass-card p-8 hover-lift hover-glow relative overflow-hidden flex flex-col"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              
              <div className="relative z-10 flex flex-col flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs uppercase tracking-wider mb-4 w-fit">
                  {skill.subtitle}
                </span>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-2">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 flex-1">
                  {skill.description}
                </p>

                {/* Genre tags - aligned at bottom */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.genres.map((genre) => (
                    <span 
                      key={genre}
                      className="px-3 py-1 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;