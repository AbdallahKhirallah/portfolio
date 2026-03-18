// ex: <Tag label="React" />
export default function Tag({ label }) {
  return (
    <span className="text-xs font-body text-gold bg-brown-dark px-2 py-1 rounded">
      {label}
    </span>
  )
}
