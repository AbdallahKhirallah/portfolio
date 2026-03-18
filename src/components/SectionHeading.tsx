

export default function SectionHeading({ number, title }) {
  return (
    <h2 className="font-display text-3xl font-bold text-primary mb-10">
      <span className="text-gold mr-2">{number}.</span> {title}
    </h2>
  )
}
