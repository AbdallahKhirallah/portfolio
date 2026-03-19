import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 px-6 md:px-16 lg:px-32">
      <SectionHeading number="01" title="About Me" />
      <div className="max-w-4xl">
        <div className="space-y-4 font-body text-muted text-lg leading-relaxed">
          {/* TODO: paragraphs about me */}
        </div>
      </div>
    </section>
  )
}
