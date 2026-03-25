import { getBusinessStatus } from "@/lib/opening-hours";
import { business, navigation } from "@/lib/site-data";

export function Header() {
  const status = getBusinessStatus();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-mark" href="#top">
          <span className="brand-mark__crest">K</span>
          <span className="brand-mark__text">
            <strong>{business.name}</strong>
            <span>
              {business.city} · {business.region}
            </span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="site-nav">
          {navigation.map((item) => (
            <a className="site-nav__link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className={`status-pill ${status.isOpen ? "status-pill--open" : ""}`}>
            <span>{status.label}</span>
            <small>{status.detail}</small>
          </div>

          <a className="button button--primary button--compact" href={business.phoneHref}>
            Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
