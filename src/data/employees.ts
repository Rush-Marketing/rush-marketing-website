/**
 * Bron: "Wie doet wat bij 4All" (versie 3, mei 2026).
 * Shape gekozen zodat dit later 1-op-1 te mappen is op een Payload
 * Employees collectie (name, role, team, bio, callFor, avatar).
 */

export type TeamSlug =
  | "directie"
  | "finance"
  | "merk-content"
  | "performance-groei"
  | "franchise-activatie"
  | "tech-innovatie"
  | "formulemanagement";

export type Team = {
  slug: TeamSlug;
  name: string;
  description: string;
  openRoles: number;
};

export type Employee = {
  name: string;
  role: string;
  teamSlug: TeamSlug;
  /** Eén zin die de persoon typeert, uit "Wie doet wat". */
  bio: string;
  /** Waarvoor je deze collega belt. */
  callFor: string;
  avatarUrl: string;
  isLead?: boolean;
};

export const teams: Team[] = [
  {
    slug: "directie",
    name: "Directie",
    description:
      "Strategie, groei en koers over beide formules. Zij houden richting en rekening.",
    openRoles: 0,
  },
  {
    slug: "finance",
    name: "Finance",
    description: "Elke euro in beeld. Van maandcijfers tot cashflow, strak en helder.",
    openRoles: 0,
  },
  {
    slug: "merk-content",
    name: "Merk & Content",
    description:
      "Van concept tot campagne, van vormgeving tot copy. Zij bouwen het verhaal van onze merken.",
    openRoles: 1,
  },
  {
    slug: "performance-groei",
    name: "Performance & Groei",
    description:
      "SEO, SEA, automation en alles wat online groei mogelijk maakt. Waar data en creativiteit elkaar raken.",
    openRoles: 3,
  },
  {
    slug: "franchise-activatie",
    name: "Franchise & Lokale Activatie",
    description:
      "De brug tussen het Servicekantoor en 47 winkels. Van verbouwing tot opening tot klantenservice.",
    openRoles: 0,
  },
  {
    slug: "tech-innovatie",
    name: "Tech & Innovatie",
    description:
      "Het 4All Platform, data en tooling. Zij zorgen dat techniek doet waar het goed in is: dingen makkelijker maken.",
    openRoles: 2,
  },
  {
    slug: "formulemanagement",
    name: "Formulemanagement",
    description:
      "Collectie, presentatie en samenwerking met winkels per formule. Van strategie naar wat er in de winkel ligt en hangt.",
    openRoles: 1,
  },
];

export const employees: Employee[] = [
  // Directie
  {
    name: "Stef Bosgoed",
    role: "Mede-eigenaar · Directeur Finance & Strategie",
    teamSlug: "directie",
    bio: "Onze strateeg. Bouwt aan de lange lijn van 4All.",
    callFor: "Strategische keuzes, investeringen, financiering en contracten.",
    avatarUrl: "/team/stef-bosgoed.jpg",
    isLead: true,
  },
  {
    name: "Lamco de Vries",
    role: "Mede-eigenaar · Directeur Inkoop & Formulemanagement",
    teamSlug: "directie",
    bio: "Onze handelsman. Vraag iets aan hem en het is vandaag geregeld.",
    callFor: "Inkoop, leveranciers, nieuwe panden en nieuwe franchisers.",
    avatarUrl: "/team/lamco-de-vries.jpg",
    isLead: true,
  },

  // Finance
  {
    name: "Tim van Ommen",
    role: "Controller",
    teamSlug: "finance",
    bio: "Onze cijferbewaker. Kent elke euro in de boekhouding.",
    callFor: "Budgetten, kostenposten, facturen en de aansluiting achter de cijfers.",
    avatarUrl: "/team/tim-van-ommen.jpg",
  },

  // Merk & Content
  {
    name: "Ilse Janssen-Vermeulen",
    role: "Teamlead Merk & Content",
    teamSlug: "merk-content",
    bio: "Onze merkbewaker. Zorgt dat K4A en S4A één herkenbaar gezicht hebben.",
    callFor: "Brand voice, content-strategie, campagneplanning en vormgeving.",
    avatarUrl: "/team/ilse-janssen-vermeulen.jpg",
    isLead: true,
  },
  {
    name: "Inge Heiltjes",
    role: "Grafisch vormgever",
    teamSlug: "merk-content",
    bio: "Onze maker. Geef haar een briefing en je krijgt werk dat klopt.",
    callFor: "Ontwerp, winkelmateriaal, campagne-uitingen en drukwerk.",
    avatarUrl: "/team/inge-heiltjes.jpg",
  },
  {
    name: "Isabelle Janssen",
    role: "Grafisch specialist",
    teamSlug: "merk-content",
    bio: "Maakt de mooie dingen. Van campagnebeeld tot winkelmateriaal, altijd strak in de huisstijl.",
    callFor: "Ontwerp, beeld en visuele uitingen.",
    avatarUrl: "/team/isabelle-janssen.jpg",
  },
  {
    name: "Zara Jansen",
    role: "Content marketeer",
    teamSlug: "merk-content",
    bio: "Specialiteit: pakkende stories die winkels in beweging brengen.",
    callFor: "Verhalen achter ondernemers, sfeercontent en samenwerking met winkels.",
    avatarUrl: "/team/zara-jansen.jpg",
  },
  {
    name: "Patty Wezendonk",
    role: "Marketeer lokale support",
    teamSlug: "merk-content",
    bio: "Lokale marketingsupport voor leden, en trekker van onze employer branding.",
    callFor: "Lokale marketingsupport, maatwerkverzoeken en employer branding.",
    avatarUrl: "/team/patty-wezendonk.jpg",
  },

  // Performance & Groei
  {
    name: "Marianne Wesselink",
    role: "Teamlead Performance & Groei",
    teamSlug: "performance-groei",
    bio: "Onze data-strateeg. Houdt het cijfer- en testritme strak.",
    callFor: "Performance-strategie, attribution, ads-budget en marketing automation.",
    avatarUrl: "/team/marianne-wesselink.jpg",
    isLead: true,
  },
  {
    name: "Boy Nijland",
    role: "SEO marketeer",
    teamSlug: "performance-groei",
    bio: "Maakt onze pagina's vindbaar, van structuur tot snelheid.",
    callFor: "SEO-vragen, pagina-optimalisatie en zoekwoord-strategie.",
    avatarUrl: "/team/boy-nijland.jpg",
  },
  {
    name: "Marc van der Meulen",
    role: "SEA marketeer",
    teamSlug: "performance-groei",
    bio: "Stuurt onze ads dag in dag uit. Google, Meta, Pinterest.",
    callFor: "Google Ads, Meta Ads, campagne-instellingen en A/B-tests.",
    avatarUrl: "/team/marc-van-der-meulen.jpg",
  },

  // Franchise & Lokale Activatie
  {
    name: "Rik Buitelaar",
    role: "Teamlead Franchise & Lokale Activatie",
    teamSlug: "franchise-activatie",
    bio: "De brug tussen het Servicekantoor en de winkels.",
    callFor: "Franchise-vragen, lokale activatie en opening van nieuwe winkels.",
    avatarUrl: "/team/rik-buitelaar.jpg",
    isLead: true,
  },
  {
    name: "Pascal Reulink",
    role: "Retail Specialist",
    teamSlug: "franchise-activatie",
    bio: "Onze verbouwman. Pakt verbouwingen van A tot Z.",
    callFor: "Verbouwingen, signing in de winkel en leveranciers voor de bouw.",
    avatarUrl: "/team/pascal-reulink.jpg",
  },
  {
    name: "Simon van der Laan",
    role: "Projectleider nieuwbouw winkels",
    teamSlug: "franchise-activatie",
    bio: "Stuurt het bouwproces van nieuwe winkels en bewaakt de pijplijn.",
    callFor: "Planning nieuwbouw, bouwteam en leveranciers op de bouw.",
    avatarUrl: "/team/simon-van-der-laan.jpg",
  },
  {
    name: "Fleur Kelderman",
    role: "Franchise coördinator",
    teamSlug: "franchise-activatie",
    bio: "Eerste aanspreekpunt voor onze ondernemers.",
    callFor: "Ondernemers-vragen, afspraken en dagelijkse coördinatie.",
    avatarUrl: "/team/fleur-kelderman.jpg",
  },
  {
    name: "Kirsten Thijssen",
    role: "Franchise coördinator",
    teamSlug: "franchise-activatie",
    bio: "Schakelt met ondernemers en bewaakt afspraken.",
    callFor: "Ondernemers-vragen, telefonie-traject en dagelijkse coördinatie.",
    avatarUrl: "/team/kirsten-thijssen.jpg",
  },
  {
    name: "Charelle van Amerongen",
    role: "Klantenservice medewerker",
    teamSlug: "franchise-activatie",
    bio: "De vaste bemanning van onze telefoon, en vliegende keep van het team.",
    callFor: "Klantvragen, klachten en ad-hoc support.",
    avatarUrl: "/team/charelle-van-amerongen.jpg",
  },

  // Tech & Innovatie
  {
    name: "Rutger Thus",
    role: "Teamlead Tech & Innovatie",
    teamSlug: "tech-innovatie",
    bio: "Onze CTO-in-de-praktijk. Bewaakt het 4All Platform.",
    callFor: "Platform-vragen, tooling, integraties en de roadmap.",
    avatarUrl: "/team/rutger-thus.jpg",
    isLead: true,
  },
  {
    name: "Arend van der Pauw",
    role: "Data engineer",
    teamSlug: "tech-innovatie",
    bio: "Houdt de datapijp tussen WinnerBizz, PostHog en BI helder en op tijd.",
    callFor: "Data-vragen, BI-aansluiting en datapipeline issues.",
    avatarUrl: "/team/arend-van-der-pauw.jpg",
  },

  // Formulemanagement
  {
    name: "Olav Versteeg",
    role: "Formulemanager Sani4All",
    teamSlug: "formulemanagement",
    bio: "Houdt het Sani4All format op koers.",
    callFor: "S4A-formule, collectie, winkelpresentatie en S4A-leveranciers.",
    avatarUrl: "/team/olav-versteeg.jpg",
  },
  {
    name: "Tjerk Wiggers",
    role: "Franchise Performance Manager K4A",
    teamSlug: "formulemanagement",
    bio: "Bewaakt collectie, kaders en samenwerking met K4A-winkels.",
    callFor: "K4A-formule, collectie, winkelpresentatie en K4A-leveranciers.",
    avatarUrl: "/team/tjerk-wiggers.jpg",
  },
];

export function employeesByTeam(slug: TeamSlug): Employee[] {
  return employees.filter((e) => e.teamSlug === slug);
}
