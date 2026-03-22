import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {

  // Tracks which section is currently visible
  const [active, setActive] = useState('#hero')

  // For mobiles: tracks whether the mobile sidebar is open or closed
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { threshold: 1.0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-base border-b border-border px-6 md:px-16 lg:px-32 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-primary hover:text-gold transition-colors">
          ABDALLAH KHIRALLAH
        </a>

        {/* Desktop links, hidden md:flex : hidden on mobile */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link font-body text-sm transition-colors ${active === href ? 'text-gold font-semibold active' : 'text-muted hover:text-gold'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (FiMenu) button, visible only on mobile (hidden on md+) */}
        <button
          className="md:hidden text-primary hover:text-gold transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </nav>


      {/* dark backdrop behind the sidebar, closes menu on click */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}


      {/* Sidebar slides in from the right so it sits above the overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[60] bg-base border-l border-border flex flex-col px-8 py-10 gap-8 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Close button */}
        <button
          className="self-end text-primary hover:text-gold transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>


        {/* Sidebar links */}
        <ul className="flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className={`nav-link font-display text-lg transition-colors ${active === href ? 'text-gold font-semibold active' : 'text-primary hover:text-gold'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
