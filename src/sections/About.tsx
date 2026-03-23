export default function About() {
  return (
    <section id="about" className="pt-8 pb-24 px-6 md:px-16 lg:px-32">
      <h2
        className="font-display text-3xl font-bold text-primary uppercase mb-10 block text-left origin-left"
        style={{ transform: 'scaleX(1.3)' }}
      >
        About Me
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        <div className="flex flex-col gap-6 font-body text-primary text-lg leading-relaxed">
          <p>
            I got into Computer Science at 18 with one simple bet: that this field was where the future was being written, and I wanted to be part of writing it. Turns out I was right, but what kept me here wasn't the promise of a career. It was the feeling of actually building something.
          </p>
          <p>
            I care about software that works for real people, fast, clean, and without making anyone feel lost. Nothing frustrates me more than a sluggish, ugly app. If I'm annoyed by it, I'm probably already thinking about how I'd fix it.
          </p>
          <p>
            Outside of code I'm a cyclist and swimmer since childhood, both are just me and the effort, no shortcuts. And when I need to slow down completely, I draw realistic portraits with graphite.
          </p>
          <p>
            Right now I'm looking for an internship where the work is real, the problems are hard, and the goal is to build something people actually use.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://github.com/AbdallahKhirallah.png"
            alt="Abdallah Khirallah"
            className="w-96 h-96 rounded-full object-cover"
            style={{
              boxShadow: '0 0 0 4px var(--gold-primary), 0 0 0 8px rgba(196, 98, 45, 0.2), 0 0 24px 8px rgba(196, 98, 45, 0.1)',
              animation: 'fadeInUp 1.2s ease 0.3s both',
            }}
          />
        </div>

      </div>
    </section>
  )
}
