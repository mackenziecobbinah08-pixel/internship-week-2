import { useState } from 'react'
import { Link } from 'react-router-dom'

const topics = [
  'Submit an event',
  'Correct a listing',
  'Partnerships and press',
  'Something else',
]

const offices = [
  {
    city: 'Accra',
    lines: ['14 Independence Avenue', 'Ridge, Accra', 'Greater Accra Region'],
    phone: '+233 30 123 4567',
  },
  {
    city: 'Kumasi',
    lines: ['Brempong Street', 'Asokwa', 'Ashanti Region'],
    phone: '+233 32 200 4411',
  },
]

const validate = (values) => {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'We need an email address to reply to.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That does not look like a valid email address.'
  }

  if (!values.topic) {
    errors.topic = 'Choose the closest option.'
  }

  const message = values.message.trim()
  if (!message) {
    errors.message = 'Please write your message.'
  } else if (message.length < 20) {
    errors.message = `Add a little more detail — ${20 - message.length} more characters.`
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))

    // Clear the message for a field as soon as it becomes valid.
    setErrors((previous) => {
      if (!previous[name]) return previous
      const nextErrors = { ...previous }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleReset() {
    setValues({ name: '', email: '', topic: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section className="section">
        <div className="container">
          <div className="success-panel">
            <span className="success-glyph" aria-hidden="true">
              ✓
            </span>
            <h1 className="empty-title">Thank you — message received</h1>
            <p className="empty-text">
              Thanks {values.name.split(' ')[0]}. Your message about
              <strong> {values.topic.toLowerCase()}</strong> is with the team. We
              reply to most things within one working day, and listing
              corrections usually go out the same day.
            </p>
            <div className="hero-actions success-actions">
              <button type="button" className="btn btn-primary" onClick={handleReset}>
                Send another message
              </button>
              <Link className="btn btn-outline" to="/events">
                Browse the calendar
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero page-hero-tint">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Talk to the people behind the calendar</h1>
          <p className="page-lede">
            Submitting an event, fixing a date that has moved, or just asking
            what is on this weekend — it all lands in the same inbox, and a
            person reads every message.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-layout">
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h2 className="detail-section-title">Send us a message</h2>

              <div className="field">
                <label htmlFor="contact-name">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <p className="field-error" id="contact-name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="contact-email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <p className="field-error" id="contact-email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="contact-topic">
                  What is this about? <span aria-hidden="true">*</span>
                </label>
                <select
                  id="contact-topic"
                  name="topic"
                  value={values.topic}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.topic)}
                  aria-describedby={errors.topic ? 'contact-topic-error' : undefined}
                >
                  <option value="">Choose a topic…</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                {errors.topic && (
                  <p className="field-error" id="contact-topic-error">
                    {errors.topic}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="contact-message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="If you are submitting an event, include the date, venue, entry price and a phone number we can confirm with."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                />
                <p className="field-hint">
                  {values.message.trim().length} characters — minimum 20
                </p>
                {errors.message && (
                  <p className="field-error" id="contact-message-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">
                  Send message
                </button>
                <button type="button" className="btn btn-ghost" onClick={handleReset}>
                  Clear
                </button>
              </div>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="detail-facts">
              <h2 className="detail-section-title">Email us</h2>
              <p className="contact-line">
                <a className="footer-link" href="mailto:hello@sikaevents.gh">
                  hello@sikaevents.gh
                </a>
              </p>
              <p className="contact-line">
                <a className="footer-link" href="mailto:listings@sikaevents.gh">
                  listings@sikaevents.gh
                </a>
              </p>
              <p className="field-hint">
                For event submissions, use the form — it gets to the right person
                faster.
              </p>
            </div>

            {offices.map((office) => (
              <div key={office.city} className="detail-facts">
                <h2 className="detail-section-title">{office.city}</h2>
                <address className="contact-address">
                  {office.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <p className="contact-line">
                  <a className="footer-link" href={`tel:${office.phone.replace(/\s/g, '')}`}>
                    {office.phone}
                  </a>
                </p>
              </div>
            ))}

            <div className="detail-facts">
              <h2 className="detail-section-title">Response times</h2>
              <dl className="mini-facts">
                <div>
                  <dt>Listing corrections</dt>
                  <dd>Same day</dd>
                </div>
                <div>
                  <dt>Event submissions</dt>
                  <dd>2 working days</dd>
                </div>
                <div>
                  <dt>Everything else</dt>
                  <dd>1 working day</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}