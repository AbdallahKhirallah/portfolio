// ex: <Tag label="React" />
export default function Tag({ label }) {
  return (
    <span className="text-xs font-body text-black px-2 py-1 rounded" style={{ backgroundColor: '#C4622D' }}>
      {label}
    </span>
  )
}
