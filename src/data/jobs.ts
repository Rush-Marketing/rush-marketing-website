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
  {
    slug: "category-manager-sanitair",
    title: "Category Manager Sanitair",
    status: "Nieuw",
    team: "Formulemanagement",
    summary:
      "Word jij de spil achter ons badkamerassortiment? Als Category Manager Sanitair bepaal jij wat er in de Sani4All-winkels staat en hangt. Je bent de schakel tussen scherpe inkoop en een aantrekkelijk aanbod op de winkelvloer.",
    responsibilities: [
      "Je stelt ons standaardassortiment samen: van badkamers en toiletten tot kranen, meubels en tegels. Elk jaar kijk je opnieuw wat blijft, wat weggaat en wat erbij komt.",
      "Je vertaalt goede inkoopafspraken naar de winkel: welk product, tegen welke prijs, en hoe we het mooi presenteren en verkopen.",
      "Je duikt in de cijfers: welke producten lopen goed, waar zit de marge, en waar kunnen we slimmer inkopen.",
      "Je brengt nieuwe thema's naar de winkels, denk aan een waterontharder, een douchetoilet of een nieuwe meubellijn, en zorgt dat ze goed landen op de vloer.",
      "Je komt regelmatig in de winkels om te zien hoe het assortiment werkt en wat ondernemers nodig hebben.",
      "Je houdt onze productinformatie netjes op orde, zodat elke winkel met de juiste producten en prijzen werkt.",
    ],
    requirements: [
      "Ervaring met assortiment, inkoop of productmanagement, het liefst in sanitair, interieur, bouw of een vergelijkbare retail- of groothandelswereld.",
      "Je bent sterk met cijfers en houdt van orde. Je vindt het juist leuk om data en productinformatie kloppend te krijgen.",
      "Je schakelt makkelijk tussen collega's, winkels en leveranciers, en krijgt mensen mee in je keuzes.",
      "Je pakt je vak als eigenaar op: je wacht niet af, je zorgt dat het staat.",
      "Affiniteit met badkamers en interieur, en gevoel voor wat een klant mooi vindt.",
      "HBO werk- en denkniveau.",
    ],
  },
];

export function jobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
