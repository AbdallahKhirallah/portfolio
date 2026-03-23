import SectionHeading from '../components/SectionHeading'

const languages = [
  { name: 'Arabic',  blocks: 5 },
  { name: 'English', blocks: 5 },
  { name: 'French',  blocks: 4 },
  { name: 'Spanish', blocks: 3 },
]

const TOTAL_BLOCKS = 5


export default function Languages() {
  return (
    <section id="languages" className="py-24 px-6 md:px-16 lg:px-32">
      <SectionHeading number="04" title="Languages" />
      <div className="max-w-4xl mt-6">
        <div className="flex flex-col gap-6">
          {languages.map(({ name, blocks }) => (
            <div key={name} className="flex items-center gap-6">
              <span className="font-display text-primary w-20 shrink-0">{name}</span>
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-3 rounded-sm ${i < blocks ? 'bg-gold': 'border border-border'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
