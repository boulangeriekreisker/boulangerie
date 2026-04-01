import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/SectionTitle";
import { business, houseFeature, houseNotes, serviceMoments, trustSignals } from "@/lib/site-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    images: ["/og-kreisker.svg"],
    url: "/a-propos",
  },
  title: "À propos",
  description: `Découvrez ${business.name}, son ambiance artisanale, ses repères pratiques et sa présence locale à ${business.city}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section">
        <SectionTitle
          align="center"
          as="h1"
          eyebrow="À propos"
          intro="Une page pensée pour présenter la maison, ses repères de quartier et l'expérience proposée du matin jusqu'aux grandes occasions."
          title={`${business.name}, une adresse artisanale au coeur de ${business.city}`}
        />

        <div className="page-actions">
          <Link className="button button--primary" href="/#top">
            Retour à l&apos;accueil
          </Link>
          <a className="button button--ghost" href={business.phoneHref}>
            Appeler la boutique
          </a>
        </div>
      </section>

      <section className="section">
        <div className="house-layout">
          <figure className="house-figure">
            <div className="house-figure__media">
              <Image
                alt={houseFeature.alt}
                className="house-figure__image"
                fill
                placeholder="blur"
                preload
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

          <div className="content-stack">
            <article className="info-card info-card--accent">
              <p className="eyebrow">Repères utiles</p>
              <h2>Une vitrine locale claire avant même le premier passage en boutique.</h2>
              <div className="house-note-list">
                {houseNotes.map((note) => (
                  <article className="house-note" key={note.title}>
                    <strong>{note.title}</strong>
                    <p>{note.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="info-card">
              <p className="eyebrow">Présence locale</p>
              <h2>Des accès directs pour appeler, venir et vérifier la réputation locale.</h2>
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
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Rythme de la boutique"
          intro="La page raconte la boulangerie comme une journée vécue: petit déjeuner, déjeuner rapide et créations qui accompagnent les événements."
          title="Une lecture simple de l'offre et des moments clés"
        />

        <div className="moment-grid">
          {serviceMoments.map((moment) => (
            <article className="moment-card" key={moment.title}>
              <span>{moment.title}</span>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
