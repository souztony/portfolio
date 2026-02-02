import Section from '../components/Section'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section title="Projetos">
      <div className="grid gap-6 max-w-3xl">
        {projects.map(project => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded p-4"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-slate-400 mt-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-slate-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
