import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard.jsx'
import { categories, sortedEvents } from '../data/events.js'

const categoryIcons = {
  Festival: '🪘',
  Music: '🎶',
  'Food & Drink': '🍲',
  Arts: '🎨',
  Sports: '⚽',
  Community: '🤝',
}

const pillars = [
  {
    title: 'Verified, not viral',
    body: 'Every listing is confirmed with the organiser before it goes live, so you turn up to a real event with real tickets.',
  },
  {
    title: 'Every region, not just Accra',
    body: 'Tamale, Takoradi, Ho, Nzema. We chase the festivals that never trend online but fill an entire town.',
  },
  {
    title: 'Free to list, free to attend',
    body: 'No ticketing markup, no hidden service fee. What the organiser charges is what you pay.',
  },
]

export default function Home() {
  const upcoming = sortedEvents.slice(0, 3)
  const highlight = sortedEvents.find((event) => event.id === 'detty-rave-2026')

  return (
    <>
      <section className="hero">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="eyebrow">Accra · Kumasi · Tamale · Takoradi · Ho</p>
          <h1 className="hero-title">
            Everything happening
            <span className="hero-title-accent"> in Ghana</span>, on one page.
          </h1>
          <p className="hero-lede">
            From the Homowo harvest floats that close out the Ga year to the
            drummers who set up at 2 a.m. in Bawku — SikaEvents tracks festivals,
            concerts, food fairs and workshops across all sixteen regions.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" to="/events">
              Explore all events
            </Link>
            <Link className="btn btn-outline btn-lg" to="/about">
              How this works
            </Link>
          </div>

          <dl className="hero-stats">
            <div className="stat">
              <dt>Events listed</dt>
              <dd>240+</dd>
            </div>
            <div className="stat">
              <dt>Regions covered</dt>
              <dd>16</dd>
            </div>
            <div className="stat">
              <dt>Listing fee</dt>
              <dd>GH₵ 0</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Coming up next</p>
              <h2 className="section-title">The next three dates</h2>
            </div>
            <Link className="btn btn-ghost" to="/events">
              See the full calendar →
            </Link>
          </div>

          <div className="event-grid">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Browse your way</p>
              <h2 className="section-title">What are you in the mood for?</h2>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/events?category=${encodeURIComponent(category)}`}
                className="category-card"
              >
                <span className="category-icon" aria-hidden="true">
                  {categoryIcons[category]}
                </span>
                <span className="category-name">{category}</span>
                <span className="category-count">
                  {sortedEvents.filter((event) => event.category === category).length}{' '}
                  listed
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {highlight && (
        <section className="section">
          <div className="container">
            <div
              className="feature-panel"
              style={{
                backgroundImage: `linear-gradient(115deg, ${highlight.poster.from}dd, ${highlight.poster.to}cc)`,
              }}
            >
              <div className="feature-body">
                <p className="eyebrow eyebrow-light">Event of the season</p>
                <h2 className="feature-title">{highlight.title}</h2>
                <p className="feature-text">{highlight.blurb}</p>
                <div className="feature-tags">
                  {highlight.tags.map((tag) => (
                    <span key={tag} className="tag tag-light">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="btn btn-light btn-lg" to={`/events/${highlight.id}`}>
                  Read the full listing
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Why people book here</p>
              <h2 className="section-title">Built for the person who is actually going</h2>
            </div>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar">
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-body">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="cta-band">
            <div>
              <h2 className="cta-title">Running something?</h2>
              <p className="cta-text">
                List your event free and reach an audience that is actively
                looking for things to do this month.
              </p>
            </div>
            <Link className="btn btn-primary btn-lg" to="/contact">
              Submit an event
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}