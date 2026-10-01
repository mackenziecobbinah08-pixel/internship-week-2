/**
 * Event catalogue for SikaEvents.
 *
 * `date` is an ISO 8601 string so it can be sorted and compared safely.
 * `poster` describes a CSS-generated poster (gradient + glyph) so the app
 * has no dependency on external image hosting.
 */

export const categories = [
  'Festival',
  'Music',
  'Food & Drink',
  'Arts',
  'Sports',
  'Community',
]

export const regions = [
  'Greater Accra',
  'Ashanti',
  'Central',
  'Eastern',
  'Volta',
  'Northern',
  'Western',
  'Bono',
]

export const events = [
  {
    id: 'detty-rave-2026',
    title: 'Detty Rave',
    category: 'Music',
    city: 'Accra',
    region: 'Greater Accra',
    venue: 'La Pleasure Beach',
    date: '2026-12-26',
    time: '4:00 PM – 6:00 AM',
    price: 120,
    poster: { glyph: '🎶', from: '#c8102e', to: '#f2a93b' },
    blurb:
      'The biggest street party on the continent closes the year with four stages, choreographers from Surulami and a sunrise set on the sand.',
    tags: ['Afrobeats', 'Dancehall', 'All night'],
  },
  {
    id: 'deti-el-2026',
    title: 'Deti-El Festival Floats',
    category: 'Festival',
    city: 'Madina',
    region: 'Greater Accra',
    venue: 'Madina–Nungua Link',
    date: '2026-12-31',
    time: '2:00 PM – 11:00 PM',
    price: 0,
    poster: { glyph: '🎭', from: '#0b6e4f', to: '#f2a93b' },
    blurb:
      'Ga thanksgiving ends the year with seven elaborately built floats, drummers and the deafening blessing of the crowd. Come early, parking collapses fast.',
    tags: ['Free', 'Ga culture', 'Parade'],
  },
  {
    id: 'akwasidae-2026',
    title: 'Akwasidae Festival',
    category: 'Festival',
    city: 'Kumasi',
    region: 'Ashanti',
    venue: 'Baremanyo Palace Grounds',
    date: '2026-11-14',
    time: '9:00 AM – 6:00 PM',
    price: 0,
    poster: { glyph: '🪘', from: '#a4713d', to: '#f2a93b' },
    blurb:
      'The Asantehene hosts the yam festival that opens the traditional planting season, complete with state sword bearers, drumming and a royal procession.',
    tags: ['Free', 'Asante', 'Yam festival'],
  },
  {
    id: 'festima-2027',
    title: 'FESTIMA: Festival of Masks & Arts',
    category: 'Arts',
    city: 'Tamale',
    region: 'Northern',
    venue: 'Tamale Sports Stadium',
    date: '2027-02-11',
    time: '10:00 AM – 9:00 PM',
    price: 25,
    poster: { glyph: '🎪', from: '#1b4d8f', to: '#f2a93b' },
    blurb:
      'Mask makers from across West Africa gather in Tamale for a week of performances, workshops and the parade of traditional masks through the city.',
    tags: ['Masks', 'Pan-African', 'Family friendly'],
  },
  {
    id: 'fiase-fiesta-2026',
    title: 'Fiase Fiesta',
    category: 'Festival',
    city: 'Sekondi-Takoradi',
    region: 'Western',
    venue: 'Fiase Traditional Area',
    date: '2026-12-19',
    time: '11:00 AM – 8:00 PM',
    price: 0,
    poster: { glyph: '🥁', from: '#063d2b', to: '#c8102e' },
    blurb:
      'Western Ghana celebrates its rich petroleum-and-fishing heritage with canoe races, food stalls and a fierce inter-town soccer final.',
    tags: ['Free', 'Canoe racing', 'Food stalls'],
  },
  {
    id: 'afrikiko-2026',
    title: 'Afrikiko Music Festival',
    category: 'Music',
    city: 'Accra',
    region: 'Greater Accra',
    venue: "Efua Sutherland Children's Park",
    date: '2026-11-28',
    time: '3:00 PM – 11:00 PM',
    price: 80,
    poster: { glyph: '🎷', from: '#5b2c8d', to: '#f2a93b' },
    blurb:
      'Highlife meets Afrobeats across three stages, with tribute sets for the greats and a highlife dance-off that has already become a national tradition.',
    tags: ['Highlife', 'Afrobeats', 'Live bands'],
  },
  {
    id: 'kakum-night-market',
    title: 'Cape Coast Night Market & Street Food Fair',
    category: 'Food & Drink',
    city: 'Cape Coast',
    region: 'Central',
    venue: 'Kakumdojo Grounds',
    date: '2026-10-17',
    time: '5:00 PM – 11:00 PM',
    price: 0,
    poster: { glyph: '🍲', from: '#c8102e', to: '#f2a93b' },
    blurb:
      'Red-red, kelewele and fresh tilapia off the grill, cooked by the grandmother-run stalls that have fed the cape road for three generations.',
    tags: ['Free', 'Street food', 'Live music'],
  },
  {
    id: 'sogakope-fiesta-2026',
    title: 'Sogakope Fiesta',
    category: 'Festival',
    city: 'Sogakope',
    region: 'Volta',
    venue: 'Sogakope Seafront',
    date: '2026-11-06',
    time: '12:00 PM – 9:00 PM',
    price: 5,
    poster: { glyph: '🏄', from: '#0f7f9c', to: '#f2a93b' },
    blurb:
      'The Volta region takes over its beachfront for four days of beach sports, seafood grills and a homecoming durbar of the Ewe chiefs.',
    tags: ['Beach', 'Seafood', 'Durbar'],
  },
  {
    id: 'ghana-mensah',
    title: 'International Mensah Hockey & Sports Festival',
    category: 'Sports',
    city: 'Cape Coast',
    region: 'Central',
    venue: 'Cape Coast Sports Stadium',
    date: '2026-11-21',
    time: '8:00 AM – 6:00 PM',
    price: 15,
    poster: { glyph: '🏑', from: '#0b6e4f', to: '#1b4d8f' },
    blurb:
      'Eight weeks of national team training play out in public, with youth clinics and an open workout session led by the Black Stars squad.',
    tags: ['Hockey', 'National teams', 'Youth clinics'],
  },
  {
    id: 'odwira-2027',
    title: 'Odwira Yam Festival',
    category: 'Festival',
    city: 'Kumasi',
    region: 'Ashanti',
    venue: 'Nhyiaeso, Offinso',
    date: '2027-03-12',
    time: '8:00 AM – 5:00 PM',
    price: 0,
    poster: { glyph: '🌱', from: '#12916a', to: '#f2a93b' },
    blurb:
      'Offinso clears the roads for a celebration of the yam harvest, farm-competition judging and the raising of new chiefs.',
    tags: ['Free', 'Harvest', 'Agriculture'],
  },
  {
    id: 'detty-rere-2026',
    title: 'Accra Comedy & Storytelling Night',
    category: 'Arts',
    city: 'Accra',
    region: 'Greater Accra',
    venue: 'Alliance Française, Ridge',
    date: '2026-10-24',
    time: '7:00 PM – 10:30 PM',
    price: 40,
    poster: { glyph: '🎤', from: '#1b4d8f', to: '#f2a93b' },
    blurb:
      'Six storytellers, one very long mic. Akwete tales, true-life confessionals and a closing set from last year’s national comedy champion.',
    tags: ['Comedy', 'Storytelling', 'Indoor'],
  },
  {
    id: 'boti-falls-fun-run',
    title: 'Boti Falls Fun Run & Water Festival',
    category: 'Sports',
    city: 'Akosombo',
    region: 'Eastern',
    venue: 'Boti Falls Visitor Centre',
    date: '2026-12-06',
    time: '7:00 AM – 3:00 PM',
    price: 30,
    poster: { glyph: '🏃', from: '#0f7f9c', to: '#12916a' },
    blurb:
      'The “Pride of the Volta” turns into a race route: 5K and 15K trails, a river canoe relay and a swim supervised by the local life-saving club.',
    tags: ['Trail run', 'Canoe', 'Family day'],
  },
  {
    id: 'jollof-war-2026',
    title: 'National Jollof Wars Cook-Off',
    category: 'Food & Drink',
    city: 'Accra',
    region: 'Greater Accra',
    venue: 'Osu Oxford Street',
    date: '2026-11-21',
    time: '12:00 PM – 9:00 PM',
    price: 20,
    poster: { glyph: '🍚', from: '#f2a93b', to: '#c8102e' },
    blurb:
      'The country argues its way through 60 minutes of seasoning. Twelve regional teams, one trophy, and judges who do not accept “it’s just basmati.”',
    tags: ['Cooking', 'Regional teams', 'Family friendly'],
  },
  {
    id: 'kpanlogo-festival-2027',
    title: 'Kpanlogo Dance Festival',
    category: 'Arts',
    city: 'Kumasi',
    region: 'Ashanti',
    venue: 'Rattray Park',
    date: '2027-01-23',
    time: '2:00 PM – 10:00 PM',
    price: 35,
    poster: { glyph: '💃', from: '#c8102e', to: '#5b2c8d' },
    blurb:
      'The Asante dance that built the highlife beat takes centre stage, with youth troupes, live brass bands and a late-night jam session.',
    tags: ['Dance', 'Brass band', 'Live'],
  },
  {
    id: 'kpando-yam-festival',
    title: 'Kpando Yam Festival',
    category: 'Community',
    city: 'Kpando',
    region: 'Volta',
    venue: 'Kpando Town Park',
    date: '2027-03-26',
    time: '9:00 AM – 6:00 PM',
    price: 0,
    poster: { glyph: '🎋', from: '#063d2b', to: '#f2a93b' },
    blurb:
      'A community-run harvest celebration: yam tasting, a tug-of-war between the nine quarters, and prizes for the best farm garden in the district.',
    tags: ['Free', 'Community', 'Harvest'],
  },
  {
    id: 'takoradi-ankos-festival',
    title: 'Ankos Festival',
    category: 'Festival',
    city: 'Takoradi',
    region: 'Western',
    venue: 'Ankos Traditional Area',
    date: '2027-04-09',
    time: '10:00 AM – 8:00 PM',
    price: 0,
    poster: { glyph: '🛶', from: '#0f7f9c', to: '#063d2b' },
    blurb:
      'Held every three years, Ankos is a full cultural reset: masquerade displays, a canoe regatta on the Butre river and a durbar of chiefs from the twelve traditions.',
    tags: ['Free', 'Masquerade', 'Triennial'],
  },
  {
    id: 'ghana-music-awards-2026',
    title: 'Ghana Music Showcase & Awards Night',
    category: 'Music',
    city: 'Accra',
    region: 'Greater Accra',
    venue: 'Grand Arena, La',
    date: '2026-12-12',
    time: '7:00 PM – 1:00 AM',
    price: 150,
    poster: { glyph: '🏆', from: '#f2a93b', to: '#5b2c8d' },
    blurb:
      'The year’s biggest stage: red carpet, twenty performances, and the awards ceremony where genre boundaries stop mattering.',
    tags: ['Awards', 'Red carpet', 'Seated'],
  },
  {
    id: 'tamale-arts-workshop',
    title: 'Tamale Textile & Mural Workshop',
    category: 'Community',
    city: 'Tamale',
    region: 'Northern',
    venue: 'Centre for National Culture',
    date: '2026-10-31',
    time: '10:00 AM – 4:00 PM',
    price: 10,
    poster: { glyph: '🎨', from: '#5b2c8d', to: '#12916a' },
    blurb:
      'A hands-on day with Gonja weavers and the Tamale mural collective. Dye, thread and a lot of paint supplied; come with clothes you can ruin.',
    tags: ['Workshop', 'Textiles', 'All ages'],
  },
]

/** Most recent first, so new events always surface at the top. */
export const sortedEvents = [...events].sort(
  (a, b) => new Date(a.date) - new Date(b.date),
)

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateParts(iso) {
  const date = new Date(`${iso}T00:00:00`)
  return {
    month: date.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
    day: String(date.getDate()).padStart(2, '0'),
    weekday: date.toLocaleDateString('en-GB', { weekday: 'short' }),
  }
}

export function formatPrice(price) {
  return price === 0 ? 'Free entry' : `GH₵ ${price}`
}