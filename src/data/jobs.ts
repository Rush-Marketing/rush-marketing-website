export type JobStatus = "Nieuw" | "Open";

export type Job = {
  title: string;
  status: JobStatus;
  team: string;
  location: string;
  url?: string;
};

export const jobs: Job[] = [
  {
    title: "Teamlead Franchise & Operations",
    status: "Nieuw",
    team: "Franchise",
    location: "Doetinchem",
  },
  {
    title: "Product Manager / Product Owner",
    status: "Nieuw",
    team: "Tech & Innovatie",
    location: "Doetinchem",
  },
  {
    title: "Marketing Automation Specialist",
    status: "Open",
    team: "Performance & Groei",
    location: "Doetinchem",
  },
  {
    title: "BI / Data Analist",
    status: "Open",
    team: "Performance & Groei",
    location: "Doetinchem",
  },
  {
    title: "Marketing Engineer",
    status: "Open",
    team: "Performance & Groei",
    location: "Doetinchem",
  },
  {
    title: "SEA Specialist",
    status: "Open",
    team: "Performance & Groei",
    location: "Doetinchem",
  },
  {
    title: "Content Marketeer",
    status: "Open",
    team: "Merk & Content",
    location: "Doetinchem",
  },
  {
    title: "Customer Support",
    status: "Open",
    team: "Franchise",
    location: "Doetinchem",
  },
  {
    title: "Applicatiebeheerder",
    status: "Open",
    team: "Tech & Innovatie",
    location: "Doetinchem",
  },
];
