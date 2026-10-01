import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

const cases = [
  ['/', 'Everything happening'],
  ['/events', 'Events across Ghana'],
  ['/events/detty-rave-2026', 'Detty Rave'],
  ['/events/does-not-exist', 'could not find that event'],
  ['/about', 'Four rules we do not bend'],
  ['/contact', 'Talk to the people behind the calendar'],
  ['/definitely-missing', 'This page missed the event'],
]

/** Renders a route and asserts on both required and forbidden content. */
const filterCases = [
  { path: '/events?category=Music', expect: 'Detty Rave', reject: 'Akwasidae' },
  { path: '/events?region=Volta', expect: 'Sogakope Fiesta', reject: 'Detty Rave' },
  { path: '/events?q=jollof', expect: 'National Jollof Wars Cook-Off', reject: 'FESTIMA' },
  { path: '/events?price=free', expect: 'Deti-El Festival Floats', reject: 'Detty Rave' },
  { path: '/events?q=zzzznothing', expect: 'Nothing matches that yet', reject: 'Detty Rave' },
]

let failed = 0

for (const [path, expected] of cases) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    )

    if (!html.includes(expected)) {
      console.error(`FAIL ${path} rendered but missing "${expected}"`)
      failed++
    } else if (!html.includes('SikaEvents')) {
      console.error(`FAIL ${path} missing header/footer`)
      failed++
    } else {
      console.log(`ok   ${path} (${html.length} chars)`)
    }
  } catch (error) {
    console.error(`FAIL ${path} threw: ${error.message}`)
    failed++
  }
}

for (const { path, expect, reject } of filterCases) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    )

    if (!html.includes(expect)) {
      console.error(`FAIL ${path} missing "${expect}"`)
      failed++
    } else if (html.includes(reject)) {
      console.error(`FAIL ${path} should not contain "${reject}"`)
      failed++
    } else {
      console.log(`ok   filter ${path}`)
    }
  } catch (error) {
    console.error(`FAIL ${path} threw: ${error.message}`)
    failed++
  }
}

console.log(failed === 0 ? '\nAll checks passed.' : `\n${failed} check(s) failed.`)
process.exit(failed === 0 ? 0 : 1)