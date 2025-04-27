# Kravspecifikation

## Funktionella Krav
- Responsiv design som anpassar layout till skärmstorlek (mobil, tablet, desktop)
- Interaktivt kontaktformulär med felvalidering och bekräftelsemeddelande
- Dynamisk kartintegration med Google Maps API
- Cookie-banner med tre valnivåer (funktionella, statistiska, marknadsföring)
- Automatisk bildkomprimering för optimerad laddningstid

## Tekniska Krav
### Prestanda
- Sidladdningstid < 2s enligt Google PageSpeed Insights
- Lazy loading för bilder under fold
- CDN för statiskt innehåll

### Säkerhet
- HTTPS med TLS 1.3
- CSP-headers för XSS-skydd
- Regelbundna säkerhetsscans med OWASP ZAP

## Integrationer
| Tjänst          | Syfte                       | API-nyckel |
|-----------------|-----------------------------|------------|
| Google Maps     | Kartvisning kontakt         | Ja         |
| Mailgun         | Formulärmeddelanden         | Ja         |
| Google Analytics| Användarstatistik           | Nej        |

## GDPR-efterlevnad
- Dataflödeskarta för personuppgifter
- Automatisk dataradering efter 24 månader
- Cookie-inställningar sparade i localStorage
- DSAR (Data Subject Access Request) portal

## Acceptanskriterier
1. W3C-validerad HTML5/CSS3
2. Cross-browser kompatibilitet (Chrome, Safari, Firefox)
3. WCAG 2.1 AA tillgänglighetsnivå
4. Load testing med 500 samtidiga användare
