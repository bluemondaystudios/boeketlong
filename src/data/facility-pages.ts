// Longer copy for the facilities that have their own page.
// TODO(lodge): add specifics (capacity, equipment, treatments, hours, prices).
export const facilityPages: Record<string, { title: string; lead: string; body: string[]; cta: string }> = {
  'conference-centre': {
    title: 'Conference Centre',
    lead: 'Meetings, workshops, weddings, parties and functions, with rooms for your guests on site.',
    body: [
      'Our conference centre makes Boeketlong an easy choice for business and celebrations in Makhuduthamaga. Delegates and guests can stay on site, relax at the pool or bar after sessions, and skip the drive home.',
      'Tell us your date, the number of guests and what you need, and we will put together a quote.',
    ],
    cta: 'I would like a quote for a conference or function.',
  },
  'beauty-spa': {
    title: 'Beauty Spa',
    lead: 'Take time out with a treatment at our on-site spa.',
    body: [
      'Whether you are staying with us or visiting for the day, our beauty spa is the place to slow down and unwind.',
      'Contact us for the current treatment list and to book a time.',
    ],
    cta: 'I would like to book a spa treatment.',
  },
  salon: {
    title: 'Salon',
    lead: 'Hair and beauty at the lodge, for guests and visitors.',
    body: [
      'Getting ready for a wedding, a function or a night out? Our salon is on site, so you can be pampered without leaving the lodge.',
      'Contact us for services, prices and appointments.',
    ],
    cta: 'I would like to book a salon appointment.',
  },
  gym: {
    title: 'Fitness Centre',
    lead: 'Keep up your routine while you are away from home.',
    body: [
      'Our on-site gym lets guests stay active during their stay, whether you are here for a night or a week.',
      'Ask at reception for gym hours.',
    ],
    cta: 'I have a question about the gym.',
  },
};
