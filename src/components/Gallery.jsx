// Photo data for the Turkey 2026 trip. Hardcoded — no imports, no async.
// Each stop has: id, title, description (visible on flip), alt text, ISO date.
const TRIP_PHOTOS = [
  {
    id: 'p1',
    title: 'Soluppgång över Kapadokya',
    description:
      'En tidig morgon i Göreme. Ballongerna stiger i samlad formation över de röda klippformationerna.',
    alt: 'Ballonger som svävar över ett rödgult stenlandskap.',
    takenAt: '2026-04-12',
  },
  {
    id: 'p2',
    title: 'Blå moskén, Istanbul',
    description:
      'Sex minareter reser sig mot en färgskiftande himmel.',
    alt: 'En moské med flera minareter mot blå kvällshimmel.',
    takenAt: '2026-04-15',
  },
  {
    id: 'p3',
    title: 'Pamukkale — bomullsslottet',
    description:
      'De vita kalkterrasserna sett från ovan. Vattnet var kallare än jag trodde.',
    alt: 'Vita kalkformationer i terrasser med turkost vatten.',
    takenAt: '2026-04-18',
  },
  {
    id: 'p4',
    title: 'Efesos — biblioteket',
    description:
      'Celsusbibliotekets fasad står kvar efter nästan tvåtusen år.',
    alt: 'Antikt bibliotek med bevarade kolonner.',
    takenAt: '2026-04-20',
  },
  {
    id: 'p5',
    title: 'Bazaar i Istanbul',
    description:
      'Kryddorna doftade starkast i den östra hallen. Saffran i tre nyanser.',
    alt: 'Färgstarka kryddhögar i en marknadshall.',
    takenAt: '2026-04-22',
  },
  {
    id: 'p6',
    title: 'Antalya — Medelhavet',
    description:
      'Sista dagen. Vi badade vid Konyaalti-stranden.',
    alt: 'Klart turkost hav med klippor.',
    takenAt: '2026-04-26',
  },
  {
    id: 'p7',
    title: 'Kappadokien — underjordisk stad',
    description:
      'Åtta våningar under marken. Människor bodde här.',
    alt: 'Trång underjordisk gång med grottvalv.',
    takenAt: '2026-04-13',
  },
  {
    id: 'p8',
    title: 'Hattusa — hettitiska murar',
    description:
      'Huvudstaden i ett rike som glömdes i tusen år.',
    alt: 'Antika stenmurar med lejonfigurer.',
    takenAt: '2026-04-19',
  },
];

/*∷YAY⟨C-b21b-6⟩
  unit: Gallery
  lang: jsx
  in: props: { title: string }
  out: section element
  renders: yes
  pure: yes
  ensures: hasClass(out, "gallery") && findAll(out, "article").length >= 1
  intent: Renders a responsive grid of trip photo cards. Each card flips on click to reveal a descriptive caption.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-6⟩*/
export function Gallery({ title }) {
  return (
    <section className="gallery" data-testid="gallery">
      <h2 className="gallery__title">{title}</h2>
      <div className="gallery__grid">
        {TRIP_PHOTOS.map((p) => (
          <article key={p.id} className="flip-card" data-testid="flip-card">
            <h3 className="flip-card__title">{p.title}</h3>
            <p className="flip-card__description">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
