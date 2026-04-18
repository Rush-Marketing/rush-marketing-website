/**
 * Shape gekozen zodat dit later 1-op-1 te mappen is op een Payload
 * Employees collectie (name, role, team, initials, isLead, avatar?).
 */

export type TeamSlug =
  | "merk-content"
  | "performance-groei"
  | "franchise-activatie"
  | "tech-innovatie"
  | "directie";

export type Team = {
  slug: TeamSlug;
  name: string;
  description: string;
  count: number;
};

export type Employee = {
  name: string;
  role: string;
  teamSlug: TeamSlug;
  initials: string;
  isLead?: boolean;
  avatarUrl?: string;
};

export const teams: Team[] = [
  {
    slug: "merk-content",
    name: "Team Merk\n& Content",
    description:
      "Van concept tot campagne, van vormgeving tot copy. Zij bouwen het verhaal van onze merken.",
    count: 4,
  },
  {
    slug: "performance-groei",
    name: "Team Performance\n& Groei",
    description:
      "SEO, SEA, ads en alles wat online groei mogelijk maakt. Waar data en creativiteit elkaar raken.",
    count: 4,
  },
  {
    slug: "franchise-activatie",
    name: "Team Franchise\n& Lokale activatie",
    description:
      "De brug tussen hoofdkantoor en 47 winkels. Van lokale campagnes tot klantenservice.",
    count: 4,
  },
  {
    slug: "tech-innovatie",
    name: "Team Tech\n& Innovatie",
    description:
      "Data, automation en slimme systemen. Zij zorgen dat techniek doet waar het goed in is: dingen makkelijker maken.",
    count: 4,
  },
  {
    slug: "directie",
    name: "Directie &\nFormulemanagement",
    description:
      "Strategie, finance en merkregie over beide formules. Zij houden koers, richting en rekening.",
    count: 5,
  },
];

export const employees: Employee[] = [
  // Merk & Content
  {
    name: "Ilse Janssen-Vermeulen",
    role: "Teamlead Merk & Content",
    teamSlug: "merk-content",
    initials: "IJ",
    isLead: true,
  },
  { name: "Inge Heiltjes", role: "Grafisch Vormgever", teamSlug: "merk-content", initials: "IH" },
  { name: "Isabelle Janssen", role: "Content Marketeer", teamSlug: "merk-content", initials: "IJ" },
  { name: "Zara Jansen", role: "Content Marketeer", teamSlug: "merk-content", initials: "ZJ" },

  // Performance & Groei
  {
    name: "Marianne Wesselink",
    role: "Teamlead Performance & Groei",
    teamSlug: "performance-groei",
    initials: "MW",
    isLead: true,
  },
  { name: "Boy Nijland", role: "SEO Marketeer", teamSlug: "performance-groei", initials: "BN" },
  {
    name: "Marc van der Meulen",
    role: "SEA Marketeer",
    teamSlug: "performance-groei",
    initials: "MM",
  },
  { name: "Maud Kolks", role: "Ads Specialist", teamSlug: "performance-groei", initials: "MK" },

  // Franchise & Lokale activatie
  {
    name: "Pascal Reulink",
    role: "Teamlead Franchise & Lokale activatie",
    teamSlug: "franchise-activatie",
    initials: "PR",
    isLead: true,
  },
  {
    name: "Fleur Kelderman",
    role: "Franchise coördinator",
    teamSlug: "franchise-activatie",
    initials: "FK",
  },
  {
    name: "Patty Wezendonk",
    role: "Medewerker Klantenservice",
    teamSlug: "franchise-activatie",
    initials: "PW",
  },
  {
    name: "Charelle van Amerongen",
    role: "Medewerker Retailsupport",
    teamSlug: "franchise-activatie",
    initials: "CA",
  },

  // Tech & Innovatie
  {
    name: "Rutger Thus",
    role: "Teamlead Tech & Innovatie",
    teamSlug: "tech-innovatie",
    initials: "RT",
    isLead: true,
  },
  { name: "Arend vd Pauw", role: "Data Engineer", teamSlug: "tech-innovatie", initials: "AP" },
  { name: "Tim Peters", role: "Marketing Engineer", teamSlug: "tech-innovatie", initials: "TP" },
  {
    name: "Simon van der Laan",
    role: "Projectleider Nieuwbouw Winkels",
    teamSlug: "tech-innovatie",
    initials: "SL",
  },

  // Directie & Formulemanagement
  {
    name: "Stef Bosgoed",
    role: "Directeur Finance & Strategie",
    teamSlug: "directie",
    initials: "SB",
  },
  {
    name: "Lamco de Vries",
    role: "Directeur Inkoop & Formulemanagement",
    teamSlug: "directie",
    initials: "LV",
  },
  { name: "Olav Versteeg", role: "Formulemanager Sani4All", teamSlug: "directie", initials: "OV" },
  { name: "Tjerk Wiggers", role: "Formulemanager Kitchen4All", teamSlug: "directie", initials: "TW" },
  { name: "Tim van Ommen", role: "Controller", teamSlug: "directie", initials: "TO" },
];

export function employeesByTeam(slug: TeamSlug): Employee[] {
  return employees.filter((e) => e.teamSlug === slug);
}
