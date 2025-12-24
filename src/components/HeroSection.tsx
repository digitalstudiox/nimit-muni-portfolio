import heroImage from "@/assets/hero-image-new.jpeg";
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Content wrapper - split layout */}
      <div className="relative z-20 w-full grid lg:grid-cols-[1fr_1.2fr] min-h-screen">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 pr-4">
          {/* Main title */}
          <h1 className="font-display leading-[0.85] tracking-tight mb-8">
            <span className="inline-block text-6xl md:text-8xl lg:text-9xl text-foreground">
NIMIT</span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground mt-2">
              MUNI
            </span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-10 md:text-sm">
            A soulful vocalist with rich tone quality, expressive range, and captivating 
            stage presence. Blending technical finesse with emotional depth to deliver 
            performances that resonate with audiences across genres.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
              Vocalist
            </a>
            <a href="#portfolio" className="px-8 py-3 border border-border text-foreground font-display text-sm uppercase tracking-widest transition-colors bg-primary">
              Guitarist
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative hidden lg:block">
          {/* Gradient overlay on image - more transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent z-10" />
          
          {/* Hero image */}
          <img src={heroImage} alt="Nimit Muni performing on stage" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>;
};
export default HeroSection;