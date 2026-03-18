import SectionHeading from '../components/SectionHeading'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

// Details
const email = 'thekiralla@gmail.com'
const links = {
  github: 'https://github.com/AbdallahKhirallah',
  linkedin: 'https://www.linkedin.com/in/abdallah-khirallah-20b0b326b/',
  resume: '',
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading number="04" title="Get In Touch" />
        <p className="font-body text-muted text-lg leading-relaxed mb-10">
          Currently seeking a Winter 2027 internship. Whether you have an opportunity or just want to connect, my inbox is always open.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block border border-gold text-gold font-display font-medium px-8 py-4 rounded hover:bg-gold hover:text-primary transition-colors duration-200"
        >
          Say Hello
        </a>

        <div className="mt-16 flex justify-center gap-8 text-muted">
          <a href={links.github} className="hover:text-gold transition-colors"><FiGithub size={23} /></a>
          <a href={links.linkedin} className="hover:text-gold transition-colors"><FiLinkedin size={23} /></a>
          <a href={`mailto:${email}`} className="hover:text-gold transition-colors"><FiMail size={23} /></a>
        </div>
      </div>
    </section>
  )
}
