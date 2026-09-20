/*∷YAY⟨C-b21b-17⟩
  unit: Gallery
  lang: jsx
  in: {}
  out: section element
  renders: yes
  pure: yes
  ensures: hasClass(out, "gallery") && findAll(out, "article").length >= 1
  intent: Renders the responsive grid of trip photo cards. Each card flips to reveal a descriptive caption. Light mode only.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-17⟩*/
import { FlipCard } from './FlipCard.jsx';

export function Gallery() {
  return (
    <section className="gallery" data-testid="gallery">
      <div className="gallery__grid">
        {TRIP_PHOTOS.map((p) => (
          <FlipCard
            key={p.id}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.description}
            alt={p.alt}
          />
        ))}
      </div>
    </section>
  );
}
