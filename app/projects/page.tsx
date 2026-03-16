import { PROJECTS } from 'app/data'

export const metadata = {
  title: 'Projects',
  description: 'A list of my ML systems and projects.',
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-1 opacity-70 group-hover:opacity-100 transition-opacity"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col space-y-1.5">
            {project.link !== '#' && project.link !== '' ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors flex items-center w-fit"
              >
                {project.title} <ArrowIcon />
              </a>
            ) : (
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {project.title}
              </span>
            )}
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
