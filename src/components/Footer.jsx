import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="font-semibold">Let’s build something fun.</p>
          <p className="text-slate-600 text-sm mt-1">Open for freelance and collaboration.</p>
        </div>
        <div className="flex md:justify-end items-center gap-4">
          <a href="mailto:hello@flames.studio" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Your Name — All rights reserved.</div>
    </footer>
  )
}
