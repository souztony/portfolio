import Section from '../components/Section'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <Section title="Contato">
      <div className="flex flex-col gap-2">
        <a
          href={profile.links.email}
          className="text-blue-400 hover:underline"
        >
          Email
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </Section>
  )
}
