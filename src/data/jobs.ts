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
    slug: "coordinator-franchise",
    title: "Coördinator Franchise",
    status: "Nieuw",
    team: "Franchise & Lokale Activatie",
    summary:
      "Alles wat onze 49 winkels aan het servicekantoor vragen, komt bij jou binnen. Jij beoordeelt het, zet het uit bij het juiste team en zorgt dat de ondernemer op tijd een goed antwoord krijgt. Zo weet elke winkel waar hij aan toe is, zonder gedoe.",
    responsibilities: [
      "Je bent het loket voor de winkels: je beoordeelt elke aanvraag, zet het werk uit bij het juiste team en controleert het resultaat voordat het naar de winkel gaat.",
      "Je bewaakt wat we ondernemers beloven: een bevestiging binnen 48 uur, een status na 7 dagen en een antwoord binnen 14 dagen.",
      "Je houdt ons planbord op orde. Elk item heeft een eigenaar, een werkdatum en een deadline, en jij stuurt op opvolging.",
      "Je coördineert het winkelpakket, het campagnemateriaal en de communicatie rond winkelopeningen.",
      "Je stuurt retail support en leveranciers aan, bewaakt budgetten en briefings, en verstuurt de maandrapportage per winkel.",
      "Je gaat samen met de teamlead langs bij winkels en vertaalt wat je daar hoort naar een beter proces.",
    ],
    requirements: [
      "Je bent een ervaren coördinator of projectmanager met een retailhart. Je draagt een proces, laat niets liggen en trekt op tijd aan de bel.",
      "Een paar jaar ervaring met winkels, dealers of franchisenemers als interne klant, het liefst voor meerdere vestigingen tegelijk.",
      "Je bent handig met systemen, bij voorkeur Monday of iets vergelijkbaars, en zet zelf structuur neer waar die ontbreekt.",
      "Stevig en vriendelijk: je durft nee te zeggen, managet verwachtingen en houdt ondernemers en collega's aan afspraken.",
      "HBO werk- en denkniveau. Ervaring met briefings aan externe partijen, budgetbewaking of lokale marketing is mooi meegenomen.",
      "Je werkt 32 tot 40 uur per week.",
    ],
  },
  {
    slug: "projectleider-winkelopeningen",
    title: "Projectleider winkelopeningen",
    status: "Nieuw",
    team: "Franchise & Lokale Activatie",
    summary:
      "Volgend jaar openen we tien nieuwe winkels, en jij hebt de regie. Van handtekening tot openingsdag: jij zorgt dat de planning klopt, de bouwpartners op tijd klaar zijn en de ondernemer weet wat er van hem wordt verwacht. Een fulltime rol vanuit Doetinchem, met veel dagen op locatie.",
    responsibilities: [
      "Je bent eigenaar van het draaiboek per opening: planning, bouwpartners voor bouw, installatie, signing en inrichting, de bestelmomenten en de oplevering.",
      "Je begeleidt de ondernemer door het hele traject. Wat regelt hij zelf en wanneer, en wat doen wij vanuit het servicekantoor?",
      "Je bewaakt het budget per opening samen met finance en rondt de eindafrekening af binnen vier weken na de opening.",
      "Je bouwt aan ons netwerk van bouwpartners: een vaste kern, met per regio partijen eromheen.",
      "Je hebt twee tot drie openingen tegelijk in voorbereiding, elk met een doorlooptijd van drie tot vier maanden.",
      "Na elke opening maak je het draaiboek beter, zodat de volgende winkel soepeler gaat.",
    ],
    requirements: [
      "Ervaring met winkelbouw en winkelopeningen. Brede retailervaring telt voor ons zwaarder dan puur technische kennis.",
      "Je bent een aanpakker die graag op pad is en zich eigenaar voelt van het hele traject.",
      "Je plant en bewaakt strak, stuurt leveranciers aan en houdt de kosten in de hand.",
      "Je communiceert helder met ondernemers, leveranciers en collega's, en blijft rustig als het spannend wordt.",
      "Je werkt graag met vaste processen en checklists, en verbetert ze als het beter kan.",
      "Mooi meegenomen: genoeg technische kennis om een aannemer scherp te houden, en ervaring met franchise of filiaalbedrijven.",
      "Je hebt rijbewijs B, want onze winkels staan door heel Nederland.",
    ],
  },
  {
    slug: "developer",
    title: "Developer",
    status: "Nieuw",
    team: "Tech & Innovatie",
    summary:
      "Zoek je een plek waar je mag bouwen, proberen en leren? Bij Rush werk je aan de websites van Kitchen4All en Sani4All, de afspraakflow en alles wat daarachter draait. AI is bij ons dagelijks gereedschap en er is ruimte genoeg voor nieuwe ideeën. Je werkt twee dagen per week op kantoor in Doetinchem en de rest op afstand.",
    responsibilities: [
      "Je bouwt mee aan de websites van beide formules, de afspraakflow en de koppelingen met ons franchiseplatform en datawarehouse.",
      "Je werkt met Next.js en TypeScript op Vercel, met Payload, Supabase en PostHog.",
      "Je ontwikkelt elke dag met AI, zoals Claude Code. Dat is bij ons geen extraatje, zo werken we.",
      "Je pakt automatisering en slimme workflows op, samen met onze automation specialist.",
      "Je krijgt ruimte om nieuwe dingen te proberen: agents, koppelingen en tooling voor het hele kantoor.",
    ],
    requirements: [
      "Je bent een jong talent met één tot vier jaar ervaring, of een starter met een sterk portfolio.",
      "Supernieuwsgierig: je probeert dingen uit, leert snel en deelt wat werkt.",
      "Een basis in TypeScript en Next.js, of een vergelijkbaar modern framework.",
      "Je gebruikt AI-tools al dagelijks en wilt daarin vooroplopen.",
      "Zelfstandig en resultaatgericht, met gevoel voor marketing en automatisering.",
      "Mooi meegenomen: ervaring met Supabase, Payload, PostHog of marketing automation.",
      "Je hoeft niet uit de regio te komen.",
    ],
  },
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
