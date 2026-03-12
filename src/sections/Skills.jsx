import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import skills from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto">
      <SectionHeading number="03" title="Skills" />
      <div className="grid sm:grid-cols-2 gap-8">

        {Object.entries(skills).map(([category, items]) => ( // converting object to array of [key, value] pairs ([Frameworks, [Node.js, Express.js ...] ])
          <div key={category}>
            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-widest mb-3">
              {category} {/* ex : Frameworks  */}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => <Tag key={skill} label={skill} />)}  {/* items: Node.js, Express.js ...  */}
            </ul>
          </div>
        ))}

      </div>
    </section>
  )
}
