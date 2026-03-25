export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://boulangerie-du-kreisker.vercel.app";

export const business = {
  name: "La Boulangerie du Kreisker",
  shortName: "Kreisker",
  city: "Saint-Pol-de-Léon",
  region: "Finistère, Bretagne",
  tagline: "La meilleure boulangerie de Saint-Pol-de-Léon",
  description:
    "Boulangerie artisanale à Saint-Pol-de-Léon, reconnue pour ses pains traditionnels, ses viennoiseries maison et ses pâtisseries bretonnes.",
  phoneDisplay: "02 98 69 02 19",
  phoneHref: "tel:+33298690219",
  addressLine: "10 rue Cadiou",
  postalCode: "29250",
  country: "France",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=10+rue+Cadiou+29250+Saint-Pol-de-L%C3%A9on",
  embedMapUrl:
    "https://www.google.com/maps?q=10+rue+Cadiou+29250+Saint-Pol-de-L%C3%A9on&output=embed",
  facebookUrl: "https://www.facebook.com/112939582099551/",
  tripadvisorUrl:
    "https://www.tripadvisor.fr/Restaurant_Review-g660194-d13948092-Reviews-Boulangerie_du_Kreisker-Saint_Pol_de_Leon_Finistere_Brittany.html",
  sourceNote:
    "Horaires et informations pratiques préremplis à partir de votre capture et de sources publiques consultées le 25 mars 2026. À valider avec les contenus officiels du dossier client.",
} as const;

export const navigation = [
  { href: "/#gamme", label: "La gamme" },
  { href: "/#infos", label: "Infos pratiques" },
  { href: "/#contact", label: "Contact" },
];

export const heroHighlights = [
  "Pain artisanal",
  "Viennoiseries maison",
  "Pâtisseries bretonnes",
];

export const servicePromises = [
  {
    title: "Jamstack ultra-rapide",
    text: "La page est pensée pour être servie comme un contenu statique depuis le CDN, avec des temps de chargement très bas même pendant les pics saisonniers.",
  },
  {
    title: "Référencement local soigné",
    text: "Le contenu, les horaires, l'adresse et les données structurées sont préparés pour performer sur les recherches locales autour de Saint-Pol-de-Léon.",
  },
  {
    title: "Contact sans friction",
    text: "Le formulaire envoie un message via une fonction serverless sans imposer de base de données ni de tunnel de réservation lourd.",
  },
];

export type ProductCategory = {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  {
    title: "Pains spéciaux",
    eyebrow: "Four du matin",
    description:
      "Une vitrine concentrée sur la tradition, les pains de campagne et les pains du moment, avec une présence forte des produits qui font revenir chaque jour.",
    items: ["Tradition", "Pain de campagne", "Pain spécial du moment"],
  },
  {
    title: "Viennoiseries maison",
    eyebrow: "Doré minute",
    description:
      "Croissants, pains au chocolat et feuilletages de comptoir portés par une mise en page très visuelle et mobile-first.",
    items: ["Croissant", "Pain au chocolat", "Croissant amande"],
  },
  {
    title: "Pâtisseries bretonnes",
    eyebrow: "Signature locale",
    description:
      "Une sélection qui installe immédiatement l'ancrage breton de la maison, avec le kouign-amann en vedette éditoriale dès que les visuels définitifs arrivent.",
    items: ["Kouign-amann", "Far pruneaux", "Éclair chocolat"],
  },
];

export const trustSignals = [
  {
    label: "TripAdvisor",
    text: "Réputation locale solide et visibilité sur les plateformes d'avis.",
    href: business.tripadvisorUrl,
  },
  {
    label: "Facebook",
    text: "Canal social mis en avant pour relayer l'actualité du fournil et les photos produits.",
    href: business.facebookUrl,
  },
];

export const seoKeywords = [
  "boulangerie saint-pol-de-léon",
  "pain artisanal kreisker",
  "meilleur kouign-amann finistère",
  "viennoiserie saint-pol-de-léon",
];

export type DaySchedule = {
  day: string;
  shortDay: string;
  schemaDay: string;
  intervals: Array<{ start: string; end: string }>;
};

export const weeklySchedule: DaySchedule[] = [
  { day: "Lundi", shortDay: "Mon", schemaDay: "Monday", intervals: [] },
  {
    day: "Mardi",
    shortDay: "Tue",
    schemaDay: "Tuesday",
    intervals: [{ start: "07:00", end: "19:00" }],
  },
  {
    day: "Mercredi",
    shortDay: "Wed",
    schemaDay: "Wednesday",
    intervals: [{ start: "07:00", end: "19:00" }],
  },
  {
    day: "Jeudi",
    shortDay: "Thu",
    schemaDay: "Thursday",
    intervals: [{ start: "07:00", end: "19:00" }],
  },
  {
    day: "Vendredi",
    shortDay: "Fri",
    schemaDay: "Friday",
    intervals: [{ start: "07:00", end: "19:00" }],
  },
  {
    day: "Samedi",
    shortDay: "Sat",
    schemaDay: "Saturday",
    intervals: [{ start: "07:00", end: "19:00" }],
  },
  {
    day: "Dimanche",
    shortDay: "Sun",
    schemaDay: "Sunday",
    intervals: [{ start: "07:00", end: "12:30" }],
  },
];
