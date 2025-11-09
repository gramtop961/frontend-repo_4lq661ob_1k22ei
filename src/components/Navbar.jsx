import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">flames</span>
          .studio
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </a>
          ))}
          <div className="h-5 w-px bg-slate-300 mx-1" />
          <a href="mailto:hello@flames.studio" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
            <Linkedin className="h-5 w-5" />
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-slate-200">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="mailto:hello@flames.studio" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-medium w-fit">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
