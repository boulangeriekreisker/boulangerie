import { business, navigation } from "@/lib/site-data";

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
              <a href={business.mapUrl} rel="noreferrer" target="_blank">
                Ouvrir l&apos;itinéraire
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Réputation</p>
          <ul className="site-footer__list">
            <li>
              <a href={business.facebookUrl} rel="noreferrer" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={business.tripadvisorUrl} rel="noreferrer" target="_blank">
                TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
