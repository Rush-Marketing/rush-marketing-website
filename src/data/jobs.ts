export type JobStatus = "Nieuw" | "Open";

export type Job = {
  slug: string;
  title: string;
  status: JobStatus;
  team: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

/**
 * Vacatures uit "Wie doet wat bij 4All" (mei 2026), openstaande plekken.
 * Content in Rush voice, per rol te finetunen door het content- of
 * recruitmentteam voor productie.
 */
export const jobs: Job[] = [
  {
    slug: "ads-specialist",
    title: "Ads Specialist",
    status: "Open",
    team: "Performance & Groei",
    summary:
      "Draai campagnes voor 47 showrooms met focus op kwaliteit, niet op klikvolume. Elke euro mag iets opleveren.",
    responsibilities: [
      "Opzetten en optimaliseren van Google Ads en Meta Ads campagnes",
      "Samenwerken met SEO en content aan landingspagina's die converteren",
      "Rapportage naar franchisepartners en formulemanagement",
      "Testen, leren, verbeteren",
    ],
    requirements: [
      "Minimaal 2 jaar ervaring met Google Ads (Search, PMAX, Display)",
      "Ervaring met Meta Ads een pré",
      "Analytisch en datagedreven, maar ook creatief in advertentieteksten",
      "Kan uitleggen waarom een campagne werkt of juist niet",
    ],
  },
  {
    slug: "bi-data-specialist",
    title: "BI / Data Specialist",
    status: "Open",
    team: "Performance & Groei",
    summary:
      "Vertaal data uit onze showrooms, webshops en campagnes naar inzichten waar de organisatie mee kan sturen.",
    responsibilities: [
      "Bouwen en onderhouden van dashboards voor directie, teams en winkels",
      "Ad-hoc analyses voor formulemanagement, marketing en franchisepartners",
      "Samenwerken met de data engineer aan onze DWH-inrichting",
      "Data-driven cultuur verder helpen door de organisatie",
    ],
    requirements: [
      "Sterke SQL-skills, ervaring met een BI-tool",
      "Kan van een zakelijke vraag naar een query naar een bruikbaar antwoord",
      "Nauwkeurig, maar ook pragmatisch (80/20)",
      "Commercieel gevoel, begrijpt wat achter de cijfers schuilt",
    ],
  },
  {
    slug: "marketing-engineer",
    title: "Marketing Engineer",
    status: "Open",
    team: "Tech & Innovatie",
    summary:
      "Op het snijvlak van marketing en tech: jij bouwt de tools, integraties en automatiseringen die onze marketing schaalbaar maken.",
    responsibilities: [
      "Integraties bouwen tussen marketing platformen (GA4, Meta, CRM, DWH)",
      "Werken met onze martech stack en deze verder ontwikkelen",
      "Automatiseren van repetitieve marketing taken",
      "Samenwerken met developers, data engineers en marketeers",
    ],
    requirements: [
      "Comfortabel met code (JavaScript/TypeScript, Python of vergelijkbaar)",
      "Ervaring met API's, webhooks en data pipelines",
      "Begrijpt hoe marketing meet en waarom attributie lastig is",
      "Nieuwsgierig, ondernemend, zelfsturend",
    ],
  },
  {
    slug: "applicatiebeheerder",
    title: "Applicatiebeheerder",
    status: "Open",
    team: "Tech & Innovatie",
    summary:
      "Zorg dat onze interne systemen doen wat ze moeten doen. Jij bent de collega waar iedereen op rekent als er iets klemt.",
    responsibilities: [
      "Beheer en onderhoud van onze interne applicaties (CRM, CMS, BI-tools)",
      "Integraties beheren tussen onze systemen",
      "Gebruikersbeheer, rechten, onboarding van nieuwe collega's",
      "Eerste lijn bij technische vragen vanuit de organisatie",
    ],
    requirements: [
      "Ervaring met applicatiebeheer, bij voorkeur in een retail- of marketingomgeving",
      "Kan zelfstandig problemen analyseren en oplossen",
      "Communicatief sterk: kan een technisch probleem uitleggen in mensentaal",
      "Gestructureerd, houdt van goede documentatie",
    ],
  },
  {
    slug: "formulemanager-kitchen4all",
    title: "Formulemanager Kitchen4All",
    status: "Nieuw",
    team: "Formulemanagement",
    summary:
      "Houd het Kitchen4All format op koers. Van collectie tot winkelpresentatie: jij vertaalt strategie naar wat er in de winkel ligt en hangt.",
    responsibilities: [
      "Bewaken van collectie, presentatie en formulekaders van Kitchen4All",
      "Nieuwe winkels door het format heen sturen bij opening",
      "Samenwerken met inkoop, franchise en de K4A-ondernemers",
      "Signalen uit de winkels vertalen naar verbeteringen in de formule",
    ],
    requirements: [
      "Ervaring in retail, franchise of formulemanagement",
      "Commercieel sterk en gevoel voor presentatie op de vloer",
      "Kan schakelen tussen strategie en de praktijk van een winkel",
      "Reist graag: je bent regelmatig bij de winkels te vinden",
    ],
  },
];

export function jobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
