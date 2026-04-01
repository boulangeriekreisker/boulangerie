import Image from "next/image";

import { LiveBusinessStatusPill } from "@/components/LiveBusinessStatusPill";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { formatIntervals } from "@/lib/opening-hours";
import {
  business,
  celebrationGallery,
  heroGallery,
  heroHighlights,
  houseFeature,
  houseNotes,
  quickFacts,
  selectionGallery,
  serviceMoments,
  showcaseCards,
  trustSignals,
  weeklySchedule,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero section" id="top">
        <div className="hero__panel">
          <div className="hero__content">
            <p className="eyebrow">Saint-Pol-de-Léon · artisanat · Bretagne</p>
            <h1>{business.tagline}</h1>
            <p className="hero__lede">
              Pains du quotidien, viennoiseries maison, pause déjeuner et pâtisseries gourmandes,
              préparés chaque jour au coeur de Saint-Pol-de-Léon.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href={business.phoneHref}>
                Appeler la boulangerie
              </a>
              <a className="button button--ghost" href="#maison">
                Découvrir la maison
              </a>
            </div>

            <div className="hero-proof-grid">
              {quickFacts.map((fact) => (
                <article className="hero-proof" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>

            <div className="hero__meta">
              <LiveBusinessStatusPill />

              <a
                className="meta-link"
                href={business.mapUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                {business.addressLine}, {business.city}
              </a>

              <a
                className="meta-link"
                href={business.tripadvisorUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                Voir les avis TripAdvisor
              </a>
            </div>
          </div>

          <aside className="hero__aside">
            <div className="hero-mosaic">
              {heroGallery.map((photo, index) => (
                <figure
                  className={`hero-photo ${index === 0 ? "hero-photo--lead" : ""}`}
                  key={photo.title}
                >
                  <Image
                    alt={photo.alt}
                    className="hero-photo__image"
                    fill
                    loading="eager"
                    placeholder="blur"
                    preload={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 1080px) 100vw, 38vw"
                        : "(max-width: 1080px) 50vw, 18vw"
                    }
                    src={photo.image}
                    style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
                  />
                  <figcaption className="hero-photo__caption">
                    <strong>{photo.title}</strong>
                    <span>{photo.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </div>

        <div className="marquee" aria-label="Points forts">
          {heroHighlights.map((highlight) => (
            <span className="marquee__item" key={highlight}>
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--house" id="maison">
        <SectionTitle
          eyebrow="La maison"
          intro="Une présence locale crédible se joue en quelques secondes : façade reconnaissable, offre lisible, informations pratiques visibles et photos qui donnent réellement faim."
          title="Une vitrine locale pensée comme une vraie visite de quartier"
        />

        <div className="house-layout">
          <figure className="house-figure">
            <div className="house-figure__media">
              <Image
                alt={houseFeature.alt}
                className="house-figure__image"
                fill
                placeholder="blur"
                sizes="(max-width: 1080px) 100vw, 42vw"
                src={houseFeature.image}
                style={{ objectPosition: houseFeature.objectPosition }}
              />
            </div>
            <figcaption className="house-figure__caption">
              <strong>{houseFeature.title}</strong>
              <span>{houseFeature.caption}</span>
            </figcaption>
          </figure>

          <div className="house-stack">
            <article className="info-card info-card--accent house-story">
              <p className="eyebrow">Identité locale</p>
              <h2>Une boulangerie de quartier pensée pour donner envie de venir.</h2>
              <p>
                Le site reprend les informations utiles avant tout : horaires, adresse, appel,
                itinéraire, puis laisse les visuels raconter la générosité du comptoir et des
                créations sur commande.
              </p>

              <div className="house-note-list">
                {houseNotes.map((note) => (
                  <article className="house-note" key={note.title}>
                    <strong>{note.title}</strong>
                    <p>{note.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <div className="moment-grid">
              {serviceMoments.map((moment) => (
                <article className="moment-card" key={moment.title}>
                  <span>{moment.title}</span>
                  <p>{moment.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gamme">
        <SectionTitle
          eyebrow="La gamme"
          intro="Du petit déjeuner au dessert, la page met en avant ce qui donne envie d'entrer, d'appeler ou de passer commande sans détour."
          title="Une lecture claire entre fournil du matin, déjeuner rapide et vitrine sucrée"
        />

        <div className="showcase-grid">
          {showcaseCards.map((card) => (
            <article className="showcase-card" key={card.title}>
              <div className="showcase-card__media">
                <Image
                  alt={card.alt}
                  className="showcase-card__image"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 30vw"
                  src={card.image}
                  style={{ objectPosition: card.objectPosition ?? "50% 50%" }}
                />
                <span className="showcase-card__eyebrow">{card.eyebrow}</span>
              </div>

              <div className="showcase-card__body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="showcase-card__items">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="selection">
        <SectionTitle
          eyebrow="Au comptoir"
          intro="Textures, fruits, crème, feuilletage et coups d'oeil de vitrine : tout ce qu'il faut pour rendre le site vivant dès maintenant."
          title="Une sélection visuelle qui fait exister la boutique avant même la visite"
        />

        <div className="gallery-wall">
          {selectionGallery.map((photo) => (
            <figure className={`gallery-card gallery-card--${photo.variant}`} key={photo.title}>
              <div className="gallery-card__media">
                <Image
                  alt={photo.alt}
                  className="gallery-card__image"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  src={photo.image}
                  style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
                />
              </div>
              <figcaption className="gallery-card__caption">
                <strong>{photo.title}</strong>
                <span>{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section--contrast" id="creations">
        <SectionTitle
          eyebrow="Créations"
          intro="Gâteaux de commande, pièces montées et desserts qui marquent les anniversaires, les communions et les moments que l'on veut rendre mémorables."
          title="Des créations qui prolongent l'expérience bien au-delà du quotidien"
        />

        <div className="celebration-layout">
          <article className="info-card info-card--accent celebration-copy">
            <p className="eyebrow">Storytelling visuel</p>
            <h2>Du fournil du matin jusqu&apos;aux grandes occasions.</h2>
            <p>
              La page raconte la boulangerie comme un rythme réel : le passage du matin, la pause
              déjeuner, le dessert du week-end et les créations festives qui accompagnent les
              grands moments.
            </p>
            <ul className="checklist">
              <li>Produits du quotidien visibles immédiatement</li>
              <li>Commandes spéciales mises en valeur sans surcharger la page</li>
              <li>Ambiance locale, chaleureuse et très mobile-first</li>
            </ul>
          </article>

          <div className="celebration-grid">
            {celebrationGallery.map((photo) => (
              <figure className="celebration-card" key={photo.title}>
                <div className="celebration-card__media">
                  <Image
                    alt={photo.alt}
                    className="celebration-card__image"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 24vw"
                    src={photo.image}
                    style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
                  />
                </div>
                <figcaption className="celebration-card__caption">
                  <strong>{photo.title}</strong>
                  <span>{photo.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="infos">
        <SectionTitle
          eyebrow="Infos pratiques"
          intro="Horaires clairs, adresse visible, accès rapide et réputation locale : l'information utile est conçue pour être comprise en quelques secondes."
          title="Tout ce qu'il faut pour venir facilement à la boulangerie"
        />

        <div className="local-grid">
          <article className="info-card info-card--accent">
            <p className="eyebrow">Horaires</p>
            <h2>Ouvert du mardi au dimanche</h2>
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
            <div className="button-row">
              <a className="button button--primary" href={business.phoneHref}>
                Appeler
              </a>
              <a
                className="button button--ghost"
                href={business.mapUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                Ouvrir Google Maps
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--split" id="contact">
        <div className="info-card info-card--accent">
          <p className="eyebrow">Contact rapide</p>
          <h2>Un message simple, sans réservation ni parcours compliqué.</h2>
          <p>
            Pour une demande rapide, un renseignement ou une commande à préciser, le formulaire
            reste court et va à l&apos;essentiel.
          </p>
          <ul className="checklist">
            <li>Nom, email, message</li>
            <li>Retour rapide dès configuration du service d&apos;envoi</li>
            <li>Téléphone et accès toujours visibles sur la page</li>
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
