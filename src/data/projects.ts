export type Project = {
  title: string
  description: string
  stack: string[]
  github: string
}

export const projects: Project[] = [
  {
    title: 'Sistema de Análise de Vulnerabilidades',
    description:
      'Ferramenta que analisa sites e identifica vulnerabilidades de segurança.',
    stack: ['Node.js', 'Security', 'API'],
    github: 'https://github.com/souztony/',
  },
]
