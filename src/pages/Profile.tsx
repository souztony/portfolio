import Section from '../components/Section'
import { profile } from '../data/profile'

export default function Profile() {
  return (
    <Section title="Perfil">
      <p className="text-xl font-semibold">{profile.name}</p>
      <p className="text-slate-400">{profile.role}</p>

      <p className="mt-4 max-w-2xl text-slate-300">
        {profile.summary}
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href={profile.links.github}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  )
}
