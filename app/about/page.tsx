import Link from 'next/link'
import { EDUCATION, SKILLS } from 'app/data'

export const metadata = {
  title: 'About',
  description: 'About me, my education, and technical skills.',
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="mb-5 text-xl font-medium tracking-tighter text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>

      <Section title="Education">
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <div className="w-full flex justify-between items-baseline">
                <span className="font-medium text-neutral-900 dark:text-neutral-100 text-[1.05rem]">
                  {edu.degree}
                </span>
                <span className="text-sm text-neutral-500 tabular-nums shrink-0 ml-4">
                  {edu.date}
                </span>
              </div>
              <div className="w-full flex justify-between items-baseline">
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                  {edu.institution}
                </span>
                {edu.gpa && (
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>
              {edu.note && (
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                  • {edu.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-baseline">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 md:w-40 shrink-0">
              Languages
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {SKILLS.languages.join(', ')}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 md:w-40 shrink-0">
              AI & Machine Learning
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {SKILLS.aiml.join(', ')}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 md:w-40 shrink-0">
              Engineering
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {SKILLS.engineering.join(', ')}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 md:w-40 shrink-0">
              Cloud
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {SKILLS.cloud.join(', ')}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 md:w-40 shrink-0">
              Core Concepts
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {SKILLS.learning.join(', ')}
            </span>
          </div>
        </div>
      </Section>
    </section>
  )
}
