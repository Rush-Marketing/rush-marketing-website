# Rush Marketing Website

Employer-brand / recruitment site voor Rush Marketing — het marketingbureau achter Kitchen4All en Sani4All.

## Stack

- **Next.js 16** (App Router, RSC, static)
- **React 19**
- **Tailwind CSS 4** (met Rush design tokens)
- **TypeScript**

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # productie build
pnpm typecheck    # tsc --noEmit
```

## Structuur

```
src/
├── app/
│   ├── layout.tsx       # fonts (Bogart + Lexend Deca), metadata
│   ├── globals.css      # Rush design tokens + section styles
│   └── page.tsx         # one-pager, composeert alle secties
├── components/          # één bestand per sectie (hero, stats, about, ...)
└── data/
    ├── jobs.ts          # vacatures (voorlopig statisch, klaar voor CMS)
    └── employees.ts     # teamleden per team (toekomstig: Payload Employees)
```

## Content aanpassen

| Wat | Waar |
|---|---|
| Vacatures | `src/data/jobs.ts` |
| Teamleden / mensen | `src/data/employees.ts` |
| Kerncijfers hero | `src/components/stats.tsx` |
| Waarden / perks / contact | `src/components/values.tsx`, `perks.tsx`, `contact.tsx` |

## Toekomst

- **Employees**: koppelen aan Payload CMS `Employees` collectie (in `4all-web-platform`)
- **Vacatures**: evt. MDX of koppeling met Recruitee/Homerun
- **Deploy**: Vercel → `rushmarketing.nl`

## Brand

Groen `#284742` · Goud `#cf8d40` · Cream `#f4f1ea`
Bogart (headings) + Lexend Deca (body)
