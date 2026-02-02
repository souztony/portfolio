export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Backend',
    items: ['Node.js', 'API REST', 'C#', '.NET', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'Segurança',
    items: ['OWASP', 'Análise de Vulnerabilidades', 'Segurança Web'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'Docker'],
  },
]
