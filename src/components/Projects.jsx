import { ExternalLink, Figma, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Playful UI Kit',
    tag: 'Design System',
    description: 'A colourful component library focused on motion and delight.',
    link: '#',
    icon: Figma,
    tech: ['Figma', 'Tokens', 'Prototyping'],
  },
  {
    title: 'Interactive Landing',
    tag: 'Frontend',
    description: 'Hero interactions and smooth scroll scenes built with React.',
    link: '#',
    icon: Code2,
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Portfolio Revamp',
    tag: 'Case Study',
    description: 'From wireframes to a polished, animated portfolio experience.',
    link: '#',
    icon: Code2,
    tech: ['UX', 'UI', 'Frontend'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Selected Work</h2>
            <p className="text-slate-600 mt-1">A mix of design and frontend builds</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            View all <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">{p.tag}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-700">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                Visit <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
