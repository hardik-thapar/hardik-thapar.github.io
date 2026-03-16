'use client'

import { useState } from 'react'

export function ExpandableSection({ title, items }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!items || items.length === 0) return null

  const displayItems = isExpanded ? items : items.slice(0, 3)
  const hasMore = items.length > 3

  return (
    <div className="mb-10">
      <h2 className="mb-5 text-xl font-medium tracking-tighter text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">
        {title}
      </h2>
      <div className="space-y-6">
        {displayItems.map((item, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <div className="w-full flex justify-between items-baseline">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {item.title}
              </span>
              {item.date && (
                <span className="text-sm text-neutral-500 tabular-nums shrink-0 ml-4">
                  {item.date}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
      
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center"
        >
          {isExpanded ? 'Show Less ↑' : 'Show More ↓'}
        </button>
      )}
    </div>
  )
}
