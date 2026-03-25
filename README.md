# La Boulangerie du Kreisker

Site vitrine one-page en `Next.js`, pensé pour une présence locale forte, une performance très élevée et une maintenance simple.

## Stratégie retenue

- une seule page publique, servie en statique via CDN
- une ambiance éditoriale chaleureuse, artisanale et mobile-first
- une seule API serverless pour le formulaire de contact
- SEO local soigné avec `Bakery` schema.org, `robots.txt` et `sitemap.xml`

## Stack

- `Next.js 16`
- `React 19`
- hébergement cible `Vercel`
- protection et cache cible `Cloudflare`
- envoi email cible `Postmark`

## Ce qui est en place

- hero one-page avec ancrages `#gamme`, `#infos` et `#contact`
- section gamme avec trois familles produits
- horaires exacts intégrés : mardi à samedi `07:00-19:00`, dimanche `07:00-12:30`, lundi fermé
- carte Google Maps embarquée
- liens de réputation vers Facebook et TripAdvisor
- formulaire `POST /api/contact` prêt pour Postmark
- fallback de démonstration si les secrets email ne sont pas encore configurés

## Lancer le projet

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Variables d'environnement

Créer `.env.local` à partir de `.env.example` :

```bash
NEXT_PUBLIC_SITE_URL=https://boulangerie-du-kreisker.fr
POSTMARK_SERVER_TOKEN=postmark_server_token
CONTACT_TO_EMAIL=bonjour@boulangerie-du-kreisker.fr
CONTACT_FROM_EMAIL=site@boulangerie-du-kreisker.fr
```

## Données encore à brancher

- photos officielles du fournil, des pains, des viennoiseries et des pâtisseries
- logo officiel si différent de l'icône temporaire
- lien Facebook officiel à confirmer
- email réel de réception des messages

## Note

Le dossier local ne contenait pas encore les visuels et liens officiels annoncés. Les informations pratiques de cette version ont donc été préremplies à partir de votre capture et de sources publiques consultées le 25 mars 2026. Elles doivent être validées avant mise en production.
