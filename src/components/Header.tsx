import Link from "next/link";

import { LiveBusinessStatusPill } from "@/components/LiveBusinessStatusPill";
import { business, navigation } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" href="/#top">
          <span className="brand-mark__crest">K</span>
          <span className="brand-mark__text">
            <strong>{business.name}</strong>
            <span>
              {business.city} · {business.region}
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="site-nav">
          {navigation.map((item) => (
            <a className="site-nav__link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LiveBusinessStatusPill />

          <a className="button button--primary button--compact" href={business.phoneHref}>
            Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
