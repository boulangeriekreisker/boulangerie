import type { StaticImageData } from "next/image";

import boucheesSaleesImage from "@/assets/kreisker/bouchees-salees.jpg";
import collageViennoiseriesImage from "@/assets/kreisker/collage-viennoiseries.jpg";
import facadeImage from "@/assets/kreisker/facade-kreisker.jpg";
import gateauAnanasImage from "@/assets/kreisker/gateau-ananas-anniversaire.jpg";
import gateauChantillyImage from "@/assets/kreisker/gateau-chantilly-blanc.jpg";
import gateauFraisePartImage from "@/assets/kreisker/gateau-fraise-part.jpg";
import pavlovaImage from "@/assets/kreisker/pavlova-fruits-rouges.jpg";
import petitsGateauxImage from "@/assets/kreisker/petits-gateaux-vitrine.jpg";
import pieceMonteeChouxDetailImage from "@/assets/kreisker/piece-montee-choux-detail.jpg";
import pieceMonteeChouxImage from "@/assets/kreisker/piece-montee-choux.jpg";
import pieceMonteeCommunionImage from "@/assets/kreisker/piece-montee-communion.jpg";
import presentoirGateauxImage from "@/assets/kreisker/presentoir-gateaux.jpg";
import sandwichesSaumonImage from "@/assets/kreisker/sandwiches-saumon.jpg";
import tarteFruitsCreationImage from "@/assets/kreisker/tarte-fruits-creation.jpg";
import vitrinePatisseriesImage from "@/assets/kreisker/vitrine-patisseries.jpg";

const fallbackSiteUrl = "https://boulangerie-du-kreisker.fr";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/+$/, "");

export const business = {
  name: "La Boulangerie du Kreisker",
  shortName: "Kreisker",
  city: "Saint-Pol-de-Léon",
  region: "Finistère nord",
  tagline:
    "La Boulangerie du Kreisker, votre boulangerie artisanale à Saint-Pol-de-Léon",
  description:
    "Boulangerie artisanale à Saint-Pol-de-Léon : pains du quotidien, viennoiseries maison, pause déjeuner, pâtisseries gourmandes et créations sur commande au 10 rue Cadiou.",
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
    "Horaires et informations pratiques préremplis à partir de votre capture et de sources publiques consultées le 25 mars 2026. À valider avant mise en production.",
} as const;

export const navigation = [
  { href: "/#maison", label: "La maison" },
  { href: "/#gamme", label: "La gamme" },
  { href: "/#selection", label: "Au comptoir" },
  { href: "/#creations", label: "Créations" },
  { href: "/#infos", label: "Infos pratiques" },
  { href: "/#contact", label: "Formulaire" },
];

export const utilityPages = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Nous contacter" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
] as const;

export const heroHighlights = [
  "Pain artisanal et viennoiseries maison",
  "Pause déjeuner rapide au centre-ville",
  "Pâtisseries et créations sur commande",
];

export type VisualCard = {
  title: string;
  caption: string;
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
};

export type QuickFact = {
  label: string;
  value: string;
};

export const quickFacts: QuickFact[] = [
  {
    label: "Horaires",
    value: "Mar. au sam. 07:00-19:00 · dim. 07:00-12:30",
  },
  {
    label: "Adresse",
    value: "10 rue Cadiou, Saint-Pol-de-Léon",
  },
  {
    label: "Réputation",
    value: "Photos produits, avis locaux et accès direct",
  },
];

export const heroGallery: VisualCard[] = [
  {
    title: "La vitrine du moment",
    caption: "Entremets, fruits, chocolat et couleurs de saison.",
    image: vitrinePatisseriesImage,
    alt: "Vitrine de pâtisseries colorées à la Boulangerie du Kreisker",
    objectPosition: "50% 45%",
  },
  {
    title: "Au coeur de Saint-Pol-de-Léon",
    caption: "Une adresse de quartier facile à repérer au 10 rue Cadiou.",
    image: facadeImage,
    alt: "Façade en pierre de la Boulangerie du Kreisker à Saint-Pol-de-Léon",
    objectPosition: "50% 50%",
  },
  {
    title: "Le comptoir gourmand",
    caption: "Petits gâteaux, fruits rouges et desserts de vitrine.",
    image: petitsGateauxImage,
    alt: "Assortiment de petits gâteaux et entremets en vitrine",
    objectPosition: "50% 45%",
  },
];

export const houseFeature = {
  title: "Une façade de quartier, une vitrine qui parle tout de suite",
  caption:
    "Le site met en valeur la maison comme on la perçoit sur place : simple à repérer, généreuse visuellement et pensée pour un passage rapide.",
  image: facadeImage,
  alt: "Devanture en pierre de la Boulangerie du Kreisker",
  objectPosition: "50% 52%",
} as const;

export type NarrativeCard = {
  title: string;
  text: string;
};

export const houseNotes: NarrativeCard[] = [
  {
    title: "Une adresse claire",
    text:
      "Le 10 rue Cadiou et la façade en pierre deviennent des repères immédiats dès la première visite sur mobile.",
  },
  {
    title: "Une offre lisible",
    text:
      "Le parcours raconte la boulangerie comme une journée réelle : matin, déjeuner, dessert, puis commandes festives.",
  },
  {
    title: "Une présence locale crédible",
    text:
      "Les visuels réels, les horaires, l'appel direct, Facebook et TripAdvisor travaillent ensemble au service de la confiance.",
  },
];

export const serviceMoments: NarrativeCard[] = [
  {
    title: "Le matin",
    text: "Viennoiseries maison, premières envies sucrées et repères du quotidien.",
  },
  {
    title: "Le midi",
    text: "Une pause déjeuner rapide à comprendre, pratique à emporter et visible en un coup d'oeil.",
  },
  {
    title: "Les grands jours",
    text: "Gâteaux, entremets et pièces montées qui montrent que la maison sait aussi accompagner les événements.",
  },
];

export type ShowcaseCard = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
};

export const showcaseCards: ShowcaseCard[] = [
  {
    eyebrow: "Le matin",
    title: "Viennoiseries et premières fournées",
    description:
      "Croissants, pains au chocolat et gourmandises du matin pour démarrer la journée avec du goût et du rythme.",
    items: ["Croissants dorés", "Pains au chocolat", "Premières fournées"],
    image: collageViennoiseriesImage,
    alt: "Collage de croissants, pâtisseries et viennoiseries de la boulangerie",
    objectPosition: "50% 42%",
  },
  {
    eyebrow: "Le midi",
    title: "Pause déjeuner et comptoir salé",
    description:
      "Sandwiches généreux, saumon fumé et bouchées salées pour un déjeuner rapide, frais et très lisible sur mobile.",
    items: ["Sandwiches au saumon", "Bouchées salées", "Pause déjeuner rapide"],
    image: sandwichesSaumonImage,
    alt: "Sandwiches garnis au saumon fumé en vitrine",
    objectPosition: "50% 50%",
  },
  {
    eyebrow: "Le goût sucré",
    title: "Pâtisseries et desserts de vitrine",
    description:
      "Pavlovas, entremets fruités et douceurs du comptoir pour le goûter, le dessert ou les envies du week-end.",
    items: ["Pavlovas fruitées", "Entremets de vitrine", "Desserts du week-end"],
    image: pavlovaImage,
    alt: "Gâteau pavlova aux fruits rouges dans la vitrine de la boulangerie",
    objectPosition: "50% 45%",
  },
];

export type GalleryItem = {
  title: string;
  caption: string;
  image: StaticImageData;
  alt: string;
  variant: "wide" | "portrait" | "square";
  objectPosition?: string;
};

export const selectionGallery: GalleryItem[] = [
  {
    title: "Bouchées feuilletées",
    caption: "Des pièces salées qui donnent envie de s'arrêter en passant.",
    image: boucheesSaleesImage,
    alt: "Bouchées feuilletées salées présentées en vitrine",
    variant: "wide",
    objectPosition: "50% 45%",
  },
  {
    title: "Gâteau anniversaire",
    caption: "Crème, ananas et finitions généreuses pour les moments à partager.",
    image: gateauAnanasImage,
    alt: "Gâteau anniversaire garni d'ananas et de crème fouettée",
    variant: "square",
    objectPosition: "50% 50%",
  },
  {
    title: "Crémeux et chantilly",
    caption: "Un décor blanc très travaillé qui valorise la matière et la main.",
    image: gateauChantillyImage,
    alt: "Gâteau recouvert de chantilly blanche avec décor de guimauves",
    variant: "portrait",
    objectPosition: "50% 40%",
  },
  {
    title: "Le présentoir du jour",
    caption: "Des gâteaux prêts à partir pour les commandes et les envies de dernière minute.",
    image: presentoirGateauxImage,
    alt: "Présentoir réfrigéré avec plusieurs gâteaux blancs et entremets",
    variant: "portrait",
    objectPosition: "50% 50%",
  },
  {
    title: "Part gourmande",
    caption: "Textures, crème et fruits rouges au plus près du comptoir.",
    image: gateauFraisePartImage,
    alt: "Part de gâteau aux fruits rouges et crème en gros plan",
    variant: "wide",
    objectPosition: "50% 45%",
  },
];

export const celebrationGallery: GalleryItem[] = [
  {
    title: "Détail de pièce montée",
    caption: "Une création brillante, très visuelle, pensée pour marquer l'instant.",
    image: pieceMonteeChouxDetailImage,
    alt: "Gros plan sur une pièce montée de choux glacés",
    variant: "portrait",
    objectPosition: "50% 45%",
  },
  {
    title: "Tarte fruitée",
    caption: "Couleurs de saison et présentation généreuse pour les commandes spéciales.",
    image: tarteFruitsCreationImage,
    alt: "Grande tarte rectangulaire garnie de fruits colorés",
    variant: "square",
    objectPosition: "50% 50%",
  },
  {
    title: "Pièce montée",
    caption: "Une structure de choux qui donne de la hauteur à la page comme à l'événement.",
    image: pieceMonteeChouxImage,
    alt: "Pièce montée de choux en présentation sur plan de travail",
    variant: "portrait",
    objectPosition: "50% 48%",
  },
  {
    title: "Création de communion",
    caption: "Un visuel plus cérémoniel pour montrer que la maison sait aussi accompagner les grands jours.",
    image: pieceMonteeCommunionImage,
    alt: "Pièce montée décorée pour une communion",
    variant: "portrait",
    objectPosition: "50% 45%",
  },
];

export const trustSignals = [
  {
    label: "TripAdvisor",
    text: "Une réputation locale déjà visible sur les plateformes d'avis.",
    href: business.tripadvisorUrl,
  },
  {
    label: "Facebook",
    text: "Des photos produits et de l'actualité qui prolongent la vitrine.",
    href: business.facebookUrl,
  },
];

export const seoKeywords = [
  "boulangerie saint-pol-de-léon",
  "pain artisanal kreisker",
  "viennoiseries maison saint-pol-de-léon",
  "pâtisseries bretonnes finistère",
  "kouign-amann saint-pol-de-léon",
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
