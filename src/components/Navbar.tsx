import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'

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

  // Tracks light/dark mode.
  // () => ... runs once on mount to read from localStorage (to remember user preference)
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')


  // whenever isDark changes, apply or remove the "dark" class on <html>
  // & save the preference to localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])


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
        <a href="#hero" className="font-display font-bold text-primary hover:text-gold transition-colors tracking-widest">
          ABDALLAH KHIRALLAH
        </a>

        <div className="flex items-center gap-6">

          {/* Desktop links, hidden on mobile */}
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

          {/* Dark mode toggle, moon in light mode, sun in dark mode */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-muted hover:text-gold transition-colors"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Hamburger (FiMenu) button, visible only on mobile (hidden on md+) */}
          <button
            className="md:hidden text-primary hover:text-gold transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu size={24} />
          </button>

        </div>
      </nav>
  
      {/* Dark backdrop behind the sidebar, closes menu on click */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar slides in from the right */}
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

              // Conditionally apply classes based on whether this link is the active section
              // ex: "#about" === "#about" -> true -> gold + bold
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
