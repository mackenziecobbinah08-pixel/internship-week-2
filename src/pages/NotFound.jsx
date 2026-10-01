import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="not-found-code">404</p>
        <h1 className="page-title">This page missed the event</h1>
        <p className="page-lede">
          The link may be old, or the page may have moved. The calendar is
          still where you left it.
        </p>
        <div className="hero-actions not-found-actions">
          <Link className="btn btn-primary btn-lg" to="/">
            Back to home
          </Link>
          <Link className="btn btn-outline btn-lg" to="/events">
            See all events
          </Link>
        </div>
      </div>
    </section>
  )
}