import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Perfil', path: '/profile' },
  { label: 'Sobre', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projetos', path: '/projects' },
  { label: 'Contato', path: '/contact' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 p-6">
      <h1 className="text-xl font-bold mb-8">Tony Souza</h1>

      <nav className="flex flex-col gap-2">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
