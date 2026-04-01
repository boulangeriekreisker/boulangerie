import type { Metadata } from "next";
import Link from "next/link";

import { SectionTitle } from "@/components/SectionTitle";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/politique-confidentialite",
  },
  openGraph: {
    images: ["/og-kreisker.svg"],
    url: "/politique-confidentialite",
  },
  title: "Politique de confidentialité",
  description: `Consultez les informations essentielles sur le traitement des données du formulaire de contact de ${business.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero section">
        <SectionTitle
          align="center"
          as="h1"
          eyebrow="Confidentialité"
          intro="Cette version couvre les informations essentielles du site et du formulaire de contact. Elle doit être relue avant toute mise en ligne définitive."
          title="Politique de confidentialité"
        />

        <div className="page-actions">
          <Link className="button button--primary" href="/contact">
            Aller au contact
          </Link>
          <Link className="button button--ghost" href="/">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="content-stack">
          <article className="info-card legal-card">
            <p className="eyebrow">Dernière mise à jour</p>
            <h2>1 avril 2026</h2>
            <p>
              Cette page décrit le fonctionnement du site {business.name} et le traitement des
              données transmises via le formulaire de contact.
            </p>
          </article>

          <article className="info-card legal-card">
            <p className="eyebrow">Données collectées</p>
            <h2>Les données strictement nécessaires à la prise de contact</h2>
            <ul className="checklist">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Contenu du message envoyé via le formulaire</li>
            </ul>
          </article>

          <article className="info-card legal-card">
            <p className="eyebrow">Finalité</p>
            <h2>Répondre aux demandes envoyées depuis le site</h2>
            <p>
              Les informations collectées servent uniquement à traiter les demandes de contact, à
              répondre aux questions et à assurer le suivi d&apos;un échange initié par l&apos;utilisateur.
            </p>
          </article>

          <article className="info-card legal-card">
            <p className="eyebrow">Traitement</p>
            <h2>Hébergement et acheminement</h2>
            <p>
              Le site est prévu pour être hébergé sur Vercel. Lorsque l&apos;envoi réel est activé,
              les messages du formulaire transitent via Postmark afin d&apos;être transmis à la
              boulangerie.
            </p>
          </article>

          <article className="info-card legal-card">
            <p className="eyebrow">Conservation</p>
            <h2>Durée limitée</h2>
            <p>
              Les messages sont destinés à une gestion opérationnelle simple. Ils ne doivent pas
              être conservés au-delà de la durée nécessaire au traitement de la demande et au suivi
              commercial raisonnable associé.
            </p>
          </article>

          <article className="info-card legal-card">
            <p className="eyebrow">Vos droits</p>
            <h2>Accès, rectification et suppression</h2>
            <p>
              Pour toute demande concernant les informations transmises, utilisez la page{" "}
              <Link className="text-link" href="/contact">
                contact
              </Link>{" "}
              ou appelez directement la boutique au {business.phoneDisplay}.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
