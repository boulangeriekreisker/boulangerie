import Link from "next/link";

import { business, navigation, utilityPages } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="eyebrow">Boulangerie artisanale</p>
          <h2 className="site-footer__title">{business.name}</h2>
          <p className="site-footer__copy">
            Une vitrine locale, gourmande et rapide, pensée pour transformer une visite mobile en
            appel, en itinéraire ou en passage en boutique.
          </p>
          <p className="site-footer__legal">
            {utilityPages.map((page, index) => (
              <span key={page.href}>
                {index > 0 ? " · " : ""}
                <Link href={page.href}>{page.label}</Link>
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="site-footer__heading">Navigation</p>
          <ul className="site-footer__list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Infos pratiques</p>
          <ul className="site-footer__list">
            <li>{business.addressLine}</li>
            <li>
              {business.postalCode} {business.city}
            </li>
            <li>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </li>
            <li>
              <a href={business.mapUrl} rel="noreferrer noopener" target="_blank">
                Ouvrir l&apos;itinéraire
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Réputation</p>
          <ul className="site-footer__list">
            <li>
              <a href={business.facebookUrl} rel="noreferrer noopener" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={business.tripadvisorUrl} rel="noreferrer noopener" target="_blank">
                TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
