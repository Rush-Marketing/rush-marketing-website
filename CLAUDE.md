# Rush Marketing Website

Employer-brand / recruitment one-pager + vacature detail-pagina's voor **Rush Marketing** — het marketingbureau achter Kitchen4All en Sani4All.

Dit is een **aparte repo**, los van `4all-web-platform` (de K4A/S4A monorepo). Andere doelgroep (hires + partners), andere huisstijl, geen commerce.

## Stack

- **Next.js 16** (App Router, RSC, statisch) + React 19
- **Tailwind 4** (via PostCSS) — wordt bijna niet gebruikt; de site leunt op custom CSS in `globals.css`
- **TypeScript** strict mode
- Fonts via `next/font`: Bogart (lokaal, `public/fonts/`) + Lexend Deca (Google)
- Geen tests, geen Storybook — opzettelijk simpel gehouden

## Deployment

- **Vercel**: team Rush Marketing, project `rush-marketing-website`
- **Repo**: https://github.com/Rush-Marketing/rush-marketing-website (public)
- **Live**: https://rush-marketing-website.vercel.app
- Auto-deploy: push naar `main` → productie. PR's krijgen preview URLs.

## Structuur

```
src/
├── app/
│   ├── layout.tsx               # fonts + metadata
│   ├── globals.css              # alle styles (Rush tokens + secties + detail pages)
│   ├── page.tsx                 # homepage (composeert alle secties)
│   └── vacatures/[slug]/page.tsx # statisch gegenereerde vacature-detail pagina's
├── components/                  # één bestand per sectie
│   ├── nav.tsx, hero.tsx, stats.tsx, about.tsx, brands.tsx,
│   ├── culture-quote.tsx, values.tsx, perks.tsx,
│   ├── team-collage.tsx, people.tsx, jobs.tsx, open-cta.tsx,
│   ├── contact.tsx, footer.tsx
│   └── smooth-scroll.tsx        # enige client component (anchor scroll)
├── data/
│   ├── jobs.ts                  # vacatures + detail content (slug, summary, responsibilities, requirements)
│   └── employees.ts             # 21 mensen in 5 teams — tijdelijk, wordt Payload-fetch
└── public/
    ├── fonts/                   # Bogart Semibold + Bold (.ttf)
    ├── logos/                   # Rush, K4A, S4A logos
    └── imagery/                 # 16 JPG's vanuit de Claude Design bundle
```

## Huisstijl

Gedefinieerd in `src/app/globals.css` onder `:root`:

| Token | Waarde |
|---|---|
| `--green` | `#284742` (primair) |
| `--green-dark` | `#1a312d` (footer, hover) |
| `--gold` | `#cf8d40` (accent, CTA's) |
| `--gold-dark` | `#a06f2e` |
| `--gold-light` | `#f4e4cc` |
| `--cream` | `#f4f1ea` (licht vlak) |
| `--cream-2` | `#e8e3d8` (divider/hover) |
| `--text` | `#284742` |
| `--text-muted` | `#5a6f6b` |

Typografie: `var(--font-heading)` = Bogart (headings), `var(--font-body)` = Lexend Deca (body). Beide via `next/font`, CSS-variabelen op `<html>`.

## Brand voice (Rush tone of voice)

Warm, helder en menselijk. **Geen em-dashes** (—). Gebruik punt, komma of dubbele punt. Woorden die passen: *samen, helder, zonder gedoe, gewoon goed*. Woorden vermijden: *perfect, knallen, scoren, deal, nummer één, koop nu*.

**Je/jij, nooit u.** Informele toon, afkortingen (`'t`, `z'n`) mogen. Sentence case voor headings.

## Design patterns

- **Afbeeldingen**: altijd `next/image`, nooit raw `<img>` (ESLint `@next/next/no-img-element` blokkeert dit)
- **Interne links**: altijd `next/link`, niet `<a>` voor interne routes
- **Anchor links** (`href="#section"`): `<a>` is oké. SmoothScroll component vangt ze af en scrollt met offset voor de fixed nav.
- **CSS-centric**: alle styling in `globals.css` met BEM-achtige class-namen (`.hero`, `.hero .photo-stack .p.a`). Geen Tailwind utilities in JSX op een paar uitzonderingen na.
- **Responsive breakpoint**: 960px (single media query in `globals.css`). Alles erboven = desktop, alles eronder = mobiel stacked.

## Data model

### `jobs.ts`
```ts
type Job = {
  slug: string;                 // /vacatures/[slug]
  title: string;
  status: "Nieuw" | "Open";
  team: string;                 // gematchte team-naam voor visual grouping
  summary: string;              // lede op detail page
  responsibilities: string[];   // "Wat ga je doen?"
  requirements: string[];       // "Wat breng je mee?"
};
```
Content is **placeholder-niveau in Rush voice** — geschreven zonder bronmateriaal, klaar voor het content/recruitmentteam om te finetunen.

### `employees.ts` (tijdelijk)
```ts
type Team = { slug, name, description, count };
type Employee = { name, role, teamSlug, initials, isLead?, avatarUrl? };
```
Dit wordt Payload (`Employees` collection in `4all-web-platform/apps/admin`). Zie **Roadmap**.

## Routes

| Pad | Type |
|---|---|
| `/` | Homepage, statisch |
| `/vacatures/[slug]` | Detail page, SSG via `generateStaticParams()` |

Bij nieuwe vacature: voeg toe aan `src/data/jobs.ts` → build genereert de route automatisch.

## Roadmap

**Klaar:**
- One-pager met 13 secties
- 9 vacature detail-pagina's met apply CTA's (mailto met pre-filled subject)
- Vercel deploy + GitHub auto-deploy
- Publieke repo

**Openstaand:**
1. **Payload Employees koppeling** — voorkeursroute is bestaande `Employees` collection uitbreiden met `team_department` + `is_team_lead` velden, Rush site fetcht via Payload REST + SSG revalidate. Zie open vragen onderin.
2. **Custom domein** — voorstel: subdomein zoals `werkenbij.rushmarketing.nl` (niet direct over de apex om bestaande rushmarketing.nl niet te raken)
3. **Foto's/logo optimalisatie** — `public/imagery/` is 32MB, kan naar Cloudinary voor betere image pipeline (past bij 4all-platform patroon)
4. **Content review** — vacature content is placeholder, Ilse/Pascal moeten finaliseren

## Commands

```bash
pnpm dev        # http://localhost:3000
pnpm build      # productie build + typecheck
pnpm typecheck  # alleen tsc --noEmit
pnpm lint       # next lint (eslint-config-next)
```

## Troubleshooting

- **Build faalt op unused `@ts-expect-error`**: strict mode, geen unused directives. Verwijder ze.
- **Sharp build warning bij install**: negeren of `pnpm rebuild sharp` draaien voor image-optimalisatie.
- **Vercel deploy faalt**: check `pnpm build` lokaal eerst; CI draait hetzelfde.

## Open vragen (voor Payload koppeling)

- Welk pad voor Employees: (A) bestaande collection uitbreiden, (B) aparte `hq-employees` + `hq-teams`, of (C) A + aparte `teams` collection?
- Waar staat Payload admin live? (`admin.kitchen4all.nl`? nieuwe `admin.rushmarketing.nl`?)
- Foto-opslag: Cloudinary (bestaand patroon, Stores/Reviews gebruiken het) of Payload media (simpeler)?

## Gerelateerde docs

- Rush design system (source van deze site): `/Users/stefbosgoed/Documents/4all-design-system/project/rush-marketing-website.html`
- 4all-web-platform Payload: `/Users/stefbosgoed/Documents/4all-web-platform/apps/admin/collections/Employees.ts` (179 regels, bestaande collection voor winkel-medewerkers)
