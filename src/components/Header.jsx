import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function KenteMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="40" height="40" rx="10" fill="currentColor" />
      <g transform="translate(4 4) scale(0.8)">
        <rect width="8" height="32" fill="#f2a93b" />
        <rect x="8" y="0" width="8" height="8" fill="#c8102e" />
        <rect x="8" y="8" width="8" height="8" fill="#f2a93b" />
        <rect x="8" y="16" width="8" height="8" fill="#12916a" />
        <rect x="8" y="24" width="8" height="8" fill="#f2a93b" />
        <rect x="16" y="0" width="8" height="32" fill="#0b6e4f" />
        <rect x="24" y="0" width="8" height="8" fill="#f2a93b" />
        <rect x="24" y="8" width="8" height="8" fill="#c8102e" />
        <rect x="24" y="16" width="8" height="8" fill="#f2a93b" />
        <rect x="24" y="24" width="8" height="8" fill="#12916a" />
      </g>
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <KenteMark />
          <span className="brand-text">
            <span className="brand-name">SikaEvents</span>
            <span className="brand-tag">Ghana, all month long</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`nav-toggle-bar${open ? ' is-open' : ''}`} />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' is-active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/events"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Browse events
          </Link>
        </nav>
      </div>
    </header>
  )
}