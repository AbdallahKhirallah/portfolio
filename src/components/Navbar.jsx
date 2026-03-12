const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-base border-b border-border px-6 md:px-16 lg:px-32 h-16 flex items-center justify-between">
      <a href="#hero" className="font-display font-bold text-primary hover:text-gold transition-colors">
        ABDALLAH KHIRALLAH
      </a>
      
      <ul className="flex gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="font-body text-sm text-muted hover:text-gold transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul> 
    </nav>
  )
}
