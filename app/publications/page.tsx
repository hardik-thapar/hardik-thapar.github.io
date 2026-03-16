import { PUBLICATIONS } from 'app/data'

export const metadata = {
  title: 'Publications',
  description: 'My research publications and papers.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Publications</h1>
      <div className="space-y-8">
        {PUBLICATIONS.map((pub, index) => (
          <div key={index} className="flex flex-col space-y-1.5">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-baseline">
              {pub.link !== '#' && pub.link !== '' ? (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-neutral-900 dark:text-neutral-100 underline decoration-neutral-400 dark:hover:decoration-neutral-200 transition-colors mr-4"
                >
                  {pub.title}
                </a>
              ) : (
                <span className="font-medium text-neutral-900 dark:text-neutral-100 mr-4">
                  {pub.title}
                </span>
              )}
              {pub.date && (
                <span className="text-sm text-neutral-500 tabular-nums shrink-0 mt-1 md:mt-0">
                  {pub.date}
                </span>
              )}
            </div>
            {pub.venue && (
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {pub.venue}
              </span>
            )}
            {pub.description && (
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pub.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
