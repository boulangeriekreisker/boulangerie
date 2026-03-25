import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { formatIntervals, getBusinessStatus } from "@/lib/opening-hours";
import {
  business,
  heroHighlights,
  productCategories,
  servicePromises,
  trustSignals,
  weeklySchedule,
} from "@/lib/site-data";

export default function HomePage() {
  const status = getBusinessStatus();

  return (
    <>
      <section className="hero section" id="top">
        <div className="hero__panel">
          <div className="hero__content">
            <p className="eyebrow">Saint-Pol-de-Léon · artisanat · Bretagne</p>
            <h1>{business.tagline}</h1>
            <p className="hero__lede">
              {business.name} transforme sa chaleur artisanale en une page
              vitrine élégante, ultra-rapide et taillée pour le référencement
              local.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#gamme">
                Découvrir la gamme
              </a>
              <a className="button button--ghost" href="#contact">
                Écrire un message
              </a>
            </div>

            <div className="hero__meta">
              <div className={`status-pill ${status.isOpen ? "status-pill--open" : ""}`}>
                <span>{status.label}</span>
                <small>{status.detail}</small>
              </div>

              <a className="meta-link" href={business.mapUrl} rel="noreferrer" target="_blank">
                {business.addressLine}, {business.city}
              </a>
            </div>
          </div>

          <aside className="hero__aside">
            <div className="hero-stage">
              <article className="stage-card stage-card--bread">
                <span>Pains traditionnels</span>
                <strong>Croûtes dorées, fournées du matin.</strong>
              </article>
              <article className="stage-card stage-card--viennoiserie">
                <span>Viennoiseries</span>
                <strong>Feuilletages francs et couleur beurre.</strong>
              </article>
              <article className="stage-card stage-card--breizh">
                <span>Pâtisseries bretonnes</span>
                <strong>Kouign-amann, far et classiques de comptoir.</strong>
              </article>
            </div>
          </aside>
        </div>

        <div className="marquee">
          {heroHighlights.map((highlight) => (
            <span className="marquee__item" key={highlight}>
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="gamme">
        <SectionTitle
          eyebrow="La gamme"
          intro="Une page unique n'empêche pas une vraie présence de marque : les catégories clés sont mises en avant avec chaleur, clarté et efficacité mobile."
          title="Une vitrine gourmande, portée par trois familles de produits"
        />

        <div className="catalog-grid">
          {productCategories.map((category) => (
            <article className="catalog-card" key={category.title}>
              <p className="catalog-card__eyebrow">{category.eyebrow}</p>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul className="catalog-card__list">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <SectionTitle
          eyebrow="Scalabilité"
          intro="Cette version est volontairement simple : une landing page statique, distribuée par CDN, avec une seule fonction serverless pour le contact."
          title="Une architecture vitrine qui tient la charge sans effort"
        />

        <div className="feature-grid">
          {servicePromises.map((promise) => (
            <article className="feature-card" key={promise.title}>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="infos">
        <SectionTitle
          eyebrow="Infos pratiques"
          intro="Les informations utiles doivent être visibles en quelques secondes : horaires clairs, accès direct et preuve locale."
          title="Une présence locale nette, crédible et facile à trouver"
        />

        <div className="local-grid">
          <article className="info-card info-card--accent">
            <p className="eyebrow">Horaires</p>
            <h2>Base horaire confirmée</h2>
            <div className="schedule-board">
              {weeklySchedule.map((entry) => (
                <div className="schedule-row" key={entry.day}>
                  <strong>{entry.day}</strong>
                  <span>{formatIntervals(entry.intervals)}</span>
                </div>
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
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={business.embedMapUrl}
                title={`Carte de ${business.name}`}
              />
            </div>
            <div className="button-row">
              <a className="button button--primary" href={business.phoneHref}>
                Appeler
              </a>
              <a className="button button--ghost" href={business.mapUrl} rel="noreferrer" target="_blank">
                Ouvrir Google Maps
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Réputation"
          intro="Les signaux de confiance sont visibles mais restent discrets, pour soutenir la conversion locale sans surcharger la page."
          title="Une preuve sociale simple, alignée avec la marque"
        />

        <div className="proof-grid">
          {trustSignals.map((signal) => (
            <article className="proof-card" key={signal.label}>
              <p className="proof-card__label">{signal.label}</p>
              <p>{signal.text}</p>
              <a className="text-link" href={signal.href} rel="noreferrer" target="_blank">
                Ouvrir {signal.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split" id="contact">
        <div className="info-card info-card--accent">
          <p className="eyebrow">Contact</p>
          <h2>Un formulaire simple, sans réservation ni tunnel complexe.</h2>
          <p>
            Le message part via une fonction serverless. Aucun back-office ni
            base de données n&apos;est nécessaire pour le site vitrine.
          </p>
          <ul className="checklist">
            <li>Nom, email, message</li>
            <li>Envoi via Postmark dès configuration des secrets</li>
            <li>Fallback de démonstration en local tant que l&apos;email n&apos;est pas branché</li>
          </ul>
        </div>

        <div className="info-card">
          <ContactForm />
          <p className="source-note">{business.sourceNote}</p>
        </div>
      </section>
    </>
  );
}
