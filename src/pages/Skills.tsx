import Section from '../components/Section'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {skills.map(group => (
          <div
            key={group.title}
            className="bg-slate-900 border border-slate-800 rounded p-4"
          >
            <h3 className="font-semibold mb-2">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map(skill => (
                <li
                  key={skill}
                  className="px-3 py-1 text-sm bg-slate-800 rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
