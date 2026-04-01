import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero section">
      <div className="info-card info-card--wide info-card--centered">
        <p className="eyebrow">404</p>
        <h1>Cette page n&apos;existe pas encore.</h1>
        <p>
          La structure du site continue d&apos;évoluer. Revenez à l&apos;accueil pour retrouver les
          accès principaux.
        </p>
        <div className="page-actions">
          <Link className="button button--primary" href="/">
            Retour à l&apos;accueil
          </Link>
          <Link className="button button--ghost" href="/contact">
            Contacter la boutique
          </Link>
        </div>
      </div>
    </section>
  );
}
