import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { formatIntervals } from "@/lib/opening-hours";
import { business, trustSignals, weeklySchedule } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    images: ["/og-kreisker.svg"],
    url: "/contact",
  },
  description: `Contactez ${business.name} à ${business.city} par téléphone, via le formulaire ou en consultant les horaires et l'itinéraire.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section">
        <SectionTitle
          align="center"
          as="h1"
          eyebrow="Contact"
          intro="Téléphone, formulaire, horaires et itinéraire restent accessibles dans une page dédiée pour les visiteurs qui veulent aller droit au but."
          title="Contacter la boulangerie facilement"
        />

        <div className="page-actions">
          <a className="button button--primary" href={business.phoneHref}>
            Appeler la boutique
          </a>
          <a
            className="button button--ghost"
            href={business.mapUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            Ouvrir Google Maps
          </a>
          <Link className="button button--ghost" href="/#top">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      <section className="section section--split">
        <article className="info-card info-card--accent">
          <p className="eyebrow">Message</p>
          <h2>Un formulaire court pour les demandes simples.</h2>
          <p>
            Le message demande l&apos;essentiel: nom, email et demande. Les horaires et le numéro de
            téléphone restent visibles pour les visiteurs qui préfèrent appeler directement.
          </p>
          <ul className="checklist">
            <li>Réponse par email dès que le service d&apos;envoi est configuré</li>
            <li>Adresse et horaires accessibles sur la même page</li>
            <li>Politique de confidentialité dédiée et lien permanent</li>
          </ul>
        </article>

        <article className="info-card">
          <ContactForm />
          <p className="source-note">{business.sourceNote}</p>
        </article>
      </section>

      <section className="section">
        <div className="local-grid">
          <article className="info-card info-card--accent">
            <p className="eyebrow">Horaires</p>
            <h2>Horaires de la semaine</h2>
            <div className="schedule-board">
              {weeklySchedule.map((entry) => (
                <div className="schedule-row" key={entry.day}>
                  <strong>{entry.day}</strong>
                  <span>{formatIntervals(entry.intervals)}</span>
                </div>
              ))}
            </div>

            <div className="local-links">
              {trustSignals.map((signal) => (
                <a
                  className="local-link-card"
                  href={signal.href}
                  key={signal.label}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <strong>{signal.label}</strong>
                  <span>{signal.text}</span>
                </a>
              ))}
            </div>
          </article>

          <article className="info-card map-card">
            <p className="eyebrow">Adresse</p>
            <h2>
              {business.addressLine}, {business.postalCode} {business.city}
            </h2>
            <div className="map-frame">
              <iframe
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={business.embedMapUrl}
                title={`Carte de ${business.name}`}
                width="100%"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
