import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs font-semibold text-slate-600 mb-4">Designer • Frontend Developer</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Crafting playful, modern web experiences
          </h1>
          <p className="mt-5 text-slate-700 max-w-xl">
            I design and build interactive interfaces with a love for detail, motion, and delightful user journeys.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium bg-white/80 backdrop-blur hover:bg-white">
              About Me
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {['React', 'Tailwind', 'Framer Motion', 'Figma'].map((skill) => (
            <li key={skill} className="rounded-xl border border-white/50 bg-white/70 backdrop-blur px-4 py-3 text-sm font-medium text-slate-800 shadow-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
