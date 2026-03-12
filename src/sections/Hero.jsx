export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32">
      <p className="text-gold font-body text-sm tracking-widest uppercase mb-4">
        {/* TODO: greeting line */}
      </p>

      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight">
        Abdallah Khirallah
      </h1>

      <h2 className="font-display text-4xl md:text-6xl font-bold text-muted mt-2">
        {/* TODO: tagline */}
      </h2>

      <p className="font-body text-muted text-lg mt-6 max-w-xl leading-relaxed">
        {/* TODO: a short bio */}
      </p>

      <div className="mt-10 flex gap-4">
        <a href="#projects" className="border border-gold text-gold font-display font-medium px-6 py-3 rounded hover:bg-gold hover:text-base transition-colors duration-200">
          {/*TODO: CTA  */}
        </a>
        <a href="#contact" className="border border-border text-primary font-display font-medium px-6 py-3 rounded hover:border-muted transition-colors duration-200">
          {/* TODO: CTA  */}
        </a>

      </div>

    </section>
  )
}
