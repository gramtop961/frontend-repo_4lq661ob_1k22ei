export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold tracking-tight">About</h2>
          <p className="mt-2 text-slate-600">A little bit about me</p>
        </div>
        <div className="md:col-span-2 space-y-4 text-slate-700 leading-relaxed">
          <p>
            Hi! I’m a multidisciplinary designer and frontend engineer focused on building lively, polished interfaces. I enjoy crafting component systems, micro-interactions, and accessible experiences that feel human.
          </p>
          <p>
            My toolkit leans on React, Tailwind, and Framer Motion, paired with strong product thinking and visual design. I thrive at the intersection of aesthetics and usability.
          </p>
          <p>
            Outside of screens, I sketch, explore coffee spots, and learn motion design to bring more life into the web.
          </p>
        </div>
      </div>
    </section>
  )
}
