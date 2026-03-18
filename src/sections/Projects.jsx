import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import projects from '../data/projects'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Projects" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 hover:border-gold transition-colors duration-200"
          >

            <h3 className="font-display text-xl font-semibold text-primary">{project.title}</h3>
            <p className="font-body text-muted text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="text-muted hover:text-gold transition-colors"><FiGithub size={18} /></a>
              {project.live && <a href={project.live} className="text-muted hover:text-gold transition-colors"><FiExternalLink size={18} /></a>}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}
