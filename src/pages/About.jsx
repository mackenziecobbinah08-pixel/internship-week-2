import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Free to list, free to browse',
    body: 'Organisers pay nothing to submit a listing and readers pay nothing to read one. We are supported by a small number of city guides who promote us, never by taking a cut of ticket sales.',
  },
  {
    title: 'Verify before publishing',
    body: 'A real person confirms the date, the venue and the entry price with the organiser before anything appears. It slows us down, and it is the entire point.',
  },
  {
    title: 'Beyond the capital',
    body: 'Accra gets the headlines, but most of what is worth seeing is a four-hour drive away. We send reporters to Tamale, Takoradi, Ho and Wa because those calendars deserve coverage.',
  },
  {
    title: 'Respect the people running it',
    body: 'Festival organising in Ghana is mostly volunteer work. We never undercut organisers, and we never list an event without their say-so.',
  },
]

const timeline = [
  {
    year: '2023',
    title: 'A group chat and a spreadsheet',
    body: 'It started as a shared document of Akwasidae, Homowo and Detty Rave dates that kept circulating in WhatsApp groups. Nobody could remember where they had seen it.',
  },
  {
    year: '2024',
    title: 'First public listing',
    body: 'We published 30 events as a single web page. Forty-two people messaged us with corrections in the first week — which is how we knew it was worth building properly.',
  },
  {
    year: '2025',
    title: 'Regional desks open',
    body: 'Volunteer correspondents in Tamale, Takoradi and Ho started feeding us listings, and the calendar went from mostly-Accra to genuinely national.',
  },
  {
    year: '2026',
    title: '240 events, all sixteen regions',
    body: 'Over 240 confirmed listings, a free submission flow, and a rule that stands: no event goes live until the organiser has checked the details.',
  },
]

const team = [
  {
    name: 'Ama Boateng',
    role: 'Editor',
    bio: 'Accra. Former radio producer, now chasing the best atefiul music nights in Osu and documenting them badly on the dance floor.',
    initials: 'AB',
    color: '#0b6e4f',
  },
  {
    name: 'Kwesi Mensah',
    role: 'Regional editor',
    bio: 'Kumasi. Covers Asante royal functions and the football season with equal seriousness, and knows which tro-tro to catch for the tail of a festival.',
    initials: 'KM',
    color: '#c8102e',
  },
  {
    name: 'Zulaiatu Fuseini',
    role: 'Northern correspondent',
    bio: 'Tamale. Photographs every mask in the North East and is slowly teaching the rest of us why FESTIMA is not to be missed.',
    initials: 'ZF',
    color: '#5b2c8d',
  },
  {
    name: 'Nii Okai',
    role: 'Community manager',
    bio: 'Greater Accra. Reads every single organiser submission, answers the messages, and has never once sent one to spam.',
    initials: 'NO',
    color: '#a4713d',
  },
]

const faqs = [
  {
    q: 'How much does it cost to list an event?',
    a: 'Nothing. There is no listing fee and we do not take a percentage of ticket sales. If anyone charges you a fee to be listed here, it is not us.',
  },
  {
    q: 'How quickly do listings go live?',
    a: 'Usually within two working days, provided we can reach the organiser to confirm the details. Larger festivals are given a longer slot so the listing is right.',
  },
  {
    q: 'My event was published with the wrong date. What do I do?',
    a: 'Use the contact form and pick "Correct a listing". Corrections take priority in the queue and we will update or pull the listing the same day.',
  },
  {
    q: 'Can I use these details on my own flyer?',
    a: 'Yes, for anything non-commercial. Link back to the listing where you can, but republishing the details to sell your own tickets is the one thing we need to ask you not to do.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-hero page-hero-tint">
        <div className="container">
          <p className="eyebrow">About SikaEvents</p>
          <h1 className="page-title">
            A calendar that behaves like a Ghanaian calendar
          </h1>
          <p className="page-lede">
            SikaEvents exists because the best things happening in this country
            are announced in a WhatsApp group, a church noticeboard, or a hand
            painted banner three days beforehand — and then missed entirely.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container prose">
          <h2 className="detail-section-title">Why we built this</h2>
          <p>
            Ask anyone in Accra what is happening this weekend and you will get
            an answer, but not a good one. The dates live in group chats with
            thousands of members, on posters taped inside tro-tro stations, and
            in the head of the one person who always knows. There is no single
            place that puts a whole country&apos;s events side by side, and the
            ones that try usually skip straight to the biggest festivals in the
            capital.
          </p>
          <p>
            So we built the thing we wanted: a readable calendar for all sixteen
            regions, with real dates, real venues and real entry prices, where
            a two-thousand-cedi community workshop sits comfortably next to a
            stadium show. And where listing an event costs nothing, because
            somebody in Tamale should not need a marketing budget to tell the
            country that FESTIMA is happening.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="section-title">Four rules we do not bend</h2>
            </div>
          </div>

          <div className="value-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card">
                <span className="value-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-body">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">The story</p>
              <h2 className="section-title">From a spreadsheet to a calendar</h2>
            </div>
          </div>

          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-body">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-text">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">The people</p>
              <h2 className="section-title">Who you are reading</h2>
            </div>
          </div>

          <div className="team-grid">
            {team.map((person) => (
              <div key={person.name} className="team-card">
                <span
                  className="team-avatar"
                  style={{ backgroundColor: person.color }}
                  aria-hidden="true"
                >
                  {person.initials}
                </span>
                <div>
                  <h3 className="team-name">{person.name}</h3>
                  <p className="team-role">{person.role}</p>
                  <p className="team-bio">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="section-title">Before you write to us</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary className="faq-question">{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="side-cta">
            <h3 className="side-cta-title">Still stuck?</h3>
            <p className="side-cta-text">
              Send us a message and a human will reply — usually within one
              working day.
            </p>
            <Link className="btn btn-primary btn-block" to="/contact">
              Get in touch
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}