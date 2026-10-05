// Single source of truth for the lodge's details, rooms and facilities.
// Everything here was taken from the old boeketlong.co.za site. Anything
// marked TODO still needs confirming by the lodge before launch.

export const site = {
  name: 'Boeketlong Lodge',
  tagline: 'Make yourself at home',
  /** Tourism Grading Council of South Africa star grading. */
  stars: 4,
  url: 'https://www.boeketlong.co.za',
  description:
    '4-star graded Boeketlong Lodge in Jane Furse, Sekhukhune: suites and rooms from R750 a night, with a pool, spa, gym, bar, restaurant and conference centre.',
  address: {
    street: '5050 Mogoroane, Ga-Moloi',
    town: 'Jane Furse',
    postalCode: '1085',
    region: 'Limpopo',
    country: 'ZA',
  },
  phones: [
    { label: 'Reception', display: '+27 13 110 4035', tel: '+27131104035' },
    { label: 'Mobile & WhatsApp', display: '+27 76 732 8559', tel: '+27767328559' },
  ],
  whatsapp: '27767328559',
  email: 'bookings@boeketlong.co.za',
  facebook: 'https://www.facebook.com/BoiketlongLodgeAndPub',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Boeketlong+Lodge+Jane+Furse',
  history: { opened: 2013, convertedToLodge: 2018, previousName: 'Disofeng Pub' },
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const formatRand = (n: number) => `R${n.toLocaleString('en-US')}`;

export interface Room {
  slug: string;
  name: string;
  beds: string;
  sleeps: number;
  /** Lowest nightly rate. */
  from: number;
  /** Nightly rate including breakfast, when breakfast is optional. */
  withBreakfast?: number;
  breakfastIncluded?: boolean;
  highlights: string[];
  summary: string;
}

export const rooms: Room[] = [
  {
    slug: 'economy-room',
    name: 'Economy Room',
    beds: '1 double bed',
    sleeps: 2,
    from: 750,
    withBreakfast: 950,
    highlights: ['Double bed', 'Sleeps 2', 'Breakfast optional'],
    summary: 'Our most affordable room: comfortable, clean and close to everything at the lodge.',
  },
  {
    slug: 'standard-room',
    name: 'Standard Room',
    beds: '1 double bed',
    sleeps: 2,
    from: 950,
    withBreakfast: 1150,
    highlights: ['Double bed', 'Sleeps 2', 'Breakfast optional'],
    summary: 'A relaxed, well-appointed room for short stays and business trips.',
  },
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    beds: '1 double bed',
    sleeps: 2,
    from: 1300,
    withBreakfast: 1500,
    highlights: ['Double bed', 'Sleeps 2', 'Breakfast optional'],
    summary: 'More space and extra comfort, in an elegant contemporary room.',
  },
  {
    slug: 'luxury-suite',
    name: 'Luxury Suite',
    beds: '1 king bed',
    sleeps: 2,
    from: 1600,
    withBreakfast: 1800,
    highlights: ['King bed', 'Sleeps 2', 'Breakfast optional'],
    summary: 'A spacious suite with a king bed, made for slowing down.',
  },
  {
    slug: 'family-suite',
    name: 'Family Suite',
    beds: '1 queen bed and 1 double bed',
    sleeps: 4,
    from: 2300,
    withBreakfast: 2800,
    highlights: ['Queen + double bed', 'Sleeps 4', 'Breakfast for four optional'],
    summary: 'Room for the whole family, with a queen bed and a double bed in one suite.',
  },
  {
    slug: 'presidential-suite',
    name: 'Presidential Suite',
    beds: '1 king bed',
    sleeps: 2,
    from: 3000,
    breakfastIncluded: true,
    highlights: ['King bed', 'Sleeps 2', 'Breakfast for two included', 'Private pool & bar access'],
    summary: 'Our finest suite, with complimentary breakfast for two and private pool and bar access.',
  },
];

export interface Facility {
  slug: string;
  name: string;
  /** Short line used on cards. */
  blurb: string;
  /** Has its own page under /facilities/. */
  page: boolean;
  icon: 'conference' | 'spa' | 'salon' | 'gym' | 'pool' | 'jacuzzi' | 'bar';
}

// TODO(lodge): confirm opening hours, capacities and prices for each facility
// so the pages can say more than these general descriptions.
export const facilities: Facility[] = [
  {
    slug: 'conference-centre',
    name: 'Conference Centre',
    blurb: 'Meetings, workshops, weddings and functions, with accommodation on site.',
    page: true,
    icon: 'conference',
  },
  {
    slug: 'beauty-spa',
    name: 'Beauty Spa',
    blurb: 'Unwind with a treatment after a day on the road.',
    page: true,
    icon: 'spa',
  },
  {
    slug: 'salon',
    name: 'Salon',
    blurb: 'Hair and beauty, for guests and visitors alike.',
    page: true,
    icon: 'salon',
  },
  {
    slug: 'gym',
    name: 'Fitness Centre',
    blurb: 'Keep up your routine in our on-site gym.',
    page: true,
    icon: 'gym',
  },
  {
    slug: 'water-park',
    name: 'Pool & Water Park',
    blurb: 'Cool off under the warm Sekhukhune sun.',
    page: false,
    icon: 'pool',
  },
  {
    slug: 'jacuzzi',
    name: 'Jacuzzi',
    blurb: 'Soak, relax and let the day go.',
    page: false,
    icon: 'jacuzzi',
  },
  {
    slug: 'bar-restaurant',
    name: 'Bar Lounge & Restaurant',
    blurb: 'Good food, cold drinks and the pub atmosphere we started with in 2013.',
    page: false,
    icon: 'bar',
  },
];

export const priceRange = `${formatRand(Math.min(...rooms.map((r) => r.from)))} – ${formatRand(
  Math.max(...rooms.map((r) => r.from)),
)}`;
