export default function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2
      className="font-display text-3xl font-bold text-primary uppercase mb-10 origin-left inline-block"
      style={{ transform: 'scaleX(1.3)' }}
    >
      {title}
    </h2>
  )
}
