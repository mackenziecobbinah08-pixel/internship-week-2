import { Link, useParams } from 'react-router-dom'
import { events, formatDate, formatPrice } from '../data/events.js'

const relatedHrefs = {
  Festival: '/events?category=Festival',
  Music: '/events?category=Music',
  'Food & Drink': '/events?category=Food+%26+Drink',
  Arts: '/events?category=Arts',
  Sports: '/events?category=Sports',
  Community: '/events?category=Community',
}

export default function EventDetail() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === eventId)

  if (!event) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-glyph" aria-hidden="true">
              🎪
            </span>
            <h1 className="empty-title">We could not find that event</h1>
            <p className="empty-text">
              The listing may have been taken down, or the link may be out of
              date. The full calendar is a click away.
            </p>
            <Link className="btn btn-primary" to="/events">
              Back to all events
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section
        className="detail-hero"
        style={{
          backgroundImage: `linear-gradient(140deg, ${event.poster.from}eb, ${event.poster.to}d9)`,
        }}
      >
        <div className="container detail-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/events">Events</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{event.title}</span>
          </nav>
          <h1 className="detail-title">{event.title}</h1>
          <p className="detail-lede">{event.blurb}</p>
          <div className="feature-tags">
            {event.tags.map((tag) => (
              <span key={tag} className="tag tag-light">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container detail-layout">
          <div className="detail-main">
            <h2 className="detail-section-title">About this event</h2>
            <p className="detail-text">
              {event.title} takes place at {event.venue} in {event.city},{' '}
              {event.region}. {event.blurb}
            </p>
            <p className="detail-text">
              Doors and stalls typically open two hours ahead of the programme so
              you can find parking, settle in and get something to eat. Bring
              cash — a good number of the food vendors and craft sellers along the
              route are cash-only, and there is usually no card machine.
            </p>
            <p className="detail-text">
              Photography is welcome at most listings. If you are covering the
              event for publication, contact us in advance and we will connect you
              with the organiser.
            </p>

            <h2 className="detail-section-title">Good to know</h2>
            <ul className="detail-list">
              <li>
                <strong>Getting there</strong> — Trotros and taxis run from the
                regional terminal to the venue until well after the event ends.
              </li>
              <li>
                <strong>Access</strong> — Confirm step-free access with the
                organiser if you need it. Most outdoor grounds are grass or sand.
              </li>
              <li>
                <strong>Weather</strong> — Outdoor events run rain or shine.
                Check the organiser&apos;s page on the morning of the event.
              </li>
              <li>
                <strong>Children</strong> — Age advice is listed in the tags
                above; do not assume a late licence means children are welcome.
              </li>
            </ul>
          </div>

          <aside className="detail-aside">
            <div className="detail-facts">
              <h2 className="detail-section-title">Event details</h2>
              <dl>
                <div>
                  <dt>Date</dt>
                  <dd>{formatDate(event.date)}</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>{event.time}</dd>
                </div>
                <div>
                  <dt>Venue</dt>
                  <dd>{event.venue}</dd>
                </div>
                <div>
                  <dt>City</dt>
                  <dd>
                    {event.city}, {event.region}
                  </dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{event.category}</dd>
                </div>
                <div>
                  <dt>Entry</dt>
                  <dd className="fact-price">{formatPrice(event.price)}</dd>
                </div>
              </dl>

              <a className="btn btn-primary btn-block" href="#organiser">
                Get tickets
              </a>
              <p className="detail-fineprint">
                Tickets link to the organiser. SikaEvents does not add a booking
                fee.
              </p>
            </div>

            <div className="detail-facts">
              <h2 className="detail-section-title">More like this</h2>
              <Link
                className="btn btn-ghost btn-block"
                to={relatedHrefs[event.category] ?? '/events'}
              >
                All {event.category.toLowerCase()} events
              </Link>
              <Link className="btn btn-outline btn-block" to="/events">
                Back to the calendar
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-tint" id="organiser">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 className="cta-title">Organising {event.title}?</h2>
              <p className="cta-text">
                Tell us about any corrections to the date, venue or ticket price
                and we will update the listing.
              </p>
            </div>
            <Link className="btn btn-primary btn-lg" to="/contact">
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}