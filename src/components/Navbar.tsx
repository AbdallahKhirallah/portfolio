import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {

  // Hook to  rem active sections
  const [active, setActive] = useState('#hero')

  // useEffect sets up an observer
  useEffect(() => {

    // document.querySelectorAll selects all <section> elements that have an id attribute
    const sections = document.querySelectorAll('section[id]')


    // IntersectionObserver: browser API that watches elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.isIntersecting is true when the section is visible on screen
          // update "active" var  to ex: "#about" when the about section is visible
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      // the callback fires when 100% of the section is visible
      { threshold: 1.0 }
    )

    // observing each section
    sections.forEach((s) => observer.observe(s))


    //  Cleanup function to disconnect the observer so it doesnt keep running in the background ,doesnt fire here cuz components do not unmount
    return () => observer.disconnect()
  }, []) 

  return (
    <nav className="fixed top-0 w-full z-50 bg-base border-b border-border px-6 md:px-16 lg:px-32 h-16 flex items-center justify-between">
      <a href="#hero" className="font-display font-bold text-primary hover:text-gold transition-colors">
        ABDALLAH KHIRALLAH
      </a>

      <ul className="flex gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              // Conditionally apply classes based on whether this link is the active section
              // ex: "#about" === "#about" -> true -> gold + bold
              className={`nav-link font-body text-sm transition-colors ${active === href ? 'text-gold font-semibold active' : 'text-muted hover:text-gold'}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
