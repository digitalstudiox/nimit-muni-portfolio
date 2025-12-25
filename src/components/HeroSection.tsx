import heroImage from "@/assets/hero-image-new.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden pt-16"
    >
      {/* TEXT CONTAINER (constrained, always readable) */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-screen px-6">
        <div className="grid grid-cols-[45%_55%] min-h-screen">

          {/* LEFT — TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display leading-[0.9] tracking-tight mb-6 sm:mb-8">
              <span className="block text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-white">
                NIMIT
              </span>
              <span className="block text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-white mt-1 sm:mt-2">
                MUNI
              </span>
            </h1>

            {/* Fixed width = consistent line breaks */}
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 max-w-[460px]">
              A soulful vocalist with rich tone quality, expressive range, and
              captivating stage presence. Blending technical finesse with emotional
              depth to deliver performances that resonate across genres.
            </p>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-primary/90 transition"
              >
                Vocalist
              </a>
              <a
                href="#portfolio"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-primary/90 transition"
              >
                Guitarist
              </a>
            </div>
          </div>

          {/* EMPTY GRID CELL — image bleeds outside */}
          <div />
        </div>
      </div>

      {/* IMAGE — FULL BLEED, RESPONSIVE BEHAVIOR */}
      <div
        className="
          absolute inset-y-0 right-0
          w-[55%]
          max-md:w-full
          max-md:opacity-35
          max-md:blur-[1px]
        "
      >
        <img
          src={heroImage}
          alt="Nimit Muni performing on stage"
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
        />

        {/* Gradient — stronger on mobile, lighter on desktop */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black
            via-black/30
            sm:via-black/20
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default HeroSection;
