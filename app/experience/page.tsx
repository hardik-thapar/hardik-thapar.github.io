import { EXPERIENCE } from 'app/data'

export const metadata = {
  title: 'Experience',
  description: 'My professional experience and roles.',
}

function parseDates(dateStr: string) {
  if (!dateStr) return { end: 0, start: 0 };
  const parts = dateStr.split('-');
  const startStr = parts[0].trim().toLowerCase();
  const endStr = parts.length > 1 ? parts[1].trim().toLowerCase() : startStr;
  
  const getVal = (str: string) => {
    if (str === 'present') return new Date().getFullYear() + 100;
    
    // Parse pure numbers (e.g. "2024")
    const match = str.match(/\d{4}/);
    if (match) return parseInt(match[0]);
    
    // Fallback if specific months are included
    const parsed = Date.parse(str);
    if (!isNaN(parsed)) return parsed;
    
    return 0;
  };
  
  return { start: getVal(startStr), end: getVal(endStr) };
}

export default function Page() {
  // Sort experience by date (newest first)
  const sortedExperience = [...EXPERIENCE].sort((a, b) => {
    const datesA = parseDates(a.date || '');
    const datesB = parseDates(b.date || '');
    
    if (datesA.end !== datesB.end) {
      return datesB.end - datesA.end;
    }
    return datesB.start - datesA.start;
  });

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Experience</h1>
      <div className="space-y-8">
        {sortedExperience.map((item, index) => (
          <div key={index} className="flex flex-col space-y-1.5">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-baseline">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-900 dark:text-neutral-100 text-[1.05rem]">
                  {item.title}
                </span>
                {item.company && (
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    {item.company}
                  </span>
                )}
              </div>
              {item.date && (
                <span className="text-sm text-neutral-500 tabular-nums shrink-0 mt-1 md:mt-0 md:ml-4">
                  {item.date}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
