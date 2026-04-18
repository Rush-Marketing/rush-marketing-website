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
 * Placeholder-content in Rush voice. Per rol te finetunen door het
 * content- of recruitmentteam (Ilse / Pascal) voor productie.
 */
export const jobs: Job[] = [
  {
    slug: "teamlead-franchise-operations",
    title: "Teamlead Franchise & Operations",
    status: "Nieuw",
    team: "Franchise & Lokale activatie",
    summary:
      "Stuur het team Franchise & Lokale activatie aan en zorg dat de lijn tussen 47 winkels en het hoofdkantoor kort en soepel blijft.",
    responsibilities: [
      "Leiding geven aan het team Franchise & Lokale activatie (vier collega's)",
      "Bewaken van processen rond lokale campagnes, retail support en klantenservice",
      "Sparringpartner zijn voor franchisepartners en formulemanagers",
      "Doorontwikkelen van onze franchise-ondersteuning en lokale activatie",
    ],
    requirements: [
      "Ervaring met retail, franchise of vergelijkbare multi-site organisaties",
      "Aantoonbare ervaring met het aansturen van een team",
      "Stevige communicator die zowel met ondernemers als collega's schakelt",
      "Affiniteit met marketing, sales en operations",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager / Product Owner",
    status: "Nieuw",
    team: "Tech & Innovatie",
    summary:
      "Jij bepaalt wat we bouwen en in welke volgorde. Van website tot interne tools: jij zorgt dat tech de winkels verder brengt.",
    responsibilities: [
      "Roadmap opstellen en bewaken voor onze webplatformen en interne tools",
      "Prioriteren samen met development, marketing en formulemanagement",
      "Schrijven van heldere user stories en acceptatiecriteria",
      "Dichtbij de winkels staan om te begrijpen wat écht impact heeft",
    ],
    requirements: [
      "Ervaring als PM/PO, bij voorkeur in e-commerce of retail tech",
      "Sterk in prioriteren op basis van waarde, niet op basis van wie het hardst roept",
      "Technisch genoeg om met developers te sparren, niet-technisch genoeg om met winkels te praten",
      "Scherp op data en resultaat",
    ],
  },
  {
    slug: "marketing-automation-specialist",
    title: "Marketing Automation Specialist",
    status: "Open",
    team: "Performance & Groei",
    summary:
      "Bouw flows die van leads klanten maken en van klanten fans. E-mail, CRM en alle touchpoints daartussen.",
    responsibilities: [
      "Opzetten en optimaliseren van marketing automation flows (e-mail, SMS, CRM)",
      "Segmentatie en personalisatie op klantdata",
      "Samenwerken met SEO, SEA en content om leads goed te vervolgen",
      "Meten wat werkt, bijsturen wat niet werkt",
    ],
    requirements: [
      "Ervaring met een marketing automation platform (bv. ActiveCampaign, Klaviyo, HubSpot)",
      "Basisbegrip van HTML/CSS voor e-mail templates",
      "Analytisch sterk, kan een conversiefunnel lezen",
      "Denkt in klantreizen, niet in losse campagnes",
    ],
  },
  {
    slug: "bi-data-analist",
    title: "BI / Data Analist",
    status: "Open",
    team: "Performance & Groei",
    summary:
      "Vertaal data uit onze showrooms, webshops en campagnes naar inzichten waar de organisatie mee kan sturen.",
    responsibilities: [
      "Bouwen en onderhouden van dashboards (Metabase, Looker of vergelijkbaar)",
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
    team: "Performance & Groei",
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
    slug: "sea-specialist",
    title: "SEA Specialist",
    status: "Open",
    team: "Performance & Groei",
    summary:
      "Draai campagnes voor 47 showrooms met focus op kwaliteit, niet op klikvolume. Elke euro mag iets opleveren.",
    responsibilities: [
      "Opzetten en optimaliseren van Google Ads en Meta Ads campagnes",
      "Landing page samenwerking met SEO en content voor een hogere Quality Score",
      "Rapportage naar franchisepartners en formulemanagement",
      "Testen, leren, verbeteren",
    ],
    requirements: [
      "Minimaal 2 jaar ervaring met Google Ads (Search, PMAX, Display)",
      "Ervaring met Meta Ads een pré",
      "Analytisch, datagedreven, maar ook creatief in advertentieteksten",
      "Kan uitleggen waarom een campagne werkt of juist niet",
    ],
  },
  {
    slug: "content-marketeer",
    title: "Content Marketeer",
    status: "Open",
    team: "Merk & Content",
    summary:
      "Schrijf en maak content die klanten écht helpt. Van blog tot videoscript, altijd in onze warme, heldere toon.",
    responsibilities: [
      "Schrijven en redigeren van content voor Kitchen4All en Sani4All",
      "Samenwerken met SEO voor vindbare content en met design voor beeld",
      "Interviews met klanten en franchisepartners om verhalen op te halen",
      "Content kalender beheren en planning bewaken",
    ],
    requirements: [
      "Sterke pen, kan in de tone of voice van beide merken schrijven",
      "SEO-basis (zoekwoorden, structuur, meta's)",
      "Oog voor detail, nuchter gevoel voor merk",
      "Werkt goed samen met vormgever en marketeers",
    ],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    status: "Open",
    team: "Franchise & Lokale activatie",
    summary:
      "Eerste aanspreekpunt voor klanten die online vragen hebben. Je zorgt dat elke vraag snel, vriendelijk en inhoudelijk wordt beantwoord.",
    responsibilities: [
      "Beantwoorden van inkomende vragen via mail, telefoon en chat",
      "Schakelen met showrooms om offerte- of afspraak-vragen op te lossen",
      "Bewaken dat terugbelverzoeken en online afspraken goed in het systeem landen",
      "Signaleren van veelvoorkomende vragen zodat we content kunnen verbeteren",
    ],
    requirements: [
      "Goede schriftelijke en mondelinge uitdrukkingsvaardigheid in het Nederlands",
      "Klantgericht, geduldig, oplossingsgericht",
      "Nauwkeurig met administratie en systemen",
      "Affiniteit met wonen, keukens of badkamers is een pré",
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
      "Beheer en onderhoud van onze interne applicaties (CRM, Payload CMS, BI-tools)",
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
];

export function jobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
