# Boeketlong Lodge website

A fast, static rebuild of [boeketlong.co.za](https://www.boeketlong.co.za), made with [Astro](https://astro.build).

- **No JavaScript on most pages.** The only script is the small one on the contact page that turns the booking form into a WhatsApp message or email.
- **Photos are resized and converted to WebP at build time**, and phones download smaller versions.
- **The font is self-hosted** (Raleway), so there are no Google Fonts requests.
- **Local SEO is built in:** one clear heading per page, real pages for each room, `LodgingBusiness` / `HotelRoom` structured data, a sitemap, and 301 redirects from the old CMS URLs.
- **Booking-first on mobile:** a sticky Call / WhatsApp / Book bar, tappable phone numbers and email, and the room is pre-selected when you tap "Book this room".

## Running it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then outputs the site to dist/
npm run preview   # serves dist/
```

You need Node 22.12 or newer.

## Editing content

| What | Where |
| --- | --- |
| Phone numbers, email, address, WhatsApp, Facebook | `src/data/site.ts` → `site` |
| Rooms, beds, prices | `src/data/site.ts` → `rooms` |
| Facility cards | `src/data/site.ts` → `facilities` |
| Facility page text | `src/data/facility-pages.ts` |
| Page text | `src/pages/*.astro` |

Prices are written once in `site.ts` and used everywhere: the cards, the rates table, the room pages, the structured data and the page descriptions.

## Adding photos

Put the original, full-size JPGs in `src/assets/photos/` using **exactly** these filenames. The build resizes them. Until a photo is added, a placeholder labelled with the filename it expects is shown in its place.

| File | Used on |
| --- | --- |
| `hero.jpg` | Homepage banner (landscape, at least 1920px wide) |
| `welcome.jpg`, `exterior.jpg` | Homepage |
| `about.jpg` | About page (portrait) |
| `economy-room.jpg`, `standard-room.jpg`, `deluxe-room.jpg`, `luxury-suite.jpg`, `family-suite.jpg`, `presidential-suite.jpg` | Room cards and room pages |
| `<room>-2.jpg`, `<room>-3.jpg` (e.g. `family-suite-2.jpg`) | Extra photos on each room page |
| `conference-centre.jpg`, `beauty-spa.jpg`, `salon.jpg`, `gym.jpg` | Facility pages |

Gallery photos go in `src/assets/gallery/`. Every image there is shown automatically, sorted by filename. The filename becomes the image description, so `03-pool-at-sunset.jpg` is described as "pool at sunset".

Replace `public/og-image.jpg` (the image shown when the site is shared on WhatsApp or Facebook) with a 1200×630 photo of the lodge.

## Hosting

Recommended host: **Cloudflare Pages** (free, with a Johannesburg data centre). Connect this repo, then set:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`

`public/_redirects` and `public/_headers` work on both Cloudflare Pages and Netlify. On another host, recreate the redirects in its own format so the old URLs (`/about.html`, `/rooms/Executive.html` and so on) keep working.

## Before launch

- [ ] Add the photos (see above). The old site's photos are in its `/uploads/images/` folder on the current host.
- [ ] Check the rates in `src/data/site.ts` are still current.
- [ ] Confirm the Facebook URL. It's spelled `BoiketlongLodgeAndPub`, while the lodge name is Boeketlong.
- [ ] Add facility details (conference capacity, spa treatments, gym hours) in `src/data/facility-pages.ts`.
- [ ] Add booking terms (deposit, cancellation, check-in and check-out times) to `src/pages/terms.astro`.
- [ ] Have the privacy policy reviewed and name the POPIA Information Officer.
- [ ] After the DNS switch, submit `https://www.boeketlong.co.za/sitemap-index.xml` in Google Search Console, and update the website link on the Google Business Profile.
- [ ] Turn off the old CMS. Its login and registration forms accept sign-ups without a captcha.
