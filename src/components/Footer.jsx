import { Link } from 'react-router-dom'

const explore = [
  { to: '/events?category=Festival', label: 'Festivals' },
  { to: '/events?category=Music', label: 'Music' },
  { to: '/events?category=Food+%26+Drink', label: 'Food & Drink' },
  { to: '/events', label: 'Everything' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <p className="footer-logo">SikaEvents</p>
          <p className="footer-blurb">
            An independent guide to what is happening across Ghana — from a
            neighbourhood yaw of jollof to the biggest stage at La. Listed for
            free, always.
          </p>
          <div className="footer-social">
            <a
              className="social-link"
              href="https://x.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="SikaEvents on X"
            >
              X
            </a>
            <a
              className="social-link"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="SikaEvents on Instagram"
            >
              IG
            </a>
            <a
              className="social-link"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="SikaEvents on Facebook"
            >
              FB
            </a>
          </div>
        </div>

        <nav className="footer-column" aria-label="Explore events">
          <h2 className="footer-heading">Explore</h2>
          {explore.map((item) => (
            <Link key={item.label} to={item.to} className="footer-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Regions">
          <h2 className="footer-heading">Regions</h2>
          <Link to="/events?region=Greater+Accra" className="footer-link">
            Greater Accra
          </Link>
          <Link to="/events?region=Ashanti" className="footer-link">
            Ashanti
          </Link>
          <Link to="/events?region=Volta" className="footer-link">
            Volta
          </Link>
          <Link to="/events?region=Central" className="footer-link">
            Central
          </Link>
          <Link to="/events?region=Northern" className="footer-link">
            Northern
          </Link>
        </nav>

        <div className="footer-column">
          <h2 className="footer-heading">Get in touch</h2>
          <p className="footer-line">
            <a className="footer-link" href="mailto:hello@sikaevents.gh">
              hello@sikaevents.gh
            </a>
          </p>
          <p className="footer-line">
            <a className="footer-link" href="tel:+30201234567">
              +233 30 123 4567
            </a>
          </p>
          <p className="footer-line">
            14 Independence Avenue
            <br />
            Ridge, Accra
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} SikaEvents. Built in Accra.</p>
        <p className="footer-note">
          Event details are confirmed with organisers before publication.
        </p>
      </div>
    </footer>
  )
}