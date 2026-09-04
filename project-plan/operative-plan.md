# Piano operativo — Graduation Gallery

## 0. Regole non negoziabili

Prima di scrivere codice, la coding agent deve rispettare:

- Mobile-first, target principale **360–430 px**.
- Sito leggero e veloce.
- Animazioni **sottili, brevi e funzionali**.
- Nessuna animazione vistosa o continua.
- Nessun effetto parallax pesante.
- Nessuna libreria aggiunta senza reale necessità.
- Le fotografie sono il contenuto principale.
- Il tema medico deve rimanere un **linguaggio visivo secondario**.
- Non usare emoji nell'interfaccia; usare icone/grafica coerente.
- Non inventare sezioni o funzionalità non previste.
- Mantenere la palette e la tipografia definite nella style guide.
- Prima di modificare codice, analizzare i file esistenti e riutilizzare ciò che è valido.

---

# 1. Analisi iniziale

La agent deve prima analizzare:

```text
visual_identity_graduation_gallery.md
index.html
styles.css
README.md
```

L'attuale prototipo contiene già:

```text
Hero
Prescription
Dedication
Gallery
External Album
Footer
```



### Task

- Identificare cosa può essere riutilizzato.
- Individuare codice ridondante.
- Individuare elementi placeholder.
- Non effettuare ancora redesign arbitrari.
- Creare un breve report tecnico prima dell'implementazione.

### Done quando

La agent ha una chiara mappa di:

```text
cosa mantenere
cosa rifattorizzare
cosa eliminare
cosa implementare
```

---

# 2. Setup tecnico

Portare il progetto a:

```text
Next.js
TypeScript
CSS Modules
next/image
```

Struttura:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── page.module.css
│
├── components/
│   ├── Hero/
│   ├── Prescription/
│   ├── Dedication/
│   ├── Gallery/
│   ├── Lightbox/
│   ├── Album/
│   └── Footer/
│
├── data/
│   └── gallery.ts
│
└── styles/
    └── variables.css

public/
├── images/
└── ...
```

La agent deve evitare un'architettura eccessivamente astratta per un progetto così piccolo.

**No:**

```text
hooks/
utils/
services/
providers/
contexts/
```

se non servono realmente.

---

# 3. Design system

Creare un piccolo design system centralizzato.

### Colori

Basarsi sulla palette della style guide:

```text
Prescription Red
#D73530

Paper / Ivory
#F8F3E9

Ink Black
#171513

Muted Ink
#777069

Soft Prescription Red
#E9A19B
```



Usare indicativamente:

```text
75% Ivory
15% Ink
8% Red
2% Soft Red
```



### Typography

```text
Roboto Condensed
→ titoli / label / CTA

Courier Prime
→ body / date / microcopy / dettagli

Signature font
→ esclusivamente firma
```



### Spacing

Definire token per:

```text
xs
sm
md
lg
xl
section
```

senza creare un design system enorme.

---

# 4. Hero

Implementare l'hero come prima esperienza.

Contenuti:

```text
CADUCEO

LAUREA IN MEDICINA
E CHIRURGIA

MARIAGRAZIA

29 · 09 · 26

Un giorno speciale,
da ricordare insieme.

SFOGLIA I RICORDI ↓
```

La struttura è coerente con la specifica originale.

### Design

- molto spazio negativo
- bordo sottile
- rosso predominante nei titoli
- niente effetto "pagina web generica"
- evitare di trasformare tutto in una ricetta

### Animazione entrance

Sequenza:

```text
hero container
↓
caduceo
↓
eyebrow
↓
titolo
↓
nome/data
↓
intro
↓
CTA
```

Animazioni:

```text
opacity
translateY
leggerissimo scale
```

Durata indicativa:

```text
400–700ms
```

Stagger molto contenuto.

**Nessun looping.**

---

# 5. Scroll experience

Implementare una navigazione verticale fluida.

La CTA:

```text
SFOGLIA I RICORDI
```

deve portare alla gallery.

Usare il comportamento nativo di smooth scrolling o una soluzione CSS; **non introdurre Lenis/GSAP solo per questo**.

---

# 6. Prescription

Mantenere il concetto attuale:

```text
PRESCRIZIONE

R/ VINUM ROSATUM 750 ML

Trattamento...
```

La struttura esiste già nel prototipo.

### Obiettivo

Deve sembrare un **artefatto editoriale**, non una card da dashboard.

### Animazione

Al viewport:

```text
border/line → reveal
R/ → fade
contenuto → fade + translate
firma → reveal finale
```

Durata breve.

---

# 7. Dedication

Mantenere una sezione molto ariosa:

```text
INDICAZIONI TERAPEUTICHE

Grazie per esserci stati.

I traguardi più belli sono quelli
che possiamo condividere.
```

Il contenuto di base è già presente nel progetto.

### Animazione

Una sola:

```text
opacity + translateY
```

Niente effetti sul testo.

---

# 8. Gallery

Questa è la priorità principale.

Titolo:

```text
ARCHIVIO RICORDI
```

Microcopy:

```text
Prescrizione digitale · consultazione illimitata
```

La style guide richiede fotografie grandi, layout editoriale/masonry, alternanza e molto spazio.

### Implementazione

Le immagini devono essere gestite tramite dati:

```ts
type GalleryImage = {
  src: string
  alt: string
}
```

e:

```ts
export const gallery: GalleryImage[] = [...]
```

Non hardcodare ogni immagine dentro JSX.

### Desktop

Layout editoriale/masonry.

### Mobile

Layout semplificato e leggibile.

Non forzare una masonry complessa se compromette:

- performance
- ordine delle immagini
- altezza
- leggibilità

---

# 9. Image optimization

Questa fase è **obbligatoria**.

Usare:

```tsx
<Image />
```

invece di `<img>`.

Implementare:

- lazy loading
- dimensioni corrette
- responsive sizes
- formati moderni
- placeholder quando utile

La prima immagine above-the-fold può essere caricata con priorità.

Non caricare 30 fotografie enormi al primo render.

---

# 10. Gallery reveal animations

Quando le fotografie entrano nel viewport:

```text
opacity: 0 → 1
translateY: 16–24px → 0
scale: 0.98 → 1
```

Durata:

```text
400–600ms
```

Stagger leggerissimo.

L'effetto deve sembrare **editoriale**, non una presentazione PowerPoint.

### Hover desktop

Solo:

```text
scale(1.015–1.02)
```

eventualmente con una piccola variazione di luminosità.

Niente:

- overlay rosso
- zoom enorme
- testo sopra la foto
- box-shadow pesanti

La guida richiede esplicitamente di mantenere le fotografie nei loro colori originali e di evitare overlay/ombre marcate.

---

# 11. Lightbox

Click/tap su fotografia:

```text
open
↓
fullscreen
↓
immagine
```

Funzionalità:

### Desktop

- previous
- next
- ESC
- click outside per chiudere

### Mobile

- swipe left/right
- close
- previous/next opzionali

La specifica richiede fullscreen, navigazione e swipe mobile.

### Animazione

```text
overlay opacity
image opacity
image scale .96 → 1
```

Circa:

```text
200–350ms
```



---

# 12. Microcopy

Aggiungere piccoli riferimenti alla prescrizione:

```text
PRESCRIZIONE DIGITALE
VALIDITÀ: ILLIMITATA
SCANSIONARE AL BISOGNO
CONSULTAZIONE ILLIMITATA
EFFETTI ATTESI: NOSTALGIA E BEI RICORDI
```

ma solo come **micro-detail**.

La guida specifica esplicitamente di non trasformare queste battute nel contenuto principale.

---

# 13. Easter eggs

Massimo 2–3.

Possibili:

```text
P ☒
```

dove:

```text
P = PROSECCO
```

oppure piccoli dettagli `U B D P`.

Questa reinterpretazione è prevista nella visual identity.

---

# 14. Album completo

Trasformare l'attuale sezione placeholder in una CTA secondaria.

Il link `example.com` deve sparire.

Layout:

```text
TUTTE LE FOTO DELLA GIORNATA

L'archivio completo della giornata.

[ APRI L'ALBUM ]
```

Il link reale sarà configurabile facilmente in un unico punto.

---

# 15. Footer

Minimal:

```text
29 · 09 · 2026

Dott.ssa Mariagrazia Mottola

PRESCRIZIONE DIGITALE
VALIDITÀ ILLIMITATA
```

Eventuale:

```text
barcode
```

o piccolo caduceo.

La style guide prevede esattamente questo approccio minimale.

---

# 16. Responsive pass

Dopo aver completato desktop + mobile, fare un pass dedicato.

Test minimo:

```text
360 × 800
375 × 812
390 × 844
412 × 915
430 × 932
768 × 1024
1440 × 900
```

Controllare:

- Hero
- titolo
- date code
- CTA
- prescription
- gallery
- lightbox
- footer
- overflow orizzontale

La priorità rimane smartphone.

---

# 17. Accessibility

Implementare:

- semantic HTML
- `alt` appropriati
- focus states
- keyboard navigation
- `aria-label`
- dialog accessibile per lightbox
- ESC
- focus management
- contrasto sufficiente

### Reduced motion

Obbligatorio:

```css
@media (prefers-reduced-motion: reduce)
```

Disabilitare/ridurre tutte le animazioni non necessarie.

---

# 18. Performance pass

Obiettivo:

**Sito visivamente ricco, tecnicamente leggerissimo.**

Controllare:

- Lighthouse
- bundle JS
- immagini
- font
- CLS
- LCP
- lazy loading
- hydration inutile

Regola:

> Se un effetto richiede una libreria pesante e non migliora realmente l'esperienza, eliminarlo.

---

# 19. SEO + Privacy

Metadata:

```text
title
description
favicon
OG image
theme-color
```

Mantenere:

```html
noindex
nofollow
noarchive
```

Il prototipo lo contiene già.

Importante: `noindex` **non significa privacy**. Chi possiede il link può comunque visitare il sito.

Quindi non presentare mai il sito come "privato" se è semplicemente pubblicato online.

---

# 20. Content finalization

Prima del deploy:

- sostituire tutte le foto placeholder
- scrivere `alt` reali
- inserire URL album reale
- controllare nome e data
- controllare firma
- controllare microcopy
- eliminare tutti i placeholder
- eliminare commenti inutili
- verificare che non rimanga `example.com`

---

# 21. Final polish

Questa fase **non deve aggiungere funzionalità**.

Serve solamente a sistemare:

- 1–2 px di spacing
- allineamenti
- dimensioni font
- line-height
- bordi
- transizioni
- dimensioni immagini
- ritmo verticale
- consistenza dei colori
- comportamento hover/tap

È qui che bisogna spendere tempo.

---

# 22. QA finale

Checklist:

### Design

- [ ] Identità 70/30 rispettata
- [ ] palette corretta
- [ ] typography corretta
- [ ] niente elementi troppo pesanti
- [ ] fotografia protagonista
- [ ] medical references dosati

### Animazioni

- [ ] Hero entrance
- [ ] section reveal
- [ ] gallery reveal
- [ ] lightbox
- [ ] hover
- [ ] reduced motion
- [ ] nessuna animazione infinita inutile

### UX

- [ ] CTA funzionante
- [ ] scroll
- [ ] gallery
- [ ] lightbox
- [ ] swipe
- [ ] ESC
- [ ] keyboard

### Technical

- [ ] build passa
- [ ] TypeScript passa
- [ ] nessun errore console
- [ ] nessun broken image
- [ ] nessun link placeholder
- [ ] nessun overflow
- [ ] Lighthouse controllato

### Mobile

- [ ] 360px
- [ ] 375px
- [ ] 390px
- [ ] 412px
- [ ] 430px

### Deploy

- [ ] produzione
- [ ] URL finale
- [ ] HTTPS
- [ ] QR code
- [ ] test QR da smartphone
- [ ] test rete mobile

---

# Regola finale per la coding agent

La agent deve lavorare **per fasi**, non generare tutto in una volta.

```text
ANALYZE
  ↓
SETUP
  ↓
DESIGN SYSTEM
  ↓
HERO
  ↓
PRESCRIPTION
  ↓
DEDICATION
  ↓
GALLERY
  ↓
LIGHTBOX
  ↓
ALBUM
  ↓
FOOTER
  ↓
ANIMATIONS
  ↓
RESPONSIVE
  ↓
ACCESSIBILITY
  ↓
PERFORMANCE
  ↓
SEO / PRIVACY
  ↓
CONTENT
  ↓
POLISH
  ↓
QA
  ↓
DEPLOY
```

**Dopo ogni fase deve verificare che il progetto compili e che ciò che è già funzionante non venga rotto.**

Il risultato finale non deve sembrare una demo tecnica di Next.js: deve sembrare **una piccola esperienza digitale fatta appositamente per quella giornata**, con le fotografie al centro e la ricetta medica come dettaglio ricorrente. Questo è il punto più importante dell'intero progetto.