import { Link } from 'react-router-dom'
import { formatDateParts, formatPrice } from '../data/events.js'

export default function EventCard({ event, compact = false }) {
  const { month, day, weekday } = formatDateParts(event.date)
  const detailHref = `/events/${event.id}`

  return (
    <article className={`event-card${compact ? ' is-compact' : ''}`}>
      <div
        className="event-poster"
        style={{
          backgroundImage: `linear-gradient(140deg, ${event.poster.from}, ${event.poster.to})`,
        }}
      >
        <span className="event-glyph" aria-hidden="true">
          {event.poster.glyph}
        </span>
        <span className="event-category">{event.category}</span>
      </div>

      <div className="event-body">
        <div className="event-date">
          <span className="event-date-month">{month}</span>
          <span className="event-date-day">{day}</span>
          <span className="event-date-weekday">{weekday}</span>
        </div>

        <div className="event-content">
          <h3 className="event-title">
            <Link to={detailHref}>{event.title}</Link>
          </h3>
          <p className="event-meta">
            {event.venue} · {event.city}, {event.region}
          </p>
          <p className="event-meta event-time">{event.time}</p>
          {!compact && <p className="event-blurb">{event.blurb}</p>}

          <div className="event-footer">
            <span className="event-price">{formatPrice(event.price)}</span>
            <Link className="btn btn-ghost btn-sm" to={detailHref}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}