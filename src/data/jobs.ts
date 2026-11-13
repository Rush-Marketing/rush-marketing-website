/** "Vervuld": de rol is ingevuld. De vacature blijft zichtbaar, maar je kunt er niet meer op solliciteren. */
export type JobStatus = "Nieuw" | "Open" | "Vervuld";

export type Job = {
  slug: string;
  title: string;
  status: JobStatus;
  team: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  /** Mailadres voor sollicitaties; zonder dit veld gaat het naar info@rushmarketing.nl. */
  contactEmail?: string;
  /** Optionele sfeerfoto onder de kop, uit public/imagery. */
  image?: { src: string; alt: string; caption: string };
};

/**
 * Vacatures uit "Wie doet wat bij 4All" (mei 2026), openstaande plekken.
 * Content in Rush voice, per rol te finetunen door het content- of
 * recruitmentteam voor productie.
 */
export const jobs: Job[] = [
  {
    slug: "formulemanager-kitchen4all",
    title: "Formulemanager Kitchen4All",
    status: "Vervuld",
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
  {
    slug: "werkvoorbereider-winkelopeningen",
    title: "Werkvoorbereider winkelopeningen",
    status: "Nieuw",
    team: "Franchise & Lokale Activatie",
    summary:
      "Volgend jaar openen we tien nieuwe winkels, en daar hebben we jouw hulp bij nodig. Als werkvoorbereider maak jij van elk ontwerp een plan waar iedere bouwpartner direct mee aan de slag kan. Zo opent elke winkel op tijd en zonder gedoe, en zie jij jouw werk terug van Amersfoort tot Drachten. Als zzp'er voor twee tot drie dagen per week, vast kan ook. Start zo snel mogelijk.",
    responsibilities: [
      "Je werkt het ontwerp van onze interieurontwerper uit tot technische tekeningen: maatvoering, wanden en plafonds, het tegelplan en de punten voor stroom, water, afvoer en verlichting.",
      "Je maakt per bouwpartner een compleet pakket: tekeningen, uitvraag, hoeveelheden en de volgorde waarin iedereen aan de slag gaat.",
      "Je toetst offertes technisch. Klopt wat een partner aanbiedt met wat we hebben gevraagd?",
      "Je levert op tijd de bestellijst voor de winkelinrichting, van tegels tot spiegels, kranen en meubels. Die gaat zo'n drie maanden voor de opening de deur uit.",
      "Tijdens de bouw ben jij het aanspreekpunt voor technische vragen van partners. Op vaste momenten kom je kijken: bij de start, op de momenten die ertoe doen en bij de oplevering.",
      "Na elke opening maak je ons standaardpakket beter, zodat de volgende winkel sneller en soepeler gaat.",
    ],
    requirements: [
      "Een paar jaar ervaring als werkvoorbereider in de winkel-, interieur- of utiliteitsbouw.",
      "Je tekent vlot in AutoCAD of een vergelijkbaar pakket dat met DWG werkt, en leest bouwkundige en installatietekeningen zonder moeite.",
      "Je kent de raakvlakken tussen bouw, installatie en afbouw. Je ziet een probleem op papier, voordat het op de bouw ontstaat.",
      "Je werkt graag samen met een ontwerper. Je werkt haar ontwerp uit, je tekent het niet over.",
      "Je houdt het overzicht over meerdere winkels tegelijk, nauwkeurig en georganiseerd.",
      "Je bent nieuwsgierig naar slimme tools en AI die je werk sneller maken.",
      "Je hebt rijbewijs B, want onze winkels staan door heel Nederland.",
    ],
    contactEmail: "lamcodevries@sani4all.nl",
    image: {
      src: "/imagery/sani4all-apeldoorn.jpg",
      alt: "Interieur van Sani4All Apeldoorn: een lange looproute langs complete badkamers met een vrijstaand bad en een marmeren wand",
      caption: "Sani4All Apeldoorn. Zo ziet een winkel eruit als alles klopt.",
    },
  },
];

/** Vacatures waarop je nog kunt solliciteren. Dit aantal staat in de koppen en knoppen. */
export const openJobs: Job[] = jobs.filter((j) => j.status !== "Vervuld");

export function jobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
