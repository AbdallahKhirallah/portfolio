export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 px-6 md:px-16 lg:px-32">
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
            I care about software that works for real people, fast, clean, and without making anyone feel stupid. Nothing frustrates me more than a sluggish, ugly app. If I'm annoyed by it, I'm probably already thinking about how I'd fix it.
          </p>
          <p>
            Outside of code I'm a cyclist and swimmer since childhood, both are just me and the effort, no shortcuts. I also have a weird obsession with political debates, not because I have all the answers, but because I love watching people defend ideas with everything they've got. And when I need to slow down completely, I draw realistic portraits with graphite.
          </p>
          <p>
            Right now I'm looking for an internship where the work is real, the problems are hard, and the goal is to build something people actually use.
          </p>
        </div>

        {/* Image placeholder*/}
        <div className="flex justify-center lg:justify-end">
          <div className="w-72 h-72 rounded-lg bg-card border border-border flex items-center justify-center text-muted font-body text-sm">
            PHOTO
          </div>
        </div>

      </div>
    </section>
  )
}
