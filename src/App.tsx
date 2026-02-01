import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function Placeholder({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-slate-400">Conteúdo em construção.</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex h-full text-slate-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Placeholder title="Perfil" />} />
          <Route path="/about" element={<Placeholder title="Sobre" />} />
          <Route path="/skills" element={<Placeholder title="Skills" />} />
          <Route path="/projects" element={<Placeholder title="Projetos" />} />
          <Route path="/contact" element={<Placeholder title="Contato" />} />
        </Routes>
      </main>
    </div>
  )
}
