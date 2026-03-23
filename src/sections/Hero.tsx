import type { CSSProperties } from 'react'

const anim = (delay: number): CSSProperties => ({
  animation: `fadeInUp 0.7s ease ${delay}s both`,
})

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center text-center px-6 md:px-16 lg:px-32 pt-32 pb-24">
      <p className="text-gold font-body text-lg tracking-widest uppercase mb-4" style={anim(0)}>
        Hi, I'm
      </p>

      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight" style={anim(0.15)}>
        Abdallah Khirallah
      </h1>

      <h2 className="font-display text-2xl md:text-3xl font-medium text-primary mt-4" style={anim(0.35)}>
        I build for the web. I think about what's next.
      </h2>

      <p className="font-body text-primary text-lg mt-6 max-w-xl leading-relaxed" style={anim(0.55)}>
        Second-year CS student at Concordia University, building web apps and exploring what becomes possible when you wire AI into them.
      </p>

      <div className="mt-10 flex gap-4" style={anim(0.75)}>
        <a href="#projects" className="border border-gold text-gold font-display font-medium px-6 py-3 rounded hover:bg-gold hover:text-primary transition-colors duration-200">
          See My Work
        </a>
        <a href="#contact" className="border border-border text-primary font-display font-medium px-6 py-3 rounded hover:border-muted transition-colors duration-200">
          Get In Touch
        </a>
      </div>

    </section>
  )
}
