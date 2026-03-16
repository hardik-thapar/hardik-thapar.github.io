import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hardik Thapar
      </h1>
      
      <div className="mb-8 space-y-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
        <p>
          Hi there 👋 I'm <span className="font-semibold text-neutral-900 dark:text-neutral-100">Hardik Thapar</span>, an AI/ML student building systems that actually work. Currently exploring voice pathology detection and LLM inference optimization.
        </p>
        <p>
          My approach is simple: <span className="font-medium text-blue-600 dark:text-blue-400">practical first, theory second</span>. I don't wait for perfect conditions. I learn by building, breaking things down, and shipping real projects—like creating <Link href="/projects" className="underline decoration-blue-500/40 hover:decoration-blue-500 underline-offset-4 text-blue-600 dark:text-blue-400 transition-colors">VocalWell</Link> when I barely knew signal processing, or developing an LLM scheduling system in 24 hours at IIT Bombay.
        </p>
        <p>
          I take concepts, build real systems, and deploy them. That's how I've secured 8 national hackathon wins and earned recognitions like <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded text-sm font-medium">AWS Scholar</span>, <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded text-sm font-medium">McKinsey Fellow</span>, and <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded text-sm font-medium">Harvard Aspire</span>.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Explore my <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 decoration-blue-500/40">projects</Link>, deep-dive into the code on <a href="https://github.com/hardik-thapar" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 decoration-blue-500/40">GitHub</a>, or connect on <a href="https://www.linkedin.com/in/hardik-thapar" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 decoration-blue-500/40">LinkedIn</a>.
        </p>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          Recent Highlights
        </h2>
        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
          <li className="flex items-start">
            <span className="mr-3 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            <span>
              <strong className="font-medium text-neutral-900 dark:text-neutral-100">VocalWell:</strong> End-to-end voice pathology ML system. <span className="text-blue-600 dark:text-blue-400 font-medium">12-15% accuracy boost</span> over baseline.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            <span>
              <strong className="font-medium text-neutral-900 dark:text-neutral-100">LLM Scheduling Assistant:</strong> Multi-agent LLaMA-3.1/DeepSeek-7B system. Built in 24 hours, National Finalist at IIT Bombay.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            <span>
              <strong className="font-medium text-neutral-900 dark:text-neutral-100">Swasthathon:</strong> 1st place in government-recognized national hackathon (part of my 8 hackathon wins).
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            <span>
              <strong className="font-medium text-neutral-900 dark:text-neutral-100">GDG Leadership:</strong> Running practical AI/ML tooling workshops for 100+ students.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
