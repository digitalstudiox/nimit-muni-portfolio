import { Music, Heart, Globe, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-image.jpeg";
const AboutSection = () => {
  return <section id="about" className="relative py-10 md:py-14 overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="lg:col-span-5 relative animate-slide-in-left">
            <div className="relative">
              {/* Section number */}
              <span className="hidden md:block font-display text-[8rem] md:text-[12rem] text-primary/10 absolute -top-16 -left-4 select-none leading-none">
                01
              </span>
              
              {/* Main image container */}
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden group">
                <img src={aboutImage} alt="Nimit Muni" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4">
                  <p className="font-display text-xl tracking-wider text-primary">
                    50+ Performances
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Across Mumbai & Beyond
                  </p>
                </div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-7 animate-slide-in-right">
            <div className="mb-8">
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                Introduction
              </span>
              <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-2">
                ABOUT <span className="gradient-text">ME</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base">
                I am a vocalist driven by <span className="text-foreground font-medium">passion and storytelling</span>. 
                Singing has been my language of expression since childhood, and over the years, 
                I've developed a voice that blends emotion, technique, and soul.
              </p>

              <p className="text-base">
                Whether performing on stage or in the studio, I bring authenticity and energy 
                to every note. My musical journey spans genres like{" "}
                <span className="text-primary">Sufi</span>,{" "}
                <span className="text-primary">Qawwali</span>,{" "}
                <span className="text-primary">Bollywood Pop</span>, and{" "}
                <span className="text-primary">Rock</span>.
              </p>
            </div>

            {/* Info cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="glass-card p-5 hover-lift group">
                <Music className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg tracking-wider mb-1">Multi-Genre</h4>
                <p className="text-sm text-muted-foreground">Sufi to Rock</p>
              </div>
              <div className="glass-card p-5 hover-lift group">
                <Heart className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg tracking-wider mb-1">Passionate</h4>
                <p className="text-sm text-muted-foreground">Emotional Depth</p>
              </div>
              <div className="glass-card p-5 hover-lift group">
                <Globe className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg tracking-wider mb-1">Inspired</h4>
                <p className="text-sm text-muted-foreground">By Travel & Nature</p>
              </div>
              <div className="glass-card p-5 hover-lift group">
                <Sparkles className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg tracking-wider mb-1">Available</h4>
                <p className="text-sm text-muted-foreground">For Gigs & Collabs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;