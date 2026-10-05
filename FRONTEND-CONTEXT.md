# Herbert Park Hotel × EURO 2028 — Frontend Context

**Campaign:** *Celebrate Every Goal. & Experience Dublin.*
**Client concept:** Herbert Park Hotel & Park Residence, Ballsbridge, Dublin
**Purpose:** Marketing prototype / technical-task presentation (Sales & Marketing Executive recruitment)
**Stack:** HTML5 · CSS3 · Vanilla JavaScript. No frameworks, no build step.

This document describes everything built into the landing page: the strategy it encodes, the file structure, the design system, every section, all interactions, and what must be replaced before going live.

---

## 1. Campaign strategy encoded in the page

### Two connected promises
1. **Celebrate Every Goal.** Football, supporters, match-day atmosphere, team colours, the stadium.
2. **& Experience Dublin.** Stay several nights, enjoy the city and explore Ireland.

### Primary commercial idea
Herbert Park is **a 15-minute walk from the action**. Guests experience the match and **walk back to comfort**. This proximity is the lead selling point and is repeated through the hero, location section, packages and final CTA.

### Emotional journey
Match-day energy → walk from the action → Herbert Park → comfort → relax → experience Dublin.

### Commercial strategy
- **Minimum 3-night stays.** No one-night match stays are promoted.
- Free days between fixtures are reframed as a reason to **stay longer, experience Dublin and explore Ireland**.
- Package tiers follow the strategic progression **Accessible → Mid-tier → Premium → Extended**.

### Strategic hierarchy (visual weight, highest to lowest)
1. Football + Herbert Park (hero)
2. 15-minute walk / location
3. Match-stay packages
4. Supporter Kit
5. Rooms
6. Experience Dublin
7. Social / UGC
8. Day trips / longer stays
9. Matches beyond Dublin (deliberately the smallest, quietest section)

### Core design rule
**Herbert Park Hotel first. Football campaign second.** The page reads as a premium hotel website running a special campaign. It does not read as a sports, betting, news or fan site.

---

## 2. File structure

```
herbert-park-euro2028/
├── index.html              Page markup (all sections, inline SVG map/scarf/ball)
├── styles.css              All styling, organised into 20 numbered sections
├── script.js               Behaviour + editable PACKAGES and TEAMS data
├── README.txt              Quick-start and replacement notes
├── FRONTEND-CONTEXT.md     This document
└── assets/
    ├── images/
    │   ├── logo.png            Placeholder text logo (not yet used in markup)
    │   ├── hero-poster.jpg     Hero fallback / video poster
    │   ├── classic-room.jpg
    │   ├── executive-room.jpg
    │   ├── signature-room.jpg  Also used as the final CTA background
    │   ├── family-room.jpg
    │   ├── park-residence.jpg
    │   ├── supporter-kit.jpg
    │   ├── dublin.jpg          Dublin feature + 4th social tile
    │   ├── howth.jpg
    │   ├── galway.jpg          Day-trips section
    │   ├── social-01.jpg       Supporters
    │   ├── social-02.jpg       Kit unboxing
    │   ├── social-03.jpg       Stadium atmosphere
    │   └── social-04.jpg       Pub / Temple Bar tile in the Dublin section
    └── videos/
        └── (empty) → add hero-football-hotel.mp4
```

**Running it:** open `index.html` directly in any modern browser. No server is needed. Fonts load from Google Fonts when online; offline, the page falls back to Georgia / Helvetica.

All images are **generated placeholders**, each labelled "PLACEHOLDER — replace with official photography". Replace them with real Herbert Park or licensed images using the **same file names**.

---

## 3. Design system

### 3.1 Colour palette (CSS custom properties in `:root`)

| Token | Value | Use |
|---|---|---|
| `--navy` | `#173149` | Brand colour, headings, day-trips band, buttons |
| `--navy-dark` | `#0d2336` | Hero base, footer, final CTA |
| `--navy-soft` | `#2b4660` | Map labels |
| `--coral` | `#e9544d` | Accent: CTA buttons, italic "& Experience Dublin", route line, bullets |
| `--coral-deep` | `#c9413b` | Coral text on light backgrounds (contrast-safe) |
| `--cream` | `#f6f1e8` | Alternating section background |
| `--cream-deep` | `#ece4d5` | Map streets, scrollbar, image fallback |
| `--paper` | `#fffdf9` | Main page background |
| `--white` | `#ffffff` | Text on dark |
| `--ink` | `#1d2a36` | Body text |
| `--muted` | `#5d6874` | Secondary text |
| `--line` | `rgba(23,49,73,.14)` | Hairline rules |
| `--team-1/2/3` | dynamic | Scarf colours, set by the team selector |

**Ratio target:** about 65–70% cream/paper/white, 25–30% navy, about 5% coral. Green is **not** used as a brand colour; it appears only in national team colours.

### 3.2 Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Playfair Display** (fallbacks: Cormorant Garamond, Georgia) | Weight 400; italic for "& Experience Dublin." and accents |
| Body / UI / buttons | **DM Sans** (fallback: Helvetica Neue, Arial) | 400 / 500 / 600 |
| Eyebrows | DM Sans 600, 0.75rem, uppercase, `letter-spacing: .24em` | Preceded by a 28px hairline |

**Fluid type scale (clamp):**

| Token | Range |
|---|---|
| `--fs-hero` | 2.9rem → 6.25rem |
| `--fs-display-xl` | 2.6rem → 4.75rem |
| `--fs-display-lg` | 2.25rem → 3.75rem |
| `--fs-display-md` | 1.75rem → 2.5rem |
| `--fs-lead` | 1.1rem → 1.3rem |

### 3.3 Spacing and layout
- Spacing scale: `--space-1` (0.5rem) to `--space-8` (8rem).
- Section padding: `--section-pad`, fluid from 5rem to 9.5rem.
- Container: max `1240px`, fluid gutter from 1.25rem to 3rem.
- Header height: 84px, shrinking to 72px when scrolled and on mobile.
- Easing: `cubic-bezier(.22,.61,.36,1)`. Base slow duration is 900ms. All motion is slow and restrained.

### 3.4 Reusable components

| Class | Description |
|---|---|
| `.container` | Centred max-width wrapper |
| `.section` | Standard vertical padding |
| `.split` | Two-column editorial grid (stacks at ≤960px); children get `min-width:0` |
| `.eyebrow`, `.eyebrow-light` | Small uppercase label with hairline |
| `.display-md/-lg/-xl` | Serif headings |
| `.lead` | Larger navy intro paragraph |
| `.btn` + `.btn-coral` / `.btn-light` / `.btn-outline` / `.btn-ghost-light` / `.btn-sm` | Square-cornered uppercase buttons |
| `.link-arrow`, `.link-sm` | Underlined text link with coral → |
| `.fine-print` (+ `-left`, `-light`) | Small disclaimer text |
| `.reveal` | Scroll-reveal animation target |

Buttons have square corners, letter-spaced uppercase labels and colour-only hover changes. There are no football-shaped or sporty buttons.

---

## 4. Section-by-section reference

Page order: **Header → Hero → Location → Packages → Supporter Kit → Rooms → Experience Dublin → Social → Day Trips → Beyond Dublin → Final CTA → Footer**

### 4.0 Header / navigation — `header.site-header#siteHeader`
- **Left:** text logo "Herbert Park / HOTEL & PARK RESIDENCE" (`.logo`). An HTML comment shows exactly where to swap in `assets/images/logo.png`.
- **Nav (`#primaryNav`):** Packages · Rooms · Supporter Kit · Explore Dublin · Match Travel. These are anchor links to `#packages`, `#rooms`, `#supporter-kit`, `#dublin` and `#match-travel`.
- **Right:** **BOOK YOUR STAY** coral button linking to `#book`.
- **Behaviour:**
  - Fixed position and transparent over the hero.
  - Becomes a cream bar with backdrop blur after 40px of scroll (`.is-scrolled`).
  - The active section is underlined in coral (scroll-spy).
- **Mobile (≤960px):** two-line hamburger (`#navToggle`) opens a full-screen navy overlay with large serif links and a Book button.
  - Closes on Esc, on link click, or on resize above 960px.
  - Body scroll is locked while open.

### 4.1 Hero — `section.hero#top`
- **Media:**
  - `<video autoplay muted loop playsinline>` with `poster="assets/images/hero-poster.jpg"` and source `assets/videos/hero-football-hotel.mp4`.
  - The video has a slow 24s "drift" zoom.
  - A layered navy gradient overlay sits on top for legibility.
- **Copy (all HTML, never baked into the video):**
  - Eyebrow: **FOOTBALL STAYS IN DUBLIN**
  - H1 line 1: **Celebrate Every Goal.** (large white serif)
  - H1 line 2: ***& Experience Dublin.*** (coral italic serif; the ampersand is enlarged as a design element)
  - Support: **Just a 15-minute walk from the action.**
  - Secondary: *Walk back to comfort. Stay for Dublin.*
  - CTA: **EXPLORE MATCH STAYS** → `#packages`
- **Extras:**
  - Circular pause/play control (`#videoToggle`). It hides automatically if no video file exists.
  - "Scroll" cue line (hidden on mobile).
  - Staggered fade-up entrance for the copy.
- There are deliberately **no cards, stats or icons** over the hero.
- **Intended video storyboard:**
  1. Floodlit stadium cheering
  2. Scarves
  3. Couple leaving the match
  4. Walk through Ballsbridge
  5. Arrival at Herbert Park and welcome
  6. Room with supporter kit waiting
  7. Relaxing
  8. Glimpse of Dublin

### 4.2 Location — `section.location#location` (paper background)
Two-column split (0.9fr / 1.1fr).

- **Left:**
  - Eyebrow **OUR LOCATION**
  - H2 **15 Minutes from the Action.**
  - Lead: "Leave the crowds behind and walk back to the comfort of Herbert Park Hotel."
  - Paragraph mentioning nearby Luas and DART connections to the city and coast.
  - A three-step journey line, *Match → 15-minute walk → Herbert Park*, with a coral dashed connector.
  - **VIEW ON MAP** link (placeholder).
- **Right:** inline SVG **illustrative route map** (`.route-map`) on a cream panel. It shows:
  - Soft street grid
  - Main road
  - River Dodder
  - Herbert Park (park shape)
  - Hotel marker with label "HERBERT PARK / HOTEL & PARK RESIDENCE"
  - **AVIVA STADIUM** oval
  - **Coral dotted walking route** with a **15 MIN WALK** pill
  - **DART** and **LUAS** markers
  - North arrow and "← CITY CENTRE"
- **Animation:** the route draws in when scrolled into view, then "marches" slowly.
- **Caption:** "Illustrative map, not to scale." The transit marker positions are illustrative and must be verified.

### 4.3 Match-Stay Packages — `section.packages#packages` (cream background)
- Eyebrow **MATCH STAY PACKAGES**
- H2 **Your Match. Your Stay.**
- Lead: "Minimum 3-night stays. Choose the stay that suits your match experience."
- `#packageRow` is **rendered from `PACKAGES` in `script.js`**.
- **Layout:** four editorial columns separated by hairlines, not heavy cards.
  - Hovering a column draws a coral top line.
  - The featured package has a paper background and a flag.

| Tier | Nights | Name | Room | Highlights |
|---|---|---|---|---|
| Accessible | 3 | Match Weekend Stay | Classic King Room | Accommodation & breakfast · Supporter Kit · 15-minute walk to the match · Late checkout *(where available)* |
| Mid-tier ★ "More time for Dublin" | 4 | Dublin Football Escape | Executive King Room | Supporter Kit & breakfast · Welcome snack box · Curated local experience · Day-trip benefit *(to be confirmed)* |
| Premium | 3+ | Exclusive Match Experience | Signature King Room | Full kit incl. cap · Curated Dublin experiences · Enhanced concierge · Flexible stay elements *(where possible)* |
| Extended | 5+ | Tournament Stay | Park Residence Studio or Apartment | Apartment-style living · Kit for every guest · Ideal for multiple matches · Longer-stay benefits *(on enquiry)* |

- Each column has a **VIEW PACKAGE** link (placeholder for future detail pages).
- **Disclaimer:** "Package names and inclusions are illustrative and subject to confirmation. Rates on enquiry. Match tickets are not included."
- **Mobile (≤640px):** a horizontal swipe row with 82% width per column and snap scrolling.

### 4.4 Supporter Kit — `section.kit#supporter-kit` (paper background)
Two-column split (1.05fr / 0.95fr).

- **Left:** large 4:5 lifestyle image `supporter-kit.jpg` with an italic caption overlay: *Waiting in your room on arrival.*
- **Right:**
  - Eyebrow **HERBERT PARK SUPPORTER KIT**
  - H2 **Your Match. Your Colours.**
  - Lead: "Your Herbert Park Supporter Kit is included with your match stay. Choose the team you support when booking."
  - Paragraph on the kit waiting in the room on arrival.
  - **Live scarf preview (inline SVG `.scarf`):**
    - Knit texture and fringe ends.
    - Body in `--team-1`, end stripes in `--team-2`, accent stripe in `--team-3`.
    - Navy centre panel reading **HERBERT PARK — DUBLIN**, with small woven football motifs.
    - Colours transition smoothly over 700ms.
    - Caption: "Shown in **[Team]** colours" (`#teamName`, `aria-live="polite"`).
  - **Team selector (`#teamScroller`):**
    - Micro-heading **CHOOSE YOUR COLOURS**.
    - Horizontally scrolling pill chips, each with a tri-colour swatch, **rendered from `TEAMS` in `script.js`**.
    - The selected chip turns solid navy.
  - **Disclaimer:** "Team colours shown for illustration only. No national team crests or tournament marks are used."
  - **"What's in the kit" `<details>` disclosure** (progressive disclosure rather than a giant checklist). It lists:
    - Scarf, cap
    - Reusable water bottle, rain poncho
    - Stadium walking map, Dublin pocket guide
    - Match-day snacks (with healthier options)
    - Football keychain, commemorative postcard
    - Shoulder-carry drawstring bag
    - One disposable camera per room
    - Note: "Kit contents are conceptual and may vary."

### 4.5 Rooms — `section.rooms#rooms` (cream background)
- Eyebrow **ROOMS FOR EVERY KIND OF FAN**
- H2 **Find Your Perfect Stay.**
- Round prev/next buttons (`.carousel-btn`). They disable at either end and are hidden on mobile.
- `#roomTrack` is a **horizontal snap-scrolling carousel**, aligned to the container edge and keyboard-scrollable with ← →.
- Each room has a 4:5 image, a coral traveller-type label, a serif name, one line of copy and a "View room" link. Images zoom slightly on hover.

| Room | Traveller type | Line |
|---|---|---|
| Classic King | Couples & solo supporters | A calm, comfortable base for the match weekend. |
| Executive King | A little more comfort | More space to unwind between matches and the city. |
| Signature King | The premium match experience | Our most considered rooms for a stay to remember. |
| Family Room | Families travelling for football | Room for everyone — and everyone's scarf. |
| Park Residence | Longer tournament stays | Apartment-style studios and suites for following the whole tournament. |

### 4.6 Experience Dublin — `section.dublin#dublin` (paper background)
- Eyebrow **& EXPERIENCE DUBLIN**
- H2 (XL) **Come for the Match. *Stay for Dublin.*** (second line in coral italic)
- Lead: "Between fixtures, the city is yours. Walk Georgian streets, find the music in Temple Bar, take the coast road to Howth — and come home to Herbert Park each evening."
- **Editorial grid:** one large feature image plus two stacked tiles. Each tile has a gradient caption with a serif title and a one-line description.
  - **Dublin City:** "Culture, food and neighbourhoods minutes away."
  - **Howth:** "Cliff walks and fresh seafood on the coast."
  - **Guinness Storehouse & Temple Bar:** "Dublin's classics, at your own pace."

### 4.7 Social / UGC — `section.social#social` (cream background)
- Eyebrow **YOUR MATCH. YOUR MOMENTS. OUR DUBLIN.**
- H2 **Celebrate with us.** (centred)
- Lead: "Tag Herbert Park in your match-day moments and use **#CelebrateEveryGoal** for a chance to be featured."
- **Four editorial photo tiles** in a staggered layout (tiles 2 and 4 are offset down). Each has an italic caption:
  - *Wear your colours*
  - *Open your kit*
  - *Feel the match*
  - *Discover Dublin*
- **Tag line:** **#CelebrateEveryGoal** · **#HerbertParkMatchDay** · @herbertparkhotel *(placeholder handle)*
- This is intentionally not an Instagram widget or dashboard. It can later be swapped for curated guest photos (with permission) or an embed.

### 4.8 Day Trips / Longer Stays — `section.daytrips#day-trips` (navy band, the main navy block)
- Eyebrow **STAY A LITTLE LONGER**
- H2 **Discover More of Ireland.**
- Lead: "Matches don't happen every day. The days between are made for exploring."
- Paragraph on curated local experiences: "so a three-night stay becomes four, or five."
- **Numbered editorial list:**
  - 01 Howth — Coast & cliffs
  - 02 Galway — A day in the west
  - 03 Dublin Experiences — City, food & culture
  - 04 More Ireland Day Trips — Explore day-trip options
- CTA: **BOOK YOUR DAY TRIPS** (coral, placeholder link)
- **Disclaimer:** "Day trips are optional and arranged with local tour providers. Availability and inclusions to be confirmed." No partner is named.
- **Right:** 4:5 image `galway.jpg`. On tablet and mobile the image moves above the text at 16:10.

### 4.9 Matches Beyond Dublin — `section.beyond#match-travel` (secondary)
Deliberately compact: a single row between hairlines, smaller heading (`display-md`), no imagery.

- **Left:** small icon of two points joined by a coral dotted path.
- **Centre:**
  - Eyebrow **MATCH TRAVEL**
  - H2 **Following Your Team Beyond Dublin?**
  - Copy: "Couldn't find a hotel for another match? Make Herbert Park your Irish home ground and connect your Dublin stay with the wider tournament journey."
- **Right:** **EXPLORE AWAY-MATCH PACKAGES** outline button. It points to `away-match.html`, a **separate landing page still to be built**, and is currently disabled as a placeholder.

### 4.10 Final CTA — `section.final-cta#book`
- **Background:** blurred `signature-room.jpg` under a navy gradient.
- **H2:**
  - **Celebrate Every Goal.**
  - ***& Experience Dublin.*** (coral italic)
- **Support:** "Stay close to the action. Stay for the city."
- **CTAs:**
  - **VIEW MATCH STAYS** (coral, → `#packages`)
  - **BOOK YOUR STAY** (ghost button, placeholder for the booking engine)
- This is the target of every "Book Your Stay" link in the header.

### 4.11 Footer — `footer.site-footer` (navy-dark)
Four columns:
- **Brand:** logo and campaign line.
- **Visit:** address placeholder, "Ballsbridge, Dublin".
- **Contact:** phone and email placeholders, plus Instagram / Facebook / LinkedIn placeholder links.
- **Explore:** Rooms · Offers · Dining · Location.

**Base row:**
- Compliance line: "Campaign concept. Herbert Park Hotel & Park Residence is not affiliated with or endorsed by UEFA. EURO 2028 is referenced descriptively only."
- Privacy and Terms (placeholders).

### 4.12 Scroll football — `#scrollBall`
- A 34px line-drawn football fixed bottom-right.
- Fades in after the first screen and rotates with scroll (`scrollY × 0.25°`).
- `aria-hidden`, pointer-events off.
- Hidden on mobile and under reduced motion.
- It is a subtle Easter egg only.

---

## 5. JavaScript (`script.js`)

Everything is wrapped in a single IIFE in strict mode with no globals.

### 5.1 Editable data

**`PACKAGES`** — an array of objects:

```js
{
  tier: 'Accessible',            // strategic tier label
  nights: '3',                   // shown large; keep 3+
  nightsLabel: 'Nights',
  name: 'Match Weekend Stay',
  room: 'Classic King Room',
  featured: false,               // optional: paper background
  flag: 'More time for Dublin',  // optional: small coral flag
  items: [
    'Accommodation & breakfast',                   // confirmed-style item
    { text: 'Late checkout', note: 'where available' } // uncertain item → muted note
  ],
  link: '#'                      // future package-detail page
}
```

**`TEAMS`** — `{ name, colours: [scarfBody, endStripes, accentStripe] }`.

- Current list: Herbert Park (default), Ireland, Spain, France, Germany, England, Italy, Netherlands, Portugal, Belgium, Scotland.
- Append an entry to add a team.
- Listing a team does **not** imply qualification or a Dublin fixture.

### 5.2 Functions

| Function | What it does |
|---|---|
| `renderPackages()` | Builds package columns into `#packageRow` from `PACKAGES` |
| `renderTeams()` | Builds team chips into `#teamScroller`. Selecting sets `--team-1/2/3` on `:root` (recolouring the scarf), updates `#teamName` and keeps the chip scrolled into view. Implements the ARIA **radiogroup** pattern with roving tabindex and ← → ↑ ↓ / Home / End keys. |
| `initHeader()` | Toggles `.is-scrolled` after 40px |
| `initNav()` | Hamburger open/close (aria-expanded, Esc, link click, resize), body scroll-lock, and IntersectionObserver **scroll-spy** that underlines the active nav link |
| `initReveal()` | IntersectionObserver adds `.is-visible` to `.reveal` elements, with sibling stagger (120ms steps, max 480ms). Shows everything immediately under reduced motion or without IO support. |
| `initCarousel()` | Prev/next scroll by one room width plus gap, disables buttons at the ends, ← → keys on the track |
| `initHeroVideo()` | Pause/play toggle with ARIA state. Hides the toggle if the video file is missing. Starts paused under reduced motion. |
| `initScrollBall()` | rAF-throttled rotation and visibility of the football |
| `initPlaceholderLinks()` | Prevents `[data-placeholder-link]` links from jumping to the top during presentations |
| `initImageFallbacks()` | Swaps any missing image for a neutral cream "Herbert Park photography" SVG block instead of a broken-image icon |

**Progressive enhancement:** an inline script adds `.js` to `<html>`. Reveal and hero-entrance styles only hide content when `.js` is present, so content stays visible without JavaScript. Packages and team chips do require JS.

---

## 6. Responsive behaviour

| Breakpoint | Changes |
|---|---|
| **> 1100px** | Full desktop: 4 package columns, 4 footer columns, two-column splits |
| **≤ 1100px** | Packages become a 2×2 grid; footer becomes 2 columns |
| **≤ 960px** | Hamburger nav with full-screen overlay; all `.split` sections stack; kit image capped at 560px; Dublin grid stacks (side tiles side by side); social grid 2×2; day-trip image moves above text; Beyond button wraps below |
| **≤ 640px** | Packages become a horizontal swipe row; room carousel cards 78% wide with buttons hidden; Dublin tiles single column; trip list compacts; Beyond icon hidden; final CTA buttons full width; single-column footer; scroll cue and scroll football hidden |

Horizontal scrollers on mobile: **team selector, room carousel, packages.**
Page-level horizontal overflow was tested at **1440px and 390px**; `scrollWidth` equals the viewport width.

---

## 7. Accessibility

- **Semantic landmarks:** `header`, `nav[aria-label]`, `main#main`, `section[aria-labelledby]`, `footer`, `address`.
- **Heading hierarchy:** a single H1 (hero), an H2 per section, H3 for packages, rooms and footer columns.
- **Skip link:** "Skip to content".
- **Visible focus:** 2px coral `:focus-visible` outline on all interactive elements.
- **Labelled SVGs:**
  - The map SVG has `role="img"` with `<title>` and `<desc>`.
  - The scarf SVG has `role="img"` and a title.
  - Decorative SVGs are `aria-hidden`.
- **Alt text:** every image has descriptive alt text.
- **Custom controls:**
  - Team selector: ARIA radiogroup with full keyboard support.
  - Carousel: labelled buttons, and the track is focusable and keyboard-scrollable.
  - Hamburger: `aria-expanded`, `aria-controls` and a dynamic label.
  - Video toggle: `aria-pressed` and a dynamic label.
- **`prefers-reduced-motion`:** disables drift, reveal, route and entrance animations, smooth scroll and the scroll football, and pauses the hero video.
- **Contrast:** coral text on light backgrounds uses `--coral-deep` (#c9413b).

---

## 8. Content and compliance guardrails built in

| Rule | How it's handled |
|---|---|
| No invented prices | No prices anywhere; "Rates on enquiry" |
| No guaranteed operational benefits | Uncertain items carry muted notes (*where available / to be confirmed / where possible / on enquiry*) plus a package disclaimer |
| No claimed tourism or travel partnerships | "Local tour providers… to be confirmed"; no named partners |
| No UEFA affiliation | Footer non-affiliation statement; no UEFA or tournament marks |
| No crests | National colour combinations only, with an on-page note |
| No confirmed teams or fixtures | Team list is illustrative; no fixture claims |
| No ticket access | "Match tickets are not included." |
| No invented contact details | Address, phone, email and social handle are clearly marked placeholders |
| Map accuracy | "Illustrative map, not to scale"; transit marker positions flagged in code comments for verification |

**Tone:** short, premium hospitality statements. No football puns, exclamation marks or hard-sell copy.

---

## 9. Placeholder replacement checklist

- [ ] **Hero video:** add `assets/videos/hero-football-hotel.mp4` (no baked-in text)
- [ ] **Hero poster:** replace `assets/images/hero-poster.jpg`
- [ ] **Room photography:** classic, executive, signature, family and park-residence images (real Herbert Park rooms)
- [ ] **Supporter kit:** in-room lifestyle shot (`supporter-kit.jpg`)
- [ ] **Dublin, Howth, Galway** licensed travel images
- [ ] **Social tiles** `social-01` to `social-04` (guest content with permission)
- [ ] **Logo:** swap the text logo for `logo.png` or the official SVG (comment in the header)
- [ ] **Booking engine URL:** final CTA "Book Your Stay" (and point the header Book buttons at it if desired)
- [ ] **"View on Map"** → official Google Maps / directions link
- [ ] **Package-detail pages:** `link` field in `PACKAGES`
- [ ] **Room pages:** "View room" links
- [ ] **Day-trips booking page:** "Book Your Day Trips" button
- [ ] **Away-match landing page:** `away-match.html`
- [ ] **Instagram handle and social links**
- [ ] **Footer:** address, phone, email, Dining, Privacy, Terms
- [ ] **Verify:** walk time, nearest Luas/DART stops and map marker positions
- [ ] **Confirm:** package inclusions and kit contents, then remove "to be confirmed" notes where appropriate
- [ ] Remove `data-placeholder-link` from each link once a real URL is added

---

## 10. Quick edit guide

| To change… | Edit |
|---|---|
| Any headline or copy | `index.html` (each section is commented with its number and name) |
| Package names, rooms, inclusions, featured tier | `PACKAGES` in `script.js` |
| Team options and colours | `TEAMS` in `script.js` |
| Brand colours, fonts, spacing | `:root` tokens at the top of `styles.css` |
| A section's styling | `styles.css`, numbered sections 5–17 |
| Breakpoint behaviour | `styles.css` §19 Responsive |
| Motion | `styles.css` §18 Reveal and §20 Reduced motion; `--ease` and `--slow` tokens |

---

## 11. SEO revision (4 Oct 2026)

The page copy was rewritten for search, with the design, layout, IDs, classes and JavaScript behaviour unchanged. **Where this section differs from §4, this section is current.**

**Target searches (used naturally, not stuffed):** EURO 2028 hotel Dublin; hotel / accommodation near Aviva Stadium; Ballsbridge / Dublin 4 hotel; EURO 2028 hotel packages; match stay Dublin.

**Head**
- `<title>`: EURO 2028 Hotel Dublin | Near Aviva Stadium | Herbert Park Hotel
- New meta description; Open Graph and Twitter card tags (`og:image` is relative; make it absolute and add a canonical URL once the live address is known)
- JSON-LD `Hotel`: name and locality/region/country only (no phone, rating, price, geo or URL invented)
- JSON-LD `FAQPage`: identical, word for word, to the visible FAQ section. Edit both together.

**Copy changes by section**

| Section | Eyebrow | Heading | Other changes |
|---|---|---|---|
| Nav | — | — | "Packages" → "EURO 2028 Packages" |
| Header CTA | — | — | Kept as "Book Your Stay": the longer "Book Your EURO 2028 Stay" did not fit beside the nav at any desktop width |
| Hero | EURO 2028 · Dublin · Aviva Stadium | *Unchanged H1* | "Stay just a 10–15 minute walk from Aviva Stadium."; CTA "Explore EURO 2028 Stays" |
| Location | Our Location · Ballsbridge, Dublin 4 | Stay Near Aviva Stadium for EURO 2028. | Lead + two paragraphs (approx. 1 km); walk line Herbert Park → 10–15 min walk → Aviva Stadium; CTA "Get Walking Directions" |
| Map | — | — | Pill "10–15 MIN WALK"; labels HERBERT PARK HOTEL, AVIVA STADIUM, BALLSBRIDGE, DUBLIN 4; SVG title/desc updated |
| Packages | EURO 2028 Hotel Packages · Dublin | Choose Your EURO 2028 Stay in Dublin. | New lead + supporting paragraph; `PACKAGES` rewritten (see below) |
| Supporter Kit | EURO 2028 Supporter Experience | *Unchanged* | New lead and paragraph; kit list mentions Aviva Stadium walking map; new image alt |
| Rooms | EURO 2028 Rooms & Accommodation · Dublin | Find Your EURO 2028 Stay in Dublin. | New lead; all five room descriptions and alts rewritten |
| Dublin | Explore Dublin During EURO 2028 | *Unchanged* | New lead + paragraph; captions rewritten; third tile now "Dublin Experiences" |
| Social | EURO 2028 in Dublin · Your Match-Day Moments | *Unchanged* | New lead; hashtags kept |
| Day trips | Extend Your EURO 2028 Stay in Ireland | Stay Longer. Discover More of Ireland. | New lead and body; CTA "Plan Your Ireland Day Trips"; disclaimer kept |
| Beyond Dublin | EURO 2028 Match Travel | *Unchanged* | New body; CTA "Explore EURO 2028 Match Travel" |
| **FAQ (new, `#faq`)** | Planning Your Stay | EURO 2028 Hotel & Aviva Stadium FAQs | Four visible Q&As, H3 questions; editorial two-column layout on cream |
| Final CTA | — | *Unchanged* | New support line; CTAs "View EURO 2028 Packages" / "Book Your Dublin Stay" |
| Footer | — | — | Descriptive line about Ballsbridge / Dublin 4; Explore links: EURO 2028 Packages, Rooms & Suites, Park Residence, Aviva Stadium Location, Explore Dublin, Dining; UEFA disclaimer kept |

**Packages (`script.js`)**

| Tier | Nights | Name | Room |
|---|---|---|---|
| Essential | 3 | EURO 2028 Match Weekend Stay | Classic King Room |
| Dublin Experience ★ "More time to experience Dublin" | 4 | EURO 2028 Dublin Football Escape | Executive King Room |
| Premium | 3+ | Premium EURO 2028 Match Stay | Signature King Room |
| Extended Stay | 5+ | EURO 2028 Tournament Stay | Park Residence Studio or Apartment |

Each now has five highlights. Uncertain items keep a muted note (*where available*, *optional*, *on enquiry*).

**Code changes beyond copy**
- `styles.css` §21 added: `.section-copy`, rooms-header lead, `.map-label-area`, FAQ styles, `.footer-about`, header no-wrap rules.
- Because "EURO 2028 Packages" lengthens the nav, the hamburger menu now applies up to **1100px** (was 960px). `script.js` closes the menu above 1100px to match.
- One H1 only (campaign headline); all sections use H2; packages, rooms and FAQ questions use H3.

---

## 12. Google Map and walk-time revision (5 Oct 2026)

**Supersedes the map details in §4.2 and §11.**

**Location map**
- The illustrated SVG map was replaced by an **interactive Google Map** (`iframe.map-embed` inside `.map-frame`), showing the walking route from Herbert Park Hotel & Park Residence (start) to Aviva Stadium (destination).
- It uses Google's keyless embed URL (`maps.google.com/maps?saddr=…&daddr=…&dirflg=w&output=embed`). A comment in `index.html` gives the official **Maps Embed API** version (`/maps/embed/v1/directions?…&mode=walking`). That version needs a free API key and is recommended before going live.
- **Styling:**
  - Same square footprint and cream mount as before, with a hairline border and a short coral accent on the top edge.
  - The map is softened with a light grayscale/sepia filter, which lifts to full colour on hover or focus.
  - A small legend sits beneath it: ● Herbert Park Hotel - - - ○ Aviva Stadium.
- **Mobile and tablet (≤960px):** the map sits below the copy and runs full width, edge to edge. Its aspect ratio is 4:3.4 on tablet and 4:4.4 on phones.
- The SVG map CSS (route animation, `.map-*` label classes) was removed.

**Get Walking Directions**
- Now a real link opening Google Maps walking directions in a new tab: `https://www.google.com/maps/dir/?api=1&origin=…&destination=…&travelmode=walking`.
- It has `target="_blank" rel="noopener"` and visually hidden "(opens Google Maps in a new tab)" text for screen readers.

**Walk time — one wording**
- "10–15 minute" was removed everywhere. The site now consistently says **"15-minute walk"**:
  - Hero support line
  - Location lead and walk line
  - Essential package highlight in `script.js`
  - FAQ answer, both the visible text and the FAQPage JSON-LD
- "Approximately 1 km" is unchanged.

---

## 13. Package restructure (5 Oct 2026)

**Supersedes the package details in §4.3 and §11.** No other section was changed.

**Message:** *The longer you stay, the more you experience.* Each package contains everything in the one before, plus new extras. **Room type is no longer part of any package**; guests choose a package first, then a room.

**Intro**
- Eyebrow: EURO 2028 Stay Packages
- H2: The Longer You Stay, The More You Experience
- Lead: From a match weekend in Dublin to an extended Irish getaway…
- Legend: ★ Extra experience unlocked with this stay
- The former SEO supporting paragraph was removed, as specified.

| # | Label | Stay | Name | Line | Contents |
|---|---|---|---|---|---|
| 1 | Essential | 3 Nights | EURO 2028 Match Weekend | Come for the match. Discover Dublin your way. | Daily breakfast · Welcome drink on arrival · Supporter Kit · Dublin Playbook (with description) · Late checkout* (no stars: this is the base) |
| 2 | **Most Popular** (featured) | 4–5 Nights | EURO 2028 Dublin Experience | Stay for the match. Experience the city. | ✓ Everything in Match Weekend · ★ Guided Dublin experience included · ★ Enhanced Supporter Kit · ★ Welcome snack box |
| 3 | Explore More | 6+ Nights | EURO 2028 Ireland Explorer | Come for EURO 2028. Leave having experienced Ireland. | ✓ Everything in Dublin Experience · ★ Ireland day trip included · ★ Premium Supporter Kit · ★ Long-stay benefit |
| 4 | Ultimate Stay | Multi-Match / Extended Stay | Full EURO 2028 Experience | Stay for the matches. Explore Ireland in between. | ✓ Everything in Ireland Explorer · ★ Additional Dublin / Ireland experience · ★ Experiences planned around match days · ★ Extended-stay benefits · ★ Premium concierge support |

**Visual treatment** (`styles.css` §22, all classes prefixed `.package-`):
- **Experience meter:** a four-step coral meter next to each label (1 to 4 bars) makes the progression readable at a glance.
- **★ benefits:** coral star, small uppercase, weight 600 and navy-dark text, so they stand out from normal inclusions.
- **"✓ Everything in…" lines:** muted text.
- **Summary line:** each card has a one-line italic serif summary and a small closing support line.
- **Stay length:** the stay-length row is equal height in all four columns. Card 4 uses two-line serif text.

**Below the cards:** a "Bringing the whole team?" callout. It covers family and interconnecting rooms, the "choose your experience first, then your room" line, and an **Explore Rooms →** link to `#rooms`.

**Disclaimer:** kept, with two additions: "*Late checkout subject to availability." and "Room type is selected separately."

**Data:** `PACKAGES` in `script.js` uses these fields:
- `label` — the small tier label
- `stay` + `stayUnit`, or `stayLines` — the stay length
- `level` — 1–4, drives the meter
- `featured` — the subtle highlight
- `name`, `line`, `support` — package name, summary line and closing line
- `items` — plain strings, or `{text, desc}`, `{text, base}`, `{text, star}`

---

## 14. Follow Your Team section (5 Oct 2026)

**Supersedes §4.9.** The "Beyond Dublin" section (`section.beyond`) was replaced by `section.follow#match-travel`, titled **"Liverpool done. Dublin next."** It is still a secondary section, placed between Day Trips and the FAQ. The exact HTML and CSS are in `follow-your-team-changes.md`.

**Fixture shown:** 17 Jun 2028, Liverpool (Everton Stadium) → 21 Jun 2028, Dublin (Aviva Stadium), both group stage. This follows UEFA's published schedule: the Group E team at Everton Stadium on 17 June plays its next match at Aviva Stadium on 21 June. No team names are used.

**Contents:**
- **Intro:** heading on the left, copy on the right.
- **Fixture journey:**
  - Liverpool card: cream.
  - Connector: dashed coral line with a small ferry icon, arrow and "Follow your team" label.
  - Dublin card: navy with a coral top border, "Next match" label and a larger date and city, so it is the dominant element.
  - The cards stack vertically on mobile, with a downward arrow between them.
- **Benefits:** "4 days between fixtures. Make a trip of it." followed by four benefits: Stay, Experience, Matchday, Travel. The travel benefit is worded as *optional travel assistance*.
- **CTA:** "Plan Your Dublin Stay" links to `#packages`. The fine print reads: "Travel options and package inclusions subject to confirmation. Match tickets are not included."

**Not promised:** no direct Liverpool–Dublin ferry, no included transport.

**Updating once the draw is known:** edit the eyebrow, the two fixture cards and the "4 days" line. Comments in the HTML mark each part.

**Nav:** the label stays "Match Travel". See the note at the end of `follow-your-team-changes.md`.

---

## 15. Spacing, packages, scarf, rooms and booking (5 Oct 2026)

**Supersedes the matching details in §3.3, §4.3–4.5 and §13.**

1. **Spacing:**
   - `--section-pad` reduced from `clamp(5rem, 3rem + 7vw, 9.5rem)` to `clamp(3.5rem, 2rem + 4.5vw, 6rem)`, about 35% less between sections.
   - Final CTA band padding reduced from `clamp(7rem, …, 12rem)` to `clamp(5rem, 3.5rem + 5vw, 8rem)`.
2. **Package titles:** a small "EURO 2028" label (`.package-event`, same scale as "NIGHTS") now sits above the package name. The names are now Match Weekend, Dublin Experience, Ireland Explorer and Full Experience. The package logic is unchanged.
3. **Package CTA:** "View package" was changed to **"Book Your Stay →"**. It links to the official booking engine, `https://bookings.herbertparkhotel.ie/search-rates`, set as `BOOKING_URL` in `script.js`. There guests choose dates, rooms, adults, children and room type.
4. **Scarf:**
   - Each team chip carries `data-country`, `data-primary`, `data-secondary` and `data-accent`.
   - Selecting a chip updates the selected state, the scarf colours, the scarf text (`#scarfText`, e.g. "SPAIN — DUBLIN") and the "Shown in ___ colours" caption.
   - Long names are fitted inside the scarf panel automatically.
5. **Rooms:** the carousel was replaced by two compact grids: **Hotel Rooms** (6) and **Park Residence** (4). Each card (image, name, "View room →") is a single link to its official page:

   | Room | Page |
   |---|---|
   | Classic King Room | /classic-room |
   | Executive King Room | /executive-room |
   | Signature King Room | /signature-room |
   | Balcony Rooms & Studio Apartments | /balcony-room-apartments |
   | Penthouse Suite | /penthouse |
   | Family Rooms | /family-rooms |
   | Park View Studio | /park-view-studio |
   | Courtyard Studio | /courtyard-studio |
   | Park View Studio with Sofa Bed | /park-view-studio-sofa-bed |
   | Serviced Apartments | /services |

   - All pages are on herbertparkhotel.ie.
   - A "Residence facilities →" link points to `/facilities`. It is not shown as a room.
   - **Grid columns:** 6 per row on a full desktop, 5 on smaller desktops, about 4 on tablet and 2 on phones, where images are square.
   - A closing "Ready to book?" row links to the booking engine.
   - The carousel CSS and JS were removed.
   - New placeholder images: `balcony-room.jpg`, `penthouse-suite.jpg`, `park-view-studio.jpg`, `courtyard-studio.jpg`, `park-view-studio-sofa-bed.jpg`. Serviced Apartments reuses `park-residence.jpg`.

---

## 16. Compact room section (5 Oct 2026)

**Supersedes the styling details in §15.5.**

- **Styles moved:** the room section styles now live in `<style id="rooms-section-styles">` in the `<head>` of `index.html`, scoped to `#rooms`. They were removed from `styles.css`, which keeps a pointer comment in §10. This keeps the grid compact even if an older `styles.css` is in use, which is what made the cards render at full image size.
- **Grid:** 5 columns on desktop, 4 at ≤1099px, 3 at ≤899px and 2 at ≤599px. Images are 4:3 thumbnails with `object-fit: cover`.
- **Spacing:** room section padding is tighter (`clamp(2.75rem, 2rem + 3vw, 4.5rem)`), with smaller gaps between the heading, groups and booking row.
- **Facilities:** the "Residence facilities" link was removed, so the Park Residence group shows rooms only.
- **Unchanged:** cards are still image + name + VIEW ROOM →, each linking to its own official room page.

---

## 17. Two-panel accommodation chooser (5 Oct 2026)

**Supersedes §15.5 and §16.**

`#rooms` is now a compact two-panel chooser. Styles stay in `<style id="rooms-section-styles">` in `index.html`.

**Heading and intro**
- "Find Your EURO 2028 Stay in Dublin." uses `.rooms-title`, sized `clamp(1.9rem, 1.2rem + 2.2vw, 3rem)` with `nowrap` at ≥900px, so it stays on one line from tablet width up. It may wrap on phones.
- Intro: "Choose from Herbert Park Hotel rooms or Park Residence studios and apartments, then explore the room that suits your EURO 2028 stay."

**Panels:** side by side at roughly 60/40.

| Panel | Background | Tiles | Order |
|---|---|---|---|
| Hotel Rooms | Navy | 3 × 2 | Classic, Executive, Signature, Balcony Rooms & Studio Apartments, Family Rooms, Penthouse |
| Park Residence | `--coral-deep` #c9413b | 2 × 2 | Park View Studio, Courtyard Studio, Park View Studio with Sofa Bed, Serviced Apartments |

`--coral-deep` was chosen so white text passes AA contrast.

**Tiles:**
- Each tile shows a 3:2 thumbnail, the room name and "VIEW ROOM →".
- The whole tile is one link to the room's own official page. The links are unchanged.

**Booking:** one CTA sits below the panels: "Found your stay?" with "Book Your Stay →" linking to `bookings.herbertparkhotel.ie/search-rates`.

**Responsive:**
- At ≤860px the panels stack, with residence tiles 4 across.
- At ≤599px both panels show 2 tiles across.

**Height:** the section is about 930px tall at 1440px wide, down from about 1,480px.

---

## 18. Booking step + country-only scarf (5 Oct 2026)

### Scarf
- The scarf now shows the country name only, e.g. "SPAIN" or "IRELAND". The default reads "HERBERT PARK".
- The caption still reads "Shown in ___ colours".
- This is handled by the inline script in `index.html`, so it works with any `script.js`. `script.js` was also updated to the same behaviour.

### Booking step (`<dialog id="bookingDialog">`)
Styles are in `<style id="booking-step-styles">`. The script is inline, after `script.js`.

**Entry points**
- Header and mobile-menu "Book Your Stay" (`data-open-booking`).
- All four package "Book Your Stay →" links. Each carries `data-package`: `match-weekend`, `dublin-experience`, `ireland-explorer` or `full-euro-experience`. With an older `script.js` the package is worked out from the card's position.
- The rooms-section "Book Your Stay".
- The final CTA "Book Your Dublin Stay". This was previously a placeholder link.
- Each link's `href` still works if JavaScript is off.

**Steps**

| Step | Content |
|---|---|
| 01 | Accommodation type: Hotel Rooms (navy) or Park Residence (coral) |
| 02 | Visual room chooser with small 3:2 thumbnails (3 across, 2 on mobile) and a "View room →" link to each official page (opens in a new tab) |
| 03 | Check-in, check-out (check-out must be after check-in; nights are counted), adults, children, rooms |
| 04 | EURO 2028 package: preselected when opened from a package card; "Not sure yet" by default from other buttons |

- **Room data:** step 02 reads the room tiles in `#rooms` at runtime: name, image, alt text, official URL and category. There is no second copy of the room data.
- **Children:** when children are selected, Family Rooms and Park View Studio with Sofa Bed are tagged "Extra space".
- **Remembered room:** clicking a room tile in `#rooms` remembers that room and its category (sessionStorage), and the booking step opens with it preselected.
- **Summary:** a live summary of all selections sits above **Check Availability →**.
- **Check Availability:** opens `https://bookings.herbertparkhotel.ie/search-rates` in a new tab, so the summary stays visible.
- **No URL parameters:** the booking engine does not publish URL parameters, so none are passed. The guest re-enters the details shown in the summary.
- **No booking on this page:** no booking or payment happens here, and the dialog says so.

**Layout:** two columns on desktop: details on the left, rooms on the right. On ≤820px the dialog is full-screen with the details first and the rooms below.

**Accessibility:** native `<dialog>`, so Esc closes it. The backdrop click and the × button also close it. Focus returns to the button that opened it, and page scroll is locked while it is open.
