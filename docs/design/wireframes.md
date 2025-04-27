# Wireframes

## Startsida
```mermaid
graph TD
    A[Header] --> B[Hero-sektion med CTA]
    B --> C[Tjänsteöversikt]
    C --> D[Kundcase]
    D --> E[Footer]
    
    style A fill:#2A4365,color:#fff
    style B fill:#C6D7B9
    style C fill:#f5f5f5
    style D fill:#ffffff
    style E fill:#2A4365,color:#fff
```
**Key components:**
- Responsiv navigeringsmeny med dropdown
- Hero-sektion med huvudbudskap (h1 + kort beskrivning)
- 3-kolumns tjänsteöversikt med ikoner
- Kundcitat-carousel
- Footer med kontaktinfo och snabblänkar

## Tjänstersida
```mermaid
graph LR
    A[Filterbar] --> B[Tjänstkategorier]
    B --> C[Detaljerad beskrivning]
    C --> D[Relaterade tjänster]
    
    style A fill:#f8f9fa
    style B fill:#ffffff
    style C fill:#C6D7B9
    style D fill:#f5f5f5
```
**Funktionalitet:**
- Interaktivt filter för tjänstkategorier
- Expandable panels för detaljinformation
- Hover-effekter på tjänstkort
- Progressivt inladdade bilder

## Kontaktsida
```mermaid
graph BT
    A[Kartintegration] --> B[Kontaktformulär]
    B --> C[Kontaktinformation]
    C --> D[Sociala medier]
    
    style A fill:#ffffff
    style B fill:#f5f5f5
    style C fill:#C6D7B9
    style D fill:#2A4365,color:#fff
```
**Integreringar:**
- Google Maps API med markörer
- Formulär med reCAPTCHA-validering
- Dynamisk adressvisning baserat på geolokalisering
- Social media ikoner med hover-transition
