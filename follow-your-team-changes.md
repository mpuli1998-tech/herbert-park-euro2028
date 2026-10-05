# Follow Your Team — "Liverpool done. Dublin next." — exact changes

Only the `#match-travel` section and its CSS changed. Nothing else on the page was touched, the nav label included (see note at the end).

## 1. index.html — what to replace

**Replace** everything from the comment line

    <!-- =========================================================
         9. MATCHES BEYOND DUBLIN — secondary campaign extension

down to and including the closing `</section>` of
`<section class="section beyond" id="match-travel" …>`. That is the block containing "Following Your Team Beyond Dublin?" and the `away-match.html` button.

**With** this:

```html
    <!-- =========================================================
         9. FOLLOW YOUR TEAM SECTION — "Liverpool done. Dublin next."
         ---------------------------------------------------------
         Secondary campaign idea for supporters whose EURO 2028
         journey brings their team to Dublin.
         Fixture source: UEFA EURO 2028 schedule — the Group E team
         playing at Everton Stadium on 17 June plays its next group
         match at Aviva Stadium on 21 June.
         TO PERSONALISE once the draw is known: edit the eyebrow
         (e.g. "Following [COUNTRY]?"), the two fixture cards and the
         "4 days between fixtures" line. Team names are deliberately
         not used until the participating countries are confirmed.
         ========================================================= -->
    <section class="section follow" id="match-travel" aria-labelledby="follow-title">
      <div class="container">

        <header class="follow-head reveal">
          <div class="follow-head-title">
            <p class="eyebrow">Follow Your Team · EURO 2028</p>
            <h2 id="follow-title" class="display-lg">Liverpool done.<br /><em>Dublin next.</em></h2>
          </div>
          <div class="follow-head-copy">
            <p class="lead">Watching your team in Liverpool?</p>
            <p>If their next EURO 2028 fixture brings them to Dublin, follow the action and make the journey part of the experience.</p>
            <p>Stay at Herbert Park Hotel between fixtures, explore Dublin and get ready for the next match at Aviva Stadium.</p>
          </div>
        </header>

        <!-- Fixture journey: Liverpool → Dublin -->
        <ol class="follow-journey reveal" aria-label="Example EURO 2028 journey: Liverpool on 17 June 2028, then Dublin on 21 June 2028">

          <!-- LIVERPOOL FIXTURE CARD -->
          <li class="follow-card follow-card-from">
            <p class="follow-card-label">This match</p>
            <p class="follow-date"><span class="follow-day">17</span><span class="follow-month">Jun 2028</span></p>
            <h3 class="follow-city">Liverpool</h3>
            <p class="follow-venue">
              <svg class="follow-venue-icon" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="9" ry="6"/><ellipse cx="12" cy="12" rx="4.5" ry="2.6"/></svg>
              Everton Stadium
            </p>
            <p class="follow-stage">Group Stage</p>
          </li>

          <!-- TRAVEL CONNECTION (visual only — no direct route or transport is implied) -->
          <li class="follow-connector">
            <span class="follow-connector-line" aria-hidden="true">
              <svg class="follow-travel-icon" viewBox="0 0 32 20" aria-hidden="true">
                <path d="M4 12 L28 12 L24 17 L8 17 Z"/>
                <path d="M11 12 V7 H21 V12"/>
                <path d="M2 19.2 C 6 17.6, 9 20.8, 13 19.2 S 20 17.6, 24 19.2 S 29 20.8, 31 19.2"/>
              </svg>
            </span>
            <span class="follow-connector-label">Follow your team</span>
            <span class="follow-connector-arrow" aria-hidden="true"></span>
          </li>

          <!-- DUBLIN FIXTURE CARD (destination — visually dominant) -->
          <li class="follow-card follow-card-to">
            <p class="follow-card-label follow-card-label-next">Next match</p>
            <p class="follow-date"><span class="follow-day">21</span><span class="follow-month">Jun 2028</span></p>
            <h3 class="follow-city">Dublin</h3>
            <p class="follow-venue">
              <svg class="follow-venue-icon" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="9" ry="6"/><ellipse cx="12" cy="12" rx="4.5" ry="2.6"/></svg>
              Aviva Stadium
            </p>
            <p class="follow-stage">Group Stage</p>
            <p class="follow-card-stay">Your Dublin base: Herbert Park Hotel, a 15-minute walk away.</p>
          </li>
        </ol>

        <!-- Between fixtures: the Herbert Park proposition -->
        <div class="follow-between reveal">
          <p class="follow-gap">4 days between fixtures. <em>Make a trip of it.</em></p>

          <ul class="follow-benefits">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20V10l9-6 9 6v10"/><path d="M9 20v-6h6v6"/></svg>
              <h3>Stay</h3>
              <p>Make Herbert Park your Dublin base between fixtures, with EURO 2028 accommodation in Ballsbridge.</p>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>
              <h3>Experience</h3>
              <p>Explore Dublin before the next match.</p>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="9" ry="6"/><ellipse cx="12" cy="12" rx="4.5" ry="2.6"/></svg>
              <h3>Matchday</h3>
              <p>Stay at a hotel near Aviva Stadium, within easy walking distance on match day.</p>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h14"/><path d="M14 7l5 5-5 5"/></svg>
              <h3>Travel</h3>
              <p>Need help reaching Dublin? Optional travel assistance can be added to your enquiry.</p>
            </li>
          </ul>
        </div>

        <!-- FOLLOW YOUR TEAM CTA -->
        <div class="follow-cta reveal">
          <a href="#packages" class="btn btn-coral">Plan Your Dublin Stay</a>
          <p class="fine-print fine-print-left">Travel options and package inclusions subject to confirmation. Match tickets are not included.</p>
        </div>

      </div>
    </section>
```

The `id="match-travel"` anchor is kept, so the nav link still works. The `away-match.html` link is removed.

## 2. styles.css — what to replace

**Replace** the whole block that starts with
`/* 14. BEYOND DUBLIN (secondary) ---` and ends just before `/* 15. FINAL CTA ---`.

**With** this:

```css
/* 14. FOLLOW YOUR TEAM — "Liverpool done. Dublin next." (secondary) -------
   Replaces the former "Beyond Dublin" styles. All classes prefixed .follow-.
   Dublin (destination) card is deliberately the dominant element.
   ------------------------------------------------------------------------ */
.follow { background: var(--paper); }

/* Intro: heading left, copy right */
.follow-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(2rem, 1rem + 4vw, 6rem);
  align-items: end;
  margin-bottom: clamp(3rem, 2rem + 3vw, 4.5rem);
}
.follow-head .display-lg { margin-bottom: 0; }
.follow-head-copy .lead { margin-bottom: var(--space-2); }
.follow-head-copy p:not(.lead) { color: var(--muted); max-width: 34em; }
.follow-head-copy p + p:not(.lead) { margin-top: 0.75rem; }

/* Journey: Liverpool card — connector — Dublin card */
.follow-journey {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(150px, 0.55fr) minmax(0, 1.15fr);
  align-items: center;
}

.follow-card {
  position: relative;
  padding: clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem);
}
.follow-card-from {
  background: var(--cream);
  border: 1px solid var(--line);
  color: var(--navy);
}
.follow-card-to {
  background: var(--navy);
  color: var(--white);
  border-top: 3px solid var(--coral);
  padding: clamp(2.25rem, 1.5rem + 2vw, 3.25rem);
  box-shadow: 0 24px 48px -28px rgba(13, 35, 54, 0.55);
}

.follow-card-label {
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-3);
}
.follow-card-label-next { color: var(--coral); }

.follow-date {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}
.follow-day {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 2rem + 1.5vw, 3.25rem);
  line-height: 1;
}
.follow-card-to .follow-day { font-size: clamp(3.25rem, 2.5rem + 2.2vw, 4.5rem); }
.follow-month {
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--coral-deep);
}
.follow-card-to .follow-month { color: var(--coral); }

.follow-city {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  line-height: 1.15;
  margin-bottom: var(--space-2);
}
.follow-card-to .follow-city { font-size: clamp(2rem, 1.5rem + 1.6vw, 2.9rem); }

.follow-venue {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: var(--fs-sm);
}
.follow-venue-icon {
  width: 18px;
  height: 18px;
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.3;
  opacity: 0.7;
}
.follow-stage {
  font-size: var(--fs-xs);
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-top: 0.25rem;
  padding-left: calc(18px + 0.55rem);
}
.follow-card-to .follow-stage { color: rgba(255, 255, 255, 0.65); }
.follow-card-stay {
  margin-top: var(--space-3);
  padding-top: var(--space-2);
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.82);
}

/* Travel connector */
.follow-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding-inline: 0.75rem;
}
.follow-connector-line {
  position: relative;
  width: 100%;
  height: 26px;
  display: grid;
  place-items: center;
}
.follow-connector-line::before {   /* dashed route */
  content: "";
  position: absolute;
  left: 0;
  right: 8px;
  top: 50%;
  border-top: 1.5px dashed rgba(233, 84, 77, 0.7);
}
.follow-connector-line::after {    /* arrowhead pointing to Dublin */
  content: "";
  position: absolute;
  right: 1px;
  top: 50%;
  width: 9px;
  height: 9px;
  border-top: 1.5px solid var(--coral);
  border-right: 1.5px solid var(--coral);
  transform: translateY(-50%) rotate(45deg);
}
.follow-travel-icon {
  position: relative;
  z-index: 1;
  width: 34px;
  height: 22px;
  padding: 0 6px;
  background: var(--paper);
  fill: none;
  stroke: var(--navy);
  stroke-width: 1.2;
  stroke-linejoin: round;
  stroke-linecap: round;
  box-sizing: content-box;
}
.follow-connector-label {
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--coral-deep);
  text-align: center;
}
.follow-connector-arrow { display: none; }

/* Between fixtures */
.follow-between {
  margin-top: clamp(3rem, 2rem + 3vw, 4.5rem);
  padding-top: clamp(2rem, 1.5rem + 1.5vw, 3rem);
  border-top: 1px solid var(--line);
}
.follow-gap {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2.1rem);
  line-height: 1.25;
  color: var(--navy);
  margin-bottom: clamp(2rem, 1.5rem + 1.5vw, 3rem);
}
.follow-gap em { color: var(--coral); }

.follow-benefits {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1.5rem, 1rem + 2vw, 3rem);
}
.follow-benefits svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--coral);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-bottom: var(--space-2);
}
.follow-benefits h3 {
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--navy);
  margin-bottom: 0.5rem;
}
.follow-benefits p { font-size: var(--fs-sm); color: var(--muted); }

/* CTA */
.follow-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.75rem;
  margin-top: clamp(2.5rem, 2rem + 2vw, 3.5rem);
}
.follow-cta .fine-print { margin: 0; max-width: 32em; }

/* Tablet */
@media (max-width: 1100px) {
  .follow-benefits { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Mobile: stack Liverpool ↓ Follow your team ↓ Dublin */
@media (max-width: 760px) {
  .follow-head { grid-template-columns: 1fr; gap: var(--space-3); align-items: start; }

  .follow-journey { grid-template-columns: 1fr; }
  .follow-connector { padding: 1rem 0; flex-direction: row; justify-content: center; gap: 1rem; }
  .follow-connector-line { width: 26px; height: 64px; }
  .follow-connector-line::before {
    left: 50%; right: auto; top: 0; bottom: 8px;
    border-top: 0;
    border-left: 1.5px dashed rgba(233, 84, 77, 0.7);
  }
  .follow-connector-line::after {
    right: auto; left: 50%; top: auto; bottom: 1px;
    transform: translateX(-50%) rotate(135deg);
  }
  .follow-travel-icon { padding: 6px 0; }
}
@media (max-width: 640px) {
  .follow-benefits { grid-template-columns: 1fr; }
  .follow-cta .btn { width: 100%; }
}
```

**Also delete** these old responsive lines, which only styled the removed section:

- Inside `@media (max-width: 960px)` in §19:
  ```css
  .beyond-inner { grid-template-columns: auto 1fr; }
  .beyond-inner .btn { grid-column: 1 / -1; justify-self: start; }
  ```
- Inside `@media (max-width: 640px)` in §19:
  ```css
  .beyond-inner { grid-template-columns: 1fr; }
  .beyond-icon { display: none; }
  ```

## 3. script.js

No changes. The section uses the existing `.reveal` animation only.

## Note on the nav label

The nav label stays "Match Travel". "Follow Your Team" is about 40px wider and did not fit comfortably between 1101px and roughly 1180px wide. To use it, change the label **and** move the hamburger breakpoint from 1100px to 1180px. That breakpoint appears in two `styles.css` media queries and in `script.js` (`window.innerWidth > 1100`).
