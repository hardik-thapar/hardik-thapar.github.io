import { HONORS, CERTIFICATIONS } from 'app/data'
import { ExpandableSection } from 'app/components/expandable-section'

export const metadata = {
  title: 'Achievements',
  description: 'Hackathon wins and fellowships.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Achievements</h1>
      <ExpandableSection title="Honors & Hackathons" items={HONORS} />
      <ExpandableSection title="Certifications & Fellowships" items={CERTIFICATIONS} />
    </section>
  )
}
