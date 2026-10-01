import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import EventCard from '../components/EventCard.jsx'
import { categories, events, regions } from '../data/events.js'

const sortOptions = [
  { value: 'date-asc', label: 'Soonest first' },
  { value: 'date-desc', label: 'Latest first' },
  { value: 'price-asc', label: 'Cheapest first' },
  { value: 'price-desc', label: 'Most expensive first' },
  { value: 'name-asc', label: 'Name (A–Z)' },
]

const priceOptions = [
  { value: 'any', label: 'Any price' },
  { value: 'free', label: 'Free entry' },
  { value: 'under-50', label: 'Under GH₵ 50' },
]

const comparators = {
  'date-asc': (a, b) => new Date(a.date) - new Date(b.date),
  'date-desc': (a, b) => new Date(b.date) - new Date(a.date),
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'name-asc': (a, b) => a.title.localeCompare(b.title),
}

export default function Events() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const category = searchParams.get('category') ?? 'all'
  const region = searchParams.get('region') ?? 'all'
  const price = searchParams.get('price') ?? 'any'
  const sort = searchParams.get('sort') ?? 'date-asc'

  /** Reads a single param and writes it back without clearing the others. */
  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all' || value === 'any') {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  function clearAll() {
    setSearchParams(new URLSearchParams())
  }

  const hasFilters =
    query !== '' || category !== 'all' || region !== 'all' || price !== 'any'

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()

    const filtered = events.filter((event) => {
      if (category !== 'all' && event.category !== category) return false
      if (region !== 'all' && event.region !== region) return false
      if (price === 'free' && event.price !== 0) return false
      if (price === 'under-50' && event.price >= 50) return false

      if (needle) {
        const haystack = [
          event.title,
          event.venue,
          event.city,
          event.region,
          event.blurb,
          ...event.tags,
        ]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(needle)) return false
      }

      return true
    })

    return filtered.sort(comparators[sort] ?? comparators['date-asc'])
  }, [query, category, region, price, sort])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">The calendar</p>
          <h1 className="page-title">Events across Ghana</h1>
          <p className="page-lede">
            {events.length} listings confirmed with organisers. Filter by
            category, region or price — the URL updates, so you can share
            exactly what you are looking at.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <form className="filter-bar" onSubmit={(e) => e.preventDefault()}>
            <div className="filter-field filter-search">
              <label htmlFor="filter-q">Search</label>
              <input
                id="filter-q"
                type="search"
                value={query}
                placeholder="Try “festival”, “Tamale”, “jollof”…"
                onChange={(e) => updateParam('q', e.target.value)}
              />
            </div>

            <div className="filter-field">
              <label htmlFor="filter-region">Region</label>
              <select
                id="filter-region"
                value={region}
                onChange={(e) => updateParam('region', e.target.value)}
              >
                <option value="all">All regions</option>
                {regions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="filter-price">Price</label>
              <select
                id="filter-price"
                value={price}
                onChange={(e) => updateParam('price', e.target.value)}
              >
                {priceOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="filter-sort">Sort by</label>
              <select
                id="filter-sort"
                value={sort}
                onChange={(e) => updateParam('sort', e.target.value)}
              >
                {sortOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <div className="filter-chips">
            <span className="filter-chips-label">Category</span>
            <button
              type="button"
              className={`chip${category === 'all' ? ' is-active' : ''}`}
              onClick={() => updateParam('category', 'all')}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`chip${category === item ? ' is-active' : ''}`}
                onClick={() => updateParam('category', item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="results-head">
            <p className="results-count">
              Showing <strong>{results.length}</strong> of {events.length} events
            </p>
            {hasFilters && (
              <button type="button" className="btn btn-ghost btn-sm" onClick={clearAll}>
                Clear filters
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <div className="event-grid">
              {results.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-glyph" aria-hidden="true">
                🔍
              </span>
              <h2 className="empty-title">Nothing matches that yet</h2>
              <p className="empty-text">
                We could not find an event with those filters. Try widening the
                region or clearing the search box — new listings go up every
                week.
              </p>
              <button type="button" className="btn btn-primary" onClick={clearAll}>
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}